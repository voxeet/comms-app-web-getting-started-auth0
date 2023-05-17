# Dolby.io Communications Web SDK -- Getting Started with User Authentication using Auth0

This starter project demonstrates the mechanics of making a Voice and Video Call with Dolby.io and allowing only authenticated users to access to your application using Auth0's Universal Login Page.

## Running the Sample Application

The sample can be run locally, by cloning the repository to your machine and then following the steps below.

### Create a free Auth0 account and set a Single Page Application

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login or create a new account with your email.
3. Get Your Application Keys:
  When you signed up for Auth0, create a new application either using Getting Started or Applications tabs. You will need some details about that application to communicate with Auth0. You can get these details from the Application Settings section in the Auth0 dashboard.
  <img src="./assets/getting-started.png"  width="50%" height="30%"> <img src="./assets/applications-tab.png"  width="50%" height="30%">

<img src="./assets/create-application.png"  width="70%" height="50%">

4. You will use the Domain  & Client ID information to fill the `auth_config.json` with the Dolby.io credentials that you'll learn how to obtain in the next steps.

   <img src="./assets/auth0-credentials.png"  width="70%" height="50%">

5. Configure Callback URLs:
If you are following along with the sample project you downloaded from the top of this page, you should set the Allowed Callback URL to http://localhost:3000 if you don't want to specify a conference alias. It'll automatically set it to `web-sdk-starter`. If there's a conference alias you would like to give as a query parameter in the URL, add http://localhost:3000/?alias=*  to the Callback URLs.

    <img src="./assets/app-urls.png"  width="70%" height="50%">

6. Configure Logout URLs: If you are following along with the sample project you downloaded from the top of this page, the logout URL you need to add to the Allowed Logout URLs field is http://localhost:3000.

7. Configure Allowed Web Origins: If you are following along with the sample project you downloaded from the top of this page, you should set the Allowed Web Origins to http://localhost:3000.

### Specifying Auth0 and Dolby.io Credentials

To specify the application client ID and domain, make a copy of `auth_config.json.example` and rename it to `auth_config.json`. Then open it in a text editor and supply the values for your application:
 
- For DOMAIN and CLIENT_ID, you will use the information you get in the step 4.

To get creditentials from Dolby.io, first create a free account. After you login, go to Communications & Media tab and create an app. Copy the App key and App secret and fill the `auth_config.json` with related information.

 <img src="./assets/dolby-dashboard.png"  width="70%" height="50%">

```json
{
  "DOMAIN": "{AUTH0_DOMAIN}",
  "CLIENT_ID": "{AUTH0_CLIENT_ID}",
  "APP_KEY" : "{DOLBY_IO_APP_KEY}",
  "APP_SECRET" : "{DOLBY_IO_APP_SECRET}"
}
```
### Create Users
To test the application go to Auth0 Dashboard, User Management and create new users. We will use these users' login information when we're running the app.

 <img src="./assets/users.png"  width="70%" height="50%">

### Installation

After cloning the repository, run:

```bash
$ npm install
```
to  install the dependencies that are necessary to get the server up and running.
Also install nodemon so that our server can be restarted on any code changes:
```bash
$ npm install  -D nodemon
```
This will install all of the necessary packages in order for the sample to run.

### Running the Application

This version of the application uses an [Express](https://expressjs.com) server that can serve the site from a single page. To start the app from the terminal, navigate to ./video-calls/final directory and use one of the run methods below:

This will run the application using nodemon, watching for changes as we modify files.

```bash
$ npm run dev
```
This will run the application as normal using node.

```bash
$ npm start
```

### Demo 

You should see your application running succesfully and only letting authenticated users to access the video call after following the previous steps. 

<img src="./assets/demo.gif"  width="70%" height="50%">

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.

## Learn More

For more information about Dolby.io Communications Web SDK, visit the [Dolby.io Communications Web SDK](https://docs.dolby.io/communications-apis/docs/js-overview) documentation.

For more information about Auth0 JavaScript SDK Quickstart, visit the [Vanilla JS Quickstart](https://auth0.com/docs/quickstart/spa/vanillajs/01-login) documentation. If you're having issues running the sample applications, [check the FAQ](https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md).
