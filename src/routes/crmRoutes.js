import util from "util";
import {
  addNewContact,
  getContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contacts")
    .get((req, res, next) => {
      // middleware
      util.log(`Request from: ${req.originalUrl}`); // === /contact
      util.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    .post(addNewContact); // ** MongoDB action

  app
    .route("/contacts/:contactId")
    .get(getContactById)
    .put(updateContactById)
    .delete(deleteContactById);

  return app;
};

export default routes;
