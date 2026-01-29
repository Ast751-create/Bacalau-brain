// ==================== CONFIG ====================
const CONFIG = {
    WORDS_PER_SESSION: 20,
    CHOICES_COUNT: 4,
    NEW_WORD_INTERVAL: 1,
    EASY_MULTIPLIER: 2.5,
    HARD_MULTIPLIER: 0.5,
    AUTO_ADVANCE_DELAY: 5 // секунд
};

// ==================== SAFARI STORAGE FIX ====================
// Safari в приватном режиме может блокировать localStorage
const safeStorage = {
    getItem: (key) => {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('localStorage недоступен:', e);
            return null;
        }
    },
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn('localStorage недоступен:', e);
        }
    },
    removeItem: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('localStorage недоступен:', e);
        }
    }
};

// ==================== SOUND EFFECTS ====================
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playSound(type) {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        // Приятный восходящий звук
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.4);
    } else if (type === 'wrong') {
        // Низкий гудок
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        oscillator.type = 'sawtooth';
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

// ==================== CONFETTI ====================
function createConfetti() {
    const container = document.body;
    const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
            z-index: 9999;
            animation: confetti-fall ${Math.random() * 2 + 2}s linear forwards;
        `;
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Добавляем CSS для анимации конфетти
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
@keyframes confetti-fall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(confettiStyle);

// ==================== SETTINGS ====================
function getSettings() {
    const defaults = {
        openaiKey: '',
        autoAdvance: true,
        autoAdvanceDelay: 5
    };
    
    const stored = safeStorage.getItem('pt-trainer-settings');
    if (stored) {
        const parsed = JSON.parse(stored);
        // Мержим с дефолтами чтобы новые настройки работали
        return { ...defaults, ...parsed };
    }
    return defaults;
}

function saveSettings(settings) {
    safeStorage.setItem('pt-trainer-settings', JSON.stringify(settings));
}

// ==================== WORD LISTS ====================
function getWordLists() {
    const stored = safeStorage.getItem('pt-trainer-lists');
    return stored ? JSON.parse(stored) : {};
}

function saveWordLists(lists) {
    safeStorage.setItem('pt-trainer-lists', JSON.stringify(lists));
}

function getCurrentListId() {
    return safeStorage.getItem('pt-trainer-current-list') || 'default';
}

function setCurrentListId(id) {
    safeStorage.setItem('pt-trainer-current-list', id);
}

function getCurrentVocabulary() {
    const listId = getCurrentListId();
    if (listId === 'default') {
        return VOCABULARY;
    }
    // Check themed lists first
    if (typeof THEMED_LISTS !== 'undefined' && THEMED_LISTS[listId]) {
        return THEMED_LISTS[listId].words;
    }
    // Then check user lists
    const lists = getWordLists();
    return lists[listId]?.words || VOCABULARY;
}

function createWordList(name, wordsText) {
    const lists = getWordLists();
    const id = 'list_' + Date.now();
    
    // Поддерживаем все виды тире: - – —
    const dashRegex = /[-–—]/;
    const splitRegex = /\s*[-–—]\s*/;
    
    const words = wordsText.split('\n')
        .map(line => line.trim())
        .filter(line => line && dashRegex.test(line))
        .map(line => {
            const parts = line.split(splitRegex);
            const pt = parts[0]?.trim();
            const ru = parts.slice(1).join('-').trim();
            console.log('Parsing line:', line, '→', pt, '/', ru); // debug
            return {
                pt: pt || '',
                ru: ru || '',
                imageQuery: ru || '',
                soundHint: ''
            };
        })
        .filter(w => w.pt && w.ru);
    
    console.log('Creating list with', words.length, 'words'); // debug
    
    if (words.length === 0) {
        return null; // не создаём пустой список
    }
    
    lists[id] = { name, words, created: Date.now() };
    saveWordLists(lists);
    return id;
}

function updateWordList(id, name, wordsText) {
    const lists = getWordLists();
    if (!lists[id]) return;
    
    const dashRegex = /[-–—]/;
    const splitRegex = /\s*[-–—]\s*/;
    
    const words = wordsText.split('\n')
        .map(line => line.trim())
        .filter(line => line && dashRegex.test(line))
        .map(line => {
            const parts = line.split(splitRegex);
            const pt = parts[0]?.trim();
            const ru = parts.slice(1).join('-').trim();
            return {
                pt: pt || '',
                ru: ru || '',
                imageQuery: ru || '',
                soundHint: ''
            };
        })
        .filter(w => w.pt && w.ru);
    
    lists[id].name = name;
    lists[id].words = words;
    saveWordLists(lists);
}

function deleteWordList(id) {
    const lists = getWordLists();
    delete lists[id];
    saveWordLists(lists);
    
    if (getCurrentListId() === id) {
        setCurrentListId('default');
    }
}

// ==================== OPENAI INTEGRATION ====================
async function generateMnemonic(word) {
    const settings = getSettings();
    if (!settings.openaiKey) {
        throw new Error('OpenAI API key не установлен');
    }

    const prompt = `Создай мнемонику для запоминания португальского слова методом ключевого слова.

Слово: "${word.pt}"
Перевод: "${word.ru}"

МЕТОД:
1. Найди русское слово, которое ЗВУЧИТ похоже на португальское
2. Создай АБСУРДНУЮ сцену, где это слово ВЗАИМОДЕЙСТВУЕТ со значением
3. Добавь ДЕЙСТВИЕ, ЭМОЦИЮ или ШОКОВЫЙ элемент

ПРАВИЛА:
- Сцена должна быть ДИНАМИЧНОЙ (что-то происходит)
- Чем БЕЗУМНЕЕ и СМЕШНЕЕ — тем лучше
- Используй конкретные предметы, людей, животных
- Максимум 15 слов
- Формат: только мнемоника, без пояснений

ПРИМЕРЫ ХОРОШИХ МНЕМОНИК:
- "furacão" (ураган) → "ФУРА попала в ураган и летит по небу как птица"
- "abelha" (пчела) → "АБЕЛЬ орёт — его ПЧЕЛА ужалила прямо в нос!"
- "queimar" (жечь) → "КАЙМАК пригорел — КУХНЯ В ОГНЕ, все бегут!"
- "escorregar" (поскользнуться) → "ЭСКОРТ в вечернем платье ПОСКОЛЬЗНУЛАСЬ на банане — позор!"`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${settings.openaiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 50,
                temperature: 0.8
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'API error');
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Mnemonic generation error:', error);
        throw error;
    }
}

async function generateAllMnemonics() {
    const settings = getSettings();
    if (!settings.openaiKey) {
        alert('Сначала добавь OpenAI API key в настройках');
        return;
    }

    const statusEl = document.getElementById('mnemonic-status');
    const mnemonics = getMnemonicsStorage();
    const vocab = getCurrentVocabulary();
    let generated = 0;
    let errors = 0;

    for (let i = 0; i < vocab.length; i++) {
        const word = vocab[i];
        
        if (mnemonics[word.pt] || word.mnemonic) {
            continue;
        }

        statusEl.textContent = `Генерирую ${i + 1}/${vocab.length}...`;

        try {
            const mnemonic = await generateMnemonic(word);
            mnemonics[word.pt] = mnemonic;
            saveMnemonicsStorage(mnemonics);
            generated++;
            await new Promise(r => setTimeout(r, 500));
        } catch (error) {
            errors++;
            console.error(`Error for ${word.pt}:`, error);
        }
    }

    statusEl.textContent = `Готово! Создано: ${generated}, ошибок: ${errors}`;
}

// Generate mnemonics for a specific word list
async function generateMnemonicsForList(words, statusCallback) {
    const settings = getSettings();
    if (!settings.openaiKey) {
        return { generated: 0, errors: 0, skipped: words.length, noKey: true };
    }

    const mnemonics = getMnemonicsStorage();
    let generated = 0;
    let errors = 0;
    let skipped = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        // Skip if already has mnemonic
        if (mnemonics[word.pt] || word.soundHint) {
            skipped++;
            continue;
        }

        if (statusCallback) {
            statusCallback(`Генерирую мнемоники: ${i + 1}/${words.length}...`);
        }

        try {
            const mnemonic = await generateMnemonic(word);
            mnemonics[word.pt] = mnemonic;
            saveMnemonicsStorage(mnemonics);
            generated++;
            // Small delay to avoid rate limiting
            await new Promise(r => setTimeout(r, 300));
        } catch (error) {
            errors++;
            console.error(`Error generating mnemonic for ${word.pt}:`, error);
        }
    }

    return { generated, errors, skipped };
}

function getMnemonicsStorage() {
    const stored = safeStorage.getItem('pt-trainer-mnemonics');
    return stored ? JSON.parse(stored) : {};
}

function saveMnemonicsStorage(mnemonics) {
    safeStorage.setItem('pt-trainer-mnemonics', JSON.stringify(mnemonics));
}

function getMnemonic(word) {
    const mnemonics = getMnemonicsStorage();
    return mnemonics[word.pt] || word.mnemonic || word.soundHint || null;
}

// ==================== TEXT-TO-SPEECH ====================
let ptPTVoice = null;

function initTTS() {
    const loadVoices = () => {
        const voices = speechSynthesis.getVoices();
        ptPTVoice = voices.find(v => v.lang === 'pt-PT') ||
                    voices.find(v => v.lang.startsWith('pt-PT')) ||
                    voices.find(v => v.lang === 'pt' && !v.name.toLowerCase().includes('brazil')) ||
                    voices.find(v => v.lang.startsWith('pt') && !v.name.toLowerCase().includes('brazil'));
        
        if (ptPTVoice) {
            console.log('TTS voice:', ptPTVoice.name, ptPTVoice.lang);
        }
    };
    
    if (speechSynthesis.getVoices().length > 0) {
        loadVoices();
    }
    speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text) {
    if (!text) return;
    
    // Safari fix: иногда speechSynthesis зависает, нужен cancel
    try {
        speechSynthesis.cancel();
    } catch (e) {
        console.warn('speechSynthesis.cancel() failed:', e);
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (ptPTVoice) {
        utterance.voice = ptPTVoice;
    }
    utterance.lang = 'pt-PT';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    // Safari fix: задержка для стабильности
    setTimeout(() => {
        try {
            speechSynthesis.speak(utterance);
        } catch (e) {
            console.warn('speechSynthesis.speak() failed:', e);
        }
    }, 10);
}

// ==================== STATE ====================
let state = {
    mode: 'pt-ru',
    currentSession: [],
    currentIndex: 0,
    sessionCorrect: 0,
    sessionWrong: 0,
    streak: 0,
    todayCount: 0,
    history: [], // для кнопки "назад"
    autoAdvanceTimer: null
};

// ==================== DOM ELEMENTS ====================
const elements = {
    statLearned: document.querySelector('#stat-learned strong'),
    statStreak: document.querySelector('#stat-streak strong'),
    statToday: document.querySelector('#stat-today strong'),
    
    startScreen: document.getElementById('start-screen'),
    cardScreen: document.getElementById('card-screen'),
    resultsScreen: document.getElementById('results-screen'),
    
    totalWords: document.getElementById('total-words'),
    dueWords: document.getElementById('due-words'),
    currentListName: document.getElementById('current-list-name'),
    startBtn: document.getElementById('start-btn'),
    
    card: document.getElementById('card'),
    cardImage: document.getElementById('card-image'),
    cardWord: document.getElementById('card-word'),
    cardMnemonic: document.getElementById('card-mnemonic'),
    choices: document.getElementById('choices'),
    feedback: document.getElementById('feedback'),
    nextBtn: document.getElementById('next-btn'),
    prevBtn: document.getElementById('prev-btn'),
    timerBar: document.getElementById('timer-bar'),
    
    resultCorrect: document.getElementById('result-correct'),
    resultWrong: document.getElementById('result-wrong'),
    resultAccuracy: document.getElementById('result-accuracy'),
    restartBtn: document.getElementById('restart-btn'),
    
    progressContainer: document.getElementById('progress-container'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    
    modeNav: document.getElementById('mode-nav'),
    modeBtns: document.querySelectorAll('.mode-btn'),
    
    // Sidebar
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebar-toggle'),
    menuBtn: document.getElementById('menu-btn'),
    wordLists: document.getElementById('word-lists'),
    createListBtn: document.getElementById('create-list-btn')
};

// ==================== STORAGE ====================
function getProgress() {
    const stored = safeStorage.getItem('pt-trainer-progress');
    return stored ? JSON.parse(stored) : {};
}

function saveProgress(progress) {
    safeStorage.setItem('pt-trainer-progress', JSON.stringify(progress));
}

function getWordProgress(word) {
    const progress = getProgress();
    const key = word.pt;
    
    if (!progress[key]) {
        progress[key] = {
            correct: 0,
            wrong: 0,
            nextReview: new Date().toISOString().split('T')[0],
            interval: CONFIG.NEW_WORD_INTERVAL,
            easeFactor: 2.5
        };
        saveProgress(progress);
    }
    
    return progress[key];
}

function updateWordProgress(word, isCorrect) {
    const progress = getProgress();
    const key = word.pt;
    const wordProgress = progress[key] || {
        correct: 0,
        wrong: 0,
        interval: CONFIG.NEW_WORD_INTERVAL,
        easeFactor: 2.5
    };
    
    if (isCorrect) {
        wordProgress.correct++;
        wordProgress.interval = Math.round(wordProgress.interval * wordProgress.easeFactor);
        wordProgress.easeFactor = Math.min(3, wordProgress.easeFactor + 0.1);
    } else {
        wordProgress.wrong++;
        wordProgress.interval = 1;
        wordProgress.easeFactor = Math.max(1.3, wordProgress.easeFactor - 0.2);
    }
    
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + wordProgress.interval);
    wordProgress.nextReview = nextDate.toISOString().split('T')[0];
    
    progress[key] = wordProgress;
    saveProgress(progress);
}

function getTodayStats() {
    const stored = safeStorage.getItem('pt-trainer-today');
    const today = new Date().toISOString().split('T')[0];
    
    if (stored) {
        const data = JSON.parse(stored);
        if (data.date === today) {
            return data;
        }
    }
    
    return { date: today, count: 0, streak: 0 };
}

function saveTodayStats(count, streak) {
    const today = new Date().toISOString().split('T')[0];
    safeStorage.setItem('pt-trainer-today', JSON.stringify({
        date: today,
        count: count,
        streak: streak
    }));
}

// ==================== WORD SELECTION ====================
function getDueWords() {
    const today = new Date().toISOString().split('T')[0];
    const vocab = getCurrentVocabulary();
    
    return vocab.filter(word => {
        const progress = getWordProgress(word);
        return progress.nextReview <= today;
    });
}

function getLearnedCount() {
    const progress = getProgress();
    return Object.values(progress).filter(p => p.correct > 0).length;
}

function selectSessionWords() {
    const dueWords = getDueWords();
    
    dueWords.sort((a, b) => {
        const pA = getWordProgress(a);
        const pB = getWordProgress(b);
        const errorRatioA = pA.wrong / (pA.correct + pA.wrong + 1);
        const errorRatioB = pB.wrong / (pB.correct + pB.wrong + 1);
        return errorRatioB - errorRatioA;
    });
    
    return dueWords.slice(0, CONFIG.WORDS_PER_SESSION);
}

// ==================== IMAGE LOADING ====================
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

async function loadImage(word) {
    if (word.imageUrl) {
        return word.imageUrl;
    }
    const seed = hashCode(word.pt);
    return `https://picsum.photos/seed/${seed}/400/200`;
}

// ==================== GAME LOGIC ====================
function generateChoices(correctWord) {
    const choices = [correctWord];
    const vocab = getCurrentVocabulary();
    const otherWords = vocab.filter(w => w.pt !== correctWord.pt);
    const shuffled = otherWords.sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < CONFIG.CHOICES_COUNT - 1 && i < shuffled.length; i++) {
        choices.push(shuffled[i]);
    }
    
    return choices.sort(() => Math.random() - 0.5);
}

