
import GameConfig = Phaser.Types.Core.GameConfig;
import "phaser";
const config: GameConfig = {
    title: "Starfall",
    width: 800,
    height: 600,
    parent: "game",
    backgroundColor: "#18216D"
};
export class StarfallGame extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}
window.onload = () => {
    const game = new StarfallGame(config);
};