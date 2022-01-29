const FR_H2 = "<strong>Développeur</strong>, <strong>créateur</strong> et <strong>entrepreneur</strong> dans le domaine des <strong>nouvelles technologies</strong>.";
const FR_DESCRIPTION = "L’informatique est une passion, à 11 ans je passais déjà beaucoup de temps devant mon PC à développer des projets. J’ai toujours aimé apprendre et quoi de mieux qu’un secteur en constante évolution comme l’informatique pour cela ? Me voilà 14 ans plus tard, grandi, revenant de Grenoble qui possède un bassin industriel très actif en France et qui est une ville dynamique. En effet, j'ai pu par exemple participer à deux hackathons (1 : la technologie dans les logements sociaux de demain (dont j’ai obtenu un prix), 2 : la technologie pour la qualité de l’air) et moult autres événements (conférences, meetups, soirées de lancements …). Je sors du parcours MIAGE reconnu dans le domaine depuis 50 ans et d’une université rentrant dans le top 100 des meilleures universités Mondial (d’après le classement de Shangai 2020). Enfin j’ai pu faire mes premiers projets professionnels dans des entreprises proposants des environnements de travail différents (Edenred, Reborn (Start up Suisse) Cohorte Technologies(TPE dans l’IoT), Edifixio (ESN filiale de ATOS)). Aujourd’hui je nourris mon envie d’entreprendre qui a grandit pendant mes études supérieures en lançant mon entreprise QIETS dans ce même secteur.  <span class=\"CV\"><i class=\"fas fa-link\"></i><a href=\"cv/Nourrit_Gabriel_CV_1.pdf\" target=\"_blank\">Curriculum Vitae</a></span>";
const FR_CONTACT = "contacter";
const EN_H2 = "<strong>Developer</strong>, <strong>innovator</strong> and <strong>entrepreneur</strong> in <strong>computer science</strong>.";
const EN_DESCRIPTION = "Since my 11 I have spent a lot of time developing projects. I have always liked to learn and what is better than computer science for that? Now, I am 25 and i m coming back from Grenoble which is a location where many companies are in France. Grenoble is a really dynamic city. Indeed, I was able to participate in two hackathons (1: technology in future of low-rent housing (HLM) (for which I won a prize), 2: technology to improve air quality) and many other events (conferences, meetups, launch parties ...). I graduated from the MIAGE course, which has been recognised in computer science for 50 years, and from a university that is one of the top 100 universities in the world (according to the Shanghai 2020 ranking). Finally, I was able to do my first professional projects in companies offering different working environments (Edenred, Reborn (Swiss start-up), Cohorte Technologies (VSE in IoT), Edifixio (ESN subsidiary of ATOS)). Today I am feeding my entrepreneurial spirit that grew during my higher education by launching my company QIETS in this same sector.";
const EN_CONTACT = "contact";

if($(window).width()>1050){
const SCROLLBAR_OPTIONS = {
  'damping' : .02,
  'renderByPixels':true
};
var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('#scroll'), SCROLLBAR_OPTIONS);
}

function changeLanguage(language){
  $(".active").toggleClass("active");
  $("#"+language).toggleClass("active");
  switch(language){
    case "FR":
    $("h2").html(FR_H2);
    $(".description").html(FR_DESCRIPTION);
    $("#contact").html(FR_CONTACT);
    break;
    case "EN":
    $("h2").html(EN_H2);
    $(".description").html(EN_DESCRIPTION);
    $("#contact").html(EN_CONTACT);
    break;
    case "IT":
    $("h2").html(EN_H2);
    $(".description").html(EN_DESCRIPTION);
    $("#contact").html(EN_CONTACT);
    break;
  }
}