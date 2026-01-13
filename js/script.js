const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  icon.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update icon
  if (body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '☀';
    localStorage.setItem('theme', 'light');
  }
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    // Select ALL elements with the class 'img1'
    const whatsappImages = document.querySelectorAll('.img1');

    // Loop through each image found
    whatsappImages.forEach(image => {
        image.style.cursor = 'pointer'; // Make them all look clickable
        
        image.addEventListener('click', () => {
            const phoneNumber = "2347060433000"; // Your phone number
            const message = "Hello!"; 
            
            const whatsappUrl = `https://wa.me/${2347060433000}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });
});