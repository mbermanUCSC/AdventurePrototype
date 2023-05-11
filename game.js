class CityScene extends AdventureScene {
    constructor() {
        super("cityScene", "First Room");
    }

    preload() {
        this.load.image('cityBackground', 'assets/city.png');
    }

    onEnter() {
        super.onEnter();
        let cityBackground = this.add.image(0, 0, 'cityBackground').setOrigin(0, 0);
        cityBackground.displayWidth = this.sys.game.config.width;
        cityBackground.displayHeight = this.sys.game.config.height;

        let alley = this.add.text(this.w * 0.7, this.w * 0.47, "🖲️>")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's a nice key."))
            .on('pointerdown', () => {
                alley.setVisible(false);
                this.gotoScene('alleyScene');
            });

        let sidewalk = this.add.text(this.w * 0.2, this.w * 0.47, "🖲️^")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's a nice key."))
            .on('pointerdown', () => {
                alley.setVisible(false);
                this.gotoScene('sidewalkScene');
            });
    }
}

class AlleyScene extends AdventureScene {
    constructor() {
        super("alleyScene", "Second Room");
    }

    preload() {
        this.load.image('alleyBackground', 'assets/alley.png');
    }

    onEnter() {
        super.onEnter();
        let alleyBackground = this.add.image(0, 0, 'alleyBackground').setOrigin(0, 0);
        alleyBackground.displayWidth = this.sys.game.config.width;
        alleyBackground.displayHeight = this.sys.game.config.height;

        let sidewalk = this.add.text(this.w * 0.2, this.w * 0.5, "<🖲")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's a nice key."))
            .on('pointerdown', () => {
                sidewalk.setVisible(false);
                this.gotoScene('cityScene');
            });

        // Add invisible interactive area over the trash can
        let trashCanArea = this.add.zone(this.w * 0.87, this.h * 0.75, this.w * 0.125, this.h * 0.25).setInteractive();
        trashCanArea.on('pointerdown', () => this.gotoScene('pannelScene'));
    }
}

class PannelScene extends AdventureScene {
    constructor() {
        super("pannelScene", "Third Room");
    }

    preload() {
        this.load.image('noKeyBackground', 'assets/noKey.png');
        this.load.image('keyBackground', 'assets/key.png');
    }

    onEnter() {
        if (!this.hasItem('key')) {
            let pannelBackground = this.add.image(0, 0, 'noKeyBackground').setOrigin(0, 0);
        }
        else{
            let pannelBackground = this.add.image(0, 0, 'keyBackground').setOrigin(0, 0);
        }
            sidewalkBackground.displayWidth = this.sys.game.config.width;
            sidewalkBackground.displayHeight = this.sys.game.config.height;

        let city = this.add.text(this.w * 0.1, this.w * 0.47, "<🖲️")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's a nice key."))
            .on('pointerdown', () => {
                city.setVisible(false);
                this.gotoScene('cityScene');
            });
    }
}

class SidewalkScene extends AdventureScene {
    constructor() {
        super("sidewalkScene", "Fourth Room");
    }

    preload() {
        this.load.image('sidewalkBackground', 'assets/sidewalk.png');
    }

    onEnter() {
        let sidewalkBackground = this.add.image(0, 0, 'sidewalkBackground').setOrigin(0, 0);
        sidewalkBackground.displayWidth = this.sys.game.config.width;
        sidewalkBackground.displayHeight = this.sys.game.config.height;

        let city = this.add.text(this.w * 0.1, this.w * 0.47, "<🖲️")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's a nice key."))
            .on('pointerdown', () => {
                city.setVisible(false);
                this.gotoScene('cityScene');
            });

        // Check if the key has already been picked up
        if (!this.hasItem('key')) {
            let key = this.add.text(this.w * 0.2, this.w * 0.2, "🔑")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => this.showMessage("It's a nice key."))
                .on('pointerdown', () => {
                    this.showMessage("You pick up the key.");
                    this.gainItem('key aquired');
                    this.tweens.add({
                        targets: key,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => key.destroy()
                    });
                });
        }
    }


    // Check if the player has the item
    hasItem(item) {
        return this.inventory.includes(item);
    }
}


class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.image('background', 'assets/cityBW.png');
        this.load.image('startButton', 'assets/start.png');
        this.load.image('title', 'assets/title.png');
    }

    create() {
        let background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        background.displayWidth = this.game.config.width;
        background.displayHeight = this.game.config.height;

        let title = this.add.image(this.game.config.width / 2 - 150, this.game.config.height / 4, 'title')
            .setScale(1.0);

        let startButton = this.add.image(this.game.config.width / 2, this.game.config.height / 2 + 100, 'startButton')
            .setInteractive()
            .setScale(0.17);

        startButton.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('cityScene'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }

    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, CityScene, AlleyScene, PannelScene, SidewalkScene, Outro],
    title: "Adventure Game",
});

