const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = process.env.OPENAI_API_KEY
    ? new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    })
    : null;


app.get("/", function(req, res) {

    res.send("MySignal server is running");

});

// app.post("/generate-signal", function(req, res) {

//     const words = req.body.words;

//     if (!words || words.trim() === "") {

//         return res.status(400).json({
//             error: "Please provide your words."
//         });

//     }

//     const signal = {
//         day: "I may become quiet or find it difficult to communicate.",
//         help: "Give me some space and check in with me later.",
//         bad: "Please avoid pressuring me to explain everything immediately."
//     };

//     res.json(signal);

// });

app.post("/generate-signal", async function(req, res) {

    const words = req.body.words;

    if (!words || words.trim() === "") {

        return res.status(400).json({
            error: "Please provide your words."
        });

    }

    try {

        const response = await client.responses.create({

            model: "gpt-5.6",

             text: {
                format: {
                    type: "json_object"
                }
            },

            input: `
You are helping a person communicate how others can support them.

Read the person's words below and turn them into a short,
kind and non-judgmental support signal.

Return ONLY valid JSON in this exact format:

{
    "day": "What might happen when I am having a difficult day",
    "help": "What helps me",
    "bad": "What people should avoid"
}

Do not diagnose the person.
Do not mention mental health conditions.
Do not invent information that is not supported by their words.

Person's words:
${words}
`
        });

        const signal = JSON.parse(response.output_text);

        res.json(signal);

    } catch (error) {

        console.error("AI error:", error);

        res.status(500).json({
            error: "AI generation is currently unavailable."
        });

    }

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


const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {

    console.log(`MySignal server running on port ${PORT}`);

});