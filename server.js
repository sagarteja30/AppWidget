const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getPumps, savePump } = require("./backend/backend");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Endpoint to get all pumps
app.get("/api/pumps", (req, res) => {
    res.json(getPumps());
});

// Endpoint to save a pump
app.post("/api/pumps", (req, res) => {
    savePump(req.body);
    res.status(200).send("Pump saved successfully!");
});

// Delete pump by ID
app.delete("/api/pumps/:id", (req, res) => {
    const pumps = getPumps(); // Fetch current pumps
    const pumpId = req.params.id;

    // Filter out the pump to be deleted
    const updatedPumps = pumps.filter((pump) => pump.id !== pumpId);

    // Save updated pumps back to the mock_data.json file
    fs.writeFileSync(DATA_FILE, JSON.stringify(updatedPumps, null, 2));

    res.status(200).json({ message: "Pump deleted successfully!" });
});


// Serve static frontend files
app.use(express.static("frontend"));

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
