
var Rooster = function (context, xPos, yPos, scale) {

    Kiwi.GameObjects.Sprite.call(this, context, context.textures['roosterAtlas'], xPos, yPos);
    this.animation.createFromSequence(context.textures['roosterAtlas'].sequences[1]);

    var screamSound = new Kiwi.Sound.Audio(kiwiGame, 'rooster', 0.5, false);

    this.transform.scale = scale;

    var animations = [
        { name: "stand" },
        { name: "scream" }
    ];
    var animation = animations[0];

    this.animation.play(animation.name);

    this.input.onRelease.add(
        function() {
            animation = animations[1];
            this.animation.play(animation.name);
            screamSound.play();
        },
        this
    );

    Rooster.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
    };
};
Kiwi.extend(Rooster, Kiwi.GameObjects.Sprite);
