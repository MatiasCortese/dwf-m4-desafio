function createItem(params){
    const template = document.querySelector('#portfolio-item-template');
    const container = document.querySelector(".services");
    template.content.querySelector(".service-img").src = params.url;
    template.content.querySelector(".services__service").href = params.link;
    template.content.querySelector(".service-title").textContent = params.title;
    template.content.querySelector(".service-text").textContent = params.description;
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

// Devolverá cada idem del portfolio o de los servicios
function getData(contentModel){
    if (contentModel == "work") {
        return fetch('https://cdn.contentful.com/spaces/r7e5y7iz1xvh/environments/master/entries?access_token=PIlKP0onDBu8dda8Dz1yG1W_B5j_Ic9lt8uwzOhxA20&content_type=work')
        .then(res => res.json())
        .then((data) => {
        const fieldsCollection = data.items.map((item, i) => {
                return {
                    url: 'https:' + data.includes.Asset[i].fields.file.url,
                    link: item.fields.url,
                    title: item.fields.title,
                    description: item.fields.description
                }
            })
            return fieldsCollection
        })
    }
    if (contentModel == "services") {
        return fetch('https://cdn.contentful.com/spaces/r7e5y7iz1xvh/environments/master/entries?access_token=PIlKP0onDBu8dda8Dz1yG1W_B5j_Ic9lt8uwzOhxA20&content_type=services')
        .then(res => res.json())
        .then((data) => {
        const fieldsCollection = data.items.map((item, i) => {
                return {
                    url: 'https:' + data.includes.Asset[i].fields.file.url,
                    title: item.fields.serviceTitle,
                    description: item.fields.serviceDescription
                }
            })
            return fieldsCollection
        })
    }
}

function showItems(contentModel){
    getData(contentModel).then(function(works){
        for (const work of works){
            createItem(work);
        }
    })
}








