/**
 * Применяет загруженные URL картинок к vocabulary.js
 * Запуск: node apply-images.js
 */

const fs = require('fs');

const resultsPath = './image-urls.json';
const vocabularyPath = './vocabulary.js';

if (!fs.existsSync(resultsPath)) {
    console.error('Файл image-urls.json не найден. Сначала запусти fetch-images.js');
    process.exit(1);
}

const imageUrls = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
let vocabulary = fs.readFileSync(vocabularyPath, 'utf8');

console.log(`Загружено ${Object.keys(imageUrls).length} URL картинок\n`);

let updated = 0;

for (const [pt, url] of Object.entries(imageUrls)) {
    // Находим запись в словаре и добавляем/обновляем imageUrl
    const escapedPt = pt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Паттерн для поиска записи слова
    const pattern = new RegExp(
        `(\\{\\s*\\n?\\s*pt:\\s*"${escapedPt}"[^}]*?imageQuery:\\s*"[^"]*")`,
        'g'
    );
    
    const replacement = `$1,\n        imageUrl: "${url}"`;
    
    // Проверяем, есть ли уже imageUrl
    if (vocabulary.includes(`pt: "${pt}"`) && !vocabulary.includes(`"${url}"`)) {
        const newVocab = vocabulary.replace(pattern, replacement);
        if (newVocab !== vocabulary) {
            vocabulary = newVocab;
            updated++;
            console.log(`✓ ${pt}`);
        }
    }
}

// Сохраняем
fs.writeFileSync(vocabularyPath, vocabulary);

console.log(`\n========================================`);
console.log(`Обновлено записей: ${updated}`);
console.log(`========================================\n`);
