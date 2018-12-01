import DomSystem from './system/DomSystem'
import GraphicSystem from './system/GraphicSystem';
import ControllerSystem from './system/ControllerSystem';

const FPS = 240

export default class Game
{
    constructor(document)
    {
        this.domSystem = new DomSystem(document.body)
        this.graphicSystem = new GraphicSystem(this.domSystem.getGameCanvas())
        this.controllerSystem = new ControllerSystem()

        this.time = window.performance.now()
        this.timeRest = 0
        this.enterFrame(this.time)
    }

    tick(jumpFrame = false, dt = 1000 / FPS)
    {
        this.controllerSystem.tick(jumpFrame)
        // console.log('JUMP FRAME:' + jumpFrame, this.controllerSystem.validPressed(), this.controllerSystem.validReleased())
    }

    enterFrame(time)
    {
        const dt = time - this.time
        this.timeRest += dt
        this.time = time

        if (this.timeRest < 1000 / FPS)
        {
            // jump loop
        }
        else
        {
            while (this.timeRest >= 1000 / FPS)
            {
                this.timeRest -= 1000 / FPS
                this.tick(this.timeRest >= 1000 / FPS)
            }
        }

        requestAnimationFrame(this.enterFrame.bind(this))
    }
}