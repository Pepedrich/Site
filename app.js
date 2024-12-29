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
    window.scrollTo(
      { 
      top: sectionTop, 
      behavior: 'smooth' 
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarMenu = document.getElementById("navbarMenu");

    navbarToggle.addEventListener("click", function() {
        navbarMenu.classList.toggle("navbar__menu--active");
    });
  });


  async function task1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("Task 1 result");
        }, 1000);
    });
  }

  async function task2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve("Task 2 result");
        }, 1000);
    });
  }

  async function task3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve("Task 3 result");
        }, 1000);
    });
  }

  async function runTasks() {
    const result1 = await task1();
    const result2 = await task2();
    const result3 = await task3();
    
    console.log(result1, result2, result3);
  }

  runTasks();



  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    posts.forEach(post => {
        console.log(post.title);
    });
  }

  fetchPosts();


  async function fetchCurrencyRates() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
  
    console.log("Base Currency:", data.base);
    console.log("Date:", data.date);
    Object.entries(data.rates).forEach(([currency, rate]) => {
      console.log(`Currency: ${currency}, Rate: ${rate}`);
    });
  }
  
  fetchCurrencyRates();
  


