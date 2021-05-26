var cartLists = [];

class CartProvider{

    constructor(idProduct, qty){
        this.idProduct = idProduct;
        this.qty = qty;
    }

    addToCart(){
        cartLists.push({productId : this.idProduct, quantity : this.qty});
        return console.log('Product successfully added');
    }

    removeItem(){
        Array.prototype.remove = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                }
            }
            return this;
        };

        cartLists.remove(cartLists.find(arr => {return arr.id === this.idProduct}));
        return console.log('item with id ' + this.idProduct + ' has been removed');
    }
}