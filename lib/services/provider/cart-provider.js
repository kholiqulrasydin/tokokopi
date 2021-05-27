import Products from "./products";

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

    inspectItems(){
        var itemLists = [];
        Object.keys(cartLists).forEach((key) =>{
            var p = Products.find(product => {
                return product.id === cartLists[key].id;
            });
            var uid = p.id;
            var ucategory = p.category;
            var uname = p.name;
            var uprice = p.price;
            var udiscount = p.discount;
            var udetail = p.detail;
            var uimgUrl = p.imgUrl;

            itemLists.push({
                id : uid,
                category : ucategory,
                name : uname,
                price: uprice,
                discount : udiscount,
                detail : udetail,
                imgUrl : uimgUrl
            });
        });
        console.log('showing all items on your cart');
        return itemLists;
    }
}