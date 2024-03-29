const images = document.querySelectorAll('.image');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
let imageIndex = 0;

updateButtons();

function updateButtons() {
    prevButton.classList.toggle('hide', imageIndex === 0);
    nextButton.classList.toggle('hide', imageIndex === images.length - 1);
}

function toggleImageDisplay(elem) {
    elem.classList.toggle('hide');
    elem.classList.toggle('show');
}

function handlePrevButtonClick() {
    toggleImageDisplay(images[imageIndex]);
    imageIndex--;
    toggleImageDisplay(images[imageIndex]);
    updateButtons();
}

function handleNextButtonClick() {
    toggleImageDisplay(images[imageIndex]);
    imageIndex++;
    toggleImageDisplay(images[imageIndex]);
    updateButtons();
};

prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);
