
# Contact List

You have been given a task to construct a contact list or address book for your application. You will need to break this class into 2 different classes.

* Contact

* ContactList

## Contact

If you check the `contact.js` file, you will see the an empty class called `Contact`. You will need to implement the following:

* `constructor(name, phone)` - The `name` and `phone` number of the contact will be inputted and used in contact.

* `getName()` - Gets the name of the contact

* `setName(name)` - Sets the name of the contact using the `name` parameter.

* `getPhoneNumber()` - Gets the phone number of the contact

* `setPhoneNumber(phoneNumber)` - Sets the phone number of the contact

* `setEmail(email)` - Sets the email of the contact

* `getEmail()` - Gets the email of the contact


## Contact List

If you check `contactlist.js` file, you will see an empty class called `ContactList`. You will need to implement the following:

* `constructor()` - Initialises fieldsthat will be used to persist the
  contact list.

* `addContact(contact)` - A contact object is expected to be passed as an argument to this function, it will add that contact to the contact list.

* `findContact(phoneNumber)` - Will find a contact based on their phone number, if the contact exists, it will return the contact object, if it doesn't it will return null.

* `size()` - Will report the number of entries in the contact list


## How to test

You can test your solution by running `npm test`. If you encounter an error, please make sure you install the dependencies using `npm install`.
