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
        btn: "https://mpi-corp.ru/акции",
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
            text: "Вебинар «КОМПАС-3D – Электроснабжение ЭС/ЭМ»"
        }
    }
};


const tabNews = document.getElementById("tab-news");
const tabSales = document.getElementById("tab-sales");
const tabEvents = document.getElementById("tab-events");

const newsItems = document.querySelectorAll(".news-item");

const btnMore = document.querySelector(".btn-more");


function setActiveTab(type) {

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("tab-active"));
    document.getElementById("tab-" + type).classList.add("tab-active");

    const block = data[type];

    const cols = [block.col1, block.col2, block.col3];

    newsItems.forEach((item, i) => {
        const dateEl = item.querySelector(".date");
        const textEl = item.querySelector(".text");

        dateEl.textContent = cols[i].date;
        textEl.textContent = cols[i].text;
    });

    btnMore.href = block.btn;
}

tabNews.addEventListener("click", () => setActiveTab("news"));
tabSales.addEventListener("click", () => setActiveTab("sales"));
tabEvents.addEventListener("click", () => setActiveTab("events"));

setActiveTab("news");

document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".features-swiper", {
        slidesPerView: "auto",
        spaceBetween: 31,
        loop: true,
        speed: 600,
    });
});

/* Партнеры переключатели */
const switches = document.querySelectorAll(".psw");
const groups = document.querySelectorAll(".partners-grid");

switches.forEach(btn => {
    btn.addEventListener("click", () => {

        // переключаем кнопки
        switches.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // показываем нужную группу
        const g = btn.dataset.group;

        groups.forEach(group => {
            group.classList.toggle("active", group.classList.contains(g));
        });
    });
});

const eqBtns = document.querySelectorAll(".eqb");
const eqGroups = document.querySelectorAll(".equip-group");

eqBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        eqBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const g = btn.dataset.group;

        eqGroups.forEach(group => {
            group.classList.toggle("active", group.classList.contains(g));
        });
    });
});



if (window.innerWidth <= 480) {

    const logos = Array.from(document.querySelectorAll('.marquee img.client-card'))
        .map(img => img.getAttribute('src'));

    const wrapper = document.querySelector('.clients-swiper .swiper-wrapper');

    logos.forEach(src => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        slide.innerHTML = `
            <div class="client-card">
                <img src="${src}" alt="">
            </div>
        `;

        wrapper.appendChild(slide);
    });

    new Swiper('.clients-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        loop: true
    });
}


// Открытие попапа
document.querySelectorAll('.btn-call').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('popup-callback').style.display = 'flex';
    });
});

document.querySelectorAll('.popup-close').forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.popup-overlay').style.display = 'none';
    });
});

document.querySelectorAll('.popup-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

// Открыть консультацию
document.querySelectorAll('.btn-consult').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('popup-consult').style.display = 'flex';
    });
});
