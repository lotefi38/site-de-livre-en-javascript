const table = document.querySelector("#tableauLivres");
var l1 = {
    nom : "Père riche père pauvre",
    auteur : "Robert Kiozaki",
    pages : "250"
}
var l2 = {
    nom : "L’homme le plus riche de Babylone",
    auteur : "George Samuel Clason",
    pages : "194"
}
var l3 = {
    nom : "Le Cygne noir",
    auteur : "Nassim Nicholas Taleb",
    pages : "608"
}
var l4 = {
    nom : "La france de 19eme",
    auteur : "Albert Patrick",
    pages : "500"
}
var biblio = [l1,l2,l3,l4]; 
afficherLivres();

function afficherLivres(){
    var tableauLivres = document.querySelector("#tableauLivres tbody");
    var livre = "";
    for(i = 0 ; i <= biblio.length -1 ; i++ ) {
        livre += `<tr>
            <td>${biblio[i].nom}</td>
            <td>${biblio[i].auteur}</td>
            <td>${biblio[i].pages}</td>
            <td> <button class="btn btn-warning m-2 p-2" onClick="afficherFormModdification(${i})">MODIFIER</button></td> 
            <td><button class="btn btn-danger m-2 p-2" onClick="supprimerLivre(${i})">SUPPRIMER</button></td>
         </tr>`;
    }
    tableauLivres.innerHTML = livre;
}

function ajoutFormulaire(){
        document.querySelector("#ajoutForm").removeAttribute("class");
}
document.querySelector("#validationFormAjout").addEventListener("click", function(event){
event.preventDefault();
var titre = document.querySelector("#ajoutForm #titre").value;
var auteur = document.querySelector("#ajoutForm #auteur").value;
var pages = document.querySelector("#ajoutForm #pages").value;
ajoutLivre(titre,auteur,pages);
document.querySelector("#ajoutForm").reset();
document.querySelector("#ajoutForm").className("d-none")
});

function ajoutLivre(titre,auteur,pages){
    var livre = {
    nom : titre,
    auteur : auteur,
    pages : pages
    }
    biblio.push(livre);
    afficherLivres();
    }
    function supprimerLivre(position) {
        if(confirm("vous les vous vraiment supprimer?")){
        // Code pour supprimer un livre
        alert("la suppression est effectuer ")
        biblio.splice(position, 1);
        afficherLivres();
    }else{
        alert("la suppression est annuler")
    }
    }
    function afficherFormModdification(position){
        document.querySelector("#modifLivre").removeAttribute("class");
        document.querySelector("#modifLivre #titre").value = biblio[position].nom;
        document.querySelector("#modifLivre #auteur").value = biblio[position].auteur;
        document.querySelector("#modifLivre #pages").value  = biblio[position].pages;
        document.querySelector("#modifLivre #identifiant").value  = position;
        console.log(position);
    }
    document.querySelector("#validationFormModif").addEventListener("click", function(event){
        event.preventDefault();
        var titre = document.querySelector("#modifLivre #titre").value;
        var auteur = document.querySelector("#modifLivre #auteur").value;
        var pages = document.querySelector("#modifLivre #pages").value;
        var positionLivre = document.querySelector("#modifLivre #identifiant").value;

        biblio[positionLivre].nom = titre;
        biblio[positionLivre].auteur = auteur;
        biblio[positionLivre].pages = pages;
        afficherLivres();
    })
    