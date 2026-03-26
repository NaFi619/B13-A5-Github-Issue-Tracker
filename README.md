
1️⃣ What is the difference between var, let, and const?
Think of these as three different types of boxes to store your data in:

const : Putting something in, lock it, and cannot swap it out for something else later. 

let : Putting something in, take it out, and replace it with something new whenever wanted. 

var : This is the old way of doing things from the 90s. It has weird rules and sometimes "leaks" data into parts of your code where it doesn't belong. 

2️⃣ What is the spread operator (...)?
It is literally an "unboxing" tool.
For Example, I have an array of groceries: ['apples', 'bananas']. If I use the spread operator (...groceries), it rips off the brackets and dumps the raw items out. It’s the easiest way to copy an array or merge two lists together without accidentally connecting them.

3️⃣ What is the difference between map(), filter(), and forEach()?

forEach() is the Worker: It goes down the list and does a task for each item (like building an HTML card). It doesn't give anything back.

filter() is the Bouncer: It checks every item against a strict rule. If the item passes (e.g., status === "open"), it gets let into a brand new array.

map() is the Translator: It takes your array, changes every single item based on instructions give it, and hands back a brand new array of the exact same size.

4️⃣ What is an arrow function?
It’s just a modern, lazy (in a good way!) shorthand for writing functions.
Instead of typing the word function() { } over and over, you just write () => { }. It saves keystrokes, looks much cleaner, and is exactly what I used for your const displayIssues = (issues) => { function!

5️⃣ What are template literals?
It’s the ultimate "glue" for text and variables.
Instead of doing annoying math to combine strings like "Hello " + name + ", today is " + day, you wrap your text in backticks (`). This lets you drop variables directly into the sentence using ${ }. I used this masterfully to inject things like ${details.title} straight into your modal HTML!

