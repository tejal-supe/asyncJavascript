// we promise to serve ice cream -- pending

let stocks = {
    Fruits: ["Stawberry", "Mango", "Orange", "Pineapple"],
    Liquid: ["Milk", "Ice"],
    Holder: ["Cone", "Cup", "stick"],
    Toppings:["ChocoChips","Sprinkles"]
}

let isShopOpen = true;
 
let order = (time,work) => {

    return new Promise((resolve, reject) => {
        
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time);
        } else {
            reject(console.log("The Shop is Closed!!"))
        }
    })
}


order(2000, () => console.log(`${stocks.Fruits[1]} is selected`))
    .then(() => {
        return order(0,()=>console.log("The Production is started!!"))
    })
    .then(() => {
        return order(2000,()=>console.log("The Fruit is chopped!!"))
    })
    .then(() => {
        return order(1000,()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} is added`))
    })
    .then(() => {
        return order(1000,()=>console.log("The machine is started"))
    })
    .then(() => {
        return order(2000,()=>console.log(`${stocks.Holder[1]} is selected as the container`))
    })
    .then(() => {
        return order(3000,()=>console.log(`${stocks.Toppings[1]} is selected as the topping`))
        
    })
    .then(() => {
        return order(1000,()=>console.log(`The ice cream is served!!!!!!!`))
        
    })

    .catch(() => {
        console.log("Customer Leftttt");
    })

    .finally(() => {
        console.log("Day Ended!!! Its meet again tomorrow!!!!");
    })