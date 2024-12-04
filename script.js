function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const bulletPoints = document.querySelectorAll('.bullet-point');
  let delay = 0;

  function revealText() {
      bulletPoints.forEach((point, index) => {
          setTimeout(() => {
              point.style.opacity = 1; // 显示文本
          }, delay);
          delay += 1000; // 每个文本之间的延迟
      });
  }

  window.addEventListener('scroll', () => {
      const section = document.getElementById('about');
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      console.log('Section Position:', sectionPosition);
      console.log('Screen Position:', screenPosition);

      if (sectionPosition < screenPosition) {
          revealText();
          window.removeEventListener('scroll', arguments.callee); // 只执行一次
      }
  });
});