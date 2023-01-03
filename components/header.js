function createHeaderComponent(el) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <div class="header-container">
        <div class="header__img-container">
            <p class="logo"><a href="index.html">MATIAS</a></p>
        </div>
        <div class="header__menu-mobile-btn">
            <div class="menu-mobile-bar"></div>
            <div class="menu-mobile-bar"></div>
            <div class="menu-mobile-bar"></div>
        </div>
        <div class="header__menu-mobile-active">
            <div class="menu-close-button">
                X
            </div>
            <div class="menu-mobile-items">
                <div class="menu-mobile-item"><a href="portfolio.html">Portfolio</a></div>
                <div class="menu-mobile-item"><a href="servicios.html">Servicios</a></div>
                <div class="menu-mobile-item"><a href="contacto.html">Contacto</a></div>
            </div>
        </div>
        <div class="header__menu-desktop">
            <div class="header__menu-desktop-item"><a href="portfolio.html">Portfolio</a></div>
            <div class="header__menu-desktop-item"><a href="servicios.html">Servicios</a></div>
            <div class="header__menu-desktop-item"><a href="contacto.html">Contacto</a></div>
        </div>
    </div>`;
    el.appendChild(componentEl);
}

function createHeader(el){
    createHeaderComponent(el);
    const menuMobileOpenButtonEl = document.querySelector(".header__menu-mobile-btn");
    const menuMobileEl = document.querySelector(".header__menu-mobile-active");
    const menuMobileCloseButtonEl = document.querySelector(".menu-close-button");
    menuMobileOpenButtonEl.addEventListener('click', () => {
        menuMobileEl.style.display = "flex";
    });
    menuMobileCloseButtonEl.addEventListener('click', () => {
        menuMobileEl.style.display = "none";
    });
}





