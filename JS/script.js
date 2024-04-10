document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
          this.querySelector('.accordion-content').classList.remove('active');
        } else {
          accordionItems.forEach(item => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').classList.remove('active');
          });
          this.classList.add('active');
          this.querySelector('.accordion-content').classList.add('active');
        }
      });
    });
  });