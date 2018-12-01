import * as PIXI from 'pixi.js'

export default class GraphicSystem
{
    constructor(canvas)
    {
        this.width = 448
        this.height = 640

        this.app = new PIXI.Application({
            width: this.width,
            height: this.height,
            antialias: false,   // default: false
            transparent: false, // default: false
            resolution: 1,      // default: 1
            view: canvas,
            forceCanvas: true,
            roundPixels: true,
            backgroundColor: 0x000000
        })

        this.app.renderer.autoResize = false
        // this.app.renderer.resize(512, 512)
    }

    getSprite(image)
    {
        const sprite = new PIXI.Sprite.fromImage(image)
        sprite.anchor.set(0.5, 0.5)
        this.app.stage.addChild(sprite)
        return sprite
    }

    remove(entity)
    {
        if (entity.graphic)
        {
            this.app.stage.removeChild(entity.graphic)
        }
    }

    tick(entities)
    {
        entities.forEach(entity =>
        {
            if (entity.graphic)
            {
                entity.graphic.x = entity.x
                entity.graphic.y = entity.y
            }
        })

        this.app.renderer.render(this.app.stage)
    }
}