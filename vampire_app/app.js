// 1. Require your node modules
const mongoose = require('mongoose')
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js')

// 3. Connect your database and collection name
const connectionString = "mongodb://localhost:27017/vampire"

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


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
const vampireData = [
  {
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2
  },{
    name: 'Dracula',
    dob: new Date(937, 0, 24, 13, 0),
    hair_color: 'brown',
    eye_color: 'blue',
    loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
    location: 'Transylvania, Romania',
    gender: 'm',
    victims: 1238
  },{
    name: 'Elizabeth Bathory ',
    dob: new Date(1560, 8, 7, 22, 10),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['virgin blood', 'fancy cloaks','frilly collars'],
    location: 'Nyírbátor, Hungary',
    gender: 'f',
    victims: 980
  },{
    name: 'Lestat',
    dob: new Date(1760, 11, 9, 18, 44),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
    location: 'Auvergne, France',
    gender: 'm',
    victims: 324
  },{
    name: 'Louis de Pointe du Lac',
    dob: new Date(1766, 6, 4, 2, 1),
    hair_color: 'brown',
    eye_color: 'blue',
    loves:['brooding', 'Claudia', 'staring longingly into the   distance'],
    location: 'New Orleans, Louisiana, US',
    gender:'m',
    victims: 150
  },{
    name:'Claudia',
    dob: new Date(1793, 2, 7, 8, 30),
    hair_color: 'blonde',
    eye_color: 'blue',
    loves: ['doll babies', 'ribbons', 'appearing innocent', '  trickery'],
    location: 'New Orleans, Louisiana, US',
    gender: 'f',
    victims: 290
  },{
    name:'Armand',
    dob: new Date(1481, 6, 1, 10, 42),
    hair_color: 'red',
    eye_color: 'brown',
    loves: ['theatre', 'painting', 'velvet robes', 'being tragic'],
    location: 'Kiev, Russia',
    gender: 'm',
    victims: 1045
  },{
    name:'Santino',
    dob: new Date(1465, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
    location: 'Rome, Italy',
    gender: 'm',
    victims: 1103
  },{
    name:'Akasha',
    dob: new Date(-8000, 6, 1, 10, 42),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
    location: 'Kemet, Egypt',
    gender: 'f',
    victims: 210234,
    title: 'Queen of the Damned'
  },{
    name: 'Edward Cullen',
    dob: new Date(1901, 6, 20, 0, 57),
    hair_color: 'brown',
    eye_color: 'brown',
    loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
    location: 'Chicago, Illinois, US',
    gender: 'm',
  },{
    name: 'Persephone Bourignon',
    dob: new Date(1801, 5, 17, 14, 53),
    hair_color: 'red',
    eye_color: 'green',
    loves: ['wine', 'fancy cloaks', 'appearing innocent'],
    location: 'Paris, France',
    gender: 'f',
    victims: 450
  },{
    name: 'René Tremblay',
    dob: new Date(1922, 2, 8, 5, 3),
    hair_color: 'brown',
    eye_color: 'green',
    loves: ['frilly shirtsleeves', 'trickery', 'card games'],
    location: 'Bucharest, Romania',
    gender: 'm',
    victims: 134
  },{
    name: 'Caroline Belmont',
    hair_color: 'blonde',
    eye_color: 'brown',
    dob: new Date(1799, 4, 21, 16, 15),
    loves: ['marshmallows', 'ribbons', 'being tragic'],
    location: 'Ljubljana, Slovenia',
    gender: 'f',
    victims: 567
  },{
    name: 'Francis Frost',
    hair_color: 'black',
    eye_color: 'blue',
    dob: new Date(1976, 6, 18, 18, 18),
    loves: ['brooding', 'frilly shirtsleeves'],
    location: 'New York, New York, US',
    gender: 'm',
    victims: 112
  },{
    name: 'Barnabas Spenser',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1984, 6, 3, 13, 12),
    loves: ['being merry', 'being insane', 'card games'],
    location: 'New York, New York, US',
    gender: 'm',
    title: 'Osiris of Sewer Rats'
  }
]

// Vampire.create(vampireData, (error, createdVampires) => {
//     if(error) {
//         console.log("There was an error");
//         console.log(error)
//     } else {
//         console.log("Here is the created Vampire data")
//         console.log(vampireData)
//     }
// })
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
// 		if(error) console.log(err)
// 		else {
// 			console.log(foundVampires)
// }
// })

//2.
// Vampire.find({victims: {$gt: 500}}, (error, foundVampires) => {
// 	if(error) console.log(err)
// 	else {
// 		console.log(foundVampires)
// }
// })

//3.
// Vampire.find({victims: {$lte: 150}}, (error, foundVampires) => {
// 	if(error) console.log(err)
// 	else {
// 		console.log(foundVampires)
// }
// })

//4.
// Vampire.find({victims: {$ne: 210234}}, (error, foundVampires) => {
// 	if(error) console.log(err)
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
// 	if(error) console.log(err)
// 	else {
// 		console.log(foundVampires)
// }
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

//1.
// Vampire.find({title: {$exists: true}}, (error, foundVampires) => {
// 	if(error) console.log(err)
// 	else {
// 		console.log(foundVampires)
// }
// })

//2.
// Vampire.find({victims: {$exists: false}}, (error, foundVampires) => {
// 	if(error) console.log(err)
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
// 		console.log(err)
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
// 		console.log(err)
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
// 	if(error) console.log(err)
// 	else {
// 		console.log(foundVampires)
// }
// })

//4.
Vampire.find({
	$or: [
	{hair_color: 'red'}, 
	{eye_color: 'green'}
	]
}, (error, foundVampires) => {
	if(error) console.log(err)
	else {
		console.log(foundVampires)
}
})
/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
