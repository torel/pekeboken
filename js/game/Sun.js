
var Sun = function (context, xPos, yPos, scale) {

    Kiwi.GameObjects.Sprite.call(this, context, context.textures['sunAtlas'], xPos, yPos);
    this.animation.createFromSequence(context.textures['sunAtlas'].sequences[0]);

    this.transform.scale = scale;
    this.transform.rotPointX = 100;
    this.transform.rotPointY = 100;

    this.animation.play("sparkle");

    this.input.onRelease.add(chickenState.displaySmile, this);

    Sun.prototype.update = function() {
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.rotation += 0.001;
    };
};
Kiwi.extend(Sun, Kiwi.GameObjects.Sprite);