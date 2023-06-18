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
            companyDescription: "",
            address: "Address",
            phone: "Phone",
            email: "Email",
            h1: "h",
            h2: "h",
            h3: "h",
            c1: "c",
            c2: "c",
            c3: "c",
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
                companyDescription: "",
            }
        },
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
                companyDescription: "",
            }
        }
        }
  })