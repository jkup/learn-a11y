var modal        = document.querySelector('.modal');
var modalButton  = document.querySelector('.modal-button');
var modalOverlay = document.querySelector('.modal-overlay');
var cancelButton = document.querySelector('.modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);


function open() {
  // Show the modal and overlay
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
}

function close() {
  // Hide the modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
