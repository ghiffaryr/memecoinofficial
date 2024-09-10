let memeCoinCount = 0;

function clickToEarn() {
    memeCoinCount += Math.floor(Math.random() * 10) + 1;  // Random coins earned
    document.getElementById("coin-counter").innerText = `You've earned ${memeCoinCount} MemeCoins`;
}

function startInteraction() {
    alert('Congratulations! You just got your first MemeCoin!');
}
