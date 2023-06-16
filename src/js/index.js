alert("Este não é um site oficial, está sendo usado apenas como amostra. DIVIRTA-SE!")

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
const main = document.querySelector("main");
const imagemBotaoTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    const modoEscuroEstaAtivoMain = main.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");
    main.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo, modoEscuroEstaAtivoMain) {

            imagemBotaoTema.setAttribute("src", "./src/imagens/sun.png")
        } else {

            imagemBotaoTema.setAttribute("src", "./src/imagens/moon.png")
        }
});