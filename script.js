/* ============================================================
   DATA: ubah / tambah isi website cukup di bagian ini.
   Gambar: simpan di folder images/ sesuai nama pada field "img".
   ============================================================ */

const experience = [
    { date: "Apr 2026 – Okt 2026", title: "Technical Support Engineer", org: "PT Indo Trans Teknologi, Surabaya", points: [
        "Memantau tingkat konsumsi bahan bakar kapal menggunakan sensor seperti Flow Meter.",
        "Memantau kesehatan mesin, batas RPM maksimum, dan performa komponen kapal untuk mencegah kerusakan.",
        "Melacak posisi, koordinat, dan pergerakan kapal dengan teknologi Hybrid GPS Tracker."
    ]},
    { date: "Jul 2025 – Des 2025", title: "Mechatronic Engineer", org: "CV ROV Indonesia, Surabaya", points: [
        "Ikut mengembangkan ROV dengan sikat untuk membersihkan lambung kapal.",
        "Menerapkan prinsip Kaizen (5S & PDCA/SDCA) untuk memperbaiki organisasi kerja dan standardisasi.",
        "Ikut mengembangkan ROV untuk memeriksa ketebalan lambung kapal.",
        "Ikut mengembangkan remotely surface vehicle untuk memeriksa kedalaman dan monitoring danau."
    ]},
    { date: "Nov 2024 – Jan 2025", title: "Robotic Coach", org: "SMP Al-Azhar, Surabaya", points: [
        "Mengajar robotika dan pemrograman mikrokontroler.",
        "Melatih logika pemrograman, elektronika dasar, dan mekanika robot untuk lomba tingkat sekolah.",
        "Membimbing tim robotik SMP di lomba regional dan nasional."
    ]},
    { date: "Jan 2020 – Jun 2022", title: "Staf Teknis", org: "CV Bangkit CCTV, Tulungagung", points: [
        "Instalasi dan perawatan sistem CCTV untuk pelanggan perorangan dan perusahaan.",
        "Menganalisis kebutuhan pelanggan dan memberikan solusi berbasis teknologi."
    ]},
    { date: "Jul 2022 – Sep 2026", title: "Teknik Otomasi, IPK 3,34 / 4,00", org: "Politeknik Perkapalan Negeri Surabaya", points: [] },
    { date: "Agu 2019 – Agu 2022", title: "Teknik Elektro", org: "SMKN 3 Boyolangu, Tulungagung", points: [] }
];

const achievements = [
    { rank: "Juara 1", title: "MATE ROV ASEAN Singapore", note: "Apr 2026 · Singapore American School bersama MATE ROV", img: "mate-rov.jpg" },
    { rank: "Top 10 Finalist", title: "Photo Challenge (Internasional)", note: "Des 2025 · MATE ROV Competition", img: "photo-challenge.jpg" },
    { rank: "Juara 2", title: "SAUVC Singapore", note: "Mar 2025 · NUS bersama Singapore Polytechnic", img: "sauvc.jpg" },
    { rank: "Juara 2", title: "KRBAI, KRI Nasional", note: "Jun 2024 · BPTI Puspresnas", img: "krbai-nasional.jpg" },
    { rank: "Best Design", title: "KRBAI, KRI Nasional", note: "Jun 2024 · BPTI Puspresnas", img: "krbai-design.jpg" },
    { rank: "Juara 1", title: "KRBAI, KRI Regional", note: "Jun 2024 · BPTI Puspresnas", img: "krbai-regional.jpg" }
];

