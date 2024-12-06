function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const bulletPoints = document.querySelectorAll('.bullet-point');
  let delay = 0;
  let revealed = false;

  function revealText() {
      bulletPoints.forEach((point) => {
          const text = point.textContent;
          point.innerHTML = '';

          for (let i = 0; i < text.length; i++) {
              const span = document.createElement('span');
              span.textContent = text[i];
              span.style.opacity = 0;
              point.appendChild(span);

              setTimeout(() => {
                  span.style.opacity = 1;
              }, delay);
              delay += 30;
          }
      });
      revealed = true;
  }

  window.addEventListener('scroll', () => {
      const section = document.getElementById('text-container');
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      console.log('Section Position:', sectionPosition);
      console.log('Screen Position:', screenPosition);

      if (sectionPosition < screenPosition && !revealed) {
          setTimeout(() => {
              revealText();
          }, 2000); // 2000 milliseconds = 2 seconds
          window.removeEventListener('scroll', arguments.callee);
      }
  });
});