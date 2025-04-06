function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a teg de imagem
  const img = document.querySelector("#profile img")

  //Trocar a imagem
  if (html.classList.contains("light")) {
    //Caso ela seja light adicionar a imagem de modo claro
    img.setAttribute("src", "./assets/avatar.2.jpg")
  } else {
    // Se tiver sem a imadgem de modo claro manter a imagem padão
    img.setAttribute("src", "./assets/avatar-light.2.png")
  }
}
