
function Rooster(context, xPos, yPos, scale) {

    this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['roosterAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['roosterAtlas'].sequences[1]);

    this.screamSound = new Kiwi.Sound.Audio(kiwiGame, 'rooster', 0.5, false);

    this.gameObject.transform.scale = scale;

    this.animations = [
        { name: "stand" },
        { name: "scream" }
    ];
    this.animation = this.animations[0];

    this.gameObject.animation.play(this.animation.name);

    this.onClickRooster();
}

Rooster.prototype = {
    constructor: Rooster,

    get: function() {
        return this.gameObject;
    },

    update: function() {

    },

    onClickRooster: function() {
        this.gameObject.input.onRelease.add(this.changeToRandomAnimation, this);
        this.gameObject.input.onRelease.add(this.playRoosterSound, this);
    },

    changeToRandomAnimation: function() {
        this.animation = this.getRandomAnimation();
        this.gameObject.animation.play(this.animation.name);
    },

    getRandomAnimation : function() {
        return this.animations[1];
    },

    playRoosterSound: function() {
        if (this.animation.name == 'scream') {
            this.screamSound.play();
        }
    }
};
