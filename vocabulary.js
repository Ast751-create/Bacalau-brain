// Словарь: португальский -> русский
// soundHint - мнемоника по созвучию (вариант B)
// Схема: португальское слово звучит как X → X связан с значением Y

const VOCABULARY = [
    { 
        pt: "o castigo", 
        ru: "наказание", 
        imageQuery: "punishment discipline",
        imageUrl: "https://images.unsplash.com/photo-1604533983460-44d5b3c7f4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwdW5pc2htZW50JTIwZGlzY2lwbGluZXxlbnwwfDB8fHwxNzY5NzAwODUyfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "На КАСТИНГЕ актёр так плохо играл, что режиссёр бьёт его тортом — НАКАЗАНИЕ!"
    },
    { 
        pt: "o método de ensino", 
        ru: "метод обучения", 
        imageQuery: "teaching classroom",
        imageUrl: "https://images.unsplash.com/photo-1608986596619-eb50cc56831f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGNsYXNzcm9vbXxlbnwwfDB8fHwxNzY5NzAwODU0fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "МЕТОД лечения настолько странный — врач танцует вокруг больного с бубном!"
    },
    { 
        pt: "Os Emirados", 
        ru: "Эмираты", 
        imageQuery: "dubai emirates skyline",
        imageUrl: "https://images.unsplash.com/photo-1643043804724-4b1c706f40a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGVtaXJhdGVzJTIwc2t5bGluZXxlbnwwfDB8fHwxNzY5NzAwODU2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭМИРАТЫ — шейх на верблюде швыряет золотые монеты прямо из скорой помощи!"
    },
    { 
        pt: "o pensamento", 
        ru: "мысль", 
        imageQuery: "thinking brain idea",
        imageUrl: "https://images.unsplash.com/photo-1758600434662-c1afe6b5bc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0aGlua2luZyUyMGJyYWluJTIwaWRlYXxlbnwwfDB8fHwxNzY5NzAwODU4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПЕНсионер сидит и ДУМАЕТ так сильно, что из головы идёт дым — МЫСЛИ кипят!"
    },
    { 
        pt: "Os auxiliares", 
        ru: "школьные помощники", 
        imageQuery: "school helper assistant",
        imageUrl: "https://images.unsplash.com/photo-1594256347468-5cd43df8fbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBoZWxwZXIlMjBhc3Npc3RhbnR8ZW58MHwwfHx8MTc2OTcwMDg2MHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АУ! КСЮША! — кричит учитель, и она бежит ПОМОГАТЬ, роняя все стулья!"
    },
    { 
        pt: "alimentar", 
        ru: "кормить", 
        imageQuery: "feeding baby food",
        imageUrl: "https://images.unsplash.com/photo-1762410361711-aec1c2f44bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmZWVkaW5nJTIwYmFieSUyMGZvb2R8ZW58MHwwfHx8MTc2OTcwMTE0OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Папа платит АЛИМЕНТЫ — деньги превращаются в еду и летят в рот ребёнку — КОРМИТ!"
    },
    { 
        pt: "dia sim, dia não", 
        ru: "через день", 
        imageQuery: "calendar schedule",
        imageUrl: "https://images.unsplash.com/photo-1761058556617-ddd0f3b9795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxlfGVufDB8MHx8fDE3Njk3MDExNTB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "день ДА (sim), день НЕТ (não)"
    },
    { 
        pt: "cabelo oleoso", 
        ru: "жирные волосы", 
        imageQuery: "oily hair shampoo",
        imageUrl: "https://images.unsplash.com/photo-1559135569-742c8c57db6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxvaWx5JTIwaGFpciUyMHNoYW1wb298ZW58MHwwfHx8MTc2OTcwMTE1Mnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАБЕЛЬ упал в бочку с ОЛИФОЙ — теперь он ЖИРНЫЙ и блестит как немытые ВОЛОСЫ!"
    },
    { 
        pt: "recusar", 
        ru: "отказывать", 
        imageQuery: "refuse no hand stop",
        imageUrl: "https://images.unsplash.com/photo-1581832098105-51824c721c2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyZWZ1c2UlMjBubyUyMGhhbmQlMjBzdG9wfGVufDB8MHx8fDE3Njk3MDExNTR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Программист видит РЕКУРСИЮ — компьютер взрывается, и он кричит: ОТКАЗЫВАЮ тебе в работе!"
    },
    { 
        pt: "a dignidade", 
        ru: "достоинство", 
        imageQuery: "dignity pride honor",
        imageUrl: "https://images.unsplash.com/photo-1678221419967-df85cc839f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkaWduaXR5JTIwcHJpZGUlMjBob25vcnxlbnwwfDB8fHwxNzY5NzAxMTU2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДИДЖЕЙ на сцене так гордо крутит пластинки — весь зал кланяется его ДОСТОИНСТВУ!"
    },
    { 
        pt: "ser digno de", 
        ru: "быть достойным", 
        imageQuery: "worthy deserve medal",
        imageUrl: "https://images.unsplash.com/photo-1760996888745-a878ad8779df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3b3J0aHklMjBkZXNlcnZlJTIwbWVkYWx8ZW58MHwwfHx8MTc2OTcwMTE1OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДИГО — ДОстойный ГОсподин"
    },
    { 
        pt: "o mérito", 
        ru: "заслуга", 
        imageQuery: "merit award trophy",
        imageUrl: "https://images.unsplash.com/photo-1659080907059-00adb7e98f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxtZXJpdCUyMGF3YXJkJTIwdHJvcGh5fGVufDB8MHx8fDE3Njk3MDExNjB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Судья МЕРЯЕТ линейкой, кто больше сделал — у победителя огромная ЗАСЛУГА в метрах!"
    },
    { 
        pt: "estradas largas", 
        ru: "широкие дороги", 
        imageQuery: "wide highway road",
        imageUrl: "https://images.unsplash.com/photo-1693470539388-a0f7d126b5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3aWRlJTIwaGlnaHdheSUyMHJvYWR8ZW58MHwwfHx8MTc2OTcwMTE2Mnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "На ЭСТРАДЕ поставили ЛАРЁК — к нему ведёт ШИРОЧЕННАЯ ДОРОГА, все бегут за шаурмой!"
    },
    { 
        pt: "remar", 
        ru: "грести", 
        imageQuery: "rowing boat paddle",
        imageUrl: "https://images.unsplash.com/photo-1564525449886-25b4d9643b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyb3dpbmclMjBib2F0JTIwcGFkZGxlfGVufDB8MHx8fDE3Njk3MDExNjR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Писатель пишет РЕМАРКУ веслом по воде, яростно ГРЕБЁТ и брызги летят на рукопись!"
    },
    { 
        pt: "o remo", 
        ru: "весло", 
        imageQuery: "oar paddle boat",
        imageUrl: "https://images.unsplash.com/photo-1719202453407-47fb2795c0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxvYXIlMjBwYWRkbGUlMjBib2F0fGVufDB8MHx8fDE3Njk3MDExNjZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Мужик делает РЕМОНТ лодки — бьёт её ВЕСЛОМ, лодка разваливается, он падает в воду!"
    },
    { 
        pt: "assustador", 
        ru: "страшный", 
        imageQuery: "scary monster horror",
        imageUrl: "https://images.unsplash.com/photo-1758124968201-09737108d001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzY2FyeSUyMG1vbnN0ZXIlMjBob3Jyb3J8ZW58MHwwfHx8MTc2OTcwMTE2OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "А! СУСлик выскочил из норы — такой СТРАШНЫЙ с красными глазами, все визжат и убегают!"
    },
    { 
        pt: "teimoso", 
        ru: "упрямый", 
        imageQuery: "stubborn mule donkey",
        imageUrl: "https://images.unsplash.com/photo-1596793394534-01da76731a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdHViYm9ybiUyMG11bGUlMjBkb25rZXl8ZW58MHwwfHx8MTc2OTcwMTE3MHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТЫ МОЗОЛЬ! — кричит врач, но мозоль УПРЯМО не сходит, врач бьёт по ней молотком!"
    },
    { 
        pt: "suave", 
        ru: "мягкий", 
        imageQuery: "soft feather gentle",
        imageUrl: "https://images.unsplash.com/photo-1629821648527-eb66273a1792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZmVhdGhlciUyMGdlbnRsZXxlbnwwfDB8fHwxNzY5NzAxMTcyfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СУФЛЕ такое МЯГКОЕ, что повар падает в него как в облако и засыпает!"
    },
    { 
        pt: "ligeiro", 
        ru: "очень быстрый", 
        imageQuery: "fast speed racing",
        imageUrl: "https://images.unsplash.com/photo-1728036162196-418d4cfd084b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwc3BlZWQlMjByYWNpbmd8ZW58MHwwfHx8MTc2OTcwMTE3NHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛИГА ГЕРОЕВ мчится так БЫСТРО, что за ними горит асфальт и взрываются машины!"
    },
    { 
        pt: "ligeiramente", 
        ru: "слегка", 
        imageQuery: "light touch gentle",
        imageUrl: "https://images.unsplash.com/photo-1641597781273-f12e36fbb7c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHRvdWNoJTIwZ2VudGxlfGVufDB8MHx8fDE3Njk3MDExNzZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛЁГКАЯ МЯТА касается языка — СЛЕГКА холодит, а потом — БАХ! — ледяной взрыв во рту!"
    },
    { 
        pt: "o partido de extrema direita", 
        ru: "правая партия", 
        imageQuery: "politics right wing",
        imageUrl: "https://images.unsplash.com/photo-1631540700964-6e292543024c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwb2xpdGljcyUyMHJpZ2h0JTIwd2luZ3xlbnwwfDB8fHwxNzY5NzAxMTc4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПАРТИЯ ДИРЕКТОРОВ вся сидит СПРАВА — левые стулья пусты и грустят!"
    },
    { 
        pt: "o partido socialista", 
        ru: "социалистическая партия", 
        imageQuery: "socialist party politics",
        imageUrl: "https://images.unsplash.com/photo-1713311189995-c65382803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzb2NpYWxpc3QlMjBwYXJ0eSUyMHBvbGl0aWNzfGVufDB8MHx8fDE3Njk3MDExODB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СОЦИАЛИСТ в красном раздаёт бесплатные таблетки — толпа сносит аптеку!"
    },
    { 
        pt: "negar", 
        ru: "отрицать", 
        imageQuery: "deny refuse no",
        soundHint: "Фотограф смотрит на НЕГАТИВ и кричит: НЕТ! ОТРИЦАЮ! — и рвёт все фотки!"
    },
    { 
        pt: "inegável", 
        ru: "неоспоримый", 
        imageQuery: "undeniable obvious truth",
        soundHint: "ИН-НЕГАТИВ — нельзя отрицать"
    },
    { 
        pt: "não creio que", 
        ru: "не верю, что", 
        imageQuery: "doubt skeptical disbelief",
        imageUrl: "https://images.unsplash.com/photo-1758523672225-33b93f1eea62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkb3VidCUyMHNrZXB0aWNhbCUyMGRpc2JlbGllZnxlbnwwfDB8fHwxNzY5NzAxMTg2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "НА КРЕЙСЕР? Не верю!"
    },
    { 
        pt: "ter bom senso", 
        ru: "быть разумным", 
        imageQuery: "wise thinking sensible",
        imageUrl: "https://images.unsplash.com/photo-1765718482370-1205a87400c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3aXNlJTIwdGhpbmtpbmclMjBzZW5zaWJsZXxlbnwwfDB8fHwxNzY5NzAxMTg4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТЕРПИ, БОМж, СЕНСЕЙ учит разуму"
    },
    { 
        pt: "merecer", 
        ru: "заслуживать", 
        imageQuery: "deserve reward earning",
        imageUrl: "https://images.unsplash.com/photo-1755406720023-6aa732094de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkZXNlcnZlJTIwcmV3YXJkJTIwZWFybmluZ3xlbnwwfDB8fHwxNzY5NzAxMTkwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "МЕРСЕДЕС въезжает на подиум — толпа орёт: ЗАСЛУЖИЛ! — и кидает в него деньги!"
    },
    { 
        pt: "o furacão", 
        ru: "ураган", 
        imageQuery: "hurricane storm wind",
        imageUrl: "https://images.unsplash.com/photo-1559828187-9bf6757861f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxodXJyaWNhbmUlMjBzdG9ybSUyMHdpbmR8ZW58MHwwfHx8MTc2OTcwMTE5Mnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Гигантская ФУРА попала в УРАГАН — летит по небу, крутится, из неё сыплются арбузы!"
    },
    { 
        pt: "o telhado", 
        ru: "крыша", 
        imageQuery: "roof house tiles",
        imageUrl: "https://images.unsplash.com/photo-1744975748338-d226c7535d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyb29mJTIwaG91c2UlMjB0aWxlc3xlbnwwfDB8fHwxNzY5NzAxMTk0fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТЕЛО ЯДОм на крыше отравилось"
    },
    { 
        pt: "o estrago", 
        ru: "ущерб", 
        imageQuery: "damage destruction broken",
        imageUrl: "https://images.unsplash.com/photo-1761251947432-0ad734f43697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkYW1hZ2UlMjBkZXN0cnVjdGlvbiUyMGJyb2tlbnxlbnwwfDB8fHwxNzY5NzAxMTk2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭТО СТРАШНО! ГУбительный монстр разрушает город — УЩЕРБ на миллиарды!"
    },
    { 
        pt: "caída/o", 
        ru: "упавший", 
        imageQuery: "fallen down floor",
        imageUrl: "https://images.unsplash.com/photo-1760788606824-1b287e99dcf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmYWxsZW4lMjBkb3duJTIwZmxvb3J8ZW58MHwwfHx8MTc2OTcwMTE5OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАЮТА отвалилась от корабля и УПАЛА в море — пассажиры в пижамах плавают!"
    },
    { 
        pt: "cair", 
        ru: "падать", 
        imageQuery: "falling drop gravity",
        imageUrl: "https://images.unsplash.com/photo-1445570123738-861d5bbb99c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmYWxsaW5nJTIwZHJvcCUyMGdyYXZpdHl8ZW58MHwwfHx8MTc2OTcwMTIwMHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Весь КАИР ПАДАЕТ в гигантскую пирамиду — люди, верблюды, машины летят вниз!"
    },
    { 
        pt: "não adianta", 
        ru: "бесполезно", 
        imageQuery: "useless pointless frustrated",
        soundHint: "НА АДИДАСАХ пытаются танцевать балет — БЕСПОЛЕЗНО, все падают и рвут кроссовки!"
    },
    { 
        pt: "a agulha", 
        ru: "игла", 
        imageQuery: "needle sewing thread",
        imageUrl: "https://images.unsplash.com/photo-1698766902696-e3c98378d400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxuZWVkbGUlMjBzZXdpbmclMjB0aHJlYWR8ZW58MHwwfHx8MTc2OTcwMTIwNHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "А! ГУЛЯ села на ИГОЛКУ — подпрыгнула до потолка с криком, все смеются!"
    },
    { 
        pt: "a circulação", 
        ru: "кровообращение", 
        imageQuery: "blood circulation heart",
        imageUrl: "https://images.unsplash.com/photo-1715111641899-b0118be16660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGNpcmN1bGF0aW9uJTIwaGVhcnR8ZW58MHwwfHx8MTc2OTcwMTIwNnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "В ЦИРКЕ артист бежит по кругу так быстро — кровь ЦИРКУЛИРУЕТ со свистом!"
    },
    { 
        pt: "ficar de pé", 
        ru: "стоять", 
        imageQuery: "standing up feet person",
        imageUrl: "https://images.unsplash.com/photo-1736348188907-d570b50fd1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdGFuZGluZyUyMHVwJTIwZmVldCUyMHBlcnNvbnxlbnwwfDB8fHwxNzY5NzAxMjA4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФИКСАТОР на ПЕту — стоит ровно"
    },
    { 
        pt: "afiado", 
        ru: "острый", 
        imageQuery: "sharp knife blade",
        imageUrl: "https://images.unsplash.com/photo-1506915792737-4573cbd01da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzaGFycCUyMGtuaWZlJTIwYmxhZGV8ZW58MHwwfHx8MTc2OTcwMTIxMHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АФИША оказалась ОСТРОЙ как бритва — прохожий порезался, кровь на постере!"
    },
    { 
        pt: "o Médio Oriente", 
        ru: "Ближний Восток", 
        imageQuery: "middle east desert map",
        imageUrl: "https://images.unsplash.com/photo-1594946319025-be00d2c3ef6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwZGVzZXJ0JTIwbWFwfGVufDB8MHx8fDE3Njk3MDEyMTJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СРЕДНИЙ ОРИЕНТ — верблюд в чалме посреди пустыни показывает на восток!"
    },
    { 
        pt: "o conhecimento", 
        ru: "знание", 
        imageQuery: "knowledge brain books learning",
        soundHint: "КОНЯ СИМЕНТом знает — умный строитель"
    },
    { 
        pt: "a recompensa", 
        ru: "награда", 
        imageQuery: "reward prize trophy medal",
        imageUrl: "https://images.unsplash.com/photo-1613825787346-ef9c6189774b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyZXdhcmQlMjBwcml6ZSUyMHRyb3BoeSUyMG1lZGFsfGVufDB8MHx8fDE3Njk3MDEyMTZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "РЕКОМЕНДУЮ ПЕНСИЮ — достойная награда"
    },
    { 
        pt: "a punição", 
        ru: "наказание", 
        imageQuery: "punishment penalty judge",
        imageUrl: "https://images.unsplash.com/photo-1659870237858-c37e26a2e98f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwdW5pc2htZW50JTIwcGVuYWx0eSUyMGp1ZGdlfGVufDB8MHx8fDE3Njk3MDEyMTh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПУНКт наказания — тюрьма"
    },
    { 
        pt: "o comilão", 
        ru: "обжора", 
        imageQuery: "eating hungry overeating",
        imageUrl: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxlYXRpbmclMjBodW5ncnklMjBvdmVyZWF0aW5nfGVufDB8MHx8fDE3Njk3MDEyMjB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КОМ снега и ЛАВку в парке — ОБЖОРА съел всё это и просит добавки!"
    },
    { 
        pt: "a ementa", 
        ru: "меню", 
        imageQuery: "menu restaurant food list",
        imageUrl: "https://images.unsplash.com/photo-1761515397156-a966ca011fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxtZW51JTIwcmVzdGF1cmFudCUyMGZvb2QlMjBsaXN0fGVufDB8MHx8fDE3Njk3MDEyMjJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "МЕНТ в столовой изучает МЕНЮ с лупой — ищет там преступников среди блюд!"
    },
    { 
        pt: "a pata", 
        ru: "лапа (животного)", 
        imageQuery: "paw animal foot",
        imageUrl: "https://images.unsplash.com/photo-1744064476728-93b575436de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwYXclMjBhbmltYWwlMjBmb290fGVufDB8MHx8fDE3Njk3MDEyMjR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПАПА с огромной ЛАПОЙ вместо руки гладит котика — кот сплющивается как блин!"
    },
    // ===== НОВЫЕ СЛОВА =====
    { 
        pt: "os conhecidos", 
        ru: "знакомые", 
        imageQuery: "friends acquaintances meeting",
        imageUrl: "https://images.unsplash.com/photo-1758525226586-c9b75017de26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwYWNxdWFpbnRhbmNlcyUyMG1lZXRpbmd8ZW58MHwwfHx8MTc2OTcwMTIyNnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КОНЯ СИДО знают все знакомые"
    },
    { 
        pt: "Oxalá", 
        ru: "надеюсь", 
        imageQuery: "hope wish prayer",
        imageUrl: "https://images.unsplash.com/photo-1766150081827-a340ede885d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxob3BlJTIwd2lzaCUyMHByYXllcnxlbnwwfDB8fHwxNzY5NzAxMjI4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "О! ШАЛА-ла — надеюсь на удачу!"
    },
    { 
        pt: "soletrar", 
        ru: "произносить по буквам", 
        imageQuery: "spelling letters alphabet",
        imageUrl: "https://images.unsplash.com/photo-1640682171854-523a23a97fab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzcGVsbGluZyUyMGxldHRlcnMlMjBhbHBoYWJldHxlbnwwfDB8fHwxNzY5NzAxMjMwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СОЛЬ ЛЕТРА — соль по буквам: С-О-Л-Ь"
    },
    { 
        pt: "o receio", 
        ru: "страх", 
        imageQuery: "fear scared worried",
        imageUrl: "https://images.unsplash.com/photo-1599492920492-096e672a6789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmZWFyJTIwc2NhcmVkJTIwd29ycmllZHxlbnwwfDB8fHwxNzY5NzAxMjMyfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "РЕЦЕПТ страха — ресейо"
    },
    { 
        pt: "expôr", 
        ru: "показывать, выставлять", 
        imageQuery: "exhibition display show",
        imageUrl: "https://images.unsplash.com/photo-1532618448574-fa71ec0b6df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwZGlzcGxheSUyMHNob3d8ZW58MHwwfHx8MTc2OTcwMTIzNHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭКСПО — выставка, показывать"
    },
    { 
        pt: "no entanto", 
        ru: "однако", 
        imageQuery: "however contrast but",
        soundHint: "НО! ЭН ТАНТО — однако танцуем"
    },
    { 
        pt: "soltar", 
        ru: "отпускать", 
        imageQuery: "release let go free",
        imageUrl: "https://images.unsplash.com/photo-1600783486034-4faaa227e01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyZWxlYXNlJTIwbGV0JTIwZ28lMjBmcmVlfGVufDB8MHx8fDE3Njk3MDcyOTN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СОЛЬ ТАРелку отпустила"
    },
    { 
        pt: "a oficina", 
        ru: "мастерская, автосервис", 
        imageQuery: "workshop garage mechanic",
        imageUrl: "https://images.unsplash.com/photo-1599256871679-6a154745680b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGdhcmFnZSUyMG1lY2hhbmljfGVufDB8MHx8fDE3Njk3MDcyOTR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ОФИС + СИНА = мастерская"
    },
    { 
        pt: "aos poucos", 
        ru: "постепенно", 
        imageQuery: "slowly gradually step",
        soundHint: "АУ! ПОУКО — постепенно кричу"
    },
    { 
        pt: "capaz", 
        ru: "способный", 
        imageQuery: "capable able skilled",
        imageUrl: "https://images.unsplash.com/photo-1559911352-816690ce34cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjYXBhYmxlJTIwYWJsZSUyMHNraWxsZWR8ZW58MHwwfHx8MTc2OTcwNzI5OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАПЕЦ какой способный!"
    },
    { 
        pt: "cometer erros", 
        ru: "совершать ошибки", 
        imageQuery: "mistake error wrong",
        imageUrl: "https://images.unsplash.com/photo-1565184944956-70a161db60f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxtaXN0YWtlJTIwZXJyb3IlMjB3cm9uZ3xlbnwwfDB8fHwxNzY5NzA3MzAwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КОМЕТА с ЭРОС-ом — ошибка орбиты"
    },
    { 
        pt: "estar à vontade", 
        ru: "чувствовать себя комфортно", 
        imageQuery: "comfortable relaxed cozy",
        imageUrl: "https://images.unsplash.com/photo-1765918895026-753fec81b959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjb21mb3J0YWJsZSUyMHJlbGF4ZWQlMjBjb3p5fGVufDB8MHx8fDE3Njk3MDczMDJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭСТАР а ВОНТАДЕ — ВСТАТЬ удобно"
    },
    { 
        pt: "embora", 
        ru: "хотя", 
        imageQuery: "although however despite",
        soundHint: "ЭМ! БОРА хотя и поздно"
    },
    { 
        pt: "é provável", 
        ru: "вероятно", 
        imageQuery: "probably likely chance",
        soundHint: "ПРОВЕРЬ — вероятно правда"
    },
    { 
        pt: "é improvável", 
        ru: "маловероятно", 
        imageQuery: "unlikely improbable doubt",
        imageUrl: "https://images.unsplash.com/photo-1568573607914-9c9d34a5e127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx1bmxpa2VseSUyMGltcHJvYmFibGUlMjBkb3VidHxlbnwwfDB8fHwxNzY5NzA3MzA4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ИМ-ПРОВЕРЬ — маловероятно проверишь"
    },
    { 
        pt: "votar", 
        ru: "голосовать", 
        imageQuery: "vote election ballot",
        imageUrl: "https://images.unsplash.com/photo-1595126731003-755959b6baf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx2b3RlJTIwZWxlY3Rpb24lMjBiYWxsb3R8ZW58MHwwfHx8MTc2OTcwNzMxMHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ВОТАР — ВОТ АРмия избирателей штурмует урны, бюллетени летят как снег!"
    },
    { 
        pt: "a testemunha", 
        ru: "свидетель", 
        imageQuery: "witness court testimony",
        imageUrl: "https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3aXRuZXNzJTIwY291cnQlMjB0ZXN0aW1vbnl8ZW58MHwwfHx8MTc2OTcwNzMxMnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТЕСТЬ МУНЬКА — свидетель на свадьбе"
    },
    { 
        pt: "acreditar", 
        ru: "верить", 
        imageQuery: "believe trust faith",
        imageUrl: "https://images.unsplash.com/photo-1579028055657-90417f188257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxiZWxpZXZlJTIwdHJ1c3QlMjBmYWl0aHxlbnwwfDB8fHwxNzY5NzA3MzE0fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "А! КРЕДИТ АР — верю в кредит"
    },
    { 
        pt: "aperceber-se", 
        ru: "осознавать", 
        imageQuery: "realize understand aware",
        soundHint: "А! ПЕРЕЦ БЕР — осознал остроту"
    },
    { 
        pt: "duvidar", 
        ru: "сомневаться", 
        imageQuery: "doubt question uncertain",
        imageUrl: "https://images.unsplash.com/photo-1740817747908-7b12b6145a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkb3VidCUyMHF1ZXN0aW9uJTIwdW5jZXJ0YWlufGVufDB8MHx8fDE3Njk3MDczMTh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДУ ВИДАР — ДВА ВИДА = сомневаюсь какой"
    },
    { 
        pt: "apanhar o escaldão", 
        ru: "получить солнечный ожог", 
        imageQuery: "sunburn sun skin red",
        imageUrl: "https://images.unsplash.com/photo-1683975095875-fab62ccaddb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdW5idXJuJTIwc3VuJTIwc2tpbiUyMHJlZHxlbnwwfDB8fHwxNzY5NzA3MzIwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АПАНЬЯ ЭСКАЛЬДАО — обжёгся на ЭСКАЛАТОРЕ"
    },
    { 
        pt: "imprescindível", 
        ru: "необходимый", 
        imageQuery: "essential important must",
        soundHint: "ИМ ПРЕСС ИНДИЯ — прессе необходим"
    },
    { 
        pt: "caso", 
        ru: "если, в случае", 
        imageQuery: "case condition if",
        soundHint: "В этом КАЗОвом СЛУЧАЕ — чемодан открылся и оттуда выпрыгнул клоун!"
    },
    { 
        pt: "itens", 
        ru: "предметы", 
        imageQuery: "items objects things",
        imageUrl: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxpdGVtcyUyMG9iamVjdHMlMjB0aGluZ3N8ZW58MHwwfHx8MTc2OTcwNzMyNnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АЙ! ТЕНС предметов упало с полки — всё разбилось, кот убегает!"
    },
    { 
        pt: "o carregador de telemóvel", 
        ru: "зарядка для телефона", 
        imageQuery: "phone charger cable",
        imageUrl: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNoYXJnZXIlMjBjYWJsZXxlbnwwfDB8fHwxNzY5NzA3MzI4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАРРЕГАДОР — заКАРРячить телефон"
    },
    { 
        pt: "a carga", 
        ru: "заряд", 
        imageQuery: "charge battery power",
        imageUrl: "https://images.unsplash.com/photo-1458007683879-47560d7e33c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjaGFyZ2UlMjBiYXR0ZXJ5JTIwcG93ZXJ8ZW58MHwwfHx8MTc2OTcwNzMzMHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАРГА — ЗАРЯД КАРГо"
    },
    { 
        pt: "carregar", 
        ru: "заряжать; нажимать", 
        imageQuery: "charge press load",
        imageUrl: "https://images.unsplash.com/photo-1757728769016-3d144293a089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjaGFyZ2UlMjBwcmVzcyUyMGxvYWR8ZW58MHwwfHx8MTc2OTcwNzMzMnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАРРЕГАР — заКАРРячить батарею"
    },
    { 
        pt: "o penteado", 
        ru: "причёска", 
        imageQuery: "hairstyle hair salon",
        imageUrl: "https://images.unsplash.com/photo-1550791752-97b2f57d2b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGUlMjBoYWlyJTIwc2Fsb258ZW58MHwwfHx8MTc2OTcwNzMzNHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПЕНТЕАДО — ПЕНка для укладки"
    },
    { 
        pt: "o cabelo preso", 
        ru: "собранные волосы", 
        imageQuery: "ponytail tied hair",
        imageUrl: "https://images.unsplash.com/photo-1601938219471-fb3393955f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwb255dGFpbCUyMHRpZWQlMjBoYWlyfGVufDB8MHx8fDE3Njk3MDczMzV8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАБЕЛО ПРЕЗО — КАБЕЛЬ ПРИВЯЗан как волосы"
    },
    { 
        pt: "o rabo de cavalo", 
        ru: "хвостик (причёска)", 
        imageQuery: "ponytail horse tail",
        imageUrl: "https://images.unsplash.com/photo-1713471187137-b8223509b539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwb255dGFpbCUyMGhvcnNlJTIwdGFpbHxlbnwwfDB8fHwxNzY5NzA3MzM3fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "РАБО де КАВАЛО — хвост КАВАЛЕРА"
    },
    { 
        pt: "dispensar", 
        ru: "увольнять, обходиться без", 
        imageQuery: "dismiss fire without",
        imageUrl: "https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkaXNtaXNzJTIwZmlyZSUyMHdpdGhvdXR8ZW58MHwwfHx8MTc2OTcwNzM0MHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДИСПЕНСАР — ДИСПЕНСЕР уволен"
    },
    { 
        pt: "fundamental", 
        ru: "очень важный", 
        imageQuery: "fundamental important basic",
        soundHint: "ФУНДАМЕНТ — очень важен"
    },
    { 
        pt: "escaldar", 
        ru: "обжечь", 
        imageQuery: "burn scald hot",
        imageUrl: "https://images.unsplash.com/photo-1631364758416-d30d8c3a926f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxidXJuJTIwc2NhbGQlMjBob3R8ZW58MHwwfHx8MTc2OTcwNzM0NHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭСКАЛДАР — на ЭСКАЛАТОРЕ обжёгся"
    },
    { 
        pt: "queimar", 
        ru: "жечь, поджигать", 
        imageQuery: "burn fire flame",
        imageUrl: "https://images.unsplash.com/photo-1554311781-71942bb4e59d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxidXJuJTIwZmlyZSUyMGZsYW1lfGVufDB8MHx8fDE3Njk3MDczNDZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КЕЙМАР — КАЙМАК горит на сковороде"
    },
    { 
        pt: "o buraco", 
        ru: "дыра", 
        imageQuery: "hole pit gap",
        soundHint: "БУРАКО — БУРят дыру"
    },
    { 
        pt: "o orifício", 
        ru: "отверстие", 
        imageQuery: "hole opening aperture",
        imageUrl: "https://images.unsplash.com/photo-1657137966767-757d6ed7ac6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxob2xlJTIwb3BlbmluZyUyMGFwZXJ0dXJlfGVufDB8MHx8fDE3Njk3MDczNTB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ОРИФИСИО — ОФИС с отверстием"
    },
    { 
        pt: "os pneus", 
        ru: "шины", 
        imageQuery: "tire wheel car",
        imageUrl: "https://images.unsplash.com/photo-1703778981898-162e53237591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0aXJlJTIwd2hlZWwlMjBjYXJ8ZW58MHwwfHx8MTc2OTcwNzM1Mnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПНЕУС — ПНЕВМОшина"
    },
    { 
        pt: "o nadador", 
        ru: "пловец", 
        imageQuery: "swimmer swimming pool",
        imageUrl: "https://images.unsplash.com/photo-1640135055069-26852ff4c2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzd2ltbWVyJTIwc3dpbW1pbmclMjBwb29sfGVufDB8MHx8fDE3Njk3MDczNTR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "НАДАДОР — НАД водой АДОР плывёт"
    },
    { 
        pt: "temido", 
        ru: "пугающий, которого боятся", 
        imageQuery: "feared scary intimidating",
        imageUrl: "https://images.unsplash.com/photo-1765513275789-3fa26f20badc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmZWFyZWQlMjBzY2FyeSUyMGludGltaWRhdGluZ3xlbnwwfDB8fHwxNzY5NzA3MzU2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТЕМИДО — в ТЕМНОТЕ страшно"
    },
    { 
        pt: "o dispositivo", 
        ru: "устройство", 
        imageQuery: "device gadget technology",
        imageUrl: "https://images.unsplash.com/photo-1761645446921-27d641efa0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkZXZpY2UlMjBnYWRnZXQlMjB0ZWNobm9sb2d5fGVufDB8MHx8fDE3Njk3MDczNTh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДИСПОЗИТИВО — ДИСПОЗИЦИЯ устройства"
    },
    { 
        pt: "através de", 
        ru: "через", 
        imageQuery: "through across via",
        soundHint: "АТРАВЕШ — А ТРАВЫ через поле"
    },
    { 
        pt: "o cabo", 
        ru: "кабель, провод", 
        imageQuery: "cable wire cord",
        imageUrl: "https://images.unsplash.com/photo-1584809923235-fabdba83d1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjYWJsZSUyMHdpcmUlMjBjb3JkfGVufDB8MHx8fDE3Njk3MDczNjJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАБЕЛЬ вырвался из стены и КАБОй душит электрика — искры летят!"
    },
    { 
        pt: "a fé", 
        ru: "вера", 
        imageQuery: "faith belief religion",
        imageUrl: "https://images.unsplash.com/photo-1607545666078-25f57ed744b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmYWl0aCUyMGJlbGllZiUyMHJlbGlnaW9ufGVufDB8MHx8fDE3Njk3MDczNjN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФЕ — ФЕя верит в чудо"
    },
    { 
        pt: "as pessoas de Leste", 
        ru: "люди с востока", 
        imageQuery: "eastern people asia",
        imageUrl: "https://images.unsplash.com/photo-1597349594381-8879f0a1206b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxlYXN0ZXJuJTIwcGVvcGxlJTIwYXNpYXxlbnwwfDB8fHwxNzY5NzA3MzY1fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПЕСОАШ де ЛЕШТ — люди с ЛЕСТИ (востока)"
    },
    { 
        pt: "sugerir", 
        ru: "предлагать", 
        imageQuery: "suggest recommend propose",
        imageUrl: "https://images.unsplash.com/photo-1617376322364-09b7706ef949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdWdnZXN0JTIwcmVjb21tZW5kJTIwcHJvcG9zZXxlbnwwfDB8fHwxNzY5NzA3MzY3fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СУЖЕРИР — СУ! ЖЕРИ — предложи сыр!"
    },
    { 
        pt: "fugir", 
        ru: "убегать", 
        imageQuery: "escape run away flee",
        imageUrl: "https://images.unsplash.com/photo-1721884258632-a93d386ababf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxlc2NhcGUlMjBydW4lMjBhd2F5JTIwZmxlZXxlbnwwfDB8fHwxNzY5NzA3MzY5fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФУЖИР — ФУ! ЖИР убегает с тела"
    },
    // ===== ВТОРАЯ ПАРТИЯ =====
    { 
        pt: "por acaso", 
        ru: "случайно", 
        imageQuery: "accident random chance",
        soundHint: "ПОР АКАЗО — ПОРой ОКАЗИЯ случается"
    },
    { 
        pt: "as baleias", 
        ru: "киты", 
        imageQuery: "whale ocean sea",
        imageUrl: "https://images.unsplash.com/photo-1530099531892-0932c5324757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3aGFsZSUyMG9jZWFuJTIwc2VhfGVufDB8MHx8fDE3Njk3MDczNzN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "БАЛЕЙАШ — БАЛЕТ китов в океане"
    },
    { 
        pt: "o aluguer", 
        ru: "аренда", 
        imageQuery: "rent lease rental",
        imageUrl: "https://images.unsplash.com/photo-1760898002480-a89156856aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyZW50JTIwbGVhc2UlMjByZW50YWx8ZW58MHwwfHx8MTc2OTcwNzM3NXww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АЛУГЕР — АЛУ! ГЕРой арендует"
    },
    { 
        pt: "de antecedência", 
        ru: "заранее", 
        imageQuery: "advance prior beforehand",
        soundHint: "АНТЕ! СЕЛ заранее ДЕНЬги откладывать — теперь миллионер, все завидуют!"
    },
    { 
        pt: "a vedação", 
        ru: "забор", 
        imageQuery: "fence barrier wall",
        imageUrl: "https://images.unsplash.com/photo-1624285928647-75f414ca15d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmZW5jZSUyMGJhcnJpZXIlMjB3YWxsfGVufDB8MHx8fDE3Njk3MDczNzl8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ВЕДАСАО — ВЕДАть за забором"
    },
    { 
        pt: "o colchão", 
        ru: "матрас", 
        imageQuery: "mattress bed sleep",
        imageUrl: "https://images.unsplash.com/photo-1743748978909-169017ab0720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMGJlZCUyMHNsZWVwfGVufDB8MHx8fDE3Njk3MDczODF8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КОЛШАО — КОЛется на матрасе"
    },
    { 
        pt: "ano novo, vida nova", 
        ru: "новый год, новая жизнь", 
        imageQuery: "new year celebration fresh start",
        imageUrl: "https://images.unsplash.com/photo-1765667525131-70f351668b41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxuZXclMjB5ZWFyJTIwY2VsZWJyYXRpb24lMjBmcmVzaCUyMHN0YXJ0fGVufDB8MHx8fDE3Njk3MDczODN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "В НОВЫЙ ГОД — НОВАЯ ЖИЗНЬ! Человек выбрасывает старые вещи с балкона!"
    },
    { 
        pt: "doido/a", 
        ru: "сумасшедший", 
        imageQuery: "crazy mad insane",
        soundHint: "ДОЙДО — ДОЙДИ до сумасшествия"
    },
    { 
        pt: "reprovar", 
        ru: "провалить (экзамен)", 
        imageQuery: "fail exam test",
        imageUrl: "https://images.unsplash.com/photo-1659353884792-c2c21739820d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmYWlsJTIwZXhhbSUyMHRlc3R8ZW58MHwwfHx8MTc2OTcwNzM4N3ww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "РЕПРОВАР — РЕ-ПРОВАЛ экзамена"
    },
    { 
        pt: "andar a ler", 
        ru: "читать в последнее время", 
        imageQuery: "reading book lately",
        imageUrl: "https://images.unsplash.com/photo-1693128871234-178319fca4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwYm9vayUyMGxhdGVseXxlbnwwfDB8fHwxNzY5NzA3Mzg4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АНДАР а ЛЕР — ХОДИТЬ и ЧИТАТЬ"
    },
    { 
        pt: "andar cansada", 
        ru: "быть уставшим в последнее время", 
        imageQuery: "tired exhausted lately",
        soundHint: "АНДАР КАНСАДА — ХОДИТЬ уставшим"
    },
    { 
        pt: "trabalhador", 
        ru: "трудолюбивый", 
        imageQuery: "hardworking diligent worker",
        imageUrl: "https://images.unsplash.com/photo-1599981967200-89283dbcb3a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxoYXJkd29ya2luZyUyMGRpbGlnZW50JTIwd29ya2VyfGVufDB8MHx8fDE3Njk3MTExNjB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТРАБАЛЬЯДОР — ТРУБАч работяга"
    },
    { 
        pt: "preguiçoso", 
        ru: "ленивый", 
        imageQuery: "lazy sloth idle",
        imageUrl: "https://images.unsplash.com/photo-1724906791390-4ca04156aafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxsYXp5JTIwc2xvdGglMjBpZGxlfGVufDB8MHx8fDE3Njk3MTExNjJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПРЕГИСОЗО — ПРЕГРАДа лени"
    },
    { 
        pt: "descontraído", 
        ru: "расслабленный", 
        imageQuery: "relaxed casual chill",
        imageUrl: "https://images.unsplash.com/photo-1659087374131-6707281eba1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyZWxheGVkJTIwY2FzdWFsJTIwY2hpbGx8ZW58MHwwfHx8MTc2OTcxMTE2NHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДЕШКОНТРАИДО — ДЕШёвый КОНТРАКТ = расслабься"
    },
    { 
        pt: "ansioso", 
        ru: "тревожный", 
        imageQuery: "anxious nervous worried",
        imageUrl: "https://images.unsplash.com/photo-1614999776688-3980cc1e8640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwbmVydm91cyUyMHdvcnJpZWR8ZW58MHwwfHx8MTc2OTcxMTE2Nnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АНСИОЗО — АНАЛИЗ тревожный"
    },
    { 
        pt: "cuidadoso", 
        ru: "аккуратный, бережный", 
        imageQuery: "careful cautious neat",
        imageUrl: "https://images.unsplash.com/photo-1717298812095-692414f0cb13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjYXJlZnVsJTIwY2F1dGlvdXMlMjBuZWF0fGVufDB8MHx8fDE3Njk3MTExNjh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КУЙДАДОЗО — КУДА? ДОЗОР аккуратный"
    },
    { 
        pt: "delicado", 
        ru: "деликатный, нежный", 
        imageQuery: "delicate gentle soft",
        imageUrl: "https://images.unsplash.com/photo-1750580781761-5a800f3848db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkZWxpY2F0ZSUyMGdlbnRsZSUyMHNvZnR8ZW58MHwwfHx8MTc2OTcxMTE3MHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДЕЛИКАТЕС такой нежный — официант несёт его на цыпочках, дыша через раз!"
    },
    { 
        pt: "bruto", 
        ru: "грубый", 
        imageQuery: "rude rough brutal",
        soundHint: "БРУТО = БРУТАЛЬНЫЙ, грубый"
    },
    { 
        pt: "indelicado", 
        ru: "неделикатный, грубый", 
        imageQuery: "rude impolite tactless",
        soundHint: "ИНДЕЛИКАДО = НЕделикатный"
    },
    { 
        pt: "desinteressado", 
        ru: "незаинтересованный", 
        imageQuery: "uninterested indifferent bored",
        soundHint: "ДЕЗИНТЕРЕСАДО = ДЕЗ-ИНТЕРЕС"
    },
    { 
        pt: "interessado", 
        ru: "заинтересованный", 
        imageQuery: "interested curious engaged",
        imageUrl: "https://images.unsplash.com/photo-1758270704851-adff797a2010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxpbnRlcmVzdGVkJTIwY3VyaW91cyUyMGVuZ2FnZWR8ZW58MHwwfHx8MTc2OTcxMTE3OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ИНТЕРЕС такой сильный — глаза вылезают из орбит и тянутся к книге!"
    },
    { 
        pt: "bondoso", 
        ru: "добрый", 
        imageQuery: "kind good hearted nice",
        imageUrl: "https://images.unsplash.com/photo-1626480145636-a733bcfdcbc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxraW5kJTIwZ29vZCUyMGhlYXJ0ZWQlMjBuaWNlfGVufDB8MHx8fDE3Njk3MTExODB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "БОНДОЗО — БОНД добрый агент"
    },
    { 
        pt: "cruel", 
        ru: "жестокий", 
        imageQuery: "cruel harsh mean",
        soundHint: "КРУЭЛла де Виль так ЖЕСТОКА — она гонится за щенками с ножницами!"
    },
    { 
        pt: "humilde", 
        ru: "скромный", 
        imageQuery: "humble modest simple",
        soundHint: "УМИЛДЕ — УМИЛЬНЫЙ скромняга"
    },
    { 
        pt: "arrogante", 
        ru: "высокомерный", 
        imageQuery: "arrogant proud snobbish",
        soundHint: "АРОГАНТ задрал нос так высоко — врезался в люстру и повис на ней!"
    },
    { 
        pt: "carinhoso", 
        ru: "заботливый, ласковый", 
        imageQuery: "caring loving affectionate",
        imageUrl: "https://images.unsplash.com/photo-1758874089517-3b86e1f74258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjYXJpbmclMjBsb3ZpbmclMjBhZmZlY3Rpb25hdGV8ZW58MHwwfHx8MTc2OTcxMTE4N3ww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАРИНЬОЗО — КАРИНА заботливая"
    },
    { 
        pt: "frio", 
        ru: "холодный (в отношениях)", 
        imageQuery: "cold distant emotionless",
        imageUrl: "https://images.unsplash.com/photo-1737296968601-c4e3d8f765be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwZGlzdGFudCUyMGVtb3Rpb25sZXNzfGVufDB8MHx8fDE3Njk3MTExOTB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФРИО — ФРИгидный, холодный"
    },
    { 
        pt: "distante", 
        ru: "отстранённый", 
        imageQuery: "distant remote aloof",
        imageUrl: "https://images.unsplash.com/photo-1707320615512-116641ed8910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkaXN0YW50JTIwcmVtb3RlJTIwYWxvb2Z8ZW58MHwwfHx8MTc2OTcxMTE5MXww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДИШТАНТ = ДИСТАНЦИЯ, отстранён"
    },
    { 
        pt: "extrovertido", 
        ru: "общительный, экстраверт", 
        imageQuery: "extrovert social outgoing",
        imageUrl: "https://images.unsplash.com/photo-1714978444551-b938c47b6b4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxleHRyb3ZlcnQlMjBzb2NpYWwlMjBvdXRnb2luZ3xlbnwwfDB8fHwxNzY5NzExMTkzfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭКСТРАВЕРТ так болтает — у него рот растянулся до ушей, все убегают!"
    },
    { 
        pt: "expansivo", 
        ru: "открытый, общительный", 
        imageQuery: "open outgoing friendly",
        imageUrl: "https://images.unsplash.com/photo-1691267919827-406fcad64c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwb3V0Z29pbmclMjBmcmllbmRseXxlbnwwfDB8fHwxNzY5NzExMTk1fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭКСПАНСИВО = ЭКСПАНСИВНЫЙ, открытый"
    },
    { 
        pt: "tímido", 
        ru: "застенчивый", 
        imageQuery: "shy timid bashful",
        imageUrl: "https://images.unsplash.com/photo-1666796143743-01c8fbe5b9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzaHklMjB0aW1pZCUyMGJhc2hmdWx8ZW58MHwwfHx8MTc2OTcxMTE5N3ww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТИМИДО — ТИМ застенчивый"
    },
    { 
        pt: "prudente", 
        ru: "рассудительный, осторожный", 
        imageQuery: "prudent careful cautious",
        imageUrl: "https://images.unsplash.com/photo-1766973117689-1f4fad3c42b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwcnVkZW50JTIwY2FyZWZ1bCUyMGNhdXRpb3VzfGVufDB8MHx8fDE3Njk3MTExOTl8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПРУДЕНТЕ = ПРУДЕНЦИЯ, осторожность"
    },
    { 
        pt: "ponderado", 
        ru: "взвешенный", 
        imageQuery: "thoughtful balanced measured",
        imageUrl: "https://images.unsplash.com/photo-1670270103229-9a999f368bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0aG91Z2h0ZnVsJTIwYmFsYW5jZWQlMjBtZWFzdXJlZHxlbnwwfDB8fHwxNzY5NzExMjAxfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПОНДЕРАДО — ПОНДЕРАть, взвешивать"
    },
    { 
        pt: "imprudente", 
        ru: "неосторожный", 
        imageQuery: "reckless careless imprudent",
        soundHint: "ИМПРУДЕНТЕ = ИМ-пруденция, НЕосторожный"
    },
    { 
        pt: "impulsivo", 
        ru: "импульсивный", 
        imageQuery: "impulsive spontaneous rash",
        imageUrl: "https://images.unsplash.com/photo-1747398690599-577c697e787f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxpbXB1bHNpdmUlMjBzcG9udGFuZW91cyUyMHJhc2h8ZW58MHwwfHx8MTc2OTcxMTIwNXww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ИМПУЛЬС ударил в голову — он купил слона не думая, жена в шоке!"
    },
    { 
        pt: "sincero", 
        ru: "искренний", 
        imageQuery: "sincere honest genuine",
        soundHint: "СИНСЕРО = СИНСЕР (sincere), искренний"
    },
    { 
        pt: "mentiroso", 
        ru: "лживый", 
        imageQuery: "liar dishonest false",
        imageUrl: "https://images.unsplash.com/photo-1631088640423-dc048d6c2e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxsaWFyJTIwZGlzaG9uZXN0JTIwZmFsc2V8ZW58MHwwfHx8MTc2OTcxMTIwOXww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "МЕНТИРОЗО — МЕНТ врёт? Лживый!"
    },
    { 
        pt: "genuíno", 
        ru: "искренний, подлинный", 
        imageQuery: "genuine authentic real",
        imageUrl: "https://images.unsplash.com/photo-1530490125459-847a6d437825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxnZW51aW5lJTIwYXV0aGVudGljJTIwcmVhbHxlbnwwfDB8fHwxNzY5NzExMjExfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЖЕНя УНИкальный — его картина ПОДЛИННАЯ, эксперты падают в обморок!"
    },
    { 
        pt: "espontâneo", 
        ru: "спонтанный", 
        imageQuery: "spontaneous natural impulsive",
        imageUrl: "https://images.unsplash.com/photo-1504194699279-06555b45735c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzcG9udGFuZW91cyUyMG5hdHVyYWwlMjBpbXB1bHNpdmV8ZW58MHwwfHx8MTc2OTcxMTIxM3ww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СПОНТАННО начал петь в метро — все пассажиры подхватили, вагон трясётся!"
    },
    { 
        pt: "hipócrita", 
        ru: "лицемерный", 
        imageQuery: "hypocrite fake two faced",
        soundHint: "ИПОКРИТА = ИПОКРИТ, лицемер"
    },
    { 
        pt: "calculista", 
        ru: "расчётливый", 
        imageQuery: "calculating scheming cunning",
        imageUrl: "https://images.unsplash.com/photo-1675242314995-034d11bac319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdGluZyUyMHNjaGVtaW5nJTIwY3VubmluZ3xlbnwwfDB8fHwxNzY5NzExMjE3fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАЛЬКУЛИШТА — КАЛЬКУЛЯТОР расчётов"
    },
    { 
        pt: "falador", 
        ru: "разговорчивый", 
        imageQuery: "talkative chatty verbose",
        imageUrl: "https://images.unsplash.com/photo-1673515336677-ef1cf9e20ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0YWxrYXRpdmUlMjBjaGF0dHklMjB2ZXJib3NlfGVufDB8MHx8fDE3Njk3MTEyMTl8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФАЛАДОР — ФАЛА (говорит) много"
    },
    { 
        pt: "calado", 
        ru: "молчаливый", 
        imageQuery: "quiet silent reserved",
        imageUrl: "https://images.unsplash.com/photo-1609566603188-144fe4cad15c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMHNpbGVudCUyMHJlc2VydmVkfGVufDB8MHx8fDE3Njk3MTEyMjB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАЛАДО — КАЛАЧ молчит"
    },
    // ===== ТРЕТЬЯ ПАРТИЯ =====
    { 
        pt: "o mestrado", 
        ru: "магистратура", 
        imageQuery: "masters degree university graduation",
        imageUrl: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxtYXN0ZXJzJTIwZGVncmVlJTIwdW5pdmVyc2l0eSUyMGdyYWR1YXRpb258ZW58MHwwfHx8MTc2OTcxMTIyM3ww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "МЕШТРАДУ — МАСТЕР-ГРАД учёных"
    },
    { 
        pt: "a nutrição", 
        ru: "питание", 
        imageQuery: "nutrition food healthy diet",
        imageUrl: "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb24lMjBmb29kJTIwaGVhbHRoeSUyMGRpZXR8ZW58MHwwfHx8MTc2OTcxMTIyNHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "НУТРИСАО = НУТРИЦИЯ, питание"
    },
    { 
        pt: "as pinturas", 
        ru: "картины", 
        imageQuery: "paintings art gallery museum",
        imageUrl: "https://images.unsplash.com/photo-1563293743-a9761195b52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwYWludGluZ3MlMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDB8MHx8fDE3Njk3MTEyMjZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПИНТУРАШ — ПИНТы краски для картин"
    },
    { 
        pt: "o estacionamento", 
        ru: "парковка", 
        imageQuery: "parking lot cars",
        imageUrl: "https://images.unsplash.com/photo-1732061604970-55c6cdee3378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwbG90JTIwY2Fyc3xlbnwwfDB8fHwxNzY5NzExMjI4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭШТАСИОНАМЕНТО — СТАНЦИЯ машин = парковка"
    },
    { 
        pt: "suficiente", 
        ru: "достаточно", 
        imageQuery: "enough sufficient plenty",
        soundHint: "СУФле — ДОСТАТОЧНО! Повар так объелся, что катится по кухне как шар!"
    },
    { 
        pt: "os estranhos", 
        ru: "незнакомцы", 
        imageQuery: "strangers unknown people",
        imageUrl: "https://images.unsplash.com/photo-1553122272-f1f95ec1a52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdHJhbmdlcnMlMjB1bmtub3duJTIwcGVvcGxlfGVufDB8MHx8fDE3Njk3MTEyMzJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭШТРАНЬОШ — СТРАННЫЕ люди = незнакомцы"
    },
    { 
        pt: "os desconhecidos", 
        ru: "незнакомцы", 
        imageQuery: "strangers unknown faces",
        soundHint: "ДЕШКОНЬЕСИДОШ — ДЕС-КОНЯ не знаю = незнакомец"
    },
    { 
        pt: "o tecido", 
        ru: "ткань", 
        imageQuery: "fabric textile cloth",
        imageUrl: "https://images.unsplash.com/photo-1701964619775-b18422290cf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0aWxlJTIwY2xvdGh8ZW58MHwwfHx8MTc2OTcxMTIzNnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТЕСИДО — ТЕСИТЬ ткань"
    },
    { 
        pt: "leves", 
        ru: "лёгкие", 
        imageQuery: "light weightless feather",
        imageUrl: "https://images.unsplash.com/photo-1648015796638-c261b974cb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHdlaWdodGxlc3MlMjBmZWF0aGVyfGVufDB8MHx8fDE3Njk3MTEyMzh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛЕВЕШ — ЛЕВ легко прыгает"
    },
    { 
        pt: "abençoada", 
        ru: "благословенная", 
        imageQuery: "blessed holy divine",
        imageUrl: "https://images.unsplash.com/photo-1764416996882-964e5eb49a70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxibGVzc2VkJTIwaG9seSUyMGRpdmluZXxlbnwwfDB8fHwxNzY5NzExMjQwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АБЕНСОАДА — А! БЕН благословлён"
    },
    { 
        pt: "a bênção", 
        ru: "благословение", 
        imageQuery: "blessing prayer church",
        imageUrl: "https://images.unsplash.com/photo-1741485745318-4ee2f095758c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxibGVzc2luZyUyMHByYXllciUyMGNodXJjaHxlbnwwfDB8fHwxNzY5NzExMjQyfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "БЕНСАО — БЕН даёт благословение"
    },
    { 
        pt: "a torrada", 
        ru: "тост (хлеб)", 
        imageQuery: "toast bread breakfast",
        imageUrl: "https://images.unsplash.com/photo-1612827788868-c8632040ab64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0b2FzdCUyMGJyZWFkJTIwYnJlYWtmYXN0fGVufDB8MHx8fDE3Njk3MTEyNDN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТОРРАДА — ТОРТ-РАДость на завтрак"
    },
    { 
        pt: "torrar", 
        ru: "поджаривать", 
        imageQuery: "toast roast grill",
        imageUrl: "https://images.unsplash.com/photo-1767320235647-8b40bfdc25ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx0b2FzdCUyMHJvYXN0JTIwZ3JpbGx8ZW58MHwwfHx8MTc2OTcxMTI0Nnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТОРРАР — ТОРт жарится"
    },
    { 
        pt: "o governo", 
        ru: "правительство", 
        imageQuery: "government parliament politics",
        imageUrl: "https://images.unsplash.com/photo-1757860090557-2196e39d3bfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcGFybGlhbWVudCUyMHBvbGl0aWNzfGVufDB8MHx8fDE3Njk3MTEyNDh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ГОВЕРНО — ГОВОРит правительство"
    },
    { 
        pt: "o Estado", 
        ru: "государство", 
        imageQuery: "state government country",
        imageUrl: "https://images.unsplash.com/photo-1634213585032-9addda9fd695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdGF0ZSUyMGdvdmVybm1lbnQlMjBjb3VudHJ5fGVufDB8MHx8fDE3Njk3MTEyNTB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Э! ШТАт ДУмает он ГОСУДАРСТВО! Губернатор надел корону и требует поклонов!"
    },
    { 
        pt: "a abelha", 
        ru: "пчела", 
        imageQuery: "bee honey insect",
        imageUrl: "https://images.unsplash.com/photo-1718012934654-69219f3fcd3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxiZWUlMjBob25leSUyMGluc2VjdHxlbnwwfDB8fHwxNzY5NzExMjUxfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АБЕЛЬЯ — А! БЕЛЬЯ пчела ужалила"
    },
    { 
        pt: "sou pobre, mas honrado", 
        ru: "я бедный, но честный", 
        imageQuery: "poor honest humble dignity",
        soundHint: "СОУ ПОБРЕ — я БЕДНЫЙ, но ЧЕСТНЫЙ! Бомж возвращает найденный кошелёк миллионеру!"
    },
    { 
        pt: "ao modo como", 
        ru: "таким образом, как", 
        imageQuery: "way manner method",
        soundHint: "АО МОДУ КОМУ — по МОДЕ как"
    },
    { 
        pt: "à maneira como", 
        ru: "таким образом, как", 
        imageQuery: "way manner style",
        imageUrl: "https://images.unsplash.com/photo-1696654149774-6674b4d1ee35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3YXklMjBtYW5uZXIlMjBzdHlsZXxlbnwwfDB8fHwxNzY5NzI0MDU4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "А МАНЕЙРА КОМУ — по МАНЕРЕ как"
    },
    { 
        pt: "lamento muito", 
        ru: "мне очень жаль", 
        imageQuery: "sorry sad regret",
        imageUrl: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzb3JyeSUyMHNhZCUyMHJlZ3JldHxlbnwwfDB8fHwxNzY5NzI0MDYwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛАМЕНТО МУЙТО — ЛАМЕНТ (плач) = жаль"
    },
    { 
        pt: "picar", 
        ru: "жалить, кусать", 
        imageQuery: "sting bite insect",
        imageUrl: "https://images.unsplash.com/photo-1682443123657-c63117054838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdGluZyUyMGJpdGUlMjBpbnNlY3R8ZW58MHwwfHx8MTc2OTcyNDA2Mnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПИКАР — ПИКа жалит остриём"
    },
    { 
        pt: "o lazer", 
        ru: "досуг", 
        imageQuery: "leisure relaxation free time",
        imageUrl: "https://images.unsplash.com/photo-1769674110349-f9f43cf3cb8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxsZWlzdXJlJTIwcmVsYXhhdGlvbiUyMGZyZWUlMjB0aW1lfGVufDB8MHx8fDE3Njk3MjQwNjR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛАЗЕР — ЛАЗЕРное шоу на досуге"
    },
    { 
        pt: "deslizar", 
        ru: "скользить", 
        imageQuery: "slide slip glide",
        soundHint: "ДЕШЛИЗАР — ДЕШёвый ЛИЗУН скользит"
    },
    { 
        pt: "caseiro", 
        ru: "домашний", 
        imageQuery: "homemade house domestic",
        imageUrl: "https://images.unsplash.com/photo-1660997598847-bdad1ad226c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGhvdXNlJTIwZG9tZXN0aWN8ZW58MHwwfHx8MTc2OTcyNDA2OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАЗЕЙРО — КАЗАН домашний"
    },
    { 
        pt: "emprestar", 
        ru: "одалживать (давать)", 
        imageQuery: "lend give borrow",
        imageUrl: "https://images.unsplash.com/photo-1761048166535-768b4cf8ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxsZW5kJTIwZ2l2ZSUyMGJvcnJvd3xlbnwwfDB8fHwxNzY5NzI0MDcwfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭМПРЕШТАР — ЭМ! ПРЕСТАР даёт в долг"
    },
    { 
        pt: "pedir emprestado", 
        ru: "брать в долг", 
        imageQuery: "borrow ask loan",
        imageUrl: "https://images.unsplash.com/photo-1556064325-bd1048b532f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxib3Jyb3clMjBhc2slMjBsb2FufGVufDB8MHx8fDE3Njk3MjQwNzJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПЕДИР ЭМПРЕШТАДУ — ПЕДРО просит в долг"
    },
    { 
        pt: "o entretenimento", 
        ru: "развлечение", 
        imageQuery: "entertainment fun leisure",
        imageUrl: "https://images.unsplash.com/photo-1768121496213-6687124ce7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwZnVuJTIwbGVpc3VyZXxlbnwwfDB8fHwxNzY5NzI0MDc0fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АНТРЕ (вход) в ТЕНТ с развлечениями — клоуны выскакивают и пугают!"
    },
    { 
        pt: "a lata de spray", 
        ru: "баллончик спрея", 
        imageQuery: "spray can aerosol",
        imageUrl: "https://images.unsplash.com/photo-1553106364-741d67315829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzcHJheSUyMGNhbiUyMGFlcm9zb2x8ZW58MHwwfHx8MTc2OTcyNDA3Nnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛАТА де ШПРЕЙ — ЛАТА (банка) СПРЕЯ"
    },
    { 
        pt: "que nojo!", 
        ru: "как противно!", 
        imageQuery: "disgusting gross yuck",
        imageUrl: "https://images.unsplash.com/photo-1730331775478-97f975342ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkaXNndXN0aW5nJTIwZ3Jvc3MlMjB5dWNrfGVufDB8MHx8fDE3Njk3MjQwNzh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КЕ НОЖО! — НОЖ в еде — противно!"
    },
    { 
        pt: "comida georgiana", 
        ru: "грузинская еда", 
        imageQuery: "georgian food khachapuri",
        imageUrl: "https://images.unsplash.com/photo-1659275798237-c46d251979bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxnZW9yZ2lhbiUyMGZvb2QlMjBraGFjaGFwdXJpfGVufDB8MHx8fDE3Njk3MjQwODB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КОМИДА ЖОРЖИАНА — КОМИДА = еда"
    },
    { 
        pt: "sagrado", 
        ru: "священный", 
        imageQuery: "sacred holy divine",
        imageUrl: "https://images.unsplash.com/photo-1629306712880-62aa32a78101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzYWNyZWQlMjBob2x5JTIwZGl2aW5lfGVufDB8MHx8fDE3Njk3MjQwODJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "САГРАДУ — САГа священная"
    },
    { 
        pt: "crocante", 
        ru: "хрустящий", 
        imageQuery: "crunchy crispy chips",
        imageUrl: "https://images.unsplash.com/photo-1760997707695-f0b5527e5de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjcnVuY2h5JTIwY3Jpc3B5JTIwY2hpcHN8ZW58MHwwfHx8MTc2OTcyNDA4NHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КРОКАНТЕ — КРОКодил хрустит"
    },
    { 
        pt: "sou licenciada em", 
        ru: "у меня диплом по", 
        imageQuery: "degree diploma graduate",
        imageUrl: "https://images.unsplash.com/photo-1627556704353-016baeb12c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkZWdyZWUlMjBkaXBsb21hJTIwZ3JhZHVhdGV8ZW58MHwwfHx8MTc2OTcyNDA4Nnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СОУ ЛИСЕНСИАДА — есть ЛИЦЕНЗИЯ (диплом)"
    },
    { 
        pt: "a riqueza", 
        ru: "богатство", 
        imageQuery: "wealth rich money gold",
        imageUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjByaWNoJTIwbW9uZXklMjBnb2xkfGVufDB8MHx8fDE3Njk3MjQwODh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "РИКЕЗА — РИКИ богатый"
    },
    { 
        pt: "a ameixa", 
        ru: "слива", 
        imageQuery: "plum fruit purple",
        imageUrl: "https://images.unsplash.com/photo-1762328868487-3054874f5361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwbHVtJTIwZnJ1aXQlMjBwdXJwbGV8ZW58MHwwfHx8MTc2OTcyNDA5MHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АМЕЙША — А! МЕЙША ест сливу"
    },
    { 
        pt: "prevenir", 
        ru: "предотвращать", 
        imageQuery: "prevent stop protect",
        imageUrl: "https://images.unsplash.com/photo-1648949298999-982e36bb1c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwcmV2ZW50JTIwc3RvcCUyMHByb3RlY3R8ZW58MHwwfHx8MTc2OTcyNDA5Mnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПРЕВЕНИР — ПРЕВЕНция, предотвращение"
    },
    { 
        pt: "a pena", 
        ru: "перо", 
        imageQuery: "feather bird quill",
        imageUrl: "https://images.unsplash.com/photo-1697663580521-92fd2744d0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmZWF0aGVyJTIwYmlyZCUyMHF1aWxsfGVufDB8MHx8fDE3Njk3MjQwOTR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПЕНА — ПЕНа лёгкая как перо"
    },
    { 
        pt: "que pena", 
        ru: "как жаль", 
        imageQuery: "pity sorry sad",
        imageUrl: "https://images.unsplash.com/photo-1707830324398-8b535eb6a313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwaXR5JTIwc29ycnklMjBzYWR8ZW58MHwwfHx8MTc2OTcyNDA5Nnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КЕ ПЕНА — какая ПЕНА слёз = жаль"
    },
    // ===== ЧЕТВЁРТАЯ ПАРТИЯ =====
    { 
        pt: "cabelo loiro", 
        ru: "светлые волосы", 
        imageQuery: "blond hair golden",
        imageUrl: "https://images.unsplash.com/photo-1573748674540-69c6b511f812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxibG9uZCUyMGhhaXIlMjBnb2xkZW58ZW58MHwwfHx8MTc2OTcyNDA5OHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КАБЕЛУ ЛОЙРУ — КАБЕЛЬ ЛОЙяльно светлый"
    },
    { 
        pt: "comportar-se", 
        ru: "вести себя", 
        imageQuery: "behave behavior manners",
        imageUrl: "https://images.unsplash.com/photo-1609106255719-9b792f5ea253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxiZWhhdmUlMjBiZWhhdmlvciUyMG1hbm5lcnN8ZW58MHwwfHx8MTc2OTcyNDEwMHww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "КОМПОРТАР-СЕ — КОМПОРТамент = поведение"
    },
    { 
        pt: "portar-se", 
        ru: "вести себя", 
        imageQuery: "behave conduct manners",
        imageUrl: "https://images.unsplash.com/photo-1705020518968-a253ef0aebac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxiZWhhdmUlMjBjb25kdWN0JTIwbWFubmVyc3xlbnwwfDB8fHwxNzY5NzI0MTAyfDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПОРТАР-СЕ — ПОРТной ведёт себя прилично"
    },
    { 
        pt: "a bicha", 
        ru: "очередь; квир", 
        imageQuery: "queue line waiting",
        imageUrl: "https://images.unsplash.com/photo-1763619814380-1637cdf5f796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxxdWV1ZSUyMGxpbmUlMjB3YWl0aW5nfGVufDB8MHx8fDE3Njk3MjQxMDR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "БИША — БИШка стоит в очереди"
    },
    { 
        pt: "o objetivo", 
        ru: "цель", 
        imageQuery: "goal target objective",
        imageUrl: "https://images.unsplash.com/photo-1767972463265-3668dd44bb87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxnb2FsJTIwdGFyZ2V0JTIwb2JqZWN0aXZlfGVufDB8MHx8fDE3Njk3MjQxMDZ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ОБЖЕктив камеры нацелен на ЦЕЛЬ — фотограф прыгает за идеальным кадром!"
    },
    { 
        pt: "a ovelha", 
        ru: "овца", 
        imageQuery: "sheep lamb wool",
        imageUrl: "https://images.unsplash.com/photo-1719502044471-2187a7d36a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzaGVlcCUyMGxhbWIlMjB3b29sfGVufDB8MHx8fDE3Njk3MjQxMDh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ОВЕЛЬЯ — ОВЕЧКА Веля"
    },
    { 
        pt: "a vaidade", 
        ru: "тщеславие", 
        imageQuery: "vanity pride mirror",
        soundHint: "ВАИДАДЕ — ВАЙ! ДАДА тщеславный"
    },
    { 
        pt: "vaidoso", 
        ru: "тщеславный", 
        imageQuery: "vain proud conceited",
        imageUrl: "https://images.unsplash.com/photo-1731123359668-686234c1f5dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx2YWluJTIwcHJvdWQlMjBjb25jZWl0ZWR8ZW58MHwwfHx8MTc2OTcyNDExMnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ВАЙДОЗО — ВАЙ! ДОЗОР тщеславных"
    },
    { 
        pt: "os patins", 
        ru: "ролики", 
        imageQuery: "rollerblades skating wheels",
        imageUrl: "https://images.unsplash.com/photo-1707126776012-43c753771f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxyb2xsZXJibGFkZXMlMjBza2F0aW5nJTIwd2hlZWxzfGVufDB8MHx8fDE3Njk3MjQxMTR8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ПАТИНШ — ПАТи на роликах"
    },
    { 
        pt: "girar", 
        ru: "вращаться", 
        imageQuery: "spin rotate turn",
        imageUrl: "https://images.unsplash.com/photo-1622525759119-db152b643a0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzcGluJTIwcm90YXRlJTIwdHVybnxlbnwwfDB8fHwxNzY5NzI0MTE2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЖИРАР — ЖИРА вращается на сковороде"
    },
    { 
        pt: "o escorrega", 
        ru: "горка (детская)", 
        imageQuery: "slide playground children",
        imageUrl: "https://images.unsplash.com/photo-1605813968977-07f8b75c0bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzbGlkZSUyMHBsYXlncm91bmQlMjBjaGlsZHJlbnxlbnwwfDB8fHwxNzY5NzI0MTE4fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭШКОРРЕГА — ЭСКОРТ с горки"
    },
    { 
        pt: "escorregar", 
        ru: "поскользнуться", 
        imageQuery: "slip slide fall",
        imageUrl: "https://images.unsplash.com/photo-1691293882027-177e51726845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzbGlwJTIwc2xpZGUlMjBmYWxsfGVufDB8MHx8fDE3Njk3MjQxMjB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭШКОРРЕГАР — ЭСКОРТ поскользнулся"
    },
    { 
        pt: "escorregadio", 
        ru: "скользкий", 
        imageQuery: "slippery wet floor",
        imageUrl: "https://images.unsplash.com/photo-1762179698793-f87ba0639587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzbGlwcGVyeSUyMHdldCUyMGZsb29yfGVufDB8MHx8fDE3Njk3MjQxMjJ8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭШКОРРЕГАДИО — ЭСКОРТ ГАДкий скользкий"
    },
    { 
        pt: "atrair", 
        ru: "привлекать", 
        imageQuery: "attract magnet pull",
        imageUrl: "https://images.unsplash.com/photo-1741666998073-7df07563d4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxhdHRyYWN0JTIwbWFnbmV0JTIwcHVsbHxlbnwwfDB8fHwxNzY5NzI0MTI0fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "А! ТРАктор ПРИТЯГИВАЕТ всех магнитом — люди летят к нему со всех сторон!"
    },
    { 
        pt: "atraído", 
        ru: "привлечённый", 
        imageQuery: "attracted drawn interested",
        soundHint: "А! ТРАктор ИДУ к нему — ПРИВЛЕЧЁН магнитной силой, ноги скользят!"
    },
    { 
        pt: "quem corre por gosto não cansa", 
        ru: "кто любит дело — не устаёт", 
        imageQuery: "passion work love motivation",
        imageUrl: "https://images.unsplash.com/photo-1573288810105-cf416af9186d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxwYXNzaW9uJTIwd29yayUyMGxvdmUlMjBtb3RpdmF0aW9ufGVufDB8MHx8fDE3Njk3MjQxMjh8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "Кто бежит с удовольствием — не устаёт"
    },
    { 
        pt: "mais vale tarde do que nunca", 
        ru: "лучше поздно, чем никогда", 
        imageQuery: "late better never time",
        soundHint: "МАЙШ ВАЛЕ ТАРДЕ — больше ценит поздно"
    },
    { 
        pt: "a desilusão", 
        ru: "разочарование", 
        imageQuery: "disappointment sad let down",
        imageUrl: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkaXNhcHBvaW50bWVudCUyMHNhZCUyMGxldCUyMGRvd258ZW58MHwwfHx8MTc2OTcyNDEzMnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ДЕЗИЛУЗАО — ДЕЗ-ИЛЛЮЗИЯ = разочарование"
    },
    { 
        pt: "a expetativa", 
        ru: "ожидание", 
        imageQuery: "expectation hope waiting",
        soundHint: "ЭШ! ПЕТя ТЯНЕТ шею в ОЖИДАНИИ — так долго ждал, что шея стала как у жирафа!"
    },
    { 
        pt: "esgotados", 
        ru: "распроданы", 
        imageQuery: "sold out empty tickets",
        imageUrl: "https://images.unsplash.com/photo-1616010650990-20e8c46a63ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzb2xkJTIwb3V0JTIwZW1wdHklMjB0aWNrZXRzfGVufDB8MHx8fDE3Njk3MjQxMzV8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭШГОТАДОШ — ЭШ! ГОТОВО! Распродано!"
    },
    { 
        pt: "bilhetes gratuitos", 
        ru: "бесплатные билеты", 
        imageQuery: "free tickets concert",
        imageUrl: "https://images.unsplash.com/photo-1679130707518-bc6561f0a7b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwdGlja2V0cyUyMGNvbmNlcnR8ZW58MHwwfHx8MTc2OTcyNDEzN3ww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "БИЛЬЕТЕШ ГРАТУИТОШ — БИЛЕТЫ ГРАТИС"
    },
    { 
        pt: "a tourada", 
        ru: "коррида", 
        imageQuery: "bullfight bull arena",
        imageUrl: "https://images.unsplash.com/photo-1759532078994-67f70adb2f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxidWxsZmlnaHQlMjBidWxsJTIwYXJlbmF8ZW58MHwwfHx8MTc2OTcyNDEzOXww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТУРАДА — ТУР быка на арене"
    },
    { 
        pt: "o touro", 
        ru: "бык", 
        imageQuery: "bull horns animal",
        imageUrl: "https://images.unsplash.com/photo-1723974306244-5d114d4d7ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxidWxsJTIwaG9ybnMlMjBhbmltYWx8ZW58MHwwfHx8MTc2OTcyNDE0MXww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ТОУРУ — ТУР бычий"
    },
    { 
        pt: "infelizmente", 
        ru: "к сожалению", 
        imageQuery: "unfortunately sad regret",
        imageUrl: "https://images.unsplash.com/photo-1707830324398-8b535eb6a313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx1bmZvcnR1bmF0ZWx5JTIwc2FkJTIwcmVncmV0fGVufDB8MHx8fDE3Njk3MjQxNDN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ИНФЕЛИШМЕНТЕ — ИН-ФЕЛИШ = несчастливо"
    },
    { 
        pt: "a greve geral", 
        ru: "всеобщая забастовка", 
        imageQuery: "general strike protest",
        imageUrl: "https://images.unsplash.com/photo-1608576156180-4479395f7b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxnZW5lcmFsJTIwc3RyaWtlJTIwcHJvdGVzdHxlbnwwfDB8fHwxNzY5NzI0MTQ1fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ГРЕВЕ ЖЕРАЛ — ГРЕВЦЫ ЖЁСТКО бастуют"
    },
    { 
        pt: "o fornecedor", 
        ru: "поставщик", 
        imageQuery: "supplier vendor business",
        imageUrl: "https://images.unsplash.com/photo-1721041774700-1f3ca7160ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdXBwbGllciUyMHZlbmRvciUyMGJ1c2luZXNzfGVufDB8MHx8fDE3Njk3MjQxNDd8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФОРНЕСЕДОР — ФОРНитура от ПОСТАВЩИКА"
    },
    { 
        pt: "fornecer", 
        ru: "поставлять", 
        imageQuery: "supply provide deliver",
        imageUrl: "https://images.unsplash.com/photo-1598546937882-4fa25fa29418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBwcm92aWRlJTIwZGVsaXZlcnxlbnwwfDB8fHwxNzY5NzI0MTQ5fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ФОРНЕСЕР — ФОРНитуру поставлять"
    },
    { 
        pt: "a lã", 
        ru: "шерсть", 
        imageQuery: "wool yarn sheep",
        imageUrl: "https://images.unsplash.com/photo-1624362774821-7676e1709acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHx3b29sJTIweWFybiUyMHNoZWVwfGVufDB8MHx8fDE3Njk3MjQxNTF8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЛА — ЛАма даёт шерсть"
    },
    { 
        pt: "o algodão", 
        ru: "хлопок", 
        imageQuery: "cotton fabric soft",
        imageUrl: "https://images.unsplash.com/photo-1733714655023-915dff8cf4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxjb3R0b24lMjBmYWJyaWMlMjBzb2Z0fGVufDB8MHx8fDE3Njk3MjQxNTN8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "АЛГОДАО — АЛГОритм ДАО хлопка"
    },
    { 
        pt: "fixo", 
        ru: "фиксированный", 
        imageQuery: "fixed static stable",
        soundHint: "ФИШКА прибита к столу — ФИКСИРОВАННАЯ цена, торговаться бесполезно!"
    },
    { 
        pt: "o alojamento", 
        ru: "жильё, проживание", 
        imageQuery: "accommodation housing hotel",
        soundHint: "АЛОЖАМЕНТУ — А ЛЁЖА МЕНТУ = где лежать"
    },
    { 
        pt: "o batismo", 
        ru: "крещение", 
        imageQuery: "baptism church christening",
        soundHint: "БАТИШМУ — БАТЯ крестит"
    },
    { 
        pt: "aliás", 
        ru: "кстати, впрочем", 
        imageQuery: "by the way furthermore",
        soundHint: "АЛИАШ — А! ЛИАна, кстати..."
    },
    { 
        pt: "mergulhar", 
        ru: "нырять", 
        imageQuery: "dive underwater swimming",
        soundHint: "МЕРГУЛЬЯР — МЕРГает и ГУЛЯет под водой"
    },
    { 
        pt: "cume da montanha", 
        ru: "вершина горы", 
        imageQuery: "mountain top peak summit",
        soundHint: "КУМЕ да МОНТАНЬЯ — КУМА на горе"
    },
    { 
        pt: "perdurar", 
        ru: "длиться, сохраняться", 
        imageQuery: "last endure persist",
        soundHint: "ПЕРДУРАР — ПЕРДюрить = выдержать долго"
    },
    // ===== ПЯТАЯ ПАРТИЯ =====
    { 
        pt: "o presépio", 
        ru: "рождественский вертеп", 
        imageQuery: "nativity scene christmas",
        soundHint: "ПРЕЗЕПИУ — ПРЕЗент ЕПИскопу на Рождество"
    },
    { 
        pt: "as competências", 
        ru: "навыки, компетенции", 
        imageQuery: "skills competence abilities",
        soundHint: "КОМПЕТЕНТный специалист жонглирует десятью задачами — босс аплодирует!"
    },
    { 
        pt: "julgar", 
        ru: "судить", 
        imageQuery: "judge court verdict",
        soundHint: "ЖУЛГАР — ЖУЛИК на суде"
    },
    { 
        pt: "fazer um julgamento", 
        ru: "выносить суждение", 
        imageQuery: "judgment decision court",
        soundHint: "ФАЗЕР ЖУЛГАМЕНТУ — делать суждение"
    },
    { 
        pt: "o feriado", 
        ru: "выходной день", 
        imageQuery: "holiday day off calendar",
        soundHint: "ФЕРИАДУ — ФЕРия выходного дня"
    },
    { 
        pt: "as férias", 
        ru: "каникулы, отпуск", 
        imageQuery: "vacation holiday beach",
        soundHint: "ФЕРИАШ — ФЕРия отпуска"
    },
    { 
        pt: "o ouro", 
        ru: "золото", 
        imageQuery: "gold treasure shiny",
        soundHint: "ОУРУ — ОРУДУЙ золотом"
    },
    { 
        pt: "a prata", 
        ru: "серебро", 
        imageQuery: "silver metal shiny",
        soundHint: "ПРАТА — ПРАТо серебряное"
    },
    { 
        pt: "envelhecer", 
        ru: "стареть", 
        imageQuery: "aging old wrinkles",
        soundHint: "ЭНВЕЛЬЕСЕР — ЭН ВЕЛЬЕ стареет"
    },
    { 
        pt: "aproximar-se de", 
        ru: "приближаться к", 
        imageQuery: "approach come closer near",
        soundHint: "А! ПРОКСИмити — датчик орёт, когда ПРИБЛИЖАЕШЬСЯ, все подпрыгивают!"
    },
    { 
        pt: "reconhecer", 
        ru: "узнавать, признавать", 
        imageQuery: "recognize acknowledge face",
        soundHint: "РЕКОгносцировка — шпион УЗНАЁТ врага и прячется за газетой с дыркой!"
    },
    { 
        pt: "a lágrima", 
        ru: "слеза", 
        imageQuery: "tear crying sad",
        soundHint: "ЛАГРИМА — ЛАГерь РИМА плачет слезами"
    },
    { 
        pt: "querer dizer", 
        ru: "означать", 
        imageQuery: "mean meaning definition",
        soundHint: "КЕРЕР ДИЗЕР — хотеть сказать = означать"
    },
    { 
        pt: "abraçar", 
        ru: "обнимать", 
        imageQuery: "hug embrace arms",
        soundHint: "АБРАСАР — АБРАкадабра СА-обнять"
    },
    { 
        pt: "quem conta um conto acrescenta um ponto", 
        ru: "кто рассказывает — приукрашивает", 
        imageQuery: "storytelling exaggerate tale",
        soundHint: "Кто считает сказку — добавит ПОНТ (пункт)"
    },
    { 
        pt: "dar uma volta", 
        ru: "прогуляться", 
        imageQuery: "stroll walk around",
        soundHint: "ДАР УМА ВОЛТА — дать круг = прогулка"
    },
    { 
        pt: "patinagem no gelo", 
        ru: "катание на коньках", 
        imageQuery: "ice skating rink",
        soundHint: "ПАТИНАЖЕМ НУ ЖЕЛУ — ПАТи на ЖЕЛЕ (льду)"
    },
    { 
        pt: "patinar", 
        ru: "кататься на коньках", 
        imageQuery: "skating ice skates",
        soundHint: "ПАТИНАР — ПАТи катается"
    },
    { 
        pt: "a pista de gelo", 
        ru: "каток", 
        imageQuery: "ice rink skating",
        soundHint: "ПИШТА де ЖЕЛУ — ПИСТА из ЖЕЛЕ"
    },
    { 
        pt: "a fila", 
        ru: "очередь", 
        imageQuery: "queue line waiting",
        soundHint: "ФИЛА — ФИЛА людей в очереди"
    },
    { 
        pt: "a roda gigante", 
        ru: "колесо обозрения", 
        imageQuery: "ferris wheel amusement park",
        soundHint: "РОДА ЖИГАНТЕ — РОДА ГИГАНТСКАЯ"
    },
    { 
        pt: "o carrossel", 
        ru: "карусель", 
        imageQuery: "carousel merry go round",
        soundHint: "КАРУСЕЛЬ раскрутилась так — дети летят по орбите как спутники, родители визжат!"
    },
    { 
        pt: "é uma seca", 
        ru: "это скучно", 
        imageQuery: "boring bored yawn",
        soundHint: "Э УМА СЕКА — СУХО и скучно"
    },
    { 
        pt: "deixar tudo para a última hora", 
        ru: "откладывать на последний момент", 
        imageQuery: "procrastination last minute deadline",
        soundHint: "ДЕЙШАР ТУДУ пара УЛТИМА ОРА — последний час"
    },
    { 
        pt: "bué", 
        ru: "очень, много (сленг)", 
        imageQuery: "very much lot slang",
        soundHint: "БУЕ — БУЕ-навка = много"
    },
    { 
        pt: "o pastor", 
        ru: "пастух", 
        imageQuery: "shepherd sheep herding",
        soundHint: "ПАСТОР в рясе пасёт овец — они слушают проповедь и кивают головами!"
    },
    { 
        pt: "a missa do Galo", 
        ru: "рождественская месса", 
        imageQuery: "christmas mass church midnight",
        soundHint: "МИССА ДО ГАЛУ — месса ПЕТУХА (на рассвете)"
    },
    { 
        pt: "a joia", 
        ru: "драгоценность", 
        imageQuery: "jewel gem diamond",
        soundHint: "ЖОЯ — ЖОАН носит драгоценности"
    },
    { 
        pt: "o barro", 
        ru: "глина", 
        imageQuery: "clay pottery mud",
        soundHint: "БАРРУ — БАРРикада из глины"
    },
    { 
        pt: "as atividades lúdicas", 
        ru: "игровые занятия", 
        imageQuery: "games activities fun play",
        soundHint: "АТИВИДАДЕШ ЛЮДИКАШ — ЛЮДИ КАк играют"
    },
    { 
        pt: "a sombra", 
        ru: "тень", 
        imageQuery: "shadow dark silhouette",
        soundHint: "СОМБРА — СОМ БРАл тень"
    },
    { 
        pt: "o comportamento", 
        ru: "поведение", 
        imageQuery: "behavior conduct manner",
        soundHint: "КОМПОРТАМЕНТУ = КОМПОРТАМЕНТ, поведение"
    }
];

