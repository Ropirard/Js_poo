class Pen 
{
    color;

    constructor(cssColor = 'black') {
        this.color = cssColor;
    }

    getDOM(message) {
        let element = document.createElement('span');
        element.style.color = this.color;
        element.textContent = message;

        return element;
    } 
}