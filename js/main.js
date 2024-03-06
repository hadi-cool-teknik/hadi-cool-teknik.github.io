(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "easeInOutExpo");
    return false;
  });
  function scrollDown() {
    window.scrollBy(0, window.innerHeight);
  }

  // Fungsi untuk mengecek apakah sudah mendekati bagian bawah
  function checkIfNearBottom() {
    // Jika sudah mendekati bagian bawah (100px)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      const hiddenWhatsapp = document.querySelector(".whatsapp-button");
      hiddenWhatsapp.style.display = "none";
    } else {
      const hiddenWhatsapp = document.querySelector(".whatsapp-button");
      hiddenWhatsapp.style.display = "block";
    }
  }

  // Panggil fungsi scrollDown setelah beberapa detik (contoh: 2 detik)
  setTimeout(scrollDown, 2000);

  // Tambahkan event listener untuk mengecek saat scrolling
  window.addEventListener("scroll", checkIfNearBottom);
  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    animateOut: "fadeOutLeft",
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

const arrItem = [
  {
    layanan: "Cuci AC 0,5 - 1PK",
    harga: "Rp 75.000",
  },
  {
    layanan: "Cuci AC 1,5 - 2PK",
    harga: "Rp 75.000",
  },
  {
    layanan: "Cuci AC Inverter 0,5 - 2PK",
    harga: "Rp 130.000",
  },
  {
    layanan: "Tambah Freon R22 0.5 - 1PK",
    harga: "Rp 175.000",
  },
  {
    layanan: "Tambah Freon R22 1.5 - 2PK",
    harga: "Rp 225.000",
  },
  {
    layanan: "Tambah Freon R32/R410 0,5 - 1PK",
    harga: "Rp 225.000",
  },
  {
    layanan: "Tambah Freon R32/R410 1,5 - 2PK",
    harga: "Rp 275.000",
  },
  {
    layanan: "Isi Freon R22 0,5 - 1PK",
    harga: "	Rp 275.000",
  },
  {
    layanan: "Isi Freon R22 1,5 - 2PK",
    harga: "Rp 325.000",
  },
  {
    layanan: "Isi Freon R32/R410 0.5 – 1 PK",
    harga: "Rp 350.000",
  },
  {
    layanan: "Isi Freon R32/R410 1.5 -2 PK",
    harga: "Rp 450.000",
  },
  {
    layanan: "Bongkar AC",
    harga: "Rp 175.000",
  },
  {
    layanan: "Pasang AC 0.5 – 1 PK",
    harga: "Rp 300.000",
  },
  {
    layanan: "Pasang AC 1.5 – 2 PK",
    harga: "Rp 375.000",
  },
  {
    layanan: "Bongkar Pasang AC 0.5 – 1 PK",
    harga: "Rp 450.000",
  },
  {
    layanan: "Bongkar Pasang AC 1.5 – 2 PK",
    harga: "Rp 500.000,-",
  },
  {
    layanan: "Penggantian Kapasitor AC 0.5 – 1 PK (Part dan Jasa)",
    harga: "Rp 275.000,-",
  },
  {
    layanan: "Penggantian Kapasitor AC 1.5 – 2 PK (Part dan Jasa)",
    harga: "Rp 330.000,-",
  },
  {
    layanan: "Bobok Tembok per Meter",
    harga: "Rp 50.000,-",
  },
  {
    layanan: "Las Sambungan Pipa Freon per titik",
    harga: "Rp 125.000,-",
  },
  {
    layanan: "Las Perbaikan Kebocoran Pipa Freon + Isi Freon",
    harga: "Rp 550.000,-",
  },
  {
    layanan: "Vacuum & Flushing AC",
    harga: "Rp 350.000,-",
  },
  {
    layanan: "Flushing Evaporator",
    harga: "Rp 200.000,-",
  },
  {
    layanan: "Vacuum",
    harga: "Rp 150.000,-",
  },
  {
    layanan: "Biaya Pengecekan AC**",
    harga: "Rp 75.000,-",
  },
  {
    layanan: "Flushing Evapurator",
    harga: "Rp 275.000",
  },
  {
    layanan: "Cuci Besar/Overhaul 0.5 - 1PK",
    harga: "Rp 375.000",
  },
  {
    layanan: "Cuci Besar/Overhaul 1.5 - 2PK",
    harga: "Rp 475.000",
  },
  {
    layanan: "Cuci AC Inverter 0.5 - 1PK",
    harga: "Rp 130.000",
  },
];
const table = document.querySelector(".table-harga-hct");
const funcc = ({ layanan, harga }) => {
  return `
    <tr>
    <td>
        ${layanan}
    </td>
    <td>
        ${harga}
    </td>
  </tr>
    `;
};

arrItem.forEach((item) => {
  return (table.innerHTML += funcc(item));
});

table.innerHTML += funcc();
