const btn_mclaren = document.querySelector(".mclaren")
const btn_ferrari = document.querySelector(".ferrari")
const btn_redbull = document.querySelector(".redbull")
const btn_mercedes = document.querySelector(".mercedes")
const btn_aston_martin = document.querySelector(".aston-martin")
const btn_alpine = document.querySelector(".alpine")
const btn_haas = document.querySelector(".haas")
const btn_vcarb = document.querySelector(".vcarb")
const btn_williams = document.querySelector(".williams")
const btn_sauber = document.querySelector(".sauber")

const select_screen = document.querySelector("#selection-screen")

const team_name = document.querySelector("#team-name")

const left_content = document.querySelector("#left-content")

const click_img = document.querySelector(".click-img")

function setGradientBackground(color) {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) {
      left_content.style.background = `linear-gradient(to bottom, ${color} 0%, #212325 20%)`;
    } else if (screenWidth <= 425) {
      left_content.style.background = `linear-gradient(to bottom, ${color} 0%, #212325 20%)`;
    } else {
      left_content.style.background = `linear-gradient(to bottom, ${color} 0%, #212325 30%)`;
    }
  }

function generateRandomTime() {
    return (Math.random() * (8 - 0.1) + 0.1).toFixed(3);
  }

if (btn_mclaren) {
    btn_mclaren.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "McLaren F1 team"
        setGradientBackground("#f58129");  
        click_img.src = "assets/img/MCL_2024.png"
    })
}

if (btn_ferrari) {
    btn_ferrari.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Scuderia Ferrari"
        setGradientBackground("#ff0000");  
        click_img.src = "assets/img/SF_2024.png"
    })
}

if (btn_redbull) {
    btn_redbull.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Red Bull Racing"
        setGradientBackground("#00182c");  
        click_img.src = "assets/img/RB_2024.png"
    })
}

if (btn_mercedes) {
    btn_mercedes.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Mercedes AP F1 Team"
        setGradientBackground("#61cdc0"); 
        click_img.src = "assets/img/MERCEDES_2024.png"
    })
}

if (btn_aston_martin) {
    btn_aston_martin.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Aston Martin F1 Team"
        setGradientBackground("#006860");  
        click_img.src = "assets/img/AM_2024.png"
    })
}

if (btn_alpine) {
    btn_alpine.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Alpine F1 Team"
        setGradientBackground("#bf70add1");  
        click_img.src = "assets/img/ALP_2024.png"
    })
}    

if (btn_haas) {
    btn_haas.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Haas F1 Team"
        setGradientBackground("#FF0000");  
        click_img.src = "assets/img/HAAS_2024.png"
    })
}

if (btn_vcarb) {
    btn_vcarb.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Visa Cash App RB"
        setGradientBackground("#1432c6"); 
        click_img.src = "assets/img/VCARB_2024.png"
    })
}

if (btn_williams) {
    btn_williams.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Williams Racing"
        setGradientBackground("#009bd7"); 
        click_img.src = "assets/img/WILLIAMS_2024.png"
    })
}

if (btn_sauber) {
    btn_sauber.addEventListener("click", () => {
        select_screen.style.display = "none"
        team_name.textContent = "Kick Sauber F1 Team"
        setGradientBackground("#4ff317"); 
        click_img.src = "assets/img/SAUBER_2024.png"
    })
}

function updateTimes() {
    const times = document.querySelectorAll('.fake-time');
  
    times.forEach((times, index) => {
      if (index === 0) {
        
        times.textContent = "interval";
      } else {
        
        const randomTime = generateRandomTime();
        times.textContent = `+${randomTime}`;
      }
    });
  }
  
  updateTimes();
  
  setInterval(updateTimes, 25000);