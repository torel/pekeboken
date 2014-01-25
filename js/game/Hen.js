
function Hen(context, xPos, yPos, scale) {

    this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['henAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['henAtlas'].sequences[2]);

    this.cluckSound = new Kiwi.Sound.Audio(kiwiGame, 'clucking', 0.5, false);
    this.layEggSound = new Kiwi.Sound.Audio(kiwiGame, 'layEgg', 0.6, false);

    this.gameObject.transform.scale = scale;

    this.animations = [
        { name: "cluck" },
        { name: "egg" },
        { name: "stand" }
    ];
    this.animation = this.animations[2];

    this.gameObject.animation.play(this.animation.name);

    this.onClickHen();
}

Hen.prototype = {
    constructor: Hen,

    get: function() {
        return this.gameObject;
    },

    update: function() {

    },

    onClickHen: function() {
        this.gameObject.input.onRelease.add(this.changeToRandomAnimation, this);
        this.gameObject.input.onRelease.add(this.playHenSound, this);
    },

    changeToRandomAnimation: function() {
        this.animation = this.getRandomAnimation();
        this.gameObject.animation.play(this.animation.name);
    },

    getRandomAnimation : function() {
        var randomNumber = Math.random();

        if (randomNumber > 0.30) {
            return this.animations[0];
        }
        else {
            return this.animations[1]
        }
    },

    playHenSound: function() {
        if (this.animation.name == 'cluck') {
            this.cluckSound.play();
        }
        else {
            this.layEggSound.play();
        }
    }
};
