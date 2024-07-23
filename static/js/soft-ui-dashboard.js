// =========================================================
// Soft UI Dashboard - v1.0.7
// =========================================================

// Product Page: https://www.creative-tim.com/product/soft-ui-dashboard
// Copyright 2023 Creative Tim (https://www.creative-tim.com)
// Licensed under MIT (https://github.com/creativetimofficial/soft-ui-dashboard/blob/main/LICENSE)

// Coded by www.creative-tim.com

// =========================================================

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

"use strict";
(function() {
  var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    if (document.getElementsByClassName('main-content')[0]) {
      var mainpanel = document.querySelector('.main-content');
      var ps = new PerfectScrollbar(mainpanel);
    };

    if (document.getElementsByClassName('sidenav')[0]) {
      var sidebar = document.querySelector('.sidenav');
      var ps1 = new PerfectScrollbar(sidebar);
    };

    if (document.getElementsByClassName('navbar-collapse')[0]) {
      var fixedplugin = document.querySelector('.navbar:not(.navbar-expand-lg) .navbar-collapse');
      var ps2 = new PerfectScrollbar(fixedplugin);
    };

    if (document.getElementsByClassName('fixed-plugin')[0]) {
      var fixedplugin = document.querySelector('.fixed-plugin');
      var ps3 = new PerfectScrollbar(fixedplugin);
    };
  };
})();

// Verify navbar blur on scroll
navbarBlurOnScroll('navbarBlur');


// initialization of Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Fixed Plugin

document.addEventListener("DOMContentLoaded", function () {
  // Handle Fixed Plugin 1
  /*
  var fixedPlugin1 = document.getElementById('settings-plugin');
  var plugin1Button = fixedPlugin1.querySelector('.fixed-plugin-button');
  var plugin1Card = fixedPlugin1.querySelector('.card');
  var plugin1CloseButtons = fixedPlugin1.querySelectorAll('.fixed-plugin-close-button');
  var pluginButtonNav = document.querySelector('.fixed-plugin-button-nav')

  if (plugin1Button) {
    plugin1Button.onclick = function () {
      if (!fixedPlugin1.classList.contains('show')) {
        fixedPlugin1.classList.add('show');
      } else {
        fixedPlugin1.classList.remove('show');
      }
    };
  }

  if (pluginButtonNav) {
    pluginButtonNav.onclick = function () {
      if (!fixedPlugin1.classList.contains('show')) {
        fixedPlugin1.classList.add('show');
      } else {
        fixedPlugin1.classList.remove('show');
      }
    }
  }

  plugin1CloseButtons.forEach(function (closeButton) {
    closeButton.onclick = function () {
      fixedPlugin1.classList.remove('show');
    };
  });

  document.body.addEventListener('click', function (e) {
    if (!pluginButtonNav.contains(e.target) && !plugin1Card.contains(e.target)) {
      fixedPlugin1.classList.remove('show');
    }
  });
  */
  // Handle Fixed Plugin 2
  var fixedPlugin2 = document.getElementById('chat-plugin');
  var plugin2Button = fixedPlugin2.querySelector('.fixed-plugin-button');
  var plugin2Card = fixedPlugin2.querySelector('.chat-card');
  var plugin2CloseButtons = fixedPlugin2.querySelectorAll('.fixed-plugin-close-button');
  var plugin2ButtonNav = document.querySelector('.fixed-plugin-2-button-nav')


  if (plugin2Button) {
    plugin2Button.onclick = function () {
      if (!fixedPlugin2.classList.contains('show')) {
        fixedPlugin2.classList.add('show');
      } else {
        fixedPlugin2.classList.remove('show');
      }
    };
  }

  if (plugin2ButtonNav) {
    plugin2ButtonNav.onclick = function () {
      if (!fixedPlugin2.classList.contains('show')) {
        fixedPlugin2.classList.add('show');
      } else {
        fixedPlugin2.classList.remove('show');
      }
    }
  }

  plugin2CloseButtons.forEach(function (closeButton) {
    closeButton.onclick = function () {
      fixedPlugin2.classList.remove('show');
    };
  });

  document.body.addEventListener('click', function (e) {
    if (!plugin2ButtonNav.contains(e.target) && !plugin2Button.contains(e.target) && !plugin2Card.contains(e.target)) {
      fixedPlugin2.classList.remove('show');
    }
  });
});

