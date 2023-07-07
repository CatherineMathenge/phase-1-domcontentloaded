function changeTextOnLoad() {
  document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.querySelector('p');
    paragraph.textContent = "This is really cool!";
  });
}

// Call the function to change the text on load
changeTextOnLoad();
