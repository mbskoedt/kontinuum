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
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if ("#" + pageId === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }

  }
}

setDefaultPage();

// Fit text
// jQuery(".artist-hashtags").fitText(1);

// Burgermenu functionallity

$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});


// Keep footer at bottom: 0;

// https://codepen.io/labanino/pen/mexgmL

$("#pages-wrapper").scroll(function(event) {
  function footer() {
    var scroll = $("#pages-wrapper").scrollTop();
    if (scroll > 1000) {
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

// scroll page to top of artist page

// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    let activeWindow = document.getElementById("pages-wrapper");
    let offsetHeight = document.getElementById("home-header").offsetHeight;
    activeWindow.scrollTo(window.scrollX, window.scrollY + offsetHeight);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a[href="#home"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);


// go to artist window from arrow

function goToArtists() {
  let artistWindow = document.getElementById("home-header")
  artistWindow.scrollIntoView();
}
