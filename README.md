<h1 align="center">
    <img src="./assets/images/glovo-logo3-transparent.png"
    width="300px"
    alt="Logo" />
</h1>

<h3 align="center">
  React Native - Glovo 
</h3>


<p align="center">
  :pushpin: Glovo Application created using React Native, react-native-maps, react-native-google-places-autocomplete, Geolocation, Tailwind CSS, Google Cloud Services and Firebase
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vujic02/glovo-clone.svg?color=00A83A">

  <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/vujic02/glovo-clone.svg?color=00A83A">

  <a href="https://www.nikolavujic.com/">
    <img alt="Made by vujic02" src="https://img.shields.io/badge/made%20by-vujic02-00A83A">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-00A83A">
</p>

<p align="center">
  <a href="#demo">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#setup">Install and run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#design">Design</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#features-and-solutions">Features and solutions</a>
</p>

<h1 align="center" id="demo"> 📱 Demo</h1>

🚧 **WORK IN PROGRESS**

<h1 align="center" id="setup"> ⚙️ Setup (Local)</h1>

1. Add a .env file to root directory of the project

2. Create API key for Google cloud services (Enable billing in order to use all the api's)

3. Enable all api's on Google cloud services control panel

4. Add Google cloud services secret key to .env file: \
`API_KEY=KEY_GOES_HERE`

5. Run npm install to install all needed dependencies

6. Run npm start

7. Finally, scan bar the code from terminal on your phone using **Expo go** app that you can download from **Google playstore** to run the app on your phone.

Alternatively, you can download Android Studio to run a Phone simulator on your PC.

<h1 align="center" id="design"> 🖼️ Design</h1>

Because this is a clone app, the design is not custom made. The app was made from pictures taken of the real Glovo mobile app.

[Figma file with the pictures](https://www.figma.com/file/TIBcPWcKM7KNEeV6gC6i8O/Glovo-clone?node-id=0%3A1&t=DOAcaoXn7QgBxXbo-1)

![design-glovo](https://user-images.githubusercontent.com/69008848/213936422-63817001-4159-45b1-9936-659ab32724d2.png)

<h1 align="center" id="features-and-solutions"> 📋 Features and solutions</h1>

- Authentication functionality made using Firebase Auth
- Delivery destination display made using react-native-maps (Google cloud services) 
- Location searching made using react-native-google-places-autocomplete (Google cloud services)
- User location fetching made using expo-location


