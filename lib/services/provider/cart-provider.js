import Products from "./products.js";
import ProductsProvider from "./products-provider.js";

var cartLists = [];

class CartProvider{

    constructor(idProduct, qty, prefix = ''){
        this.idProduct = idProduct;
        this.qty = qty;
        this.prefix = prefix;
    }

    addToCart(){
        var cart = cartLists.find(arr => {return arr.productId == this.idProduct});
        var notExist;
        cart == undefined ? notExist = true : false;
        notExist ? cartLists.push({productId : this.idProduct, quantity : this.qty}) : console.log("Product is currently exist. can't add them");
        return console.log(notExist ? 'Product successfully added' : 'Exiting .. ' );
    }

    getCartItems(){
        return cartLists;
    }

    quantityUpdate(){
        this.removeItem();
        cartLists.push({
            productId : this.idProduct,
            quantity : this.qty
        });
        return console.log('updated quantity of product ... ');
    }

    getCartItemById(){
        var cartItem = cartLists.find(arr => {return arr.productId === this.idProduct});
        let productProvider = new ProductsProvider(cartItem.productId, '');
        var productItem = productProvider.fetchItemsByProductId();
        return {
            id : cartItem.productId,
            category : productItem[0].category,
            name : productItem[0].name,
            price: productItem[0].price,
            discount : productItem[0].discount,
            detail : productItem[0].detail,
            img : productItem[0].img,
            qty : cartItem.quantity
        };
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

        cartLists.remove(cartLists.find(arr => {return arr.productId === this.idProduct}));
        return console.log('item with id ' + this.idProduct + ' has been removed');
    }

    inspectItems(){
        var itemLists = [];
        Object.keys(cartLists).forEach((key) =>{
            var p = Products.find(product => {
                return product.id === cartLists[key].productId;
            });
            var uid = p.id;
            var ucategory = p.category;
            var uname = p.name;
            var uprice = p.price;
            var udiscount = p.discount;
            var udetail = p.detail;
            var uimgUrl = p.img;
            var uqty = cartLists[key].quantity;

            itemLists.push({
                id : uid,
                category : ucategory,
                name : uname,
                price: uprice,
                discount : udiscount,
                detail : udetail,
                img : uimgUrl,
                qty : uqty
            });
        });
        console.log('showing all items on your cart');
        return itemLists;
    }

    // showAllItem(){
    //     var itemLists = [];
    //     Object.keys(cartLists).forEach((key) => {
    //         var inspectedItem = [];
    //         let cartProvider = new CartProvider(cartLists[key].id);
    //         inspectedItem = cartProvider.inspectItems();
    //         var u = inspectedItem[0];
    //         itemLists.push({
    //             id : u.id,
    //             category : u.category,
    //             name : u.name,
    //             price: u.price,
    //             discount : u.discount,
    //             detail : u.detail,
    //             img : u.imgUrl
    //         });
    //     });
    //     return itemLists;
    // }
}

export default CartProvider;