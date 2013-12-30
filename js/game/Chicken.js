
function Chicken(context, x, y, characterScale, gameScale) {
    this.character = new Kiwi.GameObjects.Sprite(context, context.textures['chickenAtlas'], x, y);
    this.character.animation.createFromSequence(context.textures['chickenAtlas'].sequences[0]);

    this.setupOnClick();

    this.left = false;
    this.animations = [
        { name: "walk", weight: 0.01, random: true },
        { name: "revert", weight: 0.01, random: true  },
        { name: "pick", weight: 0.01, random: true },
        { name: "sleep", weight: 0.01, random: true },
        { name: "run", weight: 0.005, random: false },
        { name: "jump", weight: 0.01, random: false }];

    this.animation = this.animations[0];
    this.character.animation.play(this.animation.name);

    this.frameCount = 0;
    this.jumpFrameCount = 0;

    this.characterScale = 1;
    if (characterScale) {
        this.characterScale = characterScale;
        this.character.scaleX = this.characterScale;
        this.character.scaleY = this.characterScale;
    }

    this.gameScale = 1;
    if (gameScale) {
        this.gameScale = gameScale;
    }

}

Chicken.prototype = {

    constructor: Chicken,

    getCharacter: function() {
        return this.character;
    },

    update: function() {

        this.frameCount++;

        if (this.animation.name == "run" || this.animation.name == "walk") {
            // Chicken direction
            if(this.left) {
                this.character.transform.x -= ((this.animation.name == "run") ? 3 : 1);
                this.character.scaleX = this.gameScale * this.characterScale;
            }
            else {
                this.character.transform.x += ((this.animation.name == "run") ? 3 : 1);
                this.character.scaleX = -this.gameScale * this.characterScale;
            }

            // Chicken change direction at boundary
            if(this.character.transform.x > 700 && ! this.left) {
                this.left = true;
            }
            else if(this.character.transform.x < 50 && this.left) {
                this.left = false;
            }
        }

        if (this.animation.name == "jump") {
            this.jumpFrameCount++;
            if (this.jumpFrameCount >= 10) {
                this.jumpFrameCount = 0;
                this.frameCount = 0;
                this.changeToRunAnimation();
            }
        }

        if (this.animation.name == "revert") {
            this.left = !this.left;
            this.animation = this.animations[0];
        }

        this.changeAnimationAtRandomTime();
    },

    setupOnClick: function() {
        this.character.input.onRelease.add(this.changeToJumpAnimation, this);
    },

    changeAnimationAtRandomTime: function() {
        if (this.frameCount > 20) {
            var randomNumber = Math.random();

            if (randomNumber < this.animation.weight) {
                this.changeAnimation();
            }
        }
    },

    changeToJumpAnimation: function() {
        this.changeAnimation(this.animations[5])
    },

    changeToRunAnimation: function() {
        this.changeAnimation(this.animations[4])
    },

    changeAnimation: function(animation) {
        if (animation) {
            this.animation = animation;
        }
        else {
            this.animation = this.getRandomAnimation();
        }
        this.character.animation.play(this.animation.name);
        this.frameCount = 0;
    },

    getRandomAnimation : function() {
        var randomNumber = Math.random();

        var key = Math.round(randomNumber * 4) - 1;
        if (key < 0) {
            key = 0;
        }
        return this.animations[key];
    }
};


