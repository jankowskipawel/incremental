let gameData = {
    stone: 0,
    stonePerClick: 1,

    copper: 0,
    copperChance: 0.1,
    copperPerClick: 1,

    pickTier: 1,

    minePerSecond: 1,
    update: 0.01,
}

let btnMine = document.querySelector('.mine');
btnMine.addEventListener('click', mine);

let btnUpgradePick = document.querySelector('.upgradePick');
// btnMine.btnUpgradePick.addEventListener('click', upgradePick);

let stoneCount = document.querySelector('.stone');
let copperCount = document.querySelector('.copper');

let resources = ['stone', 'copper']

function mineStone()
{
    gameData.stone += gameData.stonePerClick;
    stoneCount.textContent = gameData.stone;
}

function mineCopper()
{
    gameData.copper += gameData.copperPerClick;
    copperCount.textContent = gameData.copper;
}

function mine()
{
    mineStone();
    if(Math.random() < gameData.copperChance && gameData.pickTier > 1)
    {
        mineCopper();
    }
}

function minePerSecond()
{
    gameData.stone += gameData.minePerSecond;
    stoneCount.textContent = gameData.stone;
}

// TODO
// function upgradePick()
// {
//     let requiredResources = {};
//     for(let i=0; i<pickTier-1; i++)
//     {
//         requiredResources.resources[i] = 1000 * gameData.upgradePickMultiplier;
//     }
//     btnUpgradePick.textContent = 'Upgrade Pickaxe <br>Cost: ';
// }

// todo update buttons on refresh

let mainGameLoop = window.setInterval(function() {
    minePerSecond()
  }, 1000)
  

//////////////////////////save game section //////////////////////////////////////
// let saveGameLoop = window.setInterval(function() {
//     localStorage.setItem('incrementalSave', JSON.stringify(gameData))
// }, 15000)

// let savegameJSON = JSON.parse(localStorage.getItem("incrementalSave"));
//     if (savegameJSON !== null) {
//     gameData = savegameJSON
// }

// function saveGame()
// {
//     localStorage.setItem('incrementalSave', JSON.stringify(gameData));
// }

// let btnSaveGame = document.querySelector('.saveGame');
// btnSaveGame.addEventListener('click', saveGame);
//////////////////////////save game section //////////////////////////////////////