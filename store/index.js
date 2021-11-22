import axios from 'axios'

export const state = () => ({

    eventForm: [],
    portfolioData: [{
        id: 0,
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
Во второй день фестиваля работали различные зоны развлечений в течении всего дня. Хедлайнером фестиваля выступила группа Little Big, а вечер закрывал праздничный салют.</p>`},
		{
        id: 1,
    	title: 'Nexters Global',
    	picsFolder: 'nexter_new_year',
        pics: [1,2,3,4,5,6,7,8],
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
             - PS5 и музыкальной программой от группы "Фрукты"</p>`},
		{
        id: 2,        
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
         Оттуда гостей на нескольких автобусах вывезли в ресторан национальной кухни на обед, который так же был выкуплен для нашей группы.</p>`},
		{
        id: 3,
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
                разрезание красной ленты, означающее открытие филиала в Анталье.</p>`},
   		{
        id: 4,
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
         регионов РФ и позволял гостям необычно и интереснее всего презентовать свой регион.</p>`},

   		{
        id: 5,
    	title: 'Ресо Гарантия',
    	dateData: '',
    	picsFolder: 'reso',
        pics: [1,2,3,4,5,6,7,8,9,10,11,12],
    	membersData: '<b>Количество участников</b> – 1500',
    	spectators: '',
    	details: [`Перед нами стояла задача провести обучение более тысчи региональных сотрудников
         Компании в рамках Ежегодного Мегафеста. Было необходимо полностью  обеспечить проживание 1200 человек,
          обеспечить логистику  траспортного обслуживания,  полное техничесоке обеспечение мероприятия. Составить полный сценрий мероприятия.`]},

        {
        id: 6,
        title: 'Компания Треолан',
        dateData: '',
        picsFolder: 'treolan',
        pics: [1,2,3,4,5,6,7,8,9,10],
        membersData: '<b>Количество участников</b> – 1500',
        spectators: '',
        details: `Была задача организовать барбекю, с элементами тимбилдинга. 
            Предложили заказчику провести такое мероприятие на природе, на берег Пироговского водохранилища. 
            На площадку были привезены спортивные сооружения, батуты, спортивный инвентарь. Также для желаюзщих орагнизовали кулинарное шоу. 
            Само мероприятие длилось на протяжение 8 часов. `},

        {
        id: 7,
        title: 'Компания Пропеллер',
        dateData: '',
        picsFolder: 'propeller',
        pics: [1,2,3,4,5,6,7,8,9,10],
        membersData: '<b>Количество участников</b> – 250',
        spectators: '',
        details: `Была поставлена цель провести юбилей компании. Необходимо было задействовать звезд эстрады.
         Была произведена масштабная застройка свободного пространства отеля. Организовали полный цикл развлекательной
          программы включая шоу Ходулистов, несколько станций фудкорта, полный дизайн отеля под фирменный стиль Компании
           заказчика, звезд эстрады и прочее.`},

        {
        id: 8,
        title: 'Италкосметика',
        dateData: '',
        picsFolder: 'polix_beauty',
        pics: [1,2,3,4,5,6,7],
        membersData: '<b>Количество участников</b> – 250',
        spectators: '',
        details: `Помимо празднования юбилея Компания было необходимо провести презентацию нового продукта. 
        Так как длеловая программа была в одном отеле, а развлекательная часть в другом отеле ,нами была выстроена 
        грамотная логистика Необходимо было разделить людей на потоки, перевести их с завода производителя в отель для
         продолжения деловой прогрограммы и затем организовать доставку гостей в другой отель, где кроме банкетной и развелкательно
          программы, гости также проводили рабочие встречи и конференции.`}
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