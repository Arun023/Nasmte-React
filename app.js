const root = document.getElementById("root");
const ele = document.createElement("h1");
ele.innerHTML = "Hello World";
root.appendChild(ele);

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },

  "Heading1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 4"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(container);
