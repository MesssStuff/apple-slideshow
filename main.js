var btns = document.querySelectorAll('.thumbs > .thumb > a');
var img = document.getElementsByClassName('images')[0];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(e) {
    img.style.transform = 'translateX(-' + i * 920 + 'px)';

    let current = e.currentTarget;
    let siblings = current.parentNode.parentNode.children;
    for (let j = 0; j < siblings.length; j++) {
      siblings[j].children[0].classList.remove('active');
    }
    current.classList.add('active');
  });
}
