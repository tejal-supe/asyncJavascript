let stocks = {
    Fruits: ["Stawberry", "Mango", "Orange", "Pineapple"],
    Liquid: ["Milk", "Ice"],
    Holder: ["Cone", "Cup", "stick"],
    Toppings:["ChocoChips","Sprinkles"]
}

let getOrder = (fruit_name, call_prod) => {
    setTimeout(() => {
        console.log(`Your order is placed for ${stocks.Fruits[fruit_name]} ice cream! Please wait till we start the production`)        
        call_prod();
    },2000)
}

let startProduction = () => {
    setTimeout(() => {
        console.log(
            "Production for the given order is started!!! Enjoy the production of journey!!"
        )
        setTimeout(() => {
            console.log("Fruit is chopped!!!");

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were added to the chopped fruits!!`);
            }, 1000);

            setTimeout(() => {
                console.log("The Machine for making icecream has been started!!");

                setTimeout(() => {
                    console.log(`${stocks.Holder[0]} holder is selected`);
                    
                    setTimeout(() => {
                        console.log(`${stocks.Toppings[0]} is selected for the topping!!!!!!!`)

                        setTimeout(() => {
                            console.log("The ice cream is server!!!!! Please Enjoy!!");
                        }, 2000);
                    }, 3000);
                }, 2000);


            }, 1000);
        }, 2000);
    }, 0);
}

getOrder(2,startProduction)