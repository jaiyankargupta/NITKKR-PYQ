const admin = require("firebase-admin")

// Populate Using admin Credentials

const serviceAccount = {

};





admin.initializeApp({

});
const bucket = admin.storage().bucket()
module.exports = {
  bucket
}