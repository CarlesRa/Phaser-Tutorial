import "phaser";
import GameConfig = Phaser.Types.Core.GameConfig;
import { GameScene } from "./scenes/gameScene";

const config: GameConfig = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    scene: [GameScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
    backgroundColor: "#18216D"
};
export class StarfallGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}
window.onload = () => {
    let game = new StarfallGame(config);
};