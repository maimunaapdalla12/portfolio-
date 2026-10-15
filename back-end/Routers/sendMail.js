import * as contact from "../controller/contactController.js";

export default function (app) {
  app.route("/contact").post(contact.createContact);
}
