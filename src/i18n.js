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
            companyDescription: "Stil Komfort M13 is established in 2020. Our team has great experience and knowledge gained over time by working in leading companies in the industry. Our goal is to offer high quality services for installation of window frames, relying on profiles of medium and high class 'A' produced in Europe. We consult 7 days a week, taking into account your commitment and the specific need for joinery. The approach to the client is individual and we take into account the specificity of the site when making an offer, setting the most appropriate profile and glazing. With us you can also order on lease through TBI Bank. We perform 5 years warranty maintenance of the joinery we have installed",
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
            c1: "Doors and Windows",
            cd1: "We offer high quality PVC and Aluminium Windows and Doors ",
            c2: "Blinds and Mosquito Nets",
            cd2: "You can find wide variety of window blinds and mosquito nets",
            c3: "5 Year Warranty",
            cd3: "Products installed by Us have 5 Year Warranty after the date of installation",
            c4: "TBI Lease",
            cd4: "With us you can order on lease through TBI Bank.",
            c5: "Maintenance",
            cd5: "We offer professional maintenance on products installed by Us .",
            
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
                companyDescription: "Стил Комфорт М13 е млада фирма създадена през 2020 година. Екипът ни е с голям стаж и опит, придобит във времето, чрез работа във фирми лидери в бранша. Концепцията на Стил Комфорт М13 е да предложи качествена услуга за монтаж на дограма, залагайки на профили от средния и високия клас 'А' произвеждани в Европа. Ние консултираме 7 дни в седмицата, съобразявайки се с вашата ангажираност и конкретната нужда от дограма. Подходът към клиента е индивидуален и отчитаме специфичността на обекта при правене на оферта, като залагаме най- подходящ профил и стъклопакет. При Нас можете да поръчате и на изплащане, чрез TBI Bank. Извършваме 5 години гаранционно подържане на дограмата която сме монтирали",
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
                c1: "Врати и Прозорци",
                cd1: "Предлагаме висококачествени ПВЦ и Алуминиеви Врати и Прозорци",
                c2: "Щори и Комарници",
                cd2: "При Нас ще намерите широка гама щори и комарници",
                c3: "5 Години Гаранция",
                cd3: "Продуктите инсталирани от Нас имат 5 Години Гаранция от датата на инсталация",
                c4: "TBI Лизинг",
                cd4: "Предлагаме Лизинг на всички наши продукти и услуги с TBI Лизинг",
                c5: "Поддръжка",
                cd5: "Предлагаме професионална поддръжка на продуктите инсталирани от Нас",
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
                companyDescription: "Stil Komfort M13 основана в 2020 году. Наша команда обладает большим опытом и знаниями, полученными за время работы в ведущих компаниях отрасли. Наша цель – предложить высококачественные услуги по монтажу оконных рам, опираясь на профили среднего и высокого класса «А» производства Европы. Мы консультируем 7 дней в неделю, принимая во внимание ваши обязательства и конкретную потребность в столярных изделиях. Подход к клиенту индивидуален и мы учитываем специфику сайта при составлении предложения, установке наиболее подходящего профиля и остекления. У Нас вы также можете заказать лизинг через TBI Bank. Мы выполняем 5-летнее гарантийное обслуживание установленных нами столярных изделий",
                address: "Адрес",
                phone: "Телефон",
                email: "Электронной почте",
                h1: "Осмотр и Оценка",
                p1: "Когда вы ищете лучшее решение для остекления вашего жилья или офиса, важно получить профессиональное мнение и оценку ваших потребностей. В Стил Комфорт М13 мы предоставляем бесплатный осмотр и детальную оценку для каждого клиента. Наши эксперты сделают все возможное, чтобы ответить на все ваши вопросы и предложить вам лучшее решение для вашей собственности.",
                h2: "Планирование и Подготовка",
                p2: "Когда речь идет о планировании и подготовке проекта для остекления, важно работать с профессиональной и надежной компанией. В Стил Комфорт М13 мы готовы предоставить вам индивидуально разработанный и прекрасно подготовленный план для установки вашего остекления. С нашим богатым опытом и использованием высококачественных материалов мы гарантируем, что вы получите лучшее решение, которое прослужит вам на долгие годы.",
                h3: "Монтаж",
                p3: "Процесс установки остекления, вероятно, является наиболее важным моментом всего проекта. В Стил Комфорт М13 мы понимаем, Насколько важно выполнить установку правильно и профессионально. Поэтому мы полагаемся на профессиональных и опытных монтажников, чтобы гарантировать высочайшее качество установки вашего остекления. Представители нашей компании здесь, чтобы помочь вам и обеспечить максимальный комфорт и качество услуг. Стил Комфорт М13 - ваш выбор для качественного остекления во Варне!",
                whatWeOffer: "Что Мы Предлагаем",
                c1: "Двери и Oкна",
                cd1: "Мы предлагаем высококачественные двери и окна из ПВХ и алюминия",
                c2: "Жалюзи и москитные сетки",
                cd2: "Здесь вы найдете широкий ассортимент жалюзи и москитных сеток",
                c3: "Гарантия 5 лет",
                cd3: "Установленные нами продукты имеют гарантию 5 лет с даты установки",
                c4: "TBI Лизинг",
                cd4: "Мы предлагаем лизинг всех наших продуктов и услуг с TBI Leasing",
                c5: "Поддержку",
                cd5: "Мы предлагаем профессиональную поддержку установленных нами продуктов",
            }
        }
        }
  })