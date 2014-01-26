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
    	console.log(this.animation.name)
    	if (this.animation.name == "driveSmoke") {
    		this.frameCount++;
    	}
    	this.scale *= 0.9997
    	this.gameObject.transform.x -= 1;
    	this.gameObject.transform.y -= 0.17;
    	this.gameObject.transform.scale = this.scale;
    	console.log(this.frameCount)
    	
    	if(this.frameCount >=70 ) {
    		this.changeAnimation("drive")
    		console.log("this.animation.name jfdklsfjdskhfjdksø", this.animation.name)
    		
    	}  

    },

    onClickTractor: function() {
        this.frameCount = 0;
        this.gameObject.input.onRelease.add(this.smoke, this);

    },

    smoke: function() {
    	        console.log("klikka")
    	this.changeAnimation("driveSmoke");
    },

    changeAnimation: function(animationName) {
    	this.gameObject.animation.play(animationName)
    	console.log(animationName)
    }
}