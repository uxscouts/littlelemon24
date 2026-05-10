Hello, this is my version of the Little Lemon Booking App. The Little Lemon Restaurant is a mythical place that is used in many of the Coursera certificate programs and mine was the Coursera Front-End Developer Certificate created by META. 

Instructions for download:

If you want to download this repository and open it in your VS Code, that is fine. 

[1] Download to your machine or clone this repository into your GitHub

[2] Use terminal to go into home directory and run 'npm install'. This will install all the node-modules defined in the package.json. BTW, it is a good policy to delete the original package-lock.json first. A new one will be created when you run 'npm install'.

[3] To open in browser (from the root directory) run 'npm run dev'.

General Thoughts About This Project:

Gosh that was a lot of work! The hardest part for me was making tests. I created many failed tests for the Booking Form but finally I was able to successfully test good and bad data.

Another conceptual problem for me was understanding how values are passed from parent to child component via functions created in the parent component. Dispatcher was very helpful in terms of essentially broadcasting values to any nested components.  

I also struggled with the difference between local state and global state, with useState vs. useReducer but by the end of the project I came to understand the benefits of both and their usage, useState for simple values and useReducer for complex nested data.

For the form submission I kept getting the alert first before the values were added to the booking array but then I learned about using 'await' and being in control of the what happens and when.

Why My Little Lemon is Different:

My version of Little Lemon Booking site is a little different. I really wanted the comfirmation page to be nice looking and comprehensive. I passed the booking data from the redirect function to the confirmation page and struggled to figure out how to map through the array of booking objects. Finally I learned how and I think it turned out nice!

In closing I would like to say "thank you" to Coursera and to META. This is a great training program! They really have the teaching methods down with a variety formats, lecture, reading, quizes, tests and really amazing AI chats - like talking to a real person. 

I feel confident I have a strong foundational knowledge of React and can start making cool digital products very soon.

