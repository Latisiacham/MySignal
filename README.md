# MySignal 

> A simple way to tell people how to support you.

## About

MySignal helps people communicate what they need when they are
struggling, overwhelmed, stressed, or having a difficult day.

Users can create a personal support signal that explains:

- What they may do when they are struggling
- What helps them
- What does not help
- What kind of support they need

## Project Status

## Current Features

- Basic landing page
- MySignal introduction
- Create My Signal section
- Initial support questions
- About section


 ### Completed

- [x] Interactive signal creation
- [x] Interactive response questions
- [x] Show signal summary
- [x] Personal text input
- [x] Personal signal generator interface
- [x] Backend server
- [x] Signal generation API
- [x] Connect frontend to backend
- [x] Support card
- [x] Copy signal to clipboard
- [x] Share signal
- [x] Share fallback to clipboard
- [x] Reset and create another signal
- [x] Mobile responsive design
- [x] OpenAI API integration
- [x] AI request error handling

## How MySignal Works

1. The user answers guided questions or describes their experience.
2. MySignal collects the user's information.
3. MySignal creates a personal support signal.
4. The signal is presented as a simple support card.
5. The user can copy or share their signal with people they trust.

## Current Experience

Users can now select answers about:

- What happens when they are having a difficult day
- What helps them
- What does not help them

After answering all three questions, MySignal generates a personal signal summary.

## Personal Input

Users who cannot find an option that describes them can write their
own experience in a text box.

MySignal validates the input and allows the user's own words to become
part of their support journey.

## Signal Generator

Users can either answer guided questions or describe their experience
in their own words.

MySignal sends the user's words to a backend API, which processes the
information and returns a structured support signal.

The signal is presented in three simple sections:

- When I'm having a difficult day
- What helps me
- Please avoid

## AI Integration

MySignal includes an OpenAI-powered signal generation endpoint that
is designed to transform free-form user input into a clearer and more
personalized support signal.

The AI integration works through a backend API so that the OpenAI API
key is not exposed in the frontend.

The AI is instructed to:

- Understand the user's own words
- Create a clearer support signal
- Avoid diagnosing the user
- Avoid making unsupported assumptions
- Focus on practical communication and support

If the AI service is unavailable, MySignal handles the failure
gracefully so that the core guided-question experience remains usable.

AI personalization requires an OpenAI API account with available
credits.

### Design

MySignal uses a soft pink and green visual identity to create a calm, friendly, and welcoming wellness experience.

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Express
- OpenAI API

## Project Structure

```text
mysignal/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   └── images/
├── README.md
└── .gitignore