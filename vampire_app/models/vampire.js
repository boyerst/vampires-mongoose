const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vampireSchema = new Schema ({
	name: String,
  	hair_color: {
  		type: String,
  		default: 'blonde'
  	},
  	eye_color: String,
  	dob: Date,
  	loves: Array,
  	location: String,
  	gender: String,
  	victims: {
  		type: Number,
  		minimum: 0
  	},
})


const Vampire = mongoose.model('Vampire', vampireSchema)


console.log("\nthis is the Tweet model we created")
console.dir(Vampire)

module.exports = Vampire