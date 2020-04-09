// 1. Require your node modules
const mongoose = require('mongoose')
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js')
const vampireData = require("./vampireData.js");

// 3. Connect your database and collection name
const connectionString = "mongodb://localhost:27017/vampire"

// 4. Open your mongoose connection
mongoose.connect(connectionString, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
})


mongoose.connection.on('connected', () => {
	console.log("mongoose successfully connected to DB server");
})

mongoose.connection.on('disconnected', () => {
	console.log("mongoose successfully disconnected from DB server");
})

mongoose.connection.on('error', (error) => {
	console.log("There was an error connecting to the DB")
	console.dir(error);
})
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////DO NOT UNCOMMENT THIS REMOVES ALL VAMPS FROM DB IN CASE YOU MESS UP//////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Vampire.remove({}, (err, removedVampires) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(removedVampires + "Vampires has been emptied");
// 	}
// })

//remove
//comment remove out
//run create
//rerun queries


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you


Vampire.create(vampireData, (error, createdVampires) => {
    if(error) {
        console.log("There was an error");
        console.log(error)
    } else {
        console.log("Here is the created Vampire data")
        console.log(createdVampires)
    }
})
// ### Add some new vampire data
// Vampire.create([
// {
//     name: 'Ronald McDonald',
//     dob: new Date(1870, 2, 3, 3, 3),
//     hair_color: 'brown',
//     eye_color: 'blue',
//     loves: ['milkshakes', 'McDoubles', 'playgrounds'],
//     location: 'Topeka, Kansas',
//     gender: 'm',
//     victims: 1000000000
//   },{
//     name: 'Bill Murray',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1959, 4, 21, 2, 13),
//     loves: ['golfing', 'dynamite', 'the ocean'],
//     location: 'Miami, Florida',
//     gender: 'm',
//     victims: 3
//   },{
//     name: 'Little Red Riding Hood',
//     hair_color: 'brown',
//     eye_color: 'blue',
//     dob: new Date(1820, 2, 3, 17, 17),
//     loves: ['the woods', 'her grandma'],
//     location: 'The Woods, Montana',
//     gender: 'f',
//     victims: 5000
//   },{
//     name: 'Barbara Streisand',
//     hair_color: 'brown',
//     eye_color: 'blue',
//     dob: new Date(1934, 13, 17, 2, 10),
//     loves: ['singing', 'acting', 'plastic faces'],
//     location: 'New York, New York, US',
//     gender: 'f',
//     victims: 10500
//   }
// ], (error, createdVampires) => {
//     if(error) {
//         console.log("There was an error");
//         console.log(error)
//     } else {
//         console.log("Here is the created Vampire data")
//         console.log(createdVampires)
//     }
// })
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
//1.
// Vampire.find({gender: "f"}, (error, foundVampires) => {
// 		if(error) console.log(error)
// 		else {
// 			console.log(foundVampires)
// }
// })

//2.
// Vampire.find({victims: {$gt: 500}}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//3.
// Vampire.find({victims: {$lte: 150}}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//4.
// Vampire.find({victims: {$ne: 210234}}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//5.
// Vampire.find({
	//victims: {
// 		$gt: 150,
// 		$lt: 500
// 	}
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

//1.
// Vampire.find({title: {$exists: true}}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//2.
// Vampire.find({victims: {$exists: false}}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//3.
// Vampire.find({
// 	title: {
// 		$exists: true
// 	}, 
// 	victims: {
// 		$eq: 0
// 	}}, 
// 	(error, foundVampires) => {
// 	if(error) 
// 		console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//4.
// Vampire.find({
// 	victims: {
// 		$exists: true
// 	}, 
// 	victims: {
// 		$gt: 1000
// 	}}, 
// 	(error, foundVampires) => {
// 	if(error) 
// 		console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })
/////////////////////////////////////////////////
// ### Select with OR
//1.
// Vampire.find({
// 	$or:[
// 	{location: 'New York, New York, US'},
// 	{location: 'New Orleans, Louisiana, US'}
// 	]
// }, (error, foundVampires) => {
// 		if(error) {
// 			console.log(error);
// 		} else {
// 			console.log(foundVampires);
// 		}
// })

//2.
// Vampire.find({
// 	$or:[
// 		{loves: 'brooding'},
// 		{loves: 'being tragic'}
// 	]
// }, (error, foundVampires) => {
// 	if(error) {
// 		console.log(error);
// 	} else {
// 		console.log(foundVampires);
// 	}
// })