function getDisplayText(word, type) {
    if (type === 'question') {
        switch (state.mode) {
            case 'pt-ru': return word.pt;
            case 'ru-pt': return word.ru;
        }
    } else {
        switch (state.mode) {
            case 'pt-ru': return word.ru;
            case 'ru-pt': return word.pt;
        }
    }
}

async function showCard() {
    const word = state.currentSession[state.currentIndex];
    const choices = generateChoices(word);
    
    // Сбрасываем таймер
    clearAutoAdvanceTimer();
    
    const questionText = getDisplayText(word, 'question');
    elements.cardWord.textContent = questionText || '🖼️';
    
    // Подсказка
    const hintBtn = document.getElementById('hint-btn');
    const mnemonic = getMnemonic(word);
    
    elements.cardMnemonic.classList.add('hidden');
    elements.cardMnemonic.classList.remove('revealed');
    
    if (mnemonic) {
        elements.cardMnemonic.textContent = `💡 ${mnemonic}`;
        hintBtn.classList.remove('hidden');
        hintBtn.onclick = () => {
            elements.cardMnemonic.classList.remove('hidden');
            elements.cardMnemonic.classList.add('revealed');
            hintBtn.classList.add('hidden');
        };
    } else {
        hintBtn.classList.add('hidden');
    }
    
    // Картинка
    elements.cardImage.innerHTML = '<div class="image-placeholder">Загрузка...</div>';
    const imageUrl = await loadImage(word);
    elements.cardImage.innerHTML = `
        <img src="${imageUrl}" alt="${word.pt}" onerror="this.parentElement.innerHTML='<div class=\\'image-placeholder\\'>🖼️</div>'">
        <button class="speak-btn" id="speak-btn" title="Произнести">🔊</button>
    `;
    
    const speakBtn = document.getElementById('speak-btn');
    if (speakBtn) {
        speakBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            speak(word.pt);
        });
    }
    
    if (state.mode === 'pt-ru') {
        setTimeout(() => speak(word.pt), 300);
    }
    
    // Варианты ответов
    elements.choices.innerHTML = '';
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = getDisplayText(choice, 'answer');
        btn.dataset.correct = choice.pt === word.pt;
        btn.addEventListener('click', () => handleChoice(btn, word));
        elements.choices.appendChild(btn);
    });
    
    elements.feedback.classList.add('hidden');
    
    // Кнопка "назад"
    elements.prevBtn.disabled = state.history.length === 0;
    
    updateProgressBar();
}

