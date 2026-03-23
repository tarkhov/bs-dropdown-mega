/*!
 * Bootstrap mega menu (https://github.com/tarkhov/bs-dropdown-mega)
 * Copyright 2026 Tarkhov
 * Licensed under MIT (https://github.com/tarkhov/bs-dropdown-mega/blob/main/LICENSE)
 */
document.addEventListener('DOMContentLoaded', function () {
  const menus = document.querySelectorAll('.dropdown-mega-menu')
  if (menus?.length) {
    menus.forEach(menu => {
      menu.addEventListener('click', function(event) {
        event.stopPropagation()
      })
    })
  }

  const SELECTOR_HOVER = '.dropdown-hover'
  const toggles = document.querySelectorAll(`${SELECTOR_HOVER} [data-bs-toggle="dropdown"]`)
  if (toggles?.length) {
    toggles.forEach(toggle => {
      toggle.addEventListener('mouseenter', function() {
        bootstrap.Dropdown.getOrCreateInstance(toggle).show()
      })
      toggle.closest(SELECTOR_HOVER).addEventListener('mouseleave', function() {
        bootstrap.Dropdown.getOrCreateInstance(toggle).hide()
      })
    })
  }
})