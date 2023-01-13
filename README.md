# DoneWithIt

## Project Idea and Description

DoneWithIt is a native app designed to help people buy and sell used items on a virtual marketplace. Users can create an account, post items with pictures prices and descriptions, and browse other users' listings.

## Userstories

As a user, I want to be able to...

-   create an account
-   create a listing (title, photos, details, price)
-   message a listing owner for more details
-   remove a listing/mark as sold
-   edit my existing account details

## Tech stack

-   React
-   React Native
    -   gesture-handler
    -   progress
    -   reanimated
    -   safe-area-context
    -   screens
-   Expo
    -   image-picker
    -   location
    -   permissions
    -   status bar
-   React-navigation
    -   bottom-tabs
    -   native-stack
    -   stack
-   APIsauce
-   Formik
-   Community-icons
-   Lottie
-   Yup
-   iOS and Android emulator
-   Node.js

## screenshots

<div style='display: flex; flex-wrap: wrap; margin: 10'>
    <div style="text-align: center">
        <em>Welcome Screen</em>
        <br/>
        <img src="./app/assets/screengrabs/welcome.png"
        alt="welcome splash"
        height="300px;" />
    </div>
    &nbsp;
    <div style="text-align: center">
        <em>Login Form</em>
        <br/>
        <img src="./app/assets/screengrabs/login.png"
        alt="login screen"
        height="300px;" />
    </div>
    &nbsp;
    <div style="text-align: center">
        <em>Listings Feed</em>
        <br/>
        <img src="./app/assets/screengrabs/feed.png"
        alt="listings screen"
        height="300px;" />
    </div>
    &nbsp;
    <div style="text-align: center">
        <em>Listing Detail</em>
        <br/>
        <img src="./app/assets/screengrabs/detail.png"
        alt="listing detail screen"
        height="300px;" />
    </div>
    &nbsp;
    &nbsp;
    <div style="text-align: center">
        <em>View Image</em>
        <br/>
        <img src="./app/assets/screengrabs/viewimage.png"
        alt="view image screen"
        height="300px;" />
    </div>
    &nbsp;
    <div style="text-align: center">
        <em>New Listing Form</em>
        <br/>
        <img src="./app/assets/screengrabs/listingedit.png"
        alt="listing edit screen"
        height="300px;" />
    </div>
    &nbsp;
    <div style="text-align: center">
        <em>Account Screen</em>
        <br/>
        <img src="./app/assets/screengrabs/account.png"
        alt="account screen"
        height="300px;" />
    </div>
    &nbsp;
    <div style="text-align: center">
        <em>Messages Screen</em>
        <br/>
        <img src="./app/assets/screengrabs/messages.png"
        alt="messages screen"
        height="300px;" />
    </div>
    &nbsp;
</div>
<!-- (./app/assets/screengrabs/welcome.png) -->

## MVP Goals

-   Create all screens and reusable components
-   Use cohesive design system
-   Implement StackNavigator to move between screens
-   Ability to add photos to listings

## Stretch Goals

-   Use gesture-handler to add swipeable components
-   Implement fullstack functionality (post to database, call database to populate feed)
-   Deploy app
-   Deploy to respective app stores
