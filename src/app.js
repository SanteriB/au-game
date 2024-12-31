import "./styles.scss";

import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { Person } from "./entities/Person";
import { Game } from "./Game";
import { renderDOM } from "./framework"

const appContainer = document.getElementById("app");

if (appContainer) {
    const game = new Game();
    const person = new Person({ name: "Sava Petrovic" });
    console.log(game, person);

    const leftSidebar = new LeftSidebar();
    renderDOM(appContainer, leftSidebar);
}