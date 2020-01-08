/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var player = 0;
var point = 0;
var sum_point = [0,0];
var check = true;
var winner = 0;
document.querySelector('.btn-roll').disabled = true;
document.querySelector('.btn-hold').disabled = true;
function btnPress() {
    var random_0 = Math.floor(Math.random() * 6 + 1);
    var random_1 = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice-0').src = 'dice-'+random_0+'.png';
    document.querySelector('.dice-1').src = 'dice-'+random_1+'.png';
    if(random_0 == 1 || random_1 == 1)
    {
        point = 0;
        if(player == 0)
        {
            document.querySelector('#current-'+player).textContent = 0;
            document.querySelector('.player-'+player+'-panel').classList.remove('active');
            player = 1
            document.querySelector('.player-'+player+'-panel').classList.add('active');
        }
        else
        {
            document.querySelector('#current-'+player).textContent = 0;
            document.querySelector('.player-'+player+'-panel').classList.remove('active');
            player = 0
            document.querySelector('.player-'+player+'-panel').classList.add('active');
        }
    }
    else
    {
        point += random_0 + random_1;
        document.querySelector('#current-'+player).textContent = point;
    }
}

function btnHold() {
    if(player == 0)
    {
        sum_point[player] += point;
        document.querySelector('#score-'+player).textContent = sum_point[player];
        if(sum_point[player] >= winner)
        {
            document.querySelector('#name-'+player).textContent = 'Winner!!!';
            document.querySelector('.btn-roll').disabled = true;
            document.querySelector('.btn-hold').disabled = true;
            check = false;
        }
        if(check == true)
        {
            document.querySelector('.player-'+player+'-panel').classList.remove('active');
            player = 1
            document.querySelector('.player-'+player+'-panel').classList.add('active');
        }
    }
    else
    {
        sum_point[player] += point;
        document.querySelector('#score-'+player).textContent = sum_point[player];
        if(sum_point[player] >= winner)
        {
            document.querySelector('#name-'+player).textContent = 'Winner!!!';
            document.querySelector('.btn-roll').disabled = true;
            document.querySelector('.btn-hold').disabled = true;
            check = false;
        }
        if(check == true)
        {
            document.querySelector('.player-'+player+'-panel').classList.remove('active');
            player = 0;
            document.querySelector('.player-'+player+'-panel').classList.add('active');
        }
    }
    point = 0;
}

function btnReset() {
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    player = 0;
    point = 0;
    sum_point = [0,0];
    check = true;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.btn-roll').disabled = false;
    document.querySelector('.btn-hold').disabled = false;
    while(1)
    {
        var i = prompt('Nhập số điểm để chiến thắng trong game?');
        if(i == null || i == "")
        {
            alert('Bạn cần nhập điểm vào trước khi chơi');
        }
        else
        {
            winner = parseInt(i);
            break;   
        }
    }
}

document.querySelector('.btn-new').addEventListener('click', btnReset);
document.querySelector('.btn-hold').addEventListener('click', btnHold);
document.querySelector('.btn-roll').addEventListener('click', btnPress);