class FighterKirby {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Kirby.png"), 2, 0, 29.5, 32, 7, 0.185);

        this.x = 0;
        this.y = 25;
        this.speed = 80;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 1024 ) this.x = 0
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}