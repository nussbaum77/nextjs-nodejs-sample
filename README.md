# [NextJS AI News]

NextJS AI News, is a sample web application built with Next.js, TypeScript, and OpenAI's GPT-3 API. It demonstrates how to fetch AI-generated news summaries using OpenAI's GPT-3 API and display them in a modern and responsive layout.

## Project Structure

- `/components`: Contains reusable React components, such as the Layout component used for the main layout of the application.
- `/lib`: Contains the code for interacting with the OpenAI GPT-3 API.
- `/pages`: Contains the Next.js pages, including the homepage where the news summaries are displayed.
- `/styles`: Contains the CSS files for styling the application.

## Prerequisites

- Node.js 12.x or later
- NPM 6.x or later
- OpenAI API key

## Installation

1. Clone the repository:

```sh
git clone https://github.com/nussbaum77/[YOUR_PROJECT_NAME].git
cd nextjs-nodejs-sample
```

2. Install the dependencies:

```sh
npm install
```

3. Create an .env.local file in the root directory of the project and add your OpenAI API key:

```sh
NEXT_PUBLIC_OPENAI_API_KEY=your_api_key_here
```
Replace your_api_key_here with your actual OpenAI API key.

## Running the Application

1. Start the development server:
```sh
npm run dev
```

2. Open your browser and navigate to http://localhost:3000. The application should be running and displaying the AI-generated news summaries.

![Alt text](screenshot-nextopenainode-demo.png?raw=true "Demo")