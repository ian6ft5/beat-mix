// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index, newPresetArray) => {
    let response = [];
    if (index > 3 || index < 0) {
        response[0] = 404;
        return response;
    } else {
        response[0] = 200;
    }

    if (request == 'GET') {
        response[1] = presets[index];
        return response;
    } else if (request == 'PUT') {
        presets[index] = newPresetArray;
        response[1] = newPresetArray;
        return response;
    } else {
        response[0] = 400;
        return response;
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
