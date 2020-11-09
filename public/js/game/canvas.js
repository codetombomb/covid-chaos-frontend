const canvasWrapper = document.createElement('div');
canvasWrapper.id = 'canvas-wrapper';
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;
canvasWrapper.appendChild(canvas);
getEl('root', true).appendChild(canvasWrapper)


