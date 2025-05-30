// Mẫu xe //
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

new WOW().init();


function openTab() {
  const tab = document.querySelectorAll("html");
  [...tab].forEach(item => {
    item.setAttribute("data-color-scheme", ['light']);
    const tabId = item.getAttribute("data-id");
    console.log(tabID);
    console.log(item);
  });
}
function CloseTab() {
  const tab = document.querySelectorAll("html");
  [...tab].map(item => {
    item.classList.add("text");
    console.log(item);
  }); 
}



  //   <!-- <script>
  //   const tab = document.querySelectorAll(".att");
  //   [...tab].forEach(item => {
  //     const tabId = item.getAttribute("data-id");
  //     item.setAttribute("class", "dark");
  //     console.log(tabID);
  //   });
  // </script> -->


//End Mẫu xe //

