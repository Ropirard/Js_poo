class FeatherPen extends Pen
{
    fontFamily;

    constructor(cssColor = 'red', cssFontFamily = 'cursive') {
        // En JS, on est obligé d'appeler le constructeur parent AVANT d'avoir accès à this
        super(cssColor)
        this.fontFamily = cssFontFamily;
    }

    getDOM(message) {
        // On crée l'élément à partir de la méthode parent
        let element = super.getDOM(message);

        // On ajoute au style la police
        element.style.fontFamily = this.fontFamily;

        return element;
    }
}