//3.
// Vampire.find({
// 	$or: [
// 	{victims: {$gt: 1000}}, 
// 	{loves: ['marshmallows']}
// 	]
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })

//4.
// Vampire.find({
// 	$or: [
// 	{hair_color: 'red'}, 
// 	{eye_color: 'green'}
// 	]
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// }
// })
/////////////////////////////////////////////////
//### Select objects that match one of several values

//1.
// Vampire.find({
// 	$or:[
// 		{loves: 'frilly shirtsleeves'},
// 		{loves: 'frilly collars'}
// 	]
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
//	}
// })
//2. 
// Vampire.find( {loves: 'brooding' }, (error, foundVampires) => {
// 	error ? console.log(error) : console.log(foundVampires)
// })

//3.
// Vampire.find({
// 	$or: [
// 		{loves: 'appearing innocent'},
// 		{loves: 'trickery'},
// 		{loves: 'lurking in rotting mansions'},
// 		{loves: 'R&B music'}
// 	]
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// 	}
// })
//4.
// Vampire.find({loves: {$nin: ['top hats', 'virgin blood']}}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// 	}
// })

/////////////////////////////////////////////////
//### Negative Selection

//1.
// Vampire.find({ 
// 	loves: 'ribbons',
// 	eye_color: { 
// 		$ne: 'brown' 
// 	}
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// 	}
// })
//2.
// Vampire.find({
// 	location: {
// 		$ne: 'Rome, Italy'
// 	}
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// 	}
// })
//3.
// Vampire.find({
// 	loves: {
// 		$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']} 
// 	}, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// 	}
// })
//4.
// Vampire.find({
// 	victims: {
// 		$lte: 200
// 	}
// }, (error, foundVampires) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(foundVampires)
// 	}
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
//1.
// Vampire.replaceOne({
// 	'name': 'Claudia'
// },{
// 	'name': 'Eve'
// }, (error, replacedVampire) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(replacedVampire)
// 	}
// })

//TRACKING CLAUDIA --> EVE:
// Vampire.find({name: 'Claudia' }, (error, replacedVampire) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(replacedVampire)
// 	}
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
//1.
// Vampire.update({name: 'Eve'},{gender: 'm'},
// 	(error, updatedVampire) => {
// 		if(error) console.log(error)
// 	else {
// 		console.log(updatedVampire)
// 	}
// })

//TRACKING EVE'S GENDER:
// Vampire.find({name: 'Eve' }, (error, updatedVampire) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(updatedVampire)
// 	}
// })

//2.
// Vampire.findOneAndUpdate({name: 'Eve'},{name: 'Moniker'},
// 	(error, updatedVampire) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(updatedVampire)
// 	}
// })

//TRACKING MONIKER:
// Vampire.find({name: 'Moniker' }, (error, updatedVampire) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(updatedVampire)
// 	}
// })

//3.
// Vampire.updateMany({gender: 'f'}, {gender: 'fems'}, (error, updatedVampire) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(updatedVampire)
// 	}
// })


//TRACKING EVE'S/MONIKER/FEM CHANGES:
// Vampire.find({'gender': 'fems'}, (error, changes) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(changes)
// 	}
// })


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
//1.
//  Vampire.findOneAndRemove ({hair_color: "brown"},
// 	(error, foundVampires) =>{
// 		if(error){
// 			console.log(error)
// 		}
// 		else{
// 			console.log(foundVampires)
// 		}
// 	}
// )

//TRACKING BROWN HAIR PEEPS REMOVAL
// Vampire.find({'hair_color': 'brown'}, (error, changes) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(changes)
// 	}
// })

//2.
// Vampire.deleteMany({eye_color: 'blue'}, (error, deletions) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(deletions)
// 	}
// })

//TRACKING BLUE EYED PEEPS WHO GOT REMOVED
// Vampire.find({'eye_color': 'blue'}, (error, changes) => {
// 	if(error) console.log(error)
// 	else {
// 		console.log(changes)
// 	}
// })

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//FINDING ALL TO DEBUG:
// Vampire.find({}, (error, foundVampires) => {
// 	if(error) {
// 		console.log("There was an error")
// 		console.log(error)
// 	} else {
// 		console.log("There was not an error")
// 		console.log(foundVampires)
// 	}
// })
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
