let input = document.querySelector("input");
var container = document.querySelector("ul");
var root = ReactDOM.createRoot(container);
function handleToggle(event) {
  let id = event.target.dataset.id;
  let moviesList = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesList[id].isWatched = !moviesList[id].isWatched;
  localStorage.setItem("moviesList", JSON.stringify(moviesList));
  displayMovies();
}

function handleDelete(event) {
  let moviesList = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesList.splice(event.target.dataset.id, 1);
  localStorage.setItem("moviesList", JSON.stringify(moviesList));
  displayMovies();
}

let createElm = React.createElement;

function displayMovies() {
  if (localStorage.getItem("moviesList") == null) return;
  let moviesArr = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  let list = moviesArr.map((movie, index) => {
    // return createElm(
    //   "li",
    //   {
    //     key: index,
    //     className: "flex-1",
    //   },

    //   createElm(
    //     "p",
    //     {
    //       className: "name",
    //     },
    //     elm.name
    //   ),

    //   createElm(
    //     "p",
    //     {},

    //     createElm(
    //       "span",
    //       {
    //         "data-id": index,
    //         onClick: handleToggle,
    //       },
    //       elm.isWatched ? "Watched" : "To Watched"
    //     ),

    //     createElm(
    //       "span",
    //       {
    //         "data-id": index,
    //         onClick: handleDelete,
    //       },
    //       "Remove"
    //     )
    //   )
    // );
    return (
      <li className="flex-1" key={index}>
        <p className="name">{movie.name}</p>
        <p>
          <span data-id={index} onClick={handleToggle}>
            {movie.isWatched ? "Watched" : "To Watch"}
          </span>
          <span data-id={index} onClick={handleDelete}>
            Remove
          </span>
        </p>
      </li>
    );
  });

  root.render(list);
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

displayMovies();
