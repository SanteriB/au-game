import { LeftSidebar } from "./components/LeftSidebar";
import { Person } from "./entities/Person";
import { Game } from "./Game";
import { renderDOM } from "./framework"

const appContainer = document.getElementById("app");

if (appContainer) {
    const game = new Game();
    const person = new Person({ name: "Sava Petrovic" });

    const leftSidebar = new LeftSidebar();
    renderDOM(appContainer, leftSidebar.getComponent());
}