# Paroot (WIP DO NOT USE YET)

> A open source product feedback tool

## Installation

Install Firebase CLI if you don't have it installed already

```bash
$ curl -sL firebase.tools | bash
```

Initialize Firebase inside your project. Skip if it's already done.

```bash
$ firebase init firestore
```

_If you get an error like: "Cloud resource location is not set for this project but the operation you are attempting to perform in Cloud Firestore requires it". Go to your project in Firebase Console, go to Database and click Create database. Follow the instructions._

Copy the content of [this page](https://raw.githubusercontent.com/purplos/paroot/develop/setup/firestore.rules.partial) inside your `firestore.rules` file. Add it inside the scope of `match /databases/{database}/documents`

Once you've have added the rules, deploy the changes using Firebase CLI

```bash
$ firebase deploy --only firestore:rules
```

Download the setup script

```bash
$ curl -o setup.js https://raw.githubusercontent.com/purplos/paroot/develop/setup/setup.js
```

Install firebase admin package

```bash
$ npm install --save-dev firebase-admin
```

Download service account json from Firebase
To generate a private key file for your service account:

1. In the Firebase console, open Settings > Service Accounts.

2. Click Generate New Private Key, then confirm by clicking Generate Key.

3. Save the JSON file in the same folder, and name it `serviceAccount.json`.

OBS! Make sure the `serviceAccount.json` is never checked in to git. Once the setup is complete, you can delete the file again.

Run setup script

```bash
$ node setup.js
```

## Development setup

Clone this project and cd into setup, and then follow the instructions above. You don't need to download the setup file, as it's already in the repo.

If you want to run the demo project, you have to add your own `.env` file. You can just copy and rename the `.env.example`.

To find the values needed in the env file:

1. Open Firebase Console and go to Settings > Project settings

2. Scroll down and click `Add app`, select web and type in any name.

3. The values will be displayed in step 2. If you need to find the values again later, just go to Project Settings, find the app you created and select `config`.

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
