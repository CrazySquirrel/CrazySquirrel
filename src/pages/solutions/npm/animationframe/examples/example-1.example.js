import AnimationFrame from 'AnimationFrame.ts';

let animation = new AnimationFrame();

let ID = animation.subscribe(context,callback,arguments,ID);

console.log(ID);