function handleChoice(btn, correctWord) {
    const isCorrect = btn.dataset.correct === 'true';
    const buttons = elements.choices.querySelectorAll('.choice-btn');
    
    buttons.forEach(b => {
        b.disabled = true;
        if (b.dataset.correct === 'true') {
            b.classList.add('correct');
        }
    });
    
    // Сохраняем в историю для кнопки "назад"
    state.history.push({
        index: state.currentIndex,
        word: correctWord,
        wasCorrect: isCorrect
    });
    
    if (isCorrect) {
        btn.classList.add('correct');
        elements.card.classList.add('pulse');
        state.sessionCorrect++;
        state.streak++;
        elements.feedback.className = 'feedback success';
        elements.feedback.querySelector('.feedback-text').textContent = 'Правильно! 🎉';
        
        // Звук и конфетти
        playSound('correct');
        createConfetti();
        
        speak(correctWord.pt);
    } else {
        btn.classList.add('wrong');
        elements.card.classList.add('shake');
        state.sessionWrong++;
        state.streak = 0;
        elements.feedback.className = 'feedback error';
        elements.feedback.querySelector('.feedback-text').textContent = `Правильный ответ: ${getDisplayText(correctWord, 'answer')}`;
        
        // Звук ошибки
        playSound('wrong');
        
        setTimeout(() => speak(correctWord.pt), 500);
    }
    
    // Мнемоника
    const hintBtn = document.getElementById('hint-btn');
    hintBtn.classList.add('hidden');
    
    const mnemonic = getMnemonic(correctWord);
    if (mnemonic && elements.cardMnemonic.classList.contains('hidden')) {
        elements.cardMnemonic.textContent = `💡 ${mnemonic}`;
        elements.cardMnemonic.classList.remove('hidden');
        elements.cardMnemonic.classList.add('revealed');
    }
    
    updateWordProgress(correctWord, isCorrect);
    
    state.todayCount++;
    saveTodayStats(state.todayCount, state.streak);
    updateStats();
    
    elements.feedback.classList.remove('hidden');
    
    setTimeout(() => {
        elements.card.classList.remove('pulse', 'shake');
    }, 300);
    
    // Авто-переход
    startAutoAdvanceTimer();
}

