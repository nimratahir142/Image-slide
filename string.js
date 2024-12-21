// Select buttons, slider, list, and thumbnails
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');

// Event listeners for the buttons
nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));

// Function to handle slider movement
function moveSlider(direction) {
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
        // Move first slider item to the end
        sliderList.appendChild(sliderItems[0]);
        // Move first thumbnail to the end
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else if (direction === 'prev') {
        // Move last slider item to the front
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        // Move last thumbnail to the front
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    // Handle animation cleanup
    slider.addEventListener(
        'animationend',
        () => {
            slider.classList.remove('next', 'prev');
        },
        { once: true }
    );
}

// Sync thumbnails with slider
function updateThumbnails() {
    const thumbnailItems = thumbnail.querySelectorAll('.item');
    thumbnailItems.forEach((item, index) => {
        item.classList.toggle('active', index === 0);
    });
}

// Call updateThumbnails on load and after each move
updateThumbnails();
nextBtn.addEventListener('click', updateThumbnails);
prevBtn.addEventListener('click', updateThumbnails);
