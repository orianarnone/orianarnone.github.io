//Funzione per cambiare tema
function changeTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Aggiungi la classe per la transizione
  html.classList.add('color-theme-in-transition');

  // Cambia il tema e salva nel localStorage
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Rimuovi la classe dopo la durata della transizione
  setTimeout(() => {
    html.classList.remove('color-theme-in-transition');
  }, 1200); // Durata della transizione in millisecondi

  // Riproduci l'animazione nella direzione corretta
  const themeToggle = document.getElementById('theme-toggle');
  if (newTheme === 'light') {
    themeToggle.setDirection(-1); // Riproduci in direzione inversa
  } else {
    themeToggle.setDirection(1); // Riproduci in direzione normale
  }
  themeToggle.play();
}

// Seleziona elementi della modale
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-btn");

// Trova tutte le immagini nella pagina
const images = document.querySelectorAll("img");

// Aggiungi l'evento di click su ogni immagine
images.forEach(image => {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt || "Image";
  });
});

// Chiudi la modale quando clicchi sul pulsante X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Chiudi la modale cliccando fuori dall'immagine
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


function initializeLottie() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    // Assicurati che il Lottie player sia pronto
    themeToggle.addEventListener('ready', () => {
      if (savedTheme === 'light') {
        themeToggle.setDirection(-1); // Direzione inversa per il tema chiaro
      } else {
        themeToggle.setDirection(1); // Direzione normale per il tema scuro
      }
      themeToggle.play(); // Riproduci l'animazione
    });

    // Forza il trigger dell'evento "ready" se necessario
    if (themeToggle.isReady) {
      themeToggle.dispatchEvent(new Event('ready'));
    }
  }
}


// Al caricamento della pagina, applica il tema salvato
// document.addEventListener('DOMContentLoaded', () => {
//  const savedTheme = localStorage.getItem('theme') || 'light';
//  document.documentElement.setAttribute('data-theme', savedTheme);

  // Imposta la direzione iniziale del Lottie player
//  const themeToggle = document.getElementById('theme-toggle');
//  if (savedTheme === 'light') {
//    themeToggle.setDirection(-1); // Direzione inversa per il tema chiaro
//    themeToggle.play();
//  } else {
//    themeToggle.setDirection(1); // Direzione normale per il tema scuro
//    themeToggle.play();
//  }

//});





// Funzione per cambiare tema
// function changeTheme() {
//   const html = document.documentElement;
//   const currentTheme = html.getAttribute('data-theme');
//   const newTheme = currentTheme === 'light' ? 'dark' : 'light';

//   // Aggiungi la classe per la transizione
//   html.classList.add('color-theme-in-transition');
  
//   // Cambia il tema e salva nel localStorage
//   html.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);

//   // Rimuovi la classe dopo la durata della transizione
//   setTimeout(() => {
//     html.classList.remove('color-theme-in-transition');
//   }, 1200); // Durata della transizione in millisecondi
  
//   // Mostra il logo giusto
//   const darkLogo = document.getElementById('dark-logo');
//   const lightLogo = document.getElementById('light-logo');
  
//   if (newTheme === 'light') {
//     darkLogo.classList.remove('d-none');
//     lightLogo.classList.add('d-none');
//     lightLogo.stop(); // Riporta l'animazione al frame iniziale
//     darkLogo.play(); // Riproduce l'animazione
//   } else {
//     lightLogo.classList.remove('d-none');
//     darkLogo.classList.add('d-none');
//     darkLogo.stop(); // Riporta l'animazione al frame iniziale
//     lightLogo.play(); // Riproduce l'animazione
//   }
// }

// // Al caricamento della pagina, applica il tema salvato
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme') || 'light';
//   document.documentElement.setAttribute('data-theme', savedTheme);
  
//   // Mostra il logo giusto in base al tema salvato
//   const darkLogo = document.getElementById('dark-logo');
//   const lightLogo = document.getElementById('light-logo');
  
//   if (savedTheme === 'light') {
//     darkLogo.classList.add('d-none');
//     lightLogo.classList.remove('d-none');
//     darkLogo.stop(); // Assicurati che l'animazione sia all'inizio

//   } else {
//     lightLogo.classList.add('d-none');
//     darkLogo.classList.remove('d-none');
//     lightLogo.stop(); // Assicurati che l'animazione sia all'inizio
//   }
// });
