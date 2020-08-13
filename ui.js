function UI() {

}

UI.prototype.addFilmToUI = function(newFilm) {
    let films = document.querySelector("#films");
    films.innerHTML += `<tr class = "allFilms">
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr> `
};

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";    
    element2.value = "";    
    element3.value = "";    
    

}

UI.prototype.displayMessage = function (type, message) {
//     <div class="alert alert-primary" role="alert">
//   This is a primary alert—check it out!
// </div>
        const cardBody = document.querySelectorAll(".card-body")[0];
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
}

UI.prototype.loadAllFilms = function(films) {
    const filmList = document.querySelector("#films");
    films.forEach(film => {
        filmList.innerHTML +=`<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title} </td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> `
    });
}

UI.prototype.deleteFilmFromUI = function(film) {
    film.parentElement.parentElement.remove();
}   

UI.prototype.clearAllFilmsFromUI = function() {
    filmList = document.getElementById("films");
    while(filmList.firstElementChild !== null) {
        filmList.firstElementChild.remove();
    }
}