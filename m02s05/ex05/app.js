const modalAlert = (message) => {
  const modal = picoModal(message);

  modal.show();
};

window.alert = modalAlert;

modalAlert('Invatam JavaScript la Pixellab');
