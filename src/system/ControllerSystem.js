
export default class ControllerSystem
{
    constructor()
    {
        // 0 -> no, 1 -> pressed, 2 || 3 -> released
        this._down = 0
        this._up = 0
        this._left = 0
        this._right = 0
        this._valid = 0

        document.addEventListener('keydown', event =>
        {
            switch(event.keyCode)
            {
                case 32 : this._valid = 1; break
                case 38 : this._up = 1; break
                case 39 : this._right = 1; break
                case 40 : this._down = 1; break
                case 37 : this._left = 1; break
            }
        })

        document.addEventListener('keyup', event =>
        {
            switch(event.keyCode)
            {
                case 32 : this._valid = 3; break
                case 38 : this._up = 3; break
                case 39 : this._right = 3; break
                case 40 : this._down = 3; break
                case 37 : this._left = 3; break
            }
        })
        

        // 'up, down, left, right'
    }

    downPressed() { return this._down > 0 }
    downReleased() { return this._down > 1 }

    upPressed() { return this._up > 0 }
    upReleased() { return this._up > 1 }

    leftPressed() { return this._left > 0 }
    leftReleased() { return this._left > 1 }

    rightPressed() { return this._right > 0 }
    rightReleased() { return this._right > 1 }

    validPressed() { return this._valid > 0 }
    validReleased() { return this._valid > 1 }

    tick(jumpFrame = false)
    {
        if (true) // !jumpFrame)
        {
            this._down = this._down > 2 ? 2 : this._down > 1 ? 0 : this._down
            this._up = this._up > 2 ? 2 : this._up > 1 ? 0 : this._up
            this._left = this._left > 2 ? 2 : this._left > 1 ? 0 : this._left
            this._right = this._right > 2 ? 2 : this._right > 1 ? 0 : this._right
            this._valid = this._valid > 2 ? 2 : this._valid > 1 ? 0 : this._valid
        }
    }
}