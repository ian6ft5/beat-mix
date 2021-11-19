// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

//functions
function toggleDrum(instrument, index) {
    if (index > 15 || index < 0) {
        return;
    }
    switch (instrument) {
        case 'kicks':
            if (kicks[index] == true) {
                kicks[index] = false;
            } else {
                kicks[index] = true;
            }
            break;
        case 'snares':
            if (snares[index] == true) {
                snares[index] = false;
            } else {
                snares[index] = true;
            }
            break;
        case 'hiHats':
            if (hiHats[index] == true) {
                hiHats[index] = false;
            } else {
                hiHats[index] = true;
            }
            break;
        case 'rideCymbals':
            if (rideCymbals[index] == true) {
                rideCymbals[index] = false;
            } else {
                rideCymbals[index] = true;
            }
            break;
    }
}

function clear (instrument) {
    switch (instrument) {
        case 'kicks':
            for (let i = 0; i < 16; i++) {
                kicks[i] = false;
            }
            break;
        case 'snares':
            for (let i = 0; i < 16; i++) {
                snares[i] = false;
            }
            break;
        case 'hiHats':
            for (let i = 0; i < 16; i++) {
                hiHats[i] = false;
            }
            break;
        case 'rideCymbals':
            for (let i = 0; i < 16; i++) {
                rideCymbals[i] = false;
            }
            break;
    }
}

function invert(instrument, index) {
    switch (instrument) {
        case 'kicks':
            for (let i = 0; i < 16; i++) {
                if (kicks[i] == true) {
                    kicks[i] = false;
                } else {
                    kicks[i] = true;
                }
            }
            break;
        case 'snares':
            for (let i = 0; i < 16; i++) {
                if (snares[i] == true) {
                    snares[i] = false;
                } else {
                    snares[i] = true;
                }
            }
            break;
        case 'hiHats':
            for (let i = 0; i < 16; i++) {
                if (hiHats[i] == true) {
                    hiHats[i] = false;
                } else {
                    hiHats[i] = true;
                }
            }
            break;
        case 'rideCymbals':
            for (let i = 0; i < 16; i++) {
                if (rideCymbals[i] == true) {
                    rideCymbals[i] = false;
                } else {
                    rideCymbals[i] = true;
                }
            }
            break;
    }
}

function clearAll() {
    clear('kicks');
    clear('snares');
    clear('hiHats');
    clear('rideCymbals');
}

//synth grid
function getNeighborPads(x, y, size) {
    let neighborPads = []; 
    if (x > 0) {neighborPads.push([(x - 1), y]);} //left neighbor
    if (y > 0) {neighborPads.push([x, (y - 1)]);} //bottom
    if (x < (size - 1)) {neighborPads.push([(x + 1), y]);} //right
    if (y < (size - 1)) {neighborPads.push([x, (y + 1)]);} //top

    return neighborPads;
}
