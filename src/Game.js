import DomSystem from './systems/DomSystem'
import GraphicSystem from './systems/GraphicSystem'
import ControllerSystem from './systems/ControllerSystem'
import PlayerEntity from './entities/PlayerEntity'
import OpponentGenerator from './entities/OpponentGenerator';

const FPS = 240

export default class Game
{
    constructor(document)
    {
        this.domSystem = new DomSystem(document.body)
        this.graphicSystem = new GraphicSystem(this.domSystem.getGameCanvas())
        this.controllerSystem = new ControllerSystem()
        this.opponentGenerator = new OpponentGenerator(this)

        this.time = window.performance.now()
        this.timeRest = 0
        this.frames = 0
        this.entities = []

        this.start()
        this.enterFrame(this.time)
    }

    start()
    {
        this.entities.push(
            new PlayerEntity(this)
        )
    }

    addEntity(entity)
    {
        this.entities.push(entity)
    }

    addEntities(entities)
    {
        this.entities.push(...entities)
    }

    removeEntities(entities)
    {
        while(entities.length > 0)
            this.removeEntity(entities.pop())
    }

    removeEntity(entity)
    {
        const index = this.entities.indexOf(entity)
        // console.log(entity)
        if (index > -1)
        {
            this.graphicSystem.remove(entity)
            this.entities.splice(index, 1)
        }
    }

    tick(jumpFrame = false, dt = 1000 / FPS)
    {
        this.opponentGenerator.tick()
        this.entities.forEach(entity => entity.tick())
    
        if (!jumpFrame)
        {
            this.graphicSystem.tick(
                this.entities.filter(entity => !!entity.graphic)
            )
            
            this.removeEntities(this.entities.filter(entity => !entity.isActive()))
        }

        // this.controllerSystem.tick(jumpFrame)
// console.log(this.controllerSystem.downReleased())
        // if (this.controllerSystem.downPressed())
        //     console.log('DOWN')

        // if (this.controllerSystem.downReleased())
        //     console.log('!!!!!DOWN')

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
                this.frames++
                this.tick(this.timeRest >= 1000 / FPS)
            }
        }

        requestAnimationFrame(this.enterFrame.bind(this))
    }
}