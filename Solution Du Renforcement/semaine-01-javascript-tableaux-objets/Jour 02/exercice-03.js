// Challenge 3 — Le système de notation
// Un site web de recettes a un tableau d'avis utilisateurs (pseudo, note de 1 à 5, commentaire, date). Tu as 15 avis.
let avis = [
    {'pseudo':'nanometre32','note':4,'commentaire':'hhh good my brother','date':'2023-03-01'},
    {'pseudo':'macro123','note':4.2,'commentaire':'Khoya sf hgrti l Europe','date':'2018-03-05'},
    {'pseudo':'sami_san','note':5,'commentaire':'enjoy!','date':'2026-03-05'},
    {'pseudo':'alikhan','note':2,'commentaire':'hadchi imta ghadi ibda','date':'2026-12-22'},
    {'pseudo':'Da7mad','note':4.3,'commentaire':'sir tn3es dabayfoutk l7al','date':'2026-03-30'},
    {'pseudo':'moussa','note':1.4,'commentaire':'dakxi hhh','date':'2026-07-03'},
    {'pseudo':'hajjvero','note':4,'commentaire':'ok,merci','date':'2026-04-03'},
    {'pseudo':'soufiane','note':4,'commentaire':'m39oula','date':'2026-04-10'},
    {'pseudo':'yaraGo','note':4,'commentaire':'good vibe!','date':'2017-04-11'},
    {'pseudo':'broly','note':4,'commentaire':'zwina hadi','date':'2026-05-01'},
    {'pseudo':'otmannsab','note':3,'commentaire':'la aww','date':'2020-05-12'},
    {'pseudo':'karima','note':5,'commentaire':'hadi zwina','date':'2026-05-28'},
    {'pseudo':'toufik+999','note':3.7,'commentaire':'dkhl dkhl n9sro','date':'2026-06-16'},
    {'pseudo':'3sila','note':4,'commentaire':'hhh video zwin','date':'2026-06-13'},
    {'pseudo':'lhar','note':1,'commentaire':'dislike dislike!! #@la@###tfoo','date':'2026-04-03'},
]
// 1. Calcule la note moyenne arrondie à 1 décimale
function noteMoyenne(avis){
    somme = avis.reduce((sum,cur)=>sum+cur.note,0);
    moyenne = somme/avis.length;
    result = moyenne.toFixed(1);
    return result;
}
console.log(noteMoyenne(avis));
// 2. Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
function avisParNote(avis){
    let result = {
        '1':0,'2':'0','3':0,'4':0,'5':0
    }
    avis.map(a=>{
        let note = Math.floor(a.note);
        result[note]++;
    })
    return result;
}
console.log(avisParNote(avis));
// 3. Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
function filtreAvis(avis){
    result = {
        'positifs':[],
        'negatifs':[]
    }
    for(let commentaire of avis){
        commentaire.note>=4?result.positifs.push(commentaire):result.negatifs.push(commentaire);
    }
    return result;
}
console.log(filtreAvis(avis));
// 4. Trie les avis du plus récent au plus ancien
function TriageDesAvis(avis){
    return avis.sort((a,b)=>new Date(a.date)-new Date(b.date));
}
console.log(TriageDesAvis(avis));
// 5. Trouve l'avis le plus long (en nombre de caractères dans le commentaire)
function longConmmentaire(avis){
    let long = avis[0].commentaire;
    for(let a of avis){
        if(a.commentaire.length > long.length){
            long = a.commentaire;
        }
    }
    return long;
}
console.log(longConmmentaire(avis));
// 6. Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"
function resume(avis){
    const positifsAvis = filtreAvis(avis).positifs.length;
    const negatifsAvis = filtreAvis(avis).negatifs.length;
    const neutresAvis = avis.filter(a => Math.floor(a.note) === 3).length;
    return `${noteMoyenne(avis)} basé sur ${avis.length} avis - ${positifsAvis} positifs, ${negatifsAvis} negatifs et ${neutresAvis} neutres.`
}
console.log(resume(avis));