var wood = 0;
var stone = 0;
var iron = 0;
var coal = 0;
var silver = 0;
var gold = 0;
var ruby = 0;
var diamond = 0;
//otherstuff//
var chopsound = new Audio("woodchop.mp3");
var axe = 0;
var axeCost = 5;
var drill = 0;
var drillCost = 50;
var extractor = 0;
var extractorCost = 25;
var pickaxe = 0;
var pickCost = 10;
var miner = 0;
var minerCost = 15;
var goldminer = 0;
var goldminerCost = 100;

function showVal(id, val) {
    document.getElementById(id).innerHTML = val;
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function updateView() {
    showVal("wood", wood);
    showVal("stone", stone);
    showVal("iron", iron);
    showVal("coal", coal);
    showVal("silver", silver);
    showVal("gold", gold);
    showVal("pickLevel", pickaxe + 1 + "&#32; &#40;" + pickCost + "&#32; wood" + "&#41;");
    showVal("axeLevel", axe + 1 + "&#32; &#40;" + axeCost + "&#32; wood" + "&#41;");
    showVal("drillLevel", drill + 1 + "&#32; &#40;" + drillCost + "&#32; stone" + "&#41;");
    showVal("extractorLevel", extractor + 1 + "&#32; &#40;" + extractorCost + "&#32; iron" + "&#41;");
    showVal("minerLevel", miner + 1 + "&#32; &#40;" + minerCost + "&#32; coal" + "&#41;");
    showVal("goldminerLevel", goldminer + 1 + "&#32; &#40;" + goldminerCost + "&#32; silver" + "&#41;");
}


if (goldminer >= 1) {
    show("words");
}
if (gold >= 1000) {
    show("areabutton");
}
if (wood >= 1000) {
    show("wood-badge-1");
}
if (wood >= 10000) {
    show("wood-badge-2");
}
if (wood >= 100000) {
    show("wood-badge-3");
}
if (wood >= 1000000) {
    show("wood-badge-4");
}
if (stone >= 1000) {
    show("stone-badge-1");
}
if (stone >= 10000) {
    show("stone-badge-2");
}
if (stone >= 100000) {
    show("stone-badge-3");
}
if (stone >= 1000000) {
    show("stone-badge-4");
}
if (iron >= 1000) {
    show("iron-badge-1");
}
if (iron >= 10000) {
    show("iron-badge-2");
}
if (iron >= 100000) {
    show("iron-badge-3");
}
if (iron >= 1000000) {
    show("iron-badge-4");
}
if (coal >= 1000) {
    show("coal-badge-1");
}
if (coal >= 10000) {
    show("coal-badge-2");
}
if (coal >= 100000) {
    show("coal-badge-3");
}
if (coal >= 1000000) {
    show("coal-badge-4");
}
if (silver >= 1000) {
    show("silver-badge-1");
}
if (silver >= 10000) {
    show("silver-badge-2");
}
if (silver >= 100000) {
    show("silver-badge-3");
}
if (silver >= 1000000) {
    show("silver-badge-4");
}
if (gold >= 1000) {
    show("gold-badge-1");
}
if (gold >= 10000) {
    show("gold-badge-2");
}
if (gold >= 100000) {
    show("gold-badge-3");
}
if (gold >= 1000000) {
    show("gold-badge-4");
}
if (pickaxe >= 1) {
    show("stonecontainer");
}
if (drill >= 1) {
    show("ironcontainer");
}
if (extractor >= 1) {
    show("coalcontainer");
}
if (miner >= 1) {
    show("silvercontainer");
}
if (goldminer >= 1) {
    show("goldcontainer");
}


function chop() {
    wood += axe + 1;
    chopsound.play();
    updateView();
}

function mine() {
    stone += pickaxe;
    updateView();

}

function ironMine() {
    iron += drill;
    updateView();

}

function coalMine() {
    coal += extractor;
    updateView();

}

function silverMine() {
    silver += miner;
    updateView();
}

function goldMine() {
    gold += goldminer;
    updateView();
}

function craftPickaxe() {
    if (wood >= pickCost) {
        pickaxe++;
        wood -= pickCost;
        pickCost *= 1.1;
        updateView();
    }
}

function craftAxe() {
    if (wood >= axeCost) {
        axe++;
        wood -= axeCost;
        axeCost *= 1.1;
        updateView();
    }
}

function craftDrill() {
    if (stone >= drillCost) {
        drill++;
        stone -= drillCost;
        drillCost *= 1.1;
        updateView();
    }
}

function craftExtractor() {
    if (iron >= extractorCost) {
        extractor++;
        iron -= extractorCost;
        extractorCost *= 1.1;
        updateView();
    }
}

function craftMiner() {
    if (coal >= minerCost) {
        miner++;
        coal -= minerCost;
        minerCost *= 1.1;
        updateView();
    }
}

function craftGoldminer() {
    if (silver >= goldminerCost) {
        goldminer++;
        silver -= goldminerCost;
        goldminerCost *= 1.1;
        updateView();
    }
}




function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome back, " + user);
    } else {
        user = prompt("Please enter a username:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}