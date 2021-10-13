function getPlayer(name, hp, img, weapon){
    this.name = name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
    this.attack = function(){
        console.log(this.name + ' ' + 'Fight...');
    } 
}

const player1 = new getPlayer('Scorpion', 90,
 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  ['katana', 'gun', 'axe']);
const player2 = new getPlayer('Sub Zero', 95,
 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  ['sword', 'shot gun', 'shield']);

console.log(player1);
console.log(player2);
console.log(player1.attack());
console.log(player2.attack());

function createPlayer(className, player){
    const $PLAYER = document.createElement('div');
    $PLAYER.classList.add(className);
        const $PROGRESSBAR = document.createElement('div');
            $PROGRESSBAR.classList.add('progressbar');
            const $LIFE = document.createElement('div');
            $LIFE.classList.add('life');
            $LIFE.style.width = '100%';
            $LIFE.style.fontWeight = 'bold';
            $LIFE.style.color = '#fff';
            $LIFE.innerText = player.hp;

            const $NAME = document.createElement('div');
            $NAME.classList.add('name');
            $NAME.innerText = player.name;
            $PROGRESSBAR.appendChild($LIFE);
            $PROGRESSBAR.appendChild($NAME);

        const $CHARACTER = document.createElement('div');
            $CHARACTER.classList.add('character');
            const $IMG = document.createElement('img');
            $IMG.src = player.img;
            $CHARACTER.appendChild($IMG);
    $PLAYER.appendChild($PROGRESSBAR);
    $PLAYER.appendChild($CHARACTER);
    const $ARENAS = document.querySelector('.arenas');
    $ARENAS.appendChild($PLAYER);
}

