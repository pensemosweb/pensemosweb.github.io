{
  const rootHtml = document.documentElement;
  const logo = document.querySelector('.logo');

  window.addEventListener('scroll', function () {
   const distance = rootHtml.scrollTop;

   if (distance > 100) {
     logo.style = 'width: 300px';
   } else {
     logo.style = 'width: 500px';
   }
  });
}