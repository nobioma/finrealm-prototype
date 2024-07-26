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

// Chat functionality with responses to user
document.addEventListener('DOMContentLoaded', function () {
  // Function to display messages with a typewriter effect
  function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbox-messages');

    // Create a new message element
    const newMessage = document.createElement('div');
    newMessage.className = 'chat-message';

    // Add sender information
    const senderElement = document.createElement('strong');
    senderElement.textContent = sender + ': ';
    newMessage.appendChild(senderElement);

    // Add the message text
    const messageText = document.createElement('span');
    newMessage.appendChild(messageText);
    messagesContainer.appendChild(newMessage);

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        messageText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 25); // Adjust typing speed (milliseconds)
      }
    }

    typeWriter();
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
  }

  // Function to handle sending messages
  function sendMessage(event, customMessage = null) {
    if (event && event.key !== 'Enter') {
      return;
    }
    if (event && event.key === 'Enter') {
      // Prevent the default form submission behavior
      event.preventDefault();
    }
      // Get the input value
      const input = document.getElementById('chatbox-input');
      const message = customMessage || input.value.trim();

      // Check if the input is not empty
    if (message) {
      // Clear the input field
      if (!customMessage) input.value = '';

      // Display the user message with typewriter effect
      displayMessage(message, 'You');

      // Send the message to the server
      fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      })
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            console.error('Error:', data.error);
            return;
          }

          // Display the bot's response with typewriter effect
          displayMessage(data.response, 'Bot');
        })
        .catch(error => console.error('Error:', error));
    }
  }

  // Sends this to chat when 'Learn More' button is clicked
  function customSend() {
    const customMessage = 'What is Forex Trading?';
    console.log('Custom send reached!!!')
    sendMessage(null, customMessage);
    // customMessage = ''
  }
  const icon = document.querySelector('.fixed-plugin-2-button-nav');
  if (icon) {
    console.log('Icon initialized!');
    icon.addEventListener('click', customSend);

  }

  // Optionally, add a sample message to test the typewriter effect
  // displayMessage('Hello! This is a test message.');

  // Attach the sendMessage function to the global scope
  window.sendMessage = sendMessage;
});

/* // Stock data toggling
document.addEventListener('DOMContentLoaded', function () {
  // Get the card to be toggled
  const toggleCard = document.getElementById('toggle-card');

  // Function to toggle the card
  function toggleCardFunction(event) {
    // Check if the event target is a contenteditable element
    if (event.target.closest('[contenteditable="true"]')) {
      return; // Do nothing if clicked inside a contenteditable element
    }

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

  // Add event listeners to all contenteditable elements to stop propagation
  const editableElements = document.querySelectorAll('[contenteditable="true"]');
  editableElements.forEach(editable => {
    editable.addEventListener('click', function (event) {
      event.stopPropagation(); // Stop the click event from bubbling up
    });
  });
}); */


// Page searching
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('page-search-input');

  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      // Get the input value and convert it to lowercase
      const pageName = searchInput.value.trim().toLowerCase();

      // Check if the entered page name exists in the mappings
      if (window.pageMappings[pageName]) {
        // Redirect to the corresponding page
        window.location.href = window.pageMappings[pageName];
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

/* Removed bar chart from DOM
document.addEventListener('DOMContentLoaded', function () {
  // Get the chart container
  var chartContainer = document.getElementById('chart-bars');

  // Remove the chart container from the DOM
  if (chartContainer) {
    chartContainer.parentElement.parentElement.remove();
  }
});
*/

// Edit stock tickers and data
document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
  element.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior
      const newSymbol = this.innerText.trim(); // Get the new symbol
      const datasetIndex = parseInt(this.getAttribute('data-id')); // Get the dataset index

      // Validate the symbol if needed
      if (newSymbol === '') {
        alert('Stock symbol cannot be empty');
        return;
      }

      // Update the symbol in the editable element
      this.setAttribute('data-symbol', newSymbol);
      this.innerText = newSymbol;

      // Fetch new data from the API
      /* fetch(`/fetch-stock-data?symbol=${newSymbol}`)
        .then(response => response.json()) // Parse the JSON data from the response
        .then(data => {
          if (data.error) { // Check if there is an error in the response
            alert(data.error); // Display the error message
            return; // Exit the function if there is an error
          } */
      const data = {
        "Meta Data": {
          "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
          "2. Symbol": "AAPL",
          "3. Last Refreshed": "2024-07-24",
          "4. Time Zone": "US/Eastern"
        },
        "Monthly Time Series": {
          "2024-07-24": {
          "1. open": "712.09",
          "2. high": "937.23",
          "3. low": "511.92",
          "4. close": "718.54",
          "5. volume": "932208953"
          },
          "2024-06-28": {
          "1. open": "292.90",
          "2. high": "720.20",
          "3. low": "192.15",
          "4. close": "510.62",
          "5. volume": "1723984420"
          },
          "2024-05-31": {
            "1. open": "369.58",
            "2. high": "493.00",
            "3. low": "169.11",
            "4. close": "292.25",
            "5. volume": "1336570142"
          },
          "2024-04-30": {
            "1. open": "269.58",
            "2. high": "393.00",
            "3. low": "269.11",
            "4. close": "292.25",
            "5. volume": "1236570142"
          },
          "2024-03-31": {
            "1. open": "169.58",
            "2. high": "293.00",
            "3. low": "169.11",
            "4. close": "192.25",
            "5. volume": "1136570142"
          },
          "2024-02-29": {
            "1. open": "269.58",
            "2. high": "393.00",
            "3. low": "269.11",
            "4. close": "292.25",
            "5. volume": "1236570142"
          },
          "2024-01-31": {
            "1. open": "369.58",
            "2. high": "493.00",
            "3. low": "369.11",
            "4. close": "392.25",
            "5. volume": "1336570142"
          },
          "2023-12-31": {
            "1. open": "469.58",
            "2. high": "593.00",
            "3. low": "469.11",
            "4. close": "492.25",
            "5. volume": "1436570142"
          }
        }
      }

          // Assuming data is structured as shown in your example
          const monthlyData = data['Monthly Time Series'];

          // Extract the dates and find the most recent date
          const dates = Object.keys(monthlyData);
          const mostRecentDate = dates.sort((a, b) => new Date(b) - new Date(a))[0];

          // Filter and sort monthlyData by desired months within year
          const filteredMonthlyData = filterDataFromJanuaryToCurrentMonth(monthlyData);

          // Get the closing price for the most recent date
          const mostRecentPrice = monthlyData[mostRecentDate]['4. close'];

          // Update the price in the card
          const card = document.querySelector(`.col-8 .numbers [data-id="${datasetIndex}"]`).closest('.col-8');
          if (card) {
            card.querySelector('.price .text-success').innerText = `$${mostRecentPrice}`; // Setting the price with a dollar sign
            // card.querySelector('.text-success').innerText = `Daily Price: $${mostRecentPrice}`; // Setting the daily price with a dollar sign (adjust as needed)
          }

          // Update the chart dataset
          updateChartDataset(chartInstance, datasetIndex, filteredMonthlyData);

          // Update the chart label for the relevant dataset
          updateChartLabel(datasetIndex, newSymbol);
          
        // .catch(error => console.error('Error fetching stock data:', error));
    }
  })
});


