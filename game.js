class CityScene extends AdventureScene {
    constructor() {
        super("cityScene", "Main City");
    }

    preload() {
        this.load.image('cityBackground', 'assets/city.png');
    }

    onEnter() {
        let cityBackground = this.add.image(0, 0, 'cityBackground').setOrigin(0, 0);
        cityBackground.displayWidth = this.sys.game.config.width - 500
        cityBackground.displayHeight = this.sys.game.config.height;

        let sidewalk = this.add.text(this.w * 0.09, this.w * 0.4, "🏘️ Sidewalk")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go deeper into the city?"))
            .on('pointerdown', () => {
                this.showMessage("*walking*");
                this.gotoScene('sidewalkScene');
            });

        let alley = this.add.text(this.w * 0.44, this.w * 0.44, "🌃 Alley")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go into the alley?"))
            .on('pointerdown', () => {
                this.showMessage("*walking*");
                this.gotoScene('alleyScene');
            });

    }
}

class SidewalkScene extends AdventureScene {
    constructor() {
        super("sidewalkScene", "Sidewalk");
    }

    preload() {
        this.load.image('sidewalkBackground', 'assets/sidewalk.png');
        this.load.audio('keyChime', 'assets/audio/keyChime.mp3');

    }

    onEnter() {
        let sidewalkBackground = this.add.image(0, 0, 'sidewalkBackground').setOrigin(0, 0);
        sidewalkBackground.displayWidth = this.sys.game.config.width - 500
        sidewalkBackground.displayHeight = this.sys.game.config.height;

        let sidewalk = this.add.text(this.w * 0.03, this.w * 0.3, "🌃 City")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go back to the city?"))
            .on('pointerdown', () => {
                this.showMessage("*walking*");
                this.gotoScene('cityScene');
            });
        if (!this.hasItem('key')) {
            let key = this.add.text(this.w * 0.17, this.w * 0.2, "🔑")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => this.showMessage("It's a nice key."))
                .on('pointerdown', () => {
                    this.showMessage("You pick up the key.");
                    this.gainItem('key');
                    this.playSound('keyChime');
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
}


class AlleyScene extends AdventureScene {
    constructor() {
        super("alleyScene", "Alley");
    }

    preload() {
        this.load.image('alleyBackground', 'assets/alley.png');
    }

    onEnter() {
        let alleyBackground = this.add.image(0, 0, 'alleyBackground').setOrigin(0, 0);
        alleyBackground.displayWidth = this.sys.game.config.width - 500
        alleyBackground.displayHeight = this.sys.game.config.height;

        let city = this.add.text(this.w * 0.03, this.w * 0.3, "🌃 City")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go back to the city?"))
            .on('pointerdown', () => {
                this.showMessage("*walking*");
                this.gotoScene('cityScene');
            });
        let trash1 = this.add.text(this.w * 0.04, this.w * 0.44, "trash")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe theres something behind?"))
            .on('pointerdown', () => {
                this.showMessage("*nothing*");
            });
        let trash2 = this.add.text(this.w * 0.24, this.w * 0.44, "trash")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe theres something behind?"))
            .on('pointerdown', () => {
                this.showMessage("*nothing*");
            });
        let trash3 = this.add.text(this.w * 0.45, this.w * 0.44, "trash")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe theres something behind?"))
            .on('pointerdown', () => {
                this.showMessage("*nothing*");
            });
        let trash4 = this.add.text(this.w * 0.66, this.w * 0.44, "trash")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Maybe theres something behind?"))
            .on('pointerdown', () => {
                this.showMessage("*something*");
                if (!this.hasItem('key')) {
                    this.gotoScene('noKeyPannelScene');
                }
                else{
                   this.gotoScene('keyPannelScene'); 
                }
            })
    }
}

class NoKeyPannelScene extends AdventureScene {
    constructor() {
        super("noKeyPannelScene", "Control Pannel");
    }

    preload() {
        this.load.image('noKeyPannelBackground', 'assets/noKey.png');
    }

    onEnter() {
        let pannelBackground = this.add.image(0, 0, 'noKeyPannelBackground').setOrigin(0, 0);
        pannelBackground.displayWidth = this.sys.game.config.width - 500
        pannelBackground.displayHeight = this.sys.game.config.height;

        let alley = this.add.text(this.w * 0.09, this.w * 0.09, "🗑️ Alley")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go back to the alley?"))
            .on('pointerdown', () => {
                this.showMessage("*walking*");
                this.gotoScene('alleyScene');
            });
        let button = this.add.text(this.w * 0.26, this.w * 0.26, "🔘")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("PRESS!"))
            .on('pointerdown', () => {
                this.showMessage("It looks like you'll need a key for this.");
            })
    }
}

class KeyPannelScene extends AdventureScene {
    constructor() {
        super("keyPannelScene", "Control Pannel(KEY)");
    }

    preload() {
        this.load.image('pannelBackground', 'assets/key.png');
    }

    onEnter() {
        let pannelBackground = this.add.image(0, 0, 'pannelBackground').setOrigin(0, 0);
        pannelBackground.displayWidth = this.sys.game.config.width - 500
        pannelBackground.displayHeight = this.sys.game.config.height;

        let alley = this.add.text(this.w * 0.09, this.w * 0.09, "🗑️ Alley")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("Go back to the alley?"))
            .on('pointerdown', () => {
                this.showMessage("*walking*");
                this.gotoScene('alleyScene');
            });
        let button = this.add.text(this.w * 0.26, this.w * 0.26, "🔘")
            .setFontSize(this.s * 2)
            .setDepth(1) // May not need
            .setInteractive()
            .on('pointerover', () => this.showMessage("PRESS!"))
            .on('pointerdown', () => {
                this.showMessage("*humming*");

                // Add a scaling animation to the button
                this.tweens.add({
                    targets: button,
                    scale: { from: 1, to: 1.5 }, 
                    duration: 100,  // in ms
                    yoyo: true,  
                    onComplete: () => this.gotoScene('outro') 
                });
            });
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
    scene: [Intro, CityScene, SidewalkScene, AlleyScene, NoKeyPannelScene, KeyPannelScene, Outro],
    title: "Adventure Game",
});

