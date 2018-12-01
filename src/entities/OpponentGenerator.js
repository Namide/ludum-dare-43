import OpponentEntity from './OpponentEntity'
import Assets from '../assets/Assets'
import { Timeline } from '../utils/Timeline'


export default class OpponentGenerator
{
    constructor(game)
    {
        this.game = game
    }

    generateBasic()
    {
        const { width, height } = this.game.graphicSystem
        const timelineX = new Timeline([
            0, 500, 1000, 1500, 2000
        ], [
            -10,
            width - 50,
            50,
            width - 50,
            50,
            width - 50,
        ])
        const timelineY = new Timeline([
            300, 700,
            800, 1200,
            1300, 1700
        ], [
            height/10,
            height/7,

            height/7,
            height/4,

            height/4,
            height/0,
        ])

        this.game.addEntity(new OpponentEntity(this.game, {
            x: timelineX.getValue(0),
            y: timelineY.getValue(0),
            move(frame) {
                this.x = timelineX.getValue(frame)
                this.y = timelineY.getValue(frame)
            },
            graphic: this.game.graphicSystem.getSprite(Assets.opponents.ship01)
        }))
    }

    generatorTest()
    {
        switch (this.game.frames)
        {
            case 100 :
                this.generateBasic()
                break
            
        }
    }

    tick()
    {
        this.generatorTest()
    }
}