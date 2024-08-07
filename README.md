# FlexFit

## Project Overview

FlexFit is a fitness app developed using React Native and Expo Router. The app is designed to provide users with a seamless and engaging experience for discovering and performing exercises. It features role-based authentication and various interactive elements to enhance user engagement and usability.

## Key Features

### Role-Based Authentication

- **Firebase Authentication**: Secure user login and registration with Firebase.
- **Persistent Login**: Manages persistent login sessions using async storage.
- **Role-Based Access**: Distinguishes between users and trainers, with protected routes enforced by Expo Router.

### Homepage Design

- **Parallax Image Carousel**: Showcases different exercises with a parallax effect.
- **Targeted Body Parts**: Displays images and names of targeted body parts with fade-in animations using React Native Reanimated.
- **Profile Access**: A profile icon on the homepage allows users to access their profile or log out.

### Exercise Exploration

- **Categorized Exercises**: Users can browse exercises categorized by targeted body parts, displayed with GIFs fetched from the Exercise DB.
- **Detailed Exercise Screen**: Provides information such as exercise name, equipment, targeted muscle, and step-by-step instructions, with FadeInDown animations for smooth transitions.

### Chat System

- **User Communication**: Integrated chat feature using MUI chat icons, enabling users to communicate with trainers and nutritionists for additional support.

### Reusable Components and Responsive Design

- **Code Efficiency**: Employed reusable React Native components for consistency and efficiency.
- **Responsive Design**: Used NativeWind for styling and react-native-responsive-screen to ensure the app is responsive across different screen sizes and platforms (iOS and Android).

## Technical Challenges and Solutions

### State Management

- **Context API**: Utilized Context API for efficient global state management, ensuring smooth and responsive interactions across the app.

### Data Fetching and Persistence

- **Async Storage and Firebase**: Implemented async storage to persist user sessions and used Firebase for secure authentication, providing a reliable user experience even after app restarts.

### UI/UX Enhancements

- **Animated Elements**: Focused on creating a visually appealing and intuitive user interface with animations using React Native Reanimated and NativeWind.

### Performance Optimization

- **Optimized API Calls**: Throttled and optimized API calls to ensure efficient data fetching and reduced load times, improving the app’s performance and responsiveness.

## Conclusion

FlexFit is a comprehensive and interactive platform designed to help users explore and perform exercises with ease. By leveraging modern technologies and best practices in React Native development, the app is secure, responsive, and engaging, providing users with a seamless fitness experience.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mikey6521/FlexFit.git
   cd FlexFit
