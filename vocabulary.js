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
        soundHint: "МЕТОД (слово совпадает)"
    },
    { 
        pt: "Os Emirados", 
        ru: "Эмираты", 
        imageQuery: "dubai emirates skyline",
        imageUrl: "https://images.unsplash.com/photo-1643043804724-4b1c706f40a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGVtaXJhdGVzJTIwc2t5bGluZXxlbnwwfDB8fHwxNzY5NzAwODU2fDA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ЭМИРАТЫ (слово совпадает)"
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
        soundHint: "ПАРТИЯ + ДИРЕКТОР = правая партия"
    },
    { 
        pt: "o partido socialista", 
        ru: "социалистическая партия", 
        imageQuery: "socialist party politics",
        imageUrl: "https://images.unsplash.com/photo-1713311189995-c65382803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxzb2NpYWxpc3QlMjBwYXJ0eSUyMHBvbGl0aWNzfGVufDB8MHx8fDE3Njk3MDExODB8MA&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "СОЦИАЛИСТ (слово совпадает)"
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
        soundHint: "ЦИРКУЛЯЦИЯ (слово совпадает)"
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
        soundHint: "СРЕДНИЙ ОРИЕНТ (прямой перевод)"
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
        soundHint: "ВОТАР = VOTE (голосовать)"
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
        soundHint: "КАЗО = CASE (случай)"
    },
    { 
        pt: "itens", 
        ru: "предметы", 
        imageQuery: "items objects things",
        imageUrl: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NjUwNTd8MHwxfHNlYXJjaHwxfHxpdGVtcyUyMG9iamVjdHMlMjB0aGluZ3N8ZW58MHwwfHx8MTc2OTcwNzMyNnww&ixlib=rb-4.1.0&q=80&w=400",
        soundHint: "ИТЕНС = ITEMS (предметы)"
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
        soundHint: "КАБО = КАБЕЛЬ"
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
        soundHint: "АНТЕСЕДЕНСИЯ — АНТЕ (до) = заранее"
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
        soundHint: "АНО НОВО, ВИДА НОВА — прямой перевод"
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
        soundHint: "ТРАБАЛЬЯДОР — ТРУБАч работяга"
    },
    { 
        pt: "preguiçoso", 
        ru: "ленивый", 
        imageQuery: "lazy sloth idle",
        soundHint: "ПРЕГИСОЗО — ПРЕГРАДа лени"
    },
    { 
        pt: "descontraído", 
        ru: "расслабленный", 
        imageQuery: "relaxed casual chill",
        soundHint: "ДЕШКОНТРАИДО — ДЕШёвый КОНТРАКТ = расслабься"
    },
    { 
        pt: "ansioso", 
        ru: "тревожный", 
        imageQuery: "anxious nervous worried",
        soundHint: "АНСИОЗО — АНАЛИЗ тревожный"
    },
    { 
        pt: "cuidadoso", 
        ru: "аккуратный, бережный", 
        imageQuery: "careful cautious neat",
        soundHint: "КУЙДАДОЗО — КУДА? ДОЗОР аккуратный"
    },
    { 
        pt: "delicado", 
        ru: "деликатный, нежный", 
        imageQuery: "delicate gentle soft",
        soundHint: "ДЕЛИКАДО = ДЕЛИКАТНЫЙ"
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
        soundHint: "ИНТЕРЕСАДО = ИНТЕРЕС"
    },
    { 
        pt: "bondoso", 
        ru: "добрый", 
        imageQuery: "kind good hearted nice",
        soundHint: "БОНДОЗО — БОНД добрый агент"
    },
    { 
        pt: "cruel", 
        ru: "жестокий", 
        imageQuery: "cruel harsh mean",
        soundHint: "КРУЭЛ = CRUEL жестокий"
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
        soundHint: "АРРОГАНТ = АРОГАНТНЫЙ"
    },
    { 
        pt: "carinhoso", 
        ru: "заботливый, ласковый", 
        imageQuery: "caring loving affectionate",
        soundHint: "КАРИНЬОЗО — КАРИНА заботливая"
    },
    { 
        pt: "frio", 
        ru: "холодный (в отношениях)", 
        imageQuery: "cold distant emotionless",
        soundHint: "ФРИО — ФРИгидный, холодный"
    },
    { 
        pt: "distante", 
        ru: "отстранённый", 
        imageQuery: "distant remote aloof",
        soundHint: "ДИШТАНТ = ДИСТАНЦИЯ, отстранён"
    },
    { 
        pt: "extrovertido", 
        ru: "общительный, экстраверт", 
        imageQuery: "extrovert social outgoing",
        soundHint: "ЭКШТРОВЕРТИДО = ЭКСТРАВЕРТ"
    },
    { 
        pt: "expansivo", 
        ru: "открытый, общительный", 
        imageQuery: "open outgoing friendly",
        soundHint: "ЭКСПАНСИВО = ЭКСПАНСИВНЫЙ, открытый"
    },
    { 
        pt: "tímido", 
        ru: "застенчивый", 
        imageQuery: "shy timid bashful",
        soundHint: "ТИМИДО — ТИМ застенчивый"
    },
    { 
        pt: "prudente", 
        ru: "рассудительный, осторожный", 
        imageQuery: "prudent careful cautious",
        soundHint: "ПРУДЕНТЕ = ПРУДЕНЦИЯ, осторожность"
    },
    { 
        pt: "ponderado", 
        ru: "взвешенный", 
        imageQuery: "thoughtful balanced measured",
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
        soundHint: "ИМПУЛЬСИВО = ИМПУЛЬСИВНЫЙ"
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
        soundHint: "МЕНТИРОЗО — МЕНТ врёт? Лживый!"
    },
    { 
        pt: "genuíno", 
        ru: "искренний, подлинный", 
        imageQuery: "genuine authentic real",
        soundHint: "ЖЕНУИНО = GENUINE, подлинный"
    },
    { 
        pt: "espontâneo", 
        ru: "спонтанный", 
        imageQuery: "spontaneous natural impulsive",
        soundHint: "ЭШПОНТАNEO = СПОНТАННЫЙ"
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
        soundHint: "КАЛЬКУЛИШТА — КАЛЬКУЛЯТОР расчётов"
    },
    { 
        pt: "falador", 
        ru: "разговорчивый", 
        imageQuery: "talkative chatty verbose",
        soundHint: "ФАЛАДОР — ФАЛА (говорит) много"
    },
    { 
        pt: "calado", 
        ru: "молчаливый", 
        imageQuery: "quiet silent reserved",
        soundHint: "КАЛАДО — КАЛАЧ молчит"
    },
    // ===== ТРЕТЬЯ ПАРТИЯ =====
    { 
        pt: "o mestrado", 
        ru: "магистратура", 
        imageQuery: "masters degree university graduation",
        soundHint: "МЕШТРАДУ — МАСТЕР-ГРАД учёных"
    },
    { 
        pt: "a nutrição", 
        ru: "питание", 
        imageQuery: "nutrition food healthy diet",
        soundHint: "НУТРИСАО = НУТРИЦИЯ, питание"
    },
    { 
        pt: "as pinturas", 
        ru: "картины", 
        imageQuery: "paintings art gallery museum",
        soundHint: "ПИНТУРАШ — ПИНТы краски для картин"
    },
    { 
        pt: "o estacionamento", 
        ru: "парковка", 
        imageQuery: "parking lot cars",
        soundHint: "ЭШТАСИОНАМЕНТО — СТАНЦИЯ машин = парковка"
    },
    { 
        pt: "suficiente", 
        ru: "достаточно", 
        imageQuery: "enough sufficient plenty",
        soundHint: "СУФИСЬЕНТЕ = SUFFICIENT, достаточно"
    },
    { 
        pt: "os estranhos", 
        ru: "незнакомцы", 
        imageQuery: "strangers unknown people",
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
        soundHint: "ТЕСИДО — ТЕСИТЬ ткань"
    },
    { 
        pt: "leves", 
        ru: "лёгкие", 
        imageQuery: "light weightless feather",
        soundHint: "ЛЕВЕШ — ЛЕВ легко прыгает"
    },
    { 
        pt: "abençoada", 
        ru: "благословенная", 
        imageQuery: "blessed holy divine",
        soundHint: "АБЕНСОАДА — А! БЕН благословлён"
    },
    { 
        pt: "a bênção", 
        ru: "благословение", 
        imageQuery: "blessing prayer church",
        soundHint: "БЕНСАО — БЕН даёт благословение"
    },
    { 
        pt: "a torrada", 
        ru: "тост (хлеб)", 
        imageQuery: "toast bread breakfast",
        soundHint: "ТОРРАДА — ТОРТ-РАДость на завтрак"
    },
    { 
        pt: "torrar", 
        ru: "поджаривать", 
        imageQuery: "toast roast grill",
        soundHint: "ТОРРАР — ТОРт жарится"
    },
    { 
        pt: "o governo", 
        ru: "правительство", 
        imageQuery: "government parliament politics",
        soundHint: "ГОВЕРНО — ГОВОРит правительство"
    },
    { 
        pt: "o Estado", 
        ru: "государство", 
        imageQuery: "state government country",
        soundHint: "ЭШТАДУ = STATE, государство"
    },
    { 
        pt: "a abelha", 
        ru: "пчела", 
        imageQuery: "bee honey insect",
        soundHint: "АБЕЛЬЯ — А! БЕЛЬЯ пчела ужалила"
    },
    { 
        pt: "sou pobre, mas honrado", 
        ru: "я бедный, но честный", 
        imageQuery: "poor honest humble dignity",
        soundHint: "СОУ ПОБРЕ, МАШ ОНРАДУ — прямой смысл"
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
        soundHint: "А МАНЕЙРА КОМУ — по МАНЕРЕ как"
    },
    { 
        pt: "lamento muito", 
        ru: "мне очень жаль", 
        imageQuery: "sorry sad regret",
        soundHint: "ЛАМЕНТО МУЙТО — ЛАМЕНТ (плач) = жаль"
    },
    { 
        pt: "picar", 
        ru: "жалить, кусать", 
        imageQuery: "sting bite insect",
        soundHint: "ПИКАР — ПИКа жалит остриём"
    },
    { 
        pt: "o lazer", 
        ru: "досуг", 
        imageQuery: "leisure relaxation free time",
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
        soundHint: "КАЗЕЙРО — КАЗАН домашний"
    },
    { 
        pt: "emprestar", 
        ru: "одалживать (давать)", 
        imageQuery: "lend give borrow",
        soundHint: "ЭМПРЕШТАР — ЭМ! ПРЕСТАР даёт в долг"
    },
    { 
        pt: "pedir emprestado", 
        ru: "брать в долг", 
        imageQuery: "borrow ask loan",
        soundHint: "ПЕДИР ЭМПРЕШТАДУ — ПЕДРО просит в долг"
    },
    { 
        pt: "o entretenimento", 
        ru: "развлечение", 
        imageQuery: "entertainment fun leisure",
        soundHint: "ЭНТРЕТЕНИМЕНТO = ENTERTAINMENT"
    },
    { 
        pt: "a lata de spray", 
        ru: "баллончик спрея", 
        imageQuery: "spray can aerosol",
        soundHint: "ЛАТА де ШПРЕЙ — ЛАТА (банка) СПРЕЯ"
    },
    { 
        pt: "que nojo!", 
        ru: "как противно!", 
        imageQuery: "disgusting gross yuck",
        soundHint: "КЕ НОЖО! — НОЖ в еде — противно!"
    },
    { 
        pt: "comida georgiana", 
        ru: "грузинская еда", 
        imageQuery: "georgian food khachapuri",
        soundHint: "КОМИДА ЖОРЖИАНА — КОМИДА = еда"
    },
    { 
        pt: "sagrado", 
        ru: "священный", 
        imageQuery: "sacred holy divine",
        soundHint: "САГРАДУ — САГа священная"
    },
    { 
        pt: "crocante", 
        ru: "хрустящий", 
        imageQuery: "crunchy crispy chips",
        soundHint: "КРОКАНТЕ — КРОКодил хрустит"
    },
    { 
        pt: "sou licenciada em", 
        ru: "у меня диплом по", 
        imageQuery: "degree diploma graduate",
        soundHint: "СОУ ЛИСЕНСИАДА — есть ЛИЦЕНЗИЯ (диплом)"
    },
    { 
        pt: "a riqueza", 
        ru: "богатство", 
        imageQuery: "wealth rich money gold",
        soundHint: "РИКЕЗА — РИКИ богатый"
    },
    { 
        pt: "a ameixa", 
        ru: "слива", 
        imageQuery: "plum fruit purple",
        soundHint: "АМЕЙША — А! МЕЙША ест сливу"
    },
    { 
        pt: "prevenir", 
        ru: "предотвращать", 
        imageQuery: "prevent stop protect",
        soundHint: "ПРЕВЕНИР — ПРЕВЕНция, предотвращение"
    },
    { 
        pt: "a pena", 
        ru: "перо", 
        imageQuery: "feather bird quill",
        soundHint: "ПЕНА — ПЕНа лёгкая как перо"
    },
    { 
        pt: "que pena", 
        ru: "как жаль", 
        imageQuery: "pity sorry sad",
        soundHint: "КЕ ПЕНА — какая ПЕНА слёз = жаль"
    },
    // ===== ЧЕТВЁРТАЯ ПАРТИЯ =====
    { 
        pt: "cabelo loiro", 
        ru: "светлые волосы", 
        imageQuery: "blond hair golden",
        soundHint: "КАБЕЛУ ЛОЙРУ — КАБЕЛЬ ЛОЙяльно светлый"
    },
    { 
        pt: "comportar-se", 
        ru: "вести себя", 
        imageQuery: "behave behavior manners",
        soundHint: "КОМПОРТАР-СЕ — КОМПОРТамент = поведение"
    },
    { 
        pt: "portar-se", 
        ru: "вести себя", 
        imageQuery: "behave conduct manners",
        soundHint: "ПОРТАР-СЕ — ПОРТной ведёт себя прилично"
    },
    { 
        pt: "a bicha", 
        ru: "очередь; квир", 
        imageQuery: "queue line waiting",
        soundHint: "БИША — БИШка стоит в очереди"
    },
    { 
        pt: "o objetivo", 
        ru: "цель", 
        imageQuery: "goal target objective",
        soundHint: "ОБЖЕТИВУ = OBJECTIVE, цель"
    },
    { 
        pt: "a ovelha", 
        ru: "овца", 
        imageQuery: "sheep lamb wool",
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
        soundHint: "ВАЙДОЗО — ВАЙ! ДОЗОР тщеславных"
    },
    { 
        pt: "os patins", 
        ru: "ролики", 
        imageQuery: "rollerblades skating wheels",
        soundHint: "ПАТИНШ — ПАТи на роликах"
    },
    { 
        pt: "girar", 
        ru: "вращаться", 
        imageQuery: "spin rotate turn",
        soundHint: "ЖИРАР — ЖИРА вращается на сковороде"
    },
    { 
        pt: "o escorrega", 
        ru: "горка (детская)", 
        imageQuery: "slide playground children",
        soundHint: "ЭШКОРРЕГА — ЭСКОРТ с горки"
    },
    { 
        pt: "escorregar", 
        ru: "поскользнуться", 
        imageQuery: "slip slide fall",
        soundHint: "ЭШКОРРЕГАР — ЭСКОРТ поскользнулся"
    },
    { 
        pt: "escorregadio", 
        ru: "скользкий", 
        imageQuery: "slippery wet floor",
        soundHint: "ЭШКОРРЕГАДИО — ЭСКОРТ ГАДкий скользкий"
    },
    { 
        pt: "atrair", 
        ru: "привлекать", 
        imageQuery: "attract magnet pull",
        soundHint: "АТРАИР = ATTRACT, привлекать"
    },
    { 
        pt: "atraído", 
        ru: "привлечённый", 
        imageQuery: "attracted drawn interested",
        soundHint: "АТРАИДУ — ATTRACT + привлечён"
    },
    { 
        pt: "quem corre por gosto não cansa", 
        ru: "кто любит дело — не устаёт", 
        imageQuery: "passion work love motivation",
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
        soundHint: "ДЕЗИЛУЗАО — ДЕЗ-ИЛЛЮЗИЯ = разочарование"
    },
    { 
        pt: "a expetativa", 
        ru: "ожидание", 
        imageQuery: "expectation hope waiting",
        soundHint: "ЭШПЕТАТИВА = EXPECTATION, ожидание"
    },
    { 
        pt: "esgotados", 
        ru: "распроданы", 
        imageQuery: "sold out empty tickets",
        soundHint: "ЭШГОТАДОШ — ЭШ! ГОТОВО! Распродано!"
    },
    { 
        pt: "bilhetes gratuitos", 
        ru: "бесплатные билеты", 
        imageQuery: "free tickets concert",
        soundHint: "БИЛЬЕТЕШ ГРАТУИТОШ — БИЛЕТЫ ГРАТИС"
    },
    { 
        pt: "a tourada", 
        ru: "коррида", 
        imageQuery: "bullfight bull arena",
        soundHint: "ТУРАДА — ТУР быка на арене"
    },
    { 
        pt: "o touro", 
        ru: "бык", 
        imageQuery: "bull horns animal",
        soundHint: "ТОУРУ — ТУР бычий"
    },
    { 
        pt: "infelizmente", 
        ru: "к сожалению", 
        imageQuery: "unfortunately sad regret",
        soundHint: "ИНФЕЛИШМЕНТЕ — ИН-ФЕЛИШ = несчастливо"
    },
    { 
        pt: "a greve geral", 
        ru: "всеобщая забастовка", 
        imageQuery: "general strike protest",
        soundHint: "ГРЕВЕ ЖЕРАЛ — ГРЕВЦЫ ЖЁСТКО бастуют"
    },
    { 
        pt: "o fornecedor", 
        ru: "поставщик", 
        imageQuery: "supplier vendor business",
        soundHint: "ФОРНЕСЕДОР — ФОРНитура от ПОСТАВЩИКА"
    },
    { 
        pt: "fornecer", 
        ru: "поставлять", 
        imageQuery: "supply provide deliver",
        soundHint: "ФОРНЕСЕР — ФОРНитуру поставлять"
    },
    { 
        pt: "a lã", 
        ru: "шерсть", 
        imageQuery: "wool yarn sheep",
        soundHint: "ЛА — ЛАма даёт шерсть"
    },
    { 
        pt: "o algodão", 
        ru: "хлопок", 
        imageQuery: "cotton fabric soft",
        soundHint: "АЛГОДАО — АЛГОритм ДАО хлопка"
    },
    { 
        pt: "fixo", 
        ru: "фиксированный", 
        imageQuery: "fixed static stable",
        soundHint: "ФИШУ = FIXED, фиксированный"
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
        soundHint: "КОМПЕТЕНСИАШ = КОМПЕТЕНЦИИ"
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
        soundHint: "АПРОКСИМАР = APPROXIMATE, приблизиться"
    },
    { 
        pt: "reconhecer", 
        ru: "узнавать, признавать", 
        imageQuery: "recognize acknowledge face",
        soundHint: "РЕКОНЬЕСЕР = RECOGNIZE, узнавать"
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
        soundHint: "КАРРОЗЕЛ = КАРУСЕЛЬ"
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
        soundHint: "ПАШТОР = ПАСТОР/пастух"
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
            { pt: "a fuga de água", ru: "протечка", imageQuery: "water leak", soundHint: "ФУГА ДЕ АГУА — ФУГА воды!" },
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
    }
};

// Экспорт для использования в app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VOCABULARY, THEMED_LISTS };
}