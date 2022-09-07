let input = document.querySelector("input");
var root = document.querySelector("ul");

// Handling Watched/Unwatched
function handleToggle(event) {
  let id = event.target.dataset.id;
  let moviesList = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesList[id].isWatched = !moviesList[id].isWatched;
  localStorage.setItem("moviesList", JSON.stringify(moviesList));
  displayMovies();
}

// Handling Delete
function handleDelete(event) {
  let moviesList = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesList.splice(event.target.dataset.id, 1);
  localStorage.setItem("moviesList", JSON.stringify(moviesList));
  displayMovies();
}

// Display Movies
function displayMovies() {
  root.innerHTML = "";
  if (localStorage.getItem("moviesList") == null) return;
  let moviesArr = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesArr.forEach((elm, index) => {
    let li = document.createElement("li");
    li.classList.add("flex-1");
    let movieName = document.createElement("p");
    movieName.innerText = elm.name;
    movieName.classList.add("name");
    let options = document.createElement("p");
    let toggle = document.createElement("span");
    if (elm.isWatched === true) {
      toggle.innerText = "Watched";
    } else {
      toggle.innerText = "To Watch";
    }
    toggle.setAttribute("data-id", index);
    toggle.addEventListener("click", handleToggle);
    let dlt = document.createElement("span");
    dlt.innerText = "Remove";
    dlt.setAttribute("data-id", index);
    dlt.addEventListener("click", handleDelete);
    options.append(toggle, dlt);
    li.append(movieName, options);
    root.append(li);
  });
}

// Handling Input
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && event.target.value) {
    localStorage.setItem(
      "moviesList",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("moviesList") || "[]"),
        { name: event.target.value, isWatched: false },
      ])
    );

    event.target.value = "";
    displayMovies();
  }
});

// Calling Display Movies
displayMovies();
