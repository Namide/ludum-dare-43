import Assets from '../assets/Assets'
import BulletEntity from './BulletEntity';

/**
 * @namespace
 * @property {Game}  game
 */
export default class PlayerEntity
{
    constructor(game)
    {
        /**
         * { Game }
         */
        this.game = game
        this.controller = game.controllerSystem

        this.graphic = game.graphicSystem.getSprite(Assets.player.ship)
        
        this.x = game.graphicSystem.width / 2
        this.y = game.graphicSystem.height * 2 / 3
        this.shootTime = 0
    }

    isActive() { return true }

    moveTest()
    {
        if (this.controller.upPressed()) this.y--
        if (this.controller.downPressed()) this.y++
        if (this.controller.leftPressed()) this.x--
        if (this.controller.rightPressed()) this.x++
    }

    shoot()
    {
        this.shootTime = 60

        const createShoot = (x, y) =>
        {
            this.game.addEntity(new BulletEntity(this.game, {
                x,
                y,
                move() { this.y -= 5 },
                graphic: this.game.graphicSystem.getSprite(Assets.player.bullet)
            }))
        }

        createShoot(this.x - 10, this.y)
        createShoot(this.x + 10, this.y)
        createShoot(this.x - 4, this.y - 5)
        createShoot(this.x + 4, this.y - 5)
        
        console.log('SHOOT')
    }

    shootTest()
    {
        if (this.controller.shootPressed() && this.shootTime <= 0)
            this.shoot()
        else
            this.shootTime--
    }

    tick()
    {
        this.moveTest()
        this.shootTest()
    }
    
}