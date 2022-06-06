const megaMenuCont = document.querySelector(".mega-menu-cont");
const megaMenu = document.querySelector(".mega-menu");

const btnFeatured = document.querySelector("#btn-featured");
const btnOnSale = document.querySelector("#btn-onsale");
const btnTopRated = document.querySelector("#btn-toprated");

const btnAllDepartments = document.querySelector(".btn-all-departments");
const menuAllDepartments = document.querySelector(".menu-all-departments");

const contentFeatured = document.querySelector("#content-featured");
const contentOnSale = document.querySelector("#content-onsale");
const contentTopRated = document.querySelector("#content-toprated");

btnAllDepartments.addEventListener("click", () => {
    const displayStatus = menuAllDepartments.style.display;
    if (displayStatus === "" || displayStatus === "none") {
        menuAllDepartments.style.display = "flex";
    }
    else {
        menuAllDepartments.style.display = "none";
    }
});

megaMenuCont.addEventListener("click", () => {
    const displayStatus = megaMenu.style.display;
    if (displayStatus === "none" || displayStatus === "") {
        megaMenu.style.display = "flex";
    }
    else {
        megaMenu.style.display = "none";
    }
});

btnFeatured.addEventListener("click", () => {
    let displayStatus = contentFeatured.style.display;
    if (displayStatus === "" || displayStatus === "none") {
        contentFeatured.style.display = "block";
        contentOnSale.style.display = "none";
        contentTopRated.style.display = "none";
    }
    else {
        contentFeatured.style.display = "none";
    }
});