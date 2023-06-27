import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import {Configuration, OpenAIApi} from 'openai-api'

const app = express()


env.config()

app.use(cors())
app.use(bodyParser.json())

// configure open api
const configuration = new Configuration ({
    organization: "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",
    apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration)

// listening
app.listen("3080", () =>console.log("Server is running on port 3080"))

// dummy route to test
app.get("/", (req, res) => {
    res.send("Hello World")
})

// post route for making requests to openai
app.post('/', async (req, res) => {
    const {message} = req.body
    try {
         
        const response = await openai.complete({
        model:"text-devinci-003",
        prompt: `${message}`,
        max_tokens:100,
        temperature: .5,
        })
    res.json({message: response.data.choices[0].value})
    
    } catch(e){
        console.log(e)
        res.send(e).status(400)
    }
})