// npm init -y to add our package json file
// go to the package.json and add "start": "node index.js" (so we can use npm start command inside the terminal)
// and also add "type": "module" above the scripts section so we can import
// npm install to add our node modules
// add a .gitignore file and add node_modules to that file to stop them being sent to github

// import express from the "express" module (look under dependencies for ref in the package.json file)
import express from "express"

// call the express function and assign it to a const
const app = express()
// assign a random but quiet port number to a const (ie 3000/3001 for more than one port etc)
const port = 3000

// with the app const variable, use the get function to find the / in the url, and responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//with the app const variable, use the listen function to ensure the app is listening to the port we assigned in the const variable we made earlier
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// --- Part 5 ---- //
const data =  [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'Nice to e-meet you.'}
   ]

app.get('/newpath', (req, res)=> {
    res.json(data);
  });