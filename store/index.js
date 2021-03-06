import axios from 'axios'

export const state = () => ({

    eventForm: [],
    portfolioData: [
    {
        id: 0,
        title: 'КРОК',
        picsFolder: 'krok',
        pics: [1,2,3],
        dateData: '<b>30.12.2020 г.</b>',
        membersData: '40 чел.',
        spectators: '',
        details: `
        <p>Место проведения: <b>Лес Арт Резорт</b></p>
        <p>Формат мероприятия: <b>Клиентское мероприятие</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Задача от КРОК - Организовать мероприятие для своих клиентов. 
        Отель должен быть хорошего уровня и иметь много развлечений, т.к. они приглашают своих клиентов
        чтобы они отдохнули. Банкет должен быть каждый вечер, т.е. 1й день - открытие, 2й день - закрытие.</p>`
    },
    {
        id: 1,
        title: 'Борк/Технопарк',
        picsFolder: 'bork_tehnopark',
        pics: [1,2],
        dateData: '<b>29.04 - 30.04.21 г.</b>',
        membersData: '65 чел.',
        spectators: '',
        details: `
        <p>Место проведения: <b>Лес Арт Резорт</b></p>
        <p>Формат мероприятия: <b>Корпоратив для сотрудников</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Нужно было организовать обучение и корпоратив для некоторых сотрудников компании. Организовали обучение сотрудников, игру в лазертаг и вечерний банкет с ведущим и кавер-группой.</p>
        `
    },
    {
        id: 2,
        title: 'GEA',
        picsFolder: 'gea',
        pics: [1,2],
        dateData: '<b>07.10-10.10.21 г.</b>',
        membersData: '100 чел.',
        spectators: '',
        details: `
        <p>Место проведения: <b>Mercure Калининград</b></p>
        <p>Формат мероприятия: <b>Встреча дилеров</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Было необходимо организовать встречу дилеров на побережье
        Калининградской области. В связи с тем, что на побережье
        не оказалось отеля с большим номерным фондом и конференц-залом 
        мы организовали мероприятие  в самом городе Калининград. Нужно
        было организовать выезд на производство, экскурсию, ужин с
        блюдами из охотничьей кухни, конференцию и гала-ужин.</p>
        `
    },
    {
        id: 3,
        title: 'AT Consulting',
        picsFolder: 'at_consulting',
        pics: [1,2],
        dateData: '<b>12.11-14.11.21 г.</b>',
        membersData: '210 чел.',
        spectators: '',
        details: `
        <p>Место проведения: <b>Ареал</b></p>
        <p>Формат мероприятия: <b>Стратегическая сессия</b></p>
        <p><b>Цели/задачи:</b></p>
        <p>Была поставлена задача организовать
        обучение новых сотрудников, а также организовать
        стратегическую сессию с участием руководителей компании 
        и приглашенных спикеров. В качестве развлекательной программы
        было проведено командообразующее мероприятие и вечерний гала-ужин
        с ведущим и кавер-группой.</p>
        `
    },
    {
        id: 4,
        title: 'Nexters Global',
        picsFolder: 'nexters_summer',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        dateData: '<b>18-20.06.2021 г.</b>',
        membersData: '<b>Количество участников</b> – 550',
        spectators: '',
        details: `
        <p><b>Поставленные задачи:</b></p>
        <p>Организация и проведение фестиваля под открытым небом с уличной едой, развлечениями и выступлениями артистов</p>

        <p><b>Предложенные решения поставленных задач:</b></p>
        <p> Для размещения группы в 550 человек был выбран отель Рэдиссон Завидово.
        Были выбраны локации на территории отеля и на пляже рядом. Были застроены 2 сцены, одна на
        первый вечер мероприятия, вторая - основная - на второй. Накануне мероприятия был осуществлена
        выдача welcome-подарков для участников мероприятия. Для проведения мероприятия были приглашены подрядчики
        по организации активностей на земле и воде, VR-комната, привезены аппараты с мороженым, с кукурузой и сладкой ватой.
        Зона фестиваля была ограждена фан-барьерами, периметр был огорожен постами охраны, на территорию пропускали только участников
        с браслетами фестиваля. На воде дежурили спасатели, а реанимация сопровождала мероприятие 24/7.  В первый день фестиваля гостям
        предлагали разливное крафтовое пиво, легкие алкогольные коктейли, линии с уличной едой. Гостей развлекала известная кавер-группа и ведущий.
        Во второй день фестиваля работали различные зоны развлечений в течении всего дня.
        Хедлайнером фестиваля выступила группа Little Big, а вечер закрывал праздничный салют.</p>`
    },
    {
        id: 5,
        title: 'Nexters Global',
        picsFolder: 'nexter_new_year',
        pics: [1,2,3,4,5,6,7],
        dateData: '<b>30.12.2020 г.</b>',
        membersData: 'Онлайн-мероприятие',
        spectators: '',
        details: `<p><b>Поставленные задачи:</b></p>
        <p>Организовать проведение онлайн-корпоратива для сотрудников компании для празднования Нового Года</p>

        <p><b>Предложенные решения поставленных задач:</b></p>
        <p> После инспекции ряда площадок в Москве и ближайшем Подмосковье было принято решение организовать
        импровизированную студию в офисе заказчика. Был выбран и предложен подрядчик, который отвечал за техническую 
        часть - завоз необходимого оборудования, подготовка и написание веб-страницы мероприятия, доступной только для 
        сотрудинков компании (вход по логину-паролю), застройка студии и связь ее с передвижной студией в помещении кулинарной
        мастерской. Одной из частей мероприятия был кулинарный мастер-класс со звездным ведущим - Константином Ивлевым. Под 
        эту часть корпоратива участникам мероприятия были доставлены продукты для приготовления традиционных новогодних блюд.
        В основной студии в офисе заказчика был подготовлен сценарий мероприятия в формате "Вечернего Урганта". Так же было 
        отведено отдельное помещение под кейтеринг, где приглашенные подрядчики готовили блюда для звезд вечера, исходя из их
        бытового райдера. Написанием сценария вечера занимались профессиональные сценаристы, работающие с Первым каналом. Во
        время вечерней части мероприятия гостям развозили новогодние подарки силами службы "Дед-мороз на дом". Участники имели 
        возможность писать в прямой эфир, некоторые их вопросы и комментарии зачитывали ведущие с Первого канала, также 
        был осуществлен выход участников из разных точек России в прямой эфир. Закончился вечер розыгрышем главного приза 
        - PS5 и музыкальной программой от группы "Фрукты"</p>`
    },
    {
        id: 6,        
        title: 'NSP Будапешт',
        picsFolder: 'nsp_budapesht',
        pics: [1,2,3,4,5,6,7,8,9],
        dateData: '<b>01-06.04.2019 г.</b>',
        membersData: '<b>Количество участников</b> – 220',
        spectators: '',
        details: `<p><b>Поставленные задачи:</b></p>
        <p>Организовать проведения международной конференции: визовая поддержка, размещение, питание, трансферы, экскурсии,
        торжественный гала-ужин. Реализация программы мероприятия в основные дни проведения конференции.</p>
        <p><b>Предложенные решения поставленных задач:</b></p>
        <p>Для размещения группы были выбраны 2 отеля Будапешта, так как один отель не мог принять всю группу сразу. 
        Основной отель был выбран исходя из расположения, цены и наличия конференц-зала, способного принять программу конференции и зала под закрывающий гала-ужин в последний день.
        В первый день заезда была организована обзорная экскурсия по Будапашету. Во второй - конференция с приглашенным VIP-спикером из Москвы, для которой были заказаны отдельные бизнес-машины. После завершения научной части проходил банкет на корабле. 
        Для этого был арендован причал на Дунае и корабль. Во время гала-ужина на корабле играли местные фолк-ансамбли, а гостям предлагали традиционные Венгерские блюда и напитки. 
        Во время второго дня конференции были подведены итоги прошедшего года, награждены лучшие сотрудники компании, проведен КВН с участием сотрудников компании и лотерея. Были разыграны и подарены сувениры, разработанные специально под Венгрию - в цветах флага и с писпользованием национальных символов. На закрытие конференции был подан торт с логотипом компании, который стал финальным аккордом научной части.
        На закрывающий гала-ужин был переоборудован зал, приглашен ведущий из России и диджей из Венгрии, которые весь вечер сочетали любимые русские песни с хитами Венгреской эстрады. 
        На следующий день был организован выезд во всемирноизвестные термальные источники Сечень - для этого баня была выкуплена под закрытие под наших участников.
        Оттуда гостей на нескольких автобусах вывезли в ресторан национальной кухни на обед, который так же был выкуплен для нашей группы.</p>`
    },
    {
        id: 7,
        title: 'NSP Турция',
        picsFolder: 'nsp_turkey',
        pics: [1,2,3,4,5,6,7,8,9],
        dateData: '12-17.04.2021 г.',
        membersData: '<b>Количество участников</b> – 130',
        spectators: '',
        details: `
        <p><b>Поставленные задачи:</b></p>
        <p>Организовать проведение международной конференции в честь открытия турецкого филиала компании: размещения, питание, трансферы, торжественное открытие офиса</p>
        <p><b>Предложенные решения поставленных задач:</b></p>
        <p>
        Для размещения группы был выбран отель 5*, работающий по системе Ultra all-inclusive,
        Calista Luxury Resort, входящая в топ-5 отелей на Средиземноморском побережье. Отель выбирали,
        исходя из пожеланий заказчика по бюджету, расположению и доп.услуг. Плюс было необходимо наличие конференц-зала
        с определенными требованиями под официальную часть программы. Всем участникам мероприятия были подготовлены
        и вручены пакеты участника, включащие в себя раздаточные материалы с символикой мероприятия и символические
        турецкие сувениры - рахат-лукум и фески. За 2 дня конференции были подведены итоги прошедшего финансового года,
        награждены лучшие сотрудники, опробованы в игровом формате новые методики и способы увеличения уровня продаж.
        Торжественная часть в офисе включала в себя приветственное шампанское, речь владельцев компании и символическое
        разрезание красной ленты, означающее открытие филиала в Анталье.</p>`
    },
    {
        id: 8,
        title: 'ВТБ-Регистратор',
        picsFolder: 'vtb_kazan',
        pics: [1,2,3,4,5,6,7,8,9],
        dateData: '28.07.2020 г.',
        membersData: '<b>Количество участников</b> – 80',
        spectators: '',
        details: `<p><b>Поставленные задачи:</b></p>
        <p>Организация и проведение корпоративного мероприятия в Казани.</p>
        <p><b>Предложенные решения поставленных задач:</b></p>
        <p> Для размещения группы был выбран один из лучших отелей Казани - Казанская Ривьера. 
        Накануне мероприятия была осуществлен выдача welcome-подарков для участников мероприятия. 
        Кроме официальной части гостей мероприятия ждала обзорная экскурсия по Казани, которая закончилась
        в национальном музее Туган Авалым, где гости разделились на несколько групп и принимали участие в
        различных творческих мастер-классах. После их ждал обед, во время которого выступали фольклорные 
        исполнители: музыканты, певцы, танцоры. Гости могли принять участие в различных интерактивных номерах и примерить на себя национальные костюмы. 
        На следующий день, после проведения конференции, программа мероприятия завершалась торжественным 
        гала-ужином с приглашенным ведущим из Москвы - Александром Касаткиным, актером театра и кино. Тематический вечер 
        в стиле кругосветного путешествия включал в себя также и  заранее подготовленные выступления участникаов из разных
        регионов РФ и позволял гостям необычно и интереснее всего презентовать свой регион.</p>`
    },

    {
        id: 9,
        title: 'Ресо Гарантия',
        dateData: '',
        picsFolder: 'reso',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12],
        membersData: '<b>Количество участников</b> – 1500',
        spectators: '',
        details: `Перед нами стояла задача провести обучение более тысчи региональных сотрудников
        Компании в рамках Ежегодного Мегафеста. Было необходимо полностью обеспечить проживание 1200 человек,
        обеспечить логистику траспортного обслуживания, полное
        техническое обеспечение мероприятия. Составить полный сценарий мероприятия.`
    },

    {
        id: 10,
        title: 'Компания Треолан',
        dateData: '',
        picsFolder: 'treolan',
        pics: [1,2,3,4,5,6,7,8,9,10],
        membersData: '<b>Количество участников</b> – 1500',
        spectators: '',
        details: `Была задача организовать барбекю, с элементами тимбилдинга. 
        Предложили заказчику провести такое мероприятие на природе, на берег Пироговского водохранилища. 
        На площадку были привезены спортивные сооружения, батуты, спортивный инвентарь. Также для желающих орагнизовали кулинарное шоу. 
        Само мероприятие длилось на протяжении 8 часов.`
    },

    {
        id: 11,
        title: 'Компания Пропеллер',
        dateData: '',
        picsFolder: 'propeller',
        pics: [1,2,3,4,5,6,7,8,9,10],
        membersData: '<b>Количество участников</b> – 250',
        spectators: '',
        details: `Была поставлена цель провести юбилей компании. Необходимо было задействовать звезд эстрады.
        Была произведена масштабная застройка свободного пространства отеля. Организовали полный цикл развлекательной
        программы включая шоу Ходулистов, несколько станций фудкорта, полный дизайн отеля под фирменный стиль Компании
        заказчика, звезд эстрады и прочее.`
    },

    {
        id: 12,
        title: 'Италкосметика',
        dateData: '',
        picsFolder: 'polix_beauty',
        pics: [1,2,3,4,5,6,7],
        membersData: '<b>Количество участников</b> – 250',
        spectators: '',
        details: `Помимо празднования юбилея Компания было необходимо провести презентацию нового продукта. 
        Так как деловая программа была в одном отеле, а развлекательная часть в другом отеле, нами была выстроена 
        грамотная логистика. Необходимо было разделить людей на потоки, перевести их с завода производителя в отель для
        продолжения деловой программы и затем организовать доставку гостей в другой отель, где кроме банкетной и развлекательной
        программы, гости также проводили рабочие встречи и конференции.`
    },
    {
        id: 13,
        title: 'Открытая пленарная дискуссия ATOM SKILLS',
        picsFolder: 'atom_skills_discussion',
        pics: [1,2,3,4,5,6,7,8],
        dateData: '<b>24.07.2020 г.</b>',
        membersData: '<b>На площадке</b> – 18 в кадре, 27 за кадром',
        spectators: '<b>Посмотрели онлайн</b> – 4000+',
        details: `
        <ul>
            <li>Пленарное заседание онлайн</li>
            <li>Один съемочный день</li>
            <li>Дизайн и профессиональная застройка студии</li>
            <li>Полное техническое сопровождение</li>
            <li>Подключение удаленных спикеров</li>
            <li>Синхронный перевод на два языка в прямой эфир</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Кейтеринг и гример</li>
        </ul>`
    },
    {
        id: 14,
        title: 'Второй Молодежный Слет дивизиона «Электроэнергетический»',
        picsFolder: 'elektroenergeticheskiy',
        pics: [1,2,3,4,5,6,7],
        dateData: '16 - 17.07.2020 г.',
        membersData: 'На площадке – 18 в кадре, 27 за кадром',
        spectators: 'Посмотрели онлайн – 1400+ человек',
        details: `
        <ul>
            <li>Два съемочных дня</li>
            <li>Две оборудованных студии</li>
            <li>Полное техническое сопровождение</li>
            <li>Дизайн и застройка двух студий под молодежную тематику</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Прямой эфир с подключением удаленных спикеров</li>
            <li>Брендированный сайт мероприятия</li>
            <li>Закрытая трансляция, доступ по регистрации</li>
            <li>Адаптивный интерфейс плеера, просмотр на любом устройстве</li>
            <li>Интерактив для зрителей: чат, опросы, голосование</li>
            <li>Развлекательная зона: онлайн-бар и диджей</li>
            <li>Кейтеринг и гример</li>
        </ul>`
    },
    {
        id: 15,
        title: 'Церемония открытия чемпионата ATOM SKILLS',
        picsFolder: 'atom_skills_open',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
        dateData: '24.07.2020 г.',
        membersData: 'На площадке – 26 в кадре, 32 за кадром',
        spectators: 'Посмотрели онлайн – 9000+',
        details: `
        <ul>
            <li>Церемония открытия онлайн</li>
            <li>Один съемочный день</li>
            <li>Профессиональное оборудование</li>
            <li>Дизайн и застройка студии</li>
            <li>Сценарный план и сборка эфира</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Приглашенные артисты и шоу-программа</li>
            <li>Кейтеринг и гример</li>
        </ul>`
    },
    {
        id: 16,
        title: 'Деловая программа ATOM SKILLS',
        picsFolder: 'atoms_skills_business',
        pics: [1,2,3,4,5,6,7,8],
        dateData: '19.08.2020 г.',
        membersData: 'Было в студии - 6 в кадре, 19 за кадром',
        spectators: 'Посмотрели онлайн - 1000+',
        details: `
        <ul>
            <li>Две оборудованные студии</li>
            <li>Полное техническое сопровождение</li>
            <li>Дизайн и застройка студии под формат мероприятия</li>
            <li>Развлекательная зона: онлайн-бар и диджей</li>
            <li>Графическое оформление эфира: заставки, плашки, титры</li>
            <li>Подключение удаленных спикеров</li>
            <li>Брендированный сайт мероприятия</li>
            <li>Закрытая трансляция, доступ по регистрации</li>
            <li>Адаптивный интерфейс плеера, просмотр на любом устройстве</li>
            <li>Интерактив для зрителей: чат, опросы, голосование</li>
            <li>Кейтеринг и гример</li>
        </ul>`
    },
    {
        id: 17,
        title: 'Бизнес-завтрак «кухня» инноваций ATOM SKILLS',
        picsFolder: 'atom_skills_breakfast',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        dateData: '28.07.2020 г.',
        membersData: 'На площадке – 14 в кадре, 38 за кадром',
        spectators: 'Посмотрели онлайн – 3500+',
        details: `
            <ul>
                <li>Бизнес-завтрак в онлайн формате</li>
                <li>Один съемочный день</li>
                <li>Две оборудованные кулинарные студии</li>
                <li>Телемост между двумя городами: Москва - Екатеринбург</li>
                <li>Приглашенные шеф-повара</li>
                <li>Коллаборация телешоу и бизнес-встречи</li>
                <li>Сценарный план и сборка эфира</li>
                <li>Графическое оформление эфира: заставки, плашки, титры</li>
                <li>Кейтеринг и гример</li>
            </ul>
        `
    },

    {
        id: 18,
        title: 'Мероприятие по развитию направления «Каракури»',
        dateData: '18.08.2020 г',
        picsFolder: 'karakuri',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        membersData: 'Было в студии - 7 в кадре, 22 за кадром',
        spectators: 'Посмотрели онлайн - 1000+',
        details: `
            <ul>
                <li>Одна оборудованная студия</li>
                <li>Полное техническое сопровождение</li>
                <li>Дизайн и застройка студии под формат мероприятия</li>
                <li>Графическое оформление эфира: заставки, плашки, титры</li>
                <li>Подключение удаленных спикеров</li>
                <li>Брендированный сайт мероприятия</li>
                <li>Закрытая трансляция, доступ по регистрации</li>
                <li>Адаптивный интерфейс плеера, просмотр на любом устройстве</li>
                <li>Интерактив для зрителей: чат, опросы, голосование</li>
                <li>Кейтеринг и гример</li>
            </ul>
        `
    },
    {
        id: 19,
        title: 'Опен Майнд Консалтинг (Тренинг Александра Палиенко)',
        picsFolder: 'open_mind_consulting',
        pics: [1,2,3],
        dateData: '',
        membersData: '50-60 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Radisson Rosa Khutor, 2020 и Гранд Отель Поляна</b></p>
            <p>Формат мероприятия: <b>Тренинг</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Перед нами стояла задача организовать площадку для тренинга,
            настроить систему бронирования по промокоду для участников мероприятия,
            так же организовать и подобрать площадку для тренинга, обеспечить индивидуальное
            бронирование каждого гостя.
            </p>
        `
    },
    {
        id: 20,
        title: 'АО Медицина (клиника академика Ройтберга) – многопрофильный медицинский центр',
        picsFolder: 'ao_medicina',
        pics: [1,2,3],
        dateData: '',
        membersData: '20 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Этномир, Radisson Zavidovo</b></p>
            <p>Формат мероприятия: <b>Ежегодная конференция ведущих специалистов</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Задача провести мероприятие на площадке, которую заказчик подобрал сам. Подбор отеля, организация конференции, банкета.</p>
        `
    },
    {
        id: 21,
        title: 'Суши Даром',
        picsFolder: 'sushi_darom',
        pics: [1,2,3,4],
        dateData: '',
        membersData: '75 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Панорама by Mercure</b></p>
            <p>Формат мероприятия: <b>Обучение владельцев ресторанов сети Суши Даром</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация тренинга, нараждение лучших владельцев ресторанов.</p>
        `
    },
    {
        id: 22,
        title: 'ООО «Сканди-Финлэнд»',
        picsFolder: 'skandi_finland',
        pics: [1,2,3],
        dateData: '',
        membersData: '70 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Bridge Resort</b></p>
            <p>Формат мероприятия: <b>Показ новой коллекции</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Задача подобрать площадку для показа новой коллекции, сделать застройку.</p>
        `
    },
    {
        id: 23,
        title: 'Школа продюсера Татьяны Маричевой',
        picsFolder: 'shkola_t_marichevoy',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12],
        dateData: '',
        membersData: '300 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Radisson Rosa Khutor</b></p>
            <p>Формат мероприятия: <b>Мероприятие для продюссеров</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Оранизовать площадку для тренинга, 
            настроить систему бронирования в 4х
             отелях курорта Розы Хутор, организация 
             2 вечеринок в разных локациях, организовать
              закрытое мероприятие в аквапарке, массовый 
              спуск на сноубордах, лыжах, хождение по углям.</p>
        `
    },
    {
        id: 24,
        title: 'S.T.I. Dent',
        picsFolder: 'sti_dent',
        pics: [1,2,3,4],
        dateData: '',
        membersData: '120 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Хаятт Сочи</b></p>
            <p>Формат мероприятия: <b>Презентация</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация мероприятия под ключ - конференция, презентация нового продукта, банкет, кавер-группа, ведущий.</p>
        `
    },
    {
        id: 25,
        title: 'LUSH RUSSIA',
        picsFolder: 'lush_russia',
        pics: [1,2,3,4,5,6,7,8,9],
        dateData: '',
        membersData: '63 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Имеретинский Отель</b></p>
            <p>Формат мероприятия: <b>Презентация нового продукта для дикторов магазинов</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Видео конференция с главным европейским офисом, организация мероприятия 
            с учетом бережного отношения к природе - отсутствие пластиковой посуды, заменили
             стеклом, отсутствие пластиковых бутылок, вегетарианское меню.</p>
        `
    },
    {
        id: 26,
        title: 'Салон на миллион',
        picsFolder: 'salon_na_million',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
        dateData: '',
        membersData: '100 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Бархатные Сезоны</b></p>
            <p>Формат мероприятия: <b>Фитнес-тренинг</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация конференции для теоретической части, площадок на улице для спортивных тренировок, фуршет.</p>
        `
    },
    {
        id: 27,
        title: 'АКТР',
        picsFolder: 'aktr',
        pics: [1,2,3,4],
        dateData: '',
        membersData: '250 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Ареал</b></p>
            <p>Формат мероприятия: <b>Ежегодное мероприятие представителей сферы кабельного телевидения</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Наладить систему бронирования для индивидуального бронирования, выстроить программу, чтобы все вечерние мероприятия (банкет, фуршет) проходили в разных залах. Обеспечение рекламной продукцией, брендинг отеля.</p>
        `
    },
    {
        id: 28,
        title: 'PHYSICAL TRANSFORMATION',
        picsFolder: 'physical_transformation',
        pics: [1,2,3,4],
        dateData: '',
        membersData: '180 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Riders Lodge</b></p>
            <p>Формат мероприятия: <b>Спортивное мероприятие</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Подбор отеля на территории Розы Хутор с доступом к открытой спортивной площадке.</p>
        `
    },
    {
        id: 29,
        title: 'ПЛАУТ КОНСАЛТИНГ',
        picsFolder: 'plaut_consulting',
        pics: [1,2,3,4,5,6,7,8,9],
        dateData: '',
        membersData: '120 чел.',
        spectators: '',
        details: `
            <p>Место проведения: <b>Меркюр Сочи Центр</b></p>
            <p>Формат мероприятия: <b>Внутреннее мероприятие для сотрудников</b></p>
            <p><b>Цели/задачи:</b></p>
            <p>Организация мероприятия под ключ: проживание, конференция, брендирование, трансфер, экскурсионная программа, квест на территории олимпийского парка, квиз.</p>
        `
    },
    ]
})

export const mutations = {
    changeEventData(state, data) {
        state.eventForm = data
    }
}

export const actions = {
    changeEventData({state}, data) {

        this.commit('changeEventData', data.data)
    }
}