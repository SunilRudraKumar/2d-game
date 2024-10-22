const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'; // color of canvas
c.fillRect(0, 0, canvas.width, canvas.height) // (x, y, width, height)