function Hero(image, top, left, size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return `<img width="${this.size}" height="${this.size}" src="${this.image}" 
                style="top: ${this.top}px; left: ${this.left}px;position: absolute"/>`
    }
    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    }
}
let hero = new Hero("ball.jpg",200,20,200,50);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    hero.moveRight();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();