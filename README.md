# Paroot (Not stable. Breaking changes may happen.)

> A open source product feedback tool

## Installation

### Set up Firebase Project

1. Go to the [console](https://console.firebase.google.com/) and create a new project. Follow the instructions.

2. Go the Authentication page and click "Get started". Enable the sign-in method Email/Password.

3. Click the Users tab and click Add user. Fill in your email and password. Once the user is created copy the UID.

4. Go to the Database page and click "Create database". Choose "Start in production mode", click next and select a location for the database. Click "Done" to create your database.

5. Once the database is created, click "Start collection" and fill in "parrot_admins" as the collection id. Click "Next" and fill in your UID for the Documeny ID. The document does not need any values. Click "Save".

6. Go to the Rules tab. Replace the contents with the contents of [this file](https://raw.githubusercontent.com/purplos/paroot/develop/setup/firestore.rules). Then press "Publish".

_This is optional. If you want to host your dashboard online, continue following the steps._

7. Clone this project and enter the folder.

```bash
git clone https://github.com/purplos/paroot.git <folder name>
cd <folder name>/dashboard
```

8. Go the Hosting page and press "Get started" and follow the instructions. When initializing firebase, use "build" as the public folder. Dont run `firebase deploy` yet.

9. Go Project Settings -> General, and add a new web app. Choose any nickname. Don't check firebase hosting. Press "Next" and copy the `firebaseConfig` object.

10. Open `src/firebaseApp.js` and fill in the config for your Firebase App.

11. Go to your terminal and run the following commands.

```bash
npm install
npm run build
firebase deploy
```

### Integrate paroot in your project

Select your platform and follow the instructions

- [React](https://www.npmjs.com/package/paroot-react)

## Development setup

Follow the installation instructions above.

If you want to run the demo project, add the firebaseConfig like you did for the dashboard.

## Meta

Follow the development on [Twitch](https://twitch.tv/purplteam)

Contact: anders.evjen@purpl.no

Distributed under the MIT license. See `LICENSE` for more information.

## Contributing

1. Fork it (<https://github.com/purplos/paroot/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
