/**
 * Скрипт для загрузки URL картинок из Unsplash
 * Запуск: node fetch-images.js
 * 
 * Лимит Unsplash: 50 запросов/час
 * У нас ~240 слов = нужно ~5 часов или запускать частями
 */

const fs = require('fs');
const https = require('https');

const ACCESS_KEY = '5bkx7lOtSLkjLDzSwQGFgFGVnKiSJCNIT2MtciJVqIY';
const DELAY_MS = 1500; // 1.5 секунды между запросами (безопасный лимит)

// Читаем текущий словарь
const vocabularyPath = './vocabulary.js';
let vocabularyContent = fs.readFileSync(vocabularyPath, 'utf8');

// Извлекаем массив VOCABULARY
const match = vocabularyContent.match(/const VOCABULARY = \[([\s\S]*?)\];/);
if (!match) {
    console.error('Не удалось найти VOCABULARY в файле');
    process.exit(1);
}

// Парсим слова (упрощённый парсинг)
function extractWords() {
    const words = [];
    const regex = /\{\s*pt:\s*"([^"]+)"[\s\S]*?imageQuery:\s*"([^"]+)"[\s\S]*?\}/g;
    let m;
    while ((m = regex.exec(vocabularyContent)) !== null) {
        words.push({
            pt: m[1],
            imageQuery: m[2]
        });
    }
    return words;
}

// Запрос к Unsplash API
function fetchImage(query) {
    return new Promise((resolve, reject) => {
        const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
        
        const options = {
            headers: {
                'Authorization': `Client-ID ${ACCESS_KEY}`
            }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.results && json.results.length > 0) {
                        // Используем small размер (400px)
                        resolve(json.results[0].urls.small);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Задержка
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Основная функция
async function main() {
    const words = extractWords();
    console.log(`Найдено ${words.length} слов\n`);
    
    // Файл для сохранения результатов
    const resultsPath = './image-urls.json';
    let results = {};
    
    // Загружаем предыдущие результаты если есть
    if (fs.existsSync(resultsPath)) {
        results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
        console.log(`Загружено ${Object.keys(results).length} ранее найденных URL\n`);
    }
    
    let processed = 0;
    let fetched = 0;
    let errors = 0;
    
    for (const word of words) {
        processed++;
        
        // Пропускаем если уже есть
        if (results[word.pt]) {
            console.log(`[${processed}/${words.length}] ✓ ${word.pt} — уже есть`);
            continue;
        }
        
        try {
            console.log(`[${processed}/${words.length}] Загрузка: ${word.pt} (${word.imageQuery})`);
            const imageUrl = await fetchImage(word.imageQuery);
            
            if (imageUrl) {
                results[word.pt] = imageUrl;
                fetched++;
                console.log(`  → ${imageUrl.substring(0, 60)}...`);
            } else {
                console.log(`  → Картинка не найдена`);
                errors++;
            }
            
            // Сохраняем после каждого запроса
            fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
            
            // Задержка
            await delay(DELAY_MS);
            
        } catch (error) {
            console.error(`  → Ошибка: ${error.message}`);
            errors++;
        }
        
        // Лимит Unsplash: 50 запросов в час
        const BATCH_LIMIT = 50;
        if (fetched >= BATCH_LIMIT) {
            console.log(`\n✓ Достигнут лимит Unsplash (${BATCH_LIMIT} картинок/час)`);
            console.log('Следующая порция загрузится автоматически через 2 часа.\n');
            break;
        }
    }
    
    console.log('\n========================================');
    console.log(`Обработано: ${processed}`);
    console.log(`Загружено: ${fetched}`);
    console.log(`Ошибок: ${errors}`);
    console.log(`Всего URL сохранено: ${Object.keys(results).length}`);
    console.log('========================================\n');
    
    if (Object.keys(results).length === words.length) {
        console.log('✅ Все картинки загружены!');
        console.log('Теперь запусти: node apply-images.js');
    }
}

main().catch(console.error);
