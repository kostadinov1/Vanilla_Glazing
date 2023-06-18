import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources: {
        en: {
            translation: {
            language: "Language",
            home: "Home",
            projects: "Projects",
            product: "Product",
            products: "Products",
            services: "Services",
            contacts: "Contacts",
            companyMoto: "Delivery and Installation of High Quality Windows and Frames",
            companyDescription: "Welcome to Stil Comfort M13 - your hope for high-quality PVC and aluminum windows and doors in Varna, Bulgaria. We are a young company founded in 2017 with the aim of providing our customers with only the best in this area. Our mission is to create spaces where comfort comes first. From home to office, from hotel to restaurant, our products will offer you an improved quality of life. Our PVC and aluminum windows and doors are made from high-quality materials with modern design. We provide delivery and installation of all our products for maximum customer convenience. When it comes to choosing the right window supplier, we are on your side. Our expert knowledge and professional attitude guarantee that your individual needs and desires are met. Let's take care of what matters to you - your safety and comfort. Contact us today and let's work together on the perfect space you deserve.",
            address: "Address",
            phone: "Phone",
            email: "Email",
            h1: "Inspection and Evaluation",
            p1: "When searching for the best solution for the windows and doors in your home or office, it's important to receive a professional opinion and evaluation of your needs. At Style Comfort M13, we provide a free inspection and detailed evaluation for every customer. Our experts will do everything possible to answer all your questions and offer you the best solution for your property.",
            h2: "Planning and Preparation",
            p2: "When it comes to planning and preparing for the window and door project, it's crucial to work with a professional and reliable company. At Style Comfort M13, we're ready to provide you with a individually-made and well-prepared plan for installing your windows and doors. With our wealth of experience and the use of high-quality materials, we guarantee that you'll receive the best solution that will satisfy you for years to come.",
            h3: "Installation",
            p3: "The installation process for your windows and doors is perhaps the most important moment of the whole project. At Style Comfort M13, we understand how important it is to install everything correctly and professionally. That's why we rely on skilled and experienced installers to guarantee the highest quality installation for your windows and doors. Our representatives are here to help you and ensure maximum comfort and quality of service. Style Comfort M13 - your choice for quality windows and doors in Varna!",
            whatWeOffer: "What do We Offer",
            c1: "c",
            c2: "c",
            c3: "c",
            c4: "c",
            }
        },
        bg: {
            translation: {
                language: "Език",
                home: "Начало",
                projects: "Проекти",
                product: "Продукт",
                products: "Продукти",
                services: "Услуги",
                contacts: "Контакти",
                companyMoto: "Доставка и Монтаж на Висококачествена Дограма",
                companyDescription: "Добре дошли в Стил Комфорт М13 - правилният избор за качествена ПВЦ и Алуминиева Дограма във Варна и района. Ние сме млада фирма, основана през 2020 година с цел да предоставим на нашите клиенти само най-доброто в тази област. Нашата мисия е да извършваме услуги, където качеството е на първо място. От дома до офиса, от хотела до ресторанта, нашите продукти ще ви предложат комфорт и качество. Нашите ПВЦ и Алуминиеви дограми са изработени от материали с високо качество и съвременен дизайн. Ние предлагаме доставка и монтаж на всички наши изделия до желаното от Вас място . Когато става въпрос за избор на правилния доставчик на дограма, ние сме на ваша страна. Нашите експертни знания и професионално отношение  гарантират, че вашите индивидуални нужди и желания са удовлетворени. Нека се погрижим за това, което е важно за вас - вашата сигурност и удобство. Свържете се с нас днес и нека започнем да работим заедно за перфектната дограма, която заслужавате.",
                address: "Адрес",
                phone: "Телефон",
                email: "Е-мейл",
                h1: "Оглед и Oценка",
                p1: "Когато търсите най-доброто решение за дограмата на вашето жилище или офис, е важно да получите професионално мнение и оценка на вашите нужди. В Стил Комфорт М13, ние осигуряваме безплатен оглед и детайлна оценка за всеки клиент. Нашите експерти ще направят всичко възможно да отговорят на всички ваши въпроси и да ви предложат най-доброто решение за вашето имущество.",
                h2: "Планиране и подготовка",
                p2: "Когато става въпрос за планирането и подготовката на проекта за дограмата, е от решаващо значение да се работи с професионална и надеждна фирма. В Стил Комфорт М13, ние сме готови да ви осигурим индивидуално направен и отлично подготвен план за монтажа на вашата дограма. С нашето богато опит и използването на най-висококачествени материали, ние гарантираме, че получавате най-доброто решение, което ще ви удовлетвори трайно.",
                h3: "Монтаж",
                p3: "Процесът на монтаж на дограмата е, вероятно, най-важният момент от целия проект. В Стил Комфорт М13, ние разбираме колко е важно да се извърши монтажът правилно и професионално. Затова ние разчитаме на професионалните и опитни монтажници, за да гарантираме най-високото качество на монтажа на вашата дограма. Представителите на фирмата ни са тук, за да ви помогнат и да ви осигурят максимална удобност и качество на услугите. Стил Комфорт М13 - вашият избор за качествена дограма във Варна!",
                whatWeOffer: "Какво Предлагаме",
                c1: "c",
                c2: "c",
                c3: "c",
                c4: "c",
        },},
        ru: {
            translation: {
                language: "Язык",
                home: "Дом",
                projects: "Проекты",
                product: "Продукт",
                products: "Продукты",
                services: "Услуги",
                contacts: "Контакты",
                companyMoto: "Доставка и установка качественных оконные рамы.",
                companyDescription: "Добро пожаловать в Стил Комфорт М13 - ваша надежда на высококачественные пвц и алюминиевые окна и двери во Варне, Болгария. Мы молодая компания, основанная в 2017 году с целью предоставления нашим клиентам только лучшего в этой области. Наша миссия - создание пространства, где комфорт на первом месте. От дома до офиса, от отеля до ресторана, наши продукты предложат вам улучшенное качество жизни. Наши пвц и алюминиевые окна и двери изготовлены из высококачественных материалов с современным дизайном. Мы предоставляем доставку и установку всех наших изделий для максимального удобства клиента. Когда речь заходит о выборе правильного поставщика оконных конструкций мы на вашей стороне. Наше экспертное знание и профессиональное отношение гарантируют, что ваши индивидуальные потребности и пожелания будут выполнены. Давайте позаботимся о том, что для вас важно - вашей безопасности и комфорте. Свяжитесь с нами сегодня и начнем работать вместе над идеальным пространством, которое вы заслуживаете.",
                address: "Адрес",
                phone: "Телефон",
                email: "Электронной почте",
                h1: "Осмотр и Оценка",
                p1: "Когда вы ищете лучшее решение для остекления вашего жилья или офиса, важно получить профессиональное мнение и оценку ваших потребностей. В Стил Комфорт М13 мы предоставляем бесплатный осмотр и детальную оценку для каждого клиента. Наши эксперты сделают все возможное, чтобы ответить на все ваши вопросы и предложить вам лучшее решение для вашей собственности.",
                h2: "Планирование и Подготовка",
                p2: "Когда речь идет о планировании и подготовке проекта для остекления, важно работать с профессиональной и надежной компанией. В Стил Комфорт М13 мы готовы предоставить вам индивидуально разработанный и прекрасно подготовленный план для установки вашего остекления. С нашим богатым опытом и использованием высококачественных материалов мы гарантируем, что вы получите лучшее решение, которое прослужит вам на долгие годы.",
                h3: "Монтаж",
                p3: "Процесс установки остекления, вероятно, является наиболее важным моментом всего проекта. В Стил Комфорт М13 мы понимаем, насколько важно выполнить установку правильно и профессионально. Поэтому мы полагаемся на профессиональных и опытных монтажников, чтобы гарантировать высочайшее качество установки вашего остекления. Представители нашей компании здесь, чтобы помочь вам и обеспечить максимальный комфорт и качество услуг. Стил Комфорт М13 - ваш выбор для качественного остекления во Варне!",
                whatWeOffer: "Что Мы Предлагаем",
                c1: "c",
                c2: "c",
                c3: "c",
                c4: "c",
            }
        }
        }
  })