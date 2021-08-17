## npm-initial 🍜
Turn your favourite food into a delicious sentence.  


### What is this? 
This is my very first npm package created for learning purposes.

### What does it do ? 
Type in the name of your favourite food and you can see a custom message on your terminal 

### How to Install
*You will need Node.js pre-installed in your local machine for this to work.*

1. Open a terminal with the root directory in which the project resides and then type in:    

```
npm i npm-initial
```

2. Create a new file called `app.js`

3. Type in the following: 
```
const initial = require('npm-initial')


/* Grab the function by calling the initial instance with the function randomFood. Pass your favourite food in string format */

initial.randomFood('Biriyani');

```

4. Finally run the app by typing this in the terminal
```
node app.js
Biriyani is Extraordinary  //sample output
```

