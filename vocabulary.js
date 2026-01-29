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

// ==================== ТЕМАТИЧЕСКИЕ СПИСКИ (A2-B1) ====================

const THEMED_LISTS = {
    "medico": {
        name: "🏥 No consultório médico",
        words: [
            { pt: "a dor de cabeça", ru: "головная боль", imageQuery: "headache pain", soundHint: "ДОР ДЕ КАБЕСА — ДЫРКА в КАБЕСЕ (голове) болит!" },
            { pt: "a tontura", ru: "головокружение", imageQuery: "dizziness vertigo", soundHint: "ТОНТУРА — ТОНна кружится вокруг головы!" },
            { pt: "a náusea", ru: "тошнота", imageQuery: "nausea sick", soundHint: "НАУЗА — НА УЗИ так тошнит, что выбегаешь из кабинета!" },
            { pt: "vomitar", ru: "рвать (тошнить)", imageQuery: "vomit sick", soundHint: "ВОМИТАР — ВОМбат ТАРЕЛКУ вырвал — все в шоке!" },
            { pt: "a febre", ru: "температура/лихорадка", imageQuery: "fever thermometer", soundHint: "ФЕБРЕ — ФЕБРАль такой холодный, а у тебя жар 40!" },
            { pt: "os calafrios", ru: "озноб", imageQuery: "chills cold shiver", soundHint: "КАЛАФРИУШ — КАЛА трясёт от холода, ФРИУш (frio = холод)!" },
            { pt: "a tosse", ru: "кашель", imageQuery: "cough sick", soundHint: "ТОСЕ — ТОСтер кашляет крошками — кхе-кхе!" },
            { pt: "tossir", ru: "кашлять", imageQuery: "coughing person", soundHint: "ТУСИР — ТУСовщик так накурился, что кашляет без остановки!" },
            { pt: "espirrar", ru: "чихать", imageQuery: "sneezing person", soundHint: "ЭШПИРРАР — ЭШ! ПИРРАТ чихнул так, что улетела шляпа!" },
            { pt: "o corrimento nasal", ru: "насморк", imageQuery: "runny nose", soundHint: "КУРРИМЕНТУ НАЗАЛ — из носа КУРИЦА МЕНТОЛ течёт!" },
            { pt: "a garganta inflamada", ru: "воспалённое горло", imageQuery: "sore throat", soundHint: "ГАРГАНТА — ГАРГАНТЮА так орал, что горло воспалилось!" },
            { pt: "engolir", ru: "глотать", imageQuery: "swallowing", soundHint: "ЭНГОЛИР — ЭН ГОЛИРует и глотает шарики целиком!" },
            { pt: "a tensão arterial", ru: "артериальное давление", imageQuery: "blood pressure", soundHint: "ТЕНСАУ — ТЕНСИОН (напряжение) в артериях зашкаливает!" },
            { pt: "medir a tensão", ru: "измерить давление", imageQuery: "measuring blood pressure", soundHint: "МЕДИР А ТЕНСАУ — МЕДИК измеряет ТЕНСИОН рукой!" },
            { pt: "a análise de sangue", ru: "анализ крови", imageQuery: "blood test", soundHint: "АНАЛИЗЕ ДЕ САНГВЕ — АНАЛИЗ САНГВИНИКА — весёлая кровь!" },
            { pt: "a receita médica", ru: "рецепт врача", imageQuery: "medical prescription", soundHint: "РЕСЕЙТА МЕДИКА — РЕЦЕПТ от МЕДИКА такой страшный, что аптекарь падает!" },
            { pt: "o diagnóstico", ru: "диагноз", imageQuery: "diagnosis doctor", soundHint: "ДИАГНОСТИКУ — ДИАГНОСТ ИКУ поставил диагноз: слишком много суши!" },
            { pt: "a inflamação", ru: "воспаление", imageQuery: "inflammation swelling", soundHint: "ИНФЛАМАСАУ — ИНФЛЯЦИЯ такая, что всё воспалилось от цен!" },
            { pt: "inchado/a", ru: "опухший", imageQuery: "swollen body part", soundHint: "ИНШАДУ — ИН ШАДУ (в тени) сидел — и опух от комаров!" },
            { pt: "a alergia", ru: "аллергия", imageQuery: "allergy reaction", soundHint: "АЛЕРЖИЯ — АЛЕРГИЯ (почти так же звучит)!" },
            { pt: "a erupção cutânea", ru: "сыпь на коже", imageQuery: "skin rash", soundHint: "ЭРУПСАУ КУТАНИЯ — вулкан ЭРУПЦИЯ на КОЖЕ — всё в сыпи!" },
            { pt: "a comichão", ru: "зуд", imageQuery: "itching scratching", soundHint: "КОМИШАУ — КОМИССИЯ так зудит, что все чешутся от бумаг!" },
            { pt: "coçar", ru: "чесать", imageQuery: "scratching skin", soundHint: "КУСАР — КУСАТЬ себя, когда чешется — ааа!" },
            { pt: "a dor nas costas", ru: "боль в спине", imageQuery: "back pain", soundHint: "ДОР НАШ КОШТАШ — ДЫРКА НА КОСТЯХ спины болит!" },
            { pt: "a coluna vertebral", ru: "позвоночник", imageQuery: "spine backbone", soundHint: "КОЛУНА ВЕРТЕБРАЛ — КОЛОННА ВЕРТИТСЯ в спине!" },
            { pt: "a articulação", ru: "сустав", imageQuery: "joint body", soundHint: "АРТИКУЛАСАУ — АРТИКУЛЯЦИЯ суставов — они щёлкают как слова!" },
            { pt: "o músculo", ru: "мышца", imageQuery: "muscle anatomy", soundHint: "МУШКУЛУ — МУСКУЛ (почти одинаково)!" },
            { pt: "a entorse", ru: "растяжение", imageQuery: "sprain ankle", soundHint: "ЭНТОРСЕ — ЭН ТОРС растянул — теперь ходит как робот!" },
            { pt: "a fratura", ru: "перелом", imageQuery: "bone fracture xray", soundHint: "ФРАТУРА — ФРАКТУРА кости — хрустнула как ФРУКТ!" },
            { pt: "o gesso", ru: "гипс", imageQuery: "plaster cast", soundHint: "ЖЕССУ — ЖЕСТЬ! В гипсе как мумия!" },
            { pt: "os pontos", ru: "швы", imageQuery: "stitches wound", soundHint: "УШ ПОНТУШ — ПОНТЫ показывает: вот мои ШВЫ, 10 штук!" },
            { pt: "a cicatriz", ru: "шрам", imageQuery: "scar skin", soundHint: "СИКАТРИШ — СИКА (коза) оставила ШРАМ рогами!" },
            { pt: "desmaiar", ru: "терять сознание", imageQuery: "fainting person", soundHint: "ДЕЖМАЙАР — ДЕД в МАЕ упал в обморок от жары!" },
            { pt: "a urgência", ru: "скорая помощь/неотложка", imageQuery: "emergency room", soundHint: "УРЖЭНСИЯ — URGENT! СРОЧНО! Скорая мчится!" },
            { pt: "o especialista", ru: "специалист (врач)", imageQuery: "medical specialist", soundHint: "ЭШПЕСИАЛИШТА — СПЕЦИАЛИСТ (почти одинаково)!" }
        ]
    },
    "restaurante": {
        name: "🍽️ No restaurante",
        words: [
            { pt: "reservar uma mesa", ru: "забронировать столик", imageQuery: "restaurant reservation", soundHint: "РЕЗЕРВАР УМА МЕЗА — РЕЗЕРВАЦИЯ стола, УМА МЕЗА — одна МЕЗА (стол)!" },
            { pt: "a ementa/o cardápio", ru: "меню", imageQuery: "restaurant menu", soundHint: "ЭМЕНТА — МЕНЮ с МЕНТОЛОМ — освежает выбор!" },
            { pt: "o prato do dia", ru: "блюдо дня", imageQuery: "daily special dish", soundHint: "ПРАТУ ДУ ДИА — ПРУТ ДУА (два прута) — на них блюдо дня!" },
            { pt: "a entrada", ru: "закуска", imageQuery: "appetizer starter", soundHint: "ЭНТРАДА — на ВХОДЕ (entrance) дают закуску!" },
            { pt: "o prato principal", ru: "основное блюдо", imageQuery: "main course", soundHint: "ПРАТУ ПРИНСИПАЛ — ПРУТ ПРИНЦИПАЛА — директор ест главное блюдо!" },
            { pt: "a sobremesa", ru: "десерт", imageQuery: "dessert sweet", soundHint: "СОБРЕМЕЗА — СВЕРХ МЕЗЫ (стола) — десерт на столе!" },
            { pt: "a conta", ru: "счёт", imageQuery: "restaurant bill", soundHint: "КОНТА — КОНТА (счёт) как в банке — плати!" },
            { pt: "a gorjeta", ru: "чаевые", imageQuery: "tip money", soundHint: "ГОРЖЕТА — ГОРЖУСЬ, что дал чаевые — официант счастлив!" },
            { pt: "bem passado", ru: "хорошо прожаренный", imageQuery: "well done steak", soundHint: "БЕМ ПАССАДУ — БЕН ПАССАЖИР хорошо прожарился на солнце!" },
            { pt: "mal passado", ru: "с кровью (мясо)", imageQuery: "rare steak", soundHint: "МАЛ ПАССАДУ — МАЛ прожарен — кровь течёт!" },
            { pt: "ao ponto", ru: "средней прожарки", imageQuery: "medium steak", soundHint: "АУ ПОНТУ — АУ! ТОЧНО в ПОНТУ — средняя прожарка!" },
            { pt: "grelhado/a", ru: "на гриле", imageQuery: "grilled food", soundHint: "ГРЕЛЬЯДУ — ГРИЛЬ ЯДУ (ем) — на гриле жарится!" },
            { pt: "frito/a", ru: "жареный", imageQuery: "fried food", soundHint: "ФРИТУ — ФРИТЮР! Всё жареное в масле!" },
            { pt: "cozido/a", ru: "варёный", imageQuery: "boiled food", soundHint: "КОЗИДУ — КОЗЁЛ в ДУше варится — варёный!" },
            { pt: "assado/a", ru: "запечённый", imageQuery: "roasted food", soundHint: "АССАДУ — АССАСИН запекает врагов в духовке!" },
            { pt: "estufado/a", ru: "тушёный", imageQuery: "stewed food", soundHint: "ЭШТУФАДУ — в ШТУФЕ (печке) тушится мясо!" },
            { pt: "cru/crua", ru: "сырой", imageQuery: "raw food", soundHint: "КРУ — КРУтое суши — СЫРАЯ рыба!" },
            { pt: "picante", ru: "острый", imageQuery: "spicy food chili", soundHint: "ПИКАНТЕ — ПИКАНТНЫЙ (острый) перец жжёт рот!" },
            { pt: "salgado/a", ru: "солёный", imageQuery: "salty food", soundHint: "САЛГАДУ — САЛО ГАДУ (гад) солёное ест!" },
            { pt: "insosso/a", ru: "пресный/безвкусный", imageQuery: "bland food", soundHint: "ИНСОССУ — ИН-СОУС (без соуса) — пресно и скучно!" },
            { pt: "a intolerância alimentar", ru: "пищевая непереносимость", imageQuery: "food intolerance", soundHint: "ИНТОЛЕРАНСЯ АЛИМЕНТАР — ИНТОЛЕРАНТНЫЙ к АЛИМЕНТАМ (еде)!" },
            { pt: "sem glúten", ru: "без глютена", imageQuery: "gluten free", soundHint: "СЕМ ГЛУТЕН — СЕМь раз проверь — БЕЗ ГЛЮТЕНА!" },
            { pt: "sem lactose", ru: "без лактозы", imageQuery: "lactose free", soundHint: "СЕМ ЛАКТОЗЕ — СЕМья без ЛАКТОЗЫ живёт!" },
            { pt: "vegetariano/a", ru: "вегетарианский", imageQuery: "vegetarian food", soundHint: "ВЕЖЕТАРИАНУ — ВЕГЕТАРИАНЕЦ (почти одинаково)!" },
            { pt: "vegano/a", ru: "веганский", imageQuery: "vegan food", soundHint: "ВЕГАНУ — ВЕГАН (почти одинаково)!" },
            { pt: "o guardanapo", ru: "салфетка", imageQuery: "napkin table", soundHint: "ГУАРДАНАПУ — ГВАРДЕЕЦ вытирает НОС НАПУ (салфеткой)!" },
            { pt: "os talheres", ru: "столовые приборы", imageQuery: "cutlery silverware", soundHint: "УШ ТАЛЬЕРЕШ — ТАЛЬЕРЫ (тарелки) и приборы лежат красиво!" },
            { pt: "reclamar", ru: "жаловаться", imageQuery: "complaining customer", soundHint: "РЕКЛАМАР — РЕКЛАМАЦИЯ! Жалоба на плохую еду!" },
            { pt: "está frio", ru: "холодное (о еде)", imageQuery: "cold food", soundHint: "ЭШТА ФРИУ — ЭТО ФРИГО (холодильник) — еда холодная!" },
            { pt: "demorou muito", ru: "долго ждать", imageQuery: "waiting long time", soundHint: "ДЕМОРУ МУЙТУ — ДЕМОН РУчку МУТИТ — жду вечность!" }
        ]
    },
    "aeroporto": {
        name: "✈️ No aeroporto",
        words: [
            { pt: "o voo", ru: "рейс", imageQuery: "flight airplane", soundHint: "ВОУ! — ВОУ! Какой крутой рейс — лечу в Лиссабон!" },
            { pt: "a escala", ru: "пересадка", imageQuery: "layover connection flight", soundHint: "ЭШКАЛА — по ШКАЛЕ пересадок — три штуки!" },
            { pt: "o voo direto", ru: "прямой рейс", imageQuery: "direct flight", soundHint: "ВОУ ДИРЕКТУ — ВОУ ДИРЕКТОР летит прямым рейсом!" },
            { pt: "o check-in", ru: "регистрация", imageQuery: "airport check-in", soundHint: "ЧЕК-ИН — ЧЕК-ИН (интернациональное слово)!" },
            { pt: "o balcão de check-in", ru: "стойка регистрации", imageQuery: "check-in counter", soundHint: "БАЛКАУ ДЕ ЧЕК-ИН — на БАЛКОНЕ стойка регистрации!" },
            { pt: "o cartão de embarque", ru: "посадочный талон", imageQuery: "boarding pass", soundHint: "КАРТАУ ДЕ ЭМБАРКЕ — КАРТОН для ЭМБАРГО на посадку!" },
            { pt: "a porta de embarque", ru: "выход на посадку", imageQuery: "boarding gate", soundHint: "ПОРТА ДЕ ЭМБАРКЕ — ПОРТА (дверь) на ЭМБАРКАЦИЮ!" },
            { pt: "embarcar", ru: "садиться (на борт)", imageQuery: "boarding plane", soundHint: "ЭМБАРКАР — ЭМБАРГО снято — садимся на борт!" },
            { pt: "desembarcar", ru: "выходить (из самолёта)", imageQuery: "disembarking plane", soundHint: "ДЕЗЭМБАРКАР — ДЕЗ (без) ЭМБАРГО — выходим!" },
            { pt: "a bagagem de mão", ru: "ручная кладь", imageQuery: "carry-on luggage", soundHint: "БАГАЖЕМ ДЕ МАУ — БАГАЖ в МАУ (руке) несу!" },
            { pt: "a bagagem de porão", ru: "багаж в трюме", imageQuery: "checked luggage", soundHint: "БАГАЖЕМ ДЕ ПОРАУ — БАГАЖ в ПОРУ (трюме) сдаю!" },
            { pt: "despachar a bagagem", ru: "сдать багаж", imageQuery: "checking luggage", soundHint: "ДЕШПАШАР А БАГАЖЕМ — ДИСПЕТЧЕР забирает БАГАЖ!" },
            { pt: "o excesso de bagagem", ru: "перевес багажа", imageQuery: "overweight luggage", soundHint: "ЭКСЕССУ ДЕ БАГАЖЕМ — ЭКСЦЕСС багажа — 30 кг лишних!" },
            { pt: "a recolha de bagagem", ru: "выдача багажа", imageQuery: "baggage claim", soundHint: "РЕКОЛЬЯ ДЕ БАГАЖЕМ — РЕКОЛЬЯ (собираю) свой БАГАЖ с ленты!" },
            { pt: "a bagagem extraviada", ru: "потерянный багаж", imageQuery: "lost luggage", soundHint: "БАГАЖЕМ ЭШТРАВИАДА — БАГАЖ ЭКСТРА-ВИАДУК — улетел куда-то!" },
            { pt: "o controlo de segurança", ru: "контроль безопасности", imageQuery: "security check airport", soundHint: "КОНТРОЛУ ДЕ СЕГУРАНСА — КОНТРОЛЬ СЕГУРАНСЫ (безопасности)!" },
            { pt: "o controlo de passaportes", ru: "паспортный контроль", imageQuery: "passport control", soundHint: "КОНТРОЛУ ДЕ ПАССАПОРТЕШ — КОНТРОЛЬ ПАСПОРТОВ!" },
            { pt: "a alfândega", ru: "таможня", imageQuery: "customs airport", soundHint: "АЛФАНДЕГА — АЛФАВИТ ДЕДА проверяют на таможне!" },
            { pt: "declarar", ru: "декларировать", imageQuery: "customs declaration", soundHint: "ДЕКЛАРАР — ДЕКЛАРАЦИЯ (почти одинаково)!" },
            { pt: "o atraso", ru: "задержка", imageQuery: "flight delay", soundHint: "АТРАЗУ — А ТРАССА закрыта — рейс задержан!" },
            { pt: "o voo cancelado", ru: "отменённый рейс", imageQuery: "cancelled flight", soundHint: "ВОУ КАНСЭЛАДУ — ВОУ КАНСЭЛ (отмена) — не летим!" },
            { pt: "remarcar o voo", ru: "перебронировать рейс", imageQuery: "rebooking flight", soundHint: "РЕМАРКАР У ВОУ — РЕМАРКА на ВОУ — меняю дату!" },
            { pt: "a indemnização", ru: "компенсация", imageQuery: "compensation money", soundHint: "ИНДЕМНИЗАСАУ — ИНДЕМНИТИ (компенсация) за задержку!" },
            { pt: "o cinto de segurança", ru: "ремень безопасности", imageQuery: "seatbelt airplane", soundHint: "СИНТУ ДЕ СЕГУРАНСА — СИНТЕТИЧЕСКИЙ ремень СЕГУРАНСЫ!" },
            { pt: "a turbulência", ru: "турбулентность", imageQuery: "turbulence airplane", soundHint: "ТУРБУЛЭНСИЯ — ТУРБУЛЕНТНОСТЬ (почти одинаково)!" },
            { pt: "aterrar", ru: "приземляться", imageQuery: "plane landing", soundHint: "АТЕРРАР — А ТЕРРА (земля) — приземляемся!" },
            { pt: "descolar", ru: "взлетать", imageQuery: "plane takeoff", soundHint: "ДЕШКОЛАР — ДЕСК КОЛАРИТ — стол отклеивается от земли и взлетает!" },
            { pt: "a pista", ru: "взлётная полоса", imageQuery: "runway airport", soundHint: "ПИШТА — ПИСТОЛЕТ лежит на ПОЛОСЕ — не бери!" },
            { pt: "o piloto", ru: "пилот", imageQuery: "airplane pilot", soundHint: "ПИЛОТУ — ПИЛОТ (почти одинаково)!" },
            { pt: "a tripulação", ru: "экипаж", imageQuery: "flight crew", soundHint: "ТРИПУЛАСАУ — ТРИ ПУЛИ у экипажа — стюардессы вооружены!" }
        ]
    },
    "aluguer": {
        name: "🏠 Aluguer de casa",
        words: [
            { pt: "arrendar/alugar", ru: "снимать (жильё)", imageQuery: "renting apartment", soundHint: "АЛУГАР — АЛУГАРЬ (как вратарь) ловит квартиру в аренду!" },
            { pt: "o senhorio", ru: "арендодатель", imageQuery: "landlord property", soundHint: "СЕНЬОРЬЮ — СЕНЬОР-хозяин требует деньги каждый месяц!" },
            { pt: "o inquilino", ru: "арендатор/квартирант", imageQuery: "tenant renter", soundHint: "ИНКИЛИНУ — ИНКОГНИТО живёт квартирант — никто его не знает!" },
            { pt: "o contrato de arrendamento", ru: "договор аренды", imageQuery: "lease agreement", soundHint: "КОНТРАТУ ДЕ АРРЕНДАМЕНТУ — КОНТРАКТ АРЕНДЫ (понятно)!" },
            { pt: "a renda/o aluguel", ru: "арендная плата", imageQuery: "rent payment", soundHint: "РЕНДА — РЕНТА (арендная плата) — плати РЕНДУ!" },
            { pt: "a caução", ru: "залог", imageQuery: "security deposit", soundHint: "КАУСАУ — КАУЧУК денег отдал в ЗАЛОГ — не вернут!" },
            { pt: "as despesas incluídas", ru: "коммуналка включена", imageQuery: "utilities included", soundHint: "АШ ДЕШПЕЗАШ ИНКЛУИДАШ — ДЕПЕШИ (расходы) ВКЛЮЧЕНЫ в цену!" },
            { pt: "a água", ru: "вода (коммуналка)", imageQuery: "water bill", soundHint: "АГУА — АГУА (вода) — АГУ, малыш пьёт воду!" },
            { pt: "a eletricidade", ru: "электричество", imageQuery: "electricity bill", soundHint: "ЭЛЕТРИСИДАДЕ — ЭЛЕКТРИЧЕСТВО (почти одинаково)!" },
            { pt: "o gás", ru: "газ", imageQuery: "gas bill", soundHint: "ГАШ — ГАЗ (почти одинаково)!" },
            { pt: "o aquecimento", ru: "отопление", imageQuery: "heating system", soundHint: "АКЕСИМЕНТУ — АКВА СЕМЕНТО — водяное отопление греет как цемент!" },
            { pt: "o ar condicionado", ru: "кондиционер", imageQuery: "air conditioning", soundHint: "АР КОНДИСИОНАДУ — АЙР КОНДИШН (кондиционер)!" },
            { pt: "mobilado/a", ru: "с мебелью", imageQuery: "furnished apartment", soundHint: "МОБИЛАДУ — МОБИЛЬ (мебель) в квартире есть!" },
            { pt: "não mobilado", ru: "без мебели", imageQuery: "unfurnished apartment", soundHint: "НАУ МОБИЛАДУ — НЕТ МОБИЛИ (мебели) — пустая квартира!" },
            { pt: "o T1/T2/T3", ru: "1/2/3-комнатная квартира", imageQuery: "apartment rooms", soundHint: "Т1/Т2/Т3 — Т = ТИПОЛОГИЯ, цифра = комнаты!" },
            { pt: "o andar", ru: "этаж", imageQuery: "floor building", soundHint: "АНДАР — АНДРЕЙ живёт на пятом этаже!" },
            { pt: "o elevador", ru: "лифт", imageQuery: "elevator lift", soundHint: "ЭЛЕВАДОР — ЭЛЕВАТОР поднимает на этаж!" },
            { pt: "a garagem", ru: "гараж/парковка", imageQuery: "garage parking", soundHint: "ГАРАЖЕМ — ГАРАЖ (почти одинаково)!" },
            { pt: "a varanda", ru: "балкон", imageQuery: "balcony apartment", soundHint: "ВАРАНДА — ВЕРАНДА (балкон) с видом на море!" },
            { pt: "o terraço", ru: "терраса", imageQuery: "terrace rooftop", soundHint: "ТЕРРАСУ — ТЕРРАСА (почти одинаково)!" },
            { pt: "a avaria", ru: "поломка", imageQuery: "broken appliance", soundHint: "АВАРИЯ — АВАРИЯ (поломка) — всё сломалось!" },
            { pt: "o canalizador", ru: "сантехник", imageQuery: "plumber fixing", soundHint: "КАНАЛИЗАДОР — КАНАЛИЗАЦИЮ чинит сантехник!" },
            { pt: "o eletricista", ru: "электрик", imageQuery: "electrician working", soundHint: "ЭЛЕТРИШИШТА — ЭЛЕКТРИК (почти одинаково)!" },
            { pt: "a fuga de água", ru: "протечка воды", imageQuery: "water leak", soundHint: "ФУГА ДЕ АГУА — ФУГА (побег) воды из трубы!" },
            { pt: "entupido/a", ru: "засорённый", imageQuery: "clogged drain", soundHint: "ЭНТУПИДУ — ЭН ТУПИК зашла труба — засорилась!" },
            { pt: "o bolor", ru: "плесень", imageQuery: "mold wall", soundHint: "БОЛОР — БОЛОР (боль) от плесени на стенах!" },
            { pt: "a humidade", ru: "влажность/сырость", imageQuery: "humidity dampness", soundHint: "УМИДАДЕ — HUMID (влажность) — сыро везде!" },
            { pt: "rescindir o contrato", ru: "расторгнуть договор", imageQuery: "contract termination", soundHint: "РЕШИНДИР У КОНТРАТУ — РАСЩЕПИТЬ КОНТРАКТ — расторгаем!" },
            { pt: "o pré-aviso", ru: "предупреждение (об уходе)", imageQuery: "notice period", soundHint: "ПРЕ-АВИЗУ — ПРЕ-АВИЗО (предупреждение) за месяц!" },
            { pt: "a vistoria", ru: "осмотр (квартиры)", imageQuery: "apartment inspection", soundHint: "ВИШТОРИЯ — ВИЗИТ ТОРИ — Тори осматривает квартиру!" }
        ]
    }
};

// Экспорт для использования в app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VOCABULARY, THEMED_LISTS };
}
