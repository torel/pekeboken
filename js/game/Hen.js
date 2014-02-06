
var Hen = function (context, xPos, yPos, scale) {

    Kiwi.GameObjects.Sprite.call(this, context, context.textures['henAtlas'], xPos, yPos);
    this.animation.createFromSequence(context.textures['henAtlas'].sequences[2]);

    var cluckSound = new Kiwi.Sound.Audio(kiwiGame, 'clucking', 0.5, false);
    var layEggSound = new Kiwi.Sound.Audio(kiwiGame, 'layEgg', 0.6, false);

    var gameObject = this;

    this.transform.scale = scale;

    var animations = [
        { name: "cluck" },
        { name: "egg" },
        { name: "stand" }
    ];
    var animation = animations[2];

    this.animation.play(animation.name);

    var getRandomAnimation = function() {
        var randomNumber = Math.random();

        if (randomNumber > 0.30) {
            return animations[0];
        }
        else {
            return animations[1]
        }
    };

    var playHenSound = function() {
        if (animation.name == 'cluck') {
            cluckSound.play();
        }
        else {
            layEggSound.play();
        }
    }

    this.input.onRelease.add(
        function() {
            animation = getRandomAnimation();
            gameObject.animation.play(animation.name);
            playHenSound();
        },
        this
    );
};
Kiwi.extend(Hen, Kiwi.GameObjects.Sprite);
