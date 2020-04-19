/**
 * Created by VB
 */


var book_info = [
    {
        id:1,
        icon:'assets/images/books/book-1.jpg',
        title: "Воно",
        author: "Стівен Кінг",
        type: 'Роман',
        genre: "Жахи",
        description: "Колись давно семеро підлітків лицем до лиця зіткнулися " +
            "із невимовним Жахом — і змогли перемогти. Але багато років по тому істота," +
            " що не має імені, повертається, щоб помститися… Воно наче випірнуло з нічних кошмарів. " +
            "Воно живиться страхом і ненавистю. Воно причаїлося всюди… " +
            "Старі друзі мусять зустрітися з Ним і знову зазирнути у вічі справжньому жаху…",
        is_new:true,
        is_popular:true

    },
    {
        id:2,
        icon:'assets/images/books/book-2.jpg',
        title: "Оповідання про Шерлока Холмса",
        author: "Артур Конан Дойл",
        type: 'Роман',
        genre: "Детектив",
        description: "Перу видатного англійського письменника, публіциста і " +
            "журналіста сера Артура Конана Дойла (1859—1930) належать історичні, пригодницькі, " +
            "фантастичні романи. Але у світову літературу він увійшов як творець видатного сищика " +
            "Шерлока Холмса, який володіє дедуктивним методом не гірше, ніж смичком своєї улюбленої скрипки." +
            "Холмс — видатна особистість, людина інтелектуальна, прониклива і енергійна. " +
            "Для нього немає безнадійних справ, йому завжди вдається викрити найзаплутаніші й " +
            "найзагадковіші злочини.Геніальному детективові та його другові доктору Ватсону Дойл " +
            "присвятив понад півсотні творів. До книжки увійшли кілька кращих оповідань.",
        is_popular:true
    },
    {
        id:3,
        icon:'assets/images/books/book-3.jpg',
        title: "Пурпурові вітрила",
        author: "Олександр Грін",
        type: 'Роман',
        genre: "Любовний роман",
        description: "Повість-феєрія \"Пурпурові вітрила\" — це зворушлива і романтична казка, " +
            "що підносить силу любові й людського духу, справжня поема про диво, яке творить " +
            "людина своїми руками. В основу роману \"Та, що біжить по хвилях\" покладено романтику моря, " +
            "загадкові історії кораблів, таємничі матроські легенди. Головний герой твору шукає свій ідеал " +
            "і свою мрію і віднаходить справжні скарби духовного життя.\n" +
            "Для дітей середнього і старшого шкільного віку."
    },
    {
        id:4,
        icon:'assets/images/books/book-4.jpg',
        title: "Професія: відьма",
        author: "Ольга Громико",
        type: 'Роман',
        genre: "Фентезі",
        description: "Уявіть, що ви - правитель невеликого держави, в якому близько двох тисяч жителів. " +
            "На вас дивляться якщо не як на живе божество, то по , принаймні, як на останню надію всього свого роду. " +
            "Ваше слово для них закон в першій і останній інстанції. Уявили? Ідилію псує тільки якесь чудо-юдо, " +
            "яке ніхто не може зловити, і яке дуже непогано чаклує і харчується як вашими підданими, " +
            "так і заїжджими чаклунами. А яка ж буде ваша реакція, коли на запит про допомогу кваліфікованого мага, " +
            "чарівники, немов у насмішку, надсилають молоду і недосвідчену дівчину? " +
            "Вірно - просто розслабитися і отримувати задоволення. Вже з нею-то ви точно не нудьгуватимете...",
    },
    {
        id:5,
        icon:'assets/images/books/book-5.jpg',
        title: "Майстер і Маргарита",
        author: "Михайло Булгаков",
        type: 'Роман',
        genre: "Фантастика",
        description: "Роман «Майстер і Марґарита» Михайло Булгаков почав писати 1928 чи 1929 року. " +
            "Серед дійових осіб у першій редакції не було ані Майстра, ані Марґарити. " +
            "На початку 1930 року Булгаков свій незакінчений роман спалив. " +
            "Восени 1932-го письменник повертається до роботи над головним твором свого життя. " +
            "Авторська правка роману триває з перервами до останніх днів. " +
            "Роман став класикою світової літератури, витримав багатомільйонні тиражі у нас і за кордоном. " +
            "Його перекладено багатьма мовами Європи, Америки, Азії, неодноразово інсценовано і екранізовано. " +
            "На його сюжет створено музичні твори, опери і балети. Тріумфальна хода безсмертної сатиричної  " +
            "фантасмагорії-феєрії з геніальною вставною новелою про Христа і Пілата продовжується!",
    },
    {
        id:6,
        icon:'assets/images/books/book-6.jpg',
        title: "Ловець у житі",
        author: "Джером Девід Селінджер",
        type: 'Роман',
        genre: "ХХ століття",
        description: "Хто він, Голден Колфілд? Бунтар? Ні. Філософ, який дав світові якесь нове вчення? Ні. Супермен, " +
            "який урятував людство від страшенної небезпеки? Ні. Він просто 17-річний хлопчина, який утік зі школи. " +
            "Він бачить світ та суспільство такими, якими вони є насправді. І тому з тих пір, коли вперше був " +
            "опублікований роман Джерома Д. Селінджера «Ловець у житі», Голден Колфілд є героєм для багатьох поколінь " +
            "молоді, яка не хоче жити в рамках, що ставлять дорослі.",
    },
    {
        id:7,
        icon:'assets/images/books/book-7.jpg',
        title: "Академія проклять - Не проклинай свого директора",
        author: "Елена Звездная",
        type: 'Роман',
        genre: "Фентезі",
        description: "Ніколи не проклинайте власного директора прокляттям невідомого вам властивості, та ще й " +
            "десятого рівня! Ніколи! Особливо якщо ви проста адептка Академії прокльонів, а він наймогутніший лорд " +
            "Темної імперії! Адже зробивши подібну дурість, ви можете запустити цілий ланцюг дивних подій ... " +
            "Наприклад, проклятий вами лорд Ріан Т'єр раптово почне вас переслідувати, надаючи недвозначні знаки " +
            "уваги, смертельні прокляття одне за іншим як з рогу достатку посиплються на нещасних жителів Ардама, а " +
            "в Прикордоння з'явиться серійний вбивця, що вибирає в жертви дівчат, так схожих на вас. І якщо від вбивці " +
            "теоретично втекти можна, то шансів піти від магістра Тьєра - жодного!\n" +
            "Адже темні лорди завжди домагаються свого ...",
    },
    {
        id:8,
        icon:'assets/images/books/book-8.jpg',
        title: "Вірні вороги",
        author: "Ольга Громико",
        type: 'Роман',
        genre: "Фентезі",
        description: "Це - казка, розказана зимової ночі. Веселе і сумне оповідання про ворожнечу і дружбу, магії і " +
            "кмітливості, шляхетність і зраду, любов і ненависть, між якими один крок по глибокому снігу. Це - шматочок " +
            "белорской історії, який не потрапив в літопис, але оспіваний в легендах. А що в ній брехня і що правда - " +
            "нехай залишиться на совісті автора ...",
    }
];

module.exports = book_info;