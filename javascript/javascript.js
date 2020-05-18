// SPA

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  setActiveTab(pageId);
}

// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".menu a");
  for (let page of pages) {
    if ("#" + pageId === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

setDefaultPage();


// Burgermenu functionallity

$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});


// Show footer when scrolled enough

// https://codepen.io/labanino/pen/mexgmL
/*
$(window).scroll(function(event) {
  function footer() {
    var elementHeight = $("#pages-wrapper").outerHeight();
    var scroll = $(window).scrollTop();
    if (scroll > elementHeight) {
      $(".footer-nav").fadeIn("slow").addClass("show");
    } else {
      $(".footer-nav").fadeOut("slow").removeClass("show");
    }

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
      if ($('.footer-nav').is(':hover')) {
        footer();
      } else {
        $(".footer-nav").fadeOut("slow");
      }
    }, 200000));
  }
  footer();
});
*/
// go to artist window from arrow

function goToArtists() {
  let artistWindow = document.getElementById("home-header");
  artistWindow.scrollIntoView();
}

function toTheTop() {
  let artistWindow = document.getElementById("pages-wrapper");
  artistWindow.scrollIntoView();
}
