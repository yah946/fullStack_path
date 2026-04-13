// Challenge 2 — L'analyse des ventes

// Tu es data analyst dans un magasin. Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).

// 1. Calcule le chiffre d'affaires total de l'année
// 2. Calcule le chiffre d'affaires moyen par mois
// 3. Trouve le mois avec le meilleur chiffre d'affaires
// 4. Trouve le mois avec le moins de clients
// 5. Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50,000 Dh
// 6. Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
// 7. Trie les mois par chiffre d'affaires décroissant
// 8. Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

const ventes = [
  { mois: "Janvier", chiffre_affaires: 12000, nb_clients: 95, ville: "Casablanca" },
  { mois: "Février", chiffre_affaires: 13500, nb_clients: 110, ville: "Rabat" },
  { mois: "Mars", chiffre_affaires: 12250, nb_clients: 120, ville: "Marrakech" },
  { mois: "Avril", chiffre_affaires: 15000, nb_clients: 130, ville: "Tanger" },
  { mois: "Mai", chiffre_affaires: 50000, nb_clients: 145, ville: "Fez" },
  { mois: "Juin", chiffre_affaires: 45001, nb_clients: 150, ville: "Agadir" },
  { mois: "Juillet", chiffre_affaires: 65788, nb_clients: 160, ville: "Casablanca" },
  { mois: "Août", chiffre_affaires: 17500, nb_clients: 155, ville: "Marrakech" },
  { mois: "Septembre", chiffre_affaires: 77340, nb_clients: 140, ville: "Rabat" },
  { mois: "Octobre", chiffre_affaires: 15500, nb_clients: 135, ville: "Tanger" },
  { mois: "Novembre", chiffre_affaires: 14800, nb_clients: 125, ville: "Fez" },
  { mois: "Décembre", chiffre_affaires: 19813, nb_clients: 180, ville: "Casablanca" }
];

function chiffreAffairesTotal(ventes){
    return ventes.reduce((sum,vente) => sum + vente.chiffre_affaires,0);
}
function chiffreAffairesMoyen(ventes){
    average = chiffreAffairesTotal(ventes)/ventes.length;
    return average.toFixed(2);
}
function meilleurChiffreAffaires(ventes){
    meilleur = ventes.reduce((previous,current) => current.chiffre_affaires < previous.chiffre_affaires ? previous : current);
    return meilleur;
}
function moinsNomberDeClients(ventes){
    let min = ventes.reduce((prev,current) => {
        return current.nb_clients < prev.nb_clients ? current : prev
    });
    return min;
}
function Ca50k(ventes){
    return ventes.filter(vente => vente.chiffre_affaires>=50000);
}
function StatisticByCity(ventes){
    let grouped = ventes.reduce((acc,vente) => {
        let city = vente.ville;
        if(!acc[city]) {
            acc[city] = {
                nb_clients:0,
                chiffre_affaires:0
            };
        }
        acc[city].nb_clients += vente.nb_clients;
        acc[city].chiffre_affaires += vente.chiffre_affaires;
        return acc;
    },{});
    return grouped;
}
function sort(ventes){
    return ventes.sort((a,b)=> a.chiffre_affaires - b.chiffre_affaires);
}
function croissance(ventes){
    return ventes.reduce((a,b)=> b.chiffre_affaires - a.chiffre_affaires,0);
}

console.log('Calculons le chiffre d\'affaires total de l\'année: ',chiffreAffairesTotal(ventes));
console.log('Calculons le chiffre d\'affaires moyen par mois: ',chiffreAffairesMoyen(ventes));
console.log('Cherchons le mois avec le meilleur chiffre d\'affaires: ',meilleurChiffreAffaires(ventes));
console.log('Cherchons le mois avec le moins de clients:',moinsNomberDeClients(ventes));
console.log('Créons Nouveau tableau avec uniquement les mois où le CA dépasse 50,000 Dh:',Ca50k(ventes));
console.log('Créons un résumé par ville : pour chaque ville, le CA total et le nombre total de clients:',StatisticByCity(ventes));
console.log('Trions les mois par chiffre d\'affaires décroissant:',sort(ventes));
console.log('Calculons la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la:',croissance(ventes));