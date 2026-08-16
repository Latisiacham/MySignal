const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.AI_API_KEY
});


app.get("/", function(req, res) {

    res.send("MySignal server is running");

});

app.post("/generate-signal", function(req, res) {

    const words = req.body.words;

    if (!words || words.trim() === "") {

        return res.status(400).json({
            error: "Please provide your words."
        });

    }

    const signal = {
        day: "I may become quiet or find it difficult to communicate.",
        help: "Give me some space and check in with me later.",
        bad: "Please avoid pressuring me to explain everything immediately."
    };

    res.json(signal);

});


app.post("/test-ai", async function(req, res) {

    try {

        const response = await client.responses.create({
            model: "gpt-5.6",
            input: "Say hello to MySignal in one short sentence."
        });

        res.json({
            message: response.output_text
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "AI request failed"
        });

    }

});


const port = 3000;

app.listen(port, function() {

    console.log(`MySignal server running on port ${port}`);

});