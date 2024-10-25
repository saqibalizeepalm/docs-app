# 📜 Documentation for `app.module.ts`

## 📋 Table of Contents

1. [Overview](#overview)
2. [Imports](#imports)
3. [NgModule Decorator](#ngmodule-decorator)
   - [Declarations](#declarations)
   - [Imports](#imports-section)
   - [Providers](#providers)
   - [Bootstrap](#bootstrap)
4. [Conclusion](#conclusion)

## 🌟 Overview

The `app.module.ts` file is a core part of an Angular application. It defines the root module, `AppModule`, which ties together various components, services, and other modules necessary for the application. This module serves as the entry point for the Angular application when it is bootstrapped.

## 📦 Imports

The file begins with a series of import statements that bring in necessary Angular libraries, modules, and components. Here's a breakdown:

| Import                  | Description                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------------|
| `NgModule`              | A decorator that identifies the class as an Angular module and provides metadata.            |
| `BrowserModule`         | Required for any Angular application that runs in a web browser.                             |
| `BrowserAnimationsModule` | Supports animations in the Angular application.                                           |
| `AppComponent`          | The root component of the application.                                                      |
| `HttpClientModule`      | Enables communication with backend services using HTTP.                                      |
| `routing`               | Application routing module to manage navigation.                                             |
| `MaterialModule`        | A custom module that imports Angular Material components.                                    |
| `AuthModule`, `CoreModule`, `SharedModule`, `FeatureModule` | Custom modules designed for specific functionalities.  |

## 🎨 NgModule Decorator

The `@NgModule` decorator is used to define the metadata for the `AppModule` class. Here's a breakdown of its properties:

### 🏷️ Declarations

- **`AppComponent`**: This is the main component of the application. Declaring it here allows Angular to know about it and render it properly.

### 📦 Imports Section

The `imports` array includes all the modules that the application depends on. This includes both Angular built-in modules and custom application modules:

- **`BrowserModule`**: Provides services that are essential to launch and run a browser app.
- **`BrowserAnimationsModule`**: Enables the use of animations in the application.
- **`SharedModule`**: Contains shared components, directives, and pipes that can be used across the application.
- **`routing`**: Handles navigation and URL manipulation.
- **`AuthModule`**: Manages authentication-related features.
- **`FeatureModule`**: A module that encapsulates specific features of the application.
- **`CoreModule`**: Contains core services that are used globally across the application.
- **`HttpClientModule`**: Facilitates HTTP communication.
- **`MaterialModule`**: Provides Angular Material components for UI design.

### 🤝 Providers

- **`providers: []`**: This array is used to define the services that the module contributes to the global collection of services. It's currently empty, indicating no additional providers are declared at this level.

### 🚀 Bootstrap

- **`bootstrap: [AppComponent]`**: This array defines the component(s) that should be bootstrapped when the module is bootstrapped. Here, `AppComponent` is the root component that will be bootstrapped.

## 🏁 Conclusion

The `app.module.ts` file is the backbone of the Angular application. It effectively orchestrates the different modules and components to create a cohesive and functional whole. By importing necessary modules and declaring the root component, it serves as the starting point for the application. Proper understanding and structuring of this file are crucial for building scalable and maintainable Angular applications.

# Documentation for `app.module.ts` and `app.component.html`

## Overview

This documentation provides a detailed understanding of two critical files in an Angular application – `app.module.ts` and `app.component.html`. These files play a significant role in setting up and structuring the application.

---

## Table of Contents

1. **app.module.ts**
   - Overview
   - Code Breakdown
   - Purpose and Functionality
   - Key Components and Modules

2. **app.component.html**
   - Overview
   - Code Explanation
   - Role within the Application

---

## app.module.ts

### Overview

The `app.module.ts` is the root module of an Angular application, responsible for bootstrapping the application. It imports essential Angular modules and third-party libraries, integrates various features, and declares components that are part of the application.

### Code Breakdown

```typescript
/************************************************************************************
 * External libraries
 *************************************************************************************/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/************************************************************************************
 * App Component
 *************************************************************************************/
import { AppComponent } from './app.component';

/************************************************************************************
 * App Modules
 *************************************************************************************/
import { AuthModule } from './auth-module/auth.module';
import { CoreModule } from './core-module/core.module';
import { SharedModule } from './shared-module/shared.module';
import { FeatureModule } from './feature-module/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './routes/app.routing';
import { MaterialModule } from './material.module';

/************************************************************************************
 * App Module
 *************************************************************************************/
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    routing,
    AuthModule,
    FeatureModule,
    CoreModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Purpose and Functionality

- **NgModule Decorator**: This decorator marks the class as an Angular module and provides configuration metadata such as `declarations`, `imports`, `providers`, and `bootstrap`.
  
- **Declarations**: Declares the components, directives, and pipes that belong to this module. Here, it declares `AppComponent`.

- **Imports**: Lists the external modules that the application needs. Key modules include:
  - `BrowserModule`: Provides services essential for running and rendering a browser application.
  - `BrowserAnimationsModule`: Supports animations within the app.
  - `HttpClientModule`: Facilitates HTTP communication.
  - Custom modules like `AuthModule`, `CoreModule`, `FeatureModule`, `SharedModule`.

- **Bootstrap**: Specifies the root component that Angular should bootstrap when it starts the application – in this case, `AppComponent`.

### Key Components and Modules

- **AppComponent**: The main component that serves as the root of the application.
- **AuthModule, CoreModule, FeatureModule, SharedModule**: Custom modules encapsulating different features and services.
- **MaterialModule**: A module bundling Angular Material components to enhance UI/UX.

---

## app.component.html

### Overview

The `app.component.html` file is a simple yet crucial file in an Angular application. It serves as the template for the root component, `AppComponent`.

### Code Explanation

```html
<router-outlet></router-outlet>
```

### Role within the Application

- **RouterOutlet**: Acts as a placeholder that Angular dynamically fills based on the current router state. It enables navigation between different views of the application without reloading the entire page.

- **Dynamic View Rendering**: The `<router-outlet>` directive is pivotal for rendering routed views. As users navigate through the application, Angular loads the relevant component templates within this outlet.

---

Each of these files plays a critical role in the application. The `app.module.ts` sets up the module and imports the necessary functionalities, while `app.component.html` provides the entry point for rendering routed views, facilitating smooth navigation across the app.

# Documentation for `user.model.ts` 📄

In this document, we will explore the `user.model.ts` file, which is an essential part of the application that defines the **User Model**. The User Model is crucial for managing user-related data throughout the application.

## Table of Contents 📚
- [Overview](#overview)
- [User Model Class](#user-model-class)
- [Properties](#properties)
- [Constructor](#constructor)

## Overview

The `user.model.ts` file contains the definition of a **User** class. This class models the user data structure and includes properties that represent the user's profile and settings. This User Model is used across the application to handle user-related operations such as authentication, profile management, etc.

## User Model Class

```typescript
export class User {
  // Properties defined here...
  constructor(data: Partial<User> = {}) {
    // Constructor implementation...
  }
}
```

The **User** class is exported so it can be imported and utilized in other parts of the application. It is designed to be flexible by allowing partial user data to be passed in during instantiation.

## Properties

The `User` class defines several properties that store user information:

| Property Name                  | Type         | Description                                      |
|-------------------------------|--------------|--------------------------------------------------|
| `_id?`                        | `string`     | Optional ID of the user.                         |
| `firstName`                   | `string`     | User's first name.                               |
| `lastName`                    | `string`     | User's last name.                                |
| `company`                     | `string`     | Name of the user's company.                      |
| `email`                       | `string`     | User's email address.                            |
| `emailVerified`               | `boolean`    | Flag indicating if the email is verified.        |
| `profileImage`                | `string`     | URL or path to the user's profile image.         |
| `phone?`                      | `string`     | Optional user's phone number.                    |
| `phoneVerified?`              | `string`     | Optional flag for phone verification.            |
| `qrCodeImage?`                | `string`     | Optional QR code image related to the user.      |
| `meta`                        | `string`     | Metadata associated with the user.               |
| `status`                      | `string`     | Current status of the user.                      |
| `latestSelfAssessment?`       | `string`     | Optional data of the user's latest assessment.   |
| `latestTemperatureData?`      | `string`     | Optional latest temperature data.                |
| `organization?`               | `string`     | Optional organization information.               |
| `address`                     | `object`     | Address details containing street, state, etc.   |
| `subscribeToUpdates`          | `boolean`    | User's subscription preference for updates.      |
| `isAdmin`                     | `boolean`    | Flag indicating if the user is an admin.         |
| `isWellbilityPass`            | `boolean`    | Flag for Wellbility Pass status.                 |
| `active`                      | `boolean`    | Active status of the user.                       |
| `dateOfBirth?`                | `Date`       | Optional date of birth of the user.              |
| `labAdmin`                    | `boolean`    | Flag indicating if the user is a lab admin.      |
| `twoStepVerificationEnabled`  | `boolean`    | Two-step verification status for the user.       |
| `noPassReason?`               | `string`     | Optional reason for no pass status.              |

### Address Sub-Object

The `address` property is an object with the following fields:

- **`street1`**: The primary street address.
- **`street2`**: Secondary street address (optional).
- **`state`**: State of residence.
- **`city`**: City of residence.
- **`country`**: Country of residence.
- **`zipCode`**: Postal code.

## Constructor

The constructor of the **User** class allows for creating a user object with default values or with a partial set of user data:

```typescript
constructor(data: Partial<User> = {}) {
  Object.assign(this, data);
  this.meta = this.meta || '';
}
```

- **Parameters**: Accepts a partial user data object which enables initializing only specific properties.
- **Functionality**: Uses `Object.assign` to merge the provided data with the default class properties, ensuring that the `meta` property is initialized with an empty string if not provided.

---

This file is integral in maintaining a consistent user data structure across the application, facilitating efficient user data management and manipulation.

# Documentation for `auth.module.ts`

## Overview

The `auth.module.ts` file is responsible for defining the **Authentication Module** in an Angular application. This module encapsulates all authentication-related components, making it easier to manage and scale the authentication features of the application. 

## Code Breakdown

Here's a detailed explanation of the code in the `auth.module.ts` file:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

@NgModule({
  declarations: [
    LoginComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    PasswordResetComponent
  ],
})
export class AuthModule {}
```

### Imports

- **`NgModule`**: A decorator provided by Angular that is used to define a module. It helps in organizing the application into cohesive blocks of functionality.
- **`CommonModule`**: This module provides common directives such as `ngIf` and `ngFor`, which are commonly used in Angular templates.
- **`RouterModule`**: Facilitates routing in Angular applications. It's essential for navigation between different components or views.
- **`SharedModule`**: A custom module that contains shared components, directives, and pipes used across the application.
- **`LoginComponent`**: Represents the login feature, providing a user interface for user authentication.
- **`PasswordResetComponent`**: Provides functionality and UI for password reset.

### NgModule Decorator

The `@NgModule` decorator marks the class as an Angular module and provides configuration metadata.

- **`declarations`**: Lists the components that are part of this module. Here, `LoginComponent` and `PasswordResetComponent` are declared, meaning they belong to this module.
  
- **`imports`**: Specifies the modules that this module depends on. `CommonModule`, `RouterModule`, and `SharedModule` are imported, indicating that they are used within this module.

- **`exports`**: Lists the components that should be accessible from outside this module. By exporting `LoginComponent` and `PasswordResetComponent`, these components can be used in other modules that import `AuthModule`.

### Class Definition

- **`AuthModule`**: This is the main class defined in this file, and it encapsulates the authentication-related components and services. 

## Conclusion

The `auth.module.ts` file plays a crucial role in organizing authentication-related functionalities within an Angular application. By encapsulating the `LoginComponent` and `PasswordResetComponent` within this module, the application maintains a clean and modular architecture. This approach improves maintainability and scalability, making it easier to manage authentication features as the application grows. 

Feel free to reach out if you have any questions or need further clarification! 😊

# Documentation: `user.modulel.ts`

This file defines the **User Model**, which represents the structure and default values for user-related data in the application. It is a TypeScript class that is used to encapsulate user-specific information, providing a blueprint for creating user objects.

## Index

- [Overview](#overview)
- [User Class Definition](#user-class-definition)
- [Attributes](#attributes)
- [Constructor](#constructor)
- [Usage](#usage)

## Overview

The `User` model is a class that defines the structure of user data within the application. It contains various properties that capture personal, contact, and status information about a user. This model is essential for managing user-related data effectively across the application.

## User Class Definition

```typescript
export class User {
  _id?: string;
  firstName = '';
  lastName = '';
  company = '';
  email = '';
  emailVerified = false;
  profileImage = '';
  phone?: string;
  phoneVerified?: boolean;
  qrCodeImage?: string;
  meta: any;
  status: string | undefined;
  latestSelfAssessment?: any;
  latestTemperatureData?: any;
  organization?: any;
  address: {
    street1: string;
    street2: string;
    state: string;
    city: string;
    country: string;
    zipCode: string;
  } = {
    street1: '',
    street2: '',
    state: '',
    city: '',
    country: '',
    zipCode: '',
  };
  subscribeToUpdates = true;
  isAdmin = false;
  isWellbilityPass = false;
  active = false;
  dateOfBirth: Date | undefined;
  labAdmin = false;
  twoStepVerificationEnabled = false;
  noPassReason?: string;
  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
    this.meta = this.meta || {};
    this.address = data.address ? { ...this.address, ...data.address } : this.address;
  }
}
```

## Attributes

Here's a breakdown of the attributes within the `User` class:

| **Property Name**           | **Type**      | **Description**                                                                                                     |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------|
| `_id`                       | `string`      | Optional identifier for the user.                                                                                   |
| `firstName`                 | `string`      | User's first name, defaulting to an empty string.                                                                   |
| `lastName`                  | `string`      | User's last name, defaulting to an empty string.                                                                    |
| `company`                   | `string`      | Name of the company associated with the user.                                                                       |
| `email`                     | `string`      | User's email address.                                                                                               |
| `emailVerified`             | `boolean`     | Indicates if the user's email has been verified, default is `false`.                                                |
| `profileImage`              | `string`      | URL or path to the user's profile image.                                                                            |
| `phone`                     | `string`      | Optional phone number of the user.                                                                                  |
| `phoneVerified`             | `boolean`     | Indicates if the user's phone number has been verified.                                                             |
| `qrCodeImage`               | `string`      | Optional URL or path to the user's QR code image.                                                                   |
| `meta`                      | `any`         | Additional metadata related to the user.                                                                            |
| `status`                    | `string`      | Current status of the user, such as active, pending, etc.                                                           |
| `latestSelfAssessment`      | `any`         | Stores the most recent self-assessment data related to the user.                                                    |
| `latestTemperatureData`     | `any`         | Stores the latest temperature data of the user.                                                                     |
| `organization`              | `any`         | Information about the organization associated with the user.                                                        |
| `address`                   | `object`      | Contains address-related fields like street, city, state, etc.                                                      |
| `subscribeToUpdates`        | `boolean`     | Indicates if the user is subscribed to updates, default is `true`.                                                  |
| `isAdmin`                   | `boolean`     | Indicates if the user has admin privileges.                                                                         |
| `isWellbilityPass`          | `boolean`     | Indicates if the user has a Wellbility Pass.                                                                        |
| `active`                    | `boolean`     | Indicates if the user is active in the system.                                                                      |
| `dateOfBirth`               | `Date`        | Optional date of birth of the user.                                                                                 |
| `labAdmin`                  | `boolean`     | Indicates if the user is a lab administrator.                                                                       |
| `twoStepVerificationEnabled`| `boolean`     | Indicates if two-step verification is enabled for the user.                                                         |
| `noPassReason`              | `string`      | Reason for not having a pass, if applicable.                                                                        |

## Constructor

The constructor accepts a partial `User` object and uses it to initialize the properties of a new `User` instance. It applies default values where necessary and ensures that certain properties, like `meta` and `address`, are initialized even if not provided.

```typescript
constructor(data: Partial<User> = {}) {
  Object.assign(this, data);
  this.meta = this.meta || {};
  this.address = data.address ? { ...this.address, ...data.address } : this.address;
}
```

## Usage

The `User` class is used throughout the application to create, manage, and interact with user data. It provides a consistent structure for user information, making it easier to handle user-related operations and ensuring that data integrity is maintained across different components of the application.

The class can be extended or modified to include additional fields and methods as needed, providing flexibility to adapt to changing requirements.

# 📜 Documentation for `login.component.ts`

This documentation provides a detailed explanation of the `login.component.ts` file, which is a part of an Angular application. The `LoginComponent` handles the logic for the user login interface.

## 📂 Component Overview

The `LoginComponent` is responsible for managing the user login process, including form validation, handling login requests, and managing user sessions. It uses Angular's reactive forms and animations for a seamless user experience.

### Module Imports

#### Angular Core & Forms
- **`Component`**: Decorator to mark a class as an Angular component.
- **`OnDestroy`, `OnInit`**: Lifecycle hooks for component initialization and destruction.
- **`FormGroup`, `Validators`, `FormBuilder`**: Used to create and validate reactive forms.

#### Angular Animations
- **`trigger`, `state`, `transition`, `animate`, `style`**: Used for creating animations within the component.

#### Angular Router
- **`Router`**: Enables navigation between views in the application.

#### RxJS
- **`Subscription`**: Represents the execution of an observable and provides methods to unsubscribe.

### Core Services
- **`AuthService`**: Manages authentication tasks such as login and storing user session data.
- **`LayoutService`**: Provides information about the application's layout, such as screen size.
- **`SweetAlertService`**: Service for displaying alert messages to the user.

## 🚀 Component Metadata

The component is decorated with the `@Component` decorator which provides metadata about the component:

- **`selector: 'app-login'`**: The component's CSS selector used in templates.
- **`templateUrl: './login.component.html'`**: Path to the component's HTML template.
- **`styleUrls: ['./login.component.scss']`**: Path to the component's styles.
- **`animations`**: Defines animations to enhance user interactions.

### Animation: `visible`

The `visible` trigger manages the opacity of the component for smooth transitions between visible states:

- **`state('show')`**: Opacity set to 1, making the component fully visible.
- **`state('hide')`**: Opacity set to 0, making the component invisible.
- **`transition`**: Defines the transition times and easing between states.

## 🧩 Component Class: `LoginComponent`

### Properties

- **`loading: boolean`**: Indicates if a login operation is in progress.
- **`user: FormGroup`**: Form group for capturing user login details.
- **`screenSizeSubscription: Subscription`**: Subscription to monitor screen size changes.
- **`isMobileView: boolean`**: Flag indicating if the application is viewed on a mobile device.

### Constructor

The constructor initializes the component and its dependencies:

- **`FormBuilder`**: Used to create the form group.
- **`AuthService, Router, LayoutService, SweetAlertService`**: Injected services for handling authentication, navigation, layout management, and displaying alerts.

### Lifecycle Hooks

- **`ngOnInit()`**: Subscribes to screen size changes to determine if the application is in mobile view.
- **`ngOnDestroy()`**: Unsubscribes from the screen size subscription to prevent memory leaks.

### Methods

#### `setupForms()`

Initializes the login form with validators:

- **`email`**: Required and must be a valid email format.
- **`password`**: Required field.

#### `login()`

Handles the login process:

1. Sets `loading` to true.
2. Retrieves form values using `getRawValue()`.
3. Calls `AuthService.login()` with the form payload.
4. On success:
   - Logs a success message.
   - Extracts authentication details from the response.
   - Saves authentication data via `AuthService`.
   - Navigates to the dashboard.
5. On error:
   - Sets `loading` to false.
   - Displays an error message using `SweetAlertService`.

### 🧪 Usage Example

To use the `LoginComponent`, include its selector `<app-login></app-login>` in a template where the login form should appear.

### 🎨 Styles

The `login.component.scss` file contains styles specific to the login component, ensuring a consistent and engaging user interface.

### 🔗 Related Modules

- **`AuthModule`**: Declares and exports the `LoginComponent` among other authentication-related components.

This documentation provides a comprehensive overview of the `LoginComponent`, detailing its purpose, usage, and functionality within the Angular application. The component effectively manages user authentication with smooth animations and responsive design adjustments.

# Documentation for `login.component.html` 📄

The `login.component.html` file is an Angular template file that defines the structure and layout of the login form within the application. It is associated with the `LoginComponent` and renders the login interface for both desktop and mobile views. This document will explain the various sections and elements included in the `login.component.html` file.

## Table of Contents
- [Overview](#overview)
- [Structure](#structure)
- [Sections and Elements](#sections-and-elements)
  - [Loading Component](#loading-component)
  - [Desktop Login Form Section](#desktop-login-form-section)
  - [Mobile Login Form Section](#mobile-login-form-section)
- [Important Features](#important-features)

## Overview
The `login.component.html` file contains the HTML markup for a responsive login form. The form is designed to adapt to different screen sizes, rendering a suitable layout for both desktop and mobile devices. It includes form fields for email and password, validation messages, and buttons for login and password recovery.

## Structure
```html
<!-- Loading Component -->
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>

<!-- Desktop Login Form Section -->
<section *ngIf="!loading && !isMobileView" class="desktop-login" fxLayout="column" fxLayoutAlign="center center">
  <!-- Form Content -->
</section>

<!-- Mobile Login Form Section -->
<section *ngIf="!loading && isMobileView" class="mobile-login" fxLayout="column" fxLayoutAlign="center center">
  <!-- Form Content -->
</section>
```

## Sections and Elements
### Loading Component
- **Purpose**: To display a loading indicator while the login process is ongoing.
- **HTML**:
  ```html
  <div class="loading-container" *ngIf="loading">
    <app-loading [fullScreen]="true"></app-loading>
  </div>
  ```
- **Description**: This section uses an `*ngIf` directive to conditionally render a loading animation component (`<app-loading>`) when the `loading` variable in the component class is `true`.

### Desktop Login Form Section
- **Purpose**: To display the login form for desktop users.
- **HTML**:
  ```html
  <section *ngIf="!loading && !isMobileView" class="desktop-login" fxLayout="column" fxLayoutAlign="center center">
    <!-- Form Content -->
  </section>
  ```
- **Description**: This section is only visible when the application is not in a loading state and the user is not on a mobile device (`!isMobileView` is `true`). It includes:
  - **Form Fields**: For entering email and password, with validation messages.
  - **Login Button**: For submitting the form.
  - **Forgot Password Link**: For navigating to the password reset page.

### Mobile Login Form Section
- **Purpose**: To display the login form for mobile users.
- **HTML**:
  ```html
  <section *ngIf="!loading && isMobileView" class="mobile-login" fxLayout="column" fxLayoutAlign="center center">
    <!-- Form Content -->
  </section>
  ```
- **Description**: This section is only displayed when the application is not loading and the user is on a mobile device (`isMobileView` is `true`). It contains the same content as the desktop section but may have styling adjustments for mobile devices.

## Important Features
- **Responsive Design**: Utilizes Angular's `*ngIf` directive and `fxLayout` directives from Angular Flex Layout to ensure the form is responsive and adapts to different screen sizes.
- **Form Validation**: Includes Angular Material's `mat-error` components to display validation messages for email and password fields.
- **Accessibility**: Provides accessible form controls with placeholders and error messages.

This template is a crucial part of the application's authentication module, providing users with a seamless experience when logging in, regardless of their device.

# PasswordResetComponent Documentation

This document provides a detailed overview of the `PasswordResetComponent` in the Angular application. This component is responsible for handling user interactions related to password reset functionality, including both initiating a password reset request and setting a new password.

## Overview 

The `PasswordResetComponent` is an Angular component that facilitates password reset operations. It manages two primary views:
- **Password Reset Request**: Allows users to request a password reset link via email.
- **Set New Password**: Allows users to set a new password after receiving the reset link.

## Code Breakdown

### Imports

```typescript
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpService } from '../../core-module/services/http.service';
import { AuthService } from '../../core-module/services/auth.service';
import { SweetAlertService } from 'src/app/core-module';
```
- **Angular Core**: Essential services and decorators like `Component`.
- **Routing**: For navigation and accessing route parameters.
- **Forms**: For managing user input via reactive forms.
- **Services**: Custom services for HTTP requests, authentication, and displaying alerts.

### Component Decorator

```typescript
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent { ... }
```
- **selector**: The component's CSS selector.
- **templateUrl** & **styleUrls**: Links to the component's HTML and SCSS files.

### Class Properties

- **loading**: A boolean indicating if a loading state is active.
- **show**: An object tracking which view is currently displayed (`passwordSet` or `passwordReset`).
- **user** & **account**: Form groups for managing user input fields.
- **token**: Stores the password reset token from the route parameters.

### Constructor

```typescript
constructor(
  private authService: AuthService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private fb: FormBuilder,
  private httpService: HttpService,
  private sweetAlertService: SweetAlertService,
) {
  this.activatedRoute.params.subscribe((params) => {
    this.token = params['token'];
    if (this.token) {
      this.toggleView('passwordSet');
    } else {
      this.toggleView('passwordReset');
    }
  });
  this.setupForms();
}
```
- **Dependencies**: Utilizes dependency injection for services like `AuthService`, `Router`, `ActivatedRoute`, `FormBuilder`, `HttpService`, and `SweetAlertService`.
- **Route Parameters**: Listens to route parameters to determine if a reset token is provided, switching views accordingly.

### Methods

#### setupForms

```typescript
setupForms() {
  this.user = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });
  this.account = this.fb.group({
    password: [null, [Validators.required, Validators.minLength(8)]],
    confirmPassword: [null, [Validators.required, Validators.minLength(8)], this.validatePasswordMatch.bind(this)],
    token: this.token,
  });
}
```
- **user Form**: Captures the email for password reset requests.
- **account Form**: Captures the new password and confirmation for setting a new password, including validation.

#### passwordReset

```typescript
passwordReset() {
  this.loading = true;
  this.httpService.post('auth/password-reset-request', this.user.getRawValue()).subscribe({
    next: () => {
      this.loading = false;
      this.sweetAlertService.showSuccess('Email Sent', 'Please check your mailbox for password reset link.');
      this.router.navigateByUrl('/login');
    },
    error: (error) => {
      this.loading = false;
      this.sweetAlertService.showError('Password reset Error', error.error.message);
    },
  });
}
```
- **Purpose**: Sends a password reset link to the user’s email.
- **Alerts**: Notifies success or failure using `SweetAlertService`.

#### setNewPassword

```typescript
setNewPassword() {
  this.loading = true;
  this.httpService.post('auth/password-reset', this.account.getRawValue()).subscribe({
    next: () => {
      this.loading = false;
      this.sweetAlertService.showSuccess('Password changed', 'Password changed successfully');
      this.router.navigateByUrl('/login');
    },
    error: (error) => {
      this.loading = false;
      this.account.reset();
      this.sweetAlertService.showError('Unable to reset password', error.error.message);
    },
  });
}
```
- **Purpose**: Updates the password after validation.
- **Alerts**: Notifies result using `SweetAlertService`.

#### toggleView

```typescript
toggleView(target: keyof ShowStatus) {
  this.show.passwordSet = false;
  this.show.passwordReset = false;
  this.show[target] = true;
}
```
- **Purpose**: Switches between password setup and reset request views.

#### validatePasswordMatch

```typescript
validatePasswordMatch(control: AbstractControl) {
  return new Promise((resolve) => {
    const passwordControl = this.account.get('password');
    if (passwordControl) {
      if (control.value === passwordControl.value) {
        return resolve(null);
      }
    }
    return resolve({ validMatch: true });
  });
}
```
- **Purpose**: Validates if `password` and `confirmPassword` fields match.

## Summary

The `PasswordResetComponent` is an essential part of the authentication flow, providing users with the ability to recover access by resetting their passwords. With robust form handling and feedback mechanisms, it ensures a smooth user experience. 🚀

For any further integration or customization, ensure that dependencies such as services and routes are correctly configured in the application. 🎨

# Password Reset Component (HTML)

The `password-reset.component.html` file is a template for the Password Reset component in an Angular application. It is designed to handle two main functionalities: sending a password reset link to the user's email and setting a new password using a reset token.

---

## Structure Overview

The template is divided into two main sections, controlled by the `show` object, which determines which form is visible to the user:

1. **Password Reset Request Form**
2. **Set New Password Form**

---

## Password Reset Request Form

### Purpose

This form is used to request a password reset link to be sent to the user's registered email address.

### Template Structure

- **Loading State**: A loading indicator is shown when an asynchronous operation is in progress.
  ```html
  <div class="loading-container" *ngIf="loading">
      <app-loading [fullScreen]="true"></app-loading>
  </div>
  ```

- **Form Title and Description**: A title and brief description guide the user on what the form does.
  ```html
  <h1>Reset Your Password</h1>
  <p>Password reset instructions will be sent to your email address.</p>
  ```

- **Email Input Field**: Uses Angular Material's `mat-form-field` for email input, with validation messages for required and invalid format errors.
  ```html
  <mat-form-field>
      <input type="email" matInput placeholder="Email" formControlName="email" />
      <mat-error *ngIf="user && user.get('email') && user.get('email')!.hasError('required')">
          <strong>Email is required</strong>
      </mat-error>
      <mat-error *ngIf="user && user.get('email') && user.get('email')!.hasError('email')">
          <strong>Invalid email format</strong>
      </mat-error>
  </mat-form-field>
  ```

- **Reset Password Button**: Submits the form, disabled when loading or if the form is invalid.
  ```html
  <button mat-raised-button color="primary" class="submit-button" type="submit" [disabled]="loading || user.invalid">
      Reset Password
  </button>
  ```

- **Navigation Link**: Provides a link to return to the login page.
  ```html
  <button mat-button app-no-ink [disabled]="loading" type="button" routerLink="/login" class="secondary-option">
      Return to the Login Page
  </button>
  ```

---

## Set New Password Form

### Purpose

This form allows the user to set a new password using a reset token.

### Template Structure

- **Form Title**: Indicates that the user is setting a new password.
  ```html
  <h1>Set New Password</h1>
  ```

- **Password Input Fields**: Includes two fields for password and confirm password, with validations for minimum length and matching passwords.
  ```html
  <mat-form-field>
      <input matInput type="password" placeholder="Password" formControlName="password" />
      <mat-error *ngIf="account.get('password')!.hasError('minlength')">
          <strong>min 8 characters required</strong>
      </mat-error>
      <mat-error [hidden]="!account.get('password')!.hasError('required')">
          <strong>required</strong>
      </mat-error>
  </mat-form-field>
  <mat-form-field>
      <input matInput type="password" placeholder="Confirm Password" formControlName="confirmPassword" />
      <mat-error *ngIf="account.get('confirmPassword')!.hasError('validMatch')" style="font-weight: bold">
          Confirm Password should match new Password
      </mat-error>
  </mat-form-field>
  ```

- **Update Password Button**: Submits the form, disabled when loading or if the form is invalid.
  ```html
  <button mat-raised-button color="primary" class="submit-button" type="submit" [disabled]="loading || account.invalid">
      Update Password
  </button>
  ```

- **Navigation Link**: Provides a link to return to the login page.
  ```html
  <button mat-button app-no-ink [disabled]="loading" type="button" routerLink="/login" class="secondary-option">
      Return to the Login Page
  </button>
  ```

---

## Visual Representation

The forms are visually divided into sections and use Angular Material for consistent styling and responsive behavior, catering to both desktop and mobile views.

---

## Conclusion

The `password-reset.component.html` serves as a crucial UI component for user account recovery, ensuring users can reset their passwords securely and conveniently. The use of Angular's reactive forms and Material Design components enhances both functionality and user experience.

# Documentation for `consent-form.component.html`

The `consent-form.component.html` file is an Angular template that represents the user interface for a comprehensive consent form, primarily designed for capturing information related to flu vaccination. This form includes sections for personal information, screening questions, consent, and administrative use. This documentation will guide you through each part of the template and its purpose.

## Overview

The consent form is divided into several key sections:
- **Loading Indicator**: Displays while data is being processed.
- **School Selection and PDF Download**: Allows users to select a school and download the form as a PDF.
- **Vaccine Recipient Information**: Collects personal and demographic details.
- **Screening Questions**: Gathers medical history related to vaccination safety.
- **Consent and Notices**: Captures user consent for vaccination and information sharing.
- **Administrative Section**: For use by medical professionals to complete vaccination records.

## Template Breakdown

### 🎯 Loading Indicator

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```
- **Purpose**: Displays a loading spinner when the form is processing data.

### 🎓 School Selection and PDF Download

```html
<div class="display-flex flex-direction-row school-and-pdf-container" [formGroup]="consentForm">
  <div class="school-select-container">
    <h4>Select School</h4>
    <mat-form-field class="school-list-field" appearance="outline">
      <mat-label>School</mat-label>
      <input type="text" matInput placeholder="School" formControlName="schoolId" [matAutocomplete]="auto" />
      <mat-autocomplete #auto="matAutocomplete" [displayWith]="displaySchoolName">
        <mat-option *ngFor="let school of filteredSchools | async" [value]="school">
          {{ school.name }}
        </mat-option>
      </mat-autocomplete>
      <mat-error *ngIf="consentForm.get('schoolId')!.hasError('required')">School is required</mat-error>
      <mat-error *ngIf="consentForm.get('schoolId')!.hasError('invalidSchool')">Please select a valid school from the list</mat-error>
    </mat-form-field>
  </div>
  <div class="download-pdf" *ngIf="consentForm.get('schoolId')?.value !== '' && (isNurse || isAdminRole)">
    <button class="download-pdf-button" mat-icon-button matTooltip="Download PDF" [matTooltipPosition]="'above'" [routerLink]="'/print-form/' + formId">
      <mat-icon>picture_as_pdf</mat-icon>
    </button>
  </div>
</div>
```
- **Purpose**: Facilitates school selection and enables PDF download if the user has the required permissions (Nurse or Admin).

### 👤 Vaccine Recipient Information

```html
<mat-card-content class="card-content display-flex flex-direction-column mt-10">
  <mat-card-subtitle style="color: black">VACCINE RECIPIENT INFORMATION</mat-card-subtitle>
  <!-- Recipient Information Fields -->
  <div class="display-flex flex-direction-column justify-content-evenly" formGroupName="recipientInfo" class="mt-5">
    <mat-form-field class="pr-20" appearance="outline">
      <mat-label>First Name</mat-label>
      <input matInput formControlName="firstName" type="text" />
      <mat-error *ngIf="consentForm.get('recipientInfo.firstName')!.hasError('required')">First Name is required</mat-error>
    </mat-form-field>
    <!-- Additional recipient fields (Last Name, Middle Initial, DOB, etc.) -->
  </div>
</mat-card-content>
```
- **Purpose**: Collects essential personal information about the vaccine recipient.

### ❓ Screening Questions

```html
<mat-card-subtitle style="color: black">Screening Questions</mat-card-subtitle>
<div formGroupName="screeningQuestions" fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="10px">
  <!-- Example Question -->
  <div>
    <label [ngClass]="{ 'highlight-red-bold': areAllThreeQuestionsYes() }" for="allergyEggs">
      1. Have you ever had a severe allergic reaction to eggs or any component of flu vaccine? <strong>*</strong>
    </label>
    <mat-radio-group formControlName="allergyEggs">
      <mat-radio-button value="yes">Yes</mat-radio-button>
      <mat-radio-button value="no">No</mat-radio-button>
    </mat-radio-group>
  </div>
  <!-- Additional questions -->
</div>
```
- **Purpose**: Ensures the safety of the vaccine recipient by collecting relevant medical history.

### ✍️ Consent and Notices

```html
<mat-card-subtitle style="color: black; margin-top: 40px">IMMUNIZATION CONSENT AND NOTICE</mat-card-subtitle>
<p>
  By signing below, I acknowledge that I have received and reviewed the information provided...
</p>
<mat-checkbox formControlName="reviewedVaccineInfoStatement">
  I have reviewed the Influenza Vaccine Information Statement at: <a href="https://www.cdc.gov/vaccines/hcp/vis/vis-statements/flu.pdf" target="_blank">Influenza Vaccine Information Statement</a>
</mat-checkbox>
<mat-error *ngIf="consentForm.get('reviewedVaccineInfoStatement')!.hasError('required')">Must select the Influenza Vaccine Information Statement</mat-error>
```
- **Purpose**: Captures consent for vaccination and agreement to information sharing policies.

### 🏥 Administrative Section

```html
<div class="nurse-form" *ngIf="authService.hasLoggedIn()">
  <mat-card-header style="margin-top: 10px">
    <mat-card-title>VACCINE ADMINISTRATOR MUST COMPLETE THE FOLLOWING SECTIONS</mat-card-title>
    <mat-card-subtitle class="custom-subtitle">(ADMINISTRATIVE USE ONLY)</mat-card-subtitle>
  </mat-card-header>
  <div class="mt-5" formGroupName="adminForm" fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px">
    <!-- Administrative fields and verification checks -->
  </div>
</div>
```
- **Purpose**: To be filled out by the medical personnel administering the vaccine, ensuring all procedural checks are completed.

## Conclusion

This comprehensive consent form template is a crucial component in ensuring the safe and efficient administration of vaccines. It captures vital information about the recipient, their medical history, consent, and administrative details, all while providing a user-friendly interface for both desktop and mobile views. With built-in form validation and error handling, it ensures data integrity and compliance with medical and legal standards.

# Consent Form Component Documentation

### Overview

The `ConsentFormComponent` is a comprehensive Angular component that facilitates the management and submission of consent forms within an application. It provides functionalities for creating, editing, and validating consent forms, particularly for vaccinations. This component integrates with multiple services for HTTP requests, authentication, alerts, and layout management.

### Key Features

- **Form Management:** Handles complex nested forms using Angular's `FormGroup` and validators.
- **Signature Capture:** Utilizes signature pads for capturing digital signatures.
- **User Roles:** Adjusts form accessibility and functionality based on user roles such as Admin, Nurse, Medical Professional, and Vaccinator.
- **Responsive Design:** Adapts to mobile and desktop views.
- **Data Integration:** Retrieves and submits data via HTTP requests.

---

### Component Structure

```typescript
@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
```

### Properties

#### Signature Pads

| Property                  | Description                                    |
|---------------------------|------------------------------------------------|
| `parentGuardianSignaturePad` | Handles capturing the parent's or guardian's signature. |
| `optInSignaturePad`           | Manages the Opt-In signature for NHIIS consent.          |
| `vaccineAdminSignaturePad`    | Captures the vaccine administrator's signature.        |

#### Form Management

| Property        | Description                                                  |
|-----------------|--------------------------------------------------------------|
| `consentForm`   | Main form group containing all nested form elements.         |
| `schools`       | List of schools fetched from the API.                        |
| `filteredSchools` | Observable for school name autocomplete functionality.       |

### Constructor and Dependency Injection

The component injects several services to perform its tasks:

- **`FormBuilder`:** To create and manage forms.
- **`Router` and `ActivatedRoute`:** For navigation and route parameter handling.
- **`HttpService`:** For RESTful API interactions.
- **`AuthService`:** To check user roles and authentication status.
- **`SweetAlertService`:** For displaying user feedback via alerts.
- **`LayoutService`:** For responsive design adjustments.

### Lifecycle Hooks

- **`ngOnInit`:** Initializes the form, retrieves school data, and sets up role-based access control.
- **`ngAfterViewChecked`:** Ensures signature pads are correctly initialized once the view is fully loaded.
- **`ngOnDestroy`:** Cleans up subscriptions to prevent memory leaks.

### Form Setup

The `setupForms` method initializes the form structure with various nested groups such as `recipientInfo`, `physicalAddress`, `demographics`, etc. Each form control is equipped with appropriate validators.

```typescript
setupForms() {
  this.consentForm = this.fb.group({
    schoolId: [{ value: '', disabled: false }, [Validators.required, this.schoolObjectValidator()]],
    recipientInfo: this.fb.group({
      lastName: [{ value: '', disabled: false }, Validators.required],
      firstName: [{ value: '', disabled: false }, Validators.required],
      // ...
    }),
    // Additional form groups...
  });
}
```

### Signature Handling

Signature pads are managed through various methods such as `setupSignaturePad`, `clearSignature`, and `drawComplete`. These methods ensure that signatures are correctly captured, displayed, and validated.

### Data Handling

- **Data Fetching:** The `getConsentFormData` method retrieves existing form data by form ID, useful for editing functionality.
- **Data Submission:** The `consentFormSubmit` method validates form data and constructs payloads for API requests.

### Utilities and Helpers

- **Age Calculation:** Automatically calculates age based on the `dateOfBirth`.
- **Validators:** Custom validators like `schoolObjectValidator` ensure that fields meet specific criteria.

### API Endpoints

The component interacts with several API endpoints to fetch school data and submit forms, adapting the endpoint and method based on context (e.g., creating vs. updating a form).

---

### Conclusion

The `ConsentFormComponent` is a sophisticated part of the application, designed to handle intricate form logic with a focus on user experience and data integrity. It leverages Angular's reactive forms and integrates seamlessly with backend services, ensuring that users can efficiently manage consent forms for vaccination processes.

---

### Future Improvements

- **Enhanced Validation:** Implement additional client-side checks for form validation.
- **Performance Optimization:** Minimize API calls and improve loading states management.
- **Accessibility Enhancements:** Ensure compliance with accessibility standards for a broader user base. 

For further details or contributions, please refer to the project repository.

# Documentation for `consent-form-with-image.component.html`

## Overview

The `consent-form-with-image.component.html` file is an Angular template that provides a user interface for submitting a consent form with an image. The form is designed for collecting vaccine consent information, including patient details, school, and administrative details, along with an option to upload an image related to the form. This component is part of an Angular application that seems to manage vaccination consents.

## Structure

The main structure of the template includes:

- **Loading Component**: Displays a loading indicator while data is being processed.
- **Form Section**: The main form for inputting consent details, including personal information, school details, and image upload.
- **Administrative Section**: Additional sections for vaccine administrators to fill out details related to the administration of the vaccine.

## Components and Features

Below is a breakdown of the significant parts of the component and their functionalities:

### 1. Loading Indicator

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```
- Displays a loading component when `loading` is true, indicating background processes are occurring.

### 2. Mat Card for Form

```html
<mat-card *ngIf="!loading" class="consent-form">
  <!-- Form Content -->
</mat-card>
```
- A Material Design card component that wraps the form content, shown when not loading.

### 3. Form Inputs

#### School Selection

```html
<mat-form-field class="school-list-field" appearance="outline">
  <mat-label>School</mat-label>
  <input type="text" matInput placeholder="School" formControlName="schoolId" [matAutocomplete]="auto" />
  <mat-autocomplete #auto="matAutocomplete" [displayWith]="displaySchoolName" (optionSelected)="onSchoolSelected($event)">
    <mat-option *ngFor="let school of filteredSchools | async" [value]="school">
      {{ school.name }}
    </mat-option>
  </mat-autocomplete>
  <mat-error *ngIf="consentFormWithImage.get('schoolId')!.hasError('required')"> School is required </mat-error>
  <mat-error *ngIf="consentFormWithImage.get('schoolId')!.hasError('invalidSchool')"> Please select a valid school from the list </mat-error>
</mat-form-field>
```
- Allows the user to select a school from a list of autocomplete suggestions.
- Validates that a valid school is selected.

#### Image Upload

```html
<app-image-upload [imageUrl]="imageUrls" [imageInputDisable]="disableImageInput" (fileSelected)="onImageSelection($event)"></app-image-upload>
<mat-error *ngIf=" consentFormWithImage.get('parentFormImage')?.invalid && consentFormWithImage.get('parentFormImage')?.touched "> Image is required </mat-error>
```
- Custom component for uploading an image.
- Ensures an image is selected as part of the form submission.

#### Personal Information

Several fields capture personal details such as first name, last name, date of birth, age, grade, email, gender, and city of residence.

```html
<mat-form-field appearance="outline">
  <mat-label>First Name</mat-label>
  <input matInput formControlName="firstName" type="text" />
  <mat-error *ngIf="consentFormWithImage.get('firstName')!.hasError('required')"> First Name is required </mat-error>
</mat-form-field>
<!-- Additional fields for last name, DOB, age, grade, email, etc. -->
```

### 4. Administrative Section

This section is visible when the user is in "Edit Mode" or "Create and Complete Mode," allowing administrators to input vaccine-related data:

```html
<div class="nurse-form" *ngIf="isEditMode || isCreateAndCompleteMode">
  <mat-card-header>
    <mat-card-title>VACCINE ADMINISTRATOR MUST COMPLETE THE FOLLOWING SECTIONS</mat-card-title>
    <mat-card-subtitle class="custom-subtitle">(ADMINISTRATIVE USE ONLY)</mat-card-subtitle>
  </mat-card-header>
  <!-- Form fields for clinic details and vaccination verification -->
</div>
```

### 5. Form Submission

```html
<mat-card-actions class="action-buttons" align="end">
  <button mat-raised-button class="submit-button" color="primary" type="submit" *ngIf="!authService.isRole('Nurse')">
    {{ isEditMode && !isCreateAndCompleteMode ? 'Update' : 'Create' }}
  </button>
</mat-card-actions>
```
- The form can be submitted if the user is not a nurse, with the button text reflecting the mode (create or update).

## Summary

The `consent-form-with-image.component.html` is a structured template for handling consent form submissions with an image upload. It uses Angular Material components for a responsive and user-friendly UI, including form fields, autocomplete, and error validations. The administrative section is included for users with specific roles, ensuring detailed consent handling for vaccination records.

# Documentation for `consent-form-with-image.component.ts`

The `ConsentFormWithImageComponent` is an Angular component designed to handle the presentation and logic of a consent form that includes image uploads. This component is part of a larger application that deals with consent forms, likely for a medical or educational setting. Below, you'll find detailed documentation on the component's structure, functionality, and key features.

## Table of Contents
1. [Component Overview](#component-overview)
2. [Imports and Interfaces](#imports-and-interfaces)
3. [Component Metadata](#component-metadata)
4. [Class Properties](#class-properties)
5. [Lifecycle Hooks](#lifecycle-hooks)
6. [Form Management](#form-management)
7. [Image Handling](#image-handling)
8. [Signature Pad Functionality](#signature-pad-functionality)
9. [Utility Methods](#utility-methods)
10. [Conclusion](#conclusion)

## Component Overview

The `ConsentFormWithImageComponent` is responsible for rendering a consent form that includes fields for personal information, as well as functionality for uploading images and providing a signature. It supports both creation and editing modes and integrates with Azure Blob Storage for image management.

## Imports and Interfaces

### Imports
- **Angular Core and Forms**: Essential for building and managing the component and reactive forms.
- **Angular Router**: For navigation and accessing route parameters.
- **RXJS**: Utilized for reactive programming, especially for managing form value changes and subscriptions.
- **Moment.js**: A library for handling dates and times.
- **Application Services**: Custom services for HTTP requests, layout management, authentication, alerts, and Azure Blob Storage interactions.
- **SignaturePadDirective**: A directive used to manage signature capturing within the form.

### Interfaces
- **School**: Represents a school entity with an ID and a name.
- **ApiResponse**: Generic interface for API responses.
- **SelectedFile**: Represents a file selected for upload, with properties for the file, its URL, and a flag indicating if it's new.
- **FieldConfig**: Configuration for conditional form field validation.

## Component Metadata

```typescript
@Component({
  selector: 'app-consent-form-with-image',
  templateUrl: './consent-form-with-image.component.html',
  styleUrls: ['./consent-form-with-image.component.scss'],
})
```

- **Selector**: `app-consent-form-with-image` indicates the HTML tag used to instantiate the component.
- **TemplateUrl**: Points to the HTML template that defines the component's structure.
- **StyleUrls**: Points to the SCSS file that provides styling for the component.

## Class Properties

### Form and Signature Management
- **consentFormWithImage**: A `FormGroup` object managing the structure and validation of the form fields.
- **signaturePadOptions**: Configuration for the signature pad, including dimensions and styling.

### State and Control Variables
- **isEditMode**: Boolean to determine if the form is in edit mode.
- **loading**: Boolean indicating if the component is in a loading state.
- **schools**: An array of `School` objects used for school selection.
- **selectedImages**: An array of `SelectedFile` objects representing images selected for upload.
- **imageUrls/initialImageUrls**: Arrays holding the URLs of images associated with the form.

### Subscriptions and Observables
- **screenSizeSubscription**: Subscription to observe changes in screen size.
- **filteredSchools**: An observable to filter schools based on user input.

### Signature Pad Control
- **isVaccineAdminSignatureDrawn**: Flag to track if a signature is drawn.
- **canSubmitVaccineAdminSignature**: Flag to control the submission state of the signature.

## Lifecycle Hooks

### ngOnInit
- Initializes the form and loads necessary data.
- Checks URL for specific paths to toggle modes.
- Subscribes to screen size changes.

### ngAfterViewChecked
- Initializes the signature pad once the view is fully loaded.

### ngOnDestroy
- Cleans up subscriptions to prevent memory leaks.

## Form Management

### setupForms
- Initializes the form with necessary controls and validators.
- Manages dynamic addition of the `adminForm` based on the mode.

### markAllFieldsTouchedAndDirty
- Iterates through all form controls to mark them as touched and dirty, enforcing validation messages.

### consentFormWithImageSubmit
- Handles form submission, including image uploads and form data processing.

## Image Handling

### onImageSelection
- Updates the form with selected images and handles marking the image field as touched.

### Azure Blob Integration
- Utilizes `AzureBlobService` to upload and delete images from the cloud.

## Signature Pad Functionality

### setupSignaturePad
- Configures the signature pad and sets up event listeners for signature drawing.

### drawComplete
- Captures the signature data URL and updates the form control.

## Utility Methods

### calculateAge
- Computes the age based on the provided date of birth.

### truncateEmptyKeys
- Utility to remove keys with empty values from an object before submission.

## Conclusion

The `ConsentFormWithImageComponent` is a comprehensive component that integrates form management, image handling, and signature capturing. It is designed to be flexible for both creating new consent forms and editing existing ones, with robust validation and user feedback mechanisms. The use of external services like Azure Blob Storage and Moment.js enhances its capabilities, making it well-suited for complex, real-world applications.

# CaptureImageComponent Documentation 📷

## Overview

The `CaptureImageComponent` is an Angular component that allows users to capture an image using their device's camera. It handles camera permissions, captures the image, and returns the captured image as a file and a data URL. This component is typically used within a dialog for capturing images on the fly.

### Key Features

- **Responsive**: Supports both mobile and desktop views.
- **Permissions**: Checks and requests camera permissions.
- **Capture Image**: Allows capturing images from the camera.
- **Error Handling**: Provides user feedback if camera access is denied.
- **Stream Cleanup**: Properly stops media streams to free resources.

## Component Structure

### Imports

```typescript
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/core-module/services/layout-service';
```

### Component Decorator

```typescript
@Component({
  selector: 'app-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.scss'],
})
```

### Component Class

#### Properties

- `WIDTH` & `HEIGHT`: Dimensions for the captured image.
- `isMobileView`: Boolean to toggle mobile view based on screen size.
- `screenSizeSubscription`: Subscription to monitor screen size changes.
- `video`, `canvas`: ViewChild references to HTML elements for video and canvas.
- `capture`: Object holding the captured image file and URL.
- `error`: Stores error messages related to camera access.
- `isCaptured`: Boolean to check if an image has been captured.
- `stream`: Holds the media stream for the camera.
- `loading`: Boolean indicating if the camera setup is in progress.

#### Constructor

The constructor injects required services:
- `MatDialogRef`: Reference to the dialog containing this component.
- `ChangeDetectorRef`: Allows manual change detection.
- `LayoutService`: Checks device layout (mobile/desktop).

#### Lifecycle Hooks

- `ngOnInit`: Initializes screen size monitoring.
- `ngAfterViewInit`: Sets up the camera after view initialization.
- `ngOnDestroy`: Cleans up media streams and subscriptions.

## Methods

### setupDevices

- **Description**: Initializes the camera for capturing images.
- **Returns**: None.
- **Async**: Yes.

```typescript
async setupDevices() { /* ... */ }
```

### checkCameraPermission

- **Description**: Checks the current state of camera permissions.
- **Returns**: `Promise<PermissionState>`

```typescript
async checkCameraPermission(): Promise<PermissionState> { /* ... */ }
```

### retryPermission

- **Description**: Retries setting up the camera after permissions are granted.

```typescript
retryPermission() { /* ... */ }
```

### captureImage

- **Description**: Captures the current frame from the video stream and converts it to an image file.

```typescript
captureImage() { /* ... */ }
```

### drawImageToCanvas

- **Description**: Draws the video frame to the canvas element.

```typescript
drawImageToCanvas(image: any) { /* ... */ }
```

### cleanupStream

- **Description**: Stops all media tracks and releases the camera stream.

```typescript
cleanupStream() { /* ... */ }
```

### closeDialog

- **Description**: Closes the dialog and returns the captured image.

```typescript
closeDialog() { /* ... */ }
```

### dataURLtoFile

- **Description**: Converts a data URL to a File object.

```typescript
dataURLtoFile(dataurl: string, filename: string): File { /* ... */ }
```

## Usage

The `CaptureImageComponent` can be used in any Angular application where a dialog-based image capture feature is required. It manages camera permissions, captures images, and handles the conversion of captured images into file objects seamlessly.

## Conclusion

The `CaptureImageComponent` is a robust solution for capturing images directly from a user's camera, with built-in handling for permissions and responsive design considerations. It is designed to work efficiently within a dialog, making it a versatile choice for applications requiring camera input functionality.

# Documentation for `CaptureImageComponent`

## Overview 📸

The `CaptureImageComponent` is an Angular component designed to capture an image using the device's camera. This component is ideal for applications requiring user verification, identity capture, or any functionality needing a live image capture. It provides a user interface for capturing an image, showing the live video stream, and handling permission errors gracefully.

## `capture-image.component.ts` 📄

### Imports and Decorators

- **Angular Core and Material**:
  - `Component`, `ElementRef`, `ViewChild`, `AfterViewInit`, `OnDestroy`, `ChangeDetectorRef`, `OnInit` from `@angular/core`.
  - `MatDialogRef` from `@angular/material/dialog` for dialog operations.

- **RxJS**:
  - `Subscription` for handling reactive subscriptions.

- **Custom Services**:
  - `LayoutService` from the project's core module to determine the screen size.

### Component Metadata

- **Selector**: `app-capture-image`
- **Template URL**: `./capture-image.component.html`
- **Style URL**: `./capture-image.component.scss`

### Class Properties

- `WIDTH` and `HEIGHT`: Define the dimensions of the capture area.
- `isMobileView`: Boolean indicating if the view is mobile.
- `screenSizeSubscription`: Manages subscriptions to screen size changes.
- `video` & `canvas`: References to the HTML video and canvas elements.
- `capture`: Stores the captured image file and URL.
- `error`: Stores any errors encountered during image capture.
- `isCaptured`: Boolean indicating if an image has been captured.
- `stream`: Holds the media stream for the video.
- `loading`: Boolean indicating if the component is in a loading state.

### Lifecycle Hooks

- **ngOnInit**: Subscribes to screen size changes to determine if the device is mobile.
- **ngAfterViewInit**: Sets up the media devices after the view initializes.
- **ngOnDestroy**: Cleans up the media stream and any subscriptions.

### Methods

- **setupDevices**: Initializes the camera for video capture, checking permissions and handling errors.
- **checkCameraPermission**: Checks if the browser has permission to use the camera.
- **retryPermission**: Allows users to retry setting up the camera if permission was previously denied or failed.
- **captureImage**: Captures the image from the video stream and processes it to a file.
- **drawImageToCanvas**: Draws the video image to the canvas.
- **cleanupStream**: Stops the video stream and cleans up resources.
- **closeDialog**: Closes the dialog and passes the captured image back.
- **dataURLtoFile**: Converts a data URL to a File object for further processing.

## `capture-image.component.html` 🖼️

### Structure

The HTML template provides the user interface for capturing an image. It includes:

- **Title**: "Capture Your Image"
- **Loading Indicator**: Displays a loading spinner when the component is in a loading state.
- **Video and Canvas Elements**: 
  - `video`: Shows the live video stream from the camera.
  - `canvas`: Displays the captured image after the photo is taken.
- **Action Buttons**:
  - "Capture Photo": Initiates the image capture if no errors are present.
  - Error Message Display: Shows error messages if camera access fails.

### Functional Highlights

- **Responsive Design**: Adjusts to different screen sizes using `isMobileView`.
- **Permission Handling**: Provides user messages for camera access issues and allows retrying the setup.
- **Image Processing**: Captures the image from the video stream and converts it to a downloadable format.

## Conclusion

The `CaptureImageComponent` is a powerful tool for integrating image capture functionality in Angular applications. It handles camera permissions, provides a user-friendly interface for capturing images, and efficiently processes image data for use within the application. This component is particularly useful in scenarios that require user identity verification or real-time image capture.

# ImageUploadComponent Documentation

The `ImageUploadComponent` is a versatile Angular component that allows users to upload images, capture new images using the device's camera, and manage the uploaded/captured images efficiently. This component is designed with flexibility in mind, offering support for both image preview and file management.

## Index
1. [Component Purpose](#component-purpose)
2. [Component Structure](#component-structure)
3. [Inputs](#inputs)
4. [Outputs](#outputs)
5. [Methods](#methods)
6. [Helper Methods](#helper-methods)
7. [Usage](#usage)

---

## Component Purpose

The `ImageUploadComponent` enables users to:

- Upload images via file selection
- Capture images directly from the device's camera
- Preview selected and captured images immediately
- Remove images from the selection
- Emit the selected/captured images for further processing

This component is particularly useful in scenarios where images need to be uploaded dynamically, such as in forms that require profile pictures or supporting documents.

## Component Structure

```typescript
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CaptureImageComponent } from '../dialog/capture-image/capture-image.component';

interface SelectedFile {
  file: File | null;
  url: string;
  isNew: boolean;
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnChanges {
  // ... component code ...
}
```

## Inputs

- **`imageUrl: string[]`**: An array of image URLs that represent existing images. These images are pre-loaded into the component when it initializes.

- **`imageInputDisable: boolean | null`**: A flag to disable the image input functionality. This can be used to prevent users from adding new images.

## Outputs

- **`fileSelected: EventEmitter<SelectedFile[]>`**: Emits the array of selected files whenever there are changes. This allows parent components to react to file selection or removal.

## Methods

### `ngOnChanges(changes: SimpleChanges): void`

- **Purpose**: Detects changes to the `imageUrl` input and updates the internal list of selected files accordingly.
- **Parameters**: `changes` - an object representing the changed properties.

### `onFilesSelected(event: any): void`

- **Purpose**: Handles file selection from an input element, creating local URLs for image previews.
- **Parameters**: `event` - the event triggered by the file input element.

### `removeImage(index: number, event: Event): void`

- **Purpose**: Removes an image from the `selectedFiles` array based on the given index.
- **Parameters**: 
  - `index` - the index of the image to be removed.
  - `event` - the event object to stop propagation.

### `openDialog(): void`

- **Purpose**: Opens a dialog for capturing images using the device's camera.
- **Functionality**: Utilizes `CaptureImageComponent` to capture and return an image.

## Helper Methods

### `getFileTypeFromUrl(url: string): string`

- **Purpose**: Determines the MIME type of a file based on its URL extension.
- **Parameters**: `url` - the URL of the file.
- **Returns**: The MIME type string.

### `getFilenameFromUrl(url: string): string`

- **Purpose**: Extracts the filename from a given URL.
- **Parameters**: `url` - the URL of the file.
- **Returns**: The filename as a string.

## Usage

To use the `ImageUploadComponent` in your Angular application, ensure that you have the `CaptureImageComponent` available within your module's declarations or entry components (if using Angular CLI, add it to `entryComponents`).

```html
<app-image-upload
  [imageUrl]="existingImageUrls"
  [imageInputDisable]="isInputDisabled"
  (fileSelected)="handleFileSelection($event)"
></app-image-upload>
```

### Example Description:

- **`existingImageUrls`**: An array of URLs representing images already uploaded or stored on the server.
- **`isInputDisabled`**: A boolean flag that, when set to true, disables the image input functionality.
- **`handleFileSelection($event)`**: A method in the parent component that processes the array of selected images.

This component is designed to be easily integrated into any Angular form or view where image uploads are needed, providing both developers and users with a seamless image handling experience.
# Documentation for Image Upload Component

This documentation covers the `image-upload.component.ts` and `image-upload.component.html` files which together form the **Image Upload Component** in an Angular application. This component is designed to facilitate the uploading of images and PDF files, along with an option to capture images directly using a camera.

---

## File: `image-upload.component.ts`

### Overview

The **Image Upload Component** handles the selection, display, and potential capture of images. It allows users to upload multiple files, preview them, and has the functionality to capture images through a dialog that activates the device's camera.

### Key Elements

- **Selected Files**: An array to keep track of uploaded or captured files.
- **Inputs and Outputs**:
  - `@Input() imageUrl`: Accepts an array of image URLs to display existing images.
  - `@Input() imageInputDisable`: Conditionally disables file input controls.
  - `@Output() fileSelected`: Emits an event when files are selected or modified.
- **Dialog**: Utilizes Angular Material Dialog to open a `CaptureImageComponent` for capturing images.

### Methods

- **ngOnChanges**: Reacts to changes in `imageUrl` input and updates the `selectedFiles` array accordingly.
- **onFilesSelected**: Handles file selection from the file input, creating local URLs for immediate display.
- **removeImage**: Removes a selected file from the list and emits the updated list.
- **openDialog**: Opens a dialog for capturing images. Upon closure, it adds the captured image to the list.

### Helper Methods

- **getFileTypeFromUrl**: Determines the file type based on the URL extension.
- **getFilenameFromUrl**: Extracts the file name from a URL.

### Code Block

```typescript
interface SelectedFile {
  file: File | null;
  url: string;
  isNew: boolean;
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnChanges {
  selectedFiles: SelectedFile[] = [];
  @Input() imageUrl: string[] = [];
  @Input() imageInputDisable: boolean | null = null;
  @Output() fileSelected = new EventEmitter<SelectedFile[]>();
  
  // Other Code...
}
```

---

## File: `image-upload.component.html`

### Overview

The template provides the structure for the image upload interface, allowing users to upload files, view previews, and capture images.

### Key Elements

- **File Input**: An HTML `input` element of type `file` that accepts images and PDFs.
- **Capture Button**: A button to open the dialog for image capture.
- **Preview Section**: Displays thumbnails for images or links for PDFs.
- **Delete Button**: Allows removal of items from the selected files list.

### Features

- **Upload Files**: Users can upload multiple images or PDF files.
- **Capture Image**: Utilizes the device camera to capture an image.
- **Preview & Manage**: Uploaded/captured files are previewed, and users can delete files if needed.

### HTML Structure

```html
<div class="image-upload-container">
  <div class="display-flex flex-direction-row">
    <div class="custom-form-field" tabindex="0" (click)="fileInput.click()" (keyup.enter)="fileInput.click()">
      <label for="fileInput" class="custom-label">Upload Files *</label>
      <div class="custom-file-input">
        <input type="file" id="fileInput" #fileInput (change)="onFilesSelected($event)"
               class="file-input" accept="image/*,application/pdf" [disabled]="imageInputDisable" multiple />
        <span>
          {{ selectedFiles.length > 0 ? selectedFiles.length + ' file(s) selected' : 'Click Here to Upload File' }}
        </span>
      </div>
    </div>
    <div class="ml-auto" *ngIf="!selectedFiles.length">
      <button mat-icon-button color="primary" [disabled]="imageInputDisable" (click)="openDialog()"
              matTooltip="Capture Image" [matTooltipPosition]="'above'">
        <mat-icon class="camera-icon">camera_alt</mat-icon>
      </button>
    </div>
  </div>
  <div *ngIf="selectedFiles.length > 0" class="file-preview-container">
    <div *ngFor="let file of selectedFiles; let i = index" class="file-preview-wrapper">
      <!-- Image Preview -->
      <div *ngIf="file.file?.type?.startsWith('image/') || file.url.startsWith('http')" class="image-wrapper">
        <a [href]="file.url" target="_blank">
          <img [src]="file.url" alt="Preview" class="image-preview" />
        </a>
      </div>
      <!-- PDF Preview -->
      <div *ngIf="file.file?.type === 'application/pdf' || file.url.endsWith('.pdf')" class="pdf-file-name">
        <a [href]="file.url" target="_blank">{{ file.file?.name || 'PDF Document' }}</a>
      </div>
      <!-- Delete Button -->
      <button mat-icon-button color="warn" class="delete-icon" [disabled]="imageInputDisable" (click)="removeImage(i, $event)" (keyup.enter)="removeImage(i, $event)">
        <mat-icon>delete</mat-icon>
      </button>
    </div>
  </div>
</div>
```

### Usage

- **Component Selector**: `<app-image-upload></app-image-upload>`
- **Inputs**: Provide a list of URLs and disable state if needed.
- **Output**: Listen for `fileSelected` to get the list of uploaded files.

---

This documentation provides a comprehensive understanding of the Image Upload Component, its functionalities, and how it integrates within an Angular application. The component is designed to be user-friendly, providing a seamless experience for uploading and managing images and PDFs.

# ConsentFormsComponent Documentation

The `ConsentFormsComponent` is an Angular component responsible for managing and displaying consent forms. It provides functionalities for viewing, searching, sorting, creating, updating, and deleting consent forms. Additionally, it enables exporting data to CSV and PDF formats.

## Overview

- **Component Selector**: `app-consent-forms`
- **File Path**: `path/to/consent-forms.component.ts`
- **Dependencies**: Angular Material components, RxJS, and several services for handling HTTP requests, alerts, and file conversions.

## Dependencies

- **Angular Material**: Used for UI components such as tables, dialogs, and forms.
- **RxJS**: Used for handling asynchronous operations and reactive programming.
- **SweetAlert2**: For displaying alerts and confirmation dialogs.
- **Moment.js**: For date formatting and manipulation.

## Key Features

- **Dynamic Table Display**: Uses `MatTableDataSource` to display consent forms data.
- **Search Functionality**: Implements search with debounce to optimize performance.
- **Tabular Data Management**: Manages data across multiple tabs with sorting and pagination.
- **CSV and PDF Export**: Provides functionality to export data as CSV or PDF.
- **Form Management**: Supports creating, updating, and deleting consent forms.
- **Access Control**: Integrates role-based access control to tailor functionalities based on user roles.

## Properties

| Name               | Type               | Description                                                                 |
|--------------------|--------------------|-----------------------------------------------------------------------------|
| `searchQuery`      | `string`           | The current search query entered by the user.                               |
| `searchSubject`    | `Subject<string>`  | Subject for handling search input changes.                                  |
| `displayedColumns` | `string[]`         | Columns displayed in the main data table.                                   |
| `dataSource`       | `MatTableDataSource<TableData>` | Data source for the table displaying consent forms.                        |
| `allData`          | `TableData[]`      | All the consent form data retrieved from the server.                        |
| `totalItems`       | `number`           | Total number of items in the data set.                                      |
| `pageSize`         | `number`           | Number of items displayed per page.                                         |
| `pageIndex`        | `number`           | Current page index for pagination.                                          |
| `sortedData`       | `TableData[]`      | Data sorted based on the selected criteria.                                 |
| `csv`              | `TableData[]`      | Data formatted and ready for CSV export.                                    |
| `newForm`          | `FormGroup`        | Form group for creating a new consent form.                                 |
| `loading`          | `boolean`          | Indicates if the component is in a loading state.                           |
| `selectedTabIndex` | `number`           | Index of the currently selected tab.                                        |

## Methods

### `ngOnInit()`

Initializes the component by setting up the form, subscribing to search input changes, and fetching initial data.

### `ngAfterViewInit()`

Sets up sorting for the `MatTableDataSource` and subscribes to changes in the sort state.

### `printScreen()`

Generates a PDF of the current data displayed in the table using the `PdfConverterService`.

### `getRouterLink(operation: string, row?: any): string[]`

Determines the router link based on the operation type (create, update) and the user's role.

### `downloadCsv()`

Exports the consent form data as a CSV file using the `CsvExportService`.

### `onTabChange(event: any)`

Handles tab changes, resetting the page index and updating the data source sorting.

### `onSearchChange(searchText: string)`

Updates the search query and triggers a search operation.

### `fetchData(searchQuery?: string, sort?: Sort)`

Fetches data from the server based on the current search query, sorting, and pagination settings.

### `onPageChange(event: any)`

Handles changes in pagination, updating the page index and size.

### `sortData(sort: Sort)`

Sorts the data based on the specified sorting criteria.

### `newFormSubmit()`

Submits the new consent form data to the server to create a new consent form entry.

### `downloadPDF(consentFormId: string)`

Downloads a PDF document of the specified consent form.

### `onDeleteForm(form_id: string)`

Deletes a consent form, showing a confirmation dialog before proceeding with the deletion.

## Usage Example

To use the `ConsentFormsComponent`, include it in your Angular module and use the selector in your template:

```html
<app-consent-forms></app-consent-forms>
```

Ensure that necessary services like `HttpService`, `SweetAlertService`, `PdfConverterService`, and `CsvExportService` are configured in your application to enable full functionality.

## Conclusion

The `ConsentFormsComponent` streamlines the management of consent forms in an Angular application, offering comprehensive features for data handling, export, and user interaction. Its integration with Angular Material and various services ensures a robust and user-friendly experience.

# Consent Forms Component Documentation

The `consent-forms.component.html` file is the template for displaying, managing, and interacting with consent forms within the application. This component provides a user interface for viewing and managing consent forms, including searching, sorting, and downloading the data.

## Overview

This component consists of a tabbed interface that categorizes consent forms into three statuses: "Signed Forms," "Not Vaccinated," and "Completed Forms." Each tab provides a table view of forms with options to view, delete, or download the forms as PDF. Additionally, options to create new forms or export data are provided.

## Table of Contents

- [Component Structure](#component-structure)
- [Template Details](#template-details)
- [Functionalities](#functionalities)
- [User Actions](#user-actions)

## Component Structure

- **Header Section:**
  - Displays the title "Forms."
  - Provides buttons for downloading data as CSV or PDF.
  - Conditional buttons for creating new forms based on user roles.

- **Loading Indicator:**
  - Displays a loading spinner when data is being fetched.

- **Search Bar:**
  - Allows users to search for specific forms using keywords.

- **Tabbed Interface:**
  - Contains three tabs to categorize forms:
    - **Signed Forms**
    - **Not Vaccinated**
    - **Completed Forms**

- **Table Views:**
  - Each tab has a table displaying form data with sortable columns.
  - Action buttons for each form to view, delete, or download as PDF.

## Template Details

### Header Section

```html
<div class="display-flex">
  <div>
    <h1 class="content-title">Forms</h1>
  </div>
  <div class="action-buttons mb-5 ml-auto">
    <!-- Download and Create Form Buttons -->
  </div>
</div>
```

- **Buttons:**
  - **Download CSV/PDF:** Provides options to download the displayed data in CSV or PDF format.
  - **Create Form:** Button to initiate the creation of a new consent form.
  - **Create & Complete Form:** Button for creating and completing a form in one step.

### Loading Indicator

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```

- Displays a loading spinner when the data is being loaded.

### Search Bar

```html
<div class="search-input">
  <mat-form-field appearance="outline">
    <mat-label>Search</mat-label>
    <input matInput placeholder="Search Forms" [(ngModel)]="searchQuery" (ngModelChange)="onSearchChange($event)" />
  </mat-form-field>
</div>
```

- Provides an input field to search through the consent forms.

### Tabbed Interface

```html
<mat-tab-group [(selectedIndex)]="selectedTabIndex" (selectedTabChange)="onTabChange($event)">
  <mat-tab label="Signed Forms">
    <!-- Table for Signed Forms -->
  </mat-tab>
  <mat-tab label="Not Vaccinated">
    <!-- Table for Not Vaccinated Forms -->
  </mat-tab>
  <mat-tab label="Completed Forms">
    <!-- Table for Completed Forms -->
  </mat-tab>
</mat-tab-group>
```

- Organizes forms into three categories for ease of access and management.

### Table Views

Each tab contains a table with the following structure:

```html
<div class="table-responsive">
  <table id="formsTable" mat-table [dataSource]="sortedData" matSort>
    <ng-container matColumnDef="firstName">
      <th mat-header-cell *matHeaderCellDef mat-sort-header="firstName">First Name</th>
      <td mat-cell *matCellDef="let row">{{ row.firstName }}</td>
    </ng-container>
    <!-- Additional columns for other data fields -->
    <ng-container matColumnDef="action" sticky>
      <th mat-header-cell *matHeaderCellDef>Action</th>
      <td mat-cell *matCellDef="let row">
        <button mat-icon-button [matMenuTriggerFor]="menu">
          <mat-icon aria-label="user menu">more_vert</mat-icon>
        </button>
        <mat-menu #menu="matMenu">
          <button mat-menu-item [routerLink]="getRouterLink('update', row)">
            <mat-icon>visibility</mat-icon> View
          </button>
          <!-- Conditional Delete and Download PDF options -->
        </mat-menu>
      </td>
    </ng-container>
  </table>
</div>
```

- **Sortable Columns:** Allow sorting by different data fields.
- **Action Menu:** Provides options to view, delete (if admin), or download the form as a PDF.

## Functionalities

- **Search:** Users can search for forms using the search bar.
- **Sorting:** Columns in the table can be sorted to organize data better.
- **Pagination:** Tables support pagination for easy navigation through large datasets.
- **Role-based Actions:** Certain actions are available based on user roles (e.g., Admin can delete forms).

## User Actions

Users can perform the following actions:

- **Search and Filter:** Use the search bar to filter forms.
- **Sort Data:** Click on column headers to sort data.
- **Download Data:** Export data in CSV or PDF format.
- **Create Forms:** Use the "Create Form" or "Create & Complete Form" buttons to add new forms.
- **View/Download Forms:** View details or download forms as PDFs.
- **Delete Forms:** Delete forms (admin only).

This component provides a comprehensive interface for managing consent forms, ensuring ease of use and accessibility for different user roles within the application.

# Dashboard Component Documentation

The **DashboardComponent** is an Angular component that serves as a central hub for user interactions in the application. It provides users with necessary information and actions that pertain to their current status and available options within the application. The component leverages Angular's component architecture and dependency injection system to manage user authentication and routing. Below, we delve into the details of this component.

## Overview

- **Filename**: `dashboard.component.ts`
- **Purpose**: To provide a dashboard interface that interacts with user data and application services.
- **Key Features**:
  - Manages loading state.
  - Interfaces with authentication service.
  - Prepares for potential routing and user status checks (commented out in the current state).

## Component Definition

### Imports

```typescript
import { Component } from '@angular/core';
import { AuthService } from 'src/app/core-module';
import { Router } from '@angular/router';
```

- **Component**: Core Angular module to define a component.
- **AuthService**: Custom service to handle authentication logic.
- **Router**: Angular service for navigating between views.

### Component Decorator

```typescript
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
```

- **selector**: Defines the custom HTML tag used for this component.
- **templateUrl**: Points to the HTML file that defines the component's view.
- **styleUrls**: Points to the SCSS file for component-specific styles.

### Class Definition

```typescript
export class DashboardComponent {
  loading = false;
  constructor(
    private router: Router,
    public authService: AuthService,
  ) {
    this.loading = false;
  }
}
```

- **loading**: Boolean flag to indicate if the component is in a loading state.
- **constructor**: 
  - **Router**: Injected to enable navigation.
  - **AuthService**: Injected to access authentication functionalities.
- **Initializes** the `loading` flag to `false`.

## Unused Code

Several methods and properties are currently commented out:

### User Status Enumeration

```typescript
// userStatusEnum = { ... }
```

- Intended to map user statuses to messages.
- Could be used to provide feedback based on user actions or data.

### User Service Integration (Commented Out)

```typescript
// this.userService.load().subscribe(() => { this.loading = false; });
```

- Presumably intended to load user-related data.
- Sets `loading` to `false` once data is fetched.

### Potential Methods 

- **getLastTested**: Retrieves last assessment timestamp.
- **getStatus**: Determines user's current status.
- **navigateTo**: Navigates to a specified route.
- **getMessage**: Fetches a status-based message.

These methods suggest planned functionalities to enhance user interaction by providing status updates and navigational aids.

## Conclusion

The **DashboardComponent** currently serves as a foundational piece for the user interface, with placeholders for enhanced interactivity and data handling. As it stands, it is prepared for integration with more dynamic user data and interactions, indicating potential expansion of its capabilities in the future. For full functionality, one would need to uncomment and implement the intended features, possibly linking to user data and additional services. 

# Documentation for Dashboard Component

Welcome to the documentation for the `DashboardComponent` and its corresponding HTML template. This component serves as the main dashboard interface for authenticated users within the application, providing them with personalized information and a welcoming interface.

## Index

1. [DashboardComponent (dashboard.component.ts)](#dashboardcomponent)
   - [Overview](#overview)
   - [Constructor](#constructor)
   - [Dependencies](#dependencies)
   - [Methods](#methods)

2. [Dashboard HTML Template (dashboard.component.html)](#dashboard-html-template)
   - [Overview](#overview-html)
   - [Structure and Description](#structure-and-description)

---

## DashboardComponent (dashboard.component.ts) <a name="dashboardcomponent"></a>

### Overview

The `DashboardComponent` is an Angular component responsible for displaying a user's dashboard interface. This component does not contain any complex business logic, but it serves as a landing page after a user logs in, providing a welcoming message and user-specific details such as username and roles within the organization.

### Constructor

```typescript
constructor(
  private router: Router,
  public authService: AuthService,
) {
  this.loading = false;
}
```

- **Router**: Injected to potentially navigate to different routes (though navigation logic is currently commented out).
- **AuthService**: Provides user authentication details, such as username, institution name, and roles.

### Dependencies

- **AuthService**: Used to retrieve user information.
- **Router**: Used for navigation purposes if needed in the future.

### Methods

Currently, the `DashboardComponent` does not implement any active methods. However, there are several commented-out methods in the code, indicating potential features for future development:

- **getLastTested()**: Intended to retrieve the timestamp of the user's last self-assessment.
- **getStatus()**: Intended to fetch the user's current health status.
- **navigateTo(target: string)**: A method for navigation to different routes.
- **getMessage()**: Intended to retrieve a message based on the user's assessment status.

---

## Dashboard HTML Template (dashboard.component.html) <a name="dashboard-html-template"></a>

### Overview <a name="overview-html"></a>

The HTML template for the `DashboardComponent` provides a user-friendly interface displaying a welcome message and information about the user's association with an organization.

### Structure and Description <a name="structure-and-description"></a>

```html
<!-- Loading Component -->
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>

<section class="dashboard-container" *ngIf="!loading">
  <div fxLayout="row" fxLayoutAlign="center">
    <h1 class="content-title">Dashboard</h1>
  </div>
  
  <div fxLayout="column" class="my-chart">
    <div>
      <h2>Welcome, {{ authService.getUsername() }}</h2>
    </div>
    
    <div>
      <h2 style="margin-top: 0px; margin-bottom: 48px">
        You are a member of {{ authService.getInstitutionName() }}.
      </h2>
      
      <div>
        <h4>As part of this organization, you have the following roles / authorization:</h4>
        <ul>
          <li> {{ authService.getUserRole() }} </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

#### Key Sections

- **Loading Component**: Displays a loading spinner if the `loading` flag is true.
  
- **Main Dashboard Section**:
  - **Title**: Displays "Dashboard" centered on the page.
  - **Welcome Message**: Shows a personalized welcome message using the username from `AuthService`.
  - **Organization Details**: Presents the user's institution name and their role(s) within the organization.

#### UX Considerations

- **Responsive Design**: Utilizes Angular Flex Layout (`fxLayout`) for responsive and flexible design across different screen sizes.
- **User Personalization**: The page is dynamic, allowing content to change based on the authenticated user's details provided by `AuthService`.

This component and its template form the basis of the user dashboard, offering potential for further expansion and integration with additional features and data.

# SignaturePad Directive Documentation

The `SignaturePadDirective` is an Angular directive that integrates the `signature_pad` library to enable capturing and managing user signatures within an Angular application. This directive is designed to be used in forms, providing a seamless way to capture, display, and manage signatures.

## Table of Contents

1. [Overview](#overview)
2. [Usage](#usage)
3. [Inputs](#inputs)
4. [Public Methods](#public-methods)
5. [ControlValueAccessor Implementation](#controlvalueaccessor-implementation)
6. [Event Management](#event-management)
7. [Mobile Responsiveness](#mobile-responsiveness)
8. [Example](#example)

## Overview

The `SignaturePadDirective` provides a simple interface for capturing signature input via a canvas element. It uses the `signature_pad` library to handle the drawing and export of signatures as data URLs. The directive is equipped to handle changes in screen size, making it responsive and suitable for both desktop and mobile views.

## Usage

To use the `SignaturePadDirective`, add the directive to a canvas element within your component template:

```html
<canvas appSignaturePad [options]="signatureOptions"></canvas>
```

### Inputs

- **options**: Object containing configuration options for the `signature_pad`. This can include settings like `minWidth`, `maxWidth`, `penColor`, etc.

- **isDisabled**: Boolean input to enable or disable the signature pad. When true, the pad is read-only.

## Public Methods

- **clear()**: Clears the current drawing on the signature pad.

- **toDataURL()**: Returns the current drawing as a data URL.

- **fromDataURL(dataURL: string)**: Loads a drawing from a data URL.

- **registerSignaturePadListener(listener: () => void)**: Registers a listener function that will be called whenever the user finishes a stroke.

## ControlValueAccessor Implementation

The directive implements the `ControlValueAccessor` interface, allowing it to be used with Angular forms:

- **writeValue(value: any)**: Writes a value to the component. If a data URL is provided, it will load the signature from the URL.

- **registerOnChange(fn: any)**: Registers a function to call when the input changes.

- **registerOnTouched(fn: any)**: Registers a function to call when the input is touched.

- **setDisabledState(isDisabled: boolean)**: Sets the disabled state of the directive.

## Event Management

- **handleEndStroke()**: This function is triggered when the user finishes a stroke on the pad, updating the form control value with the current data URL.

## Mobile Responsiveness

The directive uses `LayoutService` to adjust the canvas size based on screen size, maintaining responsiveness across devices:

```typescript
this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
    this.isMobileView = isHandset;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
```

## Example

```html
<canvas appSignaturePad 
        [options]="{ minWidth: 1, maxWidth: 2, penColor: 'rgb(66, 133, 244)' }" 
        [isDisabled]="false"></canvas>
```

This example shows a canvas with a signature pad attached. The pen uses a specific color, and the pad is enabled for drawing.

---

The `SignaturePadDirective` is a powerful tool for integrating signature capture into Angular applications, providing flexibility and customization to suit various use cases.

# CreateUpdateDistrictDialogComponent Documentation

The `CreateUpdateDistrictDialogComponent` is an Angular component designed to manage the creation and updating of district information. This component leverages Angular's reactive forms and integrates with a RESTful backend to persist district data.

## Overview

This component allows users to either create a new district or update an existing one through a dialog interface. It uses the Angular Material Dialog for UI presentation, and reactive forms for input handling and validation.

## Import Statements

```typescript
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HttpService, LayoutService, SweetAlertService } from 'src/app/core-module';
```

## Class: CreateUpdateDistrictDialogComponent

### Decorators

- `@Component`: Defines the component and its metadata, including the selector, template URL, and styles.
  
### Class Properties

- **formElement**: `ElementRef` - A reference to the form DOM element.
- **districtForm**: `FormGroup` - The reactive form group for the district form.
- **loading**: `boolean` - A flag indicating whether a loading spinner should be shown.
- **isMobileView**: `boolean` - A flag indicating whether the view is in mobile mode.
- **screenSizeSubscription**: `Subscription` - Subscription to screen size changes for determining layout.
- **isEditMode**: `boolean` - A flag indicating if the component is in edit mode.

### Constructor

The constructor initializes services and form controls. It checks if the component should be in edit mode by examining the input data.

```typescript
constructor(
  private fb: FormBuilder,
  public dialogRef: MatDialogRef<CreateUpdateDistrictDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private httpService: HttpService,
  private sweetAlertService: SweetAlertService,
  private layoutService: LayoutService,
) {
  this.districtForm = this.fb.group({
    name: ['', Validators.required],
  });

  if (data && data.district_id && data.isEdit) {
    this.isEditMode = true;
    this.getDistrict(data.district_id);
  }
}
```

### Lifecycle Hooks

#### ngOnInit

Subscribes to the layout service to determine if the device is in mobile view.

```typescript
ngOnInit(): void {
  this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
    this.isMobileView = isHandset;
  });
}
```

#### ngOnDestroy

Unsubscribes from the screen size subscription to prevent memory leaks.

```typescript
ngOnDestroy(): void {
  if (this.screenSizeSubscription) {
    this.screenSizeSubscription.unsubscribe();
  }
}
```

### Methods

#### getDistrict

Fetches district data using the district ID and patches the form with the data.

```typescript
getDistrict(district_id: string) {
  this.loading = true;
  this.httpService.get<{ data: any }>(`api/districts/${district_id}`).subscribe({
    next: (response) => {
      this.patchForm(response['data']);
    },
    error: (error) => {
      this.loading = false;
      this.sweetAlertService.showError('Unable to fetch School', error.error.message);
    },
  });
}
```

#### patchForm

Patches the reactive form with the district data.

```typescript
patchForm(data: any) {
  this.districtForm.patchValue({
    name: data.name,
  });
  this.loading = false;
}
```

#### markAllFieldsTouchedAndDirty

Marks all form fields as touched and dirty for validation purposes.

```typescript
markAllFieldsTouchedAndDirty(formGroup: FormGroup): void {
  Object.keys(formGroup.controls).forEach((key) => {
    const control = formGroup.get(key);
    if (control instanceof FormGroup) {
      this.markAllFieldsTouchedAndDirty(control);
    } else {
      control?.markAsTouched();
      control?.markAsDirty();
    }
  });
}
```

#### districtFormSubmit

Handles the form submission, validates it, and sends a save or update request based on the mode.

```typescript
districtFormSubmit(): void {
  this.markAllFieldsTouchedAndDirty(this.districtForm);
  if (this.districtForm.invalid) {
    this.scrollToFirstInvalidControl();
  } else {
    this.loading = true;
    const formData = this.districtForm.value;
    const payload: Payload = {
      name: formData.name,
    };
    this.saveForm(payload);
  }
}
```

#### saveForm

Saves or updates the district based on the mode, using the HTTP service to send the data to the backend.

```typescript
saveForm(payload: object) {
  this.loading = true;
  const apiEndpoint = this.isEditMode ? `api/districts/${this.data.district_id}` : 'api/districts';
  const httpMethod = this.isEditMode ? 'put' : 'post';
  const successMessage = this.isEditMode ? 'District Updated' : 'New District Created';
  const successDescription = this.isEditMode ? 'District updated' : 'New District created';
  const errorMessage = this.isEditMode ? 'Data Update Error' : 'Data Save Error';

  this.httpService[httpMethod](apiEndpoint, payload).subscribe({
    next: () => {
      this.loading = false;
      this.sweetAlertService.showSuccess(successMessage, successDescription);
      this.closeDialog('Data Save Or Update');
    },
    error: (error) => {
      this.loading = false;
      this.sweetAlertService.showError(errorMessage, error.error.message);
    },
  });
}
```

#### closeDialog

Closes the dialog and optionally passes a message.

```typescript
closeDialog(message = '') {
  this.dialogRef.close(message);
}
```

#### onCancel

Closes the dialog without any message.

```typescript
onCancel(): void {
  this.closeDialog();
}
```

## Conclusion

The `CreateUpdateDistrictDialogComponent` is a well-structured component designed for managing district entities. It leverages Angular's reactive forms for robust form handling and integrates seamlessly with backend services to perform CRUD operations. This component ensures a smooth user experience with its responsive design and proper error handling.

# Documentation for `create-update-district-dialog.component`

This component is responsible for handling the creation and updating of district records within the application. It utilizes Angular's reactive forms and dialog module to provide a user-friendly interface for managing district data.

## Component Structure

### HTML Template

The HTML file defines the structure of the dialog used for creating or updating districts. It includes a form with input fields and buttons for submitting the form or canceling the operation. 

#### Key Sections

1. **Dialog Title**
   - Displays either "Create District" or "Update District" based on the mode of operation.
   - Utilizes Angular's `*ngIf` directive to toggle between creation and update modes.

2. **Loading State**
   - A loading spinner is displayed when the component is in a loading state, i.e., when an HTTP request is being processed.
   ```html
   <div class="loading-container" *ngIf="loading">
       <app-loading [fullScreen]="true"></app-loading>
   </div>
   ```

3. **Form Structure**
   - The form is initialized using Angular's reactive form module.
   - `formGroup` directive is used to bind the form to the `districtForm` object defined in the component TypeScript file.
   - Includes a single input field for the district name, which is a required field.
   ```html
   <mat-form-field appearance="outline">
       <mat-label>District Name</mat-label>
       <input matInput formControlName="name" type="text" />
       <mat-error *ngIf="districtForm.get('name')!.hasError('required')">
           District Name is required
       </mat-error>
   </mat-form-field>
   ```

4. **Action Buttons**
   - Includes "Cancel" and "Submit" buttons.
   - The submit button's label changes based on the operation mode (Create/Update).
   - The cancel button uses the `(click)` event to trigger the `onCancel()` method, which closes the dialog without submitting the form.
   ```html
   <div mat-dialog-actions align="end" *ngIf="!loading" class="action-buttons mr-10">
       <div>
           <button mat-raised-button type="button" (click)="onCancel()">Cancel</button>
       </div>
       <div class="ml-3">
           <button mat-raised-button class="submit-button" color="primary" type="submit">
               {{ isEditMode ? 'Update' : 'Create' }}
           </button>
       </div>
   </div>
   ```

### TypeScript Component

The TypeScript file accompanying this template handles the logic for managing the form's state and interactions.

#### Key Features

- **Form Initialization**: 
  - The form is built using `FormBuilder` with validators to ensure the district name is provided.
  - It checks if the dialog is in edit mode and fetches existing district data if needed.

- **Responsive Design Handling**:
  - Subscribes to layout changes via `LayoutService` to adjust the form's style for mobile views.

- **Data Submission**:
  - Implements logic to save or update district data using `HttpService`.
  - Displays success or error messages using `SweetAlertService`.

- **Form Validation and Error Handling**:
  - Includes methods to mark form fields as touched and dirty, scrolling to the first invalid control if the form is submitted with errors.

## Styles

The component relies on SCSS for styling, which is encapsulated within the component to avoid global CSS pollution.

## Dependencies

- **Angular Material**: Used for UI components like dialog, form fields, and buttons.
- **Reactive Forms**: For form handling and validation.
- **SweetAlertService**: For displaying alerts and notifications.
- **HttpService**: For making HTTP requests to the backend.

## Usage

To use this component in the application, it must be declared in an Angular module and can be invoked via a dialog service. It is suitable for use cases where district data needs to be entered or modified through a user interface.

## Summary

This component provides a robust and user-friendly method to manage district data, leveraging Angular's powerful form capabilities and Material Design components for a seamless user experience. It ensures data integrity through validation and offers responsive design adjustments to cater to different screen sizes.

# Districts Component HTML Documentation

This document provides a comprehensive overview of the `districts.component.html` file, which is part of an Angular application module. This template is responsible for displaying a list of districts in a tabular format, with functionalities such as creating, viewing, and deleting a district. It also supports sorting, pagination, and exporting data.

## Structure

The template is structured into several sections including headers, action buttons, loading indicators, and a table to display district data. Below, each section is detailed with its purpose and functionality.

### Sections Overview

1. **Header Section**
   - Displays the title "Districts" for the current view.

2. **Action Buttons Section**
   - Provides buttons for exporting the table data and creating a new district.

3. **Loading Indicator**
   - Displays a loading spinner when data is being fetched.

4. **Table Section**
   - Displays district data in a sortable and paginated table format.

### Detailed Breakdown

#### 1. Header Section

The header section contains a simple title for the page:

```html
<div>
  <h1 class="content-title">Districts</h1>
</div>
```

#### 2. Action Buttons Section

This section includes buttons for downloading the table data as a PDF and creating a new district:

```html
<div class="action-buttons mb-5 ml-auto">
  <button *ngIf="allData.length" class="download-pdf-button" mat-icon-button matTooltip="Download Table" [matTooltipPosition]="'above'" (click)="printScreen()">
    <mat-icon class="print-icon">print</mat-icon>
  </button>
  <button mat-raised-button color="primary" class="submit-button" (click)="openDialog()">Create District</button>
</div>
```
- **Download Button**: Appears only if there is data to download. It triggers the `printScreen()` function.
- **Create Button**: Opens a dialog to create a new district via the `openDialog()` function.

#### 3. Loading Indicator

A loading spinner is displayed while data is being fetched:

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```

#### 4. Table Section

This section uses Angular Material components to display district data in a sortable and paginated table:

```html
<mat-card *ngIf="!loading" class="users-container">
  <div class="table-responsive">
    <table id="districtTable" mat-table matSort aria-label="Elements" [dataSource]="sortedData" (matSortChange)="sortData($event)">
      <!-- Action Column -->
      <ng-container matColumnDef="action" sticky>
        <th mat-header-cell *matHeaderCellDef>Action</th>
        <td mat-cell *matCellDef="let row">
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon aria-label="user menu">more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="openDialog(row._id)">
              <mat-icon>visibility</mat-icon> View
            </button>
            <button mat-menu-item (click)="onDeleteDistrict(row._id)">
              <mat-icon>delete</mat-icon> Delete
            </button>
          </mat-menu>
        </td>
      </ng-container>

      <!-- Dynamic Columns -->
      <ng-container *ngFor="let column of displayedColumns">
        <ng-container *ngIf="column !== 'action'">
          <ng-container [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column | capitalizeFirst }}</th>
            <td mat-cell *matCellDef="let row">{{ getColumnValue(row, column) }}</td>
          </ng-container>
        </ng-container>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  </div>
  <mat-paginator [length]="totalItems" [pageIndex]="pageIndex" [pageSize]="pageSize" [pageSizeOptions]="[50, 100, 500, 1000]" (page)="onPageChange($event)">
  </mat-paginator>
</mat-card>
```

- **Dynamic Columns**: Iterates over `displayedColumns` to generate table headers and cells dynamically.
- **Actions**: Includes options to view and delete districts using a menu triggered by `more_vert` icon.
- **Paginator**: Allows navigation through pages of data, with options to select page size.

### Summary

The `districts.component.html` provides a complete user interface for managing districts within the application. It incorporates Angular Material components to ensure a responsive, user-friendly experience with functionalities like sorting, pagination, and dynamic content rendering.

# Documentation for `districts.component.ts`

This document provides a detailed explanation of the `districts.component.ts` file, which is part of an Angular application. This component is responsible for managing and displaying districts within the application.

## Overview

The `DistrictsComponent` handles the following functionalities:
- Fetching district data from a server.
- Displaying district data in a table format.
- Sorting and paginating district data.
- Creating and updating districts via a dialog interface.
- Deleting districts with user confirmation.
- Exporting district data to a PDF file.

## Component Details

### Imports

The component imports necessary modules and services:

- **Angular Core Modules:**
  - `Component`, `OnInit`: For component creation and initialization lifecycle hook.
- **Angular Material Modules:**
  - `MatDialog`, `Sort`, `MatTableDataSource`: For dialog operations, sorting, and table data management.
- **Custom Services:**
  - `AuthService`, `HttpService`, `PdfConverterService`, `SweetAlertService`: For authentication, HTTP requests, PDF conversion, and alert services.

```typescript
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, HttpService, PdfConverterService, SweetAlertService } from 'src/app/core-module';
import { CreateUpdateDistrictDialogComponent } from '../dialog/create-update-district-dialog/create-update-district-dialog.component';
import Swal from 'sweetalert2';
```

### Interfaces

The file defines two interfaces for type safety:

- `TableData`: Represents the structure of data used in the table.
- `ApiResponse<T>`: Represents the structure of the response from the API.

```typescript
interface TableData {
  _id: string;
  name: string;
}

interface ApiResponse<T> {
  data: T[];
  totalDocs: 0;
  totalPages: 0;
  currentPage: 0;
}
```

### Component Decorator

- **Selector**: `app-districts`
- **Template**: `./districts.component.html`
- **Style**: `./districts.component.scss`

```typescript
@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.scss'],
})
```

### Class: `DistrictsComponent`

#### Properties

- **displayedColumns**: Defines the columns to be displayed in the table.
- **dataSource**: Holds the data for the table.
- **allData**: Stores all fetched district data.
- **totalItems**: Total number of district records.
- **pageSize**: Number of items per page.
- **pageIndex**: Current page index.
- **sortedData**: Holds sorted district data.
- **loading**: Indicates loading state.

#### Constructor

Initializes services and sets up the data source:

```typescript
constructor(
  public dialog: MatDialog,
  private httpService: HttpService,
  public authService: AuthService,
  private sweetAlertService: SweetAlertService,
  private pdfConverterService: PdfConverterService,
) {
  this.dataSource = new MatTableDataSource<TableData>([]);
}
```

#### Lifecycle Hook: `ngOnInit`

Fetches district data on component initialization.

```typescript
ngOnInit(): void {
  this.fetchData();
}
```

### Methods

#### `printScreen`

Exports the table data to a PDF file.

```typescript
printScreen() {
  this.pdfConverterService.printTableAsPdf(this.displayedColumns, this.allData, 'district-list.pdf');
}
```

#### `getColumnValue`

Returns the value of a specific column for a given table row.

```typescript
getColumnValue(row: any, column: string) {
  return row[column];
}
```

#### `fetchData`

Fetches district data from the server and updates the table.

```typescript
fetchData(): void {
  this.loading = true;
  let endpointBase = '';
  if (this.authService.isRole('Admin')) {
    endpointBase = 'api/districts';
  } else {
    this.loading = false;
    this.sweetAlertService.showError('Access Denied', 'You do not have the necessary permissions to view this data.');
    return;
  }
  const endpoint = `${endpointBase}?page=${this.pageIndex + 1}&limit=${this.pageSize}`;
  this.httpService.get<ApiResponse<TableData[]>>(endpoint).subscribe({
    next: (response) => {
      this.allData = response.data;
      this.dataSource.data = this.allData;
      this.sortedData = this.allData.slice();
      this.totalItems = response.totalDocs ? response.totalDocs : 0;
      this.pageIndex = response.currentPage ? response.currentPage - 1 : 0;
      this.loading = false;
    },
    error: (error) => {
      this.loading = false;
      this.sweetAlertService.showError('Data Fetch Error', error.error.message);
    },
  });
}
```

#### `onPageChange`

Handles pagination changes.

```typescript
onPageChange(event: any) {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
  this.fetchData();
}
```

#### `sortData`

Sorts the data in the table based on a specified column.

```typescript
sortData(sort: Sort) {
  const data = this.allData.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }
  this.sortedData = data.sort((a: { name: string; }, b: { name: string; }) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name': return compare(a.name, b.name, isAsc);
      default: return 0;
    }
  });
}
```

#### `openDialog`

Opens the dialog for creating or updating a district.

```typescript
openDialog(district_id?: any): void {
  const dialogRef = this.dialog.open(CreateUpdateDistrictDialogComponent, {
    data: { district_id: district_id, isEdit: !!district_id },
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result && result !== '') {
      this.fetchData();
    }
  });
}
```

#### `onDeleteDistrict`

Handles the deletion of a district with user confirmation.

```typescript
onDeleteDistrict(district_id: string) {
  this.sweetAlertService.showConfirmationDialog().then((isConfirmed) => {
    if (isConfirmed) {
      this.httpService.delete('api/districts/' + district_id).subscribe({
        next: () => {
          this.loading = false;
          this.fetchData();
          Swal.fire({ title: 'Deleted!', text: 'Data deleted.', icon: 'success' });
        },
        error: (error) => {
          this.loading = false;
          this.sweetAlertService.showError('Data Deletion Error', error.error.message);
        },
      });
    }
  });
}
```

#### Helper Function: `compare`

A utility function for sorting strings and numbers.

```typescript
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
```

## Summary

The `DistrictsComponent` is a comprehensive component providing CRUD operations and data management for districts within an Angular application. It leverages Angular Material for UI components and custom services for data handling and alert notifications.

## Feature Module Documentation

The `FeatureModule` is an Angular module that encapsulates components, directives, and imports necessary for the feature functionalities of the application. This module acts as a cohesive unit that provides various UI components essential for user interaction and data visualization. Below is a detailed breakdown of the module and its components.

### **Module Overview**

The `FeatureModule` imports several essential Angular and custom modules, declares a range of components and directives, and exports key components for use in other parts of the application.

### **Imports**

- **CommonModule**: Provides common Angular directives such as `ngIf` and `ngFor`.
- **RouterModule**: Enables the use of Angular's routing capabilities within the feature components.
- **SharedModule**: A custom module that likely contains shared services, directives, and components used across the application.
- **MaterialModule**: A custom module that may encapsulate Angular Material components for consistent UI design.

### **Declarations**

The `FeatureModule` declares the following components and directives:

1. **HeaderComponent**: Provides the header section of the application, likely including navigation links and branding.
2. **DashboardComponent**: Displays the main dashboard interface, summarizing key data and analytics.
3. **ConsentFormComponent**: Manages the display and submission of consent forms.
4. **SideNavBarComponent**: Implements a side navigation bar for improved user navigation between features.
5. **ConsentFormsComponent**: Displays a list of consent forms, possibly with actions to view, download, or edit.
6. **SignaturePadDirective**: A directive for capturing and managing digital signatures within forms.
7. **GetStartedComponent**: Guides users through the initial steps to begin using the application.
8. **ConsentFormWithImageComponent**: Manages consent forms that include image uploads.
9. **UsersComponent**: Displays and manages user information within the application.
10. **CreateUpdateUserDialogComponent**: A dialog component for creating or updating user details.
11. **SchoolsComponent**: Displays and manages school-related data.
12. **CreateUpdateSchoolDialogComponent**: A dialog component for creating or updating school details.
13. **DistrictsComponent**: Displays and manages district-related data.
14. **CreateUpdateDistrictDialogComponent**: A dialog component for creating or updating district details.
15. **CaptureImageComponent**: Facilitates image capture through a dialog interface, possibly for adding images to forms.
16. **PrintConsentFormComponent**: Provides functionality to print consent forms.
17. **ReportsComponent**: Displays analytical reports or data summaries.
18. **ImageUploadComponent**: Manages image uploads and displays within forms.

### **Exports**

The module exports several key components to be used in other modules:

- **HeaderComponent**: Ensures the header is accessible throughout the application.
- **DashboardComponent**: Allows the dashboard to be incorporated into other modules or components.
- **SideNavBarComponent**: Provides consistent navigation across different application sections.
- **ConsentFormsComponent**: Enables the consent form list to be included in various parts of the application.
- **GetStartedComponent**: Facilitates user onboarding across different views.

### **Summary**

The `FeatureModule` is a comprehensive module that consolidates various components and directives needed for handling user interactions, data management, and UI navigation within the application. It leverages Angular's modular structure to provide a clean and maintainable codebase, ensuring that each component is focused on a specific functionality, thus promoting reusability and scalability.

By organizing related components and services into a feature module, the application can easily manage and extend functionalities without intertwining unrelated components, adhering to Angular’s best practices for application structure.

# `get-started.component.html` Documentation

This document provides a detailed explanation of the `get-started.component.html` file which is part of an Angular application. This HTML file serves as a simple interface for users to quickly navigate to the **Dashboard** or the **Consent Form** section.

## Overview

The `get-started.component.html` is designed with a loading indicator and two primary navigation buttons. It is structured using Angular Material components to provide a consistent and professional look and feel.

## HTML Structure

Here's a breakdown of the HTML file's structure:

```html
<!-- Loading Component -->
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>

<div *ngIf="!loading" class="container">
  <mat-card class="card">
    <button mat-raised-button class="login-button" [routerLink]="['/login']">Dashboard</button>
    <button mat-raised-button class="consent-form-button" [routerLink]="['/consent-form-influenza']">Consent Form</button>
  </mat-card>
</div>
```

### Key Elements

1. **Loading Indicator**
   - **Element**: `<div class="loading-container" *ngIf="loading">`
   - **Purpose**: Displays a loading spinner when the page is in a loading state.
   - **Component Used**: `<app-loading [fullScreen]="true"></app-loading>` suggests a custom loading component that covers the entire screen.

2. **Main Container**
   - **Element**: `<div *ngIf="!loading" class="container">`
   - **Purpose**: Houses the primary content of the page. It is only displayed when the `loading` variable is `false`.

3. **Material Card**
   - **Element**: `<mat-card class="card">`
   - **Purpose**: Acts as a container for the navigation buttons, providing a neat and organized layout.
   - **Angular Material**: Utilizes Angular Material's card to structure content elegantly.

4. **Navigation Buttons**
   - **Dashboard Button**
     - **Element**: `<button mat-raised-button class="login-button" [routerLink]="['/login']">Dashboard</button>`
     - **Purpose**: Redirects the user to the Dashboard when clicked.
     - **Angular Material**: Styled with `mat-raised-button` for a raised button appearance.
     - **RouterLink**: Angular's `[routerLink]` directive is used to navigate to the `/login` route.

   - **Consent Form Button**
     - **Element**: `<button mat-raised-button class="consent-form-button" [routerLink]="['/consent-form-influenza']">Consent Form</button>`
     - **Purpose**: Navigates to the Consent Form section.
     - **RouterLink**: Uses `[routerLink]` to direct to the `/consent-form-influenza` route.

## Styling

The component likely utilizes CSS styles defined for `.loading-container`, `.container`, `.card`, `.login-button`, and `.consent-form-button` to manage spacing, alignment, colors, and other visual properties.

## Conclusion

This HTML template is a straightforward entry point for users to navigate within the application. It leverages Angular features like conditionals (`*ngIf`) and routing (`[routerLink]`), alongside Angular Material components for a modern UI. The presence of a loading screen ensures a smooth user experience by indicating processing states.

# Documentation for `get-started.component.ts`

## Overview
The `GetStartedComponent` is an Angular component designed to provide a simple interface for users to begin navigating the application. It includes functionality to adapt to different screen sizes, ensuring a responsive design.

### Component Decorator
```typescript
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
```
- **selector**: Specifies the custom HTML tag to use this component (`<app-get-started>`).
- **templateUrl**: Points to the HTML template file associated with this component.
- **styleUrls**: Points to the CSS/SCSS files that style the component.

### Class: `GetStartedComponent`
This class implements two lifecycle hooks, `OnInit` and `OnDestroy`, to manage component initialization and cleanup processes.

#### Properties
- **loading**: A boolean flag that indicates when the component is in a loading state.
- **screenSizeSubscription**: A subscription object for monitoring changes in screen size.
- **isMobileView**: A boolean that represents whether the application is being viewed on a mobile device.

#### Constructor
```typescript
constructor(private layoutService: LayoutService) {}
```
- **layoutService**: Injects the `LayoutService`, which provides methods to determine the screen size.

#### Methods

- **ngOnInit**: Initializes the component and subscribes to screen size changes.
  ```typescript
  ngOnInit(): void {
    this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
      this.isMobileView = isHandset;
    });
  }
  ```
  - Uses `layoutService.isHandset()` to determine if the view is on a handset device, updating `isMobileView` accordingly.

- **ngOnDestroy**: Cleans up the subscription to prevent memory leaks.
  ```typescript
  ngOnDestroy(): void {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }
  ```

### Key Features
- **Responsive Design**: The component listens for changes in device type and adapts the UI for mobile or desktop views.
- **Loading State Management**: Although not utilized in this example, the `loading` flag is set up to manage asynchronous operations effectively.

### Usage
The `GetStartedComponent` serves as a simple entry point for users, with buttons leading to various sections of the application. It ensures responsiveness and maintains a clean user experience by adjusting the layout based on the device's characteristics.

Overall, the component is a straightforward implementation that leverages Angular's capabilities for responsive design and state management.

# Header Component HTML Documentation

This document provides an overview of the `header.component.html` file, which is responsible for rendering the header section of the application. The header includes different elements for both desktop and mobile views.

## Overview

The header component uses Angular Material's `mat-toolbar` to provide a responsive toolbar that adapts to different screen sizes. It includes a company logo and conditional elements that are displayed based on the user's authentication status.

## Structure

### Desktop Toolbar

- **Element**: `<mat-toolbar class="desktop-toolbar" *ngIf="!isMobileView">`
  - **Description**: Displays the toolbar for desktop views when `isMobileView` is `false`.
  - **Contents**:
    - **Logo**: `<span><img src="assets/wellbility_white.png" class="logo mt-4 ml-1" alt="" /></span>`
      - **Attributes**:
        - **`src`**: Path to the logo image.
        - **`class`**: Applies styling for spacing and alignment.
        - **`alt`**: Provides alternative text for the image.
    - **Spacer**: `<span class="example-spacer"></span>`
      - **Description**: Used to space out elements within the toolbar.
    - **User Menu**: *(Commented Out)*
      - **Purpose**: To provide additional options like "About" and "Logout" when the user is logged in.
      - **Components**:
        - **Button**: `<button mat-icon-button [matMenuTriggerFor]="menu">`
          - **Icon**: `<mat-icon aria-label="user menu" class="material-icons.md-78"> account_circle </mat-icon>`
        - **Menu**: `<mat-menu #menu="matMenu">`
          - **Items**: Links for "About" and a button for "Logout".

### Mobile Toolbar

- **Element**: `<mat-toolbar class="mobile-toolbar" *ngIf="isMobileView">`
  - **Description**: Displays the toolbar for mobile views when `isMobileView` is `true`.
  - **Contents**:
    - **Logo**: `<img src="assets/wellbility_white.png" class="mobile-logo mt-4 add-cursor" height="80px" width="180px" routerLink="/" alt="" />`
      - **Attributes**:
        - **`src`**: Path to the logo image.
        - **`class`**: Applies styling for the mobile logo.
        - **`routerLink`**: Navigates to the homepage when clicked.
        - **`height`** and **`width`**: Set dimensions for the logo.
    - **Spacer**: `<span class="example-spacer"></span>`
    - **User Menu**: *(Commented Out)*
      - **Purpose**: Similar to the desktop version, providing options when logged in.

## Features

- **Responsive Design**: The header adapts to both desktop and mobile views using conditional rendering with `*ngIf`.
- **Logo Navigation**: The logo on the mobile toolbar links to the application's homepage.
- **User Authentication Checks**: Although currently commented out, the code is structured to display user-specific options when logged in.

## Usage

To integrate the header component into a page, ensure that it is included within the Angular component template where it is needed. Adjust the CSS classes and styles as necessary to fit the application's design requirements.

## Notes

- The user menu options are currently commented out. To enable them, uncomment the relevant sections in the code.
- Ensure the `authService` and `isMobileView` properties are correctly implemented in the corresponding TypeScript file to manage authentication states and view conditions.

# HeaderComponent Documentation

The `HeaderComponent` is a UI component in an Angular application that serves as the top navigation bar. It adjusts its layout based on the screen size, providing a responsive design that caters to both desktop and mobile views. This component also integrates authentication and navigation services to manage user interactions and navigation.

## Component Overview

- **Selector**: `app-header`
- **Template**: [`header.component.html`](./header.component.html)
- **Styles**: `header.component.scss`

## Dependencies

The `HeaderComponent` depends on several services to function correctly:

- **AuthService**: Manages user authentication state.
- **LayoutService**: Provides information about the current layout, specifically whether the view is mobile or not.
- **SideNavBarService**: Manages the state of the sidebar, allowing it to be toggled open or closed.
- **Router**: Angular service for navigation within the application.

## Properties

| Property               | Type        | Description                                           |
|------------------------|-------------|-------------------------------------------------------|
| `screenSizeSubscription` | `Subscription` | Subscribes to changes in screen size.                  |
| `currentUrl`           | `string`    | Holds the current URL for context, not actively used. |
| `isMobileView`         | `boolean`   | Indicates whether the view is on a mobile device.     |

## Methods

### `ngOnInit()`

Initializes the component by setting up a subscription to monitor the device's screen size. This subscription helps in determining if the current view is mobile.

```typescript
ngOnInit(): void {
    this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
        this.isMobileView = isHandset;
    });
}
```

### `ngOnDestroy()`

Cleans up the component by unsubscribing from the screen size subscription to prevent memory leaks.

```typescript
ngOnDestroy(): void {
    if (this.screenSizeSubscription) {
        this.screenSizeSubscription.unsubscribe();
    }
}
```

### `onToggleSidebar()`

Toggles the visibility of the sidebar. This method is typically used in mobile views to provide a collapsible navigation menu.

```typescript
onToggleSidebar() {
    this.sideNavBarService.toggleSidebar();
}
```

### `goTo(target: string)`

Navigates to a specified route within the application.

```typescript
goTo(target = '') {
    this.router.navigateByUrl(`/${target}`);
}
```

## Usage

The `HeaderComponent` is primarily used for rendering the application's header. It dynamically adjusts its layout based on the screen size, and it provides navigation capabilities and user authentication actions (e.g., logout).

## Example

Here’s how you might include the `HeaderComponent` in a template:

```html
<app-header></app-header>
```

This component ties into the larger application structure to provide a cohesive and responsive user experience. It's a critical part of the application's navigation and layout management.

# Module Index Documentation

This file, `index.ts`, serves as a centralized export hub for various components within a particular directory structure of an Angular application. It facilitates easy and organized imports across different modules by providing a single point from which multiple components and modules can be imported. Below is a detailed explanation of each export statement, which provides insights into the components being exported.

## Exports

### Header Component

```typescript
export * from './header/header.component';
```

- **Path**: `./header/header.component`
- **Description**: Exports everything from the `header.component.ts` file. This component typically handles the header section of the application, including navigation and branding elements.

### Dashboard Component

```typescript
export * from './dashboard/dashboard.component';
```

- **Path**: `./dashboard/dashboard.component`
- **Description**: Exports everything from the `dashboard.component.ts` file. This component is responsible for the main user interface where users can access various features and data pertinent to the application's purpose.

### Consent Form Component

```typescript
export * from './consent-form/consent-form.component';
```

- **Path**: `./consent-form/consent-form.component`
- **Description**: Exports everything from the `consent-form.component.ts` file. This component likely deals with displaying and managing consent forms within the application.

### Side Navigation Bar Component

```typescript
export * from './side-nav-bar/side-nav-bar.component';
```

- **Path**: `./side-nav-bar/side-nav-bar.component`
- **Description**: Exports everything from the `side-nav-bar.component.ts` file. This component manages the side navigation functionality, allowing users to navigate through different sections of the application easily.

### Consent Forms Component

```typescript
export * from './consent-forms/consent-forms.component';
```

- **Path**: `./consent-forms/consent-forms.component`
- **Description**: Exports everything from the `consent-forms.component.ts` file. This component handles the listing and possibly the management of multiple consent forms.

### Consent Form with Image Component

```typescript
export * from './consent-form-with-image/consent-form-with-image.component';
```

- **Path**: `./consent-form-with-image/consent-form-with-image.component`
- **Description**: Exports everything from the `consent-form-with-image.component.ts` file. This component likely provides functionality for managing consent forms that include image uploads or image functionalities.

### Get Started Component

```typescript
export * from './get-started/get-started.component';
```

- **Path**: `./get-started/get-started.component`
- **Description**: Exports everything from the `get-started.component.ts` file. This component might serve as an introductory or onboarding interface for new users.

### Print Consent Form Component

```typescript
export * from './print-consent-form/print-consent-form.component';
```

- **Path**: `./print-consent-form/print-consent-form.component`
- **Description**: Exports everything from the `print-consent-form.component.ts` file. This component likely facilitates printing functionalities for consent forms.

### Image Upload Component

```typescript
export * from './consent-form-with-image/image-upload/image-upload.component';
```

- **Path**: `./consent-form-with-image/image-upload/image-upload.component`
- **Description**: Exports everything from the `image-upload.component.ts` file. This component provides functionality for uploading images, specifically within the context of consent forms.

### Users Component

```typescript
export * from './users/users/users.component';
```

- **Path**: `./users/users/users.component`
- **Description**: Exports everything from the `users.component.ts` file. This component is likely used to manage user-related functionalities, such as listing and editing user information.

### Schools Component

```typescript
export * from './schools/schools/schools.component';
```

- **Path**: `./schools/schools/schools.component`
- **Description**: Exports everything from the `schools.component.ts` file. This component might be used for managing school information within the application.

### Districts Component

```typescript
export * from './districts/districts/districts.component';
```

- **Path**: `./districts/districts/districts.component`
- **Description**: Exports everything from the `districts.component.ts` file. This component is likely involved in managing districts, which could be geographical or organizational divisions within the application.

### Reports Component

```typescript
export * from './reports/reports.component';
```

- **Path**: `./reports/reports.component`
- **Description**: Exports everything from the `reports.component.ts` file. This component is likely responsible for generating and displaying reports based on data within the application.

## Summary

This `index.ts` file plays a crucial role in maintaining a scalable and maintainable codebase by reducing the complexity of import statements across the application. It allows developers to import multiple components from a single module, simplifying the import process and improving code readability.

# PrintConsentFormComponent Documentation

## Overview
The `PrintConsentFormComponent` is an Angular component responsible for displaying and allowing the printing of a consent form. It retrieves the data of a specific consent form from the server and provides functionalities to format and print the form as a PDF document.

## Component Details

### Decorator
```typescript
@Component({
  selector: 'app-print-consent-form',
  templateUrl: './print-consent-form.component.html',
  styleUrls: ['./print-consent-form.component.scss'],
})
```
- **Selector**: `app-print-consent-form`
- **Template**: `print-consent-form.component.html`
- **Styles**: `print-consent-form.component.scss`

### Interfaces
```typescript
interface ApiResponse<T> {
  data: T;
}
```
- **ApiResponse**: Generic interface for API responses, ensuring data consistency across HTTP service calls.

### Component Class
```typescript
export class PrintConsentFormComponent implements OnInit, OnDestroy {
  formId!: string;
  screenSizeSubscription!: Subscription;
  loading = true;
  isMobileView!: boolean;
  formData: any = {};
  adminSignature = '';
```
- **formId**: Captures the unique identifier of the form to be printed.
- **screenSizeSubscription**: Manages subscription for screen size detection.
- **loading**: Boolean flag to indicate loading state.
- **isMobileView**: Boolean flag to determine if the view is for mobile.
- **formData**: Holds the data retrieved for the consent form.
- **adminSignature**: Stores the administrator's signature in the form data.

### Constructor
```typescript
constructor(
  private pdfService: PdfConverterService,
  private route: ActivatedRoute,
  private httpService: HttpService,
  private layoutService: LayoutService,
  private sweetAlertService: SweetAlertService,
) {}
```
- **pdfService**: Service to handle PDF conversion.
- **route**: ActivatedRoute to access route parameters.
- **httpService**: Custom HTTP service for API calls.
- **layoutService**: Service to determine the device layout.
- **sweetAlertService**: Service to display alerts to the user.

### Life Cycle Hooks

#### ngOnInit
```typescript
ngOnInit(): void {
  this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
    this.isMobileView = isHandset;
  });
  this.route.params.subscribe((params) => {
    this.formId = params['formId'];
    if (this.formId) {
      this.getConsentFormData(this.formId);
    }
  });
}
```
- Subscribes to device screen size changes to determine if the view is on a handset.
- Retrieves the `formId` from the route parameters and fetches the corresponding consent form data.

#### ngOnDestroy
```typescript
ngOnDestroy(): void {
  if (this.screenSizeSubscription) {
    this.screenSizeSubscription.unsubscribe();
  }
}
```
- Ensures that the screen size subscription is properly cleaned up to prevent memory leaks.

### Methods

#### getConsentFormData
```typescript
getConsentFormData(formId: string) {
  this.loading = true;
  this.httpService.get<ApiResponse<{ data: any }>>(`api/get-consent-form/${formId}`).subscribe({
    next: (response) => {
      this.loading = false;
      this.formData = response.data;
      this.patchValue();
    },
    error: (error) => {
      this.loading = false;
      this.sweetAlertService.showError('Get Consent Forms Error', error.error.message);
    },
  });
}
```
- Fetches consent form data using the provided `formId`.
- Updates component state based on API response.

#### patchValue
```typescript
patchValue() {
  this.formData['dateOfBirth'] = this.formData.dateOfBirth !== undefined ? moment(this.formData.dateOfBirth).format('MM/DD/YYYY') : 'N/A';
  this.formData['administrationDate'] = this.formData.administrationDate !== undefined ? moment(this.formData.administrationDate).format('MM/DD/YYYY') : 'N/A';
  this.formData['expirationDate'] = this.formData.expirationDate !== undefined ? moment(this.formData.expirationDate).format('MM/DD/YYYY') : 'N/A';
  this.formData['visPublicationDate'] = this.formData.visPublicationDate !== undefined ? moment(this.formData.visPublicationDate).format('MM/DD/YYYY') : 'N/A';
  this.formData['visGivenDate'] = this.formData.visGivenDate !== undefined ? moment(this.formData.visGivenDate).format('MM/DD/YYYY') : 'N/A';
  this.formData['administrationTime'] = this.formData.administrationTime ? moment(this.formData.administrationTime, 'HH:mm').format('h:mm A') : 'N/A';
  this.adminSignature = this.formData.administratorSignature;
}
```
- Formats date and time fields in `formData` for display.
- Extracts and stores administrator signature.

#### downloadAsPDF
```typescript
public downloadAsPDF(): void {
  this.pdfService.printHtmlAsPdf(
    `#printForm-${this.formData._id}`,
    `${this.formData.firstName}-${this.formData.lastName}-consent-form`,
  );
}
```
- Utilizes `PdfConverterService` to generate and download a PDF of the consent form.

## Conclusion
The `PrintConsentFormComponent` is designed to manage the view and download functionality of consent forms as PDFs. It effectively handles API data retrieval, format conversion, and user interactions, ensuring a seamless experience in accessing consent form information.

# Print Consent Form Component Documentation

This documentation provides an overview and explanation of the `print-consent-form.component.html` file, which is a part of the Print Consent Form component in an Angular application.

## Overview

The Print Consent Form component is designed to display the details of a consent form and provide an option to download it as a PDF. It leverages Angular's templating and Angular Material for UI design.

## Structure

The template file is structured as follows:

- **Loading Indicator**: Displays a loading spinner while the data is being fetched.
- **MatCard**: A material card that contains the consent form data in a structured table format.

## Components and Elements

### 1. Loading Component

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```

- **Purpose**: Displays a loading indicator when the form data is being fetched. It uses the `app-loading` component with `fullScreen` set to `true`.

### 2. MatCard for Consent Form

```html
<mat-card *ngIf="!loading" class="consent-form form-container">
```

- **Conditional Rendering**: The card is rendered only when `loading` is false, indicating that the data is ready to be displayed.

### 3. Form Data Table

```html
<table [id]="'printForm-' + formData._id">
```

- **Dynamic ID**: Each table is given a dynamic ID based on the `formData._id` for unique identification.
  
#### Header Section

```html
<th colspan="4" class="header">Seasonal Influenza (“Flu”) Vaccination Record & Consent</th>
```

- **Header**: Displays the title of the consent form.

#### Vaccine Recipient Information

```html
<tr>
  <td><strong>First Name:</strong> {{ formData.firstName }}</td>
  <td><strong>Last Name:</strong> {{ formData.lastName }}</td>
  <!-- Additional recipient information fields -->
</tr>
```

- **Fields**: Displays various information about the vaccine recipient, including name, DOB, age, sex, email, phone, address, race, ethnicity, and insurance.

#### Medical & Screening Questions

```html
<tr>
  <td colspan="4"><strong>Allergy to Eggs:</strong> {{ formData.allergyEggs && formData.allergyEggs === 'yes' ? 'Yes' : 'No' }}</td>
</tr>
```

- **Questions**: Shows the answers to medical screening questions such as allergies, Guillain-Barre syndrome, and dizziness.

#### Signature Section

```html
<tr>
  <td colspan="2"><strong>Signer Name:</strong> {{ formData.signerName }}</td>
</tr>
```

- **Signature Fields**: Includes the name and phone number of the signer.

#### Administrator Section

```html
<tr>
  <td colspan="2"><strong>Clinic or School Name:</strong> {{ formData.clinicOrSchoolName }}</td>
</tr>
```

- **Admin Fields**: Contains fields related to the administrative side, including clinic name, verification of consent, and vaccine administration details.

#### Additional Notes

```html
<tr>
  <td colspan="4"><strong>Additional Notes:</strong> {{ formData.additionalNotes }}</td>
</tr>
```

- **Notes**: Displays any additional notes recorded in the consent form.

### 4. Download Button

```html
<mat-card-actions class="action-buttons" align="end">
  <button mat-raised-button class="submit-button" color="primary" (click)="downloadAsPDF()">Download</button>
</mat-card-actions>
```

- **Functionality**: Provides a button for downloading the consent form as a PDF using the `downloadAsPDF()` method.

## Summary

The `print-consent-form.component.html` template is a well-structured layout that presents a comprehensive view of a consent form. It allows users to review the detailed information and download it as a PDF, all within a user-friendly interface built with Angular Material components.

# ReportsComponent Documentation

The `ReportsComponent` is responsible for generating reports from consent forms. This component facilitates viewing, sorting, and exporting data related to consent forms in a tabular format. It is integrated with PDF and CSV export functionality to allow users to download the displayed data.

## Component Overview

The `ReportsComponent` contains a data table that displays information about consent forms. It includes filtering, sorting, and pagination features to manage large datasets efficiently. The component can generate CSV exports for the displayed data.

### Imports

```typescript
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, CsvExportService, HttpService, LayoutService, SweetAlertService } from 'src/app/core-module';
import Swal from 'sweetalert2';
import * as moment from 'moment-timezone';
import { Subscription } from 'rxjs';
```

### Interfaces

- **ApiResponse<T>**: Describes the API response structure.
- **TableData**: Represents the structure of data displayed in the table.
- **CsvData**: Defines the structure of data exported to CSV.

### Component Decorator

```typescript
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
```

## Class Members

### Variables

- **displayedColumns**: An array of strings defining the columns displayed in the table.
- **dataSource**: Manages the data source for the Material table.
- **allData**: Holds the full dataset fetched from the server.
- **sortedData**: Contains the currently sorted data.
- **loading**: A boolean flag indicating if data is being loaded.
- **reportForm**: A reactive form group for managing date filters.
- **screenSizeSubscription**: Subscription to manage screen size changes.
- **isMobileView**: Boolean to determine if the view is on a mobile device.

### ViewChild

- **sort**: A reference to the MatSort directive for sorting table data.

### Constructor

The constructor initializes services for handling HTTP requests, authentication, CSV exporting, layout management, and user notifications.

### Lifecycle Hooks

- **ngOnInit**: Initializes components, subscribes to layout changes, and sets up the report form.
- **ngOnDestroy**: Cleans up subscriptions to prevent memory leaks.
- **ngAfterViewInit**: Attaches the sorting functionality to the data table.

## Methods

### getColumnValue

```typescript
getColumnValue(row: any, column: string)
```
Returns the value for a given column in the table row. It checks if the column is 'school' and returns the school name, else it returns the direct column value.

### searchReport

```typescript
searchReport(): void
```
Triggers data fetching with the current form values.

### downloadCsv

```typescript
downloadCsv(): void
```
Converts the table data into a CSV format and triggers a download for the user.

### fetchData

```typescript
fetchData(): void
```
Sends a request to fetch data from the server based on the current form values and role permissions.

### onPageChange

```typescript
onPageChange(event: any)
```
Handles pagination changes by re-fetching data.

### sortData

```typescript
sortData(sort: Sort)
```
Sorts the table data based on user interactions with the column headers.

### Helper Functions

- **compare**: A utility function to assist with sorting operations.

## Permissions

Data access is restricted based on user roles managed by the `AuthService`. Admins and RPHNs (Regional Public Health Networks) can access the report data.

## Error Handling

The component uses `SweetAlertService` to display user-friendly error messages when data fetching fails.

This comprehensive setup ensures that the `ReportsComponent` not only displays data but also provides users with tools to interact with and export this data efficiently.

# Reports Component HTML Documentation

The `reports.component.html` file is the template for the Reports Component in an Angular application. This component is designed to display reports in a tabular format, allowing users to filter data by date range and download the data as a CSV file. Below is a detailed explanation of the file structure and its functionalities.

## Overview

This file provides the layout and user interface for displaying and interacting with reports. It includes:
- Section header
- Date range filter
- Download options
- Data table with sorting and dynamic columns

## Structure

### Section Header
The section starts with a header containing the title "Reports" and action buttons for downloading data.

```html
<section>
    <div class="display-flex">
        <div>
            <h1 class="content-title">Reports</h1>
        </div>
```

### Action Buttons
This section allows users to download the report data as a CSV file if there is data available and the component is not loading.

```html
<div class="action-buttons mb-5 ml-auto" [ngClass]="{ 'mr-10': !isMobileView, 'mr-3': isMobileView }">
    <button *ngIf="allData.length && !loading" class="download-buttons" mat-icon-button matTooltip="Download as CSV" [matTooltipPosition]="'above'" (click)="downloadCsv()">
        <mat-icon class="csv-icon" svgIcon="csv"></mat-icon>
    </button>
</div>
```

### Date Range Filter
The date range filter allows users to specify the start and end dates for the report data to be displayed. It uses Angular Material's date range picker component.

```html
<mat-card class="reports-container">
    <div class="date-range-element">
        <div>
            <mat-form-field appearance="outline">
                <mat-label>Enter a date range</mat-label>
                <mat-date-range-input [formGroup]="reportForm" [rangePicker]="picker">
                    <input matStartDate formControlName="start" placeholder="Start date" [readonly]="true" />
                    <input matEndDate formControlName="end" placeholder="End date" [readonly]="true" />
                </mat-date-range-input>
                <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-date-range-picker #picker></mat-date-range-picker>
            </mat-form-field>
        </div>
        <div [ngClass]="{ 'ml-10 mt-3': !isMobileView, 'ml-5 mt-2': isMobileView }">
            <button mat-raised-button color="primary" [disabled]="loading || reportForm.invalid" style="color: white" (click)="searchReport()">Search</button>
        </div>
    </div>
```

### Data Table
The data table is displayed using Angular Material's table component. It supports dynamic columns and sorting functionality. The data source is bound to the `dataSource` variable.

```html
<div class="table-responsive">
    <div class="loading-container" *ngIf="loading">
        <app-loading [fullScreen]="true"></app-loading>
    </div>
    <table *ngIf="!loading" mat-table [dataSource]="dataSource" matSort aria-label="Elements" (matSortChange)="sortData($event)">
        <!-- Dynamic Columns -->
        <ng-container *ngFor="let column of displayedColumns">
            <ng-container [matColumnDef]="column">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column | capitalizeFirst }}</th>
                <td mat-cell *matCellDef="let row">{{ getColumnValue(row, column) }}</td>
            </ng-container>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
</div>
```

## Key Functionalities

- **Date Range Picker**: Allows users to filter report data by specifying a date range.
- **CSV Download**: Enables users to download the displayed report data in CSV format.
- **Dynamic Columns**: Displays data columns dynamically based on the `displayedColumns` array.
- **Sorting**: Provides sorting functionality on each column using Angular Material's sorting module.

## Usage

This template is designed to work with the Reports Component class (`reports.component.ts`), which defines the logic for fetching and processing data, handling user interactions, and binding data to the template.

Ensure the necessary Angular Material modules and custom services are imported in your module to support all functionalities in this template.

# Documentation for `create-update-school-dialog.component.ts`

This document provides a detailed explanation of the `create-update-school-dialog.component.ts` file. This component is designed to handle the creation and updating of school entries within a dialog interface. The component is part of an Angular application and uses reactive forms to manage user input.

## Table of Contents
- [Component Overview](#component-overview)
- [Imports](#imports)
- [Component Decorator](#component-decorator)
- [Class Properties](#class-properties)
- [Constructor](#constructor)
- [Lifecycle Hooks](#lifecycle-hooks)
  - [ngOnInit](#ngoninit)
  - [ngOnDestroy](#ngondestroy)
- [Methods](#methods)
  - [getSchool](#getschool)
  - [patchForm](#patchform)
  - [getAllDistricts](#getalldistricts)
  - [markAllFieldsTouchedAndDirty](#markallfieldstouchedanddirty)
  - [scrollToFirstInvalidControl](#scrolltofirstinvalidcontrol)
  - [schoolFormSubmit](#schoolformsubmit)
  - [saveForm](#saveform)
  - [closeDialog](#closedialog)
  - [onCancel](#oncancel)

## Component Overview

The `CreateUpdateSchoolDialogComponent` is responsible for providing a user interface to create or update school information. It utilizes Angular's reactive forms to manage the form data and validate user input before submission.

## Imports

```typescript
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HttpService, LayoutService, SweetAlertService } from 'src/app/core-module';
```

- **Angular Core**: Provides core Angular functionalities such as component lifecycle hooks, dependency injection, and view manipulation.
- **Reactive Forms**: Used for form handling and validation.
- **Material Dialog**: Used to create modals/dialogs in the UI.
- **RxJS Subscription**: Handles subscription management for observables.
- **Custom Services**: Services for HTTP requests, UI layout management, and alert dialogs.

## Component Decorator

```typescript
@Component({
  selector: 'app-create-update-school-dialog',
  templateUrl: './create-update-school-dialog.component.html',
  styleUrls: ['./create-update-school-dialog.component.scss'],
})
```

- **Selector**: Defines the custom HTML tag for the component.
- **Template URL**: Specifies the HTML template file for the component.
- **Style URLs**: Points to the stylesheet for the component styling.

## Class Properties

- **formElement**: A reference to the form element in the template.
- **schoolForm**: A `FormGroup` object representing the form structure.
- **loading**: A boolean flag indicating if a loading operation is in progress.
- **isMobileView**: A boolean flag indicating if the application is in a mobile view.
- **screenSizeSubscription**: Subscription object for handling screen size changes.
- **districts**: An array holding district data.
- **isEditMode**: A boolean flag indicating if the form is in edit mode.

## Constructor

```typescript
constructor(
  private fb: FormBuilder,
  public dialogRef: MatDialogRef<CreateUpdateSchoolDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private httpService: HttpService,
  private sweetAlertService: SweetAlertService,
  private layoutService: LayoutService,
) {
  // Form initialization
  this.schoolForm = this.fb.group({
    name: ['', Validators.required],
    district: ['', Validators.required],
  });

  // Check if the dialog is in edit mode
  if (data && data.school_id && data.isEdit) {
    this.isEditMode = true;
    this.getSchool(data.school_id);
  }
}
```

- **FormBuilder**: Used to initialize the form with controls and validators.
- **Dialog Reference**: Controls the dialog box, allowing it to close or pass data back.
- **Injected Data**: Provides data to the dialog, useful for determining if the dialog is in edit mode.
- **Custom Services**: Used for HTTP requests, showing alerts, and managing layout changes.

## Lifecycle Hooks

### ngOnInit

```typescript
ngOnInit(): void {
  this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
    this.isMobileView = isHandset;
  });
  this.getAllDistricts();
}
```

- Subscribes to changes in screen size to adapt the UI for mobile views.
- Loads district data when the component initializes.

### ngOnDestroy

```typescript
ngOnDestroy(): void {
  if (this.screenSizeSubscription) {
    this.screenSizeSubscription.unsubscribe();
  }
}
```

- Unsubscribes from the screen size observable to prevent memory leaks.

## Methods

### getSchool

Fetches a school's data by ID and patches the form with the retrieved data.

### patchForm

```typescript
patchForm(data: any) {
  this.schoolForm.patchValue({
    name: data.name,
    district: data.district,
  });
  this.loading = false;
}
```

- Updates the form with the data retrieved from the server.

### getAllDistricts

Fetches the list of districts from the server and stores them in the `districts` array.

### markAllFieldsTouchedAndDirty

Marks all form fields as touched and dirty to trigger validation messages.

### scrollToFirstInvalidControl

Scrolls the view to the first invalid form control to guide the user in correcting errors.

### schoolFormSubmit

Validates and submits the form. If valid, it constructs a payload and calls `saveForm`.

### saveForm

Sends an HTTP request to either create or update a school based on the form's state (edit or create).

### closeDialog

Closes the dialog and optionally passes a message back to the parent component.

### onCancel

Cancels the form submission and closes the dialog.

## Summary

The `CreateUpdateSchoolDialogComponent` is an Angular component for managing school data within a dialog interface. It supports both creation and updating of school entries, using reactive forms for handling input validation and submission. The component also adapts its layout based on the screen size to ensure a responsive design.

# Create/Update School Dialog Component Documentation

The `create-update-school-dialog.component.html` file is an Angular template for a dialog component used to create or update school records in an application. This dialog provides a form for inputting school details and selecting the corresponding district.

## Overview

The component consists of a form that allows users to create or update school information. The form includes fields for the school's name and its associated district. The dialog is designed to be responsive to both desktop and mobile views.

## HTML Structure

### Container and Headers

- **Dialog Container**: The main wrapper for the dialog content is a `div` with the class `dialog`, which serves as the main container for the dialog content.
- **Title**: The title of the dialog is displayed as either "Create School" or "Update School" based on the `isEditMode` state.

```html
<h1 mat-dialog-title class="content-title">
  {{ isEditMode ? 'Update School' : 'Create School' }}
</h1>
```

### Loading Indicator

- The component includes a loading indicator that displays a spinner while data is being fetched. It is conditionally rendered using `*ngIf="loading"`.

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```

### Form

- **Form Element**: The form is displayed conditionally when `loading` is `false`. It uses Angular's `ReactiveFormsModule` for validation.

#### Form Fields

- **School Name**: A text input field for entering the name of the school. It is a required field, and appropriate error messages are displayed if the field is invalid.

```html
<mat-form-field class="pr-10" appearance="outline">
  <mat-label>School Name</mat-label>
  <input matInput formControlName="name" type="text" />
  <mat-error *ngIf="schoolForm.get('name')!.hasError('required')">
    School Name is required
  </mat-error>
</mat-form-field>
```

- **District**: A dropdown selection for choosing the district the school belongs to. This is also a required field, and an error message is shown if the field is not filled.

```html
<mat-form-field appearance="outline">
  <mat-label>District</mat-label>
  <mat-select formControlName="district">
    <mat-option *ngFor="let district of districts" [value]="district._id">
      {{ district.name }}
    </mat-option>
  </mat-select>
  <mat-error *ngIf="schoolForm.get('district')!.hasError('required')">
    District is required
  </mat-error>
</mat-form-field>
```

### Form Actions

- **Cancel Button**: A button to cancel the operation and close the dialog without submitting the form. It is important that this button has a `type="button"` to prevent accidental form submission.

```html
<button mat-raised-button type="button" (click)="onCancel()">Cancel</button>
```

- **Submit Button**: A button to submit the form. The text on the button changes between "Create" and "Update" depending on whether the dialog is in edit mode.

```html
<button mat-raised-button class="submit-button" color="primary" type="submit">
  {{ isEditMode ? 'Update' : 'Create' }}
</button>
```

## Styling

- The template uses Angular Material components for the form fields, buttons, and dialog structure.
- Classes like `display-flex`, `flex-direction-row`, and others are used to handle layout styles for responsiveness.

## Summary

This component provides a user-friendly interface for managing school data, with real-time validation and responsive design to ensure accessibility across different devices. The form is straightforward, with minimal fields to ensure quick data entry and modification for school records. The integration of Angular Material components ensures a modern look and consistent user experience.

# Documentation for `schools.component.ts`

This document provides a detailed explanation of the `schools.component.ts` file, which is part of an Angular application managing school data within a district. The component is responsible for displaying, sorting, and managing a list of schools.

## Overview

The `SchoolsComponent` is an Angular component used to display a list of schools. It includes functionalities such as fetching school data, sorting the data, printing the list, and creating or updating school entries.

## Imports

```typescript
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService, HttpService, PdfConverterService, SweetAlertService } from 'src/app/core-module';
import { CreateUpdateSchoolDialogComponent } from '../dialog/create-update-school-dialog/create-update-school-dialog.component';
import Swal from 'sweetalert2';
```

### Explanation

- **Angular Core**: Provides the component lifecycle hooks.
- **Angular Material**: Used for dialog and table functionalities.
- **SweetAlert2**: Provides elegant pop-up messages.
- **Services**: Custom services for handling authentication, HTTP requests, PDF conversion, and alerts.

## Component Metadata

```typescript
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
```

- **Selector**: The component's selector is `app-schools`.
- **Template**: The HTML template file used is `schools.component.html`.
- **Styles**: The component's styles are defined in `schools.component.scss`.

## Interfaces

```typescript
interface TableData {
  _id: string;
  name: string;
  district?: any;
}

interface ApiResponse<T> {
  data: T[];
  totalDocs: 0;
  totalPages: 0;
  currentPage: 0;
}
```

### Explanation

- **TableData**: Represents the structure of each school record.
- **ApiResponse**: Defines the structure of the API response expected when fetching data.

## Component Class

### Properties

```typescript
displayedColumns: string[] = ['action', 'name', 'district'];
dataSource: MatTableDataSource<TableData>;
allData: any = [];
totalItems = 0;
pageSize = 50;
pageIndex = 0;
sortedData!: [];
loading = false;
```

- **displayedColumns**: Columns displayed in the table.
- **dataSource**: Holds the data for the table.
- **allData**: Raw data fetched from the server.
- **totalItems**: Total number of items in the dataset.
- **pageSize**: Number of items per page.
- **pageIndex**: Current page index.
- **sortedData**: Data after sorting.
- **loading**: Boolean indicating loading state.

### Constructor

```typescript
constructor(
  public dialog: MatDialog,
  private httpService: HttpService,
  public authService: AuthService,
  private sweetAlertService: SweetAlertService,
  private pdfConverterService: PdfConverterService,
) {
  this.dataSource = new MatTableDataSource<TableData>([]);
}
```

### Methods

#### ngOnInit

Initializes the component and fetches the data.

```typescript
ngOnInit(): void {
  this.fetchData();
}
```

#### printScreen

Prints the table as a PDF.

```typescript
printScreen() {
  const keyMap = { district: 'name' };
  this.pdfConverterService.printTableAsPdf(this.displayedColumns, this.allData, 'schools-list.pdf', keyMap);
}
```

#### getColumnValue

Gets the value of a column for a specific row.

```typescript
getColumnValue(row: any, column: string) {
  if (column === 'district') {
    return row.district ? row.district.name : 'N/A';
  } else {
    return row[column];
  }
}
```

#### fetchData

Fetches the school data from the server.

```typescript
fetchData(): void {
  this.loading = true;
  let endpointBase = '';
  if (this.authService.isRole('Admin')) {
    endpointBase = 'api/all-schools';
  } else {
    this.loading = false;
    this.sweetAlertService.showError('Access Denied', 'You do not have the necessary permissions to view this data.');
    return;
  }
  const endpoint = `${endpointBase}?page=${this.pageIndex + 1}&limit=${this.pageSize}`;
  this.httpService.get<ApiResponse<TableData[]>>(endpoint).subscribe({
    next: (response) => {
      this.allData = response.data;
      this.dataSource.data = this.allData;
      this.sortedData = this.allData.slice();
      this.totalItems = response.totalDocs ? response.totalDocs : 0;
      this.pageIndex = response.currentPage ? response.currentPage - 1 : 0;
      this.loading = false;
    },
    error: (error) => {
      this.loading = false;
      this.sweetAlertService.showError('Data Fetch Error', error.error.message);
    },
  });
}
```

#### onPageChange

Handles pagination changes.

```typescript
onPageChange(event: any) {
  this.pageIndex = event.pageIndex;
  this.pageSize = event.pageSize;
  this.fetchData();
}
```

#### sortData

Sorts the data based on the specified column and direction.

```typescript
sortData(sort: Sort) {
  const data = this.allData.slice();
  if (!sort.active || sort.direction === '') {
    this.sortedData = data;
    return;
  }
  this.sortedData = data.sort((a: { name: string; district: string; }, b: { name: string; district: string; }) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'name': return compare(a.name, b.name, isAsc);
      case 'district': return compare(a.district, b.district, isAsc);
      default: return 0;
    }
  });
}
```

#### openDialog

Opens a dialog for creating or updating a school.

```typescript
openDialog(school_id?: any): void {
  const dialogRef = this.dialog.open(CreateUpdateSchoolDialogComponent, {
    data: { school_id: school_id, isEdit: !!school_id },
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (result && result !== '') {
      this.fetchData();
    }
  });
}
```

#### onDeleteSchool

Deletes a school entry upon confirmation.

```typescript
onDeleteSchool(school_id: string) {
  this.sweetAlertService.showConfirmationDialog().then((isConfirmed) => {
    if (isConfirmed) {
      this.httpService.delete('api/schools/' + school_id).subscribe({
        next: () => {
          this.loading = false;
          this.fetchData();
          Swal.fire({
            title: 'Deleted!',
            text: 'Data deleted.',
            icon: 'success',
          });
        },
        error: (error) => {
          this.loading = false;
          this.sweetAlertService.showError('Data Deletion Error', error.error.message);
        },
      });
    }
  });
}
```

### Utility Function

```typescript
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
```

## Conclusion

The `SchoolsComponent` is an essential part of the application, allowing users to manage school data effectively with features like sorting, printing, creating, updating, and deleting records. The integration with Angular Material and additional services enhances the functionality and user experience.

# Documentation for `schools.component.html`

This document provides an overview and explanation of the `schools.component.html` file, which is used to display and manage a list of schools within a web application. The file utilizes Angular Material components to create a responsive and interactive table interface.

## Overview

The `schools.component.html` file is responsible for rendering a user interface that allows users to view, create, update, and delete school records. It provides a tabular view of the schools' data and includes functionalities such as sorting, pagination, and actions like viewing and deleting schools.

## Structure

The file is structured with a top-level `<section>` element containing various child components and elements. Below is a detailed breakdown of the sections and functionalities:

### Toolbar

- **Title**: Displays the title "Schools" at the top of the page.
- **Action Buttons**: Provides options to download the table as a PDF and to create a new school. These buttons are conditionally displayed based on the length of the `allData` array.

```html
<div class="display-flex">
  <div>
    <h1 class="content-title">Schools</h1>
  </div>
  <div class="download-pdf"></div>
  <div class="action-buttons mb-5 ml-auto">
    <button *ngIf="allData.length" class="download-pdf-button" mat-icon-button matTooltip="Download Table" [matTooltipPosition]="'above'" (click)="printScreen()">
      <mat-icon class="print-icon"> print </mat-icon>
    </button>
    <button mat-raised-button color="primary" class="submit-button" (click)="openDialog()">Create School</button>
  </div>
</div>
```

### Loading Indicator

- This section displays a loading spinner when data is being fetched or processed.

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```

### School Table

- **Container**: The main content area is wrapped in a `<mat-card>` element to provide a card-like appearance.
- **Table**: The table is created using Angular Material's `<table mat-table>` directive. It displays school data with columns for actions, school name, and district.
- **Action Column**: Provides a dropdown menu for each row with options to view and delete the school.
- **Dynamic Columns**: These columns are generated based on the `displayedColumns` array, allowing for easy customization of the table's columns.

```html
<mat-card *ngIf="!loading" class="users-container">
  <div class="table-responsive">
    <table id="schoolTable" mat-table matSort aria-label="Elements" [dataSource]="sortedData" (matSortChange)="sortData($event)">
      <!-- Action Column -->
      <ng-container matColumnDef="action" id="actionColumn" sticky>
        <th mat-header-cell *matHeaderCellDef>Action</th>
        <td mat-cell *matCellDef="let row" class="action-cell" [attr.data-row-id]="row._id">
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon aria-label="user menu">more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="openDialog(row._id)">
              <mat-icon>visibility</mat-icon> View
            </button>
            <button mat-menu-item (click)="onDeleteSchool(row._id)">
              <mat-icon>delete</mat-icon> Delete
            </button>
          </mat-menu>
        </td>
      </ng-container>
      <!-- Dynamic Columns -->
      <ng-container *ngFor="let column of displayedColumns">
        <ng-container *ngIf="column !== 'action'">
          <ng-container [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column | capitalizeFirst }}</th>
            <td mat-cell *matCellDef="let row">{{ getColumnValue(row, column) }}</td>
          </ng-container>
        </ng-container>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  </div>
```

### Pagination

- **Paginator**: Provides pagination controls for navigating through multiple pages of school data. It uses Angular Material's `<mat-paginator>` component, supporting custom page sizes.

```html
<mat-paginator [length]="totalItems" [pageIndex]="pageIndex" [pageSize]="pageSize" [pageSizeOptions]="[50, 100, 500, 1000]" (page)="onPageChange($event)">
</mat-paginator>
```

## Summary

The `schools.component.html` file is a comprehensive template for managing school data within an educational web application. It leverages Angular Material components for a consistent and responsive design, allowing users to interact with the school data through various actions like viewing and deleting records. The integration of sorting, pagination, and dynamic columns ensures that the table can accommodate various user needs and data sizes.

# SideNavBarComponent Documentation

The `SideNavBarComponent` is an Angular component that provides a responsive side navigation bar for the application. It facilitates user navigation through different sections of the application and adapts its behavior based on the device's screen size.

## Overview

- **Component Selector**: `app-side-nav-bar`
- **Template URL**: `./side-nav-bar.component.html`
- **Style URL**: `./side-nav-bar.component.scss`

## Imports

- **Angular Core**: `Component`, `OnDestroy`, `OnInit`, `ViewChild`
- **Angular Material**: `MatSidenav`
- **RxJS**: `Subscription`
- **Angular Router**: `Router`
- **Services**:
  - `AuthService`
  - `SideNavBarService`
  - `LayoutService`
  - `SweetAlertService`

## Class: `SideNavBarComponent`

### Properties

- **screenSizeSubscription**: `Subscription`
  - Manages the subscription to the layout service for screen size changes.

- **isSidebarOpened**: `boolean`
  - Indicates whether the sidebar is currently opened.

- **isMobileView**: `boolean`
  - Indicates whether the application is in mobile view.

- **sidenav**: `MatSidenav`
  - Angular Material Sidenav ViewChild reference.

### Constructor

- **Parameters**:
  - `authService`: Handles authentication-related operations.
  - `sideNavBarService`: Manages the sidebar's toggle state.
  - `layoutService`: Provides layout and screen size information.
  - `router`: Angular's Router service for navigation.
  - `sweetAlertService`: Displays alerts and notifications.

### Lifecycle Hooks

- **ngOnInit**: Sets up subscriptions for monitoring screen size changes and sidebar toggle events.
  - Subscribes to `isHandset$` from `layoutService` to determine if the device is a handset.
  - Subscribes to `sidebarToggle$` from `sideNavBarService` to toggle the sidebar.

- **ngOnDestroy**: Unsubscribes from the `screenSizeSubscription` to prevent memory leaks.

### Methods

- **toggleSidebar**: Toggles the sidebar's open/closed state.

- **onKeydown**: Handles keyboard interactions for navigation links, allowing navigation with the Enter and Space keys.
  - **Parameters**:
    - `event`: The keyboard event.
    - `url`: The URL to navigate to.

- **closeSidebar**: Closes the sidebar if in mobile view.

- **navigateAndClose**: Navigates to a specified URL and closes the sidebar if necessary.
  - **Parameters**:
    - `url`: The URL to navigate to.

- **logout**: Logs out the current user, navigates to the login page, and reloads the page to reset user data and states.

## Usage

This component is used as part of the application's navigation system. It is designed to be responsive and intuitive, providing easy access to different sections of the application based on user role and device type.

```html
<app-side-nav-bar></app-side-nav-bar>
```

## Key Features

- **Responsive Design**: Adapts to mobile and desktop views.
- **Role-Based Access**: Displays navigation options based on user roles.
- **Keyboard Accessibility**: Supports navigation via keyboard inputs.
- **Session Management**: Includes logout functionality to securely end user sessions.

This component is essential for maintaining a user-friendly and accessible navigation structure within the Angular application.

# SideNavBar Component HTML Documentation

## Overview

The `side-nav-bar.component.html` file defines the structure and layout of the side navigation bar for an application. This sidebar is designed to provide quick access to various sections of the application through navigation links. The component is responsive and adapts to different screen sizes by using Angular Material's `mat-sidenav` with a toggle feature for mobile and desktop views.

## HTML Structure

### Main Container

- **`<mat-sidenav-container>`**: This is the main container for the sidebar and the main content of the application. It helps manage the layout of the sidenav and the content area. 

### Side Navigation

- **`<mat-sidenav>`**: This element represents the sidebar itself. It is conditionally displayed based on the user's login status. The sidebar's mode switches between `over` (for mobile view) and `side` (for desktop view).

#### Sidebar Content

- **Sidebar Logo**:
  - **`<div class="sidebar-logo">`**: Contains the logo image for branding purposes.
  - **Logo Image**: Displays the logo of the application.

- **Navigation Links (Menu Items)**:
  - Each navigation link is wrapped in a `<div>` with the class `menu-item` and utilizes Angular Material's `mat-list-item` for styling.
  - **Icon and Title**: Each menu item includes an icon and a title to represent the section it navigates to.

- **Specific Navigation Items**:
  - **Dashboard**: Navigates to the dashboard view.
  - **Forms**: Directs to the forms section.
  - **Reports**: Available for users with 'Admin' or 'RPHN' roles, leading to the reports page.
  - **Users**: Accessible by 'Admin' or 'RPHN', linking to user management.
  - **Districts**: For 'Admin' users to manage districts.
  - **Schools**: For 'Admin' users to manage schools.
  - **Logout**: Logs the user out of the application.

- **`<mat-divider>`**: Used to separate the different sections and links within the sidebar for better visual clarity.

### Main Content

- **`<mat-sidenav-content>`**: This section holds the main content of the application. It uses Angular's `<router-outlet>` to dynamically load components based on the current route.

## Interactivity

- **Toggle and Navigation**:
  - The sidebar can be toggled open or closed, especially on mobile views, based on the `isSidebarOpened` property.
  - Navigation links use `(click)` and `(keydown)` events to navigate to different routes and close the sidebar if viewed on a mobile device.

## Accessibility

- **Keyboard Navigation**: The `tabindex="0"` attribute allows focus on div elements for accessible navigation, enabling keyboard users to interact with the menu items using Enter or Space keys.

## Auth Role-Based Display

- The visibility of certain menu items (like Reports, Users, Districts, Schools) is controlled based on the user's role, ensuring that users only see links relevant to their permissions.

## Conclusion

The `side-nav-bar.component.html` provides a user-friendly and responsive design for navigating an application. It leverages Angular Material's components for consistent UI/UX and ensures accessibility for all users.

# Documentation for `create-update-user-dialog.component.ts`

The `create-update-user-dialog.component.ts` file is part of an Angular application and is responsible for managing the creation and updating of user information within a dialog interface. This component provides a form to input user details, including assigning roles and associating them with schools or districts.

## Overview

- **Purpose**: To provide a dialog interface for creating and updating user information.
- **Key Features**:
  - Form initialization and validation
  - Dynamic role-based form adjustments
  - Fetching and displaying existing user data for editing
  - Integration with backend services for data retrieval and submission
  - Responsive layout adjustments for different screen sizes

## Component Details

### Imports

- **Angular Core**: 
  - `Component`, `OnInit`, `OnDestroy`, `ViewChild`, `ElementRef`
  - `FormBuilder`, `FormGroup`, `Validators` from `@angular/forms`
- **Angular Material**: 
  - `MAT_DIALOG_DATA`, `MatDialogRef` for dialog interactions
- **RxJS**: 
  - `Observable`, `Subscription`, `map`, `startWith` for managing asynchronous data and subscriptions
- **Services**: 
  - `AuthService`, `HttpService`, `LayoutService`, `SweetAlertService` for various functionalities like authentication, HTTP calls, layout adjustments, and user notifications

### Component Decorator

- **Selector**: `app-create-update-user-dialog`
- **Template**: `./create-update-user-dialog.component.html`
- **Style**: `./create-update-user-dialog.component.scss`

### Class Members

- **Form and State Management**:
  - `userForm`: Manages the form state and validation.
  - `loading`: Indicates if data is being loaded or processed.
  - `isMobileView`: Boolean to track if the current view is mobile.
  - `isEditMode`: Boolean to distinguish between creation and update modes.

- **Data Collections**:
  - `schools`, `districts`, `roles`: Arrays to store available schools, districts, and roles.
  - `selectedRoleName`, `selectedSchoolsIds`, `selectedDistrictIds`: Variables to store the selected role name and associated entity IDs.

- **Subscriptions**:
  - `screenSizeSubscription`: Manages subscription to screen size changes.

### Lifecycle Hooks

- **ngOnInit**: Initializes the component, sets up screen size listener, retrieves data for schools, districts, and roles, and fetches user details if editing.
- **ngOnDestroy**: Cleans up subscriptions to prevent memory leaks.

### Methods

- **getUser**: Fetch user details for editing.
- **patchForm**: Updates the form with existing user data.
- **onSchoolChange**: Validates school selection based on the role.
- **onDistrictChange**: Validates district selection based on the role.
- **onRoleChange**: Adjusts form validators and defaults based on role changes.
- **getAllRoles**: Fetches available user roles.
- **getAllSchoolOfDistrict**: Fetches schools based on the district for RPHN users.
- **getAllSchools**: Fetches all available schools.
- **getAllDistricts**: Fetches all available districts.
- **markAllFieldsTouchedAndDirty**: Marks all form fields as touched and dirty to trigger validation messages.
- **scrollToFirstInvalidControl**: Scrolls to the first invalid form control for user attention.
- **userFormSubmit**: Validates and submits the form data for creating or updating a user.
- **saveForm**: Sends the form data to the appropriate API endpoint for saving.
- **closeDialog**: Closes the dialog with an optional message.
- **onCancel**: Cancels the operation and closes the dialog.

## Usage

This component is typically invoked within a dialog to manage user data. It adjusts its form fields and validation rules dynamically based on the user's role, ensuring that the correct associations and permissions are set. This component integrates with backend services to fetch existing user data (for editing) and to submit new or updated user details.

By leveraging Angular's form and HTTP modules, it provides a robust interface for user management within the application, ensuring that user roles and associations are handled consistently and accurately.

# Documentation for Angular Components

## Overview

This documentation provides a detailed explanation of various Angular components used in a web application. Each component serves a specific purpose in the application, such as managing forms, handling user interactions, and displaying data. This document covers the HTML and TypeScript files for each component, explaining their structure, functionality, and interactivity.

## Components

### Create-Update-District-Dialog Component

#### TypeScript: `create-update-district-dialog.component.ts`
This component manages the creation and updating of districts within the application.

**Key Features:**
- **Form Handling:** Uses Angular Reactive Forms to manage district data.
- **API Integration:** Fetches and updates district data using HTTP service.
- **Dynamic Mode:** Supports both creation and editing of district data.
- **Mobile Responsiveness:** Adjusts layout based on device screen size.

```typescript
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  HttpService,
  LayoutService,
  SweetAlertService,
} from 'src/app/core-module';

interface Payload {
  name: string;
}

@Component({
  selector: 'app-create-update-district-dialog',
  templateUrl: './create-update-district-dialog.component.html',
  styleUrls: ['./create-update-district-dialog.component.scss'],
})
export class CreateUpdateDistrictDialogComponent implements OnInit, OnDestroy {
  @ViewChild('formElement', { static: false }) formElement!: ElementRef;
  districtForm: FormGroup;
  loading = false;
  isMobileView!: boolean;
  screenSizeSubscription!: Subscription;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateUpdateDistrictDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService,
    private sweetAlertService: SweetAlertService,
    private layoutService: LayoutService,
  ) {
    this.districtForm = this.fb.group({
      name: ['', Validators.required],
    });

    if (data && data.district_id && data.isEdit) {
      this.isEditMode = true;
      this.getDistrict(data.district_id);
    }
  }

  ngOnInit(): void {
    this.screenSizeSubscription = this.layoutService.isHandset().subscribe((isHandset) => {
      this.isMobileView = isHandset;
    });
  }

  ngOnDestroy(): void {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

  getDistrict(district_id: string) {
    this.loading = true;
    this.httpService.get<{ data: any }>(`api/districts/${district_id}`).subscribe({
      next: (response) => {
        this.patchForm(response['data']);
      },
      error: (error) => {
        this.loading = false;
        this.sweetAlertService.showError('Unable to fetch School', error.error.message);
      },
    });
  }

  patchForm(data: any) {
    this.districtForm.patchValue({
      name: data.name,
    });
    this.loading = false;
  }

  markAllFieldsTouchedAndDirty(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markAllFieldsTouchedAndDirty(control);
      } else {
        control?.markAsTouched();
        control?.markAsDirty();
      }
    });
  }

  scrollToFirstInvalidControl(): void {
    const firstInvalidControl: HTMLElement = this.formElement.nativeElement.querySelector(
      'form .ng-invalid'
    );
    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalidControl.focus();
    }
  }

  districtFormSubmit(): void {
    this.markAllFieldsTouchedAndDirty(this.districtForm);
    if (this.districtForm.invalid) {
      this.scrollToFirstInvalidControl();
    } else {
      this.loading = true;
      const formData = this.districtForm.value;
      const payload: Payload = {
        name: formData.name,
      };
      this.saveForm(payload);
    }
  }

  saveForm(payload: object) {
    this.loading = true;
    const apiEndpoint = this.isEditMode
      ? `api/districts/${this.data.district_id}`
      : 'api/districts';
    const httpMethod = this.isEditMode ? 'put' : 'post';
    const successMessage = this.isEditMode ? 'District Updated' : 'New District Created';
    const successDescription = this.isEditMode ? 'District updated' : 'New District created';
    const errorMessage = this.isEditMode ? 'Data Update Error' : 'Data Save Error';
    this.httpService[httpMethod](apiEndpoint, payload).subscribe({
      next: () => {
        this.loading = false;
        this.sweetAlertService.showSuccess(successMessage, successDescription);
        this.closeDialog('Data Save Or Update');
      },
      error: (error) => {
        this.loading = false;
        this.sweetAlertService.showError(errorMessage, error.error.message);
      },
    });
  }

  closeDialog(message = '') {
    this.dialogRef.close(message);
  }

  onCancel(): void {
    this.closeDialog();
  }
}
```

#### HTML: `create-update-district-dialog.component.html`
This HTML file provides the user interface for the Create-Update-District-Dialog component. It includes form fields for district name input, and buttons for submitting or canceling the form.

```html
<div class="dialog">
  <h1 mat-dialog-title class="content-title">{{ isEditMode ? 'Update District' : 'Create District' }}</h1>
  <div class="loading-container" *ngIf="loading">
    <app-loading [fullScreen]="true"></app-loading>
  </div>
  <form #formElement *ngIf="!loading" [formGroup]="districtForm" class="mt-5" (ngSubmit)="districtFormSubmit()">
    <div mat-dialog-content class="mat-dialog-content">
      <div [ngClass]="{ 'display-flex': !isMobileView, 'flex-direction-row': !isMobileView, 'flex-direction-column': isMobileView, 'justify-content-evenly': !isMobileView }" class="px-5">
        <mat-form-field appearance="outline">
          <mat-label>District Name</mat-label>
          <input matInput formControlName="name" type="text" />
          <mat-error *ngIf="districtForm.get('name')!.hasError('required')"> District Name is required </mat-error>
        </mat-form-field>
      </div>
    </div>
    <div mat-dialog-actions align="end" *ngIf="!loading" class="action-buttons mr-10">
      <div>
        <button mat-raised-button type="button" (click)="onCancel()">Cancel</button>
      </div>
      <div class="ml-3">
        <button mat-raised-button class="submit-button" color="primary" type="submit">
          {{ isEditMode ? 'Update' : 'Create' }}
        </button>
      </div>
    </div>
  </form>
</div>
```

### Side-Nav-Bar Component

#### TypeScript: `side-nav-bar.component.ts`

This component manages the side navigation bar. It handles sidebar toggling, navigation, and logging out.

**Key Features:**
- **Sidebar Management:** Controls the opening and closing of the sidebar.
- **Responsive Design:** Adjusts the sidebar behavior based on screen size.
- **Navigation:** Facilitates routing to different parts of the application.
- **Logout Functionality:** Provides a method for logging out users.

```typescript
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AuthService,
  SideNavBarService,
  LayoutService,
  SweetAlertService,
} from 'src/app/core-module';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
})
export class SideNavBarComponent implements OnInit, OnDestroy {
  screenSizeSubscription!: Subscription;
  isSidebarOpened!: boolean;
  isMobileView!: boolean;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    public authService: AuthService,
    private sideNavBarService: SideNavBarService,
    private layoutService: LayoutService,
    private router: Router,
    private sweetAlertService: SweetAlertService,
  ) {}

  ngOnInit(): void {
    this.layoutService.isHandset$.subscribe((isHandset) => {
      this.isMobileView = isHandset;
      this.isSidebarOpened = !isHandset; // Keep sidebar closed on mobile view
    });
    this.sideNavBarService.sidebarToggle$.subscribe(() =>
      this.toggleSidebar()
    );
  }

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  ngOnDestroy(): void {
    if (this.screenSizeSubscription) {
      this.screenSizeSubscription.unsubscribe();
    }
  }

  onKeydown(event: KeyboardEvent, url: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default behavior for space key
      this.navigateAndClose(url);
    }
  }

  closeSidebar() {
    if (this.isMobileView) {
      this.isSidebarOpened = false;
    }
  }

  navigateAndClose(url: string) {
    this.router.navigate([url]).then(() => {
      this.closeSidebar();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']).then(() => {
          window.location.reload(); // Ensure all user data and states are reset
        });
      },
      error: (err) => {
        console.error('Logout failed', err.error.message);
      },
    });
  }
}
```

#### HTML: `side-nav-bar.component.html`

This HTML file provides the structure and layout for the side navigation bar. It includes links to various sections of the application and allows users to log out.

```html
<mat-sidenav-container class="sidenav-container">
  <mat-sidenav #sidenav *ngIf="authService.hasLoggedIn()" [mode]="isMobileView ? 'over' : 'side'" [opened]="isSidebarOpened">
    <div class="sidebar-logo">
      <img src="assets/wellbility.svg" alt="Logo" />
    </div>
    <mat-nav-list>
      <mat-divider></mat-divider>
      <div class="menu-item" mat-list-item (click)="navigateAndClose('/dashboard')" (keydown)="onKeydown($event, '/dashboard')" tabindex="0">
        <div class="link-icon"><img src="assets/dashboard.svg" alt="" /></div>
        <span class="link-title">Dashboard</span>
      </div>
      <mat-divider></mat-divider>
      <div class="menu-item" mat-list-item (click)="navigateAndClose('/forms')" tabindex="0" (keydown)="onKeydown($event, '/forms')">
        <div class="link-icon"><img src="assets/testing_events.svg" alt="" /></div>
        <span class="link-title">Forms</span>
      </div>
      <mat-divider></mat-divider>
      <div *ngIf="authService.isRole('Admin') || authService.isRole('RPHN')" class="menu-item" mat-list-item (click)="navigateAndClose('/reports')" tabindex="0" (keydown)="onKeydown($event, '/reports')">
        <div class="link-icon"><img src="assets/testing_events.svg" alt="" /></div>
        <span class="link-title">Reports</span>
      </div>
      <mat-divider *ngIf="authService.isRole('Admin') || authService.isRole('RPHN')"></mat-divider>
      <div *ngIf="authService.isRole('Admin') || authService.isRole('RPHN')" class="menu-item" mat-list-item (click)="navigateAndClose('/users')" tabindex="0" (keydown)="onKeydown($event, '/users')">
        <div class="link-icon"><img src="assets/groups.svg" alt="" /></div>
        <span class="link-title">Users</span>
      </div>
      <mat-divider *ngIf="authService.isRole('Admin') || authService.isRole('RPHN')"></mat-divider>
      <div *ngIf="authService.isRole('Admin')" class="menu-item" mat-list-item (click)="navigateAndClose('/districts')" tabindex="0" (keydown)="onKeydown($event, '/districts')">
        <div class="link-icon"><img style="width: 90%" src="assets/address.svg" alt="" /></div>
        <span class="link-title">Districts</span>
      </div>
      <mat-divider *ngIf="authService.isRole('Admin')"></mat-divider>
      <div *ngIf="authService.isRole('Admin')" class="menu-item" mat-list-item (click)="navigateAndClose('/schools')" tabindex="0" (keydown)="onKeydown($event, '/schools')">
        <div class="link-icon"><img src="assets/schools.svg" alt="" /></div>
        <span class="link-title">Schools</span>
      </div>
      <mat-divider *ngIf="authService.isRole('Admin')"></mat-divider>
      <div class="menu-item" mat-list-item (click)="logout()" tabindex="0" (keydown)="onKeydown($event, '/forms')">
        <div class="link-icon"><img src="assets/logout.svg" alt="" /></div>
        <span class="link-title">Logout</span>
      </div>
      <mat-divider></mat-divider>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

## Conclusion

This documentation provides a comprehensive overview of the Angular components included in the project. Each component plays a crucial role in the application's functionality, from handling user data to managing navigation and layout. The use of Angular's powerful features such as modules, services, and Reactive Forms ensures a robust and scalable application architecture.

# Documentation for `users.component.html`

The `users.component.html` file is a template for displaying and managing user data in a table format within an Angular application. This component provides features such as viewing, creating, editing, and deleting user records. Additionally, it supports downloading the user data as a PDF.

## Structure and Components

### Main Section

- **Title and Header**
  - Displays the title "Users" at the top of the component.
  - Includes action buttons for downloading the table as a PDF and creating a new user.

```html
<section>
  <div class="display-flex">
    <div>
      <h1 class="content-title">Users</h1>
    </div>
    <div class="download-pdf"></div>
    <div class="action-buttons mb-5 ml-auto">
      <button *ngIf="allData.length" class="download-pdf-button" mat-icon-button matTooltip="Download Table" [matTooltipPosition]="'above'" (click)="printScreen()">
        <mat-icon class="print-icon">print</mat-icon>
      </button>
      <button mat-raised-button color="primary" class="submit-button" (click)="openDialog()">Create User</button>
    </div>
  </div>
</section>
```

### Loading Indicator

- Displays a loading spinner when data is being fetched or processed.

```html
<div class="loading-container" *ngIf="loading">
  <app-loading [fullScreen]="true"></app-loading>
</div>
```

### User Data Table

- Utilizes Angular Material components to create a responsive table.
- Features pagination, sorting, and dynamic actions for each user entry.

```html
<mat-card *ngIf="!loading" class="users-container">
  <div class="table-responsive">
    <table id="userTable" mat-table matSort aria-label="Elements" [dataSource]="sortedData" (matSortChange)="sortData($event)">
      <!-- Action Column -->
      <ng-container matColumnDef="action" sticky>
        <th mat-header-cell *matHeaderCellDef>Action</th>
        <td mat-cell *matCellDef="let row">
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon aria-label="user menu">more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item (click)="openDialog(row._id)">
              <mat-icon>visibility</mat-icon> View
            </button>
            <button *ngIf="!row.isDeleted" mat-menu-item (click)="onDeleteUser(row._id)">
              <mat-icon>delete</mat-icon> Deactivate
            </button>
            <button mat-menu-item (click)="onDeleteUser(row._id, true)">
              <mat-icon>delete</mat-icon> Permanent delete
            </button>
            <button mat-menu-item (click)="onResendEmailToUser(row._id)">
              <mat-icon>account_box</mat-icon> Resend Activation Email
            </button>
          </mat-menu>
        </td>
      </ng-container>

      <!-- Dynamic Columns -->
      <ng-container *ngFor="let column of displayedColumns">
        <ng-container *ngIf="column !== 'action'">
          <ng-container [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ column | capitalizeFirst }}</th>
            <td mat-cell *matCellDef="let row">{{ getColumnValue(row, column) }}</td>
          </ng-container>
        </ng-container>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  </div>
  <mat-paginator [length]="totalItems" [pageIndex]="pageIndex" [pageSize]="pageSize" [pageSizeOptions]="[50, 100, 500, 1000]" (page)="onPageChange($event)">
  </mat-paginator>
</mat-card>
```

## Key Features

- **Data Management**: Allows viewing, editing, and deleting user entries.
- **PDF Export**: Users can export the table data to a PDF file.
- **Dynamic Columns**: The table supports dynamic column generation.
- **Responsive Design**: Adjusts layout based on screen size.
- **Interactive UI**: Provides action buttons for CRUD operations and a menu for more actions.

## Usability

This component is designed for administrators or users with permissions to manage user accounts within the system. It provides a clean and efficient interface for handling multiple user-related tasks in one place.

## Documentation for `users.component.ts`

The `UsersComponent` is an Angular component that manages the display and manipulation of user data within a table. It provides functionalities for listing users, sorting, pagination, creating, updating, and deleting users. It is also integrated with the PDF and CSV export services.

### Component Overview

- **Selector**: `app-users`
- **Template**: `./users.component.html`
- **Style**: `./users.component.scss`

### Key Features

- **Displays a list of users**: Utilizes a data table to showcase user data.
- **Create, Update, and Delete Users**: Provides dialog interfaces for creating and updating users, and options for deactivating or permanently deleting users.
- **Role-Based Access**: Implements role-based data fetching and actions using the `AuthService`.
- **PDF and CSV Export**: Allows users to export the data table into PDF and CSV formats.

### Properties

- **`displayedColumns`**: An array defining the columns to be displayed in the table.
- **`dataSource`**: A `MatTableDataSource` that holds the data for the table.
- **`allData`**: Stores all users' data fetched from the server.
- **`totalItems`**: Total count of users for pagination purposes.
- **`pageSize`**: Number of items displayed per page.
- **`pageIndex`**: Current page index.
- **`sortedData`**: Holds the sorted data for the table.
- **`loading`**: Indicator for loading state.

### Methods

#### `ngOnInit()`
Initializes the component and fetches user data.

#### `printScreen()`
Generates a PDF from the current table view using `PdfConverterService`.

#### `getColumnValue(row: any, column: string): string`
Retrieves the value for a specific column in a row, with custom logic for roles and status.

#### `fetchData()`
Fetches user data from the server based on the current user’s role. It sets up the data source for the table.

#### `onPageChange(event: any)`
Handles pagination events and fetches data for the new page.

#### `sortData(sort: Sort)`
Sorts the data based on the selected column and direction.

#### `openDialog(user_id?: any)`
Opens a dialog for creating or updating a user. If a `user_id` is provided, it opens the dialog in edit mode.

#### `onDeleteUser(user_id: string, isHardDelete?: boolean)`
Handles user deletion, either soft or hard, based on the `isHardDelete` flag.

#### `onResendEmailToUser(user_id: string)`
Resends an activation email to the specified user.

### Helper Functions

#### `compare(a: number | string, b: number | string, isAsc: boolean): number`
A utility function used for sorting data based on the specified order.

### Dependencies

- **`AuthService`**: Used for authentication and role-based access control.
- **`HttpService`**: Handles HTTP requests for fetching and manipulating user data.
- **`SweetAlertService`**: Provides UI alerts for actions like deletion and errors.
- **`PdfConverterService`**: Facilitates exporting the user table to a PDF document.
- **`MatDialog`**: Angular Material service for dialog operations.

### Usage

This component is designed to be used in an administrative interface where user management is required. It leverages Angular’s Material components to provide a user-friendly interface with dynamic data handling capabilities.

--- 

This documentation provides a comprehensive overview of the `UsersComponent`, outlining its functionality, properties, methods, and dependencies for effective usage and further development.

# MaterialModule Documentation

The **MaterialModule** is an Angular module that serves as a centralized repository for importing and exporting Angular Material components. This module allows for a cleaner and more organized way to manage the imports of various Material Design components used throughout the Angular application.

## Overview

This module imports and exports a wide variety of Angular Material components, ranging from form controls to layout and navigation components. By consolidating these imports and exports into a single module, it simplifies the process of adding Material components to any part of the application.

## Contents

- **Imports and Exports**
- **Material Components**
  - Form Controls
  - Navigation
  - Layout
  - Buttons & Indicators
  - Popups & Modals
  - Data Tables
- **Custom SVG Icons**

## Imports and Exports

The module imports and exports the same set of Angular Material components, making them available to any module that imports `MaterialModule`.

```typescript
@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
})
```

## Material Components

### Form Controls

- **MatAutocompleteModule**: Provides autocomplete functionality for input fields.
- **MatCheckboxModule**: Enables the use of checkboxes.
- **MatDatepickerModule**: Allows for date selection.
- **MatFormFieldModule**: Offers a container for form controls (e.g., inputs).
- **MatInputModule**: Provides input fields.
- **MatRadioModule**: Enables radio button groups.
- **MatSelectModule**: Allows for dropdown selections.
- **MatSliderModule**: Provides a slider control.
- **MatSlideToggleModule**: Enables slide toggle button.

### Navigation

- **MatMenuModule**: Provides dropdown menus.
- **MatSidenavModule**: Offers a side navigation panel.
- **MatToolbarModule**: Allows for toolbars.

### Layout

- **MatCardModule**: Provides card layout for content.
- **MatDividerModule**: Adds dividers between content areas.
- **MatExpansionModule**: Enables expandable panels.
- **MatGridListModule**: Provides grid layouts.
- **MatListModule**: Supports list views.
- **MatStepperModule**: Allows for stepper components.
- **MatTabsModule**: Enables tabbed navigation.
- **MatTreeModule**: Provides a tree structure.

### Buttons & Indicators

- **MatButtonModule**: Offers button components.
- **MatButtonToggleModule**: Provides toggle buttons.
- **MatBadgeModule**: Adds badges to elements.
- **MatChipsModule**: Enables chip elements (e.g., for tags).
- **MatIconModule**: Allows for the use of icons.
- **MatProgressSpinnerModule**: Provides a spinner for loading operations.
- **MatProgressBarModule**: Adds a progress bar.
- **MatRippleModule**: Supports ripple effects on elements.

### Popups & Modals

- **MatBottomSheetModule**: Provides bottom sheets.
- **MatDialogModule**: Allows for dialog modals.
- **MatSnackBarModule**: Enables snackbar notifications.
- **MatTooltipModule**: Adds tooltips to elements.

### Data Tables

- **MatPaginatorModule**: Provides pagination for tables.
- **MatSortModule**: Enables sorting for tables.
- **MatTableModule**: Offers data table components.

### Custom SVG Icons

The `MaterialModule` also registers a custom SVG icon (`csv`) using Angular's `MatIconRegistry`.

```typescript
constructor(
  private matIconRegistry: MatIconRegistry,
  private domSanitizer: DomSanitizer,
) {
  this.matIconRegistry.addSvgIcon(
    'csv',
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/csv-icon.svg')
  );
}
```

## Usage

To use the Material Design components in your Angular modules, simply import the `MaterialModule`:

```typescript
import { MaterialModule } from './path-to-material.module';

@NgModule({
  imports: [
    MaterialModule,
    // other imports
  ],
})
export class SomeFeatureModule {}
```

This approach ensures that all necessary Material Design components are readily available across the application, promoting modularity and ease of maintenance.

# Documentation: `app.routing.ts`

This file is responsible for configuring the routing in an Angular application. Routing is a critical aspect of single-page applications, allowing users to navigate through different components and views seamlessly.

## Overview

The `app.routing.ts` file defines the application's routes, including their paths, associated components, and any guards used to protect certain routes. It also sets router options to enhance the user experience, such as maintaining scroll positions.

## Key Components

### Imports

- **Angular Core & Router**: 
  - `ModuleWithProviders`, `RouterModule`, `Routes`, `ExtraOptions` are imported to set up the routing.
- **Environment**: 
  - The `environment` import is used to determine the default component based on the environment configuration.
- **Components**: 
  - Various components from different modules (auth-module and feature-module) are imported for routing.
- **Guards**: 
  - `authGuard` is used to secure routes, ensuring that only authenticated users can access certain paths.

### Router Options

- **onSameUrlNavigation**: Set to `'reload'` to allow reloading of the current route.
- **scrollPositionRestoration**: Set to `'enabled'` to restore the scroll position on navigation.
- **anchorScrolling**: Enabled to allow scrolling to anchors within the page.

### Default Component

The default component is set based on the environment configuration:
- **LoginComponent**: Used if the default component is set to `'consent-form-influenza'`.
- **GetStartedComponent**: Used otherwise.

### Routes Configuration

The `routes` array defines the path-to-component mappings:

#### Root Redirection

- Redirects from `''` to `'/'`.

#### Basic Layout

- **Component**: `BasicLayoutComponent`
- **Guard**: `authGuard` (applies to child routes)
- **Child Routes**:
  - `login`: Renders `LoginComponent`.
  - `password-reset`: Renders `PasswordResetComponent`.
  - `password-reset/:token`: Renders `PasswordResetComponent` with a token parameter.
  - `consent-form-influenza`: Renders `ConsentFormComponent`.

#### Side Navigation Layout

- **Component**: `SideNavLayoutComponent`
- **Guard**: `authGuard` (applies to child routes)
- **Child Routes**:
  - `dashboard`: Renders `DashboardComponent`.
  - `forms`: Renders `ConsentFormsComponent`.
  - `consent-form/:id`: Renders `ConsentFormComponent` with an ID parameter.
  - `image-consent-form/create`: Renders `ConsentFormWithImageComponent`.
  - `image-consent-form/create-and-complete`: Renders `ConsentFormWithImageComponent`.
  - `consent-form/update/:form_id`: Renders `ConsentFormWithImageComponent` for updating forms.
  - `print-form/:formId`: Renders `PrintConsentFormComponent`.
  - `users`: Renders `UsersComponent`.
  - `schools`: Renders `SchoolsComponent`.
  - `districts`: Renders `DistrictsComponent`.
  - `reports`: Renders `ReportsComponent`.

#### Fallback

- Any unspecified path (`'**'`) redirects to `login`.

### Export

The `routing` constant is exported using `RouterModule.forRoot()`, which initializes the router with the defined routes and options.

## Conclusion

This routing configuration enables a structured navigation throughout the application, ensuring that users are directed to the appropriate components based on their actions and authentication status. By using guards and setting router options, the application can maintain a smooth and secure user experience.

# CapitalizeFirstPipe Documentation

## Overview
The `CapitalizeFirstPipe` is an Angular pipe designed to transform camelCase strings into a more human-readable format by splitting words and capitalizing the first letter of the resulting sentence. This pipe is particularly useful for formatting component names or data properties that follow camelCase naming conventions, making them more understandable in the user interface.

## Usage
This pipe can be used in Angular templates to transform and display camelCase strings into a more readable format. It can be applied directly within interpolation or attribute bindings in your HTML templates.

### Example
```html
<p>{{ 'camelCaseExample' | capitalizeFirst }}</p>
```
The above usage will transform and display as: `Camel Case Example`.

## Implementation Details

### Pipe Definition
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizeFirst' })
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    
    // Split the camelCase into separate words
    const result = value.replace(/([A-Z])/g, ' $1');
    
    // Capitalize the first letter of the result
    const capitalized = result.charAt(0).toUpperCase() + result.slice(1);
    return capitalized;
  }
}
```

### Key Functionalities
- **Splitting CamelCase:** The pipe uses a regular expression to identify uppercase letters within a string and inserts a space before each one. This effectively splits the camelCase string into separate words.
- **Capitalization:** After splitting, the first letter of the entire result is capitalized to ensure proper sentence casing.
- **Handling Edge Cases:** If the input value is `null` or an empty string, the pipe simply returns the value without any transformation.

## Benefits
- **Readability:** Makes camelCase strings more user-friendly by adding spaces and capitalizing the first letter.
- **Reusability:** Can be reused across multiple components and templates within the Angular application.
- **Simplicity:** Provides a simple and effective way to enhance the presentation of camelCase data properties in the UI.

## Conclusion
The `CapitalizeFirstPipe` is a handy tool for formatting camelCase strings into a more understandable format. It is easy to use and integrate into Angular applications, enhancing the clarity of displayed data with minimal effort.

# Documentation for `format-datepicker.ts`

This documentation provides an overview and explanation of the `format-datepicker.ts` file, which customizes the date formats used in Angular Material datepickers. This file is crucial for applications that require custom date formats when using Angular Material's datepicker component.

## Overview

The `format-datepicker.ts` consists of a custom date adapter class named `AppDateAdapter` that extends the `NativeDateAdapter` provided by Angular Material. This extension allows for custom formatting of dates, specifically for display in input fields. The file also defines a set of date formats under the constant `APP_DATE_FORMATS`.

## Code Breakdown

### Import Statements

- **NativeDateAdapter** and **MatDateFormats**: These are imported from `@angular/material/core` and are essential for creating a custom date adapter.
- **Injectable**: Imported from `@angular/core`, this decorator marks the `AppDateAdapter` as a service that can be injected into other parts of the application.

### Custom Date Adapter: `AppDateAdapter`

```typescript
@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: string): string {
    if (displayFormat === 'input') {
      let day: string = date.getDate().toString();
      day = +day < 10 ? '0' + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? '0' + month : month;
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }
    return date.toDateString();
  }
}
```

- **Purpose**: The `AppDateAdapter` class is responsible for overriding the default format method of the `NativeDateAdapter`.
- **Method - `format`**:
  - **Parameters**:
    - `date: Date`: The date object to be formatted.
    - `displayFormat: string`: The format type, which in this implementation, checks specifically for the 'input' format.
  - **Functionality**: 
    - When the `displayFormat` is 'input', the date is formatted as `MM/DD/YYYY`.
    - If the `displayFormat` is not 'input', it defaults to using the `Date.toDateString()` method.

### Date Format Constants: `APP_DATE_FORMATS`

```typescript
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};
```

- **Purpose**: The `APP_DATE_FORMATS` constant defines custom parsing and display formats for dates.
- **Structure**:
  - **parse**: Specifies how the date input should be parsed. Here, it's set to use a short month, numeric year, and numeric day.
  - **display**: Specifies various display formats:
    - `dateInput`: Uses 'input' which refers to the custom format defined in `AppDateAdapter`.
    - `monthYearLabel`, `dateA11yLabel`, `monthYearA11yLabel`: These provide custom formats for accessibility and month/year label display.

## Usage

To use these custom date formats, you need to provide the `AppDateAdapter` and `APP_DATE_FORMATS` in your Angular module where you configure Angular Material's datepicker.

```typescript
import { APP_DATE_FORMATS, AppDateAdapter } from './path-to/format-datepicker';

@NgModule({
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class YourModule {}
```

## Conclusion

The `format-datepicker.ts` file is a straightforward yet powerful configuration for managing date formats in Angular Material applications. By customizing date display formats, it enhances user experience and ensures that date inputs align with project requirements.

# Documentation for `shared.module.ts`

This document provides a comprehensive overview and understanding of the `shared.module.ts` file, which is part of an Angular application. This module aggregates and exports common functionalities and utilities that are reusable across different parts of the application.

## Overview

The `SharedModule` is designed to contain and export common components, directives, and pipes that are shared across multiple modules in the application. This helps in maintaining DRY (Don't Repeat Yourself) principles by centralizing commonly used code.

## Imports

Below is a table summarizing the different modules and components imported into the `SharedModule`:

| Module/Component           | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `CommonModule`             | Provides common directives like `ngIf` and `ngFor`.                         |
| `FormsModule`              | Angular module for template-driven forms.                                   |
| `ReactiveFormsModule`      | Angular module for reactive forms.                                          |
| `MatToolbarModule`         | Provides Angular Material toolbar component.                                |
| `MatIconModule`            | Provides Angular Material icon component.                                   |
| `MatButtonModule`          | Provides Angular Material button component.                                 |
| `MatMenuModule`            | Provides Angular Material menu component.                                   |
| `MatProgressSpinnerModule` | Provides Angular Material progress spinner component.                       |
| `MatInputModule`           | Provides Angular Material input component.                                  |
| `MaterialModule`           | Custom module encapsulating Angular Material modules for streamlined imports. |
| `AppDateAdapter`           | Custom date adapter for date formatting.                                    |
| `APP_DATE_FORMATS`         | Custom date formats for date input and display.                             |
| `DateAdapter` & `MAT_DATE_FORMATS` | Angular tokens for providing custom date adapter and formats.          |

## Declarations

### Components

- **`HeaderComponent`**: A component that likely serves as the header across different views in the application. It might include navigation links, branding, or user account controls.
  
- **`LoadingComponent`**: A reusable component that represents a loading spinner or indicator, useful for showing loading states.

### Pipes

- **`CapitalizeFirstPipe`**: A custom pipe that capitalizes the first letter of a given input string. It helps in formatting text uniformly across the application.

## Providers

- **`DateAdapter`**: Uses the custom `AppDateAdapter` class for handling date formatting. It overrides the default date adapter provided by Angular Material.

- **`MAT_DATE_FORMATS`**: Uses the custom date formats defined in `APP_DATE_FORMATS` for displaying and parsing dates.

## Exports

The `SharedModule` exports the following modules and components for use in other modules:

- Common Angular modules like `CommonModule`, `ReactiveFormsModule`, and `FormsModule`.
- Angular Material components for toolbars, buttons, menus, and inputs.
- Custom components like `LoadingComponent`.
- The `CapitalizeFirstPipe` for use in templates throughout the application.

## Summary

The `SharedModule` is a fundamental part of the application, providing a centralized collection of reusable components, pipes, and utilities. By exporting commonly used modules and functionalities, it promotes code reuse and consistency across the application. This setup not only simplifies imports in other modules but also ensures that shared logic is maintained in a single place, thereby enhancing maintainability and reducing redundancy.

# Documentation for `header.component.ts`

The `header.component.ts` file is an Angular component that defines the logic and metadata for the header section of the application. This component is part of the shared module and is used to display the header across the application.

## Overview

The header component acts as a reusable UI component that can be included in different parts of the application to provide a consistent top navigation bar or header section.

## Component Decorator

The `@Component` decorator is used to define the metadata for the component. It specifies the selector, template URL, and style URLs for the component.

```typescript
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
```

### Properties of the Decorator

- **selector**: `'app-header'`  
  This defines the custom HTML tag that can be used in the templates to include this component.

- **templateUrl**: `'./header.component.html'`  
  Specifies the path to the HTML template file for the component. This file contains the structure and layout of the header.

- **styleUrls**: `['./header.component.scss']`  
  Specifies the path to the SCSS file that contains the styles for the header component. This allows the component to have its own styling.

## Component Class

The `HeaderComponent` class is very straightforward in this context as it currently does not contain any properties, methods, or lifecycle hooks.

```typescript
export class HeaderComponent {}
```

### Key Points

- **Simple Structure**: The `HeaderComponent` class doesn't have any logic, indicating that all the necessary functionalities are either handled by other components, services, or it's simply a presentational component at the moment.

- **Reusability**: This component can be easily reused across different parts of the application to display a consistent header.

## Usage

To use the `HeaderComponent` in any Angular template, you can simply include its selector in the HTML:

```html
<app-header></app-header>
```

This will render the header as defined in the `header.component.html` file with styles applied from `header.component.scss`.

## Conclusion

The `HeaderComponent` serves as a foundational part of the application's UI, providing a consistent header across various pages. It leverages Angular's component architecture to encapsulate the header's structure, styling, and potential functionality, making it easy to manage and reuse throughout the application.

# Documentation for `header.component.html`

The **Header Component** serves as the top navigation bar of the application interface, providing users with easy access to various functionalities. Here's a detailed breakdown of the structure and functionality of the `header.component.html` file.

## Overview

This component utilizes Angular Material's `MatToolbar` to offer a consistent, responsive, and aesthetically pleasing header for the application. It includes navigation buttons, a logo, and user interaction elements like menus.

## Structure

Below is a detailed explanation of the HTML elements and their purposes:

### HTML Elements

```html
<mat-toolbar
  class="header-container"
  color="primary"
  fxLayout="row"
  fxLayoutAlign="start center"
  fxLayoutGap="36px"
  aria-hidden="true"
  tabindex="-1"
>
  <div aria-hidden="true">
    <button mat-icon-button>
      <mat-icon> keyboard_backspace </mat-icon>
    </button>
    <img src="assets/wellbility_white_TM_6.png" class="logo" alt="Wellbility Logo" tabindex="-1" />
    <span fxFlex></span>
    <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="24px">
      <button mat-icon-button>
        <mat-icon aria-label="admin dashboard"> settings </mat-icon>
      </button>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon aria-label="user menu"> more_vert </mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item routerLink="/about">
          <mat-icon> info </mat-icon> About
        </button>
        <button mat-menu-item>
          <mat-icon> exit_to_app </mat-icon> Logout
        </button>
      </mat-menu>
    </div>
  </div>
</mat-toolbar>
```

### Key Components and Functionalities

- **`<mat-toolbar>`**: The main container for the header, styled with a primary color.
  - `fxLayout="row"`: Ensures that the child elements are arranged horizontally.
  - `fxLayoutAlign="start center"`: Aligns items to the start of the toolbar and centers them vertically.
  - `fxLayoutGap="36px"`: Adds spacing between child elements.
  
- **Back Navigation Button**:
  - **`<button mat-icon-button>`**: Provides a back navigation button using a `keyboard_backspace` icon. This button is currently not linked to any functionality but serves as a placeholder for potential future use.

- **Logo**:
  - **`<img>`**: Displays the Wellbility logo, which serves as a visual identity for the application.

- **User Interaction Section**:
  - **Settings Button**:
    - **`<button mat-icon-button>`**: A placeholder icon button for settings, using the `settings` icon.
    
  - **User Menu**:
    - **`<button mat-icon-button [matMenuTriggerFor]="menu">`**: Triggers a menu using the `more_vert` icon.
    - **`<mat-menu>`**: Provides a dropdown menu with options for navigation and user actions.
      - **About Button**:
        - **`<button mat-menu-item routerLink="/about">`**: Navigates to the "About" page when clicked.
      - **Logout Button**:
        - **`<button mat-menu-item>`**: Placeholder for logout functionality.

### Accessibility

- **`aria-hidden="true"`**: Indicates that the toolbar is hidden from accessibility tools. This could be revisited to ensure better accessibility.
- **`tabindex="-1"`**: Removes the elements from the tab order, which may be intentional to prevent focus but should be considered if interactivity is required.

### Styling and Responsiveness

The component is styled to be responsive using Angular Flex Layout directives (`fxLayout`, `fxLayoutAlign`, `fxLayoutGap`) to ensure it adapts well across different screen sizes.

## Conclusion

The `header.component.html` provides a structured and styled header component utilizing Angular Material and Flex Layout for a responsive design. It includes placeholders for navigation and user menu, which can be expanded with functional logic as needed.

# Loading Component Documentation

The **LoadingComponent** is a simple Angular component used to display a loading indicator, often used to indicate that a process is ongoing or data is being fetched. This component can be configured to either cover the full screen or a specific part of the screen, enhancing user experience during data loading times.

## Component Overview

### Selector
- **`app-loading`**

### Purpose
- Display a loading spinner.
- Indicate ongoing processes like data fetching or processing.

### Key Features
- Configurable to be full-screen or contained within its parent element.
- Simple and lightweight, suitable for various parts of the application.

## Properties

| Property   | Type    | Default     | Description                                        |
|------------|---------|-------------|----------------------------------------------------|
| `fullScreen` | `boolean` | `false`     | Determines if the loading indicator should cover the full screen or just its container. |

## Usage

The component is primarily used within other components to provide visual feedback during asynchronous operations. Below is an example of how to use the **LoadingComponent** within a template:

```html
<!-- Usage in a template, assuming async operation is in progress -->
<app-loading [fullScreen]="true"></app-loading>
```

### Example Scenario

Suppose you have a data-intensive operation, such as fetching user data from a remote server. You can use the **LoadingComponent** to inform users that the application is processing their request.

```typescript
@Component({
  selector: 'app-user-data',
  template: `
    <div *ngIf="loading">
      <app-loading [fullScreen]="true"></app-loading>
    </div>
    <div *ngIf="!loading">
      <!-- User data content -->
    </div>
  `,
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {
  loading = true;

  // Assume fetchData() is a method that fetches data from a server
  fetchData() {
    // Simulate async operation
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
```

## Design Considerations

- **Accessibility**: Use ARIA roles and attributes if necessary to ensure that the loading component is accessible to all users, including those using assistive technologies.
-

# Loading Component HTML Documentation

The `loading.component.html` file defines the structure for a loading spinner component in an Angular application. This component is used to visually indicate to users that a process or page is loading. Below, you'll find a detailed explanation of its structure and functionality.

## Overview

The loading component consists of a single `div` element that conditionally applies a CSS class based on the component's `fullScreen` property. Within this `div`, there is a Material Design progress spinner that serves as the visual indicator of loading.

## HTML Structure

```html
<div [ngClass]="{ 'full-screen': fullScreen }">
  <mat-progress-spinner
    color="primary"
    diameter="50"
    mode="indeterminate"
    aria-label="Page is loading"
  >
  </mat-progress-spinner>
</div>
```

### Elements and Attributes

- **Div Element**: 
  - The outer `div` is used to contain the spinner and potentially apply styling that makes the spinner cover the full screen if the `fullScreen` input is set to `true`.

- **ngClass Directive**:
  - `[ngClass]="{ 'full-screen': fullScreen }"`: This Angular directive dynamically adds the `full-screen` class to the `div` if the `fullScreen` property is `true`. This is useful for styling the spinner to cover the entire screen.

- **mat-progress-spinner**:
  - `color="primary"`: Sets the spinner's color to the primary theme color.
  - `diameter="50"`: Sets the diameter of the spinner to 50 pixels, controlling its size.
  - `mode="indeterminate"`: The spinner continuously animates, indicating an ongoing process with no definite endpoint.
  - `aria-label="Page is loading"`: Provides an accessible label for screen readers, indicating that the page is loading.

## Usage

This component is intended to be used wherever a loading indicator is needed in the application. It can be placed within other components or views to show a loading state.

### Example Usage

```html
<app-loading [fullScreen]="true"></app-loading>
```

In the example above, the loading spinner will cover the entire screen, useful for global loading states like page transitions or data fetching.

## Styling

The component relies on CSS classes to control its appearance. For instance, the `full-screen` class would be defined in the component's CSS file (`loading.component.scss`) to apply styles that position the spinner in the center of the screen and ensure it covers the full viewport.

By using Angular Material's `mat-progress-spinner`, the component benefits from Material Design aesthetics, ensuring consistency with other Material components in the application.

