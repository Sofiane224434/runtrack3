async function jourtravaille(date) {
    let Jour = date.getDate();
    let Joursemaine = date.getDay();
    let Jsemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let Mois = date.getMonth();
    let NMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let Annee = date.getFullYear();
    const response = await fetch(`https://calendrier.api.gouv.fr/jours-feries/metropole/${Annee}.json`);
    const joursFeries = await response.json();
    let dateCompare = `${Annee}-${String(Mois + 1).padStart(2, "0")}-${String(Jour).padStart(2, "0")}`;
    if (dateCompare in joursFeries) {
        console.log(`Non, ${Jsemaine[Joursemaine]} ${Jour} ${NMois[Mois]} ${Annee} est un jour ferié`);
    }
    else if (Joursemaine == 0 || Joursemaine == 6) {
        console.log(`Non, ${Jsemaine[Joursemaine]} ${Jour} ${NMois[Mois]} ${Annee} est un week-end`);
    }
    else {
        console.log(`Non, ${Jsemaine[Joursemaine]} ${Jour} ${NMois[Mois]} ${Annee} est un jour travaillé`);
    }
    
}

jourtravaille(new Date("2024-11-01T15:00"));