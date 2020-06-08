function Person(vorname, nachname) {
  this.vorname = vorname;
  this.nachname = nachname;
}

Person.prototype.getFullname = function() {
  return this.vorname + " " + this.nachname;
}

function Schueler(vorname, nachname, schule) {
  // Die call-function tauscht den Kontext this aus und ruft die Funktion auf.
  Person.call(this, vorname, nachname);
  this.schule = schule;
}
Schueler.prototype.getFullname = function() {
  return this.vorname + " " + this.nachname + "(" + this.schule + ")";
}

Schueler.prototype.__proto__ = Person.prototype;

var hans = new Person("Hans", "Guckindieluft");
var jannick = new Schueler("Jannick", "Moritz", "Elisabethenschule");
console.log(hans);
console.log(jannick);
console.log(hans.getFullname());
console.log(jannick.getFullname());