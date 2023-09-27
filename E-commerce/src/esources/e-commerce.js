document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behaviour: 'smooth'
        });
    });
});

// Function to show the overlay
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
}

// Function to hide the overlay
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
}

// Add an event listener to close the overlay when the close icon is clicked
const closeIcon = document.getElementById('close-icon');
closeIcon.addEventListener('click', hideOverlay);

// Set a timeout to show the overlay after 30 seconds (30000 milliseconds)
setTimeout(showOverlay, 30000);


const database = ["Phones and tablets", "TVs & audio", "appliances", "home", "office", "health and beauty", "fashion", "computing", "gaming"];

document.getElementById("searchButton").addEventListener("click", function () {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const results = database.filter(item => item.toLowerCase().includes(searchInput));

    const resultMessage = document.getElementById("resultMessage");

    if (results.length > 0) {
        resultMessage.textContent = "Search results: " + results.join(", ");
        resultMessage.style.color = "green"; // Optional: Style the result message
    } else {
        resultMessage.textContent = "Search results not found.";
        resultMessage.style.color = "red"; // Optional: Style the error message
    }
});

/*let currentSlide = 0;
const slides = document.querySelectorAll('.products');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });

    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Auto-advance the carousel every 5 seconds (adjust as needed)



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("products");
  let dots = document.getElementsByClassName("carousel-dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/

let currentSlide = 0;
const slides = document.querySelectorAll('.products');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - n)}%)`;
        dots[index].classList.remove('active');
    });

    dots[n].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
});

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Auto-advance the carousel every 5 seconds (adjust as needed)

