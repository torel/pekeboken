function Pig(context, xPos, yPos, scale) {
    this.gameObject = new Kiwi.GameObjects.Sprite(context, context.textures['pigAtlas'], xPos, yPos);
    this.gameObject.animation.createFromSequence(context.textures['pigAtlas'].sequences[3]);
    this.pigSnort = new Kiwi.Sound.Audio(kiwiGame, 'pigSnort', 0.5, false);

    this.gameObject.transform.scale = scale;

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
    this.animation = this.animations[2];

    this.gameObject.animation.play(this.animation.name);

    this.onClickPig();
}

Pig.prototype = {
	
	constructor: Pig,

	get: function() {
        return this.gameObject;
    },

    update: function() {

    },

    onClickPig: function() {
        this.gameObject.input.onRelease.add(this.changeAnimation, this);
        this.gameObject.input.onRelease.add(this.playPigSound, this);
    },

    playPigSound: function() {
		this.pigSnort.play();
	},

	changeAnimation: function() {
        // if (animation) {
        //     this.animation = animation;
        // }
        // else {
            this.animation = this.getRandomAnimation();
        // }
        this.gameObject.animation.play(this.animation.name);
    },

    getRandomAnimation : function() {
        var randomNumber = Math.floor(Math.random()*this.animations.length);
        console.log(randomNumber)
        return this.animations[randomNumber];
        
    }

};