function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle('light');
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light');
  // }
  // else {
  //   html.classList.add('light');
  // }

  if (html.classList.contains('light')) {
    img.setAttribute('src', this.getUrlDaImagemPadrao());
  }
  else {
    img.setAttribute('src', getUrlDaImagemSecundaria());
  }
}
function getUrlDaImagemPadrao() {
  return './assets/avatar-cesar.jpg';
}
function getUrlDaImagemSecundaria() {
  return './assets/avatar-cesar-light.jpg';
}