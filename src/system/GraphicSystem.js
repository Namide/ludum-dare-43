import * as PIXI from 'pixi.js'

export default class GraphicSystem
{
    constructor(canvas)
    {
        this.app = new PIXI.Application({
            width: 256,
            height: 512,
            antialias: false,   // default: false
            transparent: false, // default: false
            resolution: 1,      // default: 1
            view: canvas,
            forceCanvas: true,
            roundPixels: true,
            backgroundColor: 0x000000
        })
        console.log('GraphicSys')

        this.app.renderer.autoResize = false
        // this.app.renderer.resize(512, 512)
    }

    render(entities)
    {

    }
}