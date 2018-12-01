
const getElement = (parent, selector) =>
{
    const element = parent.querySelector(selector)
    if (element) return element
    else throw new Error(selector + ' not found on element ' + parent.className)
}

export default class DomSystem
{
    constructor(body)
    {
        this.body = body
        
        this.gameSection = getElement(body, '.game')
        this.gameCanvas = getElement(this.gameSection, '.canvas')
    }

    getGameCanvas() { return this.gameCanvas }
}   