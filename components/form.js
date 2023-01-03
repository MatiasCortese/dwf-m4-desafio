function createFormComponent(el) {
    const componentEl = document.createElement("div");
    componentEl.classList.add("form");
    componentEl.innerHTML = `
    <h3 class="form-title">Escribime</h3>
        <form class="form-container">
            <div class="form-container__input-container">
                <div class="input-container__name">
                    <label for="nombre" class="label">Nombre</label>
                    <input type="text" name="nombre" id="" class="input" placeholder="Tu nombre">
                </div>
                <div class="input-container__email">
                    <label for="to" class="label">Email</label>
                    <input type="email" name="to" id="" class="input" placeholder="tu@mail.com">
                </div>
            </div>
            <label for="message" class="label">Mensaje</label>
            <textarea name="message" class="textarea"></textarea>
            <button class="btn">Enviar <img src="images/Vector.png" alt=""></button>
        </form>`;
    el.appendChild(componentEl);
}

async function getAndPostFormData(){
    const myFormEl = document.querySelector(".form-container");
    myFormEl.addEventListener("submit", function (evento){
        evento.preventDefault();
        const formData = new FormData(evento.target);
        const dataEnObjeto = Object.fromEntries(formData.entries());
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataEnObjeto)
        })
        .then((response) => response.json())
        .then((data) => console.log('Success:', data))
        .catch((error) => console.error('Error:', error))
    })
};

async function formMain(el){
    createFormComponent(el);
    await getAndPostFormData();
}



