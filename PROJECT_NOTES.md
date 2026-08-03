# Project Setup Notes  08/03/2026
## Why did we create folders like assets/css/js?

------------------------------------------------
                     HEADER
Logo       Home  Inventory  About       Button

------------------------------------------------
                HERO SECTION

Text Content                 Car Image

Drive Your Dream Car          🚗

Description

[Explore Inventory]

------------------------------------------------
             FEATURED VEHICLES

            Car     Car     Car
------------------------------------------------
                    ABOUT
------------------------------------------------
                   CONTACT
------------------------------------------------
                   FOOTER
------------------------------------------------

We separate files based on their responsibilities.
CSS files contain styling, JavaScript files contain functionality,
and assets contain images and other resources.

This structure makes the project easier to maintain and scale.

New project: north-motors

├── index.html
├── README.md

└── assets
├── css
│   ├── style.css
│   ├── variables.css
│   └── responsive.css
│
├── js
│   ├── app.js
│   ├── menu.js
│   └── slider.js
│
├── images
└── icons

## Git Initialization

Git is used for version control.
It tracks changes in the project and allows us to create different versions.

Commands used:

git init
git add .
git commit -m "Create project structure"


Now we start Phase 2: Header & Navigation.


# North Motors Interview Notes


## Header Structure

I created a semantic HTML header section using a header element,
navigation element, and reusable container structure.

The purpose of this structure is to improve accessibility,
maintainability, and scalability.


## CSS Flexbox

I used CSS Flexbox for the header layout.

Flexbox helps align elements horizontally and distribute space
between the logo, navigation menu, and call-to-action button.

Where do you include CSS files in HTML?
I include external CSS files inside 
the <head> section using the <link> tag. 
This allows the browser to load styles before
rendering the page and keeps the structure clean and maintainable.



Now we continue with Phase 3: Hero Section.

This is one of the most important parts of 
the website because it is the first impression. 
A luxury website usually has a strong hero section:
------------------------------------------------
|                                              |
|  Luxury Vehicles                             |
|  Experience Performance & Elegance           |
|                                              |
|  [Explore Inventory]                         |
|                                              |
|                         Car Image            |
|                                              |
------------------------------------------------

Today we build:
✅ Hero HTML structure
✅ Basic CSS layout
✅ Professional naming
✅ Interview notes

Step 1 — Update index.html
Inside <body>, after the </header> add this:

