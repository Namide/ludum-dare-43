import { Keyboard, Gamepad, and, or } from 'contro'

export default class ControllerSystem
{
    constructor()
    {
        this.keyboard = new Keyboard()
        this.gamepad = new Gamepad()

        this._down = or(this.gamepad.button('Down'), this.keyboard.key('Down'))
        this._up = or(this.gamepad.button('Up'), this.keyboard.key('Up'))
        this._left = or(this.gamepad.button('Left'), this.keyboard.key('Left'))
        this._right = or(this.gamepad.button('Right'), this.keyboard.key('Right'))
        this._shoot = or(this.gamepad.button('A'), this.keyboard.key('Space'))
        this._cancel = or(this.gamepad.button('Back'), this.keyboard.key('Esc'))

        this._downR = or(this.gamepad.button('Down').trigger, this.keyboard.key('Down').trigger)
        this._upR = or(this.gamepad.button('Up').trigger, this.keyboard.key('Up').trigger)
        this._leftR = or(this.gamepad.button('Left').trigger, this.keyboard.key('Left').trigger)
        this._rightR = or(this.gamepad.button('Right').trigger, this.keyboard.key('Right').trigger)
        this._shootR = or(this.gamepad.button('A').trigger, this.keyboard.key('Space').trigger)
        this._cancelR = or(this.gamepad.button('Back').trigger, this.keyboard.key('Esc').trigger)
    }

    downPressed() { return this._down.query() }
    downReleased() { return this._downR.query() }

    upPressed() { return this._up.query() }
    upReleased() { return this._upR.query() }

    leftPressed() { return this._left.query() }
    leftReleased() { return this._leftR.query() }

    rightPressed() { return this._right.query() }
    rightReleased() { return this._rightR.query() }

    shootPressed() { return this._shoot.query() }
    shootReleased() { return this._shootR.query() }

    cancelPressed() { return this._cancel.query() }
    cancelReleased() { return this._cancelR.query() }
}