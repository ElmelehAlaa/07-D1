class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  older() {
    if (utente1.age < utente2.age) console.log(utente2.firstName + " " + "è più vecchio di" + " " + utente1.firstName);
    else {
      console.log(utente1.firstName + " " + "è piu vecchio di" + " " + utente2.firstName);
    }
  }
}

const utente1 = new User("Mario", "bianchi", "24", "Italy");
const utente2 = new User("Marco", "Rossi", "26", "Italy");

utente1.older();

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner() {
    if (petArray[1].ownerName === petArray[2].ownerName) {
      console.log("Hanno lo stesso padrone");
    } else {
    }
  }
}

const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
let petArray = [];
const form = document.getElementById("formId");
function submitForm(event) {
  event.preventDefault();

  let animals = new Pet(petName.value, ownerName.value, species.value, breed.value);
  petArray.push(animals);
  return console.log(petArray), animals.sameOwner();
}
form.addEventListener("submit", submitForm);