// Function to fetch stock data and update the card
function fetchStockData(newSymbol, cardId) {
  fetch('/fetch-stock-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ symbol: symbol })
  })
    .then(response => response.json())
    .then(data => {
      const card = document.getElementById(`click-card-${cardId}`);
      if (card) {
        const priceElement = card.querySelector('.price');
        if (priceElement) {
          // Update the price element with the new stock price
          priceElement.innerText = `$${data.price}`;
        }
      }
    })
    .catch(error => console.error('Error fetching stock data:', error));
}


// Toggle line on line chart
document.addEventListener('DOMContentLoaded', function () {
  // Get all remove line on chart cards
  const cards = document.querySelectorAll('.removable-line');

  // Function to toggle the dataset visibility
  function toggleDataset(event) {
    // Get the index of the dataset from the clicked card
    const card = event.currentTarget;
    const datasetIndex = parseInt(card.getAttribute('data-index'), 10);

    // Get the dataset from the chart
    const dataset = chartInstance.data.datasets[datasetIndex];

    // Toggle the visibility of the dataset
    dataset.hidden = !dataset.hidden;

    // Update the chart
    chartInstance.update();
  }

  // Add click event listener to each card
  cards.forEach(card => {
    card.addEventListener('click', toggleDataset);
  });
});









// Edit FinSpace functionality
document.addEventListener('DOMContentLoaded', function () {
  const editButton = document.getElementById('edit-button');
  const editableText = document.getElementById('editable-text');

  let isEditing = false;

  editButton.addEventListener('click', function () {
    if (isEditing) {
      // Save the changes
      editableText.contentEditable = "false";
      removeSelection(); // Remove any remaining selection or cursor
      editButton.querySelector('i').classList.remove('fa-save');
      editButton.querySelector('i').classList.add('fa-user-edit');
    } else {
      // Enable editing
      editableText.contentEditable = "true";
      setCaretAtEnd(editableText);
      editableText.focus();
      editButton.querySelector('i').classList.remove('fa-user-edit');
      editButton.querySelector('i').classList.add('fa-save');
    }

    isEditing = !isEditing;
  });

  editableText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior

      // Save the changes
      editableText.contentEditable = "false";
      removeSelection(); // Remove any remaining selection or cursor
      editButton.querySelector('i').classList.remove('fa-save');
      editButton.querySelector('i').classList.add('fa-user-edit');
      isEditing = false;
    }
  });
  
  function setCaretAtEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
    element.focus();
  }
  function removeSelection() {
    const selection = window.getSelection();
    selection.removeAllRanges(); // Clear any existing selection
  }
});

/* // Mock function to simulate fetching and plotting
function simulateFetchAndPlot() {
  
  };

  const monthlyData = mockData['Monthly Time Series'];
  const filteredData = filterDataFromJanuaryToCurrentMonth(monthlyData);
  //console.log(filteredData);

  /*const filteredData = {
    "2024-01-31": { "4. close": "450.00" },
    "2024-02-29": { "4. close": "155.00" },
    "2024-03-31": { "4. close": "300.00" },
    "2024-04-30": { "4. close": "165.00" },
    "2024-05-31": { "4. close": "170.00" },
    "2024-06-30": { "4. close": "175.00" },
    "2024-07-31": { "4. close": "250.00" }
  };

  // Assuming you have a function to update the chart
  updateChartDataset(chartInstance, 0, filteredData); // Example datasetIndex = 0

  // Update chart label if needed
  updateChartLabel(0, 'TEST0');
  //updateChartLabel(1, 'TEST1');
  //updateChartLabel(2, 'TEST2');
  //updateChartLabel(3, 'TEST3');
  //updateChartLabel(3, 'Test')




window.onload = function () {
  simulateFetchAndPlot();
  console.log('Reached the onload');
}; */