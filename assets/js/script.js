// Service Icon Item
document.addEventListener("DOMContentLoaded", function () {
  const services = [
    { imgSrc: "/assets/img/service/1.png", description: "รับเขียนแบบ" },
    { imgSrc: "/assets/img/service/2.png", description: "ประเมินราคา" },
    { imgSrc: "/assets/img/service/3.png", description: "รับเหมาสร้างบ้าน" },
    {
      imgSrc: "/assets/img/service/4.png",
      description: "ประหยัดงบ ไม่บานปลาย",
    },
    { imgSrc: "/assets/img/service/5.png", description: "รับงานทั่วภาคอีสาน" },
    { imgSrc: "/assets/img/service/6.png", description: "ทีมช่างมืออาชีพ" },
  ];
  const container = document.querySelector(
    'section[section-data="service-info"] .row'
  );
  services.forEach((service) => {
    const html = `
        <div class="col-md-6 col-lg-4">
          <div class="img-wrapper">
            <img src="${service.imgSrc}" alt="" class="mx-auto" />
          </div>
          <p class="txt-body">${service.description}</p>
        </div>
      `;
    container.innerHTML += html;
  });
});
// Portfolio
document.addEventListener("DOMContentLoaded", (event) => {
  const portContainer = document.querySelector(
    'section[section-data="portfolio"] .row'
  );
  for (let i = 1; i <= 18; i++) {
    const html = `
      <div class="col-lg-6 col-xl-4">
        <div class="img-wrapper px-2">
          <img src="/assets/img/portfolio/port-${i}.jpg" alt="" class="m-auto" />
        </div>
      </div>
    `;
    portContainer.insertAdjacentHTML("beforeend", html);
  }
});
// Nav Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const menu = document.querySelector(".m-menu");

  // Toggle menu on menu button click
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Close menu on close button click
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
