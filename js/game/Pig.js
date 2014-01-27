function Pig(context, xPos, yPos, scale) {
    this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['pigAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['pigAtlas'].sequences[3]);
    this.pigSnort = new Kiwi.Sound.Audio(kiwiGame, 'pigSnort', 0.5, false);
    this.scale = scale;
    this.gameObject.transform.scale = scale;
    this.left = true;
    this.context = context
    this.animations = [
        { name: "walk" },
        { name: "run" },
        { name: "sit" },
        /*{ name: "raise" },*/
        { name: "wriggleHead" },
        { name: "jump" },
        { name: "straightTail" }/*,
        { name: "limp" },
        { name: "limp_run" }*/
    ];
    this.animation = this.animations[0];
    this.gameObject.animation.play(this.animation.name);

    this.characterScale = 1;
    if (scale) {
        this.characterScale = scale;
        this.gameObject.scaleX = this.characterScale;
        this.gameObject.scaleY = this.characterScale;
    }

    this.onClickPig();
}

Pig.prototype = {
	
	constructor: Pig,

	get: function() {
        return this.gameObject;
    },

    update: function() {

    	if (this.animation.name == "walk" || this.animation.name == "run") {

    		if(this.left) {
    			this.gameObject.transform.x -= ((this.animation.name == "run") ? 3 : 1);
    			this.gameObject.scaleX = this.characterScale

    		}

    		else {
    			this.gameObject.transform.x += ((this.animation.name == "run") ? 3 : 1);
    			this.gameObject.scaleX = -this.characterScale
    		}
    		

    		if((this.gameObject.transform.x ) > 700 * this.characterScale&& ! this.left) {
                this.left = true;
        	}
        	else if((this.gameObject.transform.x * this.characterScale) < 50 && this.left) {
                this.left = false;
        	}

    	}

    	

    },

    onClickPig: function() {
        this.gameObject.input.onRelease.add(this.changeAnimation, this);
        this.gameObject.input.onRelease.add(this.playPigSound, this);
    },

    playPigSound: function() {
		this.pigSnort.play();
	},

	changeAnimation: function() {
        this.animation = this.getRandomAnimation();
        this.gameObject.animation.play(this.animation.name);
    },

    getRandomAnimation : function() {
        var randomNumber = Math.floor(Math.random()*this.animations.length);
        return this.animations[randomNumber];
    }

};