// Tabs navigation

var total = document.querySelectorAll('.nav-pills');

total.forEach(function(item, i) {
  var moving_div = document.createElement('div');
  var first_li = item.querySelector('li:first-child .nav-link');
  var tab = first_li.cloneNode();
  tab.innerHTML = "-";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  var list_length = item.getElementsByTagName("li").length;

  moving_div.style.padding = '0px';
  moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth + 'px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.onmouseover = function(event) {
    let target = getEventTarget(event);
    let li = target.closest('li'); // get reference
    if (li) {
      let nodes = Array.from(li.closest('ul').children); // get array
      let index = nodes.indexOf(li) + 1;
      item.querySelector('li:nth-child(' + index + ') .nav-link').onclick = function() {
        moving_div = item.querySelector('.moving-tab');
        let sum = 0;
        if (item.classList.contains('flex-column')) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
          }
          moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
          moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
          }
          moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
        }
      }
    }
  }
});


// Tabs navigation resize

window.addEventListener('resize', function(event) {
  total.forEach(function(item, i) {
    item.querySelector('.moving-tab').remove();
    var moving_div = document.createElement('div');
    var tab = item.querySelector(".nav-link.active").cloneNode();
    tab.innerHTML = "-";

    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);

    item.appendChild(moving_div);

    moving_div.style.padding = '0px';
    moving_div.style.transition = '.5s ease';

    let li = item.querySelector(".nav-link.active").parentElement;

    if (li) {
      let nodes = Array.from(li.closest('ul').children); // get array
      let index = nodes.indexOf(li) + 1;

      let sum = 0;
      if (item.classList.contains('flex-column')) {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector('li:nth-child(' + j + ')').offsetHeight;
        }
        moving_div.style.transform = 'translate3d(0px,' + sum + 'px, 0px)';
        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';
        moving_div.style.height = item.querySelector('li:nth-child(' + j + ')').offsetHeight;
      } else {
        for (var j = 1; j <= nodes.indexOf(li); j++) {
          sum += item.querySelector('li:nth-child(' + j + ')').offsetWidth;
        }
        moving_div.style.transform = 'translate3d(' + sum + 'px, 0px, 0px)';
        moving_div.style.width = item.querySelector('li:nth-child(' + index + ')').offsetWidth + 'px';

      }
    }
  });

  if (window.innerWidth < 991) {
    total.forEach(function(item, i) {
      if (!item.classList.contains('flex-column')) {
        item.classList.add('flex-column', 'on-resize');
      }
    });
  } else {
    total.forEach(function(item, i) {
      if (item.classList.contains('on-resize')) {
        item.classList.remove('flex-column', 'on-resize');
      }
    })
  }
});


function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// End tabs navigation


//Set Sidebar Color
function sidebarColor(a) {
  var parent = a.parentElement.children;
  var color = a.getAttribute("data-color");

  for (var i = 0; i < parent.length; i++) {
    parent[i].classList.remove('active');
  }

  if (!a.classList.contains('active')) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }

  var sidebar = document.querySelector('.sidenav');
  sidebar.setAttribute("data-color", color);

  if (document.querySelector('#sidenavCard')) {
    var sidenavCard = document.querySelector('#sidenavCard');
    let sidenavCardClasses = ['card', 'card-background', 'shadow-none', 'card-background-mask-' + color];
    sidenavCard.className = '';
    sidenavCard.classList.add(...sidenavCardClasses);

    var sidenavCardIcon = document.querySelector('#sidenavCardIcon');
    let sidenavCardIconClasses = ['ni', 'ni-diamond', 'text-gradient', 'text-lg', 'top-0', 'text-' + color];
    sidenavCardIcon.className = '';
    sidenavCardIcon.classList.add(...sidenavCardIconClasses);
  }

}

