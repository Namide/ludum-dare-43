export default class OpponentEntity
{
    constructor(game, options)
    {
        this.frameStart = game.frames
        this.game = game
        this._destroyed = false
        for (const key in options)
        {
            this[key] = options[key]
        }
    }

    isActive() { return !this._destroyed }

    deadTest()
    {
        
    }

    tick()
    {
        this.move(this.game.frames - this.frameStart)
        this.deadTest()
    }
}