Hello, this is my version of the Little Lemon Booking App. The Little Lemon Restaurant is a mythical place that is used in many of the Coursera certificate programs and mine was the Coursera Front-End Developer Certificate created by META. 

Instructions for download:

If you want to download this repository and open it in your VS Code that is fine. 

[1] Download to your machine or clone this repository into your GitHub

[2] Use terminal to go into home directory and run 'npm install'. This will install all the node-modules defined in the package.json. BTW it is a good policy to delete the package-lock.json first, a new one will be created when you run 'npm install'.

[3] To open in browser (from the root directory) run 'npm run dev'.

General Thoughts About This Project:

Gosh that was a lot of work! The hardest part for me was making tests. I created many failed tests for the Booking Form but finally was able to test each field wilth both good dand bad data.  

Another conceptual problem for me was understanding how values are passed from parent componet to child component via functions created in the parent component. Dispatcher was very helpful in terms of essentially broadcasting values to any nested component. Coursera and online texts kept refering to placing the booking form logic in Main but some people conisdered main to be the booking parent page and not the actual main.jsx.  I used main.jsx first and then swtiched logic to the booking parent page instead. 

I also struggled with the difference between local state and global state, with useState vs. useReducer but by the end of the project came to understand the benefits of both and their advantages, useState for simple values and useReducer for complex nested data.

My version of Little Lemon Booking site is a little different. I really wanted the comfirmation page, the page a user is redirected to, to be nice looking and comprehensive. I passed the booking data from the redirect function to the confirmation page and struggled to figure out how to map through the array of booking objects. I think it turned out nice!

In closing I would say thank you to Coursera and to META. This is a great training certification! I feel confident that I can start making completely functional web apps.