function startAutoAdvanceTimer() {
    const settings = getSettings();
    console.log('Auto-advance settings:', settings.autoAdvance, settings.autoAdvanceDelay);
    
    if (!settings.autoAdvance) {
        console.log('Auto-advance disabled');
        return;
    }
    
    const delay = (settings.autoAdvanceDelay || 5) * 1000;
    console.log('Starting auto-advance timer:', delay, 'ms');
    
    // Анимация таймера
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) {
        timerBar.style.transition = 'none';
        timerBar.style.width = '100%';
        setTimeout(() => {
            timerBar.style.transition = `width ${delay}ms linear`;
            timerBar.style.width = '0%';
        }, 50);
    }
    
    state.autoAdvanceTimer = setTimeout(() => {
        console.log('Auto-advance triggered');
        nextCard();
    }, delay);
}

function clearAutoAdvanceTimer() {
    if (state.autoAdvanceTimer) {
        clearTimeout(state.autoAdvanceTimer);
        state.autoAdvanceTimer = null;
    }
    if (elements.timerBar) {
        elements.timerBar.style.transition = 'none';
        elements.timerBar.style.width = '100%';
    }
}

function nextCard() {
    clearAutoAdvanceTimer();
    state.currentIndex++;
    
    if (state.currentIndex >= state.currentSession.length) {
        showResults();
    } else {
        showCard();
    }
}

