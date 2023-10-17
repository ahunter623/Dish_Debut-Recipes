const db = require('../db')
const {Review, Recipe} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


    const main = async () => {
        const ww = await Recipe.find({name: 'Wicked Waffles'})
        const tf = await Recipe.find({name: 'Tango Fish'})
        const ss = await Recipe.find({name: 'Spanish Sauce'})
        const jj = await Recipe.find({name: 'Jungle Juice'})

        const reviews = [
        {
            recipeName: ss[0]._id,
            score: 4,
            comment: 'Noice.'
        },
        {
            recipeName: tf[0]._id,
            score: 2,
            comment: 'Noice 2.'
        },
        {
            recipeName: ww[0]._id,
            score: 5,
            comment: 'Noice 3.'
        },
        {   
            recipeName: ss[0]._id,
            score: 3,
            comment: 'Noice 4.'
        },
        {
            recipeName: ww[0]._id,
            score: 5,
            comment: 'Noice 5.'
        },
        {
            recipeName: ss[0]._id,
            score: 1,
            comment: 'Noice 6.'
        },
        {
            recipeName: jj[0]._id,
            score: 4,
            comment: 'Noice 7.'
        },
        {
            recipeName: tf[0]._id,
            score: 4,
            comment: 'Noice 8.'
        }
];

await Review.insertMany(reviews)
    console.log("Its time to eat!")
}
const run = async () => {
    await main()
    db.close()
}

run()