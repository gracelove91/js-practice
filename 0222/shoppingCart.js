var shoppingCart = {
    items: ['Apple', 'Orange'],
    inventory: {
        Apple: 1,
        Orange: 0
    },
    checkout() {
        this.items.forEach(item => {
            if(!this.inventory[item]){
                console.log(`Item [${item}] has sold out.`);
            }
        })
    }
};

shoppingCart.checkout();