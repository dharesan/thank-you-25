const people = {
  a: {
    name: "Alex",
    message: "You are deeply appreciated ✨",
    color: "#f5c542"
  },
  b: {
    name: "Bella",
    message: "Thank you for being amazing 🌸",
    color: "#ffb6c1"
  },
  c: {
    name: "Chris",
    message: "Your presence means a lot 💙",
    color: "#8ecae6"
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (people[id]) {
  document.getElementById("name").textContent = people[id].name;
  document.getElementById("message").textContent = people[id].message;
  document.body.style.background = people[id].color;
} else {
  document.getElementById("name").textContent = "Hello ✨";
  document.getElementById("message").textContent = "This message was meant just for you.";
}
