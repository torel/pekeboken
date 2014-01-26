function Tractor(context, xPos, yPos, scale) {
	this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['tractorAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['tractorAtlas'].sequences[0]);
    this.scale = scale
    this.gameObject.transform.scale = scale;
    this.frameCount = 0;

    this.animations = [
        { name: "drive" },
        { name: "driveSmoke" }
    ];
    this.animation = this.animations[0];
    this.gameObject.animation.play(this.animation.name);
    this.onClickTractor();

}

Tractor.prototype = {
	
	constructor: Tractor,

	get: function() {
        return this.gameObject;
    },

    update: function() {
    	this.scale *= 0.9997
    	this.gameObject.transform.x -= 1;
    	this.gameObject.transform.y -= 0.17;
    	this.gameObject.transform.scale = this.scale;
    },

    onClickTractor: function() {
        this.gameObject.input.onRelease.add(this.changeAnimation, this);
    },

    // smoke: function() {
    // 	        console.log("klikka")
    // 	this.changeAnimation("driveSmoke");
    // },

    changeAnimation: function() {
    	console.log(this.animation.name)
    	
    	if (this.animation.name === "driveSmoke") {
    		console.log("første")
    		this.animation = this.animations[0];
    	} else {
    		console.log("andres")
    		this.animation = this.animations[1];
    	}
    	this.gameObject.animation.play(this.animation.name);
    }
}