function prevCard() {
    clearAutoAdvanceTimer();
    
    if (state.history.length === 0) return;
    
    const lastEntry = state.history.pop();
    state.currentIndex = lastEntry.index;
    
    // Откатываем статистику
    if (lastEntry.wasCorrect) {
        state.sessionCorrect--;
    } else {
        state.sessionWrong--;
    }
    
    showCard();
}

function showResults() {
    clearAutoAdvanceTimer();
    elements.cardScreen.classList.add('hidden');
    elements.progressContainer.classList.add('hidden');
    elements.resultsScreen.classList.remove('hidden');
    
    const total = state.sessionCorrect + state.sessionWrong;
    const accuracy = total > 0 ? Math.round((state.sessionCorrect / total) * 100) : 0;
    
    elements.resultCorrect.textContent = state.sessionCorrect;
    elements.resultWrong.textContent = state.sessionWrong;
    elements.resultAccuracy.textContent = accuracy + '%';
    
    // Мотивационное сообщение в зависимости от результата
    let messages;
    if (accuracy >= 90) messages = RESULT_MESSAGES.excellent;
    else if (accuracy >= 70) messages = RESULT_MESSAGES.good;
    else if (accuracy >= 50) messages = RESULT_MESSAGES.okay;
    else messages = RESULT_MESSAGES.low;
    
    const motivationEl = document.getElementById('results-motivation');
    if (motivationEl) {
        motivationEl.textContent = messages[Math.floor(Math.random() * messages.length)];
    }
}

function updateProgressBar() {
    const progress = ((state.currentIndex) / state.currentSession.length) * 100;
    elements.progressBar.style.setProperty('--progress', progress + '%');
    elements.progressText.textContent = `${state.currentIndex + 1} / ${state.currentSession.length}`;
}

function updateStats() {
    // Обновляем DOM напрямую для надёжности
    const learnedEl = document.querySelector('#stat-learned strong');
    const streakEl = document.querySelector('#stat-streak strong');
    const todayEl = document.querySelector('#stat-today strong');
    
    if (learnedEl) learnedEl.textContent = getLearnedCount();
    if (streakEl) streakEl.textContent = state.streak;
    if (todayEl) todayEl.textContent = state.todayCount;
    
    console.log('Stats updated:', { learned: getLearnedCount(), streak: state.streak, today: state.todayCount });
}

// ==================== SCREENS ====================
const START_GREETINGS = [
    "Бакаляу сам себя не выучит! 🐟",
    "Пастéл де ната ждёт того, кто закажет его по-португальски! 🥧",
    "Твой мозг сегодня будет работать как портвейн — крепко и со вкусом! 🍷",
    "Без португальского в Лиссабоне ты просто турист с GPS 📱",
    "Фаду не споёшь — слова учи! 🎸",
    "Sardinha хочет, чтобы ты её правильно заказал! 🐟",
    "Учи слова или навсегда останешься на уровне 'Obrigado' 😅",
    "Криштиану тоже с чего-то начинал... с алфавита! ⚽",
    "Азулежу красивые, но надписи на них тоже надо читать! 🎨",
    "Hoje é o dia! Сегодня тот самый день! 🚀"
];

const CONTINUE_MESSAGES = [
    "Продолжаем! 💪",
    "Вперёд! 🚀",
    "Ещё 20 слов! 📚",
    "Não pares! 🔥",
    "Ты на волне! 🌊",
    "Следующий раунд! 🎯"
];

