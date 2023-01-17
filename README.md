# Synergy-Widget-App-iOS

Synergy Widget iOS + movie app + dark mode

This app built by React Native CLI.

To run this app through terminal:

1. download my github project
2. go to my Synergy project folder
3. type 'npm install' -> to install all dependencies via NPM.
4. go to ios directory and type 'npx pod install'
5. back to react native directory and type 'npx react-native run-ios' -> to run react native project via NPM.

Feature:
1. Widget iOS
   - there are 3 icon in iOS widget that can be clicked. each icon will going to their own page respectively.
2. Home page
   - fetching 'now playing' movie from TMDB by using redux thunk(redux toolkit)
3. Search Page
   - fetching and return all listed movie based on user text input search
4. Setting Page
   - only have 1 action button, it is dark mode toggle. dark mode is important, some people somehow don't like white background(included me).
 
Depedency:
 - react-navigation
 - react-native-vector-icons
 - typescript
 - react-redux
 - reduxjs/toolkit
 - react-native-linear-gradient

