function createPresentationComponent(el) {
    return fetch('https://cdn.contentful.com/spaces/r7e5y7iz1xvh/environments/master/entries?access_token=PIlKP0onDBu8dda8Dz1yG1W_B5j_Ic9lt8uwzOhxA20&content_type=presentacion')
    .then(res => { return res.json() })
    .then((data) => {
    const componentEl = document.createElement("div");
    componentEl.innerHTML = `
    <section class="about-me">
        <div class="about-me__container-text">
            <h3 class="about-me__title">${data.items[0].fields.title}</h3>
            <p class="about-me__text">${data.items[0].fields.cuerpo}</p>
        </div>
        <img src=${data.includes.Asset[0].fields.file.url} alt="" class="about-me__img">
    </section>`;
    el.appendChild(componentEl);
    });
};