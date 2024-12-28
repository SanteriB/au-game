import { Person } from "./entities/Person";
import { Game } from "./Game";

const appContainer = document.getElementById("app");

if (appContainer) {
    const game = new Game();
    const person = new Person({ name: "Sava Petrovic" });
    console.log(game, person, person.getName() );
}