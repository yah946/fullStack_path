// Le système de réservation d'un restaurant

// Tu développes le système de réservation d'un restaurant (30 places max).

// 1. Crée une structure pour gérer les réservations : chaque réservation a un id, un nom_client, un nombre_personnes, une date, une heure, un statut (confirmée, en attente, annulée) et un telephone
const reservations = [
  {id:1,nom_client:'Ibrahim',nombre_personnes:5,date:'2026-04-08',heure:'14:00',statut:'annulée',telephone:'0630441208'},
  {id:2,nom_client:'Mohamed',nombre_personnes:2,date:'2026-03-12',heure:'15:33',statut:'en attente',telephone:'0611441208'},
  {id:3,nom_client:'Aya',nombre_personnes:2,date:'2025-07-08',heure:'09:30',statut:'confirmée',telephone:'0630441368'},
  {id:4,nom_client:'Alaa',nombre_personnes:3,date:'2025-04-09',heure:'10:45',statut:'en attente',telephone:'0630321208'},
  {id:5,nom_client:'Sami',nombre_personnes:5,date:'2026-01-03',heure:'22:00',statut:'confirmée',telephone:'0639941208'},
  {id:6,nom_client:'Mohamed',nombre_personnes:7,date:'2026-02-04',heure:'13:00',statut:'confirmée',telephone:'0730441208'},
  {id:7,nom_client:'Karim',nombre_personnes:12,date:'2026-01-09',heure:'19:05',statut:'annulée',telephone:'0630441118'},
  {id:8,nom_client:'Jamila',nombre_personnes:4,date:'2026-03-22',heure:'14:06',statut:'annulée',telephone:'0630041208'},

  {id:9,nom_client:'Soufiane',nombre_personnes:4,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0630400208'},
  {id:10,nom_client:'Hemza',nombre_personnes:10,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0630400208'},
  {id:11,nom_client:'Hicham',nombre_personnes:5,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0630400208'},
  {id:12,nom_client:'Fatima',nombre_personnes:1,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0630400208'},
  {id:13,nom_client:'Abubaker',nombre_personnes:2,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0630400208'},

  {id:14,nom_client:'Monir',nombre_personnes:1,date:'2026-01-30',heure:'02:19',statut:'confirmée',telephone:'0630440008'},

  {id:15,nom_client:'Ayoub',nombre_personnes:4,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0677441208'},
  {id:16,nom_client:'Mustapha',nombre_personnes:4,date:'2026-04-08',heure:'05:00',statut:'confirmée',telephone:'0677441208'},

  {id:17,nom_client:'Ziyad',nombre_personnes:2,date:'2026-04-08',heure:'05:00',statut:'en attente',telephone:'0677441208'},
  {id:18,nom_client:'Asmae',nombre_personnes:2,date:'2026-04-08',heure:'14:30',statut:'confirmée',telephone:'0630447208'},
  {id:19,nom_client:'Hatim',nombre_personnes:1,date:'2025-08-14',heure:'08:22',statut:'en attente',telephone:'0790441208'},
] 
// 2. Écris la logique pour ajouter une réservation : vérifie que le total de personnes sur ce créneau (date + heure) ne dépasse pas 30. Si c'est plein, la réservation passe en "en attente"
function addReservation(new_reserv,reservations){
  const check = reservations.filter(reserv => reserv.date == new_reserv['date'] && reserv.heure == new_reserv['heure'] && reserv.statut == 'confirmée');
  const places_occupees = check.reduce((a,b)=>a+b.nombre_personnes,0)
  if(places_occupees + new_reserv['nombre_personnes'] <= 30){
    reservations.push(new_reserv);
    return new_reserv;
  }
  new_reserv.statut = 'en attente'
  reservations.push(new_reserv);
  return 'nous avons attient le max des places sur ce créneau, votre réservation est ajoutee avec une status "en attente"';
}
// 3. Écris la logique d'annulation : change le statut en "annulée" et vérifie si des réservations en attente pour ce créneau peuvent maintenant être confirmées
function annulation(id,reservations){
  const find_reserv = reservations.find(reserv => reserv.id == id);
  if(!find_reserv)return "réservation n'existe pas";
  find_reserv['statut'] = 'annulée';
  const confirmes = reservations.filter(reserv => reserv.date == find_reserv['date'] && reserv.heure == find_reserv['heure'] && reserv.statut === 'confirmée');
  let places = confirmes.reduce((a,b)=>a+b.nombre_personnes,0)
  const mises_a_jour = [];
  const en_attente = reservations.filter(reserv => reserv.date == find_reserv['date'] && reserv.heure == find_reserv['heure'] && reserv.statut === 'en attente');
  for(let reserv of en_attente){
    if(reserv.nombre_personnes + places < 30){
      reserv.statut = 'confirmée';
      places += reserv.nombre_personnes;
      mises_a_jour.push(reserv)
    }
  }
  return mises_a_jour;
}
// 4. Affiche les réservations d'une date donnée, triées par heure
function displayReservations(date,reservations){
  const filteredReserv = reservations.filter(reserv => reserv.date == date)
  return filteredReserv.sort((a,b)=> new Date(`1970-01-01T${a.heure}:00`) - new Date(`1970-01-01T${b.heure}:00`));
}
// 5. Calcule le taux d'occupation d'une journée (places réservées / 30 par créneau)
function tauxOccupation(date,reservations){
  const total_personne = displayReservations(date,reservations).filter(reserv=>reserv.statut=='confirmée')
  .reduce((a,b)=>(a,b.nombre_personnes),0);
  const taux = (total_personne / 30) * 100;
  return taux.toFixed(2)+'%';
}
console.log(tauxOccupation('2026-04-08',reservations))
// 6. Teste avec 8 réservations en incluant les cas limites : créneau plein, annulation qui libère une place
console.log(annulation(16,reservations))
