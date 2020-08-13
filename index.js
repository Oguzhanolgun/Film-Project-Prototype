const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}



function addFilm(e) {
    let title = titleElement.value.trim();
    let director = directorElement.value;
    let url = urlElement.value;

    if(title === "" || director === "" || url === "") {
        ui.displayMessage("danger", "Lütfen Tüm Alanları Doldurun");
    }
    else if(controller(title)) {
        ui.displayMessage("danger", "Bu film zaten mevcut...");
    }
    else {
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);
        storage.addFilmsToStorage(newFilm);
        ui.displayMessage("success", "Film Başariyla Eklendi...");
        ui.clearInputs(titleElement, directorElement, urlElement);

    }
    
    
    e.preventDefault();
}

function deleteFilm(e) {
    if(e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    ui.displayMessage("success", "Silme İslemi Basarili");
    }
}

function clearAllFilms() {
    if(confirm("Are You Sure?")) {
        ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    }
   
}

function controller(newTitle) {
    let flag = false;
    const films = storage.getFilmsFromStorage();
    films.forEach(element => {
        if(element.title === newTitle) {
            flag = true;
        }
    });
    return flag;
}