// ==================== ТЕМАТИЧЕСКИЕ СПИСКИ ПО УРОВНЯМ ====================

const THEMED_LISTS = {
    // ========== МЕДИЦИНА ==========
    "medico_a2": {
        name: "Básico",
        category: "medicina",
        categoryName: "🏥 Medicina",
        words: [
            { pt: "a cabeça", ru: "голова", imageQuery: "head", soundHint: "КАБЕСА — КАБЕСОН (большая голова) думает!" },
            { pt: "o braço", ru: "рука (от плеча)", imageQuery: "arm", soundHint: "БРАСУ — БРАСлет на руке!" },
            { pt: "a mão", ru: "кисть руки", imageQuery: "hand", soundHint: "МАУ — МАУгли машет рукой!" },
            { pt: "a perna", ru: "нога", imageQuery: "leg", soundHint: "ПЕРНА — ПЕРИНА упала на ногу!" },
            { pt: "o pé", ru: "ступня", imageQuery: "foot", soundHint: "ПЕ — ПЕшком идти на своих ступнях!" },
            { pt: "as costas", ru: "спина", imageQuery: "back body", soundHint: "АШ КОШТАШ — КОСТИ на спине болят!" },
            { pt: "o estômago", ru: "желудок", imageQuery: "stomach", soundHint: "ЭШТОМАГУ — в СТОМАКЕ (желудке) еда!" },
            { pt: "o coração", ru: "сердце", imageQuery: "heart", soundHint: "КУРАСАУ — КУРАЖ в сердце бьётся!" },
            { pt: "o olho", ru: "глаз", imageQuery: "eye", soundHint: "ОЛЬЮ — ОЛЯ смотрит глазами!" },
            { pt: "a orelha", ru: "ухо", imageQuery: "ear", soundHint: "ОРЕЛЬЯ — ОРЁЛ слышит ушами далеко!" },
            { pt: "o nariz", ru: "нос", imageQuery: "nose", soundHint: "НАРИШ — НАРИСУЙ нос!" },
            { pt: "a boca", ru: "рот", imageQuery: "mouth", soundHint: "БОКА — БОКА рта улыбаются!" },
            { pt: "o dente", ru: "зуб", imageQuery: "tooth", soundHint: "ДЕНТЕ — ДАНТИСТ лечит зубы!" },
            { pt: "a língua", ru: "язык", imageQuery: "tongue", soundHint: "ЛИНГУА — ЛИНГВИСТ знает языки!" },
            { pt: "o pescoço", ru: "шея", imageQuery: "neck", soundHint: "ПЕШКОСУ — ПЕШКОМ по ШЕЕ идёт муравей!" },
            { pt: "o ombro", ru: "плечо", imageQuery: "shoulder", soundHint: "ОМБРУ — ОМБРЕ на плечах — красивая причёска!" },
            { pt: "o joelho", ru: "колено", imageQuery: "knee", soundHint: "ЖУЭЛЬЮ — ЖУЁТ ЛЁД коленом — больно!" },
            { pt: "o dedo", ru: "палец", imageQuery: "finger", soundHint: "ДЕДУ — ДЕД показывает пальцем!" },
            { pt: "doente", ru: "больной", imageQuery: "sick person", soundHint: "ДУЭНТЕ — ДУЭТ болеет — оба чихают!" },
            { pt: "saudável", ru: "здоровый", imageQuery: "healthy person", soundHint: "САУДАВЕЛ — САУДА (тоска) по ЗДОРОВью!" },
            { pt: "o médico", ru: "врач", imageQuery: "doctor", soundHint: "МЕДИКУ — МЕДИК (врач)!" },
            { pt: "o hospital", ru: "больница", imageQuery: "hospital", soundHint: "ОШПИТАЛ — ГОСПИТАЛЬ (больница)!" },
            { pt: "a farmácia", ru: "аптека", imageQuery: "pharmacy", soundHint: "ФАРМАСИЯ — ФАРМАЦЕВТ в аптеке!" },
            { pt: "o medicamento", ru: "лекарство", imageQuery: "medicine pills", soundHint: "МЕДИКАМЕНТУ — МЕДИКАМЕНТ (лекарство)!" },
            { pt: "a dor", ru: "боль", imageQuery: "pain", soundHint: "ДОР — ДЫРКА болит!" },
            { pt: "doer", ru: "болеть", imageQuery: "hurting", soundHint: "ДУЭР — ДУЭЛЬ — после неё всё болит!" },
            { pt: "o sangue", ru: "кровь", imageQuery: "blood", soundHint: "САНГВЕ — САНГВИНИК — у него горячая кровь!" },
            { pt: "respirar", ru: "дышать", imageQuery: "breathing", soundHint: "РЕШПИРАР — РЕСПИРАТОР помогает дышать!" },
            { pt: "tomar remédio", ru: "принимать лекарство", imageQuery: "taking medicine", soundHint: "ТОМАР РЕМЕДИУ — ТОМА РЕМЕДИЮ (лекарство) и выздоравливает!" },
            { pt: "estar constipado", ru: "быть простуженным", imageQuery: "cold flu", soundHint: "ЭШТАРКОНШТИПАДУ — КОНСТИПАЦИЯ от простуды!" }
        ]
    },
    "medico_b1": {
        name: "Intermédio",
        category: "medicina",
        categoryName: "🏥 Medicina",
        words: [
            { pt: "a dor de cabeça", ru: "головная боль", imageQuery: "headache pain", soundHint: "ДОР ДЕ КАБЕСА — ДЫРКА в КАБЕСЕ (голове) болит!" },
            { pt: "a tontura", ru: "головокружение", imageQuery: "dizziness vertigo", soundHint: "ТОНТУРА — ТОНна кружится вокруг головы!" },
            { pt: "a náusea", ru: "тошнота", imageQuery: "nausea sick", soundHint: "НАУЗА — НА УЗИ так тошнит!" },
            { pt: "vomitar", ru: "рвать (тошнить)", imageQuery: "vomit sick", soundHint: "ВОМИТАР — ВОМбат ТАРЕЛКУ вырвал!" },
            { pt: "a febre", ru: "температура", imageQuery: "fever thermometer", soundHint: "ФЕБРЕ — ФЕБРАль, а у тебя жар 40!" },
            { pt: "os calafrios", ru: "озноб", imageQuery: "chills cold shiver", soundHint: "КАЛАФРИУШ — КАЛА трясёт от ФРИУ (холода)!" },
            { pt: "a tosse", ru: "кашель", imageQuery: "cough sick", soundHint: "ТОСЕ — ТОСтер кашляет крошками!" },
            { pt: "tossir", ru: "кашлять", imageQuery: "coughing person", soundHint: "ТУСИР — ТУСовщик кашляет без остановки!" },
            { pt: "espirrar", ru: "чихать", imageQuery: "sneezing person", soundHint: "ЭШПИРРАР — ПИРАТ чихнул — улетела шляпа!" },
            { pt: "o corrimento nasal", ru: "насморк", imageQuery: "runny nose", soundHint: "КУРРИМЕНТУ НАЗАЛ — из НАЗАЛ (носа) течёт!" },
            { pt: "a garganta inflamada", ru: "воспалённое горло", imageQuery: "sore throat", soundHint: "ГАРГАНТА — ГАРГАНТЮА орал — горло воспалилось!" },
            { pt: "engolir", ru: "глотать", imageQuery: "swallowing", soundHint: "ЭНГОЛИР — ЭН ГОЛЫЙ глотает таблетку!" },
            { pt: "a tensão arterial", ru: "давление", imageQuery: "blood pressure", soundHint: "ТЕНСАУ — ТЕНСИЯ (напряжение) в артериях!" },
            { pt: "a análise de sangue", ru: "анализ крови", imageQuery: "blood test", soundHint: "АНАЛИЗЕ ДЕ САНГВЕ — АНАЛИЗ САНГВИНИКА!" },
            { pt: "a receita médica", ru: "рецепт врача", imageQuery: "medical prescription", soundHint: "РЕСЕЙТА — РЕЦЕПТ от врача!" },
            { pt: "o diagnóstico", ru: "диагноз", imageQuery: "diagnosis doctor", soundHint: "ДИАГНОСТИКУ — ДИАГНОЗ поставили!" },
            { pt: "a inflamação", ru: "воспаление", imageQuery: "inflammation swelling", soundHint: "ИНФЛАМАСАУ — ИНФЛЯЦИЯ воспаления!" },
            { pt: "inchado/a", ru: "опухший", imageQuery: "swollen body part", soundHint: "ИНШАДУ — ИН ШАДУ сидел — опух от комаров!" },
            { pt: "a alergia", ru: "аллергия", imageQuery: "allergy reaction", soundHint: "АЛЕРЖИЯ — АЛЛЕРГИЯ (почти одинаково)!" },
            { pt: "a comichão", ru: "зуд", imageQuery: "itching scratching", soundHint: "КОМИШАУ — КОМИССИЯ зудит от бумаг!" },
            { pt: "coçar", ru: "чесать", imageQuery: "scratching skin", soundHint: "КУСАР — КУСАТЬ себя, когда чешется!" },
            { pt: "a dor nas costas", ru: "боль в спине", imageQuery: "back pain", soundHint: "ДОР НАШ КОШТАШ — боль на КОСТЯХ спины!" },
            { pt: "a articulação", ru: "сустав", imageQuery: "joint body", soundHint: "АРТИКУЛАСАУ — АРТИКУЛЯЦИЯ суставов!" },
            { pt: "o músculo", ru: "мышца", imageQuery: "muscle anatomy", soundHint: "МУШКУЛУ — МУСКУЛ (одинаково)!" },
            { pt: "a entorse", ru: "растяжение", imageQuery: "sprain ankle", soundHint: "ЭНТОРСЕ — ЭН ТОРС растянул!" },
            { pt: "a fratura", ru: "перелом", imageQuery: "bone fracture xray", soundHint: "ФРАТУРА — ФРАКТУРА кости!" },
            { pt: "o gesso", ru: "гипс", imageQuery: "plaster cast", soundHint: "ЖЕССУ — ЖЕСТЬ! В гипсе как мумия!" },
            { pt: "os pontos", ru: "швы", imageQuery: "stitches wound", soundHint: "УШ ПОНТУШ — ПОНТЫ: вот мои ШВЫ!" },
            { pt: "a cicatriz", ru: "шрам", imageQuery: "scar skin", soundHint: "СИКАТРИШ — СИКА оставила ШРАМ рогами!" },
            { pt: "desmaiar", ru: "терять сознание", imageQuery: "fainting person", soundHint: "ДЕЖМАЙАР — ДЕД в МАЕ упал в обморок!" },
            { pt: "a urgência", ru: "скорая помощь", imageQuery: "emergency room", soundHint: "УРЖЭНСИЯ — URGENT! Скорая мчится!" },
            { pt: "o especialista", ru: "специалист", imageQuery: "medical specialist", soundHint: "ЭШПЕСИАЛИШТА — СПЕЦИАЛИСТ!" },
            { pt: "tenho dores em...", ru: "у меня болит...", imageQuery: "pain pointing", soundHint: "ТЕНЮ ДОРЕШ ЭМ — ТЯНУ ДЫРУ — болит!" },
            { pt: "sinto-me mal", ru: "мне плохо", imageQuery: "feeling sick", soundHint: "СИНТУ-МЕ МАЛ — СЕНСАЦИЯ МАЛА — плохо!" },
            { pt: "preciso de ajuda", ru: "мне нужна помощь", imageQuery: "need help", soundHint: "ПРЕСИЗУ ДЕ АЖУДА — ПРИЗ за АЖУДУ (помощь)!" }
        ]
    },
    "medico_b2": {
        name: "Avançado",
        category: "medicina",
        categoryName: "🏥 Medicina",
        words: [
            { pt: "o diagnóstico diferencial", ru: "дифференциальный диагноз", imageQuery: "medical diagnosis", soundHint: "ДИАГНОСТИКУ ДИФЕРЕНСИАЛ — разные ДИАГНОЗЫ сравниваем!" },
            { pt: "a recaída", ru: "рецидив", imageQuery: "relapse illness", soundHint: "РЕКАИДА — РЕКА ИДА — болезнь вернулась как река!" },
            { pt: "crónico/a", ru: "хронический", imageQuery: "chronic illness", soundHint: "КРОНИКУ — ХРОНИКА болезни — всё время болит!" },
            { pt: "agudo/a", ru: "острый (о болезни)", imageQuery: "acute pain", soundHint: "АГУДУ — АГУТИН поёт ОСТРО — уши болят!" },
            { pt: "o sintoma", ru: "симптом", imageQuery: "symptoms", soundHint: "СИНТОМА — СИМПТОМ (одинаково)!" },
            { pt: "o efeito secundário", ru: "побочный эффект", imageQuery: "side effects", soundHint: "ЭФЕЙТУ СЕКУНДАРИУ — ЭФФЕКТ СЕКУНДНЫЙ — побочка!" },
            { pt: "a dose", ru: "доза", imageQuery: "medicine dose", soundHint: "ДОЗЕ — ДОЗА (одинаково)!" },
            { pt: "a sobredosagem", ru: "передозировка", imageQuery: "overdose", soundHint: "СОБРЕДОЗАЖЕМ — СВЕРХ ДОЗЫ — передоз!" },
            { pt: "a contraindicação", ru: "противопоказание", imageQuery: "contraindication", soundHint: "КОНТРАИНДИКАСАУ — КОНТРА ИНДИКАЦИЯ — нельзя!" },
            { pt: "a intervenção cirúrgica", ru: "хирургическое вмешательство", imageQuery: "surgery operation", soundHint: "ИНТЕРВЕНСАУ СИРУРЖ — ИНТЕРВЕНЦИЯ ХИРУРГА!" },
            { pt: "a anestesia", ru: "анестезия", imageQuery: "anesthesia", soundHint: "АНЕШТЕЗИЯ — АНЕСТЕЗИЯ (одинаково)!" },
            { pt: "o internamento", ru: "госпитализация", imageQuery: "hospitalization", soundHint: "ИНТЕРНАМЕНТУ — ИНТЕРНАТ в больнице — лежишь!" },
            { pt: "a alta hospitalar", ru: "выписка из больницы", imageQuery: "hospital discharge", soundHint: "АЛТА ОШПИТАЛАР — АЛЬТА (высота) — выписался наверх!" },
            { pt: "o prognóstico", ru: "прогноз", imageQuery: "medical prognosis", soundHint: "ПРОГНОСТИКУ — ПРОГНОЗ болезни!" },
            { pt: "a reabilitação", ru: "реабилитация", imageQuery: "rehabilitation", soundHint: "РЕАБИЛИТАСАУ — РЕАБИЛИТАЦИЯ!" },
            { pt: "a fisioterapia", ru: "физиотерапия", imageQuery: "physiotherapy", soundHint: "ФИЗИОТЕРАПИЯ — ФИЗИОТЕРАПИЯ!" },
            { pt: "o tratamento", ru: "лечение", imageQuery: "medical treatment", soundHint: "ТРАТАМЕНТУ — ТРАТИТЬ на ЛЕЧЕНИЕ!" },
            { pt: "a cura", ru: "излечение", imageQuery: "cure healing", soundHint: "КУРА — КУРА вылечилась — несёт яйца!" },
            { pt: "incurável", ru: "неизлечимый", imageQuery: "incurable", soundHint: "ИНКУРАВЕЛ — ИН-КУРА — не вылечить!" },
            { pt: "a sequela", ru: "последствие (болезни)", imageQuery: "aftermath illness", soundHint: "СЕКЕЛА — СЕКВЕЛ болезни — продолжение!" },
            { pt: "a imunidade", ru: "иммунитет", imageQuery: "immune system", soundHint: "ИМУНИДАДЕ — ИММУНИТЕТ!" },
            { pt: "a vacina", ru: "вакцина", imageQuery: "vaccine injection", soundHint: "ВАСИНА — ВАКЦИНА!" },
            { pt: "o vírus", ru: "вирус", imageQuery: "virus", soundHint: "ВИРУШ — ВИРУС!" },
            { pt: "a bactéria", ru: "бактерия", imageQuery: "bacteria", soundHint: "БАКТЕРИЯ — БАКТЕРИЯ!" },
            { pt: "a infeção", ru: "инфекция", imageQuery: "infection", soundHint: "ИНФЕСАУ — ИНФЕКЦИЯ!" },
            { pt: "contagioso/a", ru: "заразный", imageQuery: "contagious", soundHint: "КОНТАЖИОЗУ — КОНТАГИОЗНЫЙ — заразный!" },
            { pt: "o paciente", ru: "пациент", imageQuery: "patient hospital", soundHint: "ПАСЬЕНТЕ — ПАЦИЕНТ!" },
            { pt: "a consulta", ru: "приём (у врача)", imageQuery: "doctor appointment", soundHint: "КОНСУЛТА — КОНСУЛЬТАЦИЯ врача!" },
            { pt: "marcar uma consulta", ru: "записаться к врачу", imageQuery: "booking appointment", soundHint: "МАРКАР УМА КОНСУЛТА — МАРКЕР ставит КОНСУЛЬТАЦИЮ!" },
            { pt: "o seguro de saúde", ru: "медицинская страховка", imageQuery: "health insurance", soundHint: "СЕГУРУ ДЕ САУДЕ — СЕГУРИТИ САУДОВ — страховка здоровья!" },
            { pt: "a comparticipação", ru: "доплата (за лекарство)", imageQuery: "copayment", soundHint: "КОМПАРТИСИПАСАУ — КОМ-ПАРТИСИПАЦИЯ — доплачиваешь часть!" },
            { pt: "o atestado médico", ru: "больничный лист", imageQuery: "medical certificate", soundHint: "АТЕШТАДУ МЕДИКУ — АТТЕСТАТ от МЕДИКА — больничный!" },
            { pt: "a baixa médica", ru: "больничный", imageQuery: "sick leave", soundHint: "БАЙША МЕДИКА — НИЖЕ (baixa) работы — на больничном!" },
            { pt: "estar de baixa", ru: "быть на больничном", imageQuery: "on sick leave", soundHint: "ЭШТАР ДЕ БАЙША — сидишь НИЖЕ — на больничном!" },
            { pt: "recuperar", ru: "выздоравливать", imageQuery: "recovering", soundHint: "РЕКУПЕРАР — РЕКУПЕРАЦИЯ — восстановление!" }
        ]
    },

    // ========== РЕСТОРАН ==========
    "restaurante_a2": {
        name: "Básico",
        category: "restaurante",
        categoryName: "🍽️ Restaurante",
        words: [
            { pt: "o restaurante", ru: "ресторан", imageQuery: "restaurant", soundHint: "РЕШТАУРАНТЕ — РЕСТОРАН!" },
            { pt: "o café", ru: "кафе", imageQuery: "cafe coffee shop", soundHint: "КАФЕ — КАФЕ!" },
            { pt: "a mesa", ru: "стол", imageQuery: "table restaurant", soundHint: "МЕЗА — МЕЗОНИН со столами!" },
            { pt: "a cadeira", ru: "стул", imageQuery: "chair", soundHint: "КАДЕЙРА — КАДРЫ сидят на стульях!" },
            { pt: "o garfo", ru: "вилка", imageQuery: "fork", soundHint: "ГАРФУ — ГАРФИЛД ест вилкой!" },
            { pt: "a faca", ru: "нож", imageQuery: "knife", soundHint: "ФАКА — ФАКИР режет ножом!" },
            { pt: "a colher", ru: "ложка", imageQuery: "spoon", soundHint: "КУЛЬЕР — КУЛЁК с ложками!" },
            { pt: "o prato", ru: "тарелка", imageQuery: "plate dish", soundHint: "ПРАТУ — ПРУТ с тарелкой!" },
            { pt: "o copo", ru: "стакан", imageQuery: "glass cup", soundHint: "КОПУ — КОПЫ пьют из стаканов!" },
            { pt: "a chávena", ru: "чашка", imageQuery: "cup tea", soundHint: "ШАВЕНА — ШАВЕРМЫ нет, но есть чашка чая!" },
            { pt: "a garrafa", ru: "бутылка", imageQuery: "bottle", soundHint: "ГАРРАФА — ГАРАЖ с бутылками!" },
            { pt: "a água", ru: "вода", imageQuery: "water glass", soundHint: "АГУА — АГУ, малыш хочет воды!" },
            { pt: "o vinho", ru: "вино", imageQuery: "wine glass", soundHint: "ВИНЮ — ВИНО!" },
            { pt: "a cerveja", ru: "пиво", imageQuery: "beer glass", soundHint: "СЕРВЕЖА — СЕРВиз с пивом!" },
            { pt: "o sumo", ru: "сок", imageQuery: "juice", soundHint: "СУМУ — СУМО-борец пьёт сок!" },
            { pt: "o pão", ru: "хлеб", imageQuery: "bread", soundHint: "ПАУ — ПАУЛу ест хлеб!" },
            { pt: "a manteiga", ru: "масло", imageQuery: "butter", soundHint: "МАНТЕЙГА — МАНТО в масле!" },
            { pt: "o queijo", ru: "сыр", imageQuery: "cheese", soundHint: "КЕЙЖУ — КЕЙС с сыром!" },
            { pt: "o presunto", ru: "ветчина", imageQuery: "ham", soundHint: "ПРЕЗУНТУ — ПРЕЗИДЕНТ ест ветчину!" },
            { pt: "a carne", ru: "мясо", imageQuery: "meat", soundHint: "КАРНЕ — КАРНАВАЛ мяса!" },
            { pt: "o peixe", ru: "рыба", imageQuery: "fish food", soundHint: "ПЕЙШЕ — ПЕЙШН (страсть) к рыбе!" },
            { pt: "o frango", ru: "курица", imageQuery: "chicken food", soundHint: "ФРАНГУ — ФРАНЦИЯ любит курицу!" },
            { pt: "o arroz", ru: "рис", imageQuery: "rice", soundHint: "АРРУШ — АРРоЗ (рис) в миске!" },
            { pt: "a batata", ru: "картошка", imageQuery: "potato", soundHint: "БАТАТА — БАТАТ (сладкая картошка)!" },
            { pt: "a salada", ru: "салат", imageQuery: "salad", soundHint: "САЛАДА — САЛАТ!" },
            { pt: "a sopa", ru: "суп", imageQuery: "soup", soundHint: "СОПА — СУП!" },
            { pt: "a sobremesa", ru: "десерт", imageQuery: "dessert", soundHint: "СОБРЕМЕЗА — СВЕРХ МЕРЫ сладко — десерт!" },
            { pt: "o gelado", ru: "мороженое", imageQuery: "ice cream", soundHint: "ЖЕЛАДУ — ЖЕЛАТИН в мороженом!" },
            { pt: "o bolo", ru: "торт", imageQuery: "cake", soundHint: "БОЛУ — БОЛЬшой торт!" },
            { pt: "a conta, por favor", ru: "счёт, пожалуйста", imageQuery: "bill please", soundHint: "КОНТА, ПУР ФАВОР — КОНТА (счёт), ПОФАВОРИТ!" }
        ]
    },
    "restaurante_b1": {
        name: "Intermédio",
        category: "restaurante",
        categoryName: "🍽️ Restaurante",
        words: [
            { pt: "reservar uma mesa", ru: "забронировать столик", imageQuery: "restaurant reservation", soundHint: "РЕЗЕРВАР УМА МЕЗА — РЕЗЕРВАЦИЯ стола!" },
            { pt: "a ementa", ru: "меню", imageQuery: "restaurant menu", soundHint: "ЭМЕНТА — МЕНЮ с МЕНТОЛОМ!" },
            { pt: "o prato do dia", ru: "блюдо дня", imageQuery: "daily special", soundHint: "ПРАТУ ДУ ДИА — ПРУТ с блюдом ДНЯ!" },
            { pt: "a entrada", ru: "закуска", imageQuery: "appetizer", soundHint: "ЭНТРАДА — ВХОД начинается с закуски!" },
            { pt: "o prato principal", ru: "основное блюдо", imageQuery: "main course", soundHint: "ПРАТУ ПРИНСИПАЛ — ПРИНЦИПАЛ ест главное!" },
            { pt: "a gorjeta", ru: "чаевые", imageQuery: "tip money", soundHint: "ГОРЖЕТА — ГОРЖУСЬ чаевыми!" },
            { pt: "bem passado", ru: "хорошо прожаренное", imageQuery: "well done steak", soundHint: "БЕМ ПАССАДУ — ХОРОШО ПРОШЁЛ через огонь!" },
            { pt: "mal passado", ru: "с кровью", imageQuery: "rare steak", soundHint: "МАЛ ПАССАДУ — МАЛО прожарено — кровь!" },
            { pt: "ao ponto", ru: "средней прожарки", imageQuery: "medium steak", soundHint: "АУ ПОНТУ — в ТОЧКУ — средняя!" },
            { pt: "grelhado/a", ru: "на гриле", imageQuery: "grilled food", soundHint: "ГРЕЛЬЯДУ — ГРИЛЬ!" },
            { pt: "frito/a", ru: "жареный", imageQuery: "fried food", soundHint: "ФРИТУ — ФРИТЮР!" },
            { pt: "cozido/a", ru: "варёный", imageQuery: "boiled food", soundHint: "КОЗИДУ — КОЗЁЛ варится!" },
            { pt: "assado/a", ru: "запечённый", imageQuery: "roasted food", soundHint: "АССАДУ — АССАСИН запекает!" },
            { pt: "estufado/a", ru: "тушёный", imageQuery: "stewed food", soundHint: "ЭШТУФАДУ — в ШТУФЕ тушится!" },
            { pt: "cru/crua", ru: "сырой", imageQuery: "raw food", soundHint: "КРУ — КРУтое суши — сырое!" },
            { pt: "picante", ru: "острый", imageQuery: "spicy food", soundHint: "ПИКАНТЕ — ПИКАНТНЫЙ!" },
            { pt: "salgado/a", ru: "солёный", imageQuery: "salty food", soundHint: "САЛГАДУ — САЛО солёное!" },
            { pt: "doce", ru: "сладкий", imageQuery: "sweet food", soundHint: "ДОСЕ — ДОЗа сладкого!" },
            { pt: "amargo/a", ru: "горький", imageQuery: "bitter food", soundHint: "АМАРГУ — А МАРГАРИТА горькая!" },
            { pt: "azedo/a", ru: "кислый", imageQuery: "sour food", soundHint: "АЗЕДУ — АЗОТ кислый!" },
            { pt: "sem glúten", ru: "без глютена", imageQuery: "gluten free", soundHint: "СЕМ ГЛУТЕН — СЕМья без ГЛЮТЕНА!" },
            { pt: "sem lactose", ru: "без лактозы", imageQuery: "lactose free", soundHint: "СЕМ ЛАКТОЗЕ — без ЛАКТОЗЫ!" },
            { pt: "vegetariano/a", ru: "вегетарианский", imageQuery: "vegetarian", soundHint: "ВЕЖЕТАРИАНУ — ВЕГЕТАРИАНЕЦ!" },
            { pt: "vegano/a", ru: "веганский", imageQuery: "vegan", soundHint: "ВЕГАНУ — ВЕГАН!" },
            { pt: "o guardanapo", ru: "салфетка", imageQuery: "napkin", soundHint: "ГУАРДАНАПУ — ГВАРДЕЕЦ с НАПОЙ (салфеткой)!" },
            { pt: "os talheres", ru: "приборы", imageQuery: "cutlery", soundHint: "ТАЛЬЕРЕШ — ТАРЕЛКИ и приборы!" },
            { pt: "o empregado de mesa", ru: "официант", imageQuery: "waiter", soundHint: "ЭМПРЕГАДУ ДЕ МЕЗА — РАБОТНИК у стола!" },
            { pt: "reclamar", ru: "жаловаться", imageQuery: "complaining", soundHint: "РЕКЛАМАР — РЕКЛАМАЦИЯ!" },
            { pt: "está frio", ru: "холодное", imageQuery: "cold food", soundHint: "ЭШТА ФРИУ — это ФРИГО — холодное!" },
            { pt: "está quente", ru: "горячее", imageQuery: "hot food", soundHint: "ЭШТА КЕНТЕ — КЕНТ горячий!" },
            { pt: "delicioso/a", ru: "вкусный", imageQuery: "delicious", soundHint: "ДЕЛИСИОЗУ — ДЕЛИКАТЕС вкусный!" },
            { pt: "queria pedir...", ru: "я хотел бы заказать...", imageQuery: "ordering food", soundHint: "КЕРИЯ ПЕДИР — КЕРЮ ПЕДИТЬ — хочу заказать!" },
            { pt: "o que recomenda?", ru: "что порекомендуете?", imageQuery: "recommendation", soundHint: "У КЕ РЕКОМЕНДА — что РЕКОМЕНДУЕТЕ?" },
            { pt: "pode trazer...", ru: "принесите, пожалуйста...", imageQuery: "bring please", soundHint: "ПОДЕ ТРАЗЕР — ПОДАТЬ ТРАЗЕР (принести)!" },
            { pt: "está incluído?", ru: "это включено?", imageQuery: "included", soundHint: "ЭШТА ИНКЛУИДУ — это ВКЛЮЧЕНО?" }
        ]
    },
    "restaurante_b2": {
        name: "Avançado",
        category: "restaurante",
        categoryName: "🍽️ Restaurante",
        words: [
            { pt: "a gastronomia", ru: "гастрономия", imageQuery: "gastronomy", soundHint: "ГАШТРОНОМИЯ — ГАСТРОНОМИЯ!" },
            { pt: "o chef", ru: "шеф-повар", imageQuery: "chef cooking", soundHint: "ШЕФ — ШЕФ-повар!" },
            { pt: "a cozinha de autor", ru: "авторская кухня", imageQuery: "fine dining", soundHint: "КОЗИНЬЯ ДЕ АУТОР — КУХНЯ АВТОРА!" },
            { pt: "o menu de degustação", ru: "дегустационное меню", imageQuery: "tasting menu", soundHint: "МЕНУ ДЕ ДЕГУШТАСАУ — МЕНЮ ДЕГУСТАЦИИ!" },
            { pt: "a harmonização", ru: "сочетание (вина и еды)", imageQuery: "wine pairing", soundHint: "АРМОНИЗАСАУ — ГАРМОНИЗАЦИЯ вкусов!" },
            { pt: "o sommelier", ru: "сомелье", imageQuery: "sommelier wine", soundHint: "СОМЕЛЬЕР — СОМЕЛЬЕ!" },
            { pt: "a carta de vinhos", ru: "винная карта", imageQuery: "wine list", soundHint: "КАРТА ДЕ ВИНЬЮШ — КАРТА ВИН!" },
            { pt: "o couvert", ru: "куверт (закуска до еды)", imageQuery: "bread basket", soundHint: "КУВЕРТ — КУВЕРТ (корзинка с хлебом)!" },
            { pt: "a especialidade da casa", ru: "фирменное блюдо", imageQuery: "house special", soundHint: "ЭШПЕСИАЛИДАДЕ ДА КАЗА — СПЕЦИАЛЬНОСТЬ ДОМА!" },
            { pt: "os ingredientes", ru: "ингредиенты", imageQuery: "ingredients", soundHint: "УШ ИНГРЕДИЕНТЕШ — ИНГРЕДИЕНТЫ!" },
            { pt: "a textura", ru: "текстура", imageQuery: "food texture", soundHint: "ТЕШТУРА — ТЕКСТУРА!" },
            { pt: "o sabor", ru: "вкус", imageQuery: "taste flavor", soundHint: "САБОР — САБЛЯ вкуса — острый!" },
            { pt: "o aroma", ru: "аромат", imageQuery: "aroma smell", soundHint: "АРОМА — АРОМАТ!" },
            { pt: "a apresentação", ru: "подача (блюда)", imageQuery: "food presentation", soundHint: "АПРЕЗЕНТАСАУ — ПРЕЗЕНТАЦИЯ блюда!" },
            { pt: "o ponto de cozedura", ru: "степень готовности", imageQuery: "cooking point", soundHint: "ПОНТУ ДЕ КОЗЕДУРА — ТОЧКА КОЗЫРНОЙ готовки!" },
            { pt: "a confeção", ru: "приготовление", imageQuery: "food preparation", soundHint: "КОНФЕСАУ — КОНДИТЕР готовит!" },
            { pt: "marinar", ru: "мариновать", imageQuery: "marinating", soundHint: "МАРИНАР — МАРИНОВАТЬ!" },
            { pt: "temperar", ru: "приправлять", imageQuery: "seasoning", soundHint: "ТЕМПЕРАР — ТЕМПЕРАТУРИТЬ специи!" },
            { pt: "flamejar", ru: "фламбировать", imageQuery: "flambe", soundHint: "ФЛАМЕЖАР — ФЛАМБЕ — горит!" },
            { pt: "gratinar", ru: "запекать с корочкой", imageQuery: "gratin", soundHint: "ГРАТИНАР — ГРАТЕН с корочкой!" },
            { pt: "a restrição alimentar", ru: "пищевое ограничение", imageQuery: "dietary restriction", soundHint: "РЕШТРИСАУ АЛИМЕНТАР — РЕСТРИКЦИЯ еды!" },
            { pt: "a intolerância alimentar", ru: "непереносимость", imageQuery: "food intolerance", soundHint: "ИНТОЛЕРАНСЯ — ИНТОЛЕРАНТНОСТЬ к еде!" },
            { pt: "o regime", ru: "диета", imageQuery: "diet", soundHint: "РЕЖИМЕ — РЕЖИМ питания!" },
            { pt: "de origem biológica", ru: "органический", imageQuery: "organic food", soundHint: "ДЕ ОРИЖЕМ БИОЛОДЖИКА — БИОЛОГИЧЕСКОЕ происхождение!" },
            { pt: "de produção local", ru: "местного производства", imageQuery: "local produce", soundHint: "ДЕ ПРОДУСАУ ЛОКАЛ — ЛОКАЛЬНОЕ производство!" },
            { pt: "a fatura", ru: "фактура (чек)", imageQuery: "receipt invoice", soundHint: "ФАТУРА — ФАКТУРА (чек)!" },
            { pt: "pagar com cartão", ru: "платить картой", imageQuery: "card payment", soundHint: "ПАГАР КОМ КАРТАУ — ПЛАТИТЬ КАРТОЙ!" },
            { pt: "dividir a conta", ru: "разделить счёт", imageQuery: "split bill", soundHint: "ДИВИДИР А КОНТА — ДИВИДЕНДЫ счёта — делим!" },
            { pt: "deixar gorjeta", ru: "оставить чаевые", imageQuery: "leaving tip", soundHint: "ДЕЙШАР ГОРЖЕТА — ДЕЖУРНЫЙ оставил чаевые!" },
            { pt: "fazer uma reclamação", ru: "подать жалобу", imageQuery: "complaint", soundHint: "ФАЗЕР УМА РЕКЛАМАСАУ — ФАЗЕР РЕКЛАМАЦИЮ!" },
            { pt: "pedir o livro de reclamações", ru: "попросить книгу жалоб", imageQuery: "complaints book", soundHint: "ПЕДИР У ЛИВРУ ДЕ РЕКЛАМАСОЕШ — ПЕДАЛЬ для книги жалоб!" },
            { pt: "elogiar o serviço", ru: "похвалить обслуживание", imageQuery: "praising service", soundHint: "ЭЛУЖИАР У СЕРВИСУ — ЭЛЕГИЯ сервису!" },
            { pt: "o atendimento", ru: "обслуживание", imageQuery: "service quality", soundHint: "АТЕНДИМЕНТУ — АТТЕНДАНТ (обслуживание)!" },
            { pt: "requintado/a", ru: "изысканный", imageQuery: "refined elegant", soundHint: "РЕКИНТАДУ — РЕКВИЕМ изысканности!" },
            { pt: "caseiro/a", ru: "домашний", imageQuery: "homemade", soundHint: "КАЗЕЙРУ — КАЗАРМА домашней еды!" }
        ]
    },

    // ========== АЭРОПОРТ ==========
    "aeroporto_a2": {
        name: "Básico",
        category: "aeroporto",
        categoryName: "✈️ Aeroporto",
        words: [
            { pt: "o aeroporto", ru: "аэропорт", imageQuery: "airport", soundHint: "АЭРОПОРТУ — АЭРОПОРТ!" },
            { pt: "o avião", ru: "самолёт", imageQuery: "airplane", soundHint: "АВИАУ — АВИАЦИЯ!" },
            { pt: "o voo", ru: "рейс", imageQuery: "flight", soundHint: "ВОУ — ВОУ! Полетели!" },
            { pt: "o bilhete", ru: "билет", imageQuery: "ticket", soundHint: "БИЛЬЕТЕ — БИЛЕТ!" },
            { pt: "o passaporte", ru: "паспорт", imageQuery: "passport", soundHint: "ПАССАПОРТЕ — ПАСПОРТ!" },
            { pt: "a mala", ru: "чемодан", imageQuery: "suitcase", soundHint: "МАЛА — МАЛЫЙ чемодан!" },
            { pt: "a mochila", ru: "рюкзак", imageQuery: "backpack", soundHint: "МОШИЛА — МОЩЬ в рюкзаке!" },
            { pt: "o passageiro", ru: "пассажир", imageQuery: "passenger", soundHint: "ПАССАЖЕЙРУ — ПАССАЖИР!" },
            { pt: "a chegada", ru: "прилёт", imageQuery: "arrival", soundHint: "ШЕГАДА — ШАГАЕТ к прилёту!" },
            { pt: "a partida", ru: "вылет", imageQuery: "departure", soundHint: "ПАРТИДА — ПАРТИЯ улетает!" },
            { pt: "o portão", ru: "выход (гейт)", imageQuery: "gate airport", soundHint: "ПОРТАУ — ПОРТА (дверь) — гейт!" },
            { pt: "a janela", ru: "окно (место)", imageQuery: "window seat", soundHint: "ЖАНЕЛА — ЖАННА у окна!" },
            { pt: "o corredor", ru: "проход (место)", imageQuery: "aisle seat", soundHint: "КОРРЕДОР — КОРИДОР — место у прохода!" },
            { pt: "o piloto", ru: "пилот", imageQuery: "pilot", soundHint: "ПИЛОТУ — ПИЛОТ!" },
            { pt: "a hospedeira", ru: "стюардесса", imageQuery: "flight attendant", soundHint: "ОШПЕДЕЙРА — ХОСПИС в небе — заботится!" },
            { pt: "descolar", ru: "взлетать", imageQuery: "takeoff", soundHint: "ДЕШКОЛАР — ОТКЛЕИТЬСЯ от земли!" },
            { pt: "aterrar", ru: "приземляться", imageQuery: "landing", soundHint: "АТЕРРАР — на ТЕРРУ (землю)!" },
            { pt: "o cinto de segurança", ru: "ремень безопасности", imageQuery: "seatbelt", soundHint: "СИНТУ ДЕ СЕГУРАНСА — СИНТЕТИЧЕСКИЙ ремень!" },
            { pt: "apertar o cinto", ru: "пристегнуть ремень", imageQuery: "fasten seatbelt", soundHint: "АПЕРТАР У СИНТУ — АПЕРТУРА ремня!" },
            { pt: "a saída de emergência", ru: "аварийный выход", imageQuery: "emergency exit", soundHint: "САИДА ДЕ ЭМЕРЖЭНСИЯ — САЙТ ЭМЕРДЖЕНСИ!" },
            { pt: "a turbulência", ru: "турбулентность", imageQuery: "turbulence", soundHint: "ТУРБУЛЭНСИЯ — ТУРБУЛЕНТНОСТЬ!" },
            { pt: "a escala", ru: "пересадка", imageQuery: "layover", soundHint: "ЭШКАЛА — ШКАЛА пересадок!" },
            { pt: "o atraso", ru: "задержка", imageQuery: "delay", soundHint: "АТРАЗУ — А ТРАССА закрыта — задержка!" },
            { pt: "cancelado", ru: "отменён", imageQuery: "cancelled", soundHint: "КАНСЭЛАДУ — КАНСЕЛ — отменён!" },
            { pt: "a hora de embarque", ru: "время посадки", imageQuery: "boarding time", soundHint: "ОРА ДЕ ЭМБАРКЕ — HORA ЭМБАРГО — время посадки!" },
            { pt: "o destino", ru: "пункт назначения", imageQuery: "destination", soundHint: "ДЕSHTИНУ — ДЕСТИНАЦИЯ!" },
            { pt: "a viagem", ru: "путешествие", imageQuery: "travel journey", soundHint: "ВИАЖЕМ — ВОЯЖ — путешествие!" },
            { pt: "fazer check-in", ru: "регистрироваться", imageQuery: "check in", soundHint: "ФАЗЕР ЧЕК-ИН — делать ЧЕК-ИН!" },
            { pt: "embarcar", ru: "садиться на борт", imageQuery: "boarding", soundHint: "ЭМБАРКАР — на БАРКАС (борт)!" },
            { pt: "bom voo!", ru: "хорошего полёта!", imageQuery: "have a good flight", soundHint: "БОМ ВОУ — БОМБический полёт!" }
        ]
    },
    "aeroporto_b1": {
        name: "Intermédio",
        category: "aeroporto",
        categoryName: "✈️ Aeroporto",
        words: [
            { pt: "o voo direto", ru: "прямой рейс", imageQuery: "direct flight", soundHint: "ВОУ ДИРЕКТУ — ДИРЕКТОР летит напрямую!" },
            { pt: "o voo com escala", ru: "рейс с пересадкой", imageQuery: "connecting flight", soundHint: "ВОУ КОМ ЭШКАЛА — с пересадкой по ШКАЛЕ!" },
            { pt: "o check-in online", ru: "онлайн-регистрация", imageQuery: "online check in", soundHint: "ЧЕК-ИН ОНЛАЙН — регистрация ОНЛАЙН!" },
            { pt: "o balcão de check-in", ru: "стойка регистрации", imageQuery: "check in counter", soundHint: "БАЛКАУ ДЕ ЧЕК-ИН — БАЛКОН регистрации!" },
            { pt: "o cartão de embarque", ru: "посадочный талон", imageQuery: "boarding pass", soundHint: "КАРТАУ ДЕ ЭМБАРКЕ — КАРТОН на посадку!" },
            { pt: "a porta de embarque", ru: "выход на посадку", imageQuery: "boarding gate", soundHint: "ПОРТА ДЕ ЭМБАРКЕ — ПОРТА (дверь) посадки!" },
            { pt: "a bagagem de mão", ru: "ручная кладь", imageQuery: "carry on", soundHint: "БАГАЖЕМ ДЕ МАУ — БАГАЖ в руке!" },
            { pt: "a bagagem de porão", ru: "сдаваемый багаж", imageQuery: "checked luggage", soundHint: "БАГАЖЕМ ДЕ ПОРАУ — БАГАЖ в ПОРТУ самолёта!" },
            { pt: "despachar a bagagem", ru: "сдать багаж", imageQuery: "check luggage", soundHint: "ДЕШПАШАР — ДИСПЕТЧЕР берёт багаж!" },
            { pt: "o excesso de bagagem", ru: "перевес", imageQuery: "overweight luggage", soundHint: "ЭКСЕССУ — ЭКСЦЕСС веса!" },
            { pt: "a recolha de bagagem", ru: "выдача багажа", imageQuery: "baggage claim", soundHint: "РЕКОЛЬЯ — РЕКОЛЬЯ (собираю) багаж!" },
            { pt: "a bagagem extraviada", ru: "потерянный багаж", imageQuery: "lost luggage", soundHint: "ЭШТРАВИАДА — ЭКСТРА-ВИАДУК — улетел куда-то!" },
            { pt: "o controlo de segurança", ru: "контроль безопасности", imageQuery: "security check", soundHint: "КОНТРОЛУ ДЕ СЕГУРАНСА — КОНТРОЛЬ СЕГУРАНСЫ!" },
            { pt: "o controlo de passaportes", ru: "паспортный контроль", imageQuery: "passport control", soundHint: "КОНТРОЛУ ДЕ ПАССАПОРТЕШ — КОНТРОЛЬ ПАСПОРТОВ!" },
            { pt: "a alfândega", ru: "таможня", imageQuery: "customs", soundHint: "АЛФАНДЕГА — АЛФАВИТ ДЕДА проверяют!" },
            { pt: "declarar", ru: "декларировать", imageQuery: "customs declaration", soundHint: "ДЕКЛАРАР — ДЕКЛАРАЦИЯ!" },
            { pt: "nada a declarar", ru: "нечего декларировать", imageQuery: "nothing to declare", soundHint: "НАДА А ДЕКЛАРАР — НАДА (ничего) декларировать!" },
            { pt: "a indemnização", ru: "компенсация", imageQuery: "compensation", soundHint: "ИНДЕМНИЗАСАУ — ИНДЕМНИТИ (компенсация)!" },
            { pt: "remarcar o voo", ru: "перебронировать", imageQuery: "rebook flight", soundHint: "РЕМАРКАР — РЕМАРКА на рейс — меняем!" },
            { pt: "perder o voo", ru: "опоздать на рейс", imageQuery: "missed flight", soundHint: "ПЕРДЕР У ВОУ — ПОТЕРЯТЬ рейс!" },
            { pt: "a sala de embarque", ru: "зал ожидания", imageQuery: "departure lounge", soundHint: "САЛА ДЕ ЭМБАРКЕ — ЗАЛ посадки!" },
            { pt: "o duty-free", ru: "дьюти-фри", imageQuery: "duty free shop", soundHint: "ДЬЮТИ-ФРИ — ДЬЮТИ-ФРИ!" },
            { pt: "a pista", ru: "взлётная полоса", imageQuery: "runway", soundHint: "ПИШТА — ПИСТОЛЕТ на ПОЛОСЕ!" },
            { pt: "a tripulação", ru: "экипаж", imageQuery: "flight crew", soundHint: "ТРИПУЛАСАУ — ТРИ ПУЛИ у экипажа!" },
            { pt: "o comandante", ru: "командир", imageQuery: "captain pilot", soundHint: "КОММАНДАНТЕ — КОМАНДИР!" },
            { pt: "a primeira classe", ru: "первый класс", imageQuery: "first class", soundHint: "ПРИМЕЙРА КЛАССЕ — ПЕРВЫЙ КЛАСС!" },
            { pt: "a classe executiva", ru: "бизнес-класс", imageQuery: "business class", soundHint: "КЛАССЕ ЭКЗЕКУТИВА — ЭКЗЕКУТИВ-класс!" },
            { pt: "a classe económica", ru: "эконом-класс", imageQuery: "economy class", soundHint: "КЛАССЕ ЭКОНОМИКА — ЭКОНОМ-класс!" },
            { pt: "o lugar", ru: "место", imageQuery: "seat airplane", soundHint: "ЛУГАР — ЛУГАРЬ (место)!" },
            { pt: "mudar de lugar", ru: "поменяться местами", imageQuery: "change seats", soundHint: "МУДАР ДЕ ЛУГАР — МУТИТЬ с местами!" },
            { pt: "o voo foi cancelado", ru: "рейс отменён", imageQuery: "flight cancelled", soundHint: "ВОУ ФОЙ КАНСЭЛАДУ — рейс КАНСЕЛ!" },
            { pt: "o voo está atrasado", ru: "рейс задерживается", imageQuery: "flight delayed", soundHint: "ВОУ ЭШТА АТРАЗАДУ — рейс ОТРАЗИЛСЯ — задержка!" },
            { pt: "qual é a porta de embarque?", ru: "какой выход на посадку?", imageQuery: "which gate", soundHint: "КУАЛ Э А ПОРТА — КУАЛ ПОРТА — какой гейт?" },
            { pt: "onde é o check-in?", ru: "где регистрация?", imageQuery: "where check in", soundHint: "ОНДЕ Э У ЧЕК-ИН — ГДЕ ЧЕК-ИН?" },
            { pt: "perdi a minha bagagem", ru: "я потерял багаж", imageQuery: "lost my luggage", soundHint: "ПЕРДИ А МИНЬЯ БАГАЖЕМ — ПОТЕРЯЛ мой БАГАЖ!" }
        ]
    },
    "aeroporto_b2": {
        name: "Avançado",
        category: "aeroporto",
        categoryName: "✈️ Aeroporto",
        words: [
            { pt: "o espaço aéreo", ru: "воздушное пространство", imageQuery: "airspace", soundHint: "ЭШПАСУ АЭРЕУ — ЭСПАС (пространство) АЭРО!" },
            { pt: "a rota aérea", ru: "воздушный маршрут", imageQuery: "flight route", soundHint: "РОТА АЭРЕА — РОТА (маршрут) в воздухе!" },
            { pt: "a altitude de cruzeiro", ru: "крейсерская высота", imageQuery: "cruising altitude", soundHint: "АЛТИТУДЕ ДЕ КРУЗЕЙРУ — АЛЬТИТУДА КРУИЗА!" },
            { pt: "a velocidade de cruzeiro", ru: "крейсерская скорость", imageQuery: "cruising speed", soundHint: "ВЕЛОСИДАДЕ ДЕ КРУЗЕЙРУ — ВЕЛОСИПЕД КРУИЗА!" },
            { pt: "o cockpit", ru: "кабина пилота", imageQuery: "cockpit", soundHint: "КОКПИТ — КОКПИТ!" },
            { pt: "a torre de controlo", ru: "диспетчерская вышка", imageQuery: "control tower", soundHint: "ТОРРЕ ДЕ КОНТРОЛУ — ТОРРЕ КОНТРОЛЯ!" },
            { pt: "o controlador aéreo", ru: "авиадиспетчер", imageQuery: "air traffic controller", soundHint: "КОНТРОЛАДОР АЭРЕУ — КОНТРОЛЁР воздуха!" },
            { pt: "a autorização de descolagem", ru: "разрешение на взлёт", imageQuery: "takeoff clearance", soundHint: "АУТОРИЗАСАУ ДЕ ДЕШКОЛАЖЕМ — АВТОРИЗАЦИЯ взлёта!" },
            { pt: "a aterragem de emergência", ru: "аварийная посадка", imageQuery: "emergency landing", soundHint: "АТЕРРАЖЕМ ДЕ ЭМЕРЖЭНСИЯ — ТЕРРА ЭМЕРДЖЕНСИ!" },
            { pt: "o trem de aterragem", ru: "шасси", imageQuery: "landing gear", soundHint: "ТРЕМ ДЕ АТЕРРАЖЕМ — ТРАМ-вай посадки — шасси!" },
            { pt: "as turbinas", ru: "турбины", imageQuery: "jet engines", soundHint: "АШ ТУРБИНАШ — ТУРБИНЫ!" },
            { pt: "a fuselagem", ru: "фюзеляж", imageQuery: "fuselage", soundHint: "ФУЗЕЛАЖЕМ — ФЮЗЕЛЯЖ!" },
            { pt: "as asas", ru: "крылья", imageQuery: "airplane wings", soundHint: "АШ АЗАШ — АЗАРТ в крыльях!" },
            { pt: "a cauda", ru: "хвост (самолёта)", imageQuery: "airplane tail", soundHint: "КАУДА — КАУДИЛЬО с хвостом!" },
            { pt: "a pressurização da cabine", ru: "давление в салоне", imageQuery: "cabin pressure", soundHint: "ПРЕССУРИЗАСАУ — ПРЕССУРКА кабины!" },
            { pt: "a máscara de oxigénio", ru: "кислородная маска", imageQuery: "oxygen mask", soundHint: "МАШКАРА ДЕ ОКСИЖЕНЬЮ — МАСКА ОКСИГЕНА!" },
            { pt: "o colete salva-vidas", ru: "спасательный жилет", imageQuery: "life vest", soundHint: "КОЛЕТЕ САЛВА-ВИДАШ — КОЛЛЕКТИВ СПАС ЖИЗНЬ!" },
            { pt: "a evacuação", ru: "эвакуация", imageQuery: "evacuation", soundHint: "ЭВАКУАСАУ — ЭВАКУАЦИЯ!" },
            { pt: "o overbooking", ru: "овербукинг", imageQuery: "overbooking", soundHint: "ОВЕРБУКИНГ — ОВЕРБУКИНГ!" },
            { pt: "a lista de espera", ru: "лист ожидания", imageQuery: "waiting list", soundHint: "ЛИШТА ДЕ ЭШПЕРА — ЛИСТ ЭСПЕРАНТО — ждём!" },
            { pt: "o upgrade", ru: "повышение класса", imageQuery: "upgrade", soundHint: "АПГРЕЙД — АПГРЕЙД!" },
            { pt: "o downgrade", ru: "понижение класса", imageQuery: "downgrade", soundHint: "ДАУНГРЕЙД — ДАУНГРЕЙД!" },
            { pt: "a franquia de bagagem", ru: "норма багажа", imageQuery: "baggage allowance", soundHint: "ФРАНКИЯ — ФРАНШИЗА багажа!" },
            { pt: "o peso máximo", ru: "максимальный вес", imageQuery: "maximum weight", soundHint: "ПЕЗУ МАКСИМУ — ВЕС МАКСИМУМ!" },
            { pt: "as dimensões permitidas", ru: "допустимые размеры", imageQuery: "allowed dimensions", soundHint: "ДИМЕНСОЕШ ПЕРМИТИДАШ — ДИМЕНСИИ ПЕРМИТ!" },
            { pt: "a bagagem frágil", ru: "хрупкий багаж", imageQuery: "fragile luggage", soundHint: "БАГАЖЕМ ФРАЖИЛ — ФРАГИЛЬНЫЙ багаж!" },
            { pt: "a bagagem especial", ru: "специальный багаж", imageQuery: "special luggage", soundHint: "БАГАЖЕМ ЭШПЕСИАЛ — СПЕЦИАЛЬНЫЙ багаж!" },
            { pt: "o animal de estimação na cabine", ru: "питомец в салоне", imageQuery: "pet in cabin", soundHint: "АНИМАЛ НА КАБИНЕ — АНИМАЛ в КАБИНЕ!" },
            { pt: "o código de reserva", ru: "код бронирования", imageQuery: "booking code", soundHint: "КОДИГУ ДЕ РЕЗЕРВА — КОД РЕЗЕРВАЦИИ!" },
            { pt: "confirmar a reserva", ru: "подтвердить бронь", imageQuery: "confirm booking", soundHint: "КОНФИРМАР А РЕЗЕРВА — КОНФИРМАЦИЯ РЕЗЕРВА!" },
            { pt: "cancelar a reserva", ru: "отменить бронь", imageQuery: "cancel booking", soundHint: "КАНСЭЛАР А РЕЗЕРВА — КАНСЕЛ РЕЗЕРВА!" },
            { pt: "pedir reembolso", ru: "просить возврат", imageQuery: "request refund", soundHint: "ПЕДИР РЕЭМБОЛСУ — ПЕДИТЬ РЕИМБУРС!" },
            { pt: "apresentar queixa", ru: "подать жалобу", imageQuery: "file complaint", soundHint: "АПРЕЗЕНТАР КЕЙША — ПРЕЗЕНТАЦИЯ ЖАЛОБЫ!" },
            { pt: "os direitos dos passageiros", ru: "права пассажиров", imageQuery: "passenger rights", soundHint: "УШ ДИРЕЙТУШ ДУШ ПАССАЖЕЙРУШ — ДИРЕКТ права пассажиров!" },
            { pt: "a assistência em terra", ru: "наземное обслуживание", imageQuery: "ground assistance", soundHint: "АССИШТЭНСИЯ ЭМ ТЕРРА — АССИСТЕНЦИЯ на ТЕРРЕ!" }
        ]
    },

    // ========== АРЕНДА ==========
    "aluguer_a2": {
        name: "Básico",
        category: "aluguer",
        categoryName: "🏠 Casa",
        words: [
            { pt: "a casa", ru: "дом", imageQuery: "house", soundHint: "КАЗА — КАЗАРМА — дом!" },
            { pt: "o apartamento", ru: "квартира", imageQuery: "apartment", soundHint: "АПАРТАМЕНТУ — АПАРТАМЕНТЫ!" },
            { pt: "o quarto", ru: "комната", imageQuery: "room", soundHint: "КУАРТУ — КВАРТАЛ комнат!" },
            { pt: "a sala", ru: "гостиная", imageQuery: "living room", soundHint: "САЛА — САЛОН — гостиная!" },
            { pt: "a cozinha", ru: "кухня", imageQuery: "kitchen", soundHint: "КОЗИНЬЯ — КОЗЫРНАЯ кухня!" },
            { pt: "a casa de banho", ru: "ванная", imageQuery: "bathroom", soundHint: "КАЗА ДЕ БАНЮ — ДОМ БАНИ!" },
            { pt: "o quarto de dormir", ru: "спальня", imageQuery: "bedroom", soundHint: "КУАРТУ ДЕ ДОРМИР — комната ДОРМИР (спать)!" },
            { pt: "a varanda", ru: "балкон", imageQuery: "balcony", soundHint: "ВАРАНДА — ВЕРАНДА!" },
            { pt: "a janela", ru: "окно", imageQuery: "window", soundHint: "ЖАНЕЛА — ЖАННА у окна!" },
            { pt: "a porta", ru: "дверь", imageQuery: "door", soundHint: "ПОРТА — ПОРТА (дверь)!" },
            { pt: "a chave", ru: "ключ", imageQuery: "key", soundHint: "ШАВЕ — ШАЙБА с ключом!" },
            { pt: "o elevador", ru: "лифт", imageQuery: "elevator", soundHint: "ЭЛЕВАДОР — ЭЛЕВАТОР!" },
            { pt: "as escadas", ru: "лестница", imageQuery: "stairs", soundHint: "АШ ЭШКАДАШ — ЭСКАДРА по лестнице!" },
            { pt: "o andar", ru: "этаж", imageQuery: "floor", soundHint: "АНДАР — АНДРЕЙ на этаже!" },
            { pt: "a renda", ru: "аренда", imageQuery: "rent", soundHint: "РЕНДА — РЕНТА!" },
            { pt: "o senhorio", ru: "хозяин", imageQuery: "landlord", soundHint: "СЕНЬОРИЮ — СЕНЬОР-хозяин!" },
            { pt: "o inquilino", ru: "жилец", imageQuery: "tenant", soundHint: "ИНКИЛИНУ — ИНКОГНИТО жилец!" },
            { pt: "a mobília", ru: "мебель", imageQuery: "furniture", soundHint: "МОБИЛЬЯ — МОБИЛЬ (мебель)!" },
            { pt: "a cama", ru: "кровать", imageQuery: "bed", soundHint: "КАМА — КАМАЗ с кроватями!" },
            { pt: "o armário", ru: "шкаф", imageQuery: "wardrobe", soundHint: "АРМАРИУ — АРМИЯ в шкафу!" },
            { pt: "a mesa", ru: "стол", imageQuery: "table", soundHint: "МЕЗА — МЕЗА (стол)!" },
            { pt: "a cadeira", ru: "стул", imageQuery: "chair", soundHint: "КАДЕЙРА — КАДРЫ на стульях!" },
            { pt: "o sofá", ru: "диван", imageQuery: "sofa", soundHint: "СОФА — СОФА!" },
            { pt: "o frigorífico", ru: "холодильник", imageQuery: "refrigerator", soundHint: "ФРИГОРИФИКУ — ФРИГО (холод)!" },
            { pt: "o fogão", ru: "плита", imageQuery: "stove", soundHint: "ФОГАУ — ФОГАРТ жарит на плите!" },
            { pt: "a máquina de lavar", ru: "стиральная машина", imageQuery: "washing machine", soundHint: "МАКИНА ДЕ ЛАВАР — МАШИНА ЛАВАТЬ!" },
            { pt: "o ar condicionado", ru: "кондиционер", imageQuery: "air conditioning", soundHint: "АР КОНДИСИОНАДУ — АЙР КОНДИШН!" },
            { pt: "o aquecimento", ru: "отопление", imageQuery: "heating", soundHint: "АКЕСИМЕНТУ — АКВА греет!" },
            { pt: "quanto custa?", ru: "сколько стоит?", imageQuery: "how much", soundHint: "КУАНТУ КУШТА — КВАНТ КУСТОВ — сколько?" },
            { pt: "está disponível?", ru: "свободно?", imageQuery: "available", soundHint: "ЭШТА ДИШПОНИВЕЛ — ДИСПАНСЕР свободен?" }
        ]
    },
    "aluguer_b1": {
        name: "Intermédio",
        category: "aluguer",
        categoryName: "🏠 Casa",
        words: [
            { pt: "arrendar/alugar", ru: "снимать жильё", imageQuery: "renting", soundHint: "АЛУГАР — АЛУГАРЬ снимает!" },
            { pt: "o contrato de arrendamento", ru: "договор аренды", imageQuery: "lease agreement", soundHint: "КОНТРАТУ ДЕ АРРЕНДАМЕНТУ — КОНТРАКТ АРЕНДЫ!" },
            { pt: "a caução", ru: "залог", imageQuery: "security deposit", soundHint: "КАУСАУ — КАУЧУК денег — залог!" },
            { pt: "as despesas incluídas", ru: "коммуналка включена", imageQuery: "utilities included", soundHint: "ДЕШПЕЗАШ ИНКЛУИДАШ — ДЕПЕШИ ВКЛЮЧЕНЫ!" },
            { pt: "a água", ru: "вода (счёт)", imageQuery: "water bill", soundHint: "АГУА — АГУ-вода!" },
            { pt: "a eletricidade", ru: "электричество", imageQuery: "electricity bill", soundHint: "ЭЛЕТРИСИДАДЕ — ЭЛЕКТРИЧЕСТВО!" },
            { pt: "o gás", ru: "газ", imageQuery: "gas bill", soundHint: "ГАШ — ГАЗ!" },
            { pt: "mobilado/a", ru: "с мебелью", imageQuery: "furnished", soundHint: "МОБИЛАДУ — МОБИЛЬ (мебель) есть!" },
            { pt: "não mobilado", ru: "без мебели", imageQuery: "unfurnished", soundHint: "НАУ МОБИЛАДУ — НЕТ МОБИЛИ!" },
            { pt: "o T0/T1/T2/T3", ru: "студия/1/2/3-комн.", imageQuery: "apartment types", soundHint: "Т0-Т1-Т2-Т3 — ТИПОЛОГИЯ комнат!" },
            { pt: "o rés-do-chão", ru: "первый этаж", imageQuery: "ground floor", soundHint: "РЕЖ-ДУ-ШАУ — РЕЖ земли — первый этаж!" },
            { pt: "o último andar", ru: "последний этаж", imageQuery: "top floor", soundHint: "УЛTIМУ АНДАР — УЛЬТИМАТ этаж!" },
            { pt: "a garagem", ru: "гараж", imageQuery: "garage", soundHint: "ГАРАЖЕМ — ГАРАЖ!" },
            { pt: "o terraço", ru: "терраса", imageQuery: "terrace", soundHint: "ТЕРРАСУ — ТЕРРАСА!" },
            { pt: "a avaria", ru: "поломка", imageQuery: "breakdown", soundHint: "АВАРИЯ — АВАРИЯ!" },
            { pt: "o canalizador", ru: "сантехник", imageQuery: "plumber", soundHint: "КАНАЛИЗАДОР — КАНАЛИЗАЦИЮ чинит!" },
            { pt: "o eletricista", ru: "электрик", imageQuery: "electrician", soundHint: "ЭЛЕТРИШИШТА — ЭЛЕКТРИК!" },
            { pt: "a fuga de água", ru: "протечка", imageQuery: "water leak", soundHint: "Вода играет ФУГУ Баха и УБЕГАЕТ из трубы — сосед снизу в ужасе!" },
            { pt: "entupido/a", ru: "засорённый", imageQuery: "clogged", soundHint: "ЭНТУПИДУ — в ТУПИК зашла труба!" },
            { pt: "o bolor", ru: "плесень", imageQuery: "mold", soundHint: "БОЛОР — БОЛЬ от плесени!" },
            { pt: "a humidade", ru: "влажность", imageQuery: "humidity", soundHint: "УМИДАДЕ — HUMID (влажно)!" },
            { pt: "rescindir o contrato", ru: "расторгнуть договор", imageQuery: "terminate contract", soundHint: "РЕШИНДИР — РАСЩЕПИТЬ контракт!" },
            { pt: "o pré-aviso", ru: "предупреждение", imageQuery: "notice period", soundHint: "ПРЕ-АВИЗУ — ПРЕ-АВИЗО!" },
            { pt: "a vistoria", ru: "осмотр", imageQuery: "inspection", soundHint: "ВИШТОРИЯ — ВИЗИТ осмотра!" },
            { pt: "o recibo", ru: "квитанция", imageQuery: "receipt", soundHint: "РЕСИБУ — РЕСИВ (получать) — квитанция!" },
            { pt: "pagar a renda", ru: "платить аренду", imageQuery: "pay rent", soundHint: "ПАГАР А РЕНДА — ПЛАТИТЬ РЕНТУ!" },
            { pt: "a fiança", ru: "поручительство", imageQuery: "guarantee", soundHint: "ФИАНСА — ФИАНСЕ (невеста) как гарантия!" },
            { pt: "o fiador", ru: "поручитель", imageQuery: "guarantor", soundHint: "ФИАДОР — ФИАДОР поручается!" },
            { pt: "renovar o contrato", ru: "продлить договор", imageQuery: "renew contract", soundHint: "РЕНОВАР — РЕНОВ (новый) контракт!" },
            { pt: "a área útil", ru: "полезная площадь", imageQuery: "floor area", soundHint: "АРЕА УТИЛ — АРЕА УТИЛЬ (полезная)!" },
            { pt: "a exposição solar", ru: "освещённость", imageQuery: "sun exposure", soundHint: "ЭШПОЗИСАУ СОЛАР — ЭКСПОЗИЦИЯ СОЛНЦА!" },
            { pt: "virado a sul", ru: "на юг", imageQuery: "south facing", soundHint: "ВИРАДУ А СУЛ — ВИРАЖУ на ЮГ!" },
            { pt: "quero ver o apartamento", ru: "хочу посмотреть квартиру", imageQuery: "view apartment", soundHint: "КЕРУ ВЕР — КЕРУ ВЕРИТЬ глазам!" },
            { pt: "quando posso mudar-me?", ru: "когда могу въехать?", imageQuery: "move in date", soundHint: "КУАНДУ ПОССУ МУДАР — КОГДА МУТИТЬ переезд?" },
            { pt: "há problemas?", ru: "есть проблемы?", imageQuery: "any problems", soundHint: "А ПРОБЛЕМАШ — есть ПРОБЛЕМЫ?" }
        ]
    },
    "aluguer_b2": {
        name: "Avançado",
        category: "aluguer",
        categoryName: "🏠 Casa",
        words: [
            { pt: "o mercado imobiliário", ru: "рынок недвижимости", imageQuery: "real estate market", soundHint: "МЕРКАДУ ИМОБИЛИАРИУ — МАРКЕТ ИМОБИЛИ (недвижки)!" },
            { pt: "a agência imobiliária", ru: "агентство недвижимости", imageQuery: "real estate agency", soundHint: "АЖЭНСИЯ ИМОБИЛИАРИЯ — АГЕНЦИЯ ИМОБИЛИ!" },
            { pt: "o agente imobiliário", ru: "риелтор", imageQuery: "real estate agent", soundHint: "АЖЭНТЕ ИМОБИЛИАРИУ — АГЕНТ ИМОБИЛИ!" },
            { pt: "a comissão", ru: "комиссия", imageQuery: "commission fee", soundHint: "КОМИССАУ — КОМИССИЯ!" },
            { pt: "o registo do contrato", ru: "регистрация договора", imageQuery: "contract registration", soundHint: "РЕЖИШТУ ДУ КОНТРАТУ — РЕГИСТР КОНТРАКТА!" },
            { pt: "o imposto de selo", ru: "гербовый сбор", imageQuery: "stamp duty", soundHint: "ИМПОШТУ ДЕ СЕЛУ — ИМПОСТ за СЭЛО (печать)!" },
            { pt: "a atualização da renda", ru: "повышение аренды", imageQuery: "rent increase", soundHint: "АТУАЛИЗАСАУ ДА РЕНДА — АКТУАЛЬНАЯ РЕНТА выше!" },
            { pt: "o índice de preços", ru: "индекс цен", imageQuery: "price index", soundHint: "ИНДИСЕ ДЕ ПРЕСУШ — ИНДЕКС ЦЕН!" },
            { pt: "o direito de preferência", ru: "преимущественное право", imageQuery: "right of first refusal", soundHint: "ДИРЕЙТУ ДЕ ПРЕФЕРЕНСИЯ — ДИРЕКТ ПРЕФЕРЕНЦИИ!" },
            { pt: "a sublocação", ru: "субаренда", imageQuery: "subletting", soundHint: "СУБЛОКАСАУ — СУБЛОКАЦИЯ!" },
            { pt: "sublocar", ru: "сдавать в субаренду", imageQuery: "sublet", soundHint: "СУБЛОКАР — СУБЛОКАТЬ!" },
            { pt: "o subarrendatário", ru: "субарендатор", imageQuery: "subtenant", soundHint: "СУБАРРЕНДАТАРИУ — СУБАРЕНДАТОР!" },
            { pt: "o despejo", ru: "выселение", imageQuery: "eviction", soundHint: "ДЕШПЕЖУ — ДИСПЕТЧЕР выселяет!" },
            { pt: "a ação de despejo", ru: "иск о выселении", imageQuery: "eviction lawsuit", soundHint: "АСАУ ДЕ ДЕШПЕЖУ — АКЦИЯ ДЕПЕШИ!" },
            { pt: "o incumprimento", ru: "нарушение договора", imageQuery: "breach of contract", soundHint: "ИНКУМПРИМЕНТУ — ИНКОМПЕТЕНТНОЕ нарушение!" },
            { pt: "a mora no pagamento", ru: "просрочка платежа", imageQuery: "late payment", soundHint: "МОРА НУ ПАГАМЕНТУ — МОРАТОРИЙ на платёж!" },
            { pt: "os juros de mora", ru: "пени за просрочку", imageQuery: "late fees", soundHint: "УШ ЖУРУШ ДЕ МОРА — ЖУРИТЬ за МОРАТОРИЙ!" },
            { pt: "a caducidade do contrato", ru: "истечение договора", imageQuery: "contract expiry", soundHint: "КАДУСИДАДЕ — КАДУЦЕЙ истёк!" },
            { pt: "a denúncia do contrato", ru: "расторжение договора", imageQuery: "contract termination", soundHint: "ДЕНУНСИЯ — ДЕНОНСАЦИЯ контракта!" },
            { pt: "a oposição à renovação", ru: "отказ от продления", imageQuery: "renewal rejection", soundHint: "ОПОЗИСАУ А РЕНОВАСАУ — ОППОЗИЦИЯ РЕНОВУ!" },
            { pt: "as obras de conservação", ru: "ремонтные работы", imageQuery: "maintenance works", soundHint: "ОБРАШ ДЕ КОНСЕРВАСАУ — ОБРАЗ КОНСЕРВАЦИИ!" },
            { pt: "as obras de beneficiação", ru: "улучшения", imageQuery: "improvements", soundHint: "ОБРАШ ДЕ БЕНЕФИСИАСАУ — ОБРАЗ БЕНЕФИЦИИ!" },
            { pt: "o certificado energético", ru: "энергосертификат", imageQuery: "energy certificate", soundHint: "СЕРТИФИКАДУ ЭНЕРЖЕТИКУ — СЕРТИФИКАТ ЭНЕРГИИ!" },
            { pt: "a classe energética", ru: "класс энергоэффективности", imageQuery: "energy class", soundHint: "КЛАССЕ ЭНЕРЖЕТИКА — КЛАСС ЭНЕРГИИ!" },
            { pt: "a licença de habitação", ru: "разрешение на проживание", imageQuery: "habitation license", soundHint: "ЛИСЕНСА ДЕ АБИТАСАУ — ЛИЦЕНЗИЯ ХАБИТАТА!" },
            { pt: "a caderneta predial", ru: "кадастровая выписка", imageQuery: "property registry", soundHint: "КАДЕРНЕТА ПРЕДИАЛ — КАДЕРНА (тетрадь) ПРЕДИКТА!" },
            { pt: "a certidão de teor", ru: "выписка из реестра", imageQuery: "property certificate", soundHint: "СЕРТИДАУ ДЕ ТЕОР — СЕРТИФИКАТ ТЕОРА!" },
            { pt: "o condomínio", ru: "управляющая компания", imageQuery: "condo management", soundHint: "КОНДОМИНИУ — КОНДОМИНИУМ!" },
            { pt: "a quota de condomínio", ru: "плата за управление", imageQuery: "condo fee", soundHint: "КОТА ДЕ КОНДОМИНИУ — КВОТА КОНДО!" },
            { pt: "a assembleia de condóminos", ru: "собрание жильцов", imageQuery: "residents meeting", soundHint: "АССЕМБЛЕЯ ДЕ КОНДОМИНУШ — АССАМБЛЕЯ КОНДО!" },
            { pt: "o regulamento interno", ru: "внутренний регламент", imageQuery: "house rules", soundHint: "РЕГУЛАМЕНТУ ИНТЕРНУ — РЕГЛАМЕНТ ИНТЕРНА!" },
            { pt: "negociar as condições", ru: "обсуждать условия", imageQuery: "negotiate terms", soundHint: "НЕГОСИАР АШ КОНДИСОЕШ — НЕГОЦИАНТ условий!" },
            { pt: "está tudo em ordem?", ru: "всё в порядке?", imageQuery: "everything ok", soundHint: "ЭШТА ТУДУ ЭМ ОРДЕМ — ТУТ ОРДЕР?" },
            { pt: "preciso de reparações", ru: "нужен ремонт", imageQuery: "need repairs", soundHint: "ПРЕСИЗУ ДЕ РЕПАРАСОЕШ — ПРИЗЁР РЕПАРАЦИИ!" },
            { pt: "quando será feito?", ru: "когда сделают?", imageQuery: "when done", soundHint: "КУАНДУ СЕРА ФЕЙТУ — КОГДА СЕРА (будет) ФАКТ?" }
        ]
    },

    // ========== EMERGÊNCIAS ==========
    "emergencias_a2": {
        name: "Básico",
        category: "emergencias",
        categoryName: "🚨 Emergências",
        words: [
            { pt: "a emergência", ru: "экстренный случай", imageQuery: "emergency", soundHint: "ЭМЕРЖЭНСИЯ — ЭМЕРДЖЕНСИ!" },
            { pt: "ajuda!", ru: "помогите!", imageQuery: "help", soundHint: "АЖУДА — АЖУДА нужна!" },
            { pt: "socorro!", ru: "на помощь!", imageQuery: "help emergency", soundHint: "СОКОРРУ — СОК КОРЮ — бегу на помощь!" },
            { pt: "a polícia", ru: "полиция", imageQuery: "police", soundHint: "ПОЛИСИЯ — ПОЛИЦИЯ!" },
            { pt: "os bombeiros", ru: "пожарные", imageQuery: "firefighters", soundHint: "БОМБЕЙРУШ — БОМБЕЙРЫ (пожарные)!" },
            { pt: "a ambulância", ru: "скорая помощь", imageQuery: "ambulance", soundHint: "АМБУЛАНСИЯ — АМБУЛАНС!" },
            { pt: "o hospital", ru: "больница", imageQuery: "hospital", soundHint: "ОШПИТАЛ — ГОСПИТАЛЬ!" },
            { pt: "o acidente", ru: "авария/несчастный случай", imageQuery: "accident", soundHint: "АСИДЕНТЕ — АКСИДЕНТ!" },
            { pt: "o fogo", ru: "огонь/пожар", imageQuery: "fire", soundHint: "ФОГУ — ФОГАРТ у огня!" },
            { pt: "o incêndio", ru: "пожар", imageQuery: "fire building", soundHint: "ИНСЭНДИУ — ИНЦИДЕНТ с огнём!" },
            { pt: "chamar", ru: "вызвать/позвонить", imageQuery: "calling phone", soundHint: "ШАМАР — ШАМАН зовёт духов!" },
            { pt: "o número de emergência", ru: "номер экстренной помощи", imageQuery: "emergency number", soundHint: "НУМЕРУ ДЕ ЭМЕРЖЭНСИЯ — НОМЕР 112!" },
            { pt: "estou perdido/a", ru: "я потерялся/лась", imageQuery: "lost person", soundHint: "ЭШТОУ ПЕРДИДУ — ПОТЕРЯЛ себя!" },
            { pt: "preciso de ajuda", ru: "мне нужна помощь", imageQuery: "need help", soundHint: "ПРЕСИЗУ ДЕ АЖУДА — ПРИЗ за АЖУДУ!" },
            { pt: "estou ferido/a", ru: "я ранен/а", imageQuery: "injured person", soundHint: "ЭШТОУ ФЕРИДУ — ФЕРИТ (ранит) меня!" },
            { pt: "dói muito", ru: "очень больно", imageQuery: "pain", soundHint: "ДОЙ МУЙТУ — ДОЙ (боль) МНОГО!" },
            { pt: "não consigo respirar", ru: "не могу дышать", imageQuery: "breathing difficulty", soundHint: "НАУ КОНСИГУ РЕШПИРАР — не могу РЕСПИРАТОР надеть!" },
            { pt: "estou a sangrar", ru: "у меня кровотечение", imageQuery: "bleeding", soundHint: "ЭШТОУ А САНГРАР — САНГВИНИК истекает кровью!" },
            { pt: "o ladrão", ru: "вор", imageQuery: "thief", soundHint: "ЛАДРАУ — ЛАДНО, РАУБер (вор)!" },
            { pt: "roubaram-me", ru: "меня ограбили", imageQuery: "robbery victim", soundHint: "РОУБАРАМ-МЕ — РОУБЕРИ (ограбление)!" },
            { pt: "perdi o passaporte", ru: "я потерял паспорт", imageQuery: "lost passport", soundHint: "ПЕРДИ У ПАССАПОРТЕ — ПОТЕРЯЛ ПАСПОРТ!" },
            { pt: "onde fica...?", ru: "где находится...?", imageQuery: "asking directions", soundHint: "ОНДЕ ФИКА — ГДЕ ФИКСИРУЕТСЯ?" },
            { pt: "ligue para...", ru: "позвоните...", imageQuery: "call phone", soundHint: "ЛИГЕ ПАРА — ЛИГА звонит ПАРА!" },
            { pt: "é urgente", ru: "это срочно", imageQuery: "urgent", soundHint: "Э УРЖЭНТЕ — URGENT!" },
            { pt: "depressa!", ru: "быстрее!", imageQuery: "hurry", soundHint: "ДЕПРЕССА — ДЕПРЕССИЯ от спешки!" },
            { pt: "cuidado!", ru: "осторожно!", imageQuery: "careful warning", soundHint: "КУИДАДУ — КУИДАТ (осторожно)!" },
            { pt: "perigo!", ru: "опасность!", imageQuery: "danger", soundHint: "ПЕРИГУ — ПЕРИГЕЙ (опасность)!" },
            { pt: "não se mexa!", ru: "не двигайтесь!", imageQuery: "dont move", soundHint: "НАУ СЕ МЕША — не МЕША (мешай) движению!" },
            { pt: "fique calmo/a", ru: "успокойтесь", imageQuery: "stay calm", soundHint: "ФИКЕ КАЛМУ — ФИКУС КАЛМОМ стоит!" },
            { pt: "vai ficar tudo bem", ru: "всё будет хорошо", imageQuery: "everything ok", soundHint: "ВАЙ ФИКАР ТУДУ БЕМ — всё будет БЕМ (хорошо)!" }
        ]
    },
    "emergencias_b1": {
        name: "Intermédio",
        category: "emergencias",
        categoryName: "🚨 Emergências",
        words: [
            { pt: "a queixa", ru: "жалоба/заявление", imageQuery: "complaint police", soundHint: "КЕЙША — КЕЙС-жалоба!" },
            { pt: "apresentar queixa", ru: "подать заявление", imageQuery: "file complaint", soundHint: "АПРЕЗЕНТАР КЕЙША — ПРЕЗЕНТОВАТЬ жалобу!" },
            { pt: "a esquadra", ru: "полицейский участок", imageQuery: "police station", soundHint: "ЭШКУАДРА — ЭСКАДРА полиции!" },
            { pt: "o agente", ru: "полицейский", imageQuery: "police officer", soundHint: "АЖЭНТЕ — АГЕНТ!" },
            { pt: "a testemunha", ru: "свидетель", imageQuery: "witness", soundHint: "ТЕSТЕМУНЬЯ — ТЕСТ МУНЬЯ — свидетель на тесте!" },
            { pt: "o roubo", ru: "кража", imageQuery: "theft robbery", soundHint: "РОУБУ — РОББЕРИ!" },
            { pt: "o furto", ru: "воровство", imageQuery: "stealing", soundHint: "ФУРТУ — ФУРТ (воровство)!" },
            { pt: "o assalto", ru: "нападение/ограбление", imageQuery: "assault robbery", soundHint: "АССАЛТУ — АССАУЛТ (нападение)!" },
            { pt: "a agressão", ru: "нападение/избиение", imageQuery: "aggression attack", soundHint: "АГРЕССАУ — АГРЕССИЯ!" },
            { pt: "a violência", ru: "насилие", imageQuery: "violence", soundHint: "ВИОЛЭНСИЯ — ВИОЛЕНС!" },
            { pt: "desaparecido/a", ru: "пропавший", imageQuery: "missing person", soundHint: "ДЕЗАПАРЕСИДУ — ДЕЗ-АПАРЕС — исчез!" },
            { pt: "a identificação", ru: "удостоверение", imageQuery: "id card", soundHint: "ИДЕНТИФИКАСАУ — ИДЕНТИФИКАЦИЯ!" },
            { pt: "o cartão de cidadão", ru: "ID-карта", imageQuery: "citizen card", soundHint: "КАРТАУ ДЕ СИДАДАУ — КАРТА СИДАДАНА!" },
            { pt: "a intoxicação", ru: "отравление", imageQuery: "poisoning", soundHint: "ИНТОКСИКАСАУ — ИНТОКСИКАЦИЯ!" },
            { pt: "a queimadura", ru: "ожог", imageQuery: "burn injury", soundHint: "КЕЙМАДУРА — КАЙМАН обжёгся — ДУРА!" },
            { pt: "a fratura", ru: "перелом", imageQuery: "fracture bone", soundHint: "ФРАТУРА — ФРАКТУРА кости!" },
            { pt: "o corte", ru: "порез", imageQuery: "cut wound", soundHint: "КОРТЕ — КОРОТКИЙ порез!" },
            { pt: "a ferida", ru: "рана", imageQuery: "wound injury", soundHint: "ФЕРИДА — ФЕРИТ рана!" },
            { pt: "inconsciente", ru: "без сознания", imageQuery: "unconscious", soundHint: "ИНКОНШИЕНТЕ — ИНКОНШЕС (без сознания)!" },
            { pt: "a reanimação", ru: "реанимация", imageQuery: "cpr resuscitation", soundHint: "РЕАНИМАСАУ — РЕАНИМАЦИЯ!" },
            { pt: "o desfibrilador", ru: "дефибриллятор", imageQuery: "defibrillator", soundHint: "ДЕШФИБРИЛАДОР — ДЕФИБРИЛЛЯТОР!" },
            { pt: "a inundação", ru: "наводнение", imageQuery: "flood", soundHint: "ИНУНДАСАУ — ИНУНДАЦИЯ (наводнение)!" },
            { pt: "o terremoto", ru: "землетрясение", imageQuery: "earthquake", soundHint: "ТЕРРАМОТУ — ТЕРРА МОТО — земля движется!" },
            { pt: "a evacuação", ru: "эвакуация", imageQuery: "evacuation", soundHint: "ЭВАКУАСАУ — ЭВАКУАЦИЯ!" },
            { pt: "o abrigo", ru: "убежище", imageQuery: "shelter", soundHint: "АБРИГУ — АБРИ (укрытие)!" },
            { pt: "a saída de emergência", ru: "аварийный выход", imageQuery: "emergency exit", soundHint: "САИДА ДЕ ЭМЕРЖЭНСИЯ — САЙТ ЭМЕРДЖЕНСИ!" },
            { pt: "o extintor", ru: "огнетушитель", imageQuery: "fire extinguisher", soundHint: "ЭШТИНТОР — ЭКСТИНКТОР огня!" },
            { pt: "o alarme", ru: "сигнализация", imageQuery: "alarm", soundHint: "АЛАРМЕ — АЛАРМ!" },
            { pt: "o seguro", ru: "страховка", imageQuery: "insurance", soundHint: "СЕГУРУ — СЕКЬЮРИТИ страховка!" },
            { pt: "a declaração", ru: "заявление/декларация", imageQuery: "declaration statement", soundHint: "ДЕКЛАРАСАУ — ДЕКЛАРАЦИЯ!" },
            { pt: "o relatório", ru: "отчёт/протокол", imageQuery: "report document", soundHint: "РЕЛАТОРИУ — РЕЛАТОР пишет отчёт!" },
            { pt: "a prova", ru: "доказательство", imageQuery: "evidence proof", soundHint: "ПРОВА — ПРУВ (доказательство)!" },
            { pt: "a culpa", ru: "вина", imageQuery: "guilt blame", soundHint: "КУЛПА — КУЛПА (вина) как в латыни!" },
            { pt: "a vítima", ru: "жертва", imageQuery: "victim", soundHint: "ВИТИМА — ВИКТИМ (жертва)!" },
            { pt: "o suspeito", ru: "подозреваемый", imageQuery: "suspect", soundHint: "СУШПЕЙТУ — САСПЕКТ!" }
        ]
    },
    "emergencias_b2": {
        name: "Avançado",
        category: "emergencias",
        categoryName: "🚨 Emergências",
        words: [
            { pt: "a ocorrência", ru: "происшествие", imageQuery: "incident occurrence", soundHint: "ОКОРРЭНСИЯ — ОКУРЕНС (происшествие)!" },
            { pt: "o auto de notícia", ru: "протокол о происшествии", imageQuery: "police report", soundHint: "АУТУ ДЕ НОТИСИЯ — АВТО НОТИФИКАЦИИ!" },
            { pt: "a peritagem", ru: "экспертиза", imageQuery: "forensic examination", soundHint: "ПЕРИТАЖЕМ — ПЕРИТ (эксперт) смотрит!" },
            { pt: "o inquérito", ru: "расследование", imageQuery: "investigation", soundHint: "ИНКЕРИТУ — ИНКВИЗИЦИЯ расследует!" },
            { pt: "a detenção", ru: "задержание", imageQuery: "arrest detention", soundHint: "ДЕТЕНСАУ — ДЕТЕНШН (задержание)!" },
            { pt: "o mandado", ru: "ордер", imageQuery: "warrant", soundHint: "МАНДАДУ — МАНДАТ (ордер)!" },
            { pt: "a caução", ru: "залог (судебный)", imageQuery: "bail bond", soundHint: "КАУСАУ — КАУЦИЯ (залог)!" },
            { pt: "o advogado", ru: "адвокат", imageQuery: "lawyer attorney", soundHint: "АДВОГАДУ — АДВОКАТ!" },
            { pt: "os direitos", ru: "права", imageQuery: "rights", soundHint: "УШ ДИРЕЙТУШ — ДИРЕКТ права!" },
            { pt: "permanecer em silêncio", ru: "хранить молчание", imageQuery: "remain silent", soundHint: "ПЕРМАНСЕР ЭМ СИЛЭНСИУ — ПЕРМАНЕНТ СИЛЕНС!" },
            { pt: "a extorsão", ru: "вымогательство", imageQuery: "extortion", soundHint: "ЭКШТОРСАУ — ЭКСТОРТИОН!" },
            { pt: "a fraude", ru: "мошенничество", imageQuery: "fraud", soundHint: "ФРАУДЕ — ФРАУД!" },
            { pt: "a burla", ru: "обман/афера", imageQuery: "scam", soundHint: "БУРЛА — БУРЛА (афера) от слова бурлить!" },
            { pt: "o crime", ru: "преступление", imageQuery: "crime", soundHint: "КРИМЕ — КРАЙМ!" },
            { pt: "a infração", ru: "нарушение", imageQuery: "violation infraction", soundHint: "ИНФРАСАУ — ИНФРАКЦИЯ!" },
            { pt: "a multa", ru: "штраф", imageQuery: "fine penalty", soundHint: "МУЛТА — МУЛТА (штраф) за нарушение!" },
            { pt: "o tribunal", ru: "суд", imageQuery: "court tribunal", soundHint: "ТРИБУНАЛ — ТРИБУНАЛ!" },
            { pt: "o juiz", ru: "судья", imageQuery: "judge", soundHint: "ЖУИШ — ДЖАДЖ!" },
            { pt: "a sentença", ru: "приговор", imageQuery: "sentence verdict", soundHint: "СЕНТЭНСА — СЕНТЕНЦИЯ (приговор)!" },
            { pt: "a pena", ru: "наказание", imageQuery: "punishment penalty",
        imageUrl: "https://images.unsplash.com/photo-1697663580521-92fd2744d0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxmZWF0aGVyJTIwYmlyZCUyMHF1aWxsfGVufDB8MHx8fDE3Njk3MjQwOTR8MA&ixlib=rb-4.1.0&q=80&w=400", soundHint: "ПЕНА — ПЕНАЛЬТИ!" },
            { pt: "a prisão", ru: "тюрьма", imageQuery: "prison jail", soundHint: "ПРИЗАУ — ПРИЗОН!" },
            { pt: "a liberdade condicional", ru: "условное освобождение", imageQuery: "parole", soundHint: "ЛИБЕРДАДЕ КОНДИСИОНАЛ — ЛИБЕРТИ с КОНДИЦИЕЙ!" },
            { pt: "a indemnização", ru: "компенсация", imageQuery: "compensation damages", soundHint: "ИНДЕМНИЗАСАУ — ИНДЕМНИТИ!" },
            { pt: "a negligência", ru: "халатность", imageQuery: "negligence", soundHint: "НЕГЛИЖЭНСИЯ — НЕГЛИЖЕНС!" },
            { pt: "a omissão de socorro", ru: "неоказание помощи", imageQuery: "failure to assist", soundHint: "ОМИССАУ ДЕ СОКОРРУ — ОМИССИЯ помощи!" },
            { pt: "o estado de emergência", ru: "чрезвычайное положение", imageQuery: "state of emergency", soundHint: "ЭШТАДУ ДЕ ЭМЕРЖЭНСИЯ — СТЕЙТ оф ЭМЕРДЖЕНСИ!" },
            { pt: "a proteção civil", ru: "гражданская защита", imageQuery: "civil protection", soundHint: "ПРОТЕСАУ СИВИЛ — ПРОТЕКЦИЯ СИВИЛ!" },
            { pt: "o resgate", ru: "спасение", imageQuery: "rescue", soundHint: "РЕШГАТЕ — РЕСКЬЮ (спасение)!" },
            { pt: "a busca e salvamento", ru: "поиск и спасение", imageQuery: "search and rescue", soundHint: "БУШКА Е САЛВАМЕНТУ — БУСК и СЕЙВ!" },
            { pt: "o helicóptero de emergência", ru: "вертолёт скорой помощи", imageQuery: "rescue helicopter", soundHint: "ЭЛИКОПТЕРУ ДЕ ЭМЕРЖЭНСИЯ — ХЕЛИКОПТЕР!" },
            { pt: "a unidade de cuidados intensivos", ru: "реанимация (отделение)", imageQuery: "icu intensive care", soundHint: "УНИДАДЕ ДЕ КУИДАДУШ ИНТЕНСИВУШ — ICU!" },
            { pt: "o trauma", ru: "травма", imageQuery: "trauma injury", soundHint: "ТРАУМА — ТРАВМА!" },
            { pt: "a hemorragia", ru: "кровотечение", imageQuery: "hemorrhage bleeding", soundHint: "ЭМОРРАЖИЯ — ГЕМОРРАГИЯ!" },
            { pt: "o choque", ru: "шок", imageQuery: "shock medical", soundHint: "ШОКЕ — ШОК!" },
            { pt: "a paragem cardíaca", ru: "остановка сердца", imageQuery: "cardiac arrest", soundHint: "ПАРАЖЕМ КАРДИАКА — ПАРАЛИЧ КАРДИО!" }
        ]
    },

    // ========== SERVIÇOS PÚBLICOS ==========
    "servicos_a2": {
        name: "Básico",
        category: "servicos",
        categoryName: "📋 Serviços Públicos",
        words: [
            { pt: "o documento", ru: "документ", imageQuery: "document", soundHint: "ДОКУМЕНТУ — ДОКУМЕНТ!" },
            { pt: "o formulário", ru: "бланк/форма", imageQuery: "form", soundHint: "ФОРМУЛАРИУ — ФОРМУЛЯР!" },
            { pt: "a fotocópia", ru: "копия", imageQuery: "photocopy", soundHint: "ФОТОКОПИЯ — ФОТОКОПИЯ!" },
            { pt: "o original", ru: "оригинал", imageQuery: "original document", soundHint: "ОРИГИНАЛ — ОРИГИНАЛ!" },
            { pt: "a assinatura", ru: "подпись", imageQuery: "signature", soundHint: "АССИНАТУРА — АССИГНАТУРА (подпись)!" },
            { pt: "o carimbo", ru: "печать/штамп", imageQuery: "stamp seal", soundHint: "КАРИМБУ — КАРИМБА печать!" },
            { pt: "a senha", ru: "талон/номер очереди", imageQuery: "queue number", soundHint: "СЕНЬЯ — СЕНЬЯ (знак) в очереди!" },
            { pt: "a fila", ru: "очередь", imageQuery: "queue line", soundHint: "ФИЛА — ФИЛА (очередь) людей!" },
            { pt: "o balcão", ru: "стойка/окошко", imageQuery: "service counter", soundHint: "БАЛКАУ — БАЛКОН обслуживания!" },
            { pt: "o funcionário", ru: "служащий", imageQuery: "clerk official", soundHint: "ФУНКСИОНАРИУ — ФУНКЦИОНЕР!" },
            { pt: "o horário", ru: "расписание/часы работы", imageQuery: "schedule hours", soundHint: "ОРАРИУ — ОРАРИЙ (расписание)!" },
            { pt: "o prazo", ru: "срок", imageQuery: "deadline", soundHint: "ПРАЗУ — ПРАЗ (срок)!" },
            { pt: "a taxa", ru: "пошлина/сбор", imageQuery: "fee tax", soundHint: "ТАКСА — ТАКСА (сбор)!" },
            { pt: "pagar", ru: "платить", imageQuery: "paying", soundHint: "ПАГАР — ПЛАТИТЬ!" },
            { pt: "o recibo", ru: "квитанция", imageQuery: "receipt", soundHint: "РЕСИБУ — РЕСИВ (получаю) квитанцию!" },
            { pt: "o comprovativo", ru: "подтверждение", imageQuery: "proof confirmation", soundHint: "КОМПРОВАТИВУ — КОМПРОВАТ (подтвердить)!" },
            { pt: "a morada", ru: "адрес", imageQuery: "address", soundHint: "МОРАДА — МОРА тут — адрес!" },
            { pt: "o código postal", ru: "почтовый индекс", imageQuery: "zip code", soundHint: "КОДИГУ ПОШТАЛ — КОД ПОЧТЫ!" },
            { pt: "o contacto", ru: "контакт", imageQuery: "contact information", soundHint: "КОНТАКТУ — КОНТАКТ!" },
            { pt: "o email", ru: "электронная почта", imageQuery: "email", soundHint: "ИМЕЙЛ — ИМЕЙЛ!" },
            { pt: "o telemóvel", ru: "мобильный телефон", imageQuery: "mobile phone", soundHint: "ТЕЛЕМОВЕЛ — ТЕЛЕ-МОБИЛЬ!" },
            { pt: "marcar", ru: "записаться/назначить", imageQuery: "booking appointment", soundHint: "МАРКАР — МАРКЕР ставит запись!" },
            { pt: "a marcação", ru: "запись/назначение", imageQuery: "appointment", soundHint: "МАРКАСАУ — МАРКАЦИЯ!" },
            { pt: "confirmar", ru: "подтвердить", imageQuery: "confirm", soundHint: "КОНФИРМАР — КОНФИРМАЦИЯ!" },
            { pt: "cancelar", ru: "отменить", imageQuery: "cancel", soundHint: "КАНСЭЛАР — КАНСЕЛ!" },
            { pt: "remarcar", ru: "перенести", imageQuery: "reschedule", soundHint: "РЕМАРКАР — РЕМАРКА на новую дату!" },
            { pt: "entregar", ru: "сдать/подать", imageQuery: "submit deliver", soundHint: "ЭНТРЕГАР — ЭНТРАДА документов!" },
            { pt: "levantar", ru: "забрать/получить", imageQuery: "pick up collect", soundHint: "ЛЕВАНТАР — ЛЕВАНТО документ!" },
            { pt: "aguardar", ru: "ожидать", imageQuery: "waiting", soundHint: "АГУАРДАР — ГУАРДИЯ ждёт!" },
            { pt: "está pronto", ru: "готово", imageQuery: "ready done", soundHint: "ЭШТА ПРОНТУ — это ПРОНТО (готово)!" }
        ]
    },
    "servicos_b1": {
        name: "Intermédio",
        category: "servicos",
        categoryName: "📋 Serviços Públicos",
        words: [
            { pt: "o NIF", ru: "налоговый номер", imageQuery: "tax number", soundHint: "НИФ — НИФ-НИФ поросёнок платит налоги!" },
            { pt: "o NISS", ru: "номер соцстрахования", imageQuery: "social security number", soundHint: "НИСС — НИС Соцстраха!" },
            { pt: "o número de utente", ru: "номер пациента (SNS)", imageQuery: "patient number", soundHint: "НУМЕРУ ДЕ УТЕНТЕ — НОМЕР УТЕНТА!" },
            { pt: "o cartão de cidadão", ru: "ID-карта гражданина", imageQuery: "citizen card", soundHint: "КАРТАУ ДЕ СИДАДАУ — КАРТА СИДАДАНА!" },
            { pt: "o passaporte", ru: "паспорт", imageQuery: "passport", soundHint: "ПАССАПОРТЕ — ПАСПОРТ!" },
            { pt: "a autorização de residência", ru: "ВНЖ", imageQuery: "residence permit", soundHint: "АУТОРИЗАСАУ ДЕ РЕЗИДЭНСИЯ — АВТОРИЗАЦИЯ резидента!" },
            { pt: "o SEF/AIMA", ru: "миграционная служба", imageQuery: "immigration office", soundHint: "СЕФ/АИМА — миграционка!" },
            { pt: "as Finanças", ru: "налоговая", imageQuery: "tax office", soundHint: "ФИНАНСАШ — ФИНАНСЫ!" },
            { pt: "a Segurança Social", ru: "соцстрах", imageQuery: "social security office", soundHint: "СЕГУРАНСА СОСИАЛ — СОЦСЕКЬЮРИТИ!" },
            { pt: "a Loja do Cidadão", ru: "МФЦ", imageQuery: "citizen service center", soundHint: "ЛОЖА ДУ СИДАДАУ — ЛОДЖА гражданина!" },
            { pt: "a Junta de Freguesia", ru: "управа района", imageQuery: "parish council", soundHint: "ЖУНТА ДЕ ФРЕГЕЗИЯ — ЖУНТА района!" },
            { pt: "a Câmara Municipal", ru: "мэрия", imageQuery: "city hall", soundHint: "КАМАРА МУНИСИПАЛ — КАМЕРА МУНИЦИПАЛА!" },
            { pt: "o registo", ru: "регистрация/запись", imageQuery: "registration record", soundHint: "РЕЖИШТУ — РЕГИСТР!" },
            { pt: "o atestado", ru: "справка", imageQuery: "certificate attestation", soundHint: "АТЕШТАДУ — АТТЕСТАТ-справка!" },
            { pt: "a certidão", ru: "свидетельство", imageQuery: "certificate", soundHint: "СЕРТИДАУ — СЕРТИФИКАТ!" },
            { pt: "a certidão de nascimento", ru: "свидетельство о рождении", imageQuery: "birth certificate", soundHint: "СЕРТИДАУ ДЕ НАСИМЕНТУ — СЕРТИФИКАТ НАСИМЕНТУ!" },
            { pt: "a certidão de casamento", ru: "свидетельство о браке", imageQuery: "marriage certificate", soundHint: "СЕРТИДАУ ДЕ КАЗАМЕНТУ — СЕРТИФИКАТ КАЗАМЕНТУ!" },
            { pt: "o registo criminal", ru: "справка о несудимости", imageQuery: "criminal record", soundHint: "РЕЖИШТУ КРИМИНАЛ — РЕГИСТР КРИМИНАЛА!" },
            { pt: "a declaração", ru: "декларация/заявление", imageQuery: "declaration statement", soundHint: "ДЕКЛАРАСАУ — ДЕКЛАРАЦИЯ!" },
            { pt: "o requerimento", ru: "заявление/ходатайство", imageQuery: "application request", soundHint: "РЕКЕРИМИНТУ — РЕКВИЗИТ заявления!" },
            { pt: "a procuração", ru: "доверенность", imageQuery: "power of attorney", soundHint: "ПРОКУРАСАУ — ПРОКУРАТУРА даёт доверенность!" },
            { pt: "o reconhecimento de assinatura", ru: "заверение подписи", imageQuery: "notarized signature", soundHint: "РЕКОНЬЕСИМЕНТУ ДЕ АССИНАТУРА — РЕКОГНИЦИЯ подписи!" },
            { pt: "o notário", ru: "нотариус", imageQuery: "notary", soundHint: "НОТАРИУ — НОТАРИУС!" },
            { pt: "a tradução certificada", ru: "заверенный перевод", imageQuery: "certified translation", soundHint: "ТРАДУСАУ СЕРТИФИКАДА — ТРАДУКЦИЯ СЕРТИФИЦИРОВАННАЯ!" },
            { pt: "a apostila", ru: "апостиль", imageQuery: "apostille", soundHint: "АПОШТИЛА — АПОСТИЛЬ!" },
            { pt: "a legalização", ru: "легализация", imageQuery: "legalization", soundHint: "ЛЕГАЛИЗАСАУ — ЛЕГАЛИЗАЦИЯ!" },
            { pt: "o prazo de validade", ru: "срок действия", imageQuery: "validity period", soundHint: "ПРАЗУ ДЕ ВАЛИДАДЕ — ПРАЗ ВАЛИДНОСТИ!" },
            { pt: "renovar", ru: "продлить", imageQuery: "renew", soundHint: "РЕНОВАР — РЕНОВ (новый) документ!" },
            { pt: "atualizar", ru: "обновить", imageQuery: "update", soundHint: "АТУАЛИЗАР — АКТУАЛИЗИРОВАТЬ!" },
            { pt: "o pedido", ru: "запрос/заявка", imageQuery: "request application", soundHint: "ПЕДИДУ — ПЕДИТЬ запрос!" },
            { pt: "em análise", ru: "на рассмотрении", imageQuery: "under review", soundHint: "ЭМ АНАЛИЗЕ — НА АНАЛИЗЕ!" },
            { pt: "deferido", ru: "одобрено", imageQuery: "approved", soundHint: "ДЕФЕРИДУ — ДЕФЕРЕНТ (одобрен)!" },
            { pt: "indeferido", ru: "отказано", imageQuery: "rejected denied", soundHint: "ИНДЕФЕРИДУ — ИН-ДЕФЕР — НЕ одобрен!" },
            { pt: "o recurso", ru: "апелляция", imageQuery: "appeal", soundHint: "РЕКУРСУ — РЕКУРСИЯ обжалования!" },
            { pt: "a audiência", ru: "приём/слушание", imageQuery: "hearing appointment", soundHint: "АУДИЭНСИЯ — АУДИЕНЦИЯ!" }
        ]
    },
    "servicos_b2": {
        name: "Avançado",
        category: "servicos",
        categoryName: "📋 Serviços Públicos",
        words: [
            { pt: "o IRS", ru: "подоходный налог", imageQuery: "income tax", soundHint: "ИРС — IRS налог!" },
            { pt: "a declaração de IRS", ru: "налоговая декларация", imageQuery: "tax return", soundHint: "ДЕКЛАРАСАУ ДЕ ИРС — ДЕКЛАРАЦИЯ IRS!" },
            { pt: "o reembolso", ru: "возврат (налога)", imageQuery: "tax refund", soundHint: "РЕЭМБОЛСУ — РЕИМБУРС!" },
            { pt: "a nota de liquidação", ru: "налоговое уведомление", imageQuery: "tax notice", soundHint: "НОТА ДЕ ЛИКИДАСАУ — НОТА ЛИКВИДАЦИИ!" },
            { pt: "o IMI", ru: "налог на недвижимость", imageQuery: "property tax", soundHint: "ИМИ — ИМИ (налог на имущество)!" },
            { pt: "o IMT", ru: "налог на покупку недвижимости", imageQuery: "property transfer tax", soundHint: "ИМТ — ИМТ на трансфер!" },
            { pt: "o IUC", ru: "налог на авто", imageQuery: "vehicle tax", soundHint: "ИУС — IUC на авто!" },
            { pt: "as contribuições", ru: "взносы", imageQuery: "contributions", soundHint: "КОНТРИБУИСОЕШ — КОНТРИБУЦИИ!" },
            { pt: "o trabalhador independente", ru: "ИП/самозанятый", imageQuery: "self employed", soundHint: "ТРАБАЛЬЯДОР ИНДЕПЕНДЭНТЕ — НЕЗАВИСИМЫЙ работник!" },
            { pt: "o recibo verde", ru: "чек самозанятого", imageQuery: "green receipt", soundHint: "РЕСИБУ ВЕРДЕ — ЗЕЛЁНАЯ квитанция!" },
            { pt: "a atividade", ru: "деятельность/ОКВЭД", imageQuery: "business activity", soundHint: "АТИВИДАДЕ — АКТИВНОСТЬ!" },
            { pt: "abrir atividade", ru: "открыть ИП", imageQuery: "open business", soundHint: "АБРИР АТИВИДАДЕ — АБРИР деятельность!" },
            { pt: "fechar atividade", ru: "закрыть ИП", imageQuery: "close business", soundHint: "ФЕШАР АТИВИДАДЕ — ФЕШАР (закрыть)!" },
            { pt: "a isenção", ru: "освобождение (от налога)", imageQuery: "tax exemption", soundHint: "ИЗЕНСАУ — ИСКЛЮЧЕНИЕ!" },
            { pt: "a dedução", ru: "вычет", imageQuery: "tax deduction", soundHint: "ДЕДУСАУ — ДЕДУКЦИЯ (вычет)!" },
            { pt: "as despesas", ru: "расходы", imageQuery: "expenses", soundHint: "ДЕШПЕЗАШ — ДЕПЕШИ (расходы)!" },
            { pt: "o património", ru: "имущество", imageQuery: "assets property", soundHint: "ПАТРИМОНИУ — ПАТРИМОНИЙ!" },
            { pt: "a herança", ru: "наследство", imageQuery: "inheritance", soundHint: "ЭРАНСА — ЭРАНС (наследство)!" },
            { pt: "o testamento", ru: "завещание", imageQuery: "will testament", soundHint: "ТЕSТАМЕНТУ — ТЕСТАМЕНТ!" },
            { pt: "a escritura", ru: "акт (нотариальный)", imageQuery: "deed notarial", soundHint: "ЭШКРИТУРА — СКРИПТ-документ!" },
            { pt: "o registo predial", ru: "регистрация недвижимости", imageQuery: "property registration", soundHint: "РЕЖИШТУ ПРЕДИАЛ — РЕГИСТР ПРЕДИАЛА!" },
            { pt: "a conservatória", ru: "реестр (учреждение)", imageQuery: "registry office", soundHint: "КОНСЕРВАТОРИЯ — КОНСЕРВАТОРИЯ документов!" },
            { pt: "o subsídio", ru: "пособие", imageQuery: "benefit subsidy", soundHint: "СУБСИДИУ — СУБСИДИЯ!" },
            { pt: "o subsídio de desemprego", ru: "пособие по безработице", imageQuery: "unemployment benefit", soundHint: "СУБСИДИУ ДЕ ДЕЗЭМПРЕГУ — СУБСИДИЯ БЕЗРАБОТИЦЫ!" },
            { pt: "o abono de família", ru: "детское пособие", imageQuery: "family allowance", soundHint: "АБОНУ ДЕ ФАМИЛИЯ — АБОНЕМЕНТ СЕМЬИ!" },
            { pt: "a baixa médica", ru: "больничный лист", imageQuery: "sick leave", soundHint: "БАЙША МЕДИКА — НИЖЕ работы — на больничном!" },
            { pt: "a reforma", ru: "пенсия", imageQuery: "pension retirement", soundHint: "РЕФОРМА — РЕФОРМА жизни — пенсия!" },
            { pt: "a pensão de velhice", ru: "пенсия по старости", imageQuery: "old age pension", soundHint: "ПЕНСАУ ДЕ ВЕЛЬИС — ПЕНСИЯ СТАРОСТИ!" },
            { pt: "o IEFP", ru: "центр занятости", imageQuery: "employment center", soundHint: "ИЕФП — центр работы!" },
            { pt: "a formação profissional", ru: "проф. обучение", imageQuery: "vocational training", soundHint: "ФОРМАСАУ ПРОФИССИОНАЛ — ФОРМАЦИЯ ПРОФИ!" },
            { pt: "o estágio profissional", ru: "стажировка", imageQuery: "internship", soundHint: "ЭШТАЖИУ ПРОФИССИОНАЛ — СТАЖИРОВКА!" },
            { pt: "o contrato de trabalho", ru: "трудовой договор", imageQuery: "employment contract", soundHint: "КОНТРАТУ ДЕ ТРАБАЛЬЮ — КОНТРАКТ ТРУДА!" },
            { pt: "o visto", ru: "виза", imageQuery: "visa", soundHint: "ВИШТУ — ВИЗА!" },
            { pt: "a manifestação de interesse", ru: "заявление о намерениях", imageQuery: "expression of interest", soundHint: "МАНИФЕШТАСАУ ДЕ ИНТЕРЕССЕ — МАНИФЕСТ ИНТЕРЕСА!" },
            { pt: "o reagrupamento familiar", ru: "воссоединение семьи", imageQuery: "family reunification", soundHint: "РЕАГРУПАМЕНТУ ФАМИЛЬЯР — РЕАГРУПИРОВКА СЕМЬИ!" }
        ]
    },

    // ========== AUTOMÓVEL ==========
    "automovel_a2": {
        name: "Básico",
        category: "automovel",
        categoryName: "🚗 Automóvel",
        words: [
            { pt: "o carro", ru: "машина", imageQuery: "car", soundHint: "КАРРУ — КАРРО!" },
            { pt: "o automóvel", ru: "автомобиль", imageQuery: "automobile", soundHint: "АУТОМОВЕЛ — АВТОМОБИЛЬ!" },
            { pt: "a mota", ru: "мотоцикл", imageQuery: "motorcycle", soundHint: "МОТА — МОТО!" },
            { pt: "conduzir", ru: "водить", imageQuery: "driving", soundHint: "КОНДУЗИР — КОНДУКТОР водит!" },
            { pt: "a carta de condução", ru: "водительские права", imageQuery: "driving license", soundHint: "КАРТА ДЕ КОНДУСАУ — КАРТА КОНДУКТОРА!" },
            { pt: "o volante", ru: "руль", imageQuery: "steering wheel", soundHint: "ВОЛАНТЕ — ВОЛАН (руль)!" },
            { pt: "o pedal", ru: "педаль", imageQuery: "pedal", soundHint: "ПЕДАЛ — ПЕДАЛЬ!" },
            { pt: "o travão", ru: "тормоз", imageQuery: "brake", soundHint: "ТРАВАУ — ТРАВАУ (тормоз) травит скорость!" },
            { pt: "o acelerador", ru: "газ (педаль)", imageQuery: "accelerator", soundHint: "АСЕЛЕРАДОР — АКСЕЛЕРАТОР!" },
            { pt: "a embraiagem", ru: "сцепление", imageQuery: "clutch", soundHint: "ЭМБРАЙАЖЕМ — ЭМБРИОН сцепления!" },
            { pt: "a mudança", ru: "передача (скорость)", imageQuery: "gear shift", soundHint: "МУДАНСА — МУДАНСА (изменение) скорости!" },
            { pt: "a gasolina", ru: "бензин", imageQuery: "gasoline petrol", soundHint: "ГАЗОЛИНА — ГАЗОЛИН!" },
            { pt: "o gasóleo", ru: "дизель", imageQuery: "diesel", soundHint: "ГАЗОЛЕУ — ГАЗОЙЛЬ!" },
            { pt: "a bomba de gasolina", ru: "заправка", imageQuery: "gas station", soundHint: "БОМБА ДЕ ГАЗОЛИНА — БОМБА БЕНЗИНА!" },
            { pt: "abastecer", ru: "заправлять", imageQuery: "refueling", soundHint: "АБАШТЕСЕР — АБАСТЕК (наполнять)!" },
            { pt: "o depósito", ru: "бак", imageQuery: "fuel tank", soundHint: "ДЕПОЗИТУ — ДЕПОЗИТ бензина!" },
            { pt: "a roda", ru: "колесо", imageQuery: "wheel tire", soundHint: "РОДА — РОДА (колесо)!" },
            { pt: "o pneu", ru: "шина", imageQuery: "tire", soundHint: "ПНЕУ — ПНЕУМАТИКА!" },
            { pt: "o motor", ru: "мотор/двигатель", imageQuery: "engine", soundHint: "МОТОР — МОТОР!" },
            { pt: "a porta", ru: "дверь (машины)", imageQuery: "car door", soundHint: "ПОРТА — ПОРТА!" },
            { pt: "o vidro", ru: "стекло", imageQuery: "car window", soundHint: "ВИДРУ — ВИДРО (стекло)!" },
            { pt: "o espelho", ru: "зеркало", imageQuery: "mirror car", soundHint: "ЭШПЕЛЬЮ — ЭСПЕХО (зеркало)!" },
            { pt: "a luz", ru: "фара/свет", imageQuery: "headlight", soundHint: "ЛУШ — ЛУЧ света!" },
            { pt: "o pisca", ru: "поворотник", imageQuery: "turn signal", soundHint: "ПИШКА — ПИСКА (мигает)!" },
            { pt: "a buzina", ru: "сигнал/клаксон", imageQuery: "horn car", soundHint: "БУЗИНА — БУЗИНА сигналит!" },
            { pt: "o cinto de segurança", ru: "ремень безопасности", imageQuery: "seatbelt", soundHint: "СИНТУ ДЕ СЕГУРАНСА — СИНТЕТИК СЕГУРНОСТИ!" },
            { pt: "o banco", ru: "сиденье", imageQuery: "car seat", soundHint: "БАНКУ — БАНК сидений!" },
            { pt: "a mala", ru: "багажник", imageQuery: "trunk car", soundHint: "МАЛА — МАЛЫЙ багаж в багажнике!" },
            { pt: "estacionar", ru: "парковаться", imageQuery: "parking", soundHint: "ЭШТАСИОНАР — СТАСИОН (станция) парковки!" },
            { pt: "o parque de estacionamento", ru: "парковка", imageQuery: "parking lot", soundHint: "ПАРКЕ ДЕ ЭШТАСИОНАМЕНТУ — ПАРК СТАНЦИИ!" }
        ]
    },
    "automovel_b1": {
        name: "Intermédio",
        category: "automovel",
        categoryName: "🚗 Automóvel",
        words: [
            { pt: "a matrícula", ru: "номер машины", imageQuery: "license plate", soundHint: "МАТРИКУЛА — МАТРИКУЛ (номер)!" },
            { pt: "o seguro automóvel", ru: "автостраховка", imageQuery: "car insurance", soundHint: "СЕГУРУ АУТОМОВЕЛ — СЕГУРИТИ АВТО!" },
            { pt: "a inspeção", ru: "техосмотр", imageQuery: "car inspection", soundHint: "ИНСПЕСАУ — ИНСПЕКЦИЯ!" },
            { pt: "o IPO", ru: "техосмотр (центр)", imageQuery: "vehicle inspection center", soundHint: "ИПО — ИПО-шка проверяет машину!" },
            { pt: "o IUC", ru: "дорожный налог", imageQuery: "road tax", soundHint: "ИУС — IUC налог!" },
            { pt: "o IMT", ru: "транспортная служба", imageQuery: "transport authority", soundHint: "ИМТ — ИМТ (транспорт)!" },
            { pt: "a via verde", ru: "электронный проезд", imageQuery: "electronic toll", soundHint: "ВИА ВЕРДЕ — ЗЕЛЁНАЯ ВИА (дорога)!" },
            { pt: "a portagem", ru: "платная дорога", imageQuery: "toll road", soundHint: "ПОРТАЖЕМ — ПОРТ-ворота платные!" },
            { pt: "a autoestrada", ru: "автострада", imageQuery: "highway", soundHint: "АУТОЭШТРАДА — АВТОСТРАДА!" },
            { pt: "a estrada nacional", ru: "национальная дорога", imageQuery: "national road", soundHint: "ЭШТРАДА НАСИОНАЛ — СТРАДА НАЦИОНАЛЬ!" },
            { pt: "o limite de velocidade", ru: "ограничение скорости", imageQuery: "speed limit", soundHint: "ЛИМИТЕ ДЕ ВЕЛОСИДАДЕ — ЛИМИТ ВЕЛОСИТИ!" },
            { pt: "a multa", ru: "штраф", imageQuery: "traffic fine", soundHint: "МУЛТА — МУЛТА за нарушение!" },
            { pt: "o radar", ru: "радар", imageQuery: "speed camera", soundHint: "РАДАР — РАДАР!" },
            { pt: "a contraordenação", ru: "нарушение ПДД", imageQuery: "traffic violation", soundHint: "КОНТРАОРДЭНАСАУ — КОНТРА-ОРДЕР!" },
            { pt: "o acidente", ru: "авария", imageQuery: "car accident", soundHint: "АСИДЕНТЕ — АКСИДЕНТ!" },
            { pt: "a colisão", ru: "столкновение", imageQuery: "collision", soundHint: "КОЛИЗАУ — КОЛЛИЗИЯ!" },
            { pt: "o reboque", ru: "эвакуатор", imageQuery: "tow truck", soundHint: "РЕБОКЕ — РЕБОК (буксир)!" },
            { pt: "a avaria", ru: "поломка", imageQuery: "car breakdown", soundHint: "АВАРИЯ — АВАРИЯ (поломка)!" },
            { pt: "a oficina", ru: "автосервис", imageQuery: "car repair shop", soundHint: "ОФИСИНА — ОФИС МАШИН!" },
            { pt: "o mecânico", ru: "механик", imageQuery: "mechanic", soundHint: "МЕКАНИКУ — МЕХАНИК!" },
            { pt: "a revisão", ru: "ТО (обслуживание)", imageQuery: "car service", soundHint: "РЕВИЗАУ — РЕВИЗИЯ машины!" },
            { pt: "o óleo", ru: "масло", imageQuery: "engine oil", soundHint: "ОЛЕУ — ОЛЕО (масло)!" },
            { pt: "a bateria", ru: "аккумулятор", imageQuery: "car battery", soundHint: "БАТЕРИЯ — БАТАРЕЯ!" },
            { pt: "os travões", ru: "тормоза", imageQuery: "brakes", soundHint: "УШ ТРАВОЕШ — ТРАВИТ скорость!" },
            { pt: "as pastilhas", ru: "тормозные колодки", imageQuery: "brake pads", soundHint: "АШ ПАШТИЛЬЯШ — ПАСТИЛКИ тормозов!" },
            { pt: "o filtro", ru: "фильтр", imageQuery: "car filter", soundHint: "ФИЛТРУ — ФИЛЬТР!" },
            { pt: "o ar condicionado", ru: "кондиционер", imageQuery: "car ac", soundHint: "АР КОНДИСИОНАДУ — АЙР КОНДИШН!" },
            { pt: "o GPS", ru: "навигатор", imageQuery: "gps navigation", soundHint: "ЖПС — GPS!" },
            { pt: "alugar um carro", ru: "арендовать машину", imageQuery: "car rental", soundHint: "АЛУГАР УМ КАРРУ — АЛУГАР КАРРО!" },
            { pt: "devolver o carro", ru: "вернуть машину", imageQuery: "return rental car", soundHint: "ДЭВУЛВЕР У КАРРУ — ДЭВУЛВЕР (вернуть) КАРРУ!" },
            { pt: "o contrato de aluguer", ru: "договор аренды", imageQuery: "rental agreement", soundHint: "КОНТРАТУ ДЕ АЛУГЕР — КОНТРАКТ АЛУГЕРА!" },
            { pt: "a franquia", ru: "франшиза (страховки)", imageQuery: "insurance deductible", soundHint: "ФРАНКИЯ — ФРАНШИЗА!" },
            { pt: "sem franquia", ru: "без франшизы", imageQuery: "no deductible", soundHint: "СЕМ ФРАНКИЯ — БЕЗ ФРАНШИЗЫ!" },
            { pt: "o condutor adicional", ru: "доп. водитель", imageQuery: "additional driver", soundHint: "КОНДУТОР АДИСИОНАЛ — ДОП КОНДУКТОР!" },
            { pt: "a quilometragem", ru: "пробег", imageQuery: "mileage", soundHint: "КИЛОМЕТРАЖЕМ — КИЛОМЕТРАЖ!" }
        ]
    },
    "automovel_b2": {
        name: "Avançado",
        category: "automovel",
        categoryName: "🚗 Automóvel",
        words: [
            { pt: "a compra de viatura", ru: "покупка авто", imageQuery: "buying car", soundHint: "КОМПРА ДЕ ВИАТУРА — КОМПРА ВИАТУРЫ!" },
            { pt: "o stand", ru: "автосалон", imageQuery: "car dealership", soundHint: "ШТАНД — СТЕНД с машинами!" },
            { pt: "o veículo usado", ru: "б/у автомобиль", imageQuery: "used car", soundHint: "ВЕЙКУЛУ УЗАДУ — ВЕХИКЛ ЮЗАННЫЙ!" },
            { pt: "o veículo novo", ru: "новый автомобиль", imageQuery: "new car", soundHint: "ВЕЙКУЛУ НОВУ — НОВЫЙ ВЕХИКЛ!" },
            { pt: "a quilometragem real", ru: "реальный пробег", imageQuery: "actual mileage", soundHint: "КИЛОМЕТРАЖЕМ РЕАЛ — РЕАЛ КИЛОМЕТРАЖ!" },
            { pt: "o histórico de manutenção", ru: "история обслуживания", imageQuery: "maintenance history", soundHint: "ИШТУРИКУ ДЕ МАНУТЕНСАУ — ИСТОРИЯ МАИНТЕНАНС!" },
            { pt: "a garantia", ru: "гарантия", imageQuery: "warranty", soundHint: "ГАРАНТИЯ — ГАРАНТИЯ!" },
            { pt: "o financiamento", ru: "кредит на авто", imageQuery: "car financing", soundHint: "ФИНАНСИАМЕНТУ — ФИНАНСИРОВАНИЕ!" },
            { pt: "a prestação", ru: "ежемесячный платёж", imageQuery: "monthly payment", soundHint: "ПРЕШТАСАУ — ПРЕСТАЦИЯ!" },
            { pt: "a entrada", ru: "первый взнос", imageQuery: "down payment", soundHint: "ЭНТРАДА — ВХОД в кредит!" },
            { pt: "o documento único automóvel", ru: "тех. паспорт", imageQuery: "vehicle registration", soundHint: "ДОКУМЕНТУ УНИКУ АУТОМОВЕЛ — ДУА!" },
            { pt: "a mudança de propriedade", ru: "переоформление", imageQuery: "ownership transfer", soundHint: "МУДАНСА ДЕ ПРОПРИЕДАДЕ — МУДАНСА СОБСТВЕННОСТИ!" },
            { pt: "a declaração de venda", ru: "договор продажи", imageQuery: "sales agreement", soundHint: "ДЕКЛАРАСАУ ДЕ ВЕНДА — ДЕКЛАРАЦИЯ ПРОДАЖИ!" },
            { pt: "o registo automóvel", ru: "регистрация авто", imageQuery: "vehicle registration", soundHint: "РЕЖИШТУ АУТОМОВЕЛ — РЕГИСТР АВТО!" },
            { pt: "a homologação", ru: "омологация", imageQuery: "vehicle certification", soundHint: "ОМОЛОГАСАУ — ОМОЛОГАЦИЯ!" },
            { pt: "o catalisador", ru: "катализатор", imageQuery: "catalytic converter", soundHint: "КАТАЛИЗАДОР — КАТАЛИЗАТОР!" },
            { pt: "as emissões", ru: "выхлопы", imageQuery: "emissions", soundHint: "АШ ЭМИССОЕШ — ЭМИССИИ!" },
            { pt: "o veículo elétrico", ru: "электромобиль", imageQuery: "electric car", soundHint: "ВЕЙКУЛУ ЭЛЕТРИКУ — ЭЛЕКТРИК ВЕХИКЛ!" },
            { pt: "o posto de carregamento", ru: "зарядная станция", imageQuery: "charging station", soundHint: "ПОШТУ ДЕ КАРРЕГАМЕНТУ — ПОСТ ЧАРДЖИНГА!" },
            { pt: "a autonomia", ru: "запас хода", imageQuery: "range autonomy", soundHint: "АУТОНОМИЯ — АВТОНОМИЯ!" },
            { pt: "o híbrido", ru: "гибрид", imageQuery: "hybrid car", soundHint: "ИБРИДУ — ГИБРИД!" },
            { pt: "o consumo", ru: "расход топлива", imageQuery: "fuel consumption", soundHint: "КОНСУМУ — КОНСУМЦИЯ!" },
            { pt: "a cilindrada", ru: "объём двигателя", imageQuery: "engine displacement", soundHint: "СИЛИНДРАДА — ЦИЛИНДРАДА!" },
            { pt: "a potência", ru: "мощность", imageQuery: "horsepower", soundHint: "ПОТЭНСИЯ — ПОТЕНЦИЯ мотора!" },
            { pt: "o sistema de travagem", ru: "тормозная система", imageQuery: "braking system", soundHint: "СИШТЕМА ДЕ ТРАВАЖЕМ — СИСТЕМА ТОРМАЖА!" },
            { pt: "o ABS", ru: "АБС", imageQuery: "abs brakes", soundHint: "АБС — АБС!" },
            { pt: "o airbag", ru: "подушка безопасности", imageQuery: "airbag", soundHint: "ЭЙРБАГ — ЭЙРБАГ!" },
            { pt: "o controlo de estabilidade", ru: "контроль устойчивости", imageQuery: "stability control", soundHint: "КОНТРОЛУ ДЕ ЭШТАБИЛИДАДЕ — КОНТРОЛЬ СТАБИЛИТИ!" },
            { pt: "a suspensão", ru: "подвеска", imageQuery: "suspension car", soundHint: "СУШПЕНСАУ — СУСПЕНЗИЯ!" },
            { pt: "a direção assistida", ru: "усилитель руля", imageQuery: "power steering", soundHint: "ДИРЭСАУ АСИШТИДА — ДИРЕКЦИЯ АССИСТИРУЕТ!" },
            { pt: "a caixa automática", ru: "автоматическая коробка", imageQuery: "automatic transmission", soundHint: "КАЙША АУТОМАТИКА — КАССА АВТОМАТИЧЕСКАЯ!" },
            { pt: "a caixa manual", ru: "механическая коробка", imageQuery: "manual transmission", soundHint: "КАЙША МАНУАЛ — КАССА МАНУАЛЬНАЯ!" },
            { pt: "o teste de condução", ru: "тест-драйв", imageQuery: "test drive", soundHint: "ТЕШТЕ ДЕ КОНДУСАУ — ТЕСТ ДРАЙВ!" },
            { pt: "a peritagem", ru: "экспертиза авто", imageQuery: "car inspection expert", soundHint: "ПЕРИТАЖЕМ — ПЕРИТ смотрит!" },
            { pt: "o leilão de automóveis", ru: "аукцион авто", imageQuery: "car auction", soundHint: "ЛЕЙЛАУ ДЕ АУТОМОВЕЙШ — ЛЕЙЛА (аукцион) АВТО!" }
        ]
    },

    // ========== COMPRAS ==========
    "compras_a2": {
        name: "Básico",
        category: "compras",
        categoryName: "🛒 Compras",
        words: [
            { pt: "a loja", ru: "магазин", imageQuery: "store shop", soundHint: "ЛОЖА — ЛОЖА магазина!" },
            { pt: "o supermercado", ru: "супермаркет", imageQuery: "supermarket", soundHint: "СУПЕРМЕРКАДУ — СУПЕРМАРКЕТ!" },
            { pt: "o mercado", ru: "рынок", imageQuery: "market", soundHint: "МЕРКАДУ — МАРКЕТ!" },
            { pt: "comprar", ru: "покупать", imageQuery: "buying shopping", soundHint: "КОМПРАР — КОМПРА (покупка)!" },
            { pt: "vender", ru: "продавать", imageQuery: "selling", soundHint: "ВЕНДЕР — ВЕНДИНГ!" },
            { pt: "o preço", ru: "цена", imageQuery: "price tag", soundHint: "ПРЕСУ — ПРАЙС!" },
            { pt: "caro/a", ru: "дорогой", imageQuery: "expensive", soundHint: "КАРУ — КАРО дорого!" },
            { pt: "barato/a", ru: "дешёвый", imageQuery: "cheap", soundHint: "БАРАТУ — БАРАТО дёшево!" },
            { pt: "o desconto", ru: "скидка", imageQuery: "discount", soundHint: "ДЕШКОНТУ — ДИСКОНТ!" },
            { pt: "a promoção", ru: "акция", imageQuery: "promotion sale", soundHint: "ПРОМОСАУ — ПРОМОУШН!" },
            { pt: "pagar", ru: "платить", imageQuery: "paying", soundHint: "ПАГАР — ПЛАТИТЬ!" },
            { pt: "o dinheiro", ru: "деньги", imageQuery: "money cash", soundHint: "ДИНЬЕЙРУ — ДЕНЬЕРО!" },
            { pt: "o cartão", ru: "карта", imageQuery: "credit card", soundHint: "КАРТАУ — КАРТОН!" },
            { pt: "o troco", ru: "сдача", imageQuery: "change money", soundHint: "ТРОКУ — ТРОК (обмен)!" },
            { pt: "a caixa", ru: "касса", imageQuery: "cashier", soundHint: "КАЙША — КАССА!" },
            { pt: "o saco", ru: "пакет", imageQuery: "shopping bag", soundHint: "САКУ — САК (мешок)!" },
            { pt: "o carrinho", ru: "тележка", imageQuery: "shopping cart", soundHint: "КАРИНЬЮ — КАРЕТА маленькая!" },
            { pt: "o cesto", ru: "корзина", imageQuery: "shopping basket", soundHint: "СЕШТУ — ЦЕСТА (корзина)!" },
            { pt: "a lista de compras", ru: "список покупок", imageQuery: "shopping list", soundHint: "ЛИШТА ДЕ КОМПРАШ — ЛИСТ КОМПРА!" },
            { pt: "quanto custa?", ru: "сколько стоит?", imageQuery: "how much", soundHint: "КУАНТУ КУШТА — КВАНТ КОСТ?" },
            { pt: "a fila", ru: "очередь", imageQuery: "queue line", soundHint: "ФИЛА — ФИЛА людей!" },
            { pt: "aberto/a", ru: "открыто", imageQuery: "open sign", soundHint: "АБЕРТУ — АБЕРТО (открыто)!" },
            { pt: "fechado/a", ru: "закрыто", imageQuery: "closed sign", soundHint: "ФЕШАДУ — ФЕШАДО (закрыто)!" },
            { pt: "o horário", ru: "часы работы", imageQuery: "opening hours", soundHint: "ОРАРИУ — ОРАРИЙ!" },
            { pt: "a secção", ru: "отдел", imageQuery: "store section", soundHint: "СЕКСАУ — СЕКЦИЯ!" },
            { pt: "a prateleira", ru: "полка", imageQuery: "shelf", soundHint: "ПРАТЕЛЕЙРА — ПРАТ (тарелка) на ПОЛКЕ!" },
            { pt: "o produto", ru: "продукт/товар", imageQuery: "product", soundHint: "ПРОДУТУ — ПРОДУКТ!" },
            { pt: "a marca", ru: "бренд/марка", imageQuery: "brand", soundHint: "МАРКА — МАРКА!" },
            { pt: "a qualidade", ru: "качество", imageQuery: "quality", soundHint: "КУАЛИДАДЕ — КВАЛИТИ!" },
            { pt: "a quantidade", ru: "количество", imageQuery: "quantity", soundHint: "КУАНТИДАДЕ — КВАНТИТИ!" }
        ]
    },
    "compras_b1": {
        name: "Intermédio",
        category: "compras",
        categoryName: "🛒 Compras",
        words: [
            { pt: "o talho", ru: "мясной отдел", imageQuery: "butcher shop", soundHint: "ТАЛЬЮ — ТАЛИЯ мясника!" },
            { pt: "a peixaria", ru: "рыбный отдел", imageQuery: "fish market", soundHint: "ПЕЙШАРИЯ — ПЕЙШЕ (рыба) тут!" },
            { pt: "a padaria", ru: "пекарня", imageQuery: "bakery", soundHint: "ПАДАРИЯ — ПАУ (хлеб) тут!" },
            { pt: "a frutaria", ru: "фруктовый отдел", imageQuery: "fruit shop", soundHint: "ФРУТАРИЯ — ФРУКТЫ тут!" },
            { pt: "a charcutaria", ru: "колбасный отдел", imageQuery: "deli", soundHint: "ШАРКУТАРИЯ — ШАРКУТЕРИЯ!" },
            { pt: "os congelados", ru: "заморозка", imageQuery: "frozen food", soundHint: "УШ КОНЖЕЛАДУШ — КОНЖЕЛА (замораживает)!" },
            { pt: "os lacticínios", ru: "молочные продукты", imageQuery: "dairy products", soundHint: "УШ ЛАТИСИНИУШ — ЛАКТИКА!" },
            { pt: "a validade", ru: "срок годности", imageQuery: "expiration date", soundHint: "ВАЛИДАДЕ — ВАЛИДИТИ!" },
            { pt: "fresco/a", ru: "свежий", imageQuery: "fresh food", soundHint: "ФРЕШКУ — ФРЕШ!" },
            { pt: "biológico/a", ru: "органический", imageQuery: "organic", soundHint: "БИОЛОЖИКУ — БИОЛОГИЧЕСКИЙ!" },
            { pt: "a embalagem", ru: "упаковка", imageQuery: "packaging", soundHint: "ЭМБАЛАЖЕМ — ЭМБАЛАЖ!" },
            { pt: "o peso", ru: "вес", imageQuery: "weight scale", soundHint: "ПЕЗУ — ВЕС!" },
            { pt: "a balança", ru: "весы", imageQuery: "scale", soundHint: "БАЛАНСА — БАЛАНС весов!" },
            { pt: "por quilo", ru: "за килограмм", imageQuery: "per kilo", soundHint: "ПУР КИЛУ — ПОР КИЛО!" },
            { pt: "a unidade", ru: "штука", imageQuery: "unit piece", soundHint: "УНИДАДЕ — ЮНИТ!" },
            { pt: "o recibo", ru: "чек", imageQuery: "receipt", soundHint: "РЕСИБУ — РЕСИВ (получать) чек!" },
            { pt: "a fatura", ru: "счёт-фактура", imageQuery: "invoice", soundHint: "ФАТУРА — ФАКТУРА!" },
            { pt: "o NIF na fatura", ru: "NIF в чеке", imageQuery: "tax number receipt", soundHint: "НИФ НА ФАТУРА — НИФ в ФАКТУРЕ!" },
            { pt: "o cartão de fidelização", ru: "карта лояльности", imageQuery: "loyalty card", soundHint: "КАРТАУ ДЕ ФИДЕЛИЗАСАУ — КАРТА ФИДЕЛИТИ!" },
            { pt: "acumular pontos", ru: "копить баллы", imageQuery: "collect points", soundHint: "АКУМУЛАР ПОНТУШ — АККУМУЛИРОВАТЬ ПОНТЫ!" },
            { pt: "a devolução", ru: "возврат", imageQuery: "return refund", soundHint: "ДЭВОЛУСАУ — ДЭВОЛЮЦИЯ (возврат)!" },
            { pt: "trocar", ru: "обменять", imageQuery: "exchange", soundHint: "ТРОКАР — ТРОК (обмен)!" },
            { pt: "o defeito", ru: "дефект/брак", imageQuery: "defect", soundHint: "ДЕФЕЙТУ — ДЕФЕКТ!" },
            { pt: "a garantia", ru: "гарантия", imageQuery: "warranty", soundHint: "ГАРАНТИЯ — ГАРАНТИЯ!" },
            { pt: "a reclamação", ru: "жалоба", imageQuery: "complaint", soundHint: "РЕКЛАМАСАУ — РЕКЛАМАЦИЯ!" },
            { pt: "o livro de reclamações", ru: "книга жалоб", imageQuery: "complaints book", soundHint: "ЛИВРУ ДЕ РЕКЛАМАСОЕШ — ЛИВРО РЕКЛАМАЦИЙ!" },
            { pt: "em stock", ru: "в наличии", imageQuery: "in stock", soundHint: "ЭМ ШТОК — В СТОКЕ!" },
            { pt: "esgotado", ru: "распродано", imageQuery: "sold out", soundHint: "ЭЖГОТАДУ — ЭСГОТО (кончилось)!" },
            { pt: "encomendar", ru: "заказать", imageQuery: "order", soundHint: "ЭНКОМЕНДАР — ЭКОМЕНДА (заказ)!" },
            { pt: "a encomenda", ru: "заказ", imageQuery: "order package", soundHint: "ЭНКОМЕНДА — ЭКОМЕНДА!" },
            { pt: "a entrega ao domicílio", ru: "доставка на дом", imageQuery: "home delivery", soundHint: "ЭНТРЕГА АУ ДОМИСИЛИУ — ЭНТРАДА на ДОМ!" },
            { pt: "o serviço ao cliente", ru: "обслуживание клиентов", imageQuery: "customer service", soundHint: "СЕРВИСУ АУ КЛИЕНТЕ — СЕРВИС КЛИЕНТА!" },
            { pt: "a caixa de self-service", ru: "касса самообслуживания", imageQuery: "self checkout", soundHint: "КАЙША ДЕ СЕЛФ-СЕРВИС — КАССА СЕЛФ!" },
            { pt: "o multibanco", ru: "банкомат", imageQuery: "atm", soundHint: "МУЛТИБАНКУ — МУЛЬТИ-БАНК!" },
            { pt: "levantar dinheiro", ru: "снять деньги", imageQuery: "withdraw cash", soundHint: "ЛЕВАНТАР ДИНЬЕЙРУ — ЛЕВАНТО ДЕНЬГИ!" }
        ]
    },
    "compras_b2": {
        name: "Avançado",
        category: "compras",
        categoryName: "🛒 Compras",
        words: [
            { pt: "o centro comercial", ru: "торговый центр", imageQuery: "shopping mall", soundHint: "СЕНТРУ КОМЕРСИАЛ — ЦЕНТР КОММЕРЦИИ!" },
            { pt: "a grande superfície", ru: "гипермаркет", imageQuery: "hypermarket", soundHint: "ГРАНДЕ СУПЕРФИСИЕ — ГРАНД СУПЕРФАСАД!" },
            { pt: "o comércio local", ru: "местная торговля", imageQuery: "local shop", soundHint: "КОМЕРСИУ ЛОКАЛ — ЛОКАЛ КОММЕРС!" },
            { pt: "o retalho", ru: "розничная торговля", imageQuery: "retail", soundHint: "РЕТАЛЬЮ — РЕТЕЙЛ!" },
            { pt: "o grossista", ru: "оптовик", imageQuery: "wholesaler", soundHint: "ГРОССИШТА — ГРОССИСТ!" },
            { pt: "a margem de lucro", ru: "маржа", imageQuery: "profit margin", soundHint: "МАРЖЕМ ДЕ ЛУКРУ — МАРЖА ЛУКРА (прибыли)!" },
            { pt: "o IVA", ru: "НДС", imageQuery: "vat tax", soundHint: "ИВА — ИВА (НДС)!" },
            { pt: "incluído no preço", ru: "включено в цену", imageQuery: "price included", soundHint: "ИНКЛУИДУ НУ ПРЕСУ — ВКЛЮЧЕНО в ПРАЙС!" },
            { pt: "o preço sem IVA", ru: "цена без НДС", imageQuery: "price without tax", soundHint: "ПРЕСУ СЕМ ИВА — ПРАЙС БЕЗ ИВЫ!" },
            { pt: "o orçamento", ru: "бюджет/смета", imageQuery: "budget estimate", soundHint: "ОРСАМЕНТУ — ОРСА (бюджет)!" },
            { pt: "a comparação de preços", ru: "сравнение цен", imageQuery: "price comparison", soundHint: "КОМПАРАСАУ ДЕ ПРЕСУШ — КОМПАР ПРАЙСОВ!" },
            { pt: "a relação qualidade-preço", ru: "соотношение цена-качество", imageQuery: "value for money", soundHint: "РЕЛАСАУ КУАЛИДАДЕ-ПРЕСУ — РЕЛЯЦИЯ КАЧЕСТВО-ПРАЙС!" },
            { pt: "o consumidor", ru: "потребитель", imageQuery: "consumer", soundHint: "КОНСУМИДОР — КОНСУМЕР!" },
            { pt: "os direitos do consumidor", ru: "права потребителя", imageQuery: "consumer rights", soundHint: "ДИРЕЙТУШ ДУ КОНСУМИДОР — ДИРЕКТ КОНСУМЕРА!" },
            { pt: "a DECO", ru: "защита потребителей", imageQuery: "consumer protection", soundHint: "ДЕКО — ДЕКО защищает!" },
            { pt: "a publicidade enganosa", ru: "вводящая в заблуждение реклама", imageQuery: "misleading advertising", soundHint: "ПУБЛИСИДАДЕ ЭНГАНОЗА — ПАБЛИСИТИ ЭНГАНО!" },
            { pt: "a compra impulsiva", ru: "импульсивная покупка", imageQuery: "impulse buying", soundHint: "КОМПРА ИМПУЛСИВА — ИМПУЛЬС КОМПРЫ!" },
            { pt: "as compras online", ru: "онлайн-покупки", imageQuery: "online shopping", soundHint: "КОМПРАШ ОНЛАЙН — КОМПРА ОНЛАЙН!" },
            { pt: "o carrinho de compras", ru: "корзина (онлайн)", imageQuery: "online cart", soundHint: "КАРИНЬЮ ДЕ КОМПРАШ — КОРЗИНА КОМПРЫ!" },
            { pt: "o checkout", ru: "оформление заказа", imageQuery: "checkout", soundHint: "ЧЕКАУТ — ЧЕКАУТ!" },
            { pt: "o método de pagamento", ru: "способ оплаты", imageQuery: "payment method", soundHint: "МЕТОДУ ДЕ ПАГАМЕНТУ — МЕТОД ПЛАТЕЖА!" },
            { pt: "o MB Way", ru: "MB Way (оплата)", imageQuery: "mobile payment", soundHint: "МБ ВЕЙ — МБ ВЕЙ!" },
            { pt: "a transferência bancária", ru: "банковский перевод", imageQuery: "bank transfer", soundHint: "ТРАНСФЕРЭНСИЯ БАНКАРИЯ — ТРАНСФЕР БАНКА!" },
            { pt: "o pagamento a prestações", ru: "оплата в рассрочку", imageQuery: "installment payment", soundHint: "ПАГАМЕНТУ А ПРЕШТАСОЕШ — ПЛАТЁЖ ПРЕСТАЦИЯМИ!" },
            { pt: "o crédito ao consumo", ru: "потребительский кредит", imageQuery: "consumer credit", soundHint: "КРЕДИТУ АУ КОНСУМУ — КРЕДИТ КОНСУМЕРУ!" },
            { pt: "a TAEG", ru: "эффективная ставка", imageQuery: "annual rate", soundHint: "ТАЕГ — ТАЕГ (ставка)!" },
            { pt: "o prazo de entrega", ru: "срок доставки", imageQuery: "delivery time", soundHint: "ПРАЗУ ДЕ ЭНТРЕГА — ПРАЗ ЭНТРЕГИ!" },
            { pt: "o rastreamento", ru: "отслеживание", imageQuery: "tracking", soundHint: "РАШТРЕАМЕНТУ — РАСТРЕАМЕНТ!" },
            { pt: "o ponto de recolha", ru: "пункт выдачи", imageQuery: "pickup point", soundHint: "ПОНТУ ДЕ РЕКОЛЬЯ — ПУНКТ РЕКОЛЛЕКЦИИ!" },
            { pt: "a alfândega", ru: "таможня", imageQuery: "customs", soundHint: "АЛФАНДЕГА — АЛФАНДЕГА!" },
            { pt: "os custos de importação", ru: "пошлины на импорт", imageQuery: "import duties", soundHint: "КУШТУШ ДЕ ИМПОРТАСАУ — КОСТЫ ИМПОРТА!" },
            { pt: "a sustentabilidade", ru: "экологичность", imageQuery: "sustainability", soundHint: "СУШТЕНТАБИЛИДАДЕ — СУСТЕЙНАБИЛИТИ!" },
            { pt: "o consumo consciente", ru: "осознанное потребление", imageQuery: "conscious consumption", soundHint: "КОНСУМУ КОНЩИЕНТЕ — КОНСУМ КОНСИЕНТ!" },
            { pt: "a economia circular", ru: "циркулярная экономика", imageQuery: "circular economy", soundHint: "ЭКОНОМИЯ СИРКУЛАР — ЭКОНОМИЯ по КРУГУ!" },
            { pt: "o desperdício", ru: "отходы/растрата", imageQuery: "waste", soundHint: "ДЕШПЕРДИСИУ — ДИСПЁРДИК (расточение)!" }
        ]
    },

    // ========== CORREIOS ==========
    "correios_a2": {
        name: "Básico",
        category: "correios",
        categoryName: "📦 Correios",
        words: [
            { pt: "os correios", ru: "почта", imageQuery: "post office", soundHint: "КОРРЕЮШ — КОРРЕСПОНДЕНЦИЯ!" },
            { pt: "a carta", ru: "письмо", imageQuery: "letter", soundHint: "КАРТА — КАРТА-письмо!" },
            { pt: "o envelope", ru: "конверт", imageQuery: "envelope", soundHint: "ЭНВЕЛОПЕ — ЭНВЕЛОП!" },
            { pt: "o selo", ru: "марка", imageQuery: "postage stamp", soundHint: "СЕЛУ — СЕЛО (марка)!" },
            { pt: "a encomenda", ru: "посылка", imageQuery: "package parcel", soundHint: "ЭНКОМЕНДА — ЭНКОМЕНДА!" },
            { pt: "o pacote", ru: "пакет/свёрток", imageQuery: "package", soundHint: "ПАКОТЕ — ПАКЕТ!" },
            { pt: "enviar", ru: "отправить", imageQuery: "sending mail", soundHint: "ЭНВИАР — ЭНВАЙР (отправить)!" },
            { pt: "receber", ru: "получить", imageQuery: "receiving mail", soundHint: "РЕСЕБЕР — РЕСИВ (получить)!" },
            { pt: "o remetente", ru: "отправитель", imageQuery: "sender", soundHint: "РЕМЕТЕНТЕ — РЕМИТЕНТ!" },
            { pt: "o destinatário", ru: "получатель", imageQuery: "recipient", soundHint: "ДЕSТИНАТАРИУ — ДЕСТИНАТАРИЙ!" },
            { pt: "a morada", ru: "адрес", imageQuery: "address", soundHint: "МОРАДА — МОРА тут!" },
            { pt: "o código postal", ru: "почтовый индекс", imageQuery: "zip code", soundHint: "КОДИГУ ПОШТАЛ — КОД ПОЧТЫ!" },
            { pt: "a caixa do correio", ru: "почтовый ящик", imageQuery: "mailbox", soundHint: "КАЙША ДУ КОРРЕЙУ — КАССА КОРРЕСПОНДЕНЦИИ!" },
            { pt: "o carteiro", ru: "почтальон", imageQuery: "mailman postman", soundHint: "КАРТЕЙРУ — КАРТЕЙРО!" },
            { pt: "entregar", ru: "доставить", imageQuery: "delivering", soundHint: "ЭНТРЕГАР — ЭНТРЕГА!" },
            { pt: "a entrega", ru: "доставка", imageQuery: "delivery", soundHint: "ЭНТРЕГА — ЭНТРЕГА!" },
            { pt: "o peso", ru: "вес", imageQuery: "weight scale", soundHint: "ПЕЗУ — ВЕС!" },
            { pt: "o tamanho", ru: "размер", imageQuery: "size", soundHint: "ТАМАНЬЮ — ТАМАНЬ (размер)!" },
            { pt: "o formulário", ru: "бланк", imageQuery: "form", soundHint: "ФОРМУЛАРИУ — ФОРМУЛЯР!" },
            { pt: "preencher", ru: "заполнить", imageQuery: "filling form", soundHint: "ПРЕНЧЕР — ПРЭН (полный)!" },
            { pt: "a fila", ru: "очередь", imageQuery: "queue", soundHint: "ФИЛА — ФИЛА людей!" },
            { pt: "o balcão", ru: "стойка/окошко", imageQuery: "counter", soundHint: "БАЛКАУ — БАЛКОН!" },
            { pt: "a senha", ru: "талон очереди", imageQuery: "queue ticket", soundHint: "СЕНЬЯ — СЕНЬЯ (знак)!" },
            { pt: "quanto custa enviar?", ru: "сколько стоит отправить?", imageQuery: "shipping cost", soundHint: "КУАНТУ КУШТА ЭНВИАР — КВАНТ КОСТ ЭНВАЙР?" },
            { pt: "normal", ru: "обычный", imageQuery: "standard mail", soundHint: "НОРМАЛ — НОРМАЛ!" },
            { pt: "urgente", ru: "срочный", imageQuery: "express mail", soundHint: "УРЖЭНТЕ — УРДЖЕНТ!" },
            { pt: "registado", ru: "заказной", imageQuery: "registered mail", soundHint: "РЕЖИШТАДУ — РЕГИСТРИД!" },
            { pt: "a confirmação", ru: "подтверждение", imageQuery: "confirmation", soundHint: "КОНФИРМАСАУ — КОНФИРМАЦИЯ!" },
            { pt: "o comprovativo", ru: "квитанция", imageQuery: "receipt proof", soundHint: "КОМПРОВАТИВУ — КОМПРОВАТ!" },
            { pt: "chegar", ru: "прийти/дойти", imageQuery: "arriving", soundHint: "ШЕГАР — ШАГАТЬ к цели!" }
        ]
    },
    "correios_b1": {
        name: "Intermédio",
        category: "correios",
        categoryName: "📦 Correios",
        words: [
            { pt: "os CTT", ru: "почта Португалии", imageQuery: "portuguese post", soundHint: "СТТ — СТТ почта!" },
            { pt: "o correio azul", ru: "срочная почта", imageQuery: "express mail", soundHint: "КОРРЕЙУ АЗУЛ — ГОЛУБАЯ СРОЧНАЯ почта!" },
            { pt: "o correio verde", ru: "эко-почта", imageQuery: "economy mail", soundHint: "КОРРЕЙУ ВЕРДЕ — ЗЕЛЁНАЯ эко-почта!" },
            { pt: "a carta registada", ru: "заказное письмо", imageQuery: "registered letter", soundHint: "КАРТА РЕЖИШТАДА — КАРТА РЕГИСТРИРОВАНА!" },
            { pt: "o aviso de receção", ru: "уведомление о вручении", imageQuery: "delivery confirmation", soundHint: "АВИЗУ ДЕ РЕСЕСАУ — АВИЗО РЕСЕПЦИИ!" },
            { pt: "a assinatura", ru: "подпись (при получении)", imageQuery: "signature delivery", soundHint: "АССИНАТУРА — АССИГНАТУРА!" },
            { pt: "o rastreio", ru: "отслеживание", imageQuery: "tracking", soundHint: "РАШТРЕЙУ — РАСТРЕЙС!" },
            { pt: "o número de rastreio", ru: "номер отслеживания", imageQuery: "tracking number", soundHint: "НУМЕРУ ДЕ РАШТРЕЙУ — НОМЕР РАСТРЕЙСА!" },
            { pt: "em trânsito", ru: "в пути", imageQuery: "in transit", soundHint: "ЭМ ТРАНЗИТУ — В ТРАНЗИТЕ!" },
            { pt: "em distribuição", ru: "на доставке", imageQuery: "out for delivery", soundHint: "ЭМ ДИШТРИБУИСАУ — НА ДИСТРИБУЦИИ!" },
            { pt: "entregue", ru: "доставлено", imageQuery: "delivered", soundHint: "ЭНТРЕГЕ — ЭНТРЕГНУТО!" },
            { pt: "devolvido", ru: "возвращено", imageQuery: "returned", soundHint: "ДЭВОЛВИДУ — ДЭВОЛВЕД!" },
            { pt: "o destinatário ausente", ru: "получатель отсутствует", imageQuery: "recipient absent", soundHint: "ДЕSТИНАТАРИУ АУЗЭНТЕ — ДЕСТИНАТАРИЙ АБСЕНТ!" },
            { pt: "a segunda tentativa", ru: "вторая попытка доставки", imageQuery: "second attempt", soundHint: "СЕГУНДА ТЕНТАТИВА — СЕКОНД ТЕНТАТИВ!" },
            { pt: "o ponto de recolha", ru: "пункт выдачи", imageQuery: "pickup point", soundHint: "ПОНТУ ДЕ РЕКОЛЬЯ — ПУНКТ РЕКОЛЛЕКЦИИ!" },
            { pt: "levantar", ru: "забрать", imageQuery: "pick up", soundHint: "ЛЕВАНТАР — ЛЕВАНТО посылку!" },
            { pt: "o prazo de levantamento", ru: "срок хранения", imageQuery: "pickup deadline", soundHint: "ПРАЗУ ДЕ ЛЕВАНТАМЕНТУ — ПРАЗ ЛЕВАНТА!" },
            { pt: "o seguro", ru: "страховка", imageQuery: "shipping insurance", soundHint: "СЕГУРУ — СЕГУРИТИ!" },
            { pt: "o valor declarado", ru: "объявленная ценность", imageQuery: "declared value", soundHint: "ВАЛОР ДЕКЛАРАДО — ВАЛУЕ ДЕКЛАРЕД!" },
            { pt: "a embalagem", ru: "упаковка", imageQuery: "packaging", soundHint: "ЭМБАЛАЖЕМ — ЭМБАЛАЖ!" },
            { pt: "a caixa", ru: "коробка", imageQuery: "box", soundHint: "КАЙША — КАССА-коробка!" },
            { pt: "o plástico bolha", ru: "пузырчатая плёнка", imageQuery: "bubble wrap", soundHint: "ПЛАШТИКУ БОЛЬЯ — ПЛАСТИК БУЛЬКА!" },
            { pt: "frágil", ru: "хрупкое", imageQuery: "fragile", soundHint: "ФРАЖИЛ — ФРАГИЛЬ!" },
            { pt: "a alfândega", ru: "таможня", imageQuery: "customs", soundHint: "АЛФАНДЕГА — АЛФАНДЕГА!" },
            { pt: "a declaração alfandegária", ru: "таможенная декларация", imageQuery: "customs declaration", soundHint: "ДЕКЛАРАСАУ АЛФАНДЕГАРИЯ — ДЕКЛАРАЦИЯ АЛФАНДЕГИ!" },
            { pt: "o conteúdo", ru: "содержимое", imageQuery: "contents", soundHint: "КОНТЕУДУ — КОНТЕНТ!" },
            { pt: "o documento", ru: "документ", imageQuery: "document", soundHint: "ДОКУ|МЕНТУ — ДОКУМЕНТ!" },
            { pt: "a mercadoria", ru: "товар", imageQuery: "merchandise goods", soundHint: "МЕРКАДОРИЯ — МЕРКАДОР (товар)!" },
            { pt: "o presente", ru: "подарок", imageQuery: "gift", soundHint: "ПРЕЗЕНТЕ — ПРЕЗЕНТ!" },
            { pt: "a amostra", ru: "образец", imageQuery: "sample", soundHint: "АМОШТРА — АМОСТРА (образец)!" },
            { pt: "internacional", ru: "международный", imageQuery: "international mail", soundHint: "ИНТЕРНАСИОНАЛ — ИНТЕРНАЦИОНАЛЬ!" },
            { pt: "nacional", ru: "внутренний", imageQuery: "domestic mail", soundHint: "НАСИОНАЛ — НАЦИОНАЛЬ!" },
            { pt: "a zona", ru: "зона (доставки)", imageQuery: "shipping zone", soundHint: "ЗОНА — ЗОНА!" },
            { pt: "o prazo de entrega", ru: "срок доставки", imageQuery: "delivery time", soundHint: "ПРАЗУ ДЕ ЭНТРЕГА — ПРАЗ ЭНТРЕГИ!" },
            { pt: "de 3 a 5 dias úteis", ru: "от 3 до 5 рабочих дней", imageQuery: "business days", soundHint: "ДЕ ТРЕШ А СИНКУ ДИАШ УТЕЙШ — 3-5 УТИЛЬ ДНЕЙ!" }
        ]
    },
    "correios_b2": {
        name: "Avançado",
        category: "correios",
        categoryName: "📦 Correios",
        words: [
            { pt: "o serviço expresso", ru: "экспресс-доставка", imageQuery: "express delivery", soundHint: "СЕРВИСУ ЭКСПРЕССУ — СЕРВИС ЭКСПРЕСС!" },
            { pt: "a entrega no próprio dia", ru: "доставка в тот же день", imageQuery: "same day delivery", soundHint: "ЭНТРЕГА НУ ПРОПИУ ДИА — ЭНТРЕГА в тот же ДЕНЬ!" },
            { pt: "a entrega programada", ru: "доставка по расписанию", imageQuery: "scheduled delivery", soundHint: "ЭНТРЕГА ПРОГРАММАДА — ПРОГРАММА ЭНТРЕГИ!" },
            { pt: "a janela horária", ru: "временной интервал", imageQuery: "time window", soundHint: "ЖАНЕЛА ОРАРИЯ — ОКНО ЧАСОВОЕ!" },
            { pt: "o código de acesso", ru: "код доступа", imageQuery: "access code", soundHint: "КОДИГУ ДЕ АСЕССУ — КОД АКСЕССА!" },
            { pt: "o cacifo automático", ru: "постамат/ячейка", imageQuery: "parcel locker", soundHint: "КАСИФУ АУТОМАТИКУ — КАСС АВТОМАТИК!" },
            { pt: "a rede de pontos", ru: "сеть пунктов", imageQuery: "pickup network", soundHint: "РЕДЕ ДЕ ПОНТУШ — СЕТЬ ПУНКТОВ!" },
            { pt: "o parceiro logístico", ru: "логистический партнёр", imageQuery: "logistics partner", soundHint: "ПАРСЕЙРУ ЛОЖИШТИКУ — ПАРТНЁР ЛОГИСТИК!" },
            { pt: "a transportadora", ru: "транспортная компания", imageQuery: "carrier shipping", soundHint: "ТРАНСПОРТАДОРА — ТРАНСПОРТЁР!" },
            { pt: "a logística inversa", ru: "обратная логистика", imageQuery: "reverse logistics", soundHint: "ЛОЖИШТИКА ИНВЕРСА — ЛОГИСТИКА ИНВЕРСА!" },
            { pt: "a devolução gratuita", ru: "бесплатный возврат", imageQuery: "free return", soundHint: "ДЭВОЛУСАУ ГРАТУИТА — ДЭВОЛЮЦИЯ ГРАТИС!" },
            { pt: "a etiqueta de devolução", ru: "этикетка возврата", imageQuery: "return label", soundHint: "ЭТИКЕТА ДЕ ДЭВОЛУСАУ — ЭТИКЕТА ДЭВОЛЮЦИИ!" },
            { pt: "a reclamação", ru: "претензия", imageQuery: "claim complaint", soundHint: "РЕКЛАМАСАУ — РЕКЛАМАЦИЯ!" },
            { pt: "a indemnização", ru: "компенсация", imageQuery: "compensation", soundHint: "ИНДЕМНИЗАСАУ — ИНДЕМНИТИ!" },
            { pt: "o extravio", ru: "потеря (посылки)", imageQuery: "lost package", soundHint: "ЭШТРАВИУ — ЭКСТРА-ВИА — ушло не туда!" },
            { pt: "a avaria", ru: "повреждение", imageQuery: "damaged package", soundHint: "АВАРИЯ — АВАРИЯ посылки!" },
            { pt: "o furto", ru: "кража", imageQuery: "theft package", soundHint: "ФУРТУ — ФУРТ (кража)!" },
            { pt: "a prova de entrega", ru: "подтверждение доставки", imageQuery: "proof of delivery", soundHint: "ПРОВА ДЕ ЭНТРЕГА — ПРУФ ЭНТРЕГИ!" },
            { pt: "a fotografia de entrega", ru: "фото доставки", imageQuery: "delivery photo", soundHint: "ФОТОГРАФИЯ ДЕ ЭНТРЕГА — ФОТО ЭНТРЕГИ!" },
            { pt: "os impostos de importação", ru: "импортные пошлины", imageQuery: "import taxes", soundHint: "УШ ИМПОШТУШ ДЕ ИМПОРТАСАУ — ИМПОСТЫ ИМПОРТА!" },
            { pt: "o desalfandegamento", ru: "растаможка", imageQuery: "customs clearance", soundHint: "ДЕЗАЛФАНДЕГАМЕНТУ — ДЕЗ-АЛФАНДЕГА!" },
            { pt: "retido na alfândega", ru: "задержано на таможне", imageQuery: "held in customs", soundHint: "РЕТИДУ НА АЛФАНДЕГА — РЕТРИТ НА АЛФАНДЕГЕ!" },
            { pt: "o pagamento de taxas", ru: "оплата пошлин", imageQuery: "pay duties", soundHint: "ПАГАМЕНТУ ДЕ ТАШАШ — ПЛАТЁЖ ТАКС!" },
            { pt: "a isenção", ru: "освобождение (от пошлин)", imageQuery: "duty exemption", soundHint: "ИЗЕНСАУ — ИСКЛЮЧЕНИЕ!" },
            { pt: "o valor até...", ru: "стоимость до...", imageQuery: "value limit", soundHint: "ВАЛОР АТЕ — ВАЛУЕ до!" },
            { pt: "a fatura comercial", ru: "коммерческий счёт", imageQuery: "commercial invoice", soundHint: "ФАТУРА КОМЕРСИАЛ — ФАКТУРА КОММЕРЧ!" },
            { pt: "o certificado de origem", ru: "сертификат происхождения", imageQuery: "certificate of origin", soundHint: "СЕРТИФИКАДУ ДЕ ОРИЖЕМ — СЕРТИФИКАТ ОРИДЖИНА!" },
            { pt: "os artigos proibidos", ru: "запрещённые товары", imageQuery: "prohibited items", soundHint: "УШ АРТИГУШ ПРОИБИДУШ — АРТИКЛЫ ПРОХИБИТЕД!" },
            { pt: "as mercadorias perigosas", ru: "опасные грузы", imageQuery: "dangerous goods", soundHint: "АШ МЕРКАДОРИАШ ПЕРИГОЗАШ — МЕРКАДОР ДЭНДЖЕР!" },
            { pt: "a bateria de lítio", ru: "литиевая батарея", imageQuery: "lithium battery", soundHint: "БАТЕРИЯ ДЕ ЛИТИУ — БАТАРЕЯ ЛИТИЯ!" },
            { pt: "o líquido", ru: "жидкость", imageQuery: "liquid", soundHint: "ЛИКИДУ — ЛИКВИД!" },
            { pt: "o aerossol", ru: "аэрозоль", imageQuery: "aerosol", soundHint: "АЭРОССОЛ — АЭРОЗОЛЬ!" },
            { pt: "a substância inflamável", ru: "воспламеняющееся вещество", imageQuery: "flammable", soundHint: "СУБШТАНСИЯ ИНФЛАМАВЕЛ — СУБСТАНЦИЯ ИНФЛАМ!" },
            { pt: "o formulário CN22/CN23", ru: "таможенная форма", imageQuery: "customs form", soundHint: "ФОРМУЛАРИУ СН22 — ФОРМА ЦН22!" },
            { pt: "o código HS", ru: "код товара HS", imageQuery: "hs code", soundHint: "КОДИГУ ЭШС — КОД HS!" }
        ]
    }
};

// Экспорт для использования в app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VOCABULARY, THEMED_LISTS };
}