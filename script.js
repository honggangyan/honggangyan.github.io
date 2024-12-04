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
      bulletPoints.forEach((point) => {
          const words = point.textContent.split(' '); // 将段落分割为单词
          point.innerHTML = ''; // 清空段落内容

          words.forEach((word, index) => {
              const span = document.createElement('span'); // 创建一个新的 span 元素
              span.textContent = word + ' '; // 添加单词和空格
              span.style.opacity = 0; // 初始透明度为0
              point.appendChild(span); // 将单词添加到段落中

              setTimeout(() => {
                  span.style.opacity = 1; // 显示单词
              }, delay);
              delay += 100; // 每个单词之间的延迟（300毫秒）
          });
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