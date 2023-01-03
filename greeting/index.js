function createGreetingComponentForIndex(el) {
    return fetch('https://cdn.contentful.com/spaces/r7e5y7iz1xvh/environments/master/entries?access_token=PIlKP0onDBu8dda8Dz1yG1W_B5j_Ic9lt8uwzOhxA20&content_type=bienvenidas')
    .then(res => { return res.json() })
    .then((data) => { 
    const palabrasDeQuienSoy = data.items[0].fields.quienSoy.split(" ")
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <section class="greeting">
        <div class="greeting-words">
            <p class="greeting__word">${data.items[0].fields.saludoInicial}</p>
            <div class="greeting__light-blue-words">
                <p class="greeting__word light-blue">${palabrasDeQuienSoy[0]}</p>
                <p class="greeting__word light-blue">${palabrasDeQuienSoy[1]}</p>
            </div>
        </div>
        <div class="greeting-img">
            <img src="images/image-rocket.png" alt="">
        </div>
    </section>`;
    el.appendChild(componentEl);
    });
}

function createGreetingComponentForServices(el) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <section class="greeting">
        <div class="greeting-words">
            <p class="greeting__word">Mis</p>
            <div class="greeting__light-blue-words">
                <p class="greeting__word light-blue">servicios</p>
            </div>
        </div>
        <div class="greeting-img">
            <img src="images/portfolio.png" alt="">
        </div>
    </section>`;
    el.appendChild(componentEl);
}

function createGreetingComponentForPortfolio(el) {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <section class="greeting">
        <div class="greeting-words">
            <p class="greeting__word">Mis</p>
            <div class="greeting__light-blue-words">
                <p class="greeting__word light-blue">trabajos</p>
            </div>
        </div>
        <div class="greeting-img">
            <img src="images/portfolio.png" alt="">
        </div>
    </section>`;
    el.appendChild(componentEl);
}