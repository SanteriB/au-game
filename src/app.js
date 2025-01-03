import "./styles.scss";

import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { Person } from "./entities/Person";
import { Game } from "./Game";
import { renderDOM, Component, useStore } from "./framework";

const appContainer = document.getElementById("app");

if (appContainer) {
    const game = new Game();
    const person = new Person({ name: "Sava Petrovic" });
    console.log(game, person);

    const app = new Component();
    const store = useStore();
    app.connect(store);
    app.createComponent({ className: "app" });
    app.createState({
        appName: "Example game",
    });
    renderDOM(appContainer, app);

    const leftSidebar = new LeftSidebar();
    renderDOM(app, leftSidebar);
}