const projects = [
    { date: "Ags 2026", title: "ROS pada ROV: Jaga Jarak Berbasis Sonar dengan SMC", img: "project-rov-smc.jpg",
      desc: "Sistem kendali berbasis ROS agar ROV menjaga jarak dari target bawah air memakai sonar real-time dan Sliding Mode Control, dengan arsitektur closed-loop sonar, SMC, dan thruster." },
    { date: "Jul 2026", title: "Ship Fuel Consumption Monitoring System", img: "project-fuel.jpg",
      desc: "Monitoring konsumsi bahan bakar kapal dengan sensor Flow Meter, termasuk analisis data real-time dan deteksi kondisi konsumsi tidak normal." },
    { date: "Jun 2026", title: "Ship Engine Health & RPM Monitoring System", img: "project-engine.jpg",
      desc: "Memantau parameter kesehatan mesin dan batas RPM maksimum untuk mencegah kerusakan komponen kapal." },
    { date: "Mei 2026", title: "Hybrid GPS-Based Vessel Tracking System", img: "project-gps.jpg",
      desc: "Pelacakan posisi, koordinat, dan pergerakan kapal secara real-time dengan Hybrid GPS Tracker." },
    { date: "Jan 2026", title: "ROV dengan Monitoring 3 Kamera", img: "project-rov-camera.jpg",
      desc: "ROV semi-otonom dan manual dengan tiga kamera onboard, tiga layar GCS, dan transmisi video real-time untuk observasi multi-sudut." },
    { date: "Ags 2025", title: "ROV Inspeksi Lambung Kapal dengan Ultrasonic Thickness Gauge", img: "project-rov-thickness.jpg",
      desc: "ROV inspeksi yang mengukur ketebalan plat lambung kapal di bawah air memakai sensor ultrasonic thickness gauge untuk menilai kondisi lambung." },
    { date: "Ags 2025", title: "ROV Pembersih Lambung Kapal Berbasis Sikat Rotari", img: "project-rov-brushing.jpg",
      desc: "Rancang bangun ROV pembersih lambung kapal dengan mekanisme sikat rotari." },
    { date: "Ags 2025", title: "ROV Pemantau Kualitas Air dengan Sensor pH", img: "project-rov-ph.jpg",
      desc: "ROV monitoring kualitas air yang membaca nilai pH secara real-time." },
    { date: "Ags 2025", title: "ROV untuk Pemetaan dan Survei Bawah Air", img: "project-rov-mapping.jpg",
      desc: "Rancang bangun ROV untuk pemetaan dan survei kondisi bawah air." },
    { date: "Apr 2025", title: "Computer Integrated System – SCADA", img: "project-scada.jpg",
      desc: "Modul SCADA untuk mengintegrasikan dan mengendalikan proses industri." },
    { date: "Ags 2024", title: "Monitoring PLTB Spiral (IoT)", img: "project-wind.jpg",
      desc: "Monitoring IoT untuk pembangkit turbin angin spiral dengan dashboard jarak jauh, data logging, dan deteksi dini gangguan." },
    { date: "Ags 2024", title: "Monitoring PLTGL Ombak (IoT)", img: "project-wave.jpg",
      desc: "Monitoring IoT pembangkit listrik gelombang laut dengan data logging dan dashboard performa daya." },
    { date: "Ags 2024", title: "Monitoring Motor Pompa Air Tawar (Neural Network)", img: "project-pump.jpg",
      desc: "Monitoring motor pompa air tawar kapal berbasis Neural Network, memantau suhu, getaran, dan arus dengan peringatan dini." },
    { date: "Des 2023", title: "Monitoring & Preventive Maintenance Powerpack (Decision Tree)", img: "project-powerpack.jpg",
      desc: "Sistem berbasis web yang memprediksi kegagalan powerpack sebelum terjadi, dari perangkat keras sampai perangkat lunak." }
];

const organization = [
    { date: "Jan 2023 – Apr 2026", title: "Ketua Tim HYDROSHIPS (Underwater Robot)", org: "Marine Robotic Community, PPNS", points: [
        "Memimpin tim robot bawah air dan merancang sistem mekanik serta elektronik.",
        "Memprogram kendali gerak dan sensor, serta menguji dan mengkalibrasi sistem."
    ]},
    { date: "Sep 2025 – Des 2025", title: "Magang", org: "CV ROV Indonesia, Surabaya", points: [
        "Perakitan, perawatan, dan uji coba ROV; mengajar siswa tentang inovasi teknologi dan robot."
    ]},
    { date: "Jan 2025 – Agu 2025", title: "Robotics Instructor & Coach", org: "Sekolah Robot Indonesia, Surabaya", points: [
        "Mengajar robotika, elektronika, mekanika, sensor, dan pemrograman untuk siswa SD secara hands-on."
    ]},
    { date: "Des 2024", title: "Koordinator Wisuda Teknik Otomasi 2024", org: "Robotics Community PPNS", points: [
        "Mengoordinasi seluruh aspek teknis dan non-teknis acara."
    ]},
    { date: "Okt 2024", title: "Divisi Lomba, Kontes Kapal Indonesia 2024", org: "Kompetisi nasional teknologi maritim, Kemendikbud", points: [
        "Mengoordinasi logistik, dokumentasi peserta, dan pengawasan lomba; membantu proses penjurian."
    ]},
    { date: "Jul 2024 – Des 2024", title: "Divisi Acara, Automation Week VII", org: "Kompetisi nasional Robotika, Karya Tulis, dan PLC", points: [
        "Menyusun konsep dan rundown acara serta mendukung pelaksanaan di lokasi."
    ]},
    { date: "Mar 2024 – Des 2024", title: "Staf Dagri", org: "HIMATO PPNS", points: [
        "Mengoordinasi kegiatan internal: rapat, pelatihan, dan evaluasi kinerja anggota."
    ]}
];


