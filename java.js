const itens = document.querySelectorAll(".titulo-link a");
itens.forEach((item) => {
  item.classList.add("ativo");
});

itens.forEach((item) => {
  item.classList.remove("ativo");
});
itens[0].classList.add("ativo");

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  const possuiatibutos = img.hasAttribute("alt");
  console.log(possuiatibutos);
});
