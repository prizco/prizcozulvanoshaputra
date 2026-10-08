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
        <img src="images/${esc(file)}" alt="${esc(label)}" loading="lazy">
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
