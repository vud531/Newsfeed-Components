
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu[0].classList.toggle('menu--open');
  return 'awesome'
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu');

// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
console.log(menuButton[0].addEventListener('click', toggleMenu));
