console.log('3,2,1, go');

let bicNoir = new Pen();
let bicRouge = new Pen('red')
let plume = new FeatherPen('green', 'serif');

document.body.append(bicNoir.getDOM("Toto le héros"), bicRouge.getDOM('ROUGEEUUH'), plume.getDOM('aaa'));
