// using js
// const heading = document.createElement("h1");
// heading.textContent = "Hello world using JS";
// const divElement = document.getElementById("root");
// divElement.appendChild(heading);

// using react
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Namaste React 1"),
    React.createElement("h2", {}, "Namaste React 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Namaste React 2"),
    React.createElement("h2", {}, "Namaste React 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
