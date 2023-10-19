const db = require('../db')
const {Review, Recipe} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


    const main = async () => {
        const st = await Recipe.find({name: 'Shrimp Tacos'})
        const mc = await Recipe.find({name: 'Miso-Honey Chicken and Asparagus'})
        const sc = await Recipe.find({name: 'Sock-It-to-Me Cake'})
        const cp = await Recipe.find({name: 'Chive Pesto Potato Salad'})

        const reviews = [
        {
            recipeName: ss[0]._id,
            score: 4,
            comment: 'This recipe was amazing! Highly recommend.'
        },
        {
            recipeName: tf[0]._id,
            score: 2,
            comment: 'Not a fan of this recipe. Would not recommend.'
        },
        {
            recipeName: ww[0]._id,
            score: 5,
            comment: 'The best recipe I have ever made. 10/10 would recommend!'
        },
        {   
            recipeName: ss[0]._id,
            score: 3,
            comment: 'Decent recipe, but not exceptional.'
        },
        {
            recipeName: ww[0]._id,
            score: 5,
            comment: 'Absolutely loved this recipe!'
        },
        {
            recipeName: ss[0]._id,
            score: 1,
            comment: 'Terrible recipe, would never have it again.'
        },
        {
            recipeName: jj[0]._id,
            score: 4,
            comment: 'Great taste and presentation.'
        },
        {
            recipeName: tf[0]._id,
            score: 4,
            comment: 'Good choice if you like bold flavors.'
        }
];

await Review.insertMany(reviews)
    console.log("Time to eat!")
}
const run = async () => {
    await main()
    db.close()
}

run()