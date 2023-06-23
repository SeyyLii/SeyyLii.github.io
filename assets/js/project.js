AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Création d'un réseau d'entreprise",
    cardImage: "assets/images/project-page/pkt.png",
    description: "(voir plus)<br>Voici une simulation d'un mini réseau d'entreprise réalisé sur packet tracer. L'entreprise peut communiquer avec l'exterieur, mais celui-ci n'a accès qu'à la DMZ.",
    Previewlink: "#",
    Githublink: "https://github.com/SeyyLii/Mini-reseau-d-entreprise.git",
  },
  {
    title: "Analyse d'un environnement réseau",
    cardImage: "assets/images/project-page/sae.png",
    description: "(voir plus)<br>Ce rapport est issus d'un projet visant à analyser l'environnement réseau de chez nous, ce projet utilise des logiciels comme Wireshark ou Intel Power Gadget.",
    Previewlink: "../dossier/SAE-12.pdf",
    Githublink: "",
  },
  {
    title: "Débogage d'équipement Cisco",
    cardImage: "assets/images/project-page/tp.jpeg",
    description: "(voir plus)<br>Cette image présente des routeurs/switch Cisco lors d'un TP visant à connecter plusieurs paillasse (mini-réseau) entre elles. Nous les avons configurés et connectés entre eux.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Jeu du casse brique",
    cardImage: "assets/images/project-page/casse.png",
    description: "(voir plus)<br>Voici le celebre jeu du casse-brique codé entierement en python en utilisant le logiciel 'Processing'. Le code (disponible sur github) est composé de plusieurs classe pour chaque élément du jeu.",
    Previewlink: "",
    Githublink: "https://github.com/SeyyLii/Jeu_Casse_Brique.git",
  },
  {
    title: "Annuaire téléphonique",
    cardImage: "assets/images/project-page/bdd.png",
    description: "(voir plus)<br>Vous trouverez ici un annuaire téléphonique codé en python grâce aux bibliothèques flask et sqlite3 pour faire le lien entre les pages. Le code est disponible sur github, il suffit d'executer le programme view.py.",
    Previewlink: "",
    Githublink: "https://github.com/SeyyLii/Annuaire.git",
  },
  {
    title: "Code Morse",
    cardImage: "assets/images/project-page/morse.jpg",
    description: "(voir plus)<br>Ce programme encode et décode le morse. L'utilisateur se laisse guider par les indications du programme en choisissant l'encodage ou décodage, un mot ou une lettre, le résultat est affiché à la fin.",
    Previewlink: "",
    Githublink: "https://github.com/SeyyLii/Morse.git",
  },
  {
    title: "Sniffer-Ethernet",
    cardImage: "assets/images/project-page/thales.png",
    description: "(voir plus)<br>La page que vous voyez est issus d'un projet en collaboration avec Thales qui consiste à décoder des trames binaires et les rendre accessible sur un site web à l'aide d'une base de données.",
    Previewlink: "/Portfolio/dossier/SAE-12.pdf",
    Githublink: "https://github.com/uMatt/Thales-Sniffer",
  },
  {
    title: "Travail en équipe",
    cardImage: "assets/images/project-page/foot.jpg",
    description: "(voir plus)<br>Mes 11 années de footballeur amateur ainsi que ma première année de formation au BUT R&T (40% de l'année est noté en travail de groupe) m'ont permis d'acquérir une gestion du travail en équipe.",
    Previewlink: "#",
    Githublink: "#",
  },
  {
    title: "Adaptabilité / Initiative",
    cardImage: "assets/images/project-page/sophidef.gif",
    description: "(voir plus)<br>Ma formation à l'IUT met l'accent sur la grande palette de compétences techniques à acquerir lors des differents TP et projet. Pour les maitriser il est important de s'adapter au contexte de chaque TP.",
    Previewlink: "#",
    Githublink: "#",
  },

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                  <p class = "description">${description}</p>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
