// Here we import express to create our 'server/API' using ES6 syntax.
import express from 'express'

// Create our "app" using express as a backend.
const app = express()

// Allow our backend to extract the body from HTTP POST/PUT requests.
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// A very simple Router to allow us to get information from our server/API.
const router = express.Router()
// Loading localhost:3001/ will direct you to this root '/' route.
router.get('/bob', (req, res) => {
  // Here we create a variable named 'helloWorld' that holds an object.
  const helloWorld = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'This is pretty cool.'},
    {id: 3, message: 'You got this working!'},
    {id: 4, message: 'Amazing job!'}
  ]
  // We return the object in JSON to the calling point (Our browser).
  res.json(helloWorld)
})

// Tells our app to use the provided router we just made.
app.use(router)

// Tells our app what port to use.
// If a port is provided as a env variaible then use that, or else just use 3001.
app.set('port', (process.env.PORT || 3001))

// Now the app is activly listening for requests. It verifys this with a console.log.
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
