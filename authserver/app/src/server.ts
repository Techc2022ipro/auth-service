import express from "express";

const app = express();
app.use(express.json());

app.listen(1000, () => {
    console.log('now listening to 1000')
})
