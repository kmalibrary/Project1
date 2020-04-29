function booksTable(mongoose,app){
    //section for books
    let bookCounter = 100;

    let bookSchema = new mongoose.Schema({
<<<<<<< HEAD
        id: Number,
=======
        id: {
            type: Number,
            default: ++bookCounter
        },
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
        promocode:  {
            type: String,
            required: true
        },
        icon:  {
            type: String,
            required: [1, "Немає зображення"],
            default: 'assets/images/reader.png'
        },
        title:  {
            type: String,
            required: [1, "Невідомо"],
            default: 'невідомо'
        },
        author:  {
            type: String,
            required: [1, "Невідомо"],
            default: 'невідомо'
        },
        cycle: String,
        type:  {
            type: String,
            required: [1, "Невідомо"],
            default: 'невідомо'
        },
        genre: [{
            type: String,
            required: [1, "Невідомо"],
            default: 'невідомо'
        }],
        status: String,
        minAge: {
            type: String,
            default: '0+'
        },
        price: {
            type: Number,
            min:0,
            max:1000
        },
        currency:  {
            type: String,
            required: true,
            default: 'грн'
        },
        reviews: [
            {
                authorName: {
                    type: String,
                    default: 'невідомо'
                },
                comment: {
                    type: String,
                    default: 'Це було неймовірно'
                }
            }
        ],
        description:  {
            type: String,
            required: true,
            default: 'невідомо'
        },
        is_new: Boolean,
        is_popular: Boolean,
        locationNote: String,
        location: String,
        authorNote: String,
        file: String
    });
    const Book = mongoose.model('Books', bookSchema);
    const book1 = new Book({
        id:1,
        promocode: "111",
        price: 100,
        currency:"грн",
        icon:'assets/images/books/book-1.jpg',
        title: "Воно",
        author: "Стівен Кінг",
        cycle:"Деррі",
        type: 'Роман',
        genre: ["Жахи","Фантастика"],
        minAge: '16+',
        status: "Завершено",
        description: "Колись давно семеро підлітків лицем до лиця зіткнулися " +
            "із невимовним Жахом — і змогли перемогти. Але багато років по тому істота," +
            " що не має імені, повертається, щоб помститися… Воно наче випірнуло з нічних кошмарів. " +
            "Воно живиться страхом і ненавистю. Воно причаїлося всюди… " +
            "Старі друзі мусять зустрітися з Ним і знову зазирнути у вічі справжньому жаху…",
        is_new:true,
        is_popular:true,
        location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.4679600129049!2d-79.34183946978696!3d43.67163516675464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9669e4667b%3A0xa5e0896c7ac90e29!2sCranfield%20House!5e0!3m2!1suk!2sua!4v1587805618878!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        note: " Я зведу вас з розуму, а потім уб’ю…",
        content:["Глава 1","Глава 2","Глава 3","Глава 4","Глава 5","Глава 6","Глава 7","Глава 8","Глава 9","Глава 10"],
        file:"assets/books/it-stephen-king.fb2"

    });
    const book2 = new Book({
        id:2,
        promocode: "112",
        price: 120,
        currency:"грн",
        icon:'assets/images/books/book-2.jpg',
        title: "Оповідання про Шерлока Холмса",
        author: "Артур Конан Дойл",
        type: 'Роман',
        genre: "Детектив",
        status: "Завершено",
        minAge: '0+',
        description: "Перу видатного англійського письменника, публіциста і " +
            "журналіста сера Артура Конана Дойла (1859—1930) належать історичні, пригодницькі, " +
            "фантастичні романи. Але у світову літературу він увійшов як творець видатного сищика " +
            "Шерлока Холмса, який володіє дедуктивним методом не гірше, ніж смичком своєї улюбленої скрипки." +
            "Холмс — видатна особистість, людина інтелектуальна, прониклива і енергійна. " +
            "Для нього немає безнадійних справ, йому завжди вдається викрити найзаплутаніші й " +
            "найзагадковіші злочини.Геніальному детективові та його другові доктору Ватсону Дойл " +
            "присвятив понад півсотні творів. До книжки увійшли кілька кращих оповідань.",
        is_popular:true,
        location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2905627170126!2d-0.13909638422934162!3d51.52623027963815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b263987dec3%3A0x9080f2713333fe19!2zMTg3IE4gR293ZXIgU3QsIExvbmRvbiBOVzEgMk5KLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3RltGP!5e0!3m2!1suk!2sua!4v1587805315863!5m2!1suk!2sua\" width=\"400\" height=\"300\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        file:"assets/books/sherlock-holms.fb2"
    });
    const book3 = new Book({
        id:3,
        promocode: "113",
        price: 130,
        currency:"грн",
        icon:'assets/images/books/book-3.jpg',
        title: "Пурпурові вітрила",
        author: "Олександр Грін",
        type: 'Роман',
        genre: "Любовний роман",
        status: "Завершено",
        minAge: '12+',
        description: "Повість-феєрія \"Пурпурові вітрила\" — це зворушлива і романтична казка, " +
            "що підносить силу любові й людського духу, справжня поема про диво, яке творить " +
            "людина своїми руками. В основу роману \"Та, що біжить по хвилях\" покладено романтику моря, " +
            "загадкові історії кораблів, таємничі матроські легенди. Головний герой твору шукає свій ідеал " +
            "і свою мрію і віднаходить справжні скарби духовного життя.\n" +
            "Для дітей середнього і старшого шкільного віку.",
        file:"assets/books/Purpurovi-vitryla.fb2"
    });
    const book4 = new Book({
        id:4,
        promocode: "114",
        price: 140,
        currency:"грн",
        icon:'assets/images/books/book-4.jpg',
        title: "Професія: відьма",
        author: "Ольга Громико",
        type: 'Роман',
        genre: ["Фентезі","Любовний роман"],
        status: "У процесі",
        minAge: '16+',
        description: "Уявіть, що ви - правитель невеликого держави, в якому близько двох тисяч жителів. " +
            "На вас дивляться якщо не як на живе божество, то по , принаймні, як на останню надію всього свого роду. " +
            "Ваше слово для них закон в першій і останній інстанції. Уявили? Ідилію псує тільки якесь чудо-юдо, " +
            "яке ніхто не може зловити, і яке дуже непогано чаклує і харчується як вашими підданими, " +
            "так і заїжджими чаклунами. А яка ж буде ваша реакція, коли на запит про допомогу кваліфікованого мага, " +
            "чарівники, немов у насмішку, надсилають молоду і недосвідчену дівчину? " +
            "Вірно - просто розслабитися і отримувати задоволення. Вже з нею-то ви точно не нудьгуватимете...",
        file:"assets/books/profesiya-vidma.fb2"
    });
    const book5 = new Book({
        id:5,
        promocode: "115",
        price: 150,
        currency:"грн",
        icon:'assets/images/books/book-5.jpg',
        title: "Майстер і Маргарита",
        author: "Михайло Булгаков",
        type: 'Роман',
        genre: ["ХХ століття","Фантастика"],
        status: "Завершено",
        minAge: '16+',
        description: "Роман «Майстер і Марґарита» Михайло Булгаков почав писати 1928 чи 1929 року. " +
            "Серед дійових осіб у першій редакції не було ані Майстра, ані Марґарити. " +
            "На початку 1930 року Булгаков свій незакінчений роман спалив. " +
            "Восени 1932-го письменник повертається до роботи над головним твором свого життя. " +
            "Авторська правка роману триває з перервами до останніх днів. " +
            "Роман став класикою світової літератури, витримав багатомільйонні тиражі у нас і за кордоном. " +
            "Його перекладено багатьма мовами Європи, Америки, Азії, неодноразово інсценовано і екранізовано. " +
            "На його сюжет створено музичні твори, опери і балети. Тріумфальна хода безсмертної сатиричної  " +
            "фантасмагорії-феєрії з геніальною вставною новелою про Христа і Пілата продовжується!",
        file:"assets/books/maister-i-margarita.fb2"
    });
    const book6 = new Book( {
        id:6,
        promocode: "116",
        price: 160,
        currency:"грн",
        icon:'assets/images/books/book-6.jpg',
        title: "Ловець у житі",
        author: "Джером Девід Селінджер",
        type: 'Роман',
        genre: "ХХ століття",
        status: "Завершено",
        minAge: '16+',
        description: "Хто він, Голден Колфілд? Бунтар? Ні. Філософ, який дав світові якесь нове вчення? Ні. Супермен, " +
            "який урятував людство від страшенної небезпеки? Ні. Він просто 17-річний хлопчина, який утік зі школи. " +
            "Він бачить світ та суспільство такими, якими вони є насправді. І тому з тих пір, коли вперше був " +
            "опублікований роман Джерома Д. Селінджера «Ловець у житі», Голден Колфілд є героєм для багатьох поколінь " +
            "молоді, яка не хоче жити в рамках, що ставлять дорослі.",
        file:"assets/books/catcher-in-the-rye.fb2"
    });
    const book7 = new Book({
        id:7,
        promocode: "117",
        price: 170,
        currency:"грн",
        icon:'assets/images/books/book-7.jpg',
        title: "Академія проклять",
        author: "Елена Звездная",
        type: 'Роман',
        genre: ["Фентезі","Фантастика","Любовний роман"],
        status: "Заморожено",
        minAge: '16+',
        description: "Ніколи не проклинайте власного директора прокляттям невідомого вам властивості, та ще й " +
            "десятого рівня! Ніколи! Особливо якщо ви проста адептка Академії прокльонів, а він наймогутніший лорд " +
            "Темної імперії! Адже зробивши подібну дурість, ви можете запустити цілий ланцюг дивних подій ... " +
            "Наприклад, проклятий вами лорд Ріан Т'єр раптово почне вас переслідувати, надаючи недвозначні знаки " +
            "уваги, смертельні прокляття одне за іншим як з рогу достатку посиплються на нещасних жителів Ардама, а " +
            "в Прикордоння з'явиться серійний вбивця, що вибирає в жертви дівчат, так схожих на вас. І якщо від вбивці " +
            "теоретично втекти можна, то шансів піти від магістра Тьєра - жодного!\n" +
            "Адже темні лорди завжди домагаються свого ...",
        file:"assets/books/akademiia-prokliatii-knigi.fb2"
    });
    const book8 = new Book({
        id:8,
        promocode: "118",
        price: 180,
        currency:"грн",
        icon:'assets/images/books/book-8.jpg',
        title: "Вірні вороги",
        author: "Ольга Громико",
        type: 'Роман',
        genre: ["Фентезі","Фантастика","Любовний роман"],
        status: "Заморожено",
        minAge: '16+',
        description: "Це - казка, розказана зимової ночі. Веселе і сумне оповідання про ворожнечу і дружбу, магії і " +
            "кмітливості, шляхетність і зраду, любов і ненависть, між якими один крок по глибокому снігу. Це - шматочок " +
            "белорской історії, який не потрапив в літопис, але оспіваний в легендах. А що в ній брехня і що правда - " +
            "нехай залишиться на совісті автора ...",
        file:"assets/books/virni-vorohy.fb2"
    });
    const book9 = new Book({
        id:9,
        promocode: "119",
        price: 190,
        currency:"грн",
        icon:'assets/images/books/book-9.jpg',
        title: "Володар перснів",
        author: "Джон Роналд Руел Толкін",
        type: 'Роман',
        genre: ["Фентезі","Фантастика"],
        status: "Завершено",
        minAge: '12+',
        description: "«Володаря Перстенів» не можна описати кількома словами. Величний твір Дж. Р. Р. Толкіна " +
            "має в собі щось від героїчної романтики і класичної наукової фантастики. Але таке означення все ж не " +
            "передає сучасному читачеві всі особливості книги, весь спектр її значень. Почергово то комічна й домашня, " +
            "то епічна, а подекуди навіть страхітлива оповідь переходить через нескінченні зміни сцен і характерів у" +
            " цьому фантастичному світі, кожен елемент якого виглядає цілком реалістично. Толкін створив нову " +
            "міфологію вигаданого світу — світу із власним часом і простором.",
        file:"assets/books/Volodar_Persniv_1.fb2"
    });
    const book10 = new Book({
        id:10,
        promocode: "110",
        price: 100,
        currency:"грн",
        icon:'assets/images/books/book-28.jpg',
        title: "Аутсайдер",
        author: "Стівен Кінг",
        cycle:"Деррі",
        type: 'Роман',
        genre: ["Жахи","Фантастика"],
        minAge: '18+',
        status: "Завершено",
        description: "Тренер молодіжної бейсбольної команди, викладач англійської, чоловік та батько двох доньок." +
            "Усе це про Террі. Так, про таких кажуть «класний чувак», з таким усі хочуть дружити і такому не бояться позичити грошей." +
            "Так, Террі крутий. А ще — убивця. Це ж він вчинив ту моторошну наругу над нещасним одинадцятирічним хлопчиком? Так, він." +
            "Хто б міг подумати, Террі, хто б міг подумати… Поліція має усі докази. А Террі — залізобетонне алібі: на момент убивства він перебував у іншому місті." +
            "Та як людина може бути у двох місцях одночасно ? ",
        is_new:true,
        is_popular:true,
        location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.4679600129049!2d-79.34183946978696!3d43.67163516675464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9669e4667b%3A0xa5e0896c7ac90e29!2sCranfield%20House!5e0!3m2!1suk!2sua!4v1587805618878!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        note: " Book ",
        content:["Глава 1","Глава 2","Глава 3","Глава 4","Глава 5","Глава 6","Глава 7","Глава 8","Глава 9","Глава 10"],
        file:"assets/books/Autsayder.fb2"

    });
    const book11 = new Book( {
        id:11,
        promocode: "0111",
        price: 101,
        currency:"грн",
        icon:'assets/images/books/book-11.jpg',
        title: "Ловець снів",
        author: "Стівен Кінг",
        cycle:"Деррі",
        type: 'Роман',
        genre: ["Жахи","Фантастика"],
        minAge: '18+',
        status: "Завершено",
        description: "Збираючись на традиційне спільне полювання, четверо друзів не здогадувались," +
            "що для декого з них воно стане останнім у житті. Бо тепер здобиччю стали вони:" +
            "для інопланетної сутності, якій потрібні носії, щоб захопити ще одну планету, і для навіженого полковника Курца — професійного" +
            "майстра вбивства, яке він називає зачисткою. Єдиним шансом на порятунок стають незвичайні здібності чоловіка із синдромом Дауна," +
            "якого друзі врятували в дитинстві. Але чи вистачить цього, щоб перемогти супротивника настільки чужорідно-ворожого, " +
            "якого поєднує з людством тільки здатність убивати? ",
        is_new:true,
        is_popular:true,
        location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.4679600129049!2d-79.34183946978696!3d43.67163516675464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9669e4667b%3A0xa5e0896c7ac90e29!2sCranfield%20House!5e0!3m2!1suk!2sua!4v1587805618878!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        note: " Book ",
        content:["Глава 1","Глава 2","Глава 3","Глава 4","Глава 5","Глава 6","Глава 7","Глава 8","Глава 9","Глава 10"],
        file:"assets/books/Lovec-sniv.fb2"

    });
    const book12 = new Book({
        id:12,
        promocode: "121",
        price: 102,
        currency:"грн",
        icon:'assets/images/books/book-12.jpg',
        title: "Франкенштейн",
        author: "Мері Шеллі",
        cycle:"От такий цикл",
        type: 'Роман',
        genre: "Жахи",
        minAge: '18+',
        status: "Завершено",
        description: "Задуманий і розпочатий в ході творчого змагання в творі страшних історій на швейцарській віллі Діодаті" +
            "в червні 1816 року ініційованого лордом Байроном, дебютний роман англійської письменниці Мері Шеллі став" +
            "одним із шедеврів романтичної готики і разом з тим відправною точкою науково-фантастичної традиції в прозі" +
            "Нового і новітнього часу.",
        is_new:true,
        is_popular:true,
        location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.4679600129049!2d-79.34183946978696!3d43.67163516675464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb9669e4667b%3A0xa5e0896c7ac90e29!2sCranfield%20House!5e0!3m2!1suk!2sua!4v1587805618878!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        note: " Book ",
        content:["Глава 1","Глава 2","Глава 3","Глава 4","Глава 5","Глава 6","Глава 7","Глава 8","Глава 9","Глава 10"],
        file:"assets/books/Frankenshtein.fb2"

    });
    const book13 = new Book({
        id:13,
        promocode: "131",
        price: 103,
        currency:"грн",
        icon:'assets/images/books/book-13-17.jpg',
        title: "Гонча смерті",
        author: "Агата Крісті",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '12+',
        description: "До книги увійшли дванадцять оповідань Агати Крісті, об'єднаних в авторський збірник «Гонча смерті»." +
            "Найзнаменитіший розповідь збірки - «Свідок звинувачення» - був перероблений в п'єсу. Однойменний фільм-екранізація цієї розповіді / п'єси було" +
            "знято в 1957 році і вважається одним з кращих детективних фільмів в історії кіно. Головну роль у фільмі виконала велика Марлен Дітріх.",
        file:"assets/books/book-13.fb2"

    });
    const book14 = new Book({
        id:14,
        promocode: "141",
        price: 104,
        currency:"грн",
        icon:'assets/images/books/book-13-17.jpg',
        title: "Вілла Білий кінь",
        author: "Агата Крісті",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '12+',
        description: "Череда таємничих нещасних випадків - або древнє чаклунство?" +
            "Ритуали чорної магії - або злочину, геніально задумані і ретельно сплановані?" +
            "Вбивство є вбивство. Там, де воно відбувається, обов'язково знайдеться зачіпка або доказ." +
            "Хоча б одна нитка, за яку можна потягнути ...",
        file:"assets/books/book-14.fb2"
    });
    const book15 = new Book({
        id:15,
        promocode: "151",
        price: 150,
        currency:"грн",
        icon:'assets/images/books/book-13-17.jpg',
        title: "Другий удар Гонгу",
        author: "Агата Крісті",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '12+',
        description: "В цю книгу увійшло вісім оповідань Агати Крісті."+
            "У деяких з них читач зустрінеться з улюбленими детективами королеви детектива - Паркером Пайном,"+
            "Харлі Кином, Еркюль Пуаро. Деякі - цілком самостійні і наочно демонструють, як складний детективний сюжет " +
            "можна розвинути в такому невеликому обсязі тексту.",
        file:"assets/books/book-15.fb2"
    });
    const book16 = new Book({
        id:16,
        promocode: "161",
        price: 160,
        currency:"грн",
        icon:'assets/images/books/book-13-17.jpg',
        title: "Убивство у прохідному дворі",
        author: "Агата Крісті",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '12+',
        description: "В орендованому будинку знайдено труп застреленої молодої жінки, вдови. У наявності всі ознаки самогубства: зачинені двері, пістолет в руці загиблої ... Однак доктор, який обстежив тіло на місці, сильно сумнівається в цьому. Адже пістолет затиснутий у правій руці, а рана знаходиться з лівого боку голови. Пуаро також не вірить у версію самогубства, особливо коли з'ясовує, що відбитки пальців з зброї були попередньо ретельно стерті, а з дому пропала велика сума грошей. Але хто ж тоді вбив? І Пуаро починає складати коло підозрюваних ...",
        file:"assets/books/book-16.fb2"
    });
    const book17 = new Book({
        id:17,
        promocode: "171",
        price: 170,
        currency:"грн",
        icon:'assets/images/books/book-13-17.jpg',
        title: "Сильнодіючі ліки",
        author: "Артур Хейлі",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '6+',
        description: "Це роман про фармацевтичної компанії і про людей, які в ній працюють."+
            "Про те, як особисті амбіції, недбалість і фальсифікація в таких компаніях гублять життя, калічать ні в чому не винних людей...",
        file:"assets/books/book-17.fb2"
    });
    const book18 = new Book({
        id:18,
        promocode: "181",
        price: 180,
        currency:"грн",
        icon:'assets/images/books/book-17-20.jpg',
        title: "Міняли",
        author: "Артур Хейлі",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '1+',
        description: "Бестселер знаменитого американського письменника Артура Хейлі «Міняли» через напружений сюжет розповідає про долю великого банку, який став жертвою фінансової афери і підступів мафії.",
        file:"assets/books/book-18.fb2"
    });
    const book19 = new Book({
        id:19,
        promocode: "191",
        price: 190,
        currency:"грн",
        icon:'assets/images/books/book-17-20.jpg',
        title: "Вечірні новини",
        author: "Артур Хейлі",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '4+',
        description: "«Вечірні новини» - це книга, яка розповідає широкому колу читачів про талановитих і безстрашних журналістів і про жорстоку конкуренцію серед телевізійних каналів. У центрі сюжету - викрадення дружини, сина і старого батька відомого телеведучого, і подальше журналістське розслідування, мета якого - допомогти знайти заручників і визволити їх з полону терористів.",
        file:"assets/books/book-19.fb2"
    });
    const book20 = new Book({
        id:20,
        promocode: "201",
        price: 200,
        currency:"грн",
        icon:'assets/images/books/book-17-20.jpg',
        title: "Аеропорт",
        author: "Артур Хейлі",
        type: 'Роман',
        genre: ["Детектив","ХХ століття"],
        status: "Заморожено",
        minAge: '0+',
        description: "Роман сучасного американського письменника А. Хейлі «Аеропорт» відтворює атмосферу роботи великого адміністративно-виробничого комплексу. Книга привертає увагу достовірністю і жвавістю описів, досконалим знанням матеріалу, високою професійною майстерністю.",
        file:"assets/books/book-20.fb2"
    });
    const book21 = new Book({
        id:21,
        promocode: "211",
        price: 110,
        currency:"грн",
        icon:'assets/images/books/book-21.jpeg',
        title: "Гаррі Поттер і філософський камінь",
        author: "Дж.К.Роулінг",
        type: 'Роман',
        genre: "Фентезі",
        status: "Заморожено",
        minAge: '6+',
        description: "Українські переклади книжок про Гаррі Поттера вважаються одними з найкращих у світовій поттеріані."+
            "Ексклюзивні обкладинки українського Поттера багато фахівців визнають взагалі найкращими…",
        file:"assets/books/book-21.fb2"
    });
    const book22 = new Book({
        id:22,
        promocode: "221",
        price: 120,
        currency:"грн",
        icon:'assets/images/books/book-22.jpeg',
        title: "Гаррі Поттер і келих вогню",
        author: "Дж.К.Роулінг",
        type: 'Роман',
        genre: "Фентезі",
        status: "Заморожено",
        minAge: '6+',
        description: "Попереду у Гаррі Поттера четвертий рік навчання у Гоґвортській школі чарів і чаклунства, на яку несподівано насувається дивовижна подія — Тричаклунський турнір. І, на жаль, не лише він...",
        file:"assets/books/book-22.fb2"
    });
    const book23 = new Book({
        id:23,
        promocode: "231",
        price: 130,
        currency:"грн",
        icon:'assets/images/books/book-23.jpeg',
        title: "Пісня льоду й полум'я",
        author: "Джордж Р. Мартін",
        type: 'Роман',
        genre: "Фентезі",
        status: "Заморожено",
        minAge: '12+',
        description: "Фантастична сага «Пісня льоду й полум’я» давно завоювала серця читачів у всьому світі, перекладена більш як на 20 мов і продається мільйонними накладами. Перша книга циклу — «Гра престолів» — це захопливий світ Сімох Королівств, де літо й зима тривають по кілька років, з півночі наступають загадкові й моторошні вороги, а вельможні родини ведуть ненастанну війну за престол.",
        file:"assets/books/book-23.fb2"
    });
    const book24 = new Book({
        id:24,
        promocode: "241",
        price: 140,
        currency:"грн",
        icon:'assets/images/books/book-24.jpeg',
        title: "Три товариші",
        author: "Еріх Марія Ремарк",
        type: 'Роман',
        genre: "ХХ століття",
        status: "Заморожено",
        minAge: '8+',
        description: "«Три товариші» - роман Еріха Марія Ремарка, роботу над яким він почав в 1932 році. Роман був закінчений і опублікований в датському видавництві Gyldendal під назвою «Kammerater» в 1936 році.",
        file:"assets/books/book-24.fb2"
    });
    const book25 = new Book({
        id:25,
        promocode: "251",
        price: 150,
        currency:"грн",
        icon:'assets/images/books/book-25.jpeg',
        title: "По кому подзвін",
        author: "Ернест Хемінгуей",
        type: 'Роман',
        genre: "ХХ століття",
        status: "Заморожено",
        minAge: '12+',
        description: "В одному з кращих своїх романів «По кому подзвін», написаному за враженнями від пережитого в Іспанії в роки Громадянської війни, класик літератури XX століття Ернест Хемінгуей залишився вірним головної теми своєї творчості - темі кохання і смерті, відповідальності людини за все, що відбувається в світі. Змінивши мирну працю викладача на небезпечне заняття підривника, американець Роберт Джордан бореться з франкістами в Іспанії і знаходить свою справжню любов.",
        file:"assets/books/book-25.fb2"
    });
    const book26 = new Book({
        id:26,
        promocode: "261",
        price: 160,
        currency:"грн",
        icon:'assets/images/books/book-26.jpeg',
        title: "Архіпелаг ГУЛАГ",
        author: "Олександр Солженіцин",
        type: 'Роман',
        genre: "ХХ століття",
        status: "Заморожено",
        minAge: '12+',
        description: "Архіпелаг ГУЛАГ - художньо-історичне дослідження Олександра Солженіцина про радянську репресивну систему в період з 1918 по 1956 роки. Словосполучення «Архіпелаг ГУЛАГ» стало прозивним, часто використовується в публіцистиці і художній літературі, в першу чергу по відношенню до пенітенціарної системи СРСР 20-50-х років.",
        file:"assets/books/book-26.fb2"
    });
    const book27 = new Book({
        id:27,
        promocode: "271",
        price: 170,
        currency:"грн",
        icon:'assets/images/books/book-27.jpg',
        title: "Адвокат диявола",
        author: "Ендрю Нейдерман",
        type: 'Роман',
        genre: ["Жахи","Фантастика"],
        status: "Завершено",
        minAge: '12+',
        description: "Я пропоную тобі те, про що ти так давно мріяв. Те, що личить твоїм амбіціям. " +
            "Посада у престижній адвокатській конторі, солідна зарплатня, елітні апартаменти в Нью-Йорку та " +
            "величезні можливості. Що я хочу натомість? Виконуй свою роботу. Добре виконуй. І не став запитань. " +
            "Виправдовуй тих, кого виправдати неможливо: убивць, ґвалтівників, покидьків, маніяків, психів та збоченців. " +
            "Відпускай гріхи найзапеклішим грішникам. Порушуй закони моралі та сумління. Виправдовуй винних. " +
            "Вважаєш, що я зло в людській подобі? Можливо. Але ти - мій співучасник. І всі брудні справи робляться " +
            "твоїми руками. Бо відтепер ти — адвокат диявола…",
        file:"assets/books/advokat-dyavola.fb2"
    });
    const book28 = new Book({
        id:28,
        promocode: "281",
        price: 180,
        currency:"грн",
        icon:'assets/images/books/book-28.jpg',
        title: "Мовчання ягнят",
        author: "Томас Гарріс",
        type: 'Роман',
        genre: ["Жахи","Детектив"],
        status: "Завершено",
        minAge: '12+',
        description: "У пошуках серійного вбивці, який знімає шкіру зі своїх жертв, ФБР звертається за допомогою " +
            "до відомого злочинця — Ганнібала Лектера, що перебуває в ізоляторі психлікарні. Він погоджується взяти " +
            "участь у пошуках убивці, але за однієї умови — він хоче грати. Два маніяки, дві сповіді. Проте, щоб " +
            "дізнатися реальну історію вбивств та врятувати останню жертву, декому потрібно розповісти досить " +
            "пікантні подробиці власного життя. Дозвольте вбивці сповідатися у скоєних злочинах…",
        location:"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41574.82163115601!2d-80.01219368720675!3d40.43140655977296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f16f48068503%3A0x8df915a15aa21b34!2z0J_RltGC0YLRgdCx0YPRgNKRLCDQn9C10L3RgdGW0LvRjNCy0LDQvdGW0Y8sINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1587807694817!5m2!1suk!2sua\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>",
        file:"assets/books/movchannia-yagniat.fb2"
    });

    const booksSet = [book1,book2,book3,book4,book5,book6,book7,book8,book9,book10,book11,book12,book13,
        book14,book15,book16,book17,book18,book19,book20,book21,book22,book23,book24,book25,book26,book27,book28];
    // Book.insertMany(booksSet,function (err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log("Books are added");
    //     }
    // });
    // Book.deleteMany({},function (err){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log("Books are deleted");
    //     }
    // });

<<<<<<< HEAD
    // case for all books
=======
    // case for all genres of books
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
    app.get('/genres.html', function (req,res) {

        Book.find({}, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                Book.insertMany(booksSet,function (err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Books are added");
                    }
                });
                res.redirect("/"); // goes back to this function again
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
<<<<<<< HEAD


=======
    // case for one genre of books
    // app.post('/barGenre', function (req,res) {
    //     var genreName = req.body.Name;
    //     console.log(req.body.Name);
    //     Book.find({genre:genreName}, function (err,books) {
    //         //if there are no genres, default ones will be set
    //         if(books.length === 0){
    //             Book.insertMany(booksSet,function (err){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log("Books are added");
    //                 }
    //             });
    //             res.redirect("/"); // goes back to this function again
    //         } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
    //     });
    // });
    // app.post('/featurGenre', function (req,res) {
    //     var genreName = req.body.Name;
    //     console.log(req.body.Name);
    //     Book.find({genre:genreName}, function (err,books) {
    //         //if there are no genres, default ones will be set
    //         if(books.length === 0){
    //             Book.insertMany(booksSet,function (err){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     console.log("Books are added");
    //                 }
    //             });
    //             res.redirect("/"); // goes back to this function again
    //         } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
    //     });
    // });
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b

    // cases for one genre
    app.get('/horror', function (req,res) {

        Book.find({genre:"Жахи"}, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Ці книжки не було знайдено"})
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
    app.get('/fantasy', function (req,res) {

        Book.find({genre:"Фентезі"}, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Ці книжки не було знайдено"})
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
    app.get('/fantastic', function (req,res) {

        Book.find({genre:"Фантастика"}, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Ці книжки не було знайдено"})
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
    app.get('/lovestories', function (req,res) {

        Book.find({genre:"Любовний роман"}, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Ці книжки не було знайдено"})
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
    app.get('/detectives', function (req,res) {
        Book.find({genre:"Детективи", genre:"Детектив" }, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Ці книжки не було знайдено"})
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
    app.get('/xxcentury', function (req,res) {

        Book.find({genre:"ХХ століття"}, function (err,books) {
            //if there are no genres, default ones will be set
            if(books.length === 0){
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Ці книжки не було знайдено"})
            } else{res.render('Genres', { pageTitle: 'Book House - Genres', genreBooks: books});}
        });
    });
    //TODO
    // case for search book
    app.post('/search', function (req,res) {
        var bookName = req.body.Name;
        console.log(bookName);

        Book.findOne({name:bookName}, function (err,bookOne) {
            if(err){
                console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Цю книжку не було знайдено"})
            } else{res.render('Book', { pageTitle: 'Book House - Book', book: bookOne});}
        });
    });


    //TODO
    // case for searching book
    app.post('/search', function (req,res) {
        var bookName = req.body.Name;
        console.log(bookName);

        Book.findOne({name:bookName}, function (err,bookOne) {
            // if(err){
            //     console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Цю книжку не було знайдено"})
            // } else{res.render('Book', { pageTitle: 'Book House - Book', book: bookOne});}
        });
    });

    // case for sending comment
    // app.post('/send', function (req,res) {
    //     var bookComment = req.body.comment;
    //     var bookTitle = req.body.title;
    //     console.log(req.body.comment);
    //     console.log(req.body.title);
    //
    //     Book.updateOne({title:bookTitle}, function (err,bookOne) {
    //         if(err){
    //             console.log(err);
    //             res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Цю книжку не було знайдено"})
    //         } else{
    //             bookOne.reviews = {authorName: "unknown", comment: bookComment};
    //             bookOne.save();
    //             res.render('Book', { pageTitle: 'Book House - Book', book: bookOne});
    //         }
    //     });
    // });



    // case for one book
<<<<<<< HEAD
    app.post('/', function (req,res) {
        var bookId = req.body.Name;
        console.log(req.body.Name);

        Book.findOne({id:bookId}, function (err,bookOne) {
            if(err){
                console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Цю книжку не було знайдено"})
            } else{res.render('Book', { pageTitle: 'Book House - Book', book: bookOne});}
        });
    });

    // case for a particular book book
    app.get('/book.html', function (req,res) {
        console.log("Stop req");
        console.log(req);
        // console.dir(req.query.book);
        // var bookId = req.query.Name;
        // console.log(req.query.Name);
        // alert(bookId);

        Book.findOne({id:bookId}, function (err,bookOne) {
=======
    app.post('/genreBook', function (req,res) {
        var bookName = req.body.Name;
        console.log(req.body.Name);

        Book.findOne({title:bookName}, function (err,bookOne) {
>>>>>>> 61437d8599adf072e3c90480cf879da8d909a98b
            if(err){
                console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Цю книжку не було знайдено"})
            } else{res.render('Book', { pageTitle: 'Book House - Book', book: bookOne});}
        });
    });

    // case for a particular book book
   /* app.get('/book1.html', function (req,res) {
        console.dir(req.query.book);
        var bookId = req.query.Name;
        console.log(bookId);
        // alert(bookId);

        Book.findOne({id:1}, function (err,bookOne) {
            if(err){
                console.log(err);
                res.render('NotFoundPage', { pageTitle: 'Book House - Not Found Page', message: "Цю книжку не було знайдено"})
            } else{res.render('Book', { pageTitle: 'Book House - Book', book: bookOne});}
        });
    });*/
}
module.exports.booksTable=booksTable;