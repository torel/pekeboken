
function Hen(context, xPos, yPos, scale) {

    this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['henAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['henAtlas'].sequences[2]);

    this.cluck = new Kiwi.Sound.Audio(kiwiGame, 'duck', 0.3, false);

    this.setupOnClick();

    this.gameObject.transform.scale = scale;

    this.animations = [
        { name: "cluck" },
        { name: "egg" },
        { name: "stand" }
    ];
    this.animation = this.animations[2];

    this.gameObject.animation.play(this.animation.name);
}

Hen.prototype = {
    constructor: Hen,

    get: function() {
        return this.gameObject;
    },

    update: function() {

    },

    setupOnClick: function() {
        this.gameObject.input.onRelease.add(this.changeToRandomAnimation, this);
        this.gameObject.input.onRelease.add(this.playCluck, this);
    },

    changeToRandomAnimation: function() {
        this.animation = this.getRandomAnimation();
        this.gameObject.animation.play(this.animation.name);
    },

    getRandomAnimation : function() {
        var randomNumber = Math.random();

        if (randomNumber > 0.35) {
            return this.animations[0];
        }
        else {
            return this.animations[1]
        }
    },

    playCluck: function() {
        this.cluck.play();
    }
};
