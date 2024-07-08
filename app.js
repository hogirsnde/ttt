window.addEventListener('load', function() {
          const loaderContainer = document.querySelector('.loader-container');
          const forLoading = document.querySelector('.for_loading');

          if (!loaderContainer || !forLoading) {
              console.error('Loader container or content element not found!');
              return;
          }

          console.log('Page loaded, starting loader timeout...');
          setTimeout(function() {
              console.log('Timeout reached, hiding loader and displaying content.');
              loaderContainer.style.display = 'none';
              forLoading.style.display = 'block';

              // Initialize AOS after content is displayed
              if (typeof AOS !== 'undefined') {
                  console.log('Initializing AOS...');
                  AOS.init();
              } else {
                  console.warn('AOS is not defined.');
              }
          }, 2000); // Adjust the time as needed
      });
//------------------------------------------------------------------





// Smooth scrolling for anchor links
document.querySelectorAll('.content-navabr ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const headerHeight = document.querySelector('.content-navabr').offsetHeight;

      if (targetSection) {
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition  - 100;
          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
      }

      // Hide .classactive from navbar after click
      document.querySelector(".navbar").classList.remove("classactive");
      document.getElementById("hamburger-checkbox").checked = false;
  });
});

// Toggle classactive for navbar menu button
document.querySelector(".menu_button").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("classactive");

  // Check if navbar is active to adjust the checkbox state
  const checkbox = document.getElementById("hamburger-checkbox");
  if (navbar.classList.contains("classactive")) {
      checkbox.checked = true;
  } else {
      checkbox.checked = false;
  }
});

// Dropdown menu functionality
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const arrowBtn = document.querySelector("#arrow");

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');

  // Adjust arrow icon on dropdown toggle
  arrowBtn.classList.toggle('fa-angle-up');
});

window.addEventListener('click', (event) => {
  if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('active');
  }
});


// --------------------------
// JavaScript for smooth scroll
document.querySelector('.button_menu a').addEventListener('click', function(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - 100;
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  }
});



      // -----------------------------------
      document.addEventListener("DOMContentLoaded", function () {
          const numberOfRows = 3;
          const slider = document.querySelector('.slider');
          const slideTrack = document.querySelector('.slide-track');
          const slides = document.querySelectorAll('.slide');
          const slideWidth = slides[0].offsetWidth;
          const trackWidth = slideWidth * slides.length;

          // Create clones for infinite scrolling
          for (let i = 1; i < numberOfRows; i++) {
              const cloneTrack = slideTrack.cloneNode(true);
              slider.appendChild(cloneTrack);
              cloneTrack.style.transform = `translateX(-${trackWidth}px)`;
              cloneTrack.style.top = `${i * 10}%`;
          }

          // Adjust animation for each row
          const animationDuration = 20; // Animation duration in seconds
          const translateDistance = trackWidth; // Distance to translate

          document.querySelectorAll('.slide-track').forEach((track, index) => {
              const delay = (index * translateDistance) / numberOfRows / slideWidth;
              track.style.animation = `scroll ${animationDuration}s linear infinite`;
          });
      });


      //all code tabs and card and modal
      
////////////////////////////////////////////////////////////////////////////////////////////////// FOR TABS
document.addEventListener("DOMContentLoaded", function() {
  const tabsBox = document.querySelector(".tabs-box");
  const allTabs = document.querySelectorAll(".tabs-box .tab");
  const subTabsBox = document.querySelector(".sub-tabs-box");

  // Function to activate a specific tab and show sub-tabs-box if needed
  function activateTab(tab) {
      // Remove active class from all tabs
      tabsBox.querySelectorAll(".tab.active").forEach(activeTab => {
          activeTab.classList.remove("active");
      });

      // Add active class to the clicked tab
      tab.classList.add("active");

      // Hide all sub-tabs initially
      subTabsBox.querySelectorAll(".subtab").forEach(subTab => {
          subTab.classList.remove("active");
      });

      // Show or hide sub-tabs-box based on the clicked tab
      if (tab.classList.contains("tab-cake") || tab.classList.contains("tab-baklava")) {
          subTabsBox.style.display = "flex"; // Show sub-tabs-box
      } else {
          subTabsBox.style.display = "none"; // Hide sub-tabs-box
      }
  }

  // Show tab cake by default on page load
  const defaultTab = document.querySelector(".tab-cake"); // Assuming you have a tab with class "tab-cake"
  if (defaultTab) {
      activateTab(defaultTab);
  }

  // Event listener for tabs in main tab box
  allTabs.forEach(tab => {
      tab.addEventListener("click", () => {
          activateTab(tab);
      });
  });

  // Event listener for sub-tabs
  const allSubTabs = document.querySelectorAll(".sub-tabs-box .subtab");
  allSubTabs.forEach(subTab => {
      subTab.addEventListener("click", () => {
          // Remove active class from all sub-tabs
          allSubTabs.forEach(st => st.classList.remove("active"));
          // Add active class to the clicked sub-tab
          subTab.classList.add("active");
      });
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////// END FOR TABS


document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  var span = document.getElementsByClassName("close")[0];

  document.querySelectorAll('.all_iamge').forEach(function(imageContainer) {
      imageContainer.addEventListener('click', function() {
          var imgSrc = imageContainer.querySelector('img').getAttribute('src');
          modal.style.display = "block";
          modalImg.setAttribute('src', imgSrc);
      });
  });

  span.onclick = function() {
      modal.style.display = "none";
  };

  // Handle both click and touch events for modal closing
  function closeModal() {
      modal.style.display = "none";
  }

  span.onclick = closeModal;

  // Close modal if clicked outside the modal content
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });

  // Close modal on touch events
  window.addEventListener('touchstart', function(event) {
      if (event.target === modal) {
          closeModal();
      }
  });
});


      function toggleView(view) {
          const cards = document.querySelector('.cards');
          const icons = document.querySelectorAll('.view-options i');
          
          // Remove existing view classes
          cards.classList.remove('one-card', 'two-cards', 'three-cards');
          // Add the new view class
          cards.classList.add(view);

          // Remove active class from all icons
          icons.forEach(icon => icon.classList.remove('active'));
          // Add active class to the clicked icon
          if (view === 'one-card') {
              document.querySelector('.far.fa-square').classList.add('active');
              document.querySelectorAll(".this_zoom1").forEach(ele=>{
                  ele.style.display="block";
              });
          } else if (view === 'three-cards') {
              document.querySelector('.fas.fa-th-list').classList.add('active');
              document.querySelectorAll(".this_zoom1").forEach(ele=>{
                  ele.style.display="none";
              });

          } else {
              document.querySelector('.fas.fa-th-large').classList.add('active');
              document.querySelectorAll(".this_zoom1").forEach(ele=>{
                  ele.style.display="block";
              });
          }
      }






