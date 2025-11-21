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
const MPIpartners = {
    g1: [
        "img/p1.png",
        "img/p2.png",
        "img/p3.png",
        "img/p4.png",
        "img/p5.png",
        "img/p6.png",
    ],
    g2: [
        "img/p7.png",
        "img/p8.png",
        "img/p9.png",
        "img/p10.png",
        "img/p11.png",
        "img/p12.png",
    ],
    g3: [
        "img/p13.png",
        "img/p14.png",
        "img/p15.png",
        "img/p16.png",
        "img/p17.png",
        "img/p18.png",
    ]
};

const urlByGroup = {
    g1: "https://mpi-corp.ru/inzhenernoe_po",
    g2: "https://mpi-corp.ru/informacionnaya_bezopasnost",
    g3: "https://mpi-corp.ru/infrastrukturnoe_po"
};

const grid = document.getElementById("partners-grid");
const partnersBtn = document.getElementById("partners-btn");
const switchers = document.querySelectorAll(".psw");

function loadGroup(g) {
    grid.innerHTML = "";

    MPIpartners[g].forEach(src => {
        const card = document.createElement("div");
        card.className = "partner-card";

        const img = document.createElement("img");
        img.src = src;

        card.appendChild(img);
        grid.appendChild(card);
    });

    partnersBtn.href = urlByGroup[g];
}

switchers.forEach(btn => {
    btn.addEventListener("click", () => {
        switchers.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        loadGroup(btn.dataset.group);
    });
});

loadGroup("g1");

const equipmentData = {
    g1: {
        items: ["o1.png", "o2.png"],
        url: "https://mpi-corp.ru/klientskie_resheniya"
    },
    g2: {
        items: ["o3.png", "o4.png"],
        url: "https://mpi-corp.ru/servera_i_setevoe_oborudovanie"
    },
    g3: {
        items: ["o5.png", "o6.png", "o7.png"],
        url: "https://mpi-corp.ru/promyshlennoe_oborudovanie1"
    }
};

const eqButtons = document.querySelectorAll('.eqb');
const eqGrid = document.getElementById('equip-grid');
const eqBtn = document.getElementById('equip-btn');

function loadEquip(group) {
    const data = equipmentData[group];

    if (!data) return;

    eqGrid.innerHTML = "";

    data.items.forEach(img => {
        const card = document.createElement("div");
        card.className = "equip-card";
        card.innerHTML = `<img src="img/${img}" alt="">`;
        eqGrid.appendChild(card);
    });

    eqBtn.href = data.url;

    if (window.innerWidth <= 480) {
        const cards = eqGrid.querySelectorAll(".equip-card");
        cards.forEach((c, i) => c.style.display = i === 0 ? "flex" : "none");
    }
}

eqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        eqButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        loadEquip(btn.dataset.group);
    });
});

loadEquip("g1");


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