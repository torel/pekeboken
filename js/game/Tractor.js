function Tractor(context, xPos, yPos, scale) {
	this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['tractorAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['tractorAtlas'].sequences[0]);

    this.gameObject.transform.scale = scale;

    this.animationName = "drive";
    this.gameObject.animation.play(this.animationName);

}

Tractor.prototype = {
	
	constructor: Tractor,

	get: function() {
        return this.gameObject;
    },

    update: function() {

    	this.gameObject.transform.x -= 1;

    }
}