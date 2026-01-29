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
        soundHint: "СОЛЬ ТАРелку отпустила"
    },
    { 
        pt: "a oficina", 
        ru: "мастерская, автосервис", 
        imageQuery: "workshop garage mechanic",
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
        soundHint: "КАПЕЦ какой способный!"
    },
    { 
        pt: "cometer erros", 
        ru: "совершать ошибки", 
        imageQuery: "mistake error wrong",
        soundHint: "КОМЕТА с ЭРОС-ом — ошибка орбиты"
    },
    { 
        pt: "estar à vontade", 
        ru: "чувствовать себя комфортно", 
        imageQuery: "comfortable relaxed cozy",
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
        soundHint: "ИМ-ПРОВЕРЬ — маловероятно проверишь"
    },
    { 
        pt: "votar", 
        ru: "голосовать", 
        imageQuery: "vote election ballot",
        soundHint: "ВОТАР = VOTE (голосовать)"
    },
    { 
        pt: "a testemunha", 
        ru: "свидетель", 
        imageQuery: "witness court testimony",
        soundHint: "ТЕСТЬ МУНЬКА — свидетель на свадьбе"
    },
    { 
        pt: "acreditar", 
        ru: "верить", 
        imageQuery: "believe trust faith",
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
        soundHint: "ДУ ВИДАР — ДВА ВИДА = сомневаюсь какой"
    },
    { 
        pt: "apanhar o escaldão", 
        ru: "получить солнечный ожог", 
        imageQuery: "sunburn sun skin red",
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
        soundHint: "ИТЕНС = ITEMS (предметы)"
    },
    { 
        pt: "o carregador de telemóvel", 
        ru: "зарядка для телефона", 
        imageQuery: "phone charger cable",
        soundHint: "КАРРЕГАДОР — заКАРРячить телефон"
    },
    { 
        pt: "a carga", 
        ru: "заряд", 
        imageQuery: "charge battery power",
        soundHint: "КАРГА — ЗАРЯД КАРГо"
    },
    { 
        pt: "carregar", 
        ru: "заряжать; нажимать", 
        imageQuery: "charge press load",
        soundHint: "КАРРЕГАР — заКАРРячить батарею"
    },
    { 
        pt: "o penteado", 
        ru: "причёска", 
        imageQuery: "hairstyle hair salon",
        soundHint: "ПЕНТЕАДО — ПЕНка для укладки"
    },
    { 
        pt: "o cabelo preso", 
        ru: "собранные волосы", 
        imageQuery: "ponytail tied hair",
        soundHint: "КАБЕЛО ПРЕЗО — КАБЕЛЬ ПРИВЯЗан как волосы"
    },
    { 
        pt: "o rabo de cavalo", 
        ru: "хвостик (причёска)", 
        imageQuery: "ponytail horse tail",
        soundHint: "РАБО де КАВАЛО — хвост КАВАЛЕРА"
    },
    { 
        pt: "dispensar", 
        ru: "увольнять, обходиться без", 
        imageQuery: "dismiss fire without",
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
        soundHint: "ЭСКАЛДАР — на ЭСКАЛАТОРЕ обжёгся"
    },
    { 
        pt: "queimar", 
        ru: "жечь, поджигать", 
        imageQuery: "burn fire flame",
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
        soundHint: "ОРИФИСИО — ОФИС с отверстием"
    },
    { 
        pt: "os pneus", 
        ru: "шины", 
        imageQuery: "tire wheel car",
        soundHint: "ПНЕУС — ПНЕВМОшина"
    },
    { 
        pt: "o nadador", 
        ru: "пловец", 
        imageQuery: "swimmer swimming pool",
        soundHint: "НАДАДОР — НАД водой АДОР плывёт"
    },
    { 
        pt: "temido", 
        ru: "пугающий, которого боятся", 
        imageQuery: "feared scary intimidating",
        soundHint: "ТЕМИДО — в ТЕМНОТЕ страшно"
    },
    { 
        pt: "o dispositivo", 
        ru: "устройство", 
        imageQuery: "device gadget technology",
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
        soundHint: "КАБО = КАБЕЛЬ"
    },
    { 
        pt: "a fé", 
        ru: "вера", 
        imageQuery: "faith belief religion",
        soundHint: "ФЕ — ФЕя верит в чудо"
    },
    { 
        pt: "as pessoas de Leste", 
        ru: "люди с востока", 
        imageQuery: "eastern people asia",
        soundHint: "ПЕСОАШ де ЛЕШТ — люди с ЛЕСТИ (востока)"
    },
    { 
        pt: "sugerir", 
        ru: "предлагать", 
        imageQuery: "suggest recommend propose",
        soundHint: "СУЖЕРИР — СУ! ЖЕРИ — предложи сыр!"
    },
    { 
        pt: "fugir", 
        ru: "убегать", 
        imageQuery: "escape run away flee",
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
        soundHint: "БАЛЕЙАШ — БАЛЕТ китов в океане"
    },
    { 
        pt: "o aluguer", 
        ru: "аренда", 
        imageQuery: "rent lease rental",
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
        soundHint: "ВЕДАСАО — ВЕДАть за забором"
    },
    { 
        pt: "o colchão", 
        ru: "матрас", 
        imageQuery: "mattress bed sleep",
        soundHint: "КОЛШАО — КОЛется на матрасе"
    },
    { 
        pt: "ano novo, vida nova", 
        ru: "новый год, новая жизнь", 
        imageQuery: "new year celebration fresh start",
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
        soundHint: "РЕПРОВАР — РЕ-ПРОВАЛ экзамена"
    },
    { 
        pt: "andar a ler", 
        ru: "читать в последнее время", 
        imageQuery: "reading book lately",
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

// ==================== ТЕМАТИЧЕСКИЕ СПИСКИ (A2-B1) ====================

const THEMED_LISTS = {
    "medico": {
        name: "🏥 No consultório médico",
        words: [
            { pt: "a dor de cabeça", ru: "головная боль", imageQuery: "headache pain" },
            { pt: "a tontura", ru: "головокружение", imageQuery: "dizziness vertigo" },
            { pt: "a náusea", ru: "тошнота", imageQuery: "nausea sick" },
            { pt: "vomitar", ru: "рвать (тошнить)", imageQuery: "vomit sick" },
            { pt: "a febre", ru: "температура/лихорадка", imageQuery: "fever thermometer" },
            { pt: "os calafrios", ru: "озноб", imageQuery: "chills cold shiver" },
            { pt: "a tosse", ru: "кашель", imageQuery: "cough sick" },
            { pt: "tossir", ru: "кашлять", imageQuery: "coughing person" },
            { pt: "espirrar", ru: "чихать", imageQuery: "sneezing person" },
            { pt: "o corrimento nasal", ru: "насморк", imageQuery: "runny nose" },
            { pt: "a garganta inflamada", ru: "воспалённое горло", imageQuery: "sore throat" },
            { pt: "engolir", ru: "глотать", imageQuery: "swallowing" },
            { pt: "a tensão arterial", ru: "артериальное давление", imageQuery: "blood pressure" },
            { pt: "medir a tensão", ru: "измерить давление", imageQuery: "measuring blood pressure" },
            { pt: "a análise de sangue", ru: "анализ крови", imageQuery: "blood test" },
            { pt: "a receita médica", ru: "рецепт врача", imageQuery: "medical prescription" },
            { pt: "o diagnóstico", ru: "диагноз", imageQuery: "diagnosis doctor" },
            { pt: "a inflamação", ru: "воспаление", imageQuery: "inflammation swelling" },
            { pt: "inchado/a", ru: "опухший", imageQuery: "swollen body part" },
            { pt: "a alergia", ru: "аллергия", imageQuery: "allergy reaction" },
            { pt: "a erupção cutânea", ru: "сыпь на коже", imageQuery: "skin rash" },
            { pt: "a comichão", ru: "зуд", imageQuery: "itching scratching" },
            { pt: "coçar", ru: "чесать", imageQuery: "scratching skin" },
            { pt: "a dor nas costas", ru: "боль в спине", imageQuery: "back pain" },
            { pt: "a coluna vertebral", ru: "позвоночник", imageQuery: "spine backbone" },
            { pt: "a articulação", ru: "сустав", imageQuery: "joint body" },
            { pt: "o músculo", ru: "мышца", imageQuery: "muscle anatomy" },
            { pt: "a entorse", ru: "растяжение", imageQuery: "sprain ankle" },
            { pt: "a fratura", ru: "перелом", imageQuery: "bone fracture xray" },
            { pt: "o gesso", ru: "гипс", imageQuery: "plaster cast" },
            { pt: "os pontos", ru: "швы", imageQuery: "stitches wound" },
            { pt: "a cicatriz", ru: "шрам", imageQuery: "scar skin" },
            { pt: "desmaiar", ru: "терять сознание", imageQuery: "fainting person" },
            { pt: "a urgência", ru: "скорая помощь/неотложка", imageQuery: "emergency room" },
            { pt: "o especialista", ru: "специалист (врач)", imageQuery: "medical specialist" }
        ]
    },
    "restaurante": {
        name: "🍽️ No restaurante",
        words: [
            { pt: "reservar uma mesa", ru: "забронировать столик", imageQuery: "restaurant reservation" },
            { pt: "a ementa/o cardápio", ru: "меню", imageQuery: "restaurant menu" },
            { pt: "o prato do dia", ru: "блюдо дня", imageQuery: "daily special dish" },
            { pt: "a entrada", ru: "закуска", imageQuery: "appetizer starter" },
            { pt: "o prato principal", ru: "основное блюдо", imageQuery: "main course" },
            { pt: "a sobremesa", ru: "десерт", imageQuery: "dessert sweet" },
            { pt: "a conta", ru: "счёт", imageQuery: "restaurant bill" },
            { pt: "a gorjeta", ru: "чаевые", imageQuery: "tip money" },
            { pt: "bem passado", ru: "хорошо прожаренный", imageQuery: "well done steak" },
            { pt: "mal passado", ru: "с кровью (мясо)", imageQuery: "rare steak" },
            { pt: "ao ponto", ru: "средней прожарки", imageQuery: "medium steak" },
            { pt: "grelhado/a", ru: "на гриле", imageQuery: "grilled food" },
            { pt: "frito/a", ru: "жареный", imageQuery: "fried food" },
            { pt: "cozido/a", ru: "варёный", imageQuery: "boiled food" },
            { pt: "assado/a", ru: "запечённый", imageQuery: "roasted food" },
            { pt: "estufado/a", ru: "тушёный", imageQuery: "stewed food" },
            { pt: "cru/crua", ru: "сырой", imageQuery: "raw food" },
            { pt: "picante", ru: "острый", imageQuery: "spicy food chili" },
            { pt: "salgado/a", ru: "солёный", imageQuery: "salty food" },
            { pt: "insosso/a", ru: "пресный/безвкусный", imageQuery: "bland food" },
            { pt: "a intolerância alimentar", ru: "пищевая непереносимость", imageQuery: "food intolerance" },
            { pt: "sem glúten", ru: "без глютена", imageQuery: "gluten free" },
            { pt: "sem lactose", ru: "без лактозы", imageQuery: "lactose free" },
            { pt: "vegetariano/a", ru: "вегетарианский", imageQuery: "vegetarian food" },
            { pt: "vegano/a", ru: "веганский", imageQuery: "vegan food" },
            { pt: "o guardanapo", ru: "салфетка", imageQuery: "napkin table" },
            { pt: "os talheres", ru: "столовые приборы", imageQuery: "cutlery silverware" },
            { pt: "reclamar", ru: "жаловаться", imageQuery: "complaining customer" },
            { pt: "está frio", ru: "холодное (о еде)", imageQuery: "cold food" },
            { pt: "demorou muito", ru: "долго ждать", imageQuery: "waiting long time" }
        ]
    },
    "aeroporto": {
        name: "✈️ No aeroporto",
        words: [
            { pt: "o voo", ru: "рейс", imageQuery: "flight airplane" },
            { pt: "a escala", ru: "пересадка", imageQuery: "layover connection flight" },
            { pt: "o voo direto", ru: "прямой рейс", imageQuery: "direct flight" },
            { pt: "o check-in", ru: "регистрация", imageQuery: "airport check-in" },
            { pt: "o balcão de check-in", ru: "стойка регистрации", imageQuery: "check-in counter" },
            { pt: "o cartão de embarque", ru: "посадочный талон", imageQuery: "boarding pass" },
            { pt: "a porta de embarque", ru: "выход на посадку", imageQuery: "boarding gate" },
            { pt: "embarcar", ru: "садиться (на борт)", imageQuery: "boarding plane" },
            { pt: "desembarcar", ru: "выходить (из самолёта)", imageQuery: "disembarking plane" },
            { pt: "a bagagem de mão", ru: "ручная кладь", imageQuery: "carry-on luggage" },
            { pt: "a bagagem de porão", ru: "багаж в трюме", imageQuery: "checked luggage" },
            { pt: "despachar a bagagem", ru: "сдать багаж", imageQuery: "checking luggage" },
            { pt: "o excesso de bagagem", ru: "перевес багажа", imageQuery: "overweight luggage" },
            { pt: "a recolha de bagagem", ru: "выдача багажа", imageQuery: "baggage claim" },
            { pt: "a bagagem extraviada", ru: "потерянный багаж", imageQuery: "lost luggage" },
            { pt: "o controlo de segurança", ru: "контроль безопасности", imageQuery: "security check airport" },
            { pt: "o controlo de passaportes", ru: "паспортный контроль", imageQuery: "passport control" },
            { pt: "a alfândega", ru: "таможня", imageQuery: "customs airport" },
            { pt: "declarar", ru: "декларировать", imageQuery: "customs declaration" },
            { pt: "o atraso", ru: "задержка", imageQuery: "flight delay" },
            { pt: "o voo cancelado", ru: "отменённый рейс", imageQuery: "cancelled flight" },
            { pt: "remarcar o voo", ru: "перебронировать рейс", imageQuery: "rebooking flight" },
            { pt: "a indemnização", ru: "компенсация", imageQuery: "compensation money" },
            { pt: "o cinto de segurança", ru: "ремень безопасности", imageQuery: "seatbelt airplane" },
            { pt: "a turbulência", ru: "турбулентность", imageQuery: "turbulence airplane" },
            { pt: "aterrar", ru: "приземляться", imageQuery: "plane landing" },
            { pt: "descolar", ru: "взлетать", imageQuery: "plane takeoff" },
            { pt: "a pista", ru: "взлётная полоса", imageQuery: "runway airport" },
            { pt: "o piloto", ru: "пилот", imageQuery: "airplane pilot" },
            { pt: "a tripulação", ru: "экипаж", imageQuery: "flight crew" }
        ]
    },
    "aluguer": {
        name: "🏠 Aluguer de casa",
        words: [
            { pt: "arrendar/alugar", ru: "снимать (жильё)", imageQuery: "renting apartment" },
            { pt: "o senhorio", ru: "арендодатель", imageQuery: "landlord property" },
            { pt: "o inquilino", ru: "арендатор/квартирант", imageQuery: "tenant renter" },
            { pt: "o contrato de arrendamento", ru: "договор аренды", imageQuery: "lease agreement" },
            { pt: "a renda/o aluguel", ru: "арендная плата", imageQuery: "rent payment" },
            { pt: "a caução", ru: "залог", imageQuery: "security deposit" },
            { pt: "as despesas incluídas", ru: "коммуналка включена", imageQuery: "utilities included" },
            { pt: "a água", ru: "вода (коммуналка)", imageQuery: "water bill" },
            { pt: "a eletricidade", ru: "электричество", imageQuery: "electricity bill" },
            { pt: "o gás", ru: "газ", imageQuery: "gas bill" },
            { pt: "o aquecimento", ru: "отопление", imageQuery: "heating system" },
            { pt: "o ar condicionado", ru: "кондиционер", imageQuery: "air conditioning" },
            { pt: "mobilado/a", ru: "с мебелью", imageQuery: "furnished apartment" },
            { pt: "não mobilado", ru: "без мебели", imageQuery: "unfurnished apartment" },
            { pt: "o T1/T2/T3", ru: "1/2/3-комнатная квартира", imageQuery: "apartment rooms" },
            { pt: "o andar", ru: "этаж", imageQuery: "floor building" },
            { pt: "o elevador", ru: "лифт", imageQuery: "elevator lift" },
            { pt: "a garagem", ru: "гараж/парковка", imageQuery: "garage parking" },
            { pt: "a varanda", ru: "балкон", imageQuery: "balcony apartment" },
            { pt: "o terraço", ru: "терраса", imageQuery: "terrace rooftop" },
            { pt: "a avaria", ru: "поломка", imageQuery: "broken appliance" },
            { pt: "o canalizador", ru: "сантехник", imageQuery: "plumber fixing" },
            { pt: "o eletricista", ru: "электрик", imageQuery: "electrician working" },
            { pt: "a fuga de água", ru: "протечка воды", imageQuery: "water leak" },
            { pt: "entupido/a", ru: "засорённый", imageQuery: "clogged drain" },
            { pt: "o bolor", ru: "плесень", imageQuery: "mold wall" },
            { pt: "a humidade", ru: "влажность/сырость", imageQuery: "humidity dampness" },
            { pt: "rescindir o contrato", ru: "расторгнуть договор", imageQuery: "contract termination" },
            { pt: "o pré-aviso", ru: "предупреждение (об уходе)", imageQuery: "notice period" },
            { pt: "a vistoria", ru: "осмотр (квартиры)", imageQuery: "apartment inspection" }
        ]
    }
};

// Экспорт для использования в app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VOCABULARY, THEMED_LISTS };
}
