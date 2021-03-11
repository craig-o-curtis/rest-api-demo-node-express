import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

// ** This is the connection to Mongo
const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  // ** creates object that has CRUD methods
  let newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const getContacts = (req, res) => {
  // ** Reference to DB, methods to get
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.send(err);
    }
    res.json(contacts);
  });
};

export const getContactById = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

export const updateContactById = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    {
      new: true, // true returns new updated object, false returns old
      useFindAndModify: false, // use non-deprecated fns
    },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

export const deleteContactById = (req, res) => {
  // ** Option 1
  // Contact.findOneAndDelete(req.params.contactId, (err, contact) => {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.json(contact);
  // });
  // ** Option 2
  Contact.remove({ _id: req.params.contactId }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted contact" });
  });
};
