var admin;
var serviceAccount;

const setup = async () => {
  try {
    admin = require("firebase-admin");
  } catch (error) {
    console.error(
      'Firebase Admin package is not installed. Please run "npm install --save-dev firebase-admin"'
    );
    process.exit(1);
  }

  try {
    serviceAccount = require("./serviceAccount.json");
  } catch (error) {
    console.error(
      "Can't find serviceAccount.json in the same directore as this script."
    );
    process.exit(1);
  }
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://feedback-614c4.firebaseio.com"
  });
  const firestore = admin.firestore();

  try {
    const setupPromises = Promise.all([
      firestore
        .collection("paroot_admins")
        .doc("UserIdOfAdmin")
        .set({ isAdmin: true }),
      firestore.collection("paroot_votes").add({
        title: "Example title",
        description: "Example description",
        votes: []
      }),
      firestore.collection("paroot_suggestions").add({
        title: "Example suggestion",
        description: "Example description"
      }),
      firestore.collection("paroot_milestones").add({
        version: "0.1",
        date: new Date(),
        features: [],
        released: false,
        visisible: true
      })
    ]);
    await setupPromises;
    console.info("Data was sucessfully written");
  } catch (error) {
    console.error(error);
  }
};
setup();
