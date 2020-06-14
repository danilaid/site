(function () {
    var burgerItem = document.querySelector('.burger');
    var menu = document.querySelector('.header__nav');
    var menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', function () {
      menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', function () {
      menu.classList.remove('header__nav_active');
    });
  })();