/* ============================================================
   RENDER (tidak perlu diubah)
   ============================================================ */

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const imgSlot = (file, label, cls = "") =>
    `<div class="img-slot ${cls}" data-label="${esc(label)}">
        <img src="${esc(file)}" alt="${esc(label)}" loading="lazy">
    </div>`;

const timelineHTML = list => list.map(i => `
    <div class="timeline-item">
        <span class="timeline-date">${esc(i.date)}</span>
        <h3>${esc(i.title)}</h3>
        <p class="timeline-org">${esc(i.org)}</p>
        ${i.points.length ? `<ul>${i.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
    </div>`).join("");

document.getElementById("experience-list").innerHTML = timelineHTML(experience);
document.getElementById("organization-list").innerHTML = timelineHTML(organization);

document.getElementById("achievement-list").innerHTML = achievements.map(a => `
    <div class="achievement">
        <div class="achievement-body">
            <span class="rank">${esc(a.rank)}</span>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.note)}</p>
        </div>
        ${imgSlot(a.img, "Foto " + a.title)}
    </div>`).join("");

document.getElementById("project-list").innerHTML = projects.map(p => `
    <div class="project-card">
        ${imgSlot(p.img, "Gambar " + p.title, "project-image")}
        <div class="project-content">
            <span class="timeline-date">${esc(p.date)}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
        </div>
    </div>`).join("");


// Tahun footer otomatis
document.querySelector("footer p").textContent =
    `© ${new Date().getFullYear()} Prizco Zulvano Shaputra. All Rights Reserved.`;


// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    });
});


// Placeholder gambar: kotak berlabel muncul jika file di images/ belum ada
document.querySelectorAll(".img-slot").forEach(slot => {
    const img = slot.querySelector("img");
    const markEmpty = () => slot.classList.add("empty");
    img.addEventListener("error", markEmpty);
    if (img.complete && img.naturalWidth === 0) markEmpty();
});


/* ============================================================
   ANIMASI BAWAH AIR
   ============================================================ */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


// Muncul saat di-scroll
const revealTargets = document.querySelectorAll(
    ".section-title, .about-content, .timeline-item, .achievement, .project-card, .skill, .contact > *"
);

if (reduceMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(el => el.classList.add("in"));
} else {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => {
        el.classList.add("reveal");
        // jeda bertahap antar kartu dalam satu baris
        const idx = [...el.parentElement.children].indexOf(el);
        el.style.transitionDelay = `${Math.min(idx % 3, 2) * 0.08}s`;
        observer.observe(el);
    });
}


// Garis progres scroll
const progress = document.querySelector(".progress");

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();


// Gelembung yang naik ke permukaan
const canvas = document.getElementById("bubbles");
const ctx = canvas.getContext("2d");
let bubbles = [];
let W = 0, H = 0;

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function newBubble(randomY) {
    return {
        x: Math.random() * W,
        y: randomY ? Math.random() * H : H + 20,
        r: 2 + Math.random() * 7,
        speed: 0.25 + Math.random() * 0.7,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.01 + Math.random() * 0.02,
        alpha: 0.15 + Math.random() * 0.3
    };
}

function initBubbles() {
    resizeCanvas();
    const count = Math.round(Math.min(45, Math.max(18, W / 35)));
    bubbles = Array.from({ length: count }, () => newBubble(true));
}

function drawBubbles() {
    ctx.clearRect(0, 0, W, H);

    bubbles.forEach((b, i) => {
        b.y -= b.speed;
        b.sway += b.swaySpeed;
        const x = b.x + Math.sin(b.sway) * 14;

        ctx.beginPath();
        ctx.arc(x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(190, 235, 245, ${b.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // kilau kecil di sisi gelembung
        ctx.beginPath();
        ctx.arc(x - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha})`;
        ctx.fill();

        if (b.y + b.r < 0) bubbles[i] = newBubble(false);
    });

    requestAnimationFrame(drawBubbles);
}

if (reduceMotion) {
    canvas.style.display = "none";
} else {
    initBubbles();
    drawBubbles();
    window.addEventListener("resize", initBubbles);
}
