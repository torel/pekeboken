
function Sun(context, xPos, yPos, scale) {

    this.gameObject = new Kiwi.GameObjects.StaticImage(context, context.textures['sun'], xPos, yPos);
    this.gameObject.transform.scale = scale;

    this.gameObject.transform.rotPointX = 473,726;
    this.gameObject.transform.rotPointY = 500;
}

Sun.prototype = {
    constructor: Sun,

    get: function() {
        return this.gameObject;
    },

    update: function() {

        this.gameObject.rotation += 0.05;
    }
};
