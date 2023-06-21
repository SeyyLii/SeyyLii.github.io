AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Animateur polyvalent",
    cardImage: "assets/images/experience-page/royalkids.png",
    place: "Antibes",
    time: "(Janvier-Avril, 2022)",
    desp: "<li>Accueil et animation des groupes d'enfants (centres, famille...)</li> <li>Gestion de la caisse</li> <li>Nettoyage du site</li> <li>Prise en charge des clients insatisfait</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Projet universitaire 2023",
    cardImage: "assets/images/experience-page/Logo-Thales-1.jpg",
    description:
      "Travail de groupe pour réaliser un projet en collaboration avec Thales : Création d'un site web lisant une base de donnée, modifiable par l'utilisateur",
  },
  {
    title: "Benevolat 2021",
    cardImage: "assets/images/experience-page/Association-Partage-ton-talent-2021-150x150.png",
    description:
      "Animation, action solidaire (aide administrative pour personnes âgées, réalisation des emballages cadeaux pour la FNAC) dans le cadre de l'aide au permis",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

