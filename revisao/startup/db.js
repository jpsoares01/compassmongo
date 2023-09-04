const mongoose = require('mongoose')
const config = require('config')

module.exports = () => {
    const db = config.get('db')
    mongoose.connect(db,  {useNewUrlParser: true, useUnifiedTopology: true}) 
        .then(() => console.log(`connected to ${db}`))
}