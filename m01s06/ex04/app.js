(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      const message = 'Mouseul este pe scena';
      console.log(message);
      showMessage(message, 'message');
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouseul nu este pe scena';
      console.log(message);
      showMessage(message, 'message');
    });

    // function functions are hoisted
    function showMessage(message, cssClass = '') {
      const paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.classList.add(cssClass);

      document.body.append(paragraphElement);
    }
  });
})();
