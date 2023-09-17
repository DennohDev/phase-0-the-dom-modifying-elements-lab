const elementToRemove = document.getElementById("main");

if (elementToRemove) {
    elementToRemove.remove();
} else {
    console.log("Element not found.");
}

const newHeader = document.getElementById('victory');

  if (newHeader) {
    newHeader.textContent = 'Your Name is the champion';
  }
