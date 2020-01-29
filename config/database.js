const mongoose = require('mongoose')

// db configuration
const configureDB =  () => {
    mongoose.connect('mongodb://localhost:27017/notes-app-redux', { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected to Datatbase')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB
