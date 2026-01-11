// huburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {

    // jika di klick akan menambhkan class hamburger-active 
    // jika di klick kedua kalinya akan menghilangkan class hamburger-active
    hamburger.classList.toggle('hamburger-active');


    // 
    navMenu.classList.toggle('hidden');




});


// klick di luar humburgernya

window.addEventListener('click', function (e) {

    // jika yang kita targer bukan nav menu daan humburger
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');

        // 
        navMenu.classList.add('hidden');
    }
}
)

// navbar fixed
// jika window di scroll
window.onscroll = function () {

    const header = document.querySelector('header');
    // mengambil posisi header dari ujung atas halamannya 
    const fixedNav = header.offsetTop;

    // to-top
    const toTop = document.querySelector('#to-top');

    //   jika window di scroll lebih dari posisi header
    if (window.pageYOffset > fixedNav) {

        // menambhkan class baru di header
        header.classList.add('navbar-fixed');

        // menampilkan to-top
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }

    // jika di posisi awal
    else {
        // menghilangkan class navbar-fixed
        header.classList.remove('navbar-fixed');

        // menghilangkan to-top
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}


// berhubungan di classdark di config
// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');



// pengecekkan
darkToggle.addEventListener('click', function () {

    // jika darkToggle di check maka tambhkan class dark di html
    if (darkToggle.checked) {
        html.classList.add('dark');


        // locl storage dengan keynya theme
        localStorage.theme = 'dark';
    }

    // jika tidak di check maka hilangkan class dark di html
    else {
        html.classList.remove('dark');

        // local storage dengan keynya theme
        localStorage.theme = 'light';
    }
});


// pindahka posisi togle sesui dengan mode

if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    darkToggle.checked = true;

} else {
    darkToggle.checked = false;


}


// // EmailJS
// EmailJS
const btn = document.getElementById('submit');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    btn.value = 'Sending...'; // Mengubah teks tombol menjadi "Sending..."

    // Inisialisasi EmailJS
    const serviceID = 'service_rteeqn4';
    const templateID = 'template_ujps10q';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email'; // Kembalikan teks tombol

            // Tampilkan popup sukses
            Swal.fire({
                title: 'Berhasil!',
                text: 'Email berhasil dikirim!',
                icon: 'success',
                timer: 3000,
                confirmButtonText: 'Oke',
                timerProgressBar: true
            });

            // Refresh halaman setelah 500ms
            setTimeout(() => {
                location.reload();
            }, 3500);
        }, (err) => {
            btn.value = 'Send Email'; // Kembalikan teks tombol

            // Tampilkan error
            Swal.fire({
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat mengirim email.',
                icon: 'error',
                confirmButtonText: 'Coba Lagi'
            });

            console.error('EmailJS Error:', err);
        });
});
