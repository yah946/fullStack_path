// Challenge 1 — Le gestionnaire de playlist
// Tu développes un lecteur de musique. Tu as un tableau de 10 chansons (chaque chanson est un objet : titre, artiste, durée en secondes, genre).

// 1. Affiche uniquement les titres de toutes les chansons
// 2. Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
// 3. Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
// 4. Calcule la durée totale de la playlist en minutes et secondes
// 5. Trouve la chanson la plus longue
// 6. Vérifie si toutes les chansons durent moins de 6 minutes
// 7. Vérifie si au moins une chanson est du genre "Jazz"
// 8. Trie les chansons par durée, de la plus courte à la plus longue

let chansons = [
    {titre:'1',artiste:'','duree en secondes':'180',genre:'Rock'},
    {titre:'2',artiste:'','duree en secondes':'188',genre:'Jazz'},
    {titre:'3',artiste:'','duree en secondes':'200',genre:''},
    {titre:'4',artiste:'','duree en secondes':'201',genre:'Rock'},
    {titre:'5',artiste:'','duree en secondes':'199',genre:''},
    {titre:'6',artiste:'','duree en secondes':'198',genre:'Jazz'},
    {titre:'7',artiste:'','duree en secondes':'178',genre:''},
    {titre:'8',artiste:'','duree en secondes':'183',genre:'Rock'},
    {titre:'9',artiste:'','duree en secondes':'179',genre:'Jazz'},
    {titre:'10',artiste:'','duree en secondes':'196',genre:''},
];

function displayTitle(chansons){
    titles = chansons.map(chanson => chanson.titre);
    return titles;
}
function chansonDeTypeRock(chansons){
    genreRock = chansons.filtre(chanson => chanson.genre === 'Rock' );
    return genreRock;
}
function dureeEnMinute(chansons){
    genreRock = chansons.map(chanson => Math.forEach(chanson['duree en secondes']/60)+':'+(chanson['duree en secondes']%60));
    return genreRock;
}
function dureeTotale(chansons){
    let sum = 0;
    for (let i = 0 ; i<chansons.length ; i++){
        sum += +chansons[i]['duree en secondes'];
    }
    let minute = sum/60 + ':' + sum%60;
    return `${sum} secondes and ${minute} minutes`;
}
function longueChonson(chansons){
    let chanson = chansons[0]['duree en secondes'];
    for (let i = 0 ; i<chansons.length ; i++){
        if(chansons[i]['duree en secondes']>chanson){
            chanson = chansons[i]['duree en secondes'];
        }
    }
    chanson = chansons.filter(ch => ch['duree en secondes'] == chanson)
    return chanson;
}
function longueChonson(chansons){
    let is_less = true;
    for (let i = 0 ; i<chansons.length ; i++){
        if(chansons[i]['duree en secondes']>6*60){
            return false;
        }
    }
    return is_less;
}
function chansonDeTypeJazz(chansons){
    let exist = true;
    for (let i = 0 ; i<chansons.length ; i++){
        if(chansons[i]['genre']>'Jazz'){
            return false;
        }
    }
    return exist;
}
function TrieDuChansons(chansons){

}


// Tests:
console.log('Liste des titres de toutes les chansons',displayTitle(chansons));
console.log('Toutes les chansons de genre "Rock"',chansonDeTypeRock(chansons));
console.log('Chaque durée en format "3:45" (minute:seconde)',dureeEnMinute(chansons));
console.log('La durée totale de la playlist en minutes et secondes',dureeTotale(chansons));
console.log('La chanson la plus longue',longueChonson(chansons));
console.log('si toutes les chansons durent moins de 6 minutes signifie true si non la fonction dois retourner false',longueChonson(chansons));
console.log('si une chanson est du genre "Jazz", la fonction retourne true si non elle dois retourner false',chansonDeTypeJazz(chansons));