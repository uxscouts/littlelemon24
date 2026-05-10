Hello, this is my version of the Little Lemon Booking App. The Little Lemon Restaurant is a mythical place that is used in many of the Coursera certificate programs and mine was the Coursera Front-End Developer Certificate created by META. 

Instructions for download:

If you want to download this repository and open it in your VS Code that is fine. 

[1] Download to your machine or clone this repository into your GitHub

[2] Use terminal to go into home directory and run 'npm install'. This will install all the node-modules defined in the package.json. BTW it is a good policy to delete the package.lock.json first, a new one will be created when you run 'npm install'.

[3] To open in browser (from the root directory) run 'npm run dev'.

General Thoughts About This Project:

Gosh that was a lot of work! The hardest part for me was making tests. I created many many failed attempts of test the Booking Form but finally was able to test each field wilth both bad data and good data. I can tell that creating test is going to be an ongoing challange. 

Another conceptual problem for me was understanding how values are passed from parent componet to child component via functions created in the parent component! Dispatcher was very helpful in terms of essentially broadcasting values to any nested component but I am a little mistrustful of the mysteries of this magic. How does it even do that? Should be we even using tools that we don't know the underlying technology? 

I also struggled with the difference between local state and global state, with useState vs. useReducer but by the end of the project came to understand the benefits of both and their advantages, useState for simple values and useReducer for complex, nested data.


