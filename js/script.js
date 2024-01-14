window.onload = function() {
    const conslider = document.getElementById('contributionRange');
    const conoutput = document.getElementById('contributionValue');
    const retslider = document.getElementById('retirementRange');
    const retoutput = document.getElementById('retirementValue');

    conoutput.innerHTML = conslider.value + '%';
    retoutput.innerHTML = retslider.value ; 

    conslider.oninput = function() {
        conoutput.innerHTML = this.value + '%';
    }
    retslider.oninput = function() {
        retoutput.innerHTML = this.value ;
    }
}

//in mobile view, the navbar will collapse when user scroll down

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    document.querySelector('.navbar').classList.add('hidden');
  } else {
    // Scrolling up
    document.querySelector('.navbar').classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
