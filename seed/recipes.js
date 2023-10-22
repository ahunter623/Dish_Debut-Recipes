const db = require('../db')
const Recipe = require('../models/recipes');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = [
        { 
            name: 'Shrimp Tacos', 
            description: 'Spiced shrimp and quick-pickled red cabbage fill corn tortillas for dressed-up tacos that are easy to put together and sure to be a favorite. The seasoned shrimp is cooked in a heated skillet for a slight char, but resist the temptation to move the pieces before the contact side is properly browned. You can keep the add-ons simple with slices of creamy avocado, bits of fresh cilantro and acidic bursts from lime slices. Or bulk up with dollops of guacamole, chunky pico de gallo, and sour cream. The choice is yours!', 
            image: './assets/shrimp-tacos.jpeg' },
        { 
            name: 'Miso-Honey Chicken and Asparagus', 
            description: 'This quick and easy sheet-pan meal is broiled instead of baked, which chars the marinade slightly on the chicken, browns the asparagus for maximum flavor and cuts the cooking time to around 10 minutes. The miso-honey mixture packs a punch, with lots of garlic, ginger and as much hot sauce as you like. It doubles as a marinade for the chicken and a sauce to spoon over the chicken and asparagus once cooked. Make sure to arrange the chicken thighs in a single layer, so they cook and char evenly, and keep an eye on the pan, as some broilers have hot spots. Feel free to substitute broccolini for the asparagus, and serve with steamed rice, if desired. ', 
            image: './assets/miso-honey.jpeg' },
        { 
            name: 'Sock-It-to-Me Cake', 
            description: 'This vintage cake recipe is part pound cake, part coffee cake, but, here, a crunchy brown sugar-pecan blend is inside the cake — rather than on top — for tidier eating and a better bite. Getting its name from a popular phrase in the 1960s, prominently featured in the song “Respect” by Aretha Franklin, this cake is made with abundance in mind. Its inviting on its own, and perfect for coffee or brunch, or dessert. Make it for a group of people you love, or people youre just getting to know. Theyre going to ask you all about the recipe.', 
            image: './assets/Sock-it-to-me-cake.jpeg' },
        { 
            name: 'Chive Pesto Potato Salad', 
            description: 'This vibrant homemade pesto is made with fresh chives and parsley in place of basil. Its a bright sauce with savory, onion notes, making it a great dressing for mild, creamy potatoes. Green beans or asparagus are added to the potatoes during the last few minutes of cooking, for an easy one-pot approach. Once drained, the potatoes and veggies are returned to the hot pot to dry out in the residual heat, which means your potato salad wont end up watery. Toss the potatoes with the pesto while warm so they readily absorb all of the flavors. Make this highly adaptable recipe with any vegetable on hand; peas, corn and broccoli florets are all great alternatives.', 
            image: './assets/Chive-Pesto-Potato-Salad.jpeg' },
        
    ]

    await Recipe.insertMany(recipes)
    console.log("Created some recipes!")
}
const run = async () => {
    await main()
    db.close()
}

run()