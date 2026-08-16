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

 ### Currently in development

 ### Completed

- [x] Project structure
- [x] Basic HTML page
- [x] Pink and green visual design
- [x] Responsive layout
- [x] Interactive signal creation
- [x] Interactive response questions
- [x] Show signal summary
- [x] Allow users to describe their needs in their own words
- [x] Personal text input
- [x] Personal signal generator interface
- [x] Backend server
- [x] Signal generation API
- [x] Connect frontend to backend
- [x] AI signal generator endpoint
- [ ] Support card
- [ ] Sharing

## How MySignal Works

1. The user answers three simple questions.
2. MySignal collects the user's answers.
3. MySignal turns the answers into a personal support signal.
4. The signal explains what the person may need and how others can support them.

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

The current version uses a backend-generated response. AI-powered
personalization will be introduced in the next development stage.

The backend is prepared to use AI to transform free-form user input
into a personalized support signal while avoiding diagnosis or
unsupported assumptions.

### Design

MySignal uses a soft pink and green visual identity to create a calm, friendly, and welcoming wellness experience.

## Tech Stack

- HTML
- CSS
- JavaScript

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