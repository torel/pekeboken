
function Sun(context, xPos, yPos, scale) {

    this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['sunAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['sunAtlas'].sequences[0]);

    this.gameObject.transform.scale = scale;

    this.gameObject.transform.rotPointX = 100;
    this.gameObject.transform.rotPointY = 100;

    this.animationName = "sparkle";
    this.gameObject.animation.play(this.animationName);

    this.onClickSun(context);
}

Sun.prototype = {
    constructor: Sun,

    get: function() {
        return this.gameObject;
    },

    update: function() {

        this.gameObject.rotation += 0.001;
    },

    onClickSun: function() {
        this.gameObject.input.onRelease.add(chickenState.displaySmile, this);
    }
};
