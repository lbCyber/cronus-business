$(function () {
  const navToggle = () => {
    if (window.innerWidth < 769) {
      const bar = [
        "bar1",
        "bar2",
        "bar3",
        "navbox",
        "mobileNavButton"
      ]
      for (i = 0; i < 5; i++) {
        $(`.${bar[i]}`).toggleClass(`${bar[i]}Click`)
      }
    }
  }
  $('.mobileNavButton').on('click', function () {
    navToggle()
  })
  $('.navlinks').on('click', function () {
    navToggle()
  })
});