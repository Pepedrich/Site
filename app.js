document.addEventListener("mousemove", e => {
  Object.assign(document.documentElement, {
    style: `
      --movex: ${(e.clientX - window.innerWidth / 2) * -0.01}deg;
      --movey: ${(e.clientY - window.innerHeight / 2) * -0.02}deg;
    `
  });
});

function scrollToSection(sectionId) { 
  const section = document.getElementById(sectionId); 
  const sectionTop = section.offsetTop; 
  window.scrollTo({ 
    top: sectionTop, 
    behavior: 'smooth' 
  });
}

