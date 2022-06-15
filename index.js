const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.lkbfxdu.mongodb.net/MERN?retryWrites=true&w=majority')

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (err) { console.log(err); }
}
start();