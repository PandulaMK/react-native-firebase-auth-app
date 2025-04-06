# React Native Firebase Auth App

A mobile app built using **React Native CLI** with **Firebase Authentication** powered by `@react-native-firebase`. This app implements Sign Up and Login flows, with a custom UI based on a Figma design.

---

## 🚀 Features

- 🔐 Firebase Email & Password Authentication
- 📱 React Native CLI (no Expo)
- 🎨 Custom-styled UI based on Figma
- 🧭 Navigation using React Navigation
- 🗂️ Clean project structure

---

## 📦 Tech Stack

- React Native CLI
- @react-native-firebase/app
- @react-native-firebase/auth
- React Navigation

---

## 📁 Project Structure

rnapp/<br>
├── android/                # Android native code<br>
├── ios/                    # iOS native code (optional)<br>
├── src/                    
│   ├── navigation/         # React Navigation config<br>
│   │   └── AppNavigator.js<br>
│   ├── screens/            # UI Screens<br>
│   │   ├── SplashScreen.js<br>
│   │   ├── LoginScreen.js<br>
│   │   ├── SignUpScreen.js<br>
│   │   ├── WelcomeScreen.js<br>
│   │   └── ProfileScreen.js<br>
├── App.js                  # App entry point<br>
├── package.json            # Project dependencies and scripts<br>
└── README.md               # Project documentation<br>


---

## 🔧 Firebase Setup

This app uses native Firebase configuration via `@react-native-firebase`.

### 1. Create a Firebase Project
- Visit [Firebase Console](https://console.firebase.google.com/)
- Create a project

### 2. Register Android App
- Use your app’s package name (check `android/app/src/main/AndroidManifest.xml`)
- Download the `google-services.json` file

### 3. Add `google-services.json`
Place the file in: android/app/google-services.json


---

## 📦 Install Dependencies

```bash
npm install @react-native-firebase/app @react-native-firebase/auth
```
android/build.gradle
```
buildscript {
  dependencies {
    classpath 'com.google.gms:google-services:4.3.15' // or latest
  }
}
```
android/app/build.gradle
```
apply plugin: 'com.google.gms.google-services'

```

🏃 Running the App
```
cd android
./gradlew clean      # macOS/Linux
# OR (on Windows)
gradlew clean

cd ..
npx react-native run-android
```
Make sure your emulator or physical device is connected.


📝 Authentication
SignUpScreen.js uses:

```
auth().createUserWithEmailAndPassword(email, password)
```
LoginScreen.js uses:

```
auth().signInWithEmailAndPassword(email, password)

```
Error handling and navigation to WelcomeScreen are included.

Videos : https://drive.google.com/drive/folders/14-vDlAc8tyhtA9l6F4mh65OxHxahpsFQ?usp=sharing
