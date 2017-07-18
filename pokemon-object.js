function PokeStats(name, type, hp, def, atk, legend){
    this.name = name,
    this.type = type,
    this.hp = hp,
    this.def = def,
    this.atk = atk,
    this.legend = legend 
}
    



var Charizard = new PokeStats("Charizaed", "fire", "78", "78", "fire blast ", "false") 
var Pikachu = new PokeStats("Pikachu", "electric", "35", "45", "lighting strike", "false")
var Turtwig = new PokeStats("Turtwig", "land", "55", "64", "twig slice", "false")
var Mewtwo = new PokeStats("Mewtwo", "Psychic", "123", "75", "Pschic beam", "true") 
var Arceus = new PokeStats("Arceus","Normal", "120", "120", "Judgement", "True" )
var Girantina = new PokeStats("Giratina", "Dragon Ice", "120", "120", "Dream Control","True")

var Pokemon = [
    Charizard, Pikachu, Turtwig, Mewtwo , Arceus , Girantina
]

function printRoster(){
    for (var i=0; i<6; i++){
    console.log(Pokemon[i]);
}}


function pokemonAttacked(){
    for (var i=0; i<6; i++){
    Pokemon[i].hp -= 10;
}}

pokemonAttacked();
printRoster();