const RESULT_MESSAGES = {
    excellent: [ // 90-100%
        "Ты просто машина! 🔥",
        "Excelente! Так держать! 🏆",
        "Мозг в огне! Браво! 🧠✨",
        "Perfeito! Ты крутая! 💎",
        "Гений португальского! 🇵🇹",
        "Невероятно! Muito bem! 🌟"
    ],
    good: [ // 70-89%
        "Молодец! Отличный результат! 👏",
        "Muito bom! Продолжай! 💪",
        "Здорово! Прогресс налицо! 📈",
        "Ты на верном пути! 🎯",
        "Bom trabalho! 👍",
        "Супер! Ещё чуть-чуть! 🚀"
    ],
    okay: [ // 50-69%
        "Неплохо! Практика — сила! 💪",
        "Нормально! Повтори ещё раз 📚",
        "Ты справишься! Вперёд! 🌊",
        "Continua! Всё получится! ✨",
        "Не сдавайся! 🔥"
    ],
    low: [ // <50%
        "Ничего! Повтори эти слова 📖",
        "Практикуйся — будет лучше! 💪",
        "Não desistas! Ты можешь! 🌟",
        "Следующий раунд будет лучше! 🎯"
    ]
};

let isFirstSession = true;

function showStartScreen() {
    elements.startScreen.classList.remove('hidden');
    elements.cardScreen.classList.add('hidden');
    elements.resultsScreen.classList.add('hidden');
    elements.progressContainer.classList.add('hidden');
    
    // Рандомное приветствие (разное для первого раза и продолжения)
    const greetingEl = document.getElementById('start-greeting');
    if (greetingEl) {
        if (isFirstSession) {
            greetingEl.textContent = START_GREETINGS[Math.floor(Math.random() * START_GREETINGS.length)];
        } else {
            greetingEl.textContent = CONTINUE_MESSAGES[Math.floor(Math.random() * CONTINUE_MESSAGES.length)];
        }
    }
    
    const vocab = getCurrentVocabulary();
    elements.totalWords.textContent = vocab.length;
    elements.dueWords.textContent = getDueWords().length;
    
    // Название текущего списка
    const listId = getCurrentListId();
    if (listId === 'default') {
        elements.currentListName.textContent = 'Основной';
    } else if (typeof THEMED_LISTS !== 'undefined' && THEMED_LISTS[listId]) {
        elements.currentListName.textContent = THEMED_LISTS[listId].name;
    } else {
        const lists = getWordLists();
        elements.currentListName.textContent = lists[listId]?.name || 'Основной';
    }
    
    const todayStats = getTodayStats();
    state.todayCount = todayStats.count;
    state.streak = todayStats.streak;
    
    updateStats();
    renderWordLists();
}

function startSession() {
    state.currentSession = selectSessionWords();
    
    if (state.currentSession.length === 0) {
        alert('Все слова изучены на сегодня! Возвращайся завтра 🎉');
        return;
    }
    
    isFirstSession = false; // После первой сессии показываем короткие сообщения
    
    state.currentIndex = 0;
    state.sessionCorrect = 0;
    state.sessionWrong = 0;
    state.history = [];
    
    elements.startScreen.classList.add('hidden');
    elements.cardScreen.classList.remove('hidden');
    elements.progressContainer.classList.remove('hidden');
    
    showCard();
}

