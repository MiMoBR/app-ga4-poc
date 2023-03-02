# app-ga4-poc

APP GA4 POC

Create
npx react-native init PocGA4Analysis --template react-native-template-typescript

npm install -g yarn

yarn global add react-native-cli

yarn

yarn cache clean (to clean)

run
npx react-native run-android

---

Install Firebase - firebase.google.com - https://rnfirebase.io/analytics/usage

1 # Install & setup the app module
yarn add @react-native-firebase/app

2 # Install the analytics module
yarn add @react-native-firebase/analytics

---

Setup Google Analytics for your Firebase using Firebase project

Create New Project ANDROID
1 - Android Package Name - to find? android\app\build.gradle find namespace - com.pocga4analysis

2 - Name

3 - Debug signing certificate SHA-1 (optional)
CLI run - cd android
./gradlew signingReport
Find - Task :app:signingReport
Copy SHA1 - 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

4 - Download JSON and set on android\app

5 - Follow
5.1 - Project-level build.gradle (<project>/build.gradle):
buildscript {
...
repositories {
google() // Google's Maven repository
}
dependencies {
...
// Add this line
classpath 'com.google.gms:google-services:4.3.15'
...
}
}

    allprojects {
      ...
      repositories {
        google()  // Google's Maven repository
        mavenCentral()  // Maven Central repository
      }
    }

    5.2 - android\app\build.gradle - on top add plugins id from Google - id 'com.google.gms.google-services'
    	on the code - apply plugin: "com.google.gms.google-services" + Dependencies segue!!!

    App-level build.gradle (<project>/<app-module>/build.gradle):

    apply plugin: 'com.android.application'
    // Add this line
    apply plugin: 'com.google.gms.google-services'

    dependencies {
    	// add the Firebase SDK for Google Analytics on TOP - source - https://firebase.google.com/docs/android/setup?hl=pt-br#console

    	// Import the Firebase BoM ---- Start
    	implementation platform('com.google.firebase:firebase-bom:31.2.0')
    	implementation 'com.google.firebase:firebase-analytics'
    	implementation 'com.google.firebase:firebase-auth'
    	implementation 'com.google.firebase:firebase-firestore'
    	// Import the Firebase BoM ---- End
    }

---

RUN LOG
adb shell setprop debug.firebase.analytics.app com.pocga4analysis

adb shell setprop log.tag.FA VERBOSE
adb shell setprop log.tag.FA-SVC VERBOSE
adb logcat -v time -s FA FA-SVC
