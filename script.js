window.addEventListener("keydown", (e) => {
  document.getElementById(
    "result"
  ).innerHTML = `A Tecla pressionada e <span>${e.key}</span><span>Codigo chave: ${e.keyCode}</span>`;
});
