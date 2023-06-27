import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import {Configuration, OpenAIApi} from 'openai-api'

const app = express()


env.config()

app.use(cors())
app.use(bodyParser.json())

app.listen("3080", () =>console.log("Server is running on port 3080"))

app.get("/", (req, res) => {
    res.send("Hello World")
})