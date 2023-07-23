let stocks = {
    Fruits: ["Stawberry", "Mango", "Orange", "Pineapple"],
    Liquid: ["Milk", "Ice"],
    Holder: ["Cone", "Cup", "stick"],
    Toppings:["ChocoChips","Sprinkles"]
}

let isShopOpen = true;

function time(ms) {
    return new Promise((resolve,reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve()
            }, ms);
        }
        else {
            reject(console.log("Shop is Closed!!"))
        }
    })
}


async function kitchen() {
    try { 
        await time(2000)
        console.log(`${stocks.Fruits[3]} is selected as fruit for ice cream!`)

        await time(0)
        console.log("Production is started")

        await time(2000)
        console.log("The Fruit is chopped")

        
        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} is added`)
        
        await time(1000)
        console.log("The machine is started")
        
        await time(2000)
        console.log(`${stocks.Holder[1]} is selected as the container`)
        
        await time(3000)
        console.log(`${stocks.Toppings[1]} is selected as the topping`)

        await time(1000)
        console.log(`The ice cream is served!!!!!!!`)
    }
    catch (err) {console.log("Customer Left!!!" + err); }
    finally { console.log("EOD!!!")}
}


kitchen()