// ==================== SIDEBAR ====================
function renderWordLists() {
    const lists = getWordLists();
    const currentId = getCurrentListId();
    
    let html = `
        <div class="word-list-item ${currentId === 'default' ? 'active' : ''}" data-list-id="default">
            <span class="list-name">📚 Vocabulário Geral</span>
            <span class="list-count">${VOCABULARY.length}</span>
        </div>
    `;
    
    // Тематические списки (встроенные) — группируем по УРОВНЯМ (A2, B1, B2)
    if (typeof THEMED_LISTS !== 'undefined') {
        html += `<div class="list-section-title">Por nível</div>`;
        
        // Определяем уровень из ID списка (medico_a2 → a2)
        const getLevelFromId = (id) => {
            const match = id.match(/_([ab][12])$/);
            return match ? match[1] : 'other';
        };
        
        // Названия уровней
        const levelNames = {
            'a2': '📗 A2 — Básico',
            'b1': '📘 B1 — Intermédio', 
            'b2': '📙 B2 — Avançado'
        };
        
        // Порядок уровней
        const levelOrder = ['a2', 'b1', 'b2'];
        
        // Собираем списки по уровням
        const levels = {};
        for (const [id, list] of Object.entries(THEMED_LISTS)) {
            const level = getLevelFromId(id);
            if (!levels[level]) {
                levels[level] = {
                    name: levelNames[level] || level.toUpperCase(),
                    items: []
                };
            }
            levels[level].items.push({ id, list });
        }
        
        // Определяем какой уровень раскрыт (по текущему выбранному списку)
        let expandedLevel = safeStorage.getItem('expandedCategory') || '';
        const currentListLevel = getLevelFromId(currentId);
        if (THEMED_LISTS[currentId]) {
            expandedLevel = currentListLevel;
        }
        
        // Рендерим каждый уровень в правильном порядке
        for (const levelId of levelOrder) {
            const level = levels[levelId];
            if (!level) continue;
            
            const isExpanded = expandedLevel === levelId;
            const totalWords = level.items.reduce((sum, item) => sum + item.list.words.length, 0);
            
            html += `
                <div class="category-group ${isExpanded ? 'expanded' : ''}">
                    <div class="category-header" data-category="${levelId}">
                        <span class="category-arrow">▶</span>
                        <span class="category-name">${level.name}</span>
                        <span class="list-count">${totalWords}</span>
                    </div>
                    <div class="category-items">
            `;
            
            // Сортируем темы по имени категории
            level.items.sort((a, b) => (a.list.categoryName || '').localeCompare(b.list.categoryName || ''));
            
            for (const { id, list } of level.items) {
                html += `
                    <div class="word-list-item sub-item ${currentId === id ? 'active' : ''}" data-list-id="${id}">
                        <span class="list-name">${list.categoryName}</span>
                        <span class="list-count">${list.words.length}</span>
                    </div>
                `;
            }
            
            html += `
                    </div>
                </div>
            `;
        }
    }
    
    // Пользовательские списки
    const userListsArray = Object.entries(lists);
    if (userListsArray.length > 0) {
        html += `<div class="list-section-title">As minhas listas</div>`;
        for (const [id, list] of userListsArray) {
            html += `
                <div class="word-list-item ${currentId === id ? 'active' : ''}" data-list-id="${id}">
                    <span class="list-name">📝 ${list.name}</span>
                    <span class="list-count">${list.words.length}</span>
                    <div class="list-actions">
                        <button class="list-action-btn edit-list-btn" data-id="${id}" title="Editar">✏️</button>
                        <button class="list-action-btn delete-list-btn" data-id="${id}" title="Eliminar">🗑️</button>
                    </div>
                </div>
            `;
        }
    }
    
    elements.wordLists.innerHTML = html;
    
    // Обработчики клика на категории (раскрытие/скрытие)
    elements.wordLists.querySelectorAll('.category-header').forEach(header => {
        header.addEventListener('click', () => {
            const catId = header.dataset.category;
            const group = header.closest('.category-group');
            const wasExpanded = group.classList.contains('expanded');
            
            // Закрываем все
            elements.wordLists.querySelectorAll('.category-group').forEach(g => {
                g.classList.remove('expanded');
            });
            
            // Открываем текущую (если была закрыта)
            if (!wasExpanded) {
                group.classList.add('expanded');
                safeStorage.setItem('expandedCategory', catId);
            } else {
                safeStorage.removeItem('expandedCategory');
            }
        });
    });
    
    // Обработчики клика на списки
    elements.wordLists.querySelectorAll('.word-list-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.closest('.list-actions')) return;
            
            const listId = item.dataset.listId;
            setCurrentListId(listId);
            showStartScreen();
            
            // На мобильных закрываем сайдбар
            if (window.innerWidth <= 768) {
                elements.sidebar.classList.remove('open');
            }
        });
    });
    
    // Кнопки редактирования
    elements.wordLists.querySelectorAll('.edit-list-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditListModal(btn.dataset.id);
        });
    });
    
    // Кнопки удаления
    elements.wordLists.querySelectorAll('.delete-list-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Удалить этот список?')) {
                deleteWordList(btn.dataset.id);
                showStartScreen();
            }
        });
    });
}

function toggleSidebar() {
    if (window.innerWidth <= 768) {
        elements.sidebar.classList.toggle('open');
    } else {
        elements.sidebar.classList.toggle('collapsed');
    }
}

// ==================== LIST MODAL ====================
let editingListId = null;

function openCreateListModal() {
    editingListId = null;
    document.getElementById('list-modal-title').textContent = 'Новый список';
    document.getElementById('list-name').value = '';
    document.getElementById('list-words').value = '';
    updateListModalApiHint();
    document.getElementById('list-modal').classList.remove('hidden');
}

function updateListModalApiHint() {
    const hint = document.getElementById('list-api-hint');
    const settings = getSettings();
    if (settings.openaiKey) {
        hint.innerHTML = '✅ Мнемоники сгенерируются автоматически при сохранении';
        hint.style.color = '#4ade80';
    } else {
        hint.innerHTML = '💡 Добавь OpenAI API key в настройках для автогенерации мнемоник';
        hint.style.color = '#94a3b8';
    }
}

function openEditListModal(id) {
    editingListId = id;
    const lists = getWordLists();
    const list = lists[id];
    
    if (!list) return;
    
    document.getElementById('list-modal-title').textContent = 'Редактировать список';
    document.getElementById('list-name').value = list.name;
    document.getElementById('list-words').value = list.words.map(w => `${w.pt} - ${w.ru}`).join('\n');
    updateListModalApiHint();
    document.getElementById('list-modal').classList.remove('hidden');
}

function closeListModal() {
    document.getElementById('list-modal').classList.add('hidden');
    editingListId = null;
}

