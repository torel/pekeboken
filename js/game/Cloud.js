
var Cloud = function (context, xPos, yPos, scale) {

    Kiwi.GameObjects.Sprite.call(this, context, context.textures['cloudAtlas'], xPos, yPos);
    this.animation.createFromSequence(context.textures['cloudAtlas'].sequences[1]);

    this.transform.scale = scale;

    var gameObject = this;
    var animations = [
        { name: "cloudy" },
        { name: "rain" }
    ];
    var animation = animations[0];

    this.animation.play(animation.name);

    this.input.onRelease.add(
        function() {
            if (animation.name = "cloudy") {
                animation = animations[1];
            }
            else {
                animation = animations[0];
            }
            gameObject.animation.play(animation.name);
        }
        , this
    );

    var createNewDrop = function() {
        var randomNumber = Math.random();
        if (randomNumber > 0.1) {
            var drop = new Kiwi.GameObjects.StaticImage(this, this.textures['drop'], 0, 0);

        }
    };

    Cloud.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
    };


};

Kiwi.extend(Cloud, Kiwi.GameObjects.Sprite);
