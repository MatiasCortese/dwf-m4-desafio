async function main() {
    const headerEl = document.querySelector("header");
    const greetingEl = document.querySelector(".greeting-container");
    const presentationEl = document.querySelector(".about-me-container");
    const servicesEl = document.querySelector(".services-container");
    const formEl = document.querySelector(".form-div");
    const footerEl = document.querySelector("footer");
    createHeader(headerEl);
    createFooterComponent(footerEl);
    if (document.URL.includes("index.html")) {
        createGreetingComponentForIndex(greetingEl);
        createPresentationComponent(presentationEl);
        showItems("services");
        formMain(formEl);
    }
    else if (document.URL.includes("portfolio.html")) {
        createGreetingComponentForPortfolio(greetingEl);
        showItems("work");
    }
    else if (document.URL.includes("servicios.html")) {
        createGreetingComponentForServices(greetingEl);
        showItems("services");
    }
    else if (document.URL.includes("contacto.html")) {
        formMain(formEl);
    }
}

main();