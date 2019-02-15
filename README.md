# GreenSpot

A web app that finds vegan pop-ups and vendors in a Los Angeles. A vendor can sign up using their Google account, create, edit and delete their profile page. When a vendor inputs an address, a marker will be placed on Google Maps. When a user clicks "Who's out tonight?" they are taken to a list of vendors who are that night with their location.

![Image 3](https://i.imgur.com/1719lWb.png)


```
GreenSpot was built in 5 days by:

Brent Ahrens - Designer, Front-End Developer / Mobile Responsiveness

Michael Siller - Git Mananger, Back-end Manager, Heroku Master

Abraham Hsu -  API Manager / Documentation / Front-End & Back-end
```
![Image 2](https://i.imgur.com/jw092to.png)



# Technology Used

* HTML
* CSS
* Javascript
* Google Maps & Geocode API
* ReactJS
* Mongoose
* MongoDB (NoSQL Database)
* Express
* Node
* Passport
* Google OAuth 2
* Websockets.io
* Heroku

#  Getting Started
LOGGING IN: Only meant for vendors. Need  Google account to sign up as vendor.
When vendor signs up for the first time, vendor will be presented a vendor profile page, where they'll fill out Vendor Name, address(required), website, or images of their food (optional). 

VENDOR PROFILE:
Once vendor has completed their profile page, website will redirect to their Show page, showing their location for the night. Vendor can freely edit their address, and the Google Map location will update immediently and be available for visitors of the website to see.

WEBSITE VISITORS:
Upon visiting the landing page, visitors are greeted with images of delicious vegan food. Visitors can click on the button "Who's Out Tonight?" and be redirected to a list of Vendors who are out for the night. 

Upon clicking a vendor, visitor will be redirected to the Vendor Show page, which displays additional information about the vendor: Vendor name, current address, food images, and a marker within Google Maps. 

# Challenges
* Having 2 or more models makes it much more complicated; had to reduce down to 1 model with Passport
* Went to Git Hell a couple times; many merge conflicts, but overcame it every time with a strict system 
* Google Map and Geocode API Integration, placing all Vendor markers in a specified city

# Upcoming Features
* Add ability for Users to review, comment, and post pictures for each Vendor
* Ability for Vendors to UPLOAD images of their food and menu
* Ability for vendors to set scheduling
* Markers on Google maps should disappear if Vendor sets up for a set limited amount of time
* Expands upon authoriziation: Add a normal login page. also add Login with Facebook, Github, Instagram.
* Pull from Instagram API to display additional Vendor pictures
* Make Edit Page so it shows current values.
* Make it when user searches in the map, current vendors show up as markers


Doing research at at York in Los Angeles! Consuming all the vegan food spots and asking vendor if they would be interested in our app.
![Image 1](https://i.imgur.com/9kYOH7V.png)


