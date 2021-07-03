export class Canvas {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    drawOffset = {
        x: 0,
        y: 0
    };
    ctx = null;

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.createCanvas();
    }

    createCanvas() {
        const canvas = document.getElementById('skiCanvas');
        canvas.width = this.width * window.devicePixelRatio;
        canvas.height = this.height * window.devicePixelRatio;
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';

        this.ctx = canvas.getContext("2d");
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        this.ctx.fillStyle='#9B000F';
        if (this.y<1){
            // this.ctx.fillStyle='#FFF';
            // this.ctx.fillStyle="red"    
            // this.ctx.fill();
            this.ctx.textAlign="center"; 
            this.ctx.fillStyle='#111213';
            this.ctx.font = "44px Helvetica";
            this.ctx.fillText(`Welcome To Ski!`,canvas.width/4.5,60);
            this.ctx.font = "24px Helvetica";
            this.ctx.fillText(`Press the 'S' key to start`,canvas.width/4.5,100);
            this.ctx.font = "18px Helvetica";
            this.ctx.fillText(`Use ← and → to ski and dodge Trees`,canvas.width/4.5,124);
            this.ctx.fillText(`Use spaceBar to Jump over Rocks`,canvas.width/4.5,150);
            this.ctx.fillStyle='#E8E9EE';
        }

    }

    clearCanvas() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    setDrawOffset(x, y) {
        this.drawOffset.x = x;
        this.drawOffset.y = y;
    }

    drawImage(image, x, y, width, height) {
        x -= this.drawOffset.x;
        y -= this.drawOffset.y;

        this.ctx.drawImage(image, x, y, width, height);
    }
}