/* Анимация в первом блоке */
document.addEventListener("mousemove", function (e) {
    const img = document.querySelector(".fs-image");
    if (!img) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;

    const moveX = dx * 20;
    const moveY = dy * 40;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
});



/* Кнопки новоссти, акции и тд */

const data = {
    news: {
        btn: "https://mpi-corp.ru/novosti",
        col1: {
            date: "30 сентября 2025",
            text: "TDMS Фарватер Web: смотрите онлайн-премьеру 30 сентября"
        },
        col2: {
            date: "25 сентября 2025",
            text: "Вебинар КОМПАС-3D v24 для строительства (AEC). Возможности приложения Технология: ТХ"
        },
        col3: {
            date: "18 сентября 2025",
            text: "Премьера nanoCAD BIM Строительство 25 – смотрите онлайн 18 сентября"
        }
    },

    sales: {
        btn: "https://mpi-corp.ru/akcii",
        col1: {
            date: "18 сентября 2025",
            text: "Программа «Реновация»: обновляйте инфраструктуру с выгодой до 25%"
        },
        col2: {
            date: "08 августа 2025",
            text: "ТРЕЙД-ИН. ЗАМЕЩЕНИЕ"
        },
        col3: {
            date: "07 августа 2025",
            text: "ТРЕЙД-ИН. DWG"
        }
    },

    events: {
        btn: "https://mpi-corp.ru/meropriyatiya",
        col1: {
            date: "25 сентября 2025",
            text: "Вебинар КОМПАС-3D v24 для строительства (AEC). Возможности приложения Технология: ТХ"
        },
        col2: {
            date: "16 сентября 2025",
            text: 'Вебинар: "Как минимизировать киберриски и обеспечить непрерывность бизнеса"'
        },
        col3: {
            date: "09 сентября 2025",
            text: "Вебинар «КОМПАС-3D - Строительная конфигурация. Возможности приложения «Электроснабжение ЭС/ЭМ»"
        }
    }
};


const tabNews = document.getElementById("tab-news");
const tabSales = document.getElementById("tab-sales");
const tabEvents = document.getElementById("tab-events");

const col1Date = document.querySelector(".col1-date");
const col1Text = document.querySelector(".col1-text");

const col2Date = document.querySelector(".col2-date");
const col2Text = document.querySelector(".col2-text");

const col3Date = document.querySelector(".col3-date");
const col3Text = document.querySelector(".col3-text");

const btnMore = document.querySelector(".btn-more");


function setActiveTab(type) {

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));

    if (type === "news") tabNews.classList.add("tab-active");
    if (type === "sales") tabSales.classList.add("tab-active");
    if (type === "events") tabEvents.classList.add("tab-active");

    const block = data[type];

    col1Date.textContent = block.col1.date;
    col1Text.textContent = block.col1.text;

    col2Date.textContent = block.col2.date;
    col2Text.textContent = block.col2.text;

    col3Date.textContent = block.col3.date;
    col3Text.textContent = block.col3.text;

    btnMore.href = block.btn;
}


tabNews.addEventListener("click", () => setActiveTab("news"));
tabSales.addEventListener("click", () => setActiveTab("sales"));
tabEvents.addEventListener("click", () => setActiveTab("events"));

setActiveTab("news");

/* Свайпер */
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".features-swiper", {
        slidesPerView: "auto",
        spaceBetween: 50,
        freeMode: false,
        loop: false,
        grabCursor: true
    });
});