// Set Navbar Fixed
function navbarFixed(el) {
  let classes = ['position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
  const navbar = document.getElementById('navbarBlur');

  if (!el.getAttribute("checked")) {
    navbar.classList.add(...classes);
    navbar.setAttribute('navbar-scroll', 'true');
    navbarBlurOnScroll('navbarBlur');
    el.setAttribute("checked", "true");
  } else {
    navbar.classList.remove(...classes);
    navbar.setAttribute('navbar-scroll', 'false');
    navbarBlurOnScroll('navbarBlur');
    el.removeAttribute("checked");
  }
};

// Navbar blur on scroll

function navbarBlurOnScroll(id) {
  const navbar = document.getElementById(id);
  let navbarScrollActive = navbar ? navbar.getAttribute("navbar-scroll") : false;
  let scrollDistance = 5;
  let classes = ['position-sticky', 'blur--nav', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky'];
  let toggleClasses = ['shadow-none'];

  if (navbarScrollActive == 'true') {
    window.onscroll = debounce(function() {
      if (window.scrollY > scrollDistance) {
        blurNavbar();
      } else {
        transparentNavbar();
      }
    }, 10);
  } else {
    window.onscroll = debounce(function() {
      transparentNavbar();
    }, 10);
  }

  function blurNavbar() {
    navbar.classList.add(...classes)
    navbar.classList.remove(...toggleClasses)

    toggleNavLinksColor('blur');
  }

  function transparentNavbar() {
    if (navbar) {
      navbar.classList.remove(...classes)
      navbar.classList.add(...toggleClasses)

      toggleNavLinksColor('transparent');
    }
  }

  function toggleNavLinksColor(type) {
    let navLinks = document.querySelectorAll('.navbar-main .nav-link')
    let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

    if (type === "blur") {
      navLinks.forEach(element => {
        element.classList.remove('text-body')
      });

      navLinksToggler.forEach(element => {
        element.classList.add('bg-dark')
      });
    } else if (type === "transparent") {
      navLinks.forEach(element => {
        element.classList.add('text-body')
      });

      navLinksToggler.forEach(element => {
        element.classList.remove('bg-dark')
      });
    }
  }
}


// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//Set Sidebar Type
function sidebarType(a) {
  var parent = a.parentElement.children;
  var color = a.getAttribute("data-class");

  var colors = [];

  for (var i = 0; i < parent.length; i++) {
    parent[i].classList.remove('active');
    colors.push(parent[i].getAttribute('data-class'));
  }

  if (!a.classList.contains('active')) {
    a.classList.add('active');
  } else {
    a.classList.remove('active');
  }

  var sidebar = document.querySelector('.sidenav');

  for (var i = 0; i < colors.length; i++) {
    sidebar.classList.remove(colors[i]);
  }

  sidebar.classList.add(color);
}


// Toggle Sidenav
const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
const iconSidenav = document.getElementById('iconSidenav');
const sidenav = document.getElementById('sidenav-main');
let body = document.getElementsByTagName('body')[0];
let className = 'g-sidenav-pinned';

if (iconNavbarSidenav) {
  iconNavbarSidenav.addEventListener("click", toggleSidenav);
}

if (iconSidenav) {
  iconSidenav.addEventListener("click", toggleSidenav);
}

function toggleSidenav() {
  if (body.classList.contains(className)) {
    body.classList.remove(className);
    setTimeout(function() {
      sidenav.classList.remove('bg-white');
    }, 100);
    sidenav.classList.remove('bg-transparent');

  } else {
    body.classList.add(className);
    sidenav.classList.add('bg-white');
    sidenav.classList.remove('bg-transparent');
    iconSidenav.classList.remove('d-none');
  }
}

// Resize navbar color depends on configurator active type of sidenav

let referenceButtons = document.querySelector('[data-class]');

window.addEventListener("resize", navbarColorOnResize);

function navbarColorOnResize() {
  if (window.innerWidth > 1200) {
    if (referenceButtons.classList.contains('active') && referenceButtons.getAttribute('data-class') === 'bg-transparent') {
      sidenav.classList.remove('bg-white');
    } else {
      sidenav.classList.add('bg-white');
    }
  } else {
    sidenav.classList.add('bg-white');
    sidenav.classList.remove('bg-transparent');
  }
}

// Deactivate sidenav type buttons on resize and small screens
window.addEventListener("resize", sidenavTypeOnResize);
window.addEventListener("load", sidenavTypeOnResize);

function sidenavTypeOnResize() {
  let elements = document.querySelectorAll('[onclick="sidebarType(this)"]');
  if (window.innerWidth < 1200) {
    elements.forEach(function(el) {
      el.classList.add('disabled');
    });
  } else {
    elements.forEach(function(el) {
      el.classList.remove('disabled');
    });
  }
}

// Typewriter effect on text
document.addEventListener('DOMContentLoaded', function () {
  // Function to display messages with a typewriter effect
  function displayMessage(message) {
    const messagesContainer = document.getElementById('chatbox-messages');

    // Clear previous messages
    messagesContainer.innerHTML = '';

    const newMessage = document.createElement('div');
    newMessage.className = 'chat-message';
    messagesContainer.appendChild(newMessage);

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        newMessage.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 25); // Adjust typing speed (milliseconds)
      }
    }

    typeWriter();
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
  }

  // Function to handle sending messages
  function sendMessage(event) {
    if (event.key === 'Enter') {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the input value
      const input = document.getElementById('chatbox-input');
      const message = input.value.trim();

      // Check if the input is not empty
      if (message) {
        // Clear the input field
        input.value = '';

        // Display the new message with typewriter effect
        displayMessage(message);
      }
    }
  }

  // Optionally, add a sample message to test the typewriter effect
  // displayMessage('Hello! This is a test message.');

  // Attach the sendMessage function to the global scope
  window.sendMessage = sendMessage;
});

