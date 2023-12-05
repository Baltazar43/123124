// Ждем полной загрузки контента
window.addEventListener("load", function () {
    // Показываем прелоадер
    showLoader();

    // Ждем 3 секунды и затем скрываем прелоадер и показываем контент
    setTimeout(function () {
        hideLoader();
        showContent();
    }, 3000);
});

function showLoader() {
    // Находим элемент прелоадера
    var loaderContainer = document.querySelector(".loader-container");

    // Показываем прелоадер
    loaderContainer.style.display = "flex";
}

function hideLoader() {
    // Находим элемент прелоадера
    var loaderContainer = document.querySelector(".loader-container");

    // Скрываем прелоадер
    loaderContainer.style.animation = "fadeOut 1s ease-in-out forwards";
}

function showContent() {
    // Находим элемент контента
    var content = document.querySelector(".content");

    // Показываем контент
    content.classList.add("show");
}
