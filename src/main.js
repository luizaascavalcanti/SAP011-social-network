import home from "./pages/home/index.js";
import biblioteca from "./pages/biblioteca/index.js";
import mensagens from "./pages/mensagens/index.js";

const main = document.querySelector("#root");
const init = () => {
  window.addEventListener('hashchange',() => {
    main.innerHTML = " ";
    switch(window.location.hash) {
      case "#":
      main.appendChild(home());
      break;
      case "#biblioteca":
      main.appendChild(biblioteca());
      break;
      case "#mensagens":
      main.appendChild(mensagens());
      break;
  

     }
  })
}
window.addEventListener("load", () => {
main.appendChild(home());
init()
})