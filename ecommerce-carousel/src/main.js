fetch("/products.json")
  .then((response) => response.json())
  .then((products) => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    products.forEach((product) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.style.display = "flex";
      slide.style.alignItems = "center";
      slide.style.padding = "60px";
      slide.style.background = "#fff";
      slide.style.borderRadius = "10px";
      slide.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
      slide.style.transition = "transform 0.3s";
      slide.style.maxWidth = "90%";

      slide.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${
        product.name
      }" style="max-width: 500px; height: auto; margin-right: 20px;" />
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-price">Original Price: $${product.original_price.toFixed(
            2
          )}</div>
          ${
            product.discounted_price
              ? `<div class="product-discounted-price">Discounted Price: $${product.discounted_price.toFixed(
                  2
                )}</div>`
              : ""
          }<a href="${product.link}">
          <button class="action-button" style="margin-top: 15px; padding: 10px 20px; background-color: #3498db; color: #fff; border: none; cursor: pointer; border-radius: 5px; text-decoration: none;">View Product</button></a>
        </div>
      `;
      swiperWrapper.appendChild(slide);
    });

    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
    });
  });
