{
  const rootHtml = document.documentElement;
  const logo = document.querySelector('.logo');

  window.addEventListener('scroll', function () {
   const distance = rootHtml.scrollTop;

   if (distance > 100) {
     logo.classList.add('small');
   } else {
     logo.classList.remove('small');
   }
  });
}