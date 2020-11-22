var Game = /** @class */ (function () {
    function Game(id, height, width) {
        this.id = id;
        this.height = height;
        this.width = width;
    }
    Game.prototype.init = function () {
        var body = document.querySelector('body');
        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', String(this.width));
        canvas.setAttribute('height', String(this.height));
        canvas.setAttribute('id', this.id);
        body.appendChild(canvas);
        this._ctx = canvas.getContext('2d');
    };
    Game.prototype.appendModel = function (model) {
        this._ctx.drawImage(model, 0, 0);
    };
    return Game;
}());
export default Game;
//# sourceMappingURL=Game.js.map