async function saveList() {
    const name = document.getElementById('list-name').value.trim();
    const wordsText = document.getElementById('list-words').value;
    const saveBtn = document.getElementById('save-list');
    const originalBtnText = saveBtn.textContent;
    
    if (!name) {
        alert('Введи название списка');
        return;
    }
    
    if (!wordsText.trim()) {
        alert('Добавь хотя бы одно слово');
        return;
    }
    
    // Parse words to get the list (поддерживаем все виды тире)
    const dashRegex = /[-–—]/;
    const splitRegex = /\s*[-–—]\s*/;
    const words = wordsText.split('\n')
        .map(line => line.trim())
        .filter(line => line && dashRegex.test(line))
        .map(line => {
            const parts = line.split(splitRegex);
            const pt = parts[0]?.trim();
            const ru = parts.slice(1).join('-').trim();
            return { pt: pt || '', ru: ru || '' };
        })
        .filter(w => w.pt && w.ru);
    
    if (words.length === 0) {
        alert('Не удалось распознать слова. Используй формат:\nслово - перевод\n(каждое с новой строки)');
        return;
    }
    
    let listId;
    if (editingListId) {
        updateWordList(editingListId, name, wordsText);
        listId = editingListId;
    } else {
        listId = createWordList(name, wordsText);
        if (!listId) {
            // createWordList вернул null — слова не распознались
            return;
        }
        setCurrentListId(listId);
    }
    
    // Check if we have API key for mnemonic generation
    const settings = getSettings();
    if (settings.openaiKey && words.length > 0) {
        // Disable button and show progress
        saveBtn.disabled = true;
        saveBtn.textContent = 'Генерирую мнемоники...';
        
        try {
            const result = await generateMnemonicsForList(words, (status) => {
                saveBtn.textContent = status;
            });
            
            if (result.generated > 0) {
                saveBtn.textContent = `✓ Создано ${result.generated} мнемоник!`;
                await new Promise(r => setTimeout(r, 1500));
            }
        } catch (error) {
            console.error('Error generating mnemonics:', error);
        }
        
        saveBtn.disabled = false;
        saveBtn.textContent = originalBtnText;
    }
    
    closeListModal();
    renderWordLists(); // обновляем сайдбар сразу
    showStartScreen();
    
    // Показываем сколько слов сохранено
    console.log('Saved list with', words.length, 'words');
}

// ==================== SETTINGS MODAL ====================
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const closeSettings = document.getElementById('close-settings');
const openaiKeyInput = document.getElementById('openai-key');
const saveApiKeyBtn = document.getElementById('save-api-key');
const autoAdvanceCheckbox = document.getElementById('auto-advance');
const autoAdvanceDelayInput = document.getElementById('auto-advance-delay');
const generateAllBtn = document.getElementById('generate-all-mnemonics');
const resetProgressBtn = document.getElementById('reset-progress');

function openSettings() {
    const settings = getSettings();
    openaiKeyInput.value = settings.openaiKey || '';
    autoAdvanceCheckbox.checked = settings.autoAdvance !== false;
    autoAdvanceDelayInput.value = settings.autoAdvanceDelay || 5;
    settingsModal.classList.remove('hidden');
}

function closeSettingsModal() {
    settingsModal.classList.add('hidden');
}

// ==================== EVENT LISTENERS ====================
elements.startBtn.addEventListener('click', startSession);
elements.nextBtn.addEventListener('click', nextCard);
elements.prevBtn.addEventListener('click', prevCard);
elements.restartBtn.addEventListener('click', showStartScreen);

elements.modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const oldMode = state.mode;
        elements.modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.mode = btn.dataset.mode;
        
        // Если мы в середине сессии и режим реально изменился — обновить карточку
        if (oldMode !== state.mode && state.currentSession && state.currentSession.length > 0 && state.currentIndex < state.currentSession.length) {
            console.log('Mode changed mid-session, refreshing card');
            showCard();
        }
    });
});

// Sidebar
elements.menuBtn?.addEventListener('click', toggleSidebar);
elements.sidebarToggle?.addEventListener('click', toggleSidebar);
elements.createListBtn?.addEventListener('click', openCreateListModal);

// List Modal
document.getElementById('close-list-modal')?.addEventListener('click', closeListModal);
document.getElementById('cancel-list')?.addEventListener('click', closeListModal);
document.getElementById('save-list')?.addEventListener('click', saveList);
document.getElementById('list-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'list-modal') closeListModal();
});

// Settings
settingsBtn.addEventListener('click', openSettings);
closeSettings.addEventListener('click', closeSettingsModal);
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettingsModal();
});

saveApiKeyBtn.addEventListener('click', () => {
    const settings = getSettings();
    settings.openaiKey = openaiKeyInput.value.trim();
    saveSettings(settings);
    alert('API key сохранён!');
});

autoAdvanceCheckbox?.addEventListener('change', () => {
    const settings = getSettings();
    settings.autoAdvance = autoAdvanceCheckbox.checked;
    saveSettings(settings);
});

autoAdvanceDelayInput?.addEventListener('change', () => {
    const settings = getSettings();
    settings.autoAdvanceDelay = parseInt(autoAdvanceDelayInput.value) || 5;
    saveSettings(settings);
});

generateAllBtn.addEventListener('click', generateAllMnemonics);

resetProgressBtn.addEventListener('click', () => {
    if (confirm('Точно сбросить весь прогресс?')) {
        safeStorage.removeItem('pt-trainer-progress');
        safeStorage.removeItem('pt-trainer-today');
        safeStorage.removeItem('pt-trainer-mnemonics');
        showStartScreen();
        alert('Прогресс сброшен');
    }
});

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !elements.feedback.classList.contains('hidden')) {
        nextCard();
    }
    
    if (e.key === 'Backspace' && !elements.feedback.classList.contains('hidden')) {
        prevCard();
    }
    
    if (e.key >= '1' && e.key <= '4') {
        const buttons = elements.choices.querySelectorAll('.choice-btn:not(:disabled)');
        const index = parseInt(e.key) - 1;
        if (buttons[index]) {
            buttons[index].click();
        }
    }
});

// ==================== INIT ====================
initTTS();
showStartScreen();
