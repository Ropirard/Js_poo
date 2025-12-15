class Pen 
{
    color;

    constructor(cssColor = 'black') {
        this.color = cssColor;
    }

    getDOM(message) {
        // Comme on ne peut pas typer nos arguments, on peut toujours coder un mécanisme qui le fait
        if(typeof message !== 'string')
            throw 'Argument error: message must be a string'

        let element = document.createElement('span');
        element.style.color = this.color;
        element.textContent = message;

        return element;
    } 
}