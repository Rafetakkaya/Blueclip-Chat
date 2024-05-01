# BlueClip Chat App

## Objective
Create a straightforward real-time chat application using React Native, Expo, and Firebase. The focus is on enabling users to join a chat room to send and receive messages in real time, using a simplified "login" process that requires only an email address (with basic validation to ensure it's in the correct format).

## Core Features
### Simplified Login with Email Validation:
- Implement a simplified login process. There's no need for users to register; they can directly "log in" by entering their email address.
- Perform basic email format validation to ensure the user enters a valid email address. This is the only form of "authentication" to simulate a user identification process without an actual authentication backend.
- Once the email is validated, users are granted access to the chat interface.

### Chat Interface:
- After logging in, users are directed to a chat screen where they can view messages from other users in real time.
- Include a simple text input field and a send button for users to post messages.
- Messages should be displayed in a scrollable view, including timestamps and the email of the user who sent each message, to mimic chat identity.

### Real-Time Data Handling:
- Utilize Firebase Realtime Database or Firestore to store and retrieve chat messages.
- Ensure messages update in real time across all devices without the need for a manual refresh.

### Expo Setup:
- Leverage Expo for easier setup and development, streamlining the process of testing the app on different devices.

## Technical Requirements
- Frontend development using React Native, with Expo for development assistance.
- Firebase Realtime Database or Firestore for storing and real-time synchronization of chat messages.
- The focus is on functionality and real-time data handling, with a streamlined login process.

## Expectations
- Users can "log in" by simply entering a valid email address, skipping traditional registration and authentication steps.
- Upon "login," users are immediately taken to a chat room where they can join the ongoing conversation.
- The chat functionality should offer real-time interaction with minimal latency.
- The project prioritizes the core functionality of real-time chatting and data handling, considering the project's time constraints.

## Setup
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Run
1. After installing dependencies, run `npx expo start` to start the Expo development server.
2. Use the Expo Go app on your iOS or Android device to scan the QR code from the Expo development server to view the app on your device.
