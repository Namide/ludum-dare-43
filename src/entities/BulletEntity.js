export default class BulletEntity
{
    constructor(game, options)
    {
        this.game = game
        this._destroyed = false
        for (const key in options)
        {
            this[key] = options[key]
        }
    }

    isActive() { return !this._destroyed }

    outTest()
    {
        if (this.x < -10)
            this._destroyed = true
        if (this.x > this.game.graphicSystem.width + 10)
            this._destroyed = true
        if (this.y < -10)
            this._destroyed = true
        if (this.y > this.game.graphicSystem.height + 10)
            this._destroyed = true
    }

    tick()
    {
        this.move()
        this.outTest()
    }
}