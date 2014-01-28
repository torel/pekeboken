
function Cloud(context, xPos, yPos, scale, gameScale) {

    this.gameObject = new Kiwi.GameObjects.StaticImage(context, context.textures['cloud'], xPos, yPos);
    this.gameObject.transform.scale = scale;

    this.gameScale = 1;
    if (gameScale) {
        this.gameScale = gameScale;
    }

    this.onClickCloud();
}

Cloud.prototype = {
    constructor: Cloud,

    get: function() {
        return this.gameObject;
    },

    update: function() {
        //this.gameObject.transform.x -= 1 * this.characterScale;
        //this.gameObject.scaleX = this.gameScale * this.characterScale;
    },

    onClickCloud: function() {
        //this.gameObject.input.onRelease.add(//, this);
    }
};
