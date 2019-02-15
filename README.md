# GreenSpot

A web app that finds vegetarian pop-ups and vendors in a specified city. Vendor can sign up using their Google account, create, edit and delete their profile page. When a vendor inputs an address, a marker will be placed on Google Maps.

As a user, user is able to see and search in a specified city for a list of vendors that are out for the night.
```
GreenSpot was built in 5 days by:

Brent Ahrens - Designer, Front-End Developer / Mobile Responsiveness

Michael Siller - Git Mananger, Back-end Manager, Heroku Master

Abraham Hsu -  API Manager / Documentation / Front-End & Back-end
```



# Technology Used


* HTML
* CSS
* Javascript
* Google Maps API
* ReactJS
* Mongoose
* MongoDB (NoSQL Database)
* Express
* Node
* Passport
* Google OAuth 2
* Websockets.io


#  Getting Started
LOGGING IN: Only meant for vendors. Need  Google account to sign up as vendor.
When vendor signs up for the first time, vendor will be presented a vendor profile page, where they'll fill out Vendor Name, address(required), website, or images of their food (optional). 

VENDOR PROFILE:
Once vendor has completed their profile page, website will redirect to their Show page, showing their location for the night. Vendor can freely edit their address, and the Google Map location will update immediently and be available for visitors of the website to see.

WEBSITE VISITORS:
Upon visiting the landing page, visitors are greeted with images of delicious vegetarian food. Visitors can click on the button "Who's Out Tonight?" and be redirected to a list of Vendors who are out for the night. 

Upon clicking a vendor, visitor will be redirected to the Vendor Show page, which displays additional information about the vendor: Vendor name, current address, food images, and a marker within Google Maps. 

# Challenges
* Went to Git Hell a couple times; many merge conflicts, but overcame it every time with a strict system 
* Google Map and Geocode API Integration, placing all Vendor markers in a specified city
# Upcoming Features
* Add ability for Users to review, comment, and post pictures for each Vendor
* Ability for Vendors to UPLOAD images of their food and menu
* Ability for vendors to set scheduling
* Markers on Google maps should disappear if Vendor sets up for a set limit of time





