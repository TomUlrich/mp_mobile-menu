const menuBox = document.getElementById('menu-box');
const menuIcon = document.getElementById('menu-icon');
const menuLink = [...document.getElementsByClassName('menu-link')];

menuIcon.onclick = () => {
  menuBox.classList.toggle('menu-opened');

  if (menuBox.classList.contains('menu-opened')) {
    menuIcon.src = '../img/cross-svgrepo-com.svg';
  } else {
    menuIcon.src = '../img/menu-svgrepo-com.svg';
  }
};

menuLink.forEach(link => link.onclick = () => {
  menuBox.classList.remove('menu-opened');
})
