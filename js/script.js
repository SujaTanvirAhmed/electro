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

const loginWindow = document.querySelector(".login-window");
const btnRegister = document.querySelector(".btn-register");
const btnLogin = document.querySelector(".btn-login");
const btnClose = document.querySelector(".btn-close");
btnRegister.addEventListener("click", () => {
    loginWindow.style.display = "block";
    setTimeout(() => {
        loginWindow.style.right = 0;
    }, 200);
});
btnClose.addEventListener("click", () => {
    loginWindow.style.right = -(loginWindow.clientWidth) + "px";
    setTimeout(() => {
        loginWindow.style.display = "none";
    }, 500);
});

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
    contentFeatured.style.display = "grid";
    contentOnSale.style.display = "none";
    contentTopRated.style.display = "none";
});

btnOnSale.addEventListener("click", () => {
    contentOnSale.style.display = "grid";
    contentFeatured.style.display = "none";
    contentTopRated.style.display = "none";
});

btnTopRated.addEventListener("click", () => {
    contentTopRated.style.display = "grid";
    contentFeatured.style.display = "none";
    contentOnSale.style.display = "none";
});
