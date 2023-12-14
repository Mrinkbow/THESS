
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.jude');
hiddenElements.forEach((el) => observer.observe(el));


var count = 0;
const heroAnimations = () => {
	// workaround for browsers throttling setInterval/setTimeout on inactive tabs
	// https://stackoverflow.com/questions/5927284/how-can-i-make-setinterval-also-work-when-a-tab-is-inactive-in-chrome
  	setTimeout(heroAnimations, 6000);
    const heroImage = document.querySelectorAll('.slider__image'),
          heroDetails = document.querySelectorAll('.slider__details'),
          heroDetailsBackground = document.querySelector('.slider__background--front'),
          heroNavDot = document.querySelectorAll('.slider__navigation--dot');
    for (var i=0; i<heroImage.length; i++) {
        heroImage[i].setAttribute('style', 'opacity: 0');
    }
    for (var i=0; i<heroDetails.length; i++) {
        heroDetails[i].setAttribute('style', 'opacity: 0');
    }
    for (i=0; i<heroNavDot.length; i++) {
		heroNavDot[i].setAttribute('style', 'background: #ed1319');
	} 
    count++;
    if (count > heroImage.length) {
        count = 1;
   	}
    heroImage[count-1].setAttribute('style', 'opacity: 1');
    heroImage[count-1].style.animation = 'slideInLeft 6s infinite';
    heroDetails[count-1].setAttribute('style', 'opacity: 1');
    heroDetails[count-1].style.animation = 'fadeIn .5s forwards, fadeOut .5s 4.5s forwards';
    heroDetailsBackground.style.animation = 'slideInAndOut 6s infinite forwards';
    heroNavDot[count-1].setAttribute('style', 'background: #fb8800');
}
heroAnimations();