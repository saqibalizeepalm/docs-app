title: "Example Document"


# Documentation for `ConsentForm.js` 📄

## Overview

The `ConsentForm.js` file is part of a larger backend system, "Wellbility State School Backend", developed using Node.js and Express. This file defines the schema for Consent Forms using Mongoose, a MongoDB object modeling tool. It outlines the structure of the consent form data that is stored in the MongoDB database, which includes fields related to personal information, vaccination details, and the consent process itself.

## Contents

- [Schema Definition](#schema-definition)
- [Schema Fields](#schema-fields)
- [Plugins Used](#plugins-used)
- [Export](#export)

## Schema Definition

The `ConsentForm.js` file utilizes Mongoose to define a schema for consent forms. It leverages the `mongoose.Schema` class to model what a consent form document should look like in the MongoDB database. This schema includes various fields that capture the necessary information for consent forms related to vaccinations.

## Schema Fields

Below is a detailed list of the fields defined in the `ConsentFormSchema`, along with their types and descriptions:

| **Field Name**                  | **Type**                | **Required** | **Description**                                                          |
| ------------------------------- | ----------------------- | ------------ | ------------------------------------------------------------------------ |
| `dateSigned`                    | `Date`                  | No           | The date when the consent form was signed.                               |
| `completedBy`                   | `String`                | No           | The name of the person who completed the form.                           |
| `studentId`                     | `Schema.Types.ObjectId` | No           | Reference to the Student document.                                       |
| `parentId`                      | `Schema.Types.ObjectId` | No           | Reference to the Parent document.                                        |
| `schoolId`                      | `Schema.Types.ObjectId` | No           | Reference to the School document.                                        |
| `status`                        | `String`                | No           | The status of the consent form.                                          |
| `firstName`                     | `String`                | No           | First name of the student.                                               |
| `middleInitial`                 | `String`                | No           | Middle initial of the student.                                           |
| `lastName`                      | `String`                | No           | Last name of the student.                                                |
| `dateOfBirth`                   | `Date`                  | No           | Date of birth of the student.                                            |
| `age`                           | `Number`                | No           | Age of the student.                                                      |
| `parentFormImage`               | `[String]`              | No           | List of image URLs for the parent's form.                                |
| `physicalAddress`               | `String`                | No           | Physical address of the student.                                         |
| `townCity`                      | `String`                | No           | Town or city where the student resides.                                  |
| `state`                         | `String`                | No           | State of residence.                                                      |
| `zip`                           | `String`                | No           | Zip code.                                                                |
| `email`                         | `String`                | No           | Email address for communication.                                         |
| `cellPhoneNumber`               | `String`                | No           | Cell phone number for contact.                                           |
| `gender`                        | `String`                | No           | Gender of the student.                                                   |
| `race`                          | `String`                | No           | Race of the student.                                                     |
| `ethnicity`                     | `String`                | No           | Ethnicity of the student.                                                |
| `grade`                         | `String`                | No           | Grade level of the student.                                              |
| `insurance`                     | `String`                | No           | Insurance details.                                                       |
| `allergyEggs`                   | `String`                | No           | Allergy information related to eggs.                                     |
| `allergyInfluenzaVaccine`       | `String`                | No           | Allergy information related to the influenza vaccine.                    |
| `historyGuillainBarreSyndrome`  | `String`                | No           | History of Guillain-Barré Syndrome.                                      |
| `feltDizzyOrFaint`              | `String`                | No           | Information on whether the student felt dizzy or faint.                  |
| `reviewedVaccineInfoStatement`  | `Boolean`               | No           | Whether the vaccine information statement was reviewed.                  |
| `signerName`                    | `String`                | No           | Name of the person who signed the form.                                  |
| `signerDaytimePhoneNumber`      | `String`                | No           | Daytime phone number of the signer.                                      |
| `signerSignature`               | `String`                | No           | Signature of the signer.                                                 |
| `reviewedNHInfoStatement`       | `Boolean`               | No           | Whether the NH info statement was reviewed.                              |
| `optIn`                         | `String`                | No           | Opt-in status.                                                           |
| `optInSignature`                | `String`                | No           | Signature for opting in.                                                 |
| `clinicOrSchoolName`            | `String`                | No           | Name of the clinic or school.                                            |
| `verificationConsentSigned`     | `String`                | No           | Verification status of the consent signed.                               |
| `askedIfUnwell`                 | `String`                | No           | Whether the student was asked if they were unwell.                       |
| `reviewedMedicalScreening`      | `String`                | No           | Status of medical screening review.                                      |
| `partialVaccination`            | `String`                | No           | Information on partial vaccination.                                      |
| `recipientNotVaccinated`        | `String`                | No           | Status if the recipient was not vaccinated.                              |
| `absent`                        | `String`                | No           | Absence status.                                                          |
| `refusedVaccine`                | `String`                | No           | Information if the vaccine was refused.                                  |
| `incompleteConsentForm`         | `String`                | No           | Status if the consent form is incomplete.                                |
| `otherReason`                   | `String`                | No           | Other reasons if applicable.                                             |
| `administrationDate`            | `Date`                  | No           | Date of vaccine administration.                                          |
| `consentOnSite`                 | `String`                | No           | Consent status on site.                                                  |
| `administrationTime`            | `String`                | No           | Time of vaccine administration.                                          |
| `waitTime`                      | `String`                | No           | Wait time after vaccination.                                             |
| `vaccineName`                   | `String`                | No           | Name of the vaccine administered.                                        |
| `lotNumber`                     | `String`                | No           | Lot number of the vaccine.                                               |
| `expirationDate`                | `Date`                  | No           | Expiration date of the vaccine.                                          |
| `routeBodySite`                 | `String`                | No           | Route and body site for vaccine administration.                          |
| `visPublicationDate`            | `Date`                  | No           | Publication date of VIS.                                                 |
| `visGivenDate`                  | `Date`                  | No           | Date when VIS was given.                                                 |
| `providerNameAddress`           | `String`                | No           | Provider's name and address.                                             |
| `vaccineAdministratorNameTitle` | `String`                | No           | Name and title of the vaccine administrator.                             |
| `administratorSignature`        | `String`                | No           | Signature of the administrator.                                          |
| `nhiiOptIn`                     | `Boolean`               | No           | NHII opt-in status.                                                      |
| `dateEnteredNHII`               | `Date`                  | No           | Date entered into NHII.                                                  |
| `enteredNHIIBy`                 | `String`                | No           | Name of the person who entered data into NHII.                           |
| `nhiiOptOut`                    | `Boolean`               | No           | NHII opt-out status.                                                     |
| `additionalNotes`               | `String`                | No           | Additional notes relevant to the consent form.                           |
| `other`                         | `String`                | No           | Any other relevant information.                                          |
| `otherRouteBodySite`            | `String`                | No           | Information about other routes or body sites for vaccine administration. |

## Plugins Used

### `mongoosePaginate`

- **Description**: The `mongoose-paginate-v2` plugin is integrated into the schema to add pagination capabilities. This allows efficient querying of large datasets by breaking down the data into manageable chunks.

## Export

The schema is exported using `module.exports` to be used elsewhere in the application. It allows other parts of the application to interact with the `ConsentForm` model to perform CRUD operations on the consent form documents.

```javascript
module.exports = mongoose.model('ConsentForm', ConsentFormSchema);
```

## Conclusion

The `ConsentForm.js` file plays a crucial role in modeling the data structure for consent forms within the application. It ensures that all necessary fields are included and provides a framework for interacting with this data in a structured and consistent manner. This schema is integral to managing health-related information and supporting the overall functionality of the backend system. 🏫💉

# Documentation for `MedicalProfessional.js` 📄

### Overview

The `MedicalProfessional.js` file is part of the backend system for the "Wellbility State School Backend" project. It defines the schema and model for a **Medical Professional** using MongoDB with Mongoose. The schema includes fields for managing user credentials and associations with a PHN (Public Health Nurse). This file also incorporates password hashing functionality to enhance security.

---

### Table of Contents

- [Importing Modules](#importing-modules)
- [Schema Definition](#schema-definition)
- [Middleware](#middleware)
- [Instance Methods](#instance-methods)
- [Exporting the Model](#exporting-the-model)

---

### Importing Modules

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
```

- **mongoose**: A Node.js library that provides a straightforward, schema-based solution to model application data.
- **bcryptjs**: A library to hash passwords, ensuring secure storage.

---

### Schema Definition

The `MedicalProfessionalSchema` defines the structure of a Medical Professional document in MongoDB.

| Field                  | Type                    | Description                                      | Required |
| ---------------------- | ----------------------- | ------------------------------------------------ | -------- |
| `username`             | `String`                | Unique identifier for the medical professional.  | Yes      |
| `password`             | `String`                | Hashed password for authentication.              | Yes      |
| `email`                | `String`                | Unique email address for communication.          | Yes      |
| `resetPasswordToken`   | `String`                | Token for password reset functionality.          | No       |
| `resetPasswordExpires` | `String`                | Expiry time for the password reset token.        | No       |
| `phn`                  | `Schema.Types.ObjectId` | Reference to a PHN (Public Health Nurse) object. | Yes      |

```javascript
const MedicalProfessionalSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: String },
  phn: { type: Schema.Types.ObjectId, ref: 'PHN', required: true },
});
```

---

### Middleware

The schema includes pre-save middleware to hash the password whenever it is modified. This enhances security by storing only hashed passwords in the database.

```javascript
MedicalProfessionalSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});
```

- **Pre-save Middleware:** Automatically hashes the password before saving the document if the password field is modified.

---

### Instance Methods

An instance method `comparePassword` is provided to compare a plain text password with the hashed password stored in the database.

```javascript
MedicalProfessionalSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
```

- **comparePassword:** Compares a given password with the stored hashed password, using bcrypt for comparison.

---

### Exporting the Model

Finally, the schema is compiled into a model and exported for use within the application.

```javascript
module.exports = mongoose.model(
  'MedicalProfessional',
  MedicalProfessionalSchema,
);
```

- **Model Export:** Allows the `MedicalProfessional` model to be used in other parts of the application, facilitating CRUD operations on Medical Professional documents.

---

### Conclusion

The `MedicalProfessional.js` file plays a crucial role in managing the authentication and identification of medical professionals within the system. The integration of password hashing ensures that user credentials are stored securely, maintaining the integrity and privacy of sensitive information.

# 📄 Documentation for `District.js`

This document provides an in-depth overview of the `District.js` file, which is part of the Wellbility State School Backend project. This file is essential for managing district-related data within the MongoDB database using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js.

## 📚 Index

1. [Overview](#overview)
2. [Dependencies](#dependencies)
3. [Schema Definition](#schema-definition)
4. [Mongoose Paginate Plugin](#mongoose-paginate-plugin)
5. [Exporting the Model](#exporting-the-model)

## Overview

The `District.js` file is responsible for defining the data model for a "District" in the application. This model is used to manage and interact with district data stored in a MongoDB database. Each district has a unique name, and the model supports pagination to handle large sets of data efficiently.

## Dependencies

The file imports two main dependencies:

```javascript
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
```

- **Mongoose**: A library that provides a straightforward, schema-based solution to model application data. It allows defining schemas and interacting with MongoDB database.
- **Mongoose Paginate**: A pagination library for Mongoose that provides pagination capabilities to the data model.

## Schema Definition

The `DistrictSchema` defines the structure of a district document in the database:

```javascript
const DistrictSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);
```

- **name**: A required string field that must be unique. It represents the name of the district.

- **timestamps**: An option that automatically adds `createdAt` and `updatedAt` fields to the schema, storing the creation and update times of each document.

## Mongoose Paginate Plugin

The `mongoose-paginate-v2` plugin is added to the `DistrictSchema` to enable pagination:

```javascript
DistrictSchema.plugin(mongoosePaginate);
```

This plugin allows for easy implementation of pagination when querying the District model, making it efficient to handle large amounts of data by retrieving data in chunks.

## Exporting the Model

Finally, the model is exported for use in other parts of the application:

```javascript
module.exports = mongoose.model('District', DistrictSchema);
```

This line creates and exports a Mongoose model named `District` based on the `DistrictSchema`. This model can be used to perform CRUD (Create, Read, Update, Delete) operations on district documents in the MongoDB database.

---

This concludes the documentation for the `District.js` file. This backend component plays a crucial role in managing district data, ensuring data integrity and efficient data retrieval through pagination. 🏫📊

# Nurse.js Documentation 📚🩺

The `Nurse.js` file is a part of the Wellbility State School Backend project. This file defines the **Nurse model** using Mongoose, a popular MongoDB object modeling tool designed to work in an asynchronous environment. The model includes essential fields and functionalities related to the nurse's authentication and association with schools.

## Table of Contents

- [Overview](#overview)
- [Schema Definition](#schema-definition)
- [Middleware](#middleware)
- [Instance Methods](#instance-methods)
- [Export](#export)

## Overview

The `Nurse` model is designed to represent nurse users in the system. It stores authentication information and associates each nurse with one or more schools. Nurses have unique usernames and emails, and their passwords are securely hashed before storage.

## Schema Definition

The schema is defined using Mongoose's `Schema` constructor. Below is a breakdown of the fields in the `Nurse` schema:

| Field Name             | Type                | Required | Unique | Description                                                      |
| ---------------------- | ------------------- | -------- | ------ | ---------------------------------------------------------------- |
| `username`             | `String`            | Yes      | Yes    | The unique username for the nurse.                               |
| `password`             | `String`            | Yes      | No     | The nurse's password, which will be hashed.                      |
| `email`                | `String`            | Yes      | Yes    | The unique email address for the nurse.                          |
| `resetPasswordToken`   | `String`            | No       | No     | Token for password reset functionality.                          |
| `resetPasswordExpires` | `String`            | No       | No     | Expiry time for the reset password token.                        |
| `schools`              | `Array of ObjectId` | Yes      | No     | Array of references to the schools the nurse is associated with. |

### Schools Association

- **Type**: Array of `ObjectId`
- **Reference**: `School`
- **Purpose**: To associate a nurse with multiple schools.

## Middleware

A **pre-save middleware** is used to hash the nurse's password before saving it to the database. This ensures that plaintext passwords are never stored directly in the database.

```javascript
NurseSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});
```

- **`isModified('password')`**: Checks if the password has been modified. Hashing is only performed if the password has changed.
- **`bcrypt.hash(this.password, 8)`**: Uses bcrypt to hash the password with a salt factor of 8.

## Instance Methods

The `Nurse` schema defines an instance method for password comparison:

```javascript
NurseSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
```

- **`comparePassword`**: Compares a given password with the hashed password stored in the database using bcrypt's compare method. This is typically used during the login process.

## Export

Finally, the `Nurse` model is exported for use in other parts of the application.

```javascript
module.exports = mongoose.model('Nurse', NurseSchema);
```

By exporting the model, it can be imported and utilized in controllers and other modules that handle nurse-related logic and database operations.

---

This documentation provides a comprehensive overview of the `Nurse.js` file, detailing its purpose, schema, methods, and how it fits into the larger application. The structure ensures easy management and retrieval of nurse-related data while maintaining security and integrity.

# `Parent.js` Documentation 📄

The `Parent.js` file defines the **Parent** model in the "Wellbility State School Backend" application. This model is used for storing and managing the data related to parents within the system, utilizing **Mongoose** to interact with a **MongoDB** database.

## Overview 🏡

A **Parent** is represented by their email and associated links. Links in this context are references to public links that may be related to consent forms or other actions the parent can take.

## Detailed Schema Description 🧬

### Imports

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```

- **mongoose**: Library for MongoDB object modeling that provides schema-based solutions to model your application data.
- **Schema**: A Mongoose structure that defines the shape of the documents within a collection.

### ParentSchema Definition

```javascript
const ParentSchema = new Schema({
  email: { type: String, required: true, unique: true },
  links: [{ type: Schema.Types.ObjectId, ref: 'PublicLink' }],
});
```

- **email**:

  - **Type**: `String`
  - **Required**: `true`
  - **Unique**: `true`
  - **Description**: The email address of the parent, which is a unique identifier for each parent in the system.

- **links**:
  - **Type**: `Array` of `Schema.Types.ObjectId`
  - **Reference**: `PublicLink`
  - **Description**: An array of references to the `PublicLink` model. Each parent can have multiple associated public links.

## Mongoose Model Export 🚀

```javascript
module.exports = mongoose.model('Parent', ParentSchema);
```

- **Purpose**: Exports the Parent model, allowing it to be used in other parts of the application to perform database operations related to parents.

## Usage Scenarios 🎯

The **Parent** model can be used in various scenarios within the application, such as:

- **Registering** a new parent with a unique email.
- **Associating** a parent with specific public links, which might be used for consent forms or other parent-specific actions.
- **Querying** for existing parent records to verify their email or retrieve associated links.

This model plays a crucial role in managing parental data efficiently, ensuring that each parent's email is unique and linking them to their relevant actions within the application.

# PHN.js Documentation 📄✨

The `PHN.js` file defines a Mongoose schema for managing Public Health Nurse (PHN) records in the Wellbility State School Backend system. This schema is used to store and interact with data related to public health nurses, which are identified by their unique PHN IDs and associated with specific regions.

## Table of Contents 📚

1. [Overview](#overview)
2. [Schema Definition](#schema-definition)
3. [Fields](#fields)
4. [Export](#export)

## Overview

This file primarily focuses on defining a Mongoose schema for Public Health Nurses. The schema serves as a blueprint for creating, reading, updating, and deleting PHN records within the MongoDB database.

## Schema Definition

The schema is defined using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js. The `PHNSchema` defines the structure of a PHN document in the database.

### Basic Setup

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```

- **Mongoose**: Required for schema creation and database interaction.
- **Schema**: A constructor from Mongoose to define the structure of the document.

### PHN Schema

```javascript
const PHNSchema = new Schema({
  phnId: { type: String, required: true, unique: true },
  region: { type: String, required: true },
});
```

## Fields

The schema consists of two fields:

| Field    | Type   | Description                        | Constraints              |
| -------- | ------ | ---------------------------------- | ------------------------ |
| `phnId`  | String | The unique identifier for the PHN  | Required, Must be unique |
| `region` | String | The region associated with the PHN | Required                 |

- **phnId**: A unique string that identifies the public health nurse. It is a required field and must be unique across all PHN records.
- **region**: A string representing the geographic region the PHN is associated with. This field is required to ensure each PHN is linked to a specific area.

## Export

The `PHN` model is exported for use in other parts of the application.

```javascript
module.exports = mongoose.model('PHN', PHNSchema);
```

- **`module.exports`**: Exports the compiled model for the schema, allowing other files to interact with the PHN collection in the MongoDB database.

## Summary

The `PHN.js` file is a critical component of the backend system, enabling the management of public health nurses by defining a clear structure for their data within the database. This schema ensures that each PHN is uniquely identifiable and associated with a specific region, facilitating organized and efficient data handling.

# PublicLink.js Documentation

## Overview

The `PublicLink.js` file defines a Mongoose schema and model for managing public links associated with consent forms. These links allow parents to access specific consent forms, potentially simplifying the process of reviewing and signing the forms. This model is an essential part of the system's functionality in providing secure and time-bound access to the form data.

## Schema Definition

The schema is defined using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment. The `PublicLinkSchema` includes several fields crucial for linking parents to their respective consent forms via a unique URL.

### Schema Fields

| Field Name      | Data Type               | Description                                                                             |
| --------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `parentId`      | `Schema.Types.ObjectId` | References the `Parent` model, linking the public link to a specific parent.            |
| `consentFormId` | `Schema.Types.ObjectId` | References the `ConsentForm` model, linking the public link to a specific consent form. |
| `link`          | `String`                | A unique URL string that provides access to the consent form.                           |
| `expiryTime`    | `Date`                  | The date and time at which the link expires, ensuring time-bound access.                |

### Field Details:

- **`parentId`**: This field is required and acts as a foreign key reference to the `Parent` model, ensuring that each link is associated with a specific parent.
- **`consentFormId`**: This field is also required and serves as a foreign key reference to the `ConsentForm` model, linking the public access to a specific consent form.

- **`link`**: This field is required and must be unique across the collection, ensuring that each link is a distinct URL string that can be shared with the parent for accessing the consent form.

- **`expiryTime`**: This field is required and represents the point in time after which the link becomes invalid, providing a security measure to limit unauthorized access over time.

## Export

The schema is exported as a Mongoose model named `PublicLink`, making it available for use throughout the application where public links are managed or accessed.

```javascript
module.exports = mongoose.model('PublicLink', PublicLinkSchema);
```

## Usage

The `PublicLink` model is used to create, read, update, and delete (CRUD) operations on public links in the MongoDB database. It plays a critical role in the backend system by facilitating secure, time-limited access to consent forms for parents.

## Summary

In summary, `PublicLink.js` is a crucial component of the backend system, providing the schema necessary for generating and managing public links that connect parents with their children’s consent forms securely and efficiently. This functionality is vital for maintaining a seamless flow of information and consent between schools and parents.

# School.js Documentation

## Overview

The `School.js` file defines the structure of the School model using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment. This model is essential for managing school-related data, associating each school with a particular district, and supporting pagination for handling large datasets efficiently.

## Dependencies

- **Mongoose**: A MongoDB ODM library for Node.js that allows defining schemas with strongly-typed data.
- **mongoose-paginate-v2**: A pagination plugin for Mongoose that adds pagination capabilities to Mongoose models.

## Code Explanation

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const SchoolSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    district: { type: Schema.Types.ObjectId, ref: 'District' }, // Link to District
  },
  { timestamps: true },
);

SchoolSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('School', SchoolSchema);
```

### Schema Details

- **name (String)**:

  - **Type**: String
  - **Required**: Yes
  - **Unique**: Yes
  - **Description**: Represents the name of the school. Each school must have a unique name.

- **district (ObjectId)**:
  - **Type**: Schema.Types.ObjectId
  - **Reference**: 'District'
  - **Description**: Links the school to a specific district using the district's ObjectId. This establishes a relation between the School and District collections.

### Timestamps

The `{ timestamps: true }` option automatically adds `createdAt` and `updatedAt` fields to the schema. This is useful for keeping track of when each document is created and last updated.

### Pagination

The `mongoosePaginate` plugin is applied to the schema, enabling easy pagination of query results. This is particularly useful for efficiently handling large datasets and implementing features like infinite scrolling or paged views in applications.

## Export

The model is exported using:

```javascript
module.exports = mongoose.model('School', SchoolSchema);
```

This allows the `School` model to be imported and used in other parts of the application for operations like creating, reading, updating, or deleting school documents in the database.

## Summary

The `School.js` file effectively sets up a Mongoose model for managing school entities within the application. By linking each school to a district and supporting pagination, it ensures that the school data is well-organized and scalable, a crucial aspect for applications dealing with educational institutions.

# Role.js Documentation 📜

## Overview

The **Role.js** file defines a schema for the `Role` model using Mongoose, a popular ODM (Object Data Modeling) library for MongoDB and Node.js. This file is a crucial part of the backend system that manages user roles and their associated permissions within the application.

## Key Features

- **Role Management**: Defines a schema for user roles, allowing for a structured and scalable way to manage different types of user roles in the application.
- **Permissions Control**: Includes an optional permissions array to grant specific permissions to each role, providing a foundation for a granular access control system.

## Detailed Description

Below is a detailed breakdown of the code and its components:

### Import Statements

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```

- **Mongoose**: The Mongoose library is imported to interact with the MongoDB database.
- **Schema**: A Mongoose `Schema` is a blueprint for defining the structure of documents within a collection.

### Role Schema Definition

```javascript
const RoleSchema = new Schema(
  {
    roleName: { type: String, required: true, unique: true },
    permissions: [
      {
        type: String,
        required: false,
      },
    ],
  },
  { timestamps: true },
);
```

- **roleName**: A mandatory and unique field that specifies the name of the role (e.g., "Admin", "User", "Nurse"). This field ensures that each role is identifiable and distinct within the application.
- **permissions**: An optional array of strings, each representing a specific permission that can be assigned to a role (e.g., "read", "write", "delete"). This allows for flexible and detailed access control tailored to the requirements of the application.
- **timestamps**: Automatically adds `createdAt` and `updatedAt` fields to the schema, which are useful for tracking creation and modification times of each role document.

### Model Export

```javascript
module.exports = mongoose.model('Role', RoleSchema);
```

- The schema is compiled into a Mongoose model named `Role`. This model provides an interface to interact with the `roles` collection in MongoDB, allowing CRUD operations to be performed easily on role documents.

## Considerations

- **Granularity**: The level of granularity for permissions can be adjusted based on the application needs. The current setup allows for expanding the permissions array with more specific actions or categories.
- **Scalability**: The schema is designed to be scalable, supporting the addition of new roles and permissions as the application evolves.

## Usage Example

To create a new role within the application, you would interact with the `Role` model, like so:

```javascript
const Role = require('./Role');

const newRole = new Role({
  roleName: 'Admin',
  permissions: ['read', 'write', 'delete'],
});

newRole
  .save()
  .then(() => console.log('Role created successfully!'))
  .catch((err) => console.error('Error creating role:', err));
```

This example demonstrates creating a new role named "Admin" with permissions to "read", "write", and "delete" resources.

## Conclusion

The `Role.js` file is essential for managing user roles and permissions, providing a robust framework for access control within the application. By defining roles and their permissions, the system can enforce secure and organized user access, ensuring that users can only perform actions they are authorized to do.

Feel free to extend this schema to fit the unique needs of your application, adding more fields or adjusting the permissions structure as necessary.

# ShortForm.js Documentation

## Overview

The `ShortForm.js` file defines a Mongoose schema and model for handling short forms within the backend system of the Wellbility State School project. This schema is primarily used to manage records related to forms filled out by or for students, capturing essential details such as the date of form completion and the associated student.

## Schema Definition

### Importing Mongoose

The file begins by importing the `mongoose` library, which is essential for defining and working with MongoDB schemas in a Node.js environment.

```javascript
const mongoose = require('mongoose');
```

### Schema Initialization

A new schema is created using `mongoose.Schema`. This schema outlines the structure of the short form documents stored in the MongoDB database.

```javascript
const Schema = mongoose.Schema;
```

### ShortFormSchema

The `ShortFormSchema` is defined with the following fields:

- **formId**: A `String` field which is not required and not unique. It represents the identifier of the form.
- **dateFilled**: A `Date` field which is required. This field stores the date on which the form was filled out.
- **studentId**: An `ObjectId` that references the `Student` model. This field is required and links the form to a specific student.

The schema also includes timestamp options to automatically manage `createdAt` and `updatedAt` properties for each document.

```javascript
const ShortFormSchema = new Schema(
  {
    formId: { type: String, required: false, unique: false },
    dateFilled: { type: Date, required: true },
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  },
  { timestamps: true },
);
```

## Model Export

Finally, the schema is compiled into a Mongoose model named `ShortForm`, which is then exported for use in other parts of the application.

```javascript
module.exports = mongoose.model('ShortForm', ShortFormSchema);
```

## Summary

- **Purpose**: Manages short form records linked to students.
- **Fields**:
  - `formId`: Identifier for the form (optional).
  - `dateFilled`: Date when the form was completed (required).
  - `studentId`: Reference to the student associated with the form (required).
- **Features**: Automatically handles document creation and update timestamps.

This file is crucial for operations involving short form data within the application, facilitating easy data management and retrieval based on student associations and form completion dates.

# Student.js Documentation 📚

The `Student.js` file defines the **Student** model using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB and Node.js. This model represents students in the "Wellbility State School Backend" system, capturing essential information about them for school and health-related management.

## Schema Definition

Below is the schema utilized in the `Student.js` file:

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentId: { type: String, required: true, unique: true },
  school: { type: Schema.Types.ObjectId, ref: 'School', required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('Student', StudentSchema);
```

## Schema Fields

Here is a detailed explanation of each field in the `StudentSchema`:

- **studentId**:

  - **Type**: String
  - **Required**: Yes
  - **Unique**: Yes
  - **Description**: A unique identifier for each student, ensuring no duplicates exist.

- **school**:

  - **Type**: ObjectId
  - **Reference**: `School`
  - **Required**: Yes
  - **Description**: Links each student to a specific school using the school's unique identifier. This is a reference to the `School` model, enabling relational data management between students and schools.

- **name**:

  - **Type**: String
  - **Required**: Yes
  - **Description**: The full name of the student.

- **dob** (Date of Birth):

  - **Type**: Date
  - **Required**: Yes
  - **Description**: The birthdate of the student, used for age calculation and verification.

- **age**:
  - **Type**: Number
  - **Required**: Yes
  - **Description**: The age of the student, which can be computed from the `dob` but is stored separately for quick access and validation purposes.

## Usage

This model is employed in the backend to perform CRUD (Create, Read, Update, Delete) operations related to student data. It facilitates storing and retrieving student information, ensuring data integrity and relationships through the use of MongoDB's ObjectId references.

### Example Usage

```javascript
// Import the Student model
const Student = require('./Student');

// Create a new student record
const newStudent = new Student({
  studentId: 'S123456',
  school: '60d0fe4f5311236168a109ca', // Example ObjectId of a School
  name: 'John Doe',
  dob: new Date('2005-06-15'),
  age: 16,
});

// Save the student record to the database
newStudent
  .save()
  .then((student) => console.log('Student saved:', student))
  .catch((error) => console.error('Error saving student:', error));
```

## Conclusion

The `Student.js` file is a critical component of the backend system, modeling the student entity and providing a structured way to handle student-related data. By leveraging Mongoose, it ensures robust data validation, unique constraints, and relational mapping within the MongoDB database.

# `Token.js` Documentation

## Overview

The `Token.js` file defines a **Token** schema using Mongoose for a MongoDB collection. This schema is part of the backend system for managing tokens used in user authentication processes. Tokens are critical for verifying user sessions and managing password resets or email verifications.

## Schema Definition

The schema is defined using Mongoose's `Schema` constructor, which is then used to create a Mongoose model. Below are the fields defined in the **TokenSchema**:

```javascript
const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel',
  },
  token: {
    type: String,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  onModel: {
    type: String,
    required: true,
    enum: ['MedicalProfessional', 'Nurse', 'User'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});
```

### Fields

- **userId**: An `ObjectId` that references the user associated with the token. The `refPath` indicates that it can reference different models (`MedicalProfessional`, `Nurse`, or `User`).

- **token**: A `String` representing the token itself. This is required and is used for validating user sessions.

- **expires**: A `Date` indicating when the token will expire. This is also required to ensure tokens have a limited lifespan for security reasons.

- **onModel**: A `String` that specifies which model the `userId` is associated with. It is required and can be one of the following:

  - `'MedicalProfessional'`
  - `'Nurse'`
  - `'User'`

- **created**: A `Date` indicating when the token was created. It defaults to the current date and time.

- **updated**: A `Date` indicating when the token was last updated. It also defaults to the current date and time.

## Usage

Tokens are primarily used in authentication workflows for:

- **Session validation**: Ensures that users can securely interact with the system across sessions.
- **Password resets**: Provides a mechanism to validate password reset requests.

- **Email verification**: Helps in verifying the user's email address as part of the registration or email update process.

## Export

The schema is compiled into a Mongoose model named **Token**, which is exported for use in other parts of the application.

```javascript
module.exports = mongoose.model('Token', tokenSchema);
```

## Key Points

- The `Token` model is pivotal for managing authentication-related tasks.
- It supports different user types (`MedicalProfessional`, `Nurse`, `User`) through dynamic references.
- Ensures security with token expiry and creation timestamps.

By adhering to these practices, the system can maintain secure authentication processes and manage user sessions effectively.

# User.js Documentation 📄

This document provides a detailed overview of the **User.js** file, which is part of the Wellbility State School Backend. This file defines the **User** model, utilizing the mongoose library to interact with MongoDB, and implements user authentication functionalities.

## Overview 🧩

The **User.js** file is responsible for defining the schema and model of a user in the system. It includes fields for user credentials, roles, and associated entities like schools and districts. The file also contains methods for password management and pagination support.

## Table of Contents 📜

1. [Dependencies](#dependencies)
2. [User Schema](#user-schema)
3. [Plugins](#plugins)
4. [Methods](#methods)
5. [Export](#export)

## Dependencies 📦

The file imports several modules required for defining the user schema:

- **mongoose**: A MongoDB ODM for Node.js that allows defining schemas and models.
- **bcryptjs**: A library to hash and compare passwords for secure authentication.
- **mongoose-paginate-v2**: A pagination plugin for mongoose models.

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate-v2');
```

## User Schema 📑

The User schema is defined using `mongoose.Schema`, which includes several fields and references to other models:

| Field                  | Type                               | Required | Description                                                        |
| ---------------------- | ---------------------------------- | -------- | ------------------------------------------------------------------ |
| `username`             | String                             | Yes      | Unique username for the user.                                      |
| `email`                | String                             | Yes      | Unique email address of the user.                                  |
| `password`             | String                             | Yes      | Hashed password for authentication.                                |
| `role`                 | ObjectId (Reference to `Role`)     | No       | Reference to the user's role in the system.                        |
| `school`               | Array of ObjectId (Ref `School`)   | No       | List of schools associated with the user, if applicable.           |
| `district`             | Array of ObjectId (Ref `District`) | No       | List of districts associated with the user, if applicable.         |
| `resetPasswordToken`   | String                             | No       | Token for password reset functionality.                            |
| `resetPasswordExpires` | String                             | No       | Expiration time for the password reset token.                      |
| `isDeleted`            | Boolean                            | No       | Indicates if the user account is soft-deleted. Default is `false`. |

```javascript
const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role' },
    school: [{ type: Schema.Types.ObjectId, ref: 'School', required: false }],
    district: [
      { type: Schema.Types.ObjectId, ref: 'District', required: false },
    ],
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);
```

## Plugins 🔌

### Pagination

The `mongoose-paginate-v2` plugin is applied to the schema to enable pagination functionality:

```javascript
UserSchema.plugin(mongoosePaginate);
```

## Methods 🔍

### comparePassword

A method for comparing a candidate password with the stored hashed password. It uses `bcrypt.compare` to ensure secure password verification.

```javascript
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
```

## Export 📤

The file exports the **User** model, making it available for use in other parts of the application.

```javascript
module.exports = mongoose.model('User', UserSchema);
```

## Summary 📝

The **User.js** file is crucial for handling user data and authentication within the Wellbility State School Backend. By leveraging mongoose for schema definitions and bcryptjs for password security, it ensures robust user management. The integration of pagination further enhances data handling capabilities, making it a well-rounded component of the system.

# ConsentFormController.js Documentation 📄

The `ConsentFormController.js` file is a central part of managing consent forms in the **Wellbility State School Backend** system. It provides various functions for handling consent form data, including creating, updating, retrieving, and deleting consent forms. The file also includes functionality for filtering forms based on certain criteria and integrates email notifications using the SendGrid service.

## Table of Contents

1. [Overview](#overview)
2. [Functions](#functions)
   - [createConsentForm](#createconsentform)
   - [getAllConsentForms](#getallconsentforms)
   - [getConsentFormsBySchoolOrDistrict](#getconsentformsbyschoolordistrict)
   - [getConsentFormById](#getconsentformbyid)
   - [updateConsentForm](#updateconsentform)
   - [updateAdminConsentForm](#updateadminconsentform)
   - [createConsentFormWithImage](#createconsentformwithimage)
   - [updateConsentFormWithImage](#updateconsentformwithimage)
   - [deleteConsentForm](#deleteconsentform)
   - [getConsentFormsByDateAndStatus](#getconsentformsbydateandstatus)
3. [Helper Function](#helper-function)
   - [parseMMDDYYYY](#parsemmddyyyy)
4. [Dependencies](#dependencies)

## Overview

The `ConsentFormController.js` file is responsible for managing consent form operations within the backend. By interfacing with the MongoDB database using Mongoose, it allows for CRUD operations and more advanced data retrieval and filtering.

## Functions

### createConsentForm

- **Purpose**: To create a new consent form and send a notification email to the parent if an email address is provided.
- **Parameters**: `req`, `res` (Express request and response objects)
- **Flow**:
  1. Verify the school exists using `schoolId`.
  2. Create a new consent form with data from the request body.
  3. Save the form to the database.
  4. If an email is provided, send a notification using SendGrid.
- **Response**: Success message and status code, or error message on failure.

### getAllConsentForms

- **Purpose**: Retrieve all consent forms with pagination, filtering by status and search terms, and sorting.
- **Parameters**: `req`, `res`
- **Query Parameters**:
  - `page`, `limit`: For pagination.
  - `status`: Filter by form status.
  - `search`: Search through names, emails, etc.
  - `sortBy`, `sortOrder`: Sorting criteria.
- **Response**: List of consent forms and metadata about pagination.

### getConsentFormsBySchoolOrDistrict

- **Purpose**: Retrieve consent forms related to specific schools or districts, supporting filters and search.
- **Parameters**: `req`, `res`
- **Query Parameters**:
  - `schoolId`, `districtId`: Filter by school or district.
  - `status`, `search`, `sortBy`, `sortOrder`: Additional filters and sorting.
- **Response**: Consent forms matching the criteria or error messages.

### getConsentFormById

- **Purpose**: Retrieve a single consent form by its ID.
- **Parameters**: `req`, `res`
- **Response**: Consent form data or an error message if not found.

### updateConsentForm

- **Purpose**: Update a consent form by its ID.
- **Parameters**: `req`, `res`
- **Response**: Success or error message based on the update operation.

### updateAdminConsentForm

- **Purpose**: Update administrative fields in a consent form and notify the parent via email.
- **Parameters**: `req`, `res`
- **Response**: Success or error message, including email status.

### createConsentFormWithImage

- **Purpose**: Create a new consent form that includes image data.
- **Parameters**: `req`, `res`
- **Response**: Success message or error.

### updateConsentFormWithImage

- **Purpose**: Update an existing consent form to include image data.
- **Parameters**: `req`, `res`
- **Response**: Success message or error.

### deleteConsentForm

- **Purpose**: Delete a consent form identified by its ID.
- **Parameters**: `req`, `res`
- **Response**: Success message or error.

### getConsentFormsByDateAndStatus

- **Purpose**: Retrieve forms based on creation dates and status.
- **Parameters**: `req`, `res`
- **Response**: Filtered list of consent forms or error.

## Helper Function

### parseMMDDYYYY

- **Purpose**: Parse date strings in the format MM/DD/YYYY.
- **Input**: `dateString`
- **Output**: A JavaScript Date object or `null` if invalid.

## Dependencies

- **Mongoose**: For MongoDB interactions.
- **SendGrid**: For sending notification emails.
- **Express**: As part of the Node.js web server framework.

This comprehensive controller manages all operations related to consent forms, ensuring seamless data handling and user notifications within the backend system.

# AuthController.js Documentation

Welcome to the documentation for `AuthController.js`. This file is responsible for handling all authentication-related operations within the "Wellbility State School Backend" system. Below you will find detailed explanations of each function, their purpose, and their use cases.

## Index

1. [Introduction](#introduction)
2. [Dependencies](#dependencies)
3. [Functions](#functions)
   - [Register](#register)
   - [Login](#login)
   - [Send Reset Email](#send-reset-email)
   - [Reset Password](#reset-password)
   - [Logout](#logout)

---

## Introduction

The `AuthController.js` file manages user registration, login, password reset, and logout functionalities. It interacts with the `User`, `School`, `District`, `Role`, and `Token` models to handle user data and authentication tokens.

## Dependencies

This file imports several Node.js modules and models to perform its operations:

- **Models**: `User`, `School`, `District`, `Role`, `Token`
- **Node.js Modules**: `jsonwebtoken`, `crypto`, `bcryptjs`
- **Utility Function**: `sendToParent` from `sendGrid` for sending emails

## Functions

### Register

```javascript
exports.register = async (req, res) => { ... }
```

**Purpose**: Registers a new user by hashing their password and storing their information in the database.

**Process**:

- Receives user details from `req.body`.
- Hashes the user's password using `bcrypt`.
- Creates a new `User` instance with the hashed password.
- Saves the user to the database.
- Responds with a success message or an error if registration fails.

**Use Case**: Used when a new user needs to be added to the system, such as a school staff or administrator.

### Login

```javascript
exports.login = async (req, res) => { ... }
```

**Purpose**: Authenticates a user and generates a JWT token for session management.

**Process**:

- Retrieves user credentials from `req.body`.
- Finds the user in the database and populates related data (`role`, `school`, `district`).
- Verifies the password using `bcrypt`.
- Generates a JWT token if the credentials are valid.
- Saves the token in the `Token` model with an expiration date.
- Responds with the token and user information.

**Use Case**: Used when a user attempts to log into the system.

### Send Reset Email

```javascript
exports.sendPasswordResetEmail = async (req, res) => { ... }
```

**Purpose**: Sends a password reset email to the user with a unique reset link.

**Process**:

- Retrieves the user's email from `req.body`.
- Searches for the user in the database.
- Generates a secure token using `crypto`.
- Saves the token and its expiration in the user's record.
- Constructs a reset URL and sends it to the user's email via `sendToParent`.

**Use Case**: Initiated when a user requests to reset their password.

### Reset Password

```javascript
exports.resetPassword = async (req, res) => { ... }
```

**Purpose**: Resets the user's password upon validation of the reset token.

**Process**:

- Verifies if the provided passwords match.
- Finds the user using the reset token and checks its validity.
- Hashes the new password with `bcrypt`.
- Updates the user's password and clears the reset token.
- Responds with a success message upon successful password reset.

**Use Case**: Used when a user follows the reset link to change their password.

### Logout

```javascript
exports.logout = async (req, res) => { ... }
```

**Purpose**: Logs out the user by removing their session token.

**Process**:

- Retrieves the token from the request headers or cookies.
- Deletes the token from the `Token` model.
- Clears the token from cookies if applicable.
- Responds with a success message.

**Use Case**: Triggered when a user chooses to log out of the system.

---

The `AuthController.js` file is a crucial component of the authentication process in the "Wellbility State School Backend," ensuring secure user management and access control.

# DistrictController.js Documentation

The `DistrictController.js` file within the **Wellbility State School Backend** project is responsible for handling HTTP requests related to the management of school districts. This controller provides essential CRUD (Create, Read, Update, Delete) operations for districts, allowing for efficient district data management.

## Table of Contents

- [Overview](#overview)
- [Functions](#functions)
  - [Get All Districts](#get-all-districts)
  - [Get District by ID](#get-district-by-id)
  - [Create District](#create-district)
  - [Update District](#update-district)
  - [Delete District](#delete-district)

---

## Overview

The `DistrictController.js` utilizes Mongoose models to interact with the MongoDB database. This controller provides endpoints to:

- Fetch all districts with pagination.
- Retrieve a specific district by its unique identifier.
- Create a new district.
- Update an existing district.
- Delete a district, ensuring no associated schools exist.

### Dependencies

- **Mongoose**: Used to interact with MongoDB.
- **District Model**: Represents the district schema in the database.
- **School Model**: Used to check dependencies before deletion.

## Functions

### Get All Districts

**Endpoint**: `GET /districts`

This function retrieves and returns all districts, allowing for pagination and sorting.

- **Parameters**:

  - `page` (query): The page number for pagination (default is `1`).
  - `limit` (query): The number of districts per page (default is `10`).

- **Response**:
  - `200 OK`: Returns a paginated list of districts with total document count and pages.

```javascript
exports.getAllDistricts = async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  try {
    const options = { page: page, limit: limit, sort: { createdAt: -1 } };
    const districts = await District.paginate({}, options);
    res
      .status(200)
      .json({
        data: districts.docs,
        totalDocs: districts.totalDocs,
        totalPages: districts.totalPages,
        currentPage: districts.page,
        status: 200,
        message: 'All districts retrieved',
      });
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};
```

### Get District by ID

**Endpoint**: `GET /districts/:id`

Fetches a single district using its ID.

- **Response**:
  - `200 OK`: Returns the district data.
  - `404 Not Found`: District with the specified ID does not exist.

```javascript
exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findById(req.params.id);
    if (!district) {
      return res
        .status(404)
        .json({ status: 404, message: 'District not found' });
    }
    res.json({ data: district, status: 200, message: 'District retrieved' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
```

### Create District

**Endpoint**: `POST /districts`

Creates a new district with the provided name.

- **Request Body**:

  - `name` (string): The name of the district.

- **Response**:
  - `201 Created`: District was successfully created.
  - `500 Internal Server Error`: An error occurred during the creation process.

```javascript
exports.createDistrict = async (req, res) => {
  try {
    const { name } = req.body;
    const newDistrict = new District({ name });
    await newDistrict.save();
    res
      .status(201)
      .json({
        data: newDistrict,
        status: 201,
        message: 'District created successfully',
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
```

### Update District

**Endpoint**: `PUT /districts/:id`

Updates an existing district's name by its ID.

- **Request Body**:

  - `name` (string): The new name for the district.

- **Response**:
  - `200 OK`: District was successfully updated.
  - `404 Not Found`: District with the specified ID does not exist.

```javascript
exports.updateDistrict = async (req, res) => {
  try {
    const { name } = req.body;
    const updatedDistrict = await District.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true, runValidators: true },
    );
    if (!updatedDistrict) {
      return res
        .status(404)
        .json({ status: 404, message: 'District not found' });
    }
    res.json({
      data: updatedDistrict,
      status: 200,
      message: 'District updated successfully',
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
```

### Delete District

**Endpoint**: `DELETE /districts/:id`

Deletes a district by its ID if no schools are associated with it.

- **Response**:
  - `200 OK`: District was successfully deleted.
  - `400 Bad Request`: Cannot delete a district that has associated schools.
  - `404 Not Found`: District with the specified ID does not exist.

```javascript
exports.deleteDistrict = async (req, res) => {
  try {
    const { id } = req.params;
    const schoolsInDistrict = await School.find({ district: id });
    if (schoolsInDistrict.length > 0) {
      return res
        .status(400)
        .json({
          status: 404,
          message: 'Cannot delete district with existing schools',
        });
    }
    const deletedDistrict = await District.findByIdAndDelete(id);
    if (!deletedDistrict) {
      return res
        .status(404)
        .json({ status: 404, message: 'District not found' });
    }
    res.json({ status: 200, message: 'District deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
```

---

This documentation provides an overview of the functionalities provided by the `DistrictController.js` file and serves as a guide for developers working on or integrating with the Wellbility State School Backend project.

# Documentation for `PublicLinkController.js`

This file is part of the backend system for the Wellbility State School, implemented using Node.js and Express. It defines a controller for managing public links associated with consent forms, facilitating secure access and interaction between parents and the school system.

## Overview

The `PublicLinkController` handles the creation and management of public links that are used to share consent forms with parents. This controller ensures that each link is unique and has an expiration time, enhancing security and data integrity.

## Functions

### 1. Generate a Random Link

```javascript
const generateLink = () => {
  return crypto.randomBytes(16).toString('hex');
};
```

- **Purpose**: Generates a unique, random string using the `crypto` module. This link is used as the identifier in the URL for accessing the consent form.
- **Usage**: Internally used within the controller to ensure each public link is unique.

### 2. Create a Public Link

```javascript
exports.createPublicLink = async (req, res) => { ... }
```

- **Purpose**: Handles the creation of a public link for a given parent and consent form. The link is valid for 24 hours.
- **Parameters**:
  - `req.body.parentId`: The ID of the parent for whom the link is being created.
  - `req.body.consentFormId`: The ID of the consent form to be shared.
- **Process**:
  1. **Validation**: Checks if the parent and consent form exist.
  2. **Link Reuse**: Searches for an existing non-expired link. If found, returns this link instead of creating a new one.
  3. **Link Creation**: If no valid link exists, a new link is generated with a 24-hour expiry.
  4. **Database Updates**: Saves the new link in the `PublicLink` collection and associates it with the parent.
  5. **Email Notification**: Sends an email to the parent with the newly created link.
- **Response**:
  - **Success**: Returns the public link object with a status of `201 Created`.
  - **Errors**: Handles errors by returning a `500 Internal Server Error` with an error message.

## Dependencies

- **Models**:
  - `PublicLink`: Manages the public link data.
  - `Parent`: Represents the parent entity, maintaining a list of associated public links.
  - `ConsentForm`: Represents the consent form entity linked with the public link.
- **Utilities**:
  - **Crypto**: Used for generating a random hash for the link.
  - **SendGrid Config**: Utilized for sending email notifications to parents.

## Code Snippet

Here is the complete function for creating a public link, which includes validation, creation, and email notification:

```javascript
exports.createPublicLink = async (req, res) => {
  try {
    const { parentId, consentFormId } = req.body;
    const parent = await Parent.findById(parentId);
    const consentForm = await ConsentForm.findById(consentFormId);

    if (!parent || !consentForm) {
      return res
        .status(404)
        .json({ message: 'Parent or ConsentForm not found' });
    }

    const existingLink = await PublicLink.findOne({
      parentId,
      consentFormId,
      expiryTime: { $gt: new Date() },
    });
    if (existingLink) {
      return res.status(200).json(existingLink);
    }

    const link = generateLink();
    const expiryTime = new Date();
    expiryTime.setHours(expiryTime.getHours() + 24);

    const publicLink = new PublicLink({
      parentId,
      consentFormId,
      link,
      expiryTime,
    });
    await publicLink.save();

    parent.links.push(publicLink._id);
    await parent.save();

    const templateId = 'd-886de40787e44f95ab43e7e5e4b54f33';
    const data = { publicLink: link };
    await sendToParent(parent.email, templateId, data);

    res.status(201).json(publicLink);
  } catch (error) {
    res.status(500).json({ message: 'Error creating public link', error });
  }
};
```

## Conclusion

The `PublicLinkController.js` efficiently manages the lifecycle of public links, ensuring secure and temporary access to sensitive information like consent forms. The integration with email services ensures that parents are promptly notified, enhancing the communication process within the school system.

# UserController.js Documentation

The `UserController.js` file contains functions for managing user-related operations within the application. This controller facilitates interactions with the `User` model and provides functionalities for user management, including creation, retrieval, updating, and deletion operations.

## Table of Contents

- [Get All Roles](#get-all-roles)
- [Get All Users](#get-all-users)
- [Get User by ID](#get-user-by-id)
- [Create User](#create-user)
- [Update User](#update-user)
- [Delete User](#delete-user)
- [Reset Password](#reset-password)
- [Role Validation](#role-validation)
- [Dependencies](#dependencies)

---

## Get All Roles

### Function

```javascript
exports.getAllRoles = async (req, res) => {
  /* ... */
};
```

### Description

Retrieves all available user roles, depending on the role of the requesting user:

- **Admin**: Can retrieve all roles.
- **RPHN (Regional Public Health Nurse)**: Can retrieve specific roles such as "Vaccinator" and "Nurse".
- Other roles: Restricted access, returns a 403 error.

### Usage

- **Method**: `GET`
- **Route**: `/roles/:role`
- **Response**: JSON object containing roles data or an error message.

---

## Get All Users

### Function

```javascript
exports.getAllUsers = async (req, res) => {
  /* ... */
};
```

### Description

Retrieves all users, with pagination and role-based access control:

- **Admin**: Access to all users.
- **RPHN**: Access to specific roles such as "Nurse" and "Vaccinator".
- Other roles: Restricted access, returns a 403 error.

### Usage

- **Method**: `GET`
- **Route**: `/users/:role`
- **Query Parameters**: `page`, `limit`
- **Response**: JSON object with paginated users data or an error message.

---

## Get User by ID

### Function

```javascript
exports.getUserById = async (req, res) => {
  /* ... */
};
```

### Description

Fetches a single user by their ID, including related role, school, and district information.

### Usage

- **Method**: `GET`
- **Route**: `/users/:id`
- **Response**: JSON object containing user data or an error message.

---

## Create User

### Function

```javascript
exports.createUser = async (req, res) => {
  /* ... */
};
```

### Description

Creates a new user in the system with a randomly generated default password. Sends an email to the user with a password reset link.

### Usage

- **Method**: `POST`
- **Route**: `/users`
- **Request Body**: Must include `username`, `email`, `role`, `school`, `district`.
- **Response**: JSON object confirming user creation and email dispatch or an error message.

---

## Update User

### Function

```javascript
exports.updateUser = async (req, res) => {
  /* ... */
};
```

### Description

Updates an existing user's information. Allows for role, school, and district updates. Password updates are hashed before saving.

### Usage

- **Method**: `PUT`
- **Route**: `/users/:id`
- **Request Body**: Fields to update.
- **Response**: JSON object with updated user data or an error message.

---

## Delete User

### Function

```javascript
exports.deleteUser = async (req, res) => {
  /* ... */
};
```

### Description

Performs a soft-delete by setting the `isDeleted` flag to true. Also supports permanent deletion if specified.

### Usage

- **Method**: `DELETE`
- **Route**: `/users/:id`
- **Response**: JSON object confirming deletion or an error message.

---

## Reset Password

### Function

```javascript
exports.resetPassword = async (req, res) => {
  /* ... */
};
```

### Description

Resets a user's password to a new default value and sends a password reset email.

### Usage

- **Method**: `POST`
- **Route**: `/users/:id/reset-password`
- **Response**: JSON object confirming password reset or an error message.

---

## Role Validation

### Function

```javascript
async function checkRole(role, school, district, isDeleted, res) {
  /* ... */
}
```

### Description

Validates role-specific requirements, ensuring integrity in role assignments and associations with schools and districts.

---

## Dependencies

- **Models**: `User`, `Role`, `ConsentForm`
- **Utilities**: `bcryptjs`, `crypto`, `sendGrid`
- **Custom Functions**: `sendToParent` for email dispatch

---

This documentation provides an overview of the `UserController.js` functionality, assisting developers and system maintainers in understanding and utilizing the user management features effectively.

# `SchoolController.js` Documentation

This file is part of the backend system for managing school-related data. It provides various endpoints for managing schools in a MongoDB database using Mongoose. The functionalities include retrieving, creating, updating, and deleting school records. The controller interacts with the `School` model, and includes querying based on district associations and pagination support.

## Index

- [Endpoints](#endpoints)
  - [Get All Schools by District(s)](#get-all-schools-by-districts)
  - [Get All Schools](#get-all-schools)
  - [Get School by ID](#get-school-by-id)
  - [Create School](#create-school)
  - [Update School](#update-school)
  - [Delete School](#delete-school)

## Endpoints

### Get All Schools by District(s)

**Endpoint:** `GET /schools/districts`

Retrieves all schools associated with one or more district IDs. This endpoint allows filtering schools based on the district they belong to.

- **Query Parameters:**

  - `district` (required): Comma-separated list of district IDs.

- **Response:**
  - Status 200: List of schools in the specified district(s).
  - Status 400: If no district ID is provided.
  - Status 500: On server error.

```javascript
exports.getAllDistrictSchools = async (req, res) => {
  /*...*/
};
```

### Get All Schools

**Endpoint:** `GET /schools`

Fetches all schools, with optional pagination. If pagination parameters are not provided, all schools are retrieved without pagination.

- **Query Parameters:**

  - `page` (optional): Page number for pagination.
  - `limit` (optional): Number of records per page.

- **Response:**
  - Status 200: List of all schools, with or without pagination.
  - Status 500: On server error.

```javascript
exports.getAllSchools = async (req, res) => {
  /*...*/
};
```

### Get School by ID

**Endpoint:** `GET /schools/:id`

Retrieves a single school by its unique ID.

- **Route Parameters:**

  - `id` (required): The unique identifier of the school.

- **Response:**
  - Status 200: The school data.
  - Status 404: If the school is not found.
  - Status 500: On server error.

```javascript
exports.getSchoolById = async (req, res) => {
  /*...*/
};
```

### Create School

**Endpoint:** `POST /schools`

Creates a new school record.

- **Request Body:**

  - `name` (required): The name of the school.
  - `district` (optional): The ID of the district the school belongs to.

- **Response:**
  - Status 201: Successfully created school.
  - Status 500: On server error.

```javascript
exports.createSchool = async (req, res) => {
  /*...*/
};
```

### Update School

**Endpoint:** `PUT /schools/:id`

Updates an existing school record by its ID.

- **Route Parameters:**

  - `id` (required): The unique identifier of the school.

- **Request Body:**

  - `name` (optional): Updated name for the school.
  - `district` (optional): Updated district ID.

- **Response:**
  - Status 200: Successfully updated school.
  - Status 404: If the school is not found.
  - Status 500: On server error.

```javascript
exports.updateSchool = async (req, res) => {
  /*...*/
};
```

### Delete School

**Endpoint:** `DELETE /schools/:id`

Deletes a school record by its ID.

- **Route Parameters:**

  - `id` (required): The unique identifier of the school.

- **Response:**
  - Status 200: Successfully deleted school.
  - Status 404: If the school is not found.
  - Status 500: On server error.

```javascript
exports.deleteSchool = async (req, res) => {
  /*...*/
};
```

## Conclusion

The `SchoolController.js` provides essential CRUD operations to manage school records efficiently, with capabilities for district-based filtering and pagination. It ensures that schools can be managed within the context of their associated districts and supports administrative functions related to school data management.

# Documentation for `authMiddleware.js`

The `authMiddleware.js` is a middleware module designed to handle authentication in an Express.js application using JSON Web Tokens (JWT). This middleware ensures that only authenticated users can access certain routes by verifying the JWT provided in the request headers.

## 📝 File Overview

- **Filename**: authMiddleware.js
- **Purpose**: To authenticate and authorize users by verifying JWT tokens in incoming requests.

## 📑 Key Features

- **Token Extraction**: Extracts the token from the request `Authorization` header.
- **Token Verification**: Verifies the token using `jsonwebtoken` to ensure it is valid and not expired.
- **Database Check**: Confirms the token exists in the database and has not expired.
- **User Authentication**: Attaches the decoded user information to the request object for downstream middleware and route handlers.
- **Error Handling**: Provides meaningful responses in case of missing, invalid, or expired tokens.

## 📜 Code Explanation

Here is a breakdown of the code and its functionality:

```javascript
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

const verifyToken = async (req, res, next) => {
  try {
    // Get the token from the request headers
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
      return res
        .status(401)
        .json({ status: 401, message: 'Access Denied. No token provided.' });
    }

    // Extract the token from the Bearer scheme
    const token = authorizationHeader.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the token exists in the database and is still valid
    const tokenDocument = await Token.findOne({ token: token });
    if (!tokenDocument || new Date() > tokenDocument.expires) {
      return res
        .status(401)
        .json({ status: 401, message: 'Invalid token or token has expired.' });
    }

    // Attach the decoded user information to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle any errors that occur during token verification
    console.error('Token verification error:', error);
    return res.status(400).json({ status: 400, message: 'Invalid token.' });
  }
};

module.exports = verifyToken;
```

### 🛠️ Functionality

1. **Token Extraction**:

   - The middleware checks for an `Authorization` header in the incoming request. If not found, it responds with a `401 Access Denied` message.

2. **Token Splitting**:

   - It splits the header value to extract the token, assuming it's in the format `Bearer <token>`.

3. **Verification**:

   - The token is verified using `jsonwebtoken` and a secret key (`process.env.JWT_SECRET`).

4. **Database Validation**:

   - It checks if the token exists in the database (using a Mongoose model `Token`) and ensures it's not expired.

5. **Request Augmentation**:

   - If the token is valid, it attaches the decoded token data to the `req.user`, allowing subsequent middleware and routes to access user information.

6. **Error Handling**:
   - If any step fails (missing token, invalid token, expired token), appropriate HTTP status codes and messages are returned.

## 🚀 Usage

- **Importing**: This middleware should be imported and used in your routes where authentication is necessary.

```javascript
const verifyToken = require('./middlewares/authMiddleware');

// Use it as a middleware in your routes
app.get('/protected-route', verifyToken, (req, res) => {
  res.send('This is a protected route');
});
```

## 🔐 Security

- **JWT Secret**: Ensure that you set a strong and secure JWT secret in your environment variables (`process.env.JWT_SECRET`).
- **Token Expiry**: Regularly check and enforce token expiry to enhance security.

## ⚠️ Error Handling

- **401 Unauthorized**: Returned if no token is provided or the token is invalid or expired.
- **400 Bad Request**: Returned if there is a general error in token verification.

This middleware is crucial for securing routes in your application, ensuring that only authenticated users gain access to protected resources.

# `consentFormValidatorMiddleware.js` Documentation 📄

This file is part of the backend middleware for validating consent form data in the **Wellbility State School Backend** system. The middleware ensures that incoming requests to update consent forms contain all necessary and correctly formatted information before processing further.

---

## Overview

The `consentFormValidatorMiddleware.js` file utilizes the `express-validator` library to enforce validation rules on consent form data. This middleware is crucial for maintaining data integrity and ensuring that the application only processes valid data.

## Key Features

- **Validation**: Checks that all required fields in a consent form are provided and correctly formatted.
- **Error Handling**: Captures validation errors and sends them back in the response for client-side correction before proceeding further.

## Middleware Functions

### `validateConsentFormUpdate`

This middleware function applies a series of validation checks on the request body. It ensures that all necessary fields are present and that specific fields meet certain criteria, such as being a valid email format.

#### Validation Rules

| Field                          | Rule                         | Message if Invalid                                          |
| ------------------------------ | ---------------------------- | ----------------------------------------------------------- |
| `dateSigned`                   | Must not be empty            | "Date signed is required"                                   |
| `schoolId`                     | Must not be empty            | "School ID is required"                                     |
| `firstName`                    | Must not be empty            | "First name is required"                                    |
| `middleInitial`                | Not required                 | -                                                           |
| `lastName`                     | Must not be empty            | "Last name is required"                                     |
| `dateOfBirth`                  | Must not be empty            | "Date of birth is required"                                 |
| `age`                          | Must not be empty            | "Age is required"                                           |
| `physicalAddress`              | Must not be empty            | "Physical address is required"                              |
| `townCity`                     | Must not be empty            | "Town/city is required"                                     |
| `state`                        | Must not be empty            | "State is required"                                         |
| `zip`                          | Must not be empty            | "ZIP code is required"                                      |
| `email`                        | Must be a valid email format | "Email must be a valid email"                               |
| `cellPhoneNumber`              | Must not be empty            | "Cell phone number is required"                             |
| `gender`                       | Must not be empty            | "Gender is required"                                        |
| `race`                         | Must not be empty            | "Race is required"                                          |
| `ethnicity`                    | Must not be empty            | "Ethnicity is required"                                     |
| `insurance`                    | Must not be empty            | "Insurance is required"                                     |
| `allergyEggs`                  | Must not be empty            | "Allergy to eggs status is required"                        |
| `allergyInfluenzaVaccine`      | Must not be empty            | "Allergy to influenza vaccine status is required"           |
| `historyGuillainBarreSyndrome` | Must not be empty            | "History of Guillain-Barre Syndrome is required"            |
| `feltDizzyOrFaint`             | Must not be empty            | "Felt dizzy or faint status is required"                    |
| `reviewedVaccineInfoStatement` | Must not be empty            | "Reviewed vaccine information statement status is required" |
| `signerName`                   | Must not be empty            | "Signer name is required"                                   |
| `signerDaytimePhoneNumber`     | Must not be empty            | "Signer daytime phone number is required"                   |

### `handleValidationErrors`

This middleware function is designed to catch and handle errors resulting from the validation checks applied by `validateConsentFormUpdate`.

- **Functionality**: It checks for any validation errors recorded during the request processing. If errors are found, it sends a `400 Bad Request` response with a detailed list of errors, allowing the client to correct the input data.

## Usage

To use this middleware in your Express application, simply import the `validateConsentFormUpdate` and `handleValidationErrors` functions and apply them to routes that require consent form data validation.

```javascript
const {
  validateConsentFormUpdate,
  handleValidationErrors,
} = require('./middlewares/consentFormValidatorMiddleware');

app.post(
  '/consent-form',
  validateConsentFormUpdate,
  handleValidationErrors,
  (req, res) => {
    // Handle the request after successful validation
  },
);
```

---

This middleware is essential for maintaining high data quality and preventing invalid data from entering the system, thereby ensuring that all consent forms are complete and correctly filled out.

# Documentation for `auth.js` 🛂

This file defines the routes related to authentication operations in the "Wellbility State School Backend" system. Using Express.js, it sets up endpoints for handling user registration, login, logout, and password reset functionalities. Below is a detailed breakdown of each route and its purpose.

### Index

- [Dependencies](#dependencies)
- [Routes](#routes)
  - [POST /register](#post-register)
  - [POST /login](#post-login)
  - [POST /logout](#post-logout)
  - [POST /password-reset-request](#post-password-reset-request)
  - [POST /password-reset](#post-password-reset)
- [Export](#export)

## Dependencies

The file utilizes the following dependencies:

- **express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **AuthController**: A controller module that handles the business logic for authentication-related actions.

```javascript
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
```

## Routes

### POST /register

- **Endpoint**: `/register`
- **Description**: This route handles the registration of a new user. It expects user details such as username, email, password, userType, and school (if applicable) in the request body.
- **Controller Method**: `AuthController.register`

### POST /login

- **Endpoint**: `/login`
- **Description**: This route manages user login. It requires the user's email and password in the request body. Upon successful authentication, a JWT token is issued.
- **Controller Method**: `AuthController.login`

### POST /logout

- **Endpoint**: `/logout`
- **Description**: This route handles user logout. It clears the user's session token to log them out.
- **Controller Method**: `AuthController.logout`

### POST /password-reset-request

- **Endpoint**: `/password-reset-request`
- **Description**: This route initiates the password reset process. It takes the user's email and sends a password reset link to this email address.
- **Controller Method**: `AuthController.sendPasswordResetEmail`

### POST /password-reset

- **Endpoint**: `/password-reset`
- **Description**: This route completes the password reset process. It expects a token, new password, and password confirmation in the request body to reset the user's password.
- **Controller Method**: `AuthController.resetPassword`

## Export

The file exports the Express router, which includes all the defined routes.

```javascript
module.exports = router;
```

> **Note**: The routes make calls to the `AuthController`, which contains the actual logic for each authentication operation. Ensure that the methods within this controller handle the respective functionalities correctly and securely.

# Documentation for `index.js` 🚀

This file serves as the central routing hub for the "Wellbility State School Backend" application. It utilizes Express.js to manage various endpoints related to users, schools, districts, public links, and consent forms. The routes are protected by middleware to ensure that only authorized requests are processed.

## Table of Contents

1. [Overview](#overview)
2. [Dependencies](#dependencies)
3. [Middleware](#middleware)
4. [Routes](#routes)
   - [Public Links](#public-links)
   - [Users](#users)
   - [Schools](#schools)
   - [Districts](#districts)
   - [Consent Forms](#consent-forms)
5. [Export](#export)

## Overview

The `index.js` file sets up routing for the application, directing HTTP requests to the appropriate controller functions. It applies authentication middleware to secure routes, allowing only authenticated users to access certain endpoints.

## Dependencies

```javascript
const express = require('express');
const router = express.Router();
const SchoolController = require('../controllers/SchoolController');
const DistrictController = require('../controllers/DistrictController');
const UserController = require('../controllers/UserController');
const { createPublicLink } = require('../controllers/PublicLinkController');
const ConsentFormController = require('../controllers/ConsentFormController');
const {
  validateConsentFormUpdate,
  handleValidationErrors,
} = require('../middlewares/consentFormValidatorMiddleware');
const verifyToken = require('../middlewares/authMiddleware');
```

- **Express**: Used to create a router for handling HTTP requests.
- **Controllers**: Contains the logic to handle requests for specific resources.
- **Middlewares**: Used for request validation and authentication.

## Middleware

### Authentication Middleware

```javascript
router.use((req, res, next) => {
  const excludedPaths = [
    '/create-consent-form',
    '/consent-forms-download',
    '/create-form-with-image',
    '/get-consent-form',
    '/update-consent-form',
    '/all-schools',
  ];
  const pathMatches = excludedPaths.some((path) => req.path.includes(path));
  if (pathMatches) {
    return next();
  } else {
    return verifyToken(req, res, next);
  }
});
```

- **Functionality**: Applies the `verifyToken` middleware to secure routes.
- **Excluded Paths**: Certain paths are excluded from the token verification, allowing public access.

## Routes

### Public Links

- **POST `/public-links`**: Create a new public link.
  - Controller: `createPublicLink`

### Users

- **GET `/users/:role`**: Retrieve all users based on role.
- **GET `/user-roles/:role`**: Retrieve all roles based on user role.
- **GET `/get-user/:id`**: Retrieve a single user by ID.
- **POST `/create-user`**: Create a new user.
- **PUT `/update-user/:id`**: Update a user by ID.
- **DELETE `/delete-user/:id`**: Soft delete a user by ID.
- **POST `/user/reset-password/:id`**: Reset a user's password.

### Schools

- **GET `/all-schools`**: Retrieve all schools.
- **GET `/district-schools`**: Retrieve schools based on district ID(s).
- **GET `/schools/:id`**: Retrieve a single school by ID.
- **POST `/schools`**: Create a new school.
- **PUT `/schools/:id`**: Update a school by ID.
- **DELETE `/schools/:id`**: Delete a school by ID.

### Districts

- **GET `/districts`**: Retrieve all districts.
- **GET `/districts/:id`**: Retrieve a single district by ID.
- **POST `/districts`**: Create a new district.
- **PUT `/districts/:id`**: Update a district by ID.
- **DELETE `/districts/:id`**: Delete a district by ID.

### Consent Forms

- **POST `/create-consent-form`**: Create a new consent form.
- **GET `/get-consent-forms`**: Get all consent forms.
- **GET `/consent-forms/entity`**: Get consent forms by school or district.
- **POST `/create-form-with-image`**: Create a consent form with an image.
- **GET `/get-consent-form/:id`**: Get a consent form by ID.
- **PUT `/update-consent-form/:id`**: Update a consent form by ID.
- **PUT `/update-admin-consent-form/:id`**: Admin update a consent form.
- **PUT `/update-image-consent-form/:id`**: Update consent form with image.
- **DELETE `/delete-consent-form/:id`**: Delete a consent form by ID.
- **POST `/get-consent-forms-reports`**: Get consent forms for reports.

## Export

The router is exported for use in the main application file (`server.js`), allowing the routes to be integrated into the server.

```javascript
module.exports = router;
```

This documentation provides a comprehensive overview of the routing setup within the `index.js` file of the "Wellbility State School Backend" project. Each route is mapped to a specific controller function, ensuring that requests are processed correctly and securely.

# `server.js` Documentation 📄🚀

The `server.js` file is the entry point for the "Wellbility State School Backend" application. It sets up the Express server, connects to a MongoDB database using Mongoose, configures middleware, and defines the basic routes for the application. Below is a detailed breakdown of its components and functionalities.

## Table of Contents

1. [Overview](#overview)
2. [Environment Configuration](#environment-configuration)
3. [Middleware Setup](#middleware-setup)
4. [Database Connection](#database-connection)
5. [Routes Configuration](#routes-configuration)
6. [Starting the Server](#starting-the-server)

## Overview

The `server.js` file initializes an Express application and configures it to connect to a MongoDB database. It also sets up middleware for handling JSON requests, CORS for cross-origin resource sharing, and includes routing for various endpoints.

## Environment Configuration

```javascript
const dotenv = require('dotenv');
dotenv.config();
```

- **dotenv**: Used to load environment variables from a `.env` file into `process.env`. This allows sensitive information, such as database URLs and server ports, to be kept out of the source code.

## Middleware Setup

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
```

- **Body Parser**: Handles JSON and URL-encoded data with a size limit of 50mb, which is useful for handling large payloads.
- **CORS**: Configured to allow requests from any origin, which is important for developing applications that might be accessed from different domains.

## Database Connection

```javascript
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DATABASE_URL, {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
  })
  .then(() => {
    console.log('Connected to MongoDB using Mongoose!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
```

- **Mongoose**: Connects to MongoDB using a URL provided in the environment variables. The connection is configured to use the latest server API version for better compatibility and error handling.

## Routes Configuration

```javascript
const authRoutes = require('./routes/auth');
const indexRouter = require('./routes/index');

app.use('/api', indexRouter);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello New World!');
});
```

- **Auth Routes**: Handles authentication-related endpoints like login and registration.
- **Index Router**: Includes various application routes, organized for easier management.
- **Root Route**: A simple endpoint that returns a greeting message to verify that the server is running.

## Starting the Server

```javascript
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
```

- **Port Configuration**: The server listens on a port specified in the environment variables, allowing it to be easily changed without modifying the code.

This setup provides a robust foundation for running the backend server, handling HTTP requests, and managing data interactions with a MongoDB database. 🚀🌐
