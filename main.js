function getPlayer(player, name, img, weapon){
    this.player = player; 
    this.name = name;
    this.hp = 100;
    this.img = img;
    this.weapon = weapon;
    this.attack = function(){
        console.log(this.name + ' ' + 'Fight...');
    }; 
}

const player1 = new getPlayer(1,'Scorpion',
 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  ['katana', 'gun', 'axe']);
const player2 = new getPlayer(2,'Sub Zero',
 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  ['sword', 'shot gun', 'shield']);

function createElement(tag, className){
    const $tag = document.createElement(tag);
    if(className){
    $tag.classList.add(className);
    }
    return $tag;
}

const $ARENAS = document.querySelector('.arenas');
const $RANDOMBTN = document.querySelector('.button');
function createPlayer(player){
    const $PLAYER = createElement('div', 'player' + player.player);
        const $PROGRESSBAR = createElement('div', 'progressbar');
            const $LIFE = createElement('div', 'life');
            $LIFE.style.width = player.hp +'%';
            // $LIFE.style.fontWeight = 'bold';
            // $LIFE.style.color = '#fff';
            // $LIFE.innerText = player.hp;

            const $NAME = createElement('div', 'name');
            $NAME.innerText = player.name;
            $PROGRESSBAR.appendChild($LIFE);
            $PROGRESSBAR.appendChild($NAME);

        const $CHARACTER = createElement('div','character');
            const $IMG = createElement('img');
            $IMG.src = player.img;
            $CHARACTER.appendChild($IMG);
    $PLAYER.appendChild($PROGRESSBAR);
    $PLAYER.appendChild($CHARACTER);
    return $PLAYER;
}
    function randomHP(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max - min + 1))+ min;
    }

    function changeHP(player){
        
        const $PLAYERLIFE = document.querySelector('.player' + player.player + ' .life');
        player.hp -= randomHP(1, 20);
        console.log(player.hp);
        $PLAYERLIFE.style.width = player.hp +'%';
        
        if(player.hp < 0){
            player.hp = 0;
            $ARENAS.appendChild(playerLose(player.name));
            $RANDOMBTN.disabled = true;
        }
    }

$RANDOMBTN.addEventListener('click', function(){
    changeHP(player1);
    changeHP(player2);
    
});
function playerLose(name){
    const $LOSETITLE = createElement('div', 'loseTitle');
    $LOSETITLE.innerText = name + ' lose';
    return $LOSETITLE;
}

$ARENAS.appendChild(createPlayer(player1));
$ARENAS.appendChild(createPlayer(player2));