// Stock data toggling
document.addEventListener('DOMContentLoaded', function () {
  // Get the card to be toggled
  const toggleCard = document.getElementById('toggle-card');

  // Function to toggle the card
  function toggleCardFunction(event) {
    // Get the content from the clicked card
    const content = event.currentTarget.innerHTML;

    // Set the content to the toggle card
    toggleCard.querySelector('.card-body').innerHTML = content;

    // Toggle the class
    toggleCard.classList.toggle('toggled');
  }

  // Add event listeners to all clickable stock cards
  const clickableCards = document.querySelectorAll('.clickable-card');
  clickableCards.forEach(card => {
    card.addEventListener('click', toggleCardFunction);
  });
});

// Page searching
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('page-search-input');

  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      // Get the input value and convert it to lowercase
      const pageName = searchInput.value.trim().toLowerCase();

      // Define a mapping of page names to their URLs
      const pageMappings = {
        'dashboard': '../pages/dashboard.html',
        'vr news': '../pages/virtual-reality.html',
        'finconnect': '../pages/connect.html',
        'profile': '../pages/profile.html',
        'invest': '../pages/invest.html'
        // Add more mappings as needed
      };

      // Check if the entered page name exists in the mappings
      if (pageMappings[pageName]) {
        // Redirect to the corresponding page
        window.location.href = pageMappings[pageName];
      } else {
        // Optionally handle the case where the page name is not found
        alert('Page not found.');
      }
    }
  });
});

// Enlargened card
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.enlargeable-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('enlarged');
    });
  });
});


