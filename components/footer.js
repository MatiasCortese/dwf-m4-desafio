function createFooterComponent(el) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <div class="footer"> 
        <div class="footer__logo">
            <p class="logo">MATIAS</p>
        </div>
        <div class="footer__section-links">
            <div class="section-link">
                <img src="images/home-vector.png" alt="">
                <p>
                    Home
                </p>
            </div>
            <div class="section-link">
                <img src="images/user-vector.png"alt="">
                <p>
                    Servicios
                </p>
            </div>
            <div class="section-link">
                <img src="images/contact-vector.png" alt="">
                <p>
                    Contactos
                </p>
            </div>
        </div>
        <div class="footer__rrss">
            <div class="rrss">
                <img src="images/linkedin.png" alt="" class="rrss-logo">
            </div>
            <div class="rrss">
                <img src="images/github.png" alt="" class="rrss-logo">
            </div>
            <div class="rrss">
                <img src="images/twitter.png" alt="" class="rrss-logo">
            </div>
        </div>
        <p>©2022 - https://apx.school</p>
    </div>`;
    el.appendChild(componentEl);
}
