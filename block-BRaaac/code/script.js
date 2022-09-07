let input = document.querySelector("input");
var root = document.querySelector("ul");

// Handling Watched/Unwatched
function handleToggle(event) {
  let id = event.target.dataset.id;
  let moviesList = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesList[id].isWatched = !moviesList[id].isWatched;
  console.log(moviesList[id].isWatched);
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

// Create Element Function
function createElm(type, attr = {}, ...children) {
  let element = document.createElement(type);

  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    } else if (typeof child === "string") {
      let node = document.createTextNode("child");
      element.append(node);
    }
  });
  return element;
}

// Display Movies
function displayMovies() {
  root.innerHTML = "";
  if (localStorage.getItem("moviesList") == null) return;
  let moviesArr = Array.from(JSON.parse(localStorage.getItem("moviesList")));
  moviesArr.forEach((elm, index) => {
    var li = createElm(
      "li",
      {
        className: "flex-1",
      },

      createElm("p", {
        className: "name",
        innerText: elm.name,
      }),

      createElm(
        "p",
        {},

        createElm("span", {
          "data-id": index,
          innerText: elm.isWatched ? "Watched" : "To Watched",
          onClick: handleToggle,
        }),

        createElm("span", {
          "data-id": index,
          innerText: "Remove",
          onClick: handleDelete,
        })
      )
    );

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
