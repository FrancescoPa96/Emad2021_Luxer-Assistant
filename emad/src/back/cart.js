
export const ShoppingCart = (function () {

    var instance;

    function init() {
        this.cartId = Math.random();
        this.cart = [];

        this.getCart = function () {
            return this.cart;
        }

        this.countItems = function () {
            return this.cart.length;
        } 

        this.addProduct = function (prodotto,selectedSize,selectedColor) {
            
            if (this.cart.length == 0) {
                this.cart.push({ "prodotto": prodotto, "qta": 1,"selectedSize":selectedSize,"selectedColor":selectedColor })
            }
            else {
                var exist = this.cart.map(cart => cart).findIndex(prod => prod.prodotto.id == prodotto.id && prod.selectedColor == selectedColor && prod.selectedSize == selectedSize);
                if (exist == -1) { 
                    this.cart.push({ "prodotto": prodotto, "qta": 1,"selectedSize":selectedSize,"selectedColor":selectedColor })
                }
                else this.cart[exist].qta = this.cart[exist].qta + 1
            }
            return this.cart;
        } 

        this.emptyCart = function(){
            this.cart = [];
        }

        this.decreaseProduct = function(index) { 
            //var exist = (this.cart.map(c => c.prodotto.id)).findIndex(prod => prod == idprodotto)
            //var exist = this.cart.map(cart => cart).findIndex(prod => prod.prodotto.id == id && prod.selectedColor == selectedColor && prod.selectedSize == selectedSize);
            if (this.cart[index].qta == 1) {
                this.cart.splice(index, 1);
                return true;
            } else { 
                this.cart[index].qta = this.cart[index].qta - 1 
            }
            return this.cart;
        }
        this.increaseProduct = function(index) {
            //var exist = (this.cart.map(c => c.prodotto.id)).findIndex(prod => prod == idprodotto)
            //var exist = this.cart.map(cart => cart).findIndex(prod => prod.prodotto.id == id && prod.selectedColor == selectedColor && prod.selectedSize == selectedSize);
            this.cart[index].qta = this.cart[index].qta + 1
            return this.cart;
        }
        this.getTotale = function() {
            var conto = 0
            this.cart.forEach(item => {
                conto += item.prodotto.prezzo * item.qta
            })
            return conto;
        }
        this.getNumOfArticle = function() {
            var tot = 0
            this.cart.forEach(item => {
                tot += item.qta
            })
            return tot
        }
    };

    return function () {
        if (!instance) {
            instance = new init();
        }
        return instance;
    };
})();
/*
var cart = null;
export function createCart() {
    cart = []
}

export function getCart() {
    return cart;
}
export function addProduct(prodotto) {
    if (cart.length == 0) {
        cart.push({ "prodotto": prodotto, "qta": 1 })
    }
    else {
        var exist = (cart.map(c => c.prodotto.id)).findIndex(prod => prod == prodotto.id)
        if (exist == -1) {
            cart.push({ "prodotto": prodotto, "qta": 1 })
        }
        else cart[exist].qta = cart[exist].qta + 1
    }
    return cart;
}

export function decreaseProduct(idprodotto) {
    var exist = (cart.map(c => c.prodotto.id)).findIndex(prod => prod == idprodotto)
    if (cart[exist].qta == 1) { cart.splice(exist, 1) }
    else { cart[exist].qta = cart[exist].qta - 1 }
    return cart;
}

export function increaseProduct(idprodotto) {
    var exist = (cart.map(c => c.prodotto.id)).findIndex(prod => prod == idprodotto)
    cart[exist].qta = cart[exist].qta + 1
    return cart;
}

export function getTotale() {
    var conto = 0
    cart.forEach(item => {
        conto += item.prodotto.prezzo * item.qta
    })
    return conto
}
export function getNumOfArticle() {
    var tot = 0
    cart.forEach(item => {
        tot += item.qta
    })
    return tot
}
*/