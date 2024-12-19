const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "mock_data.json");

// Fetch all pumps
function getPumps() {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
}

// Add or update a pump
function savePump(pump) {
    const pumps = getPumps();

    // Update if pump exists, otherwise add new
    const index = pumps.findIndex((p) => p.id === pump.id);
    if (index !== -1) {
        pumps[index] = pump;
    } else {
        pumps.push(pump);
    }

    // Save to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(pumps, null, 2));
}

module.exports = { getPumps, savePump };
