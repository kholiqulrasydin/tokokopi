import Products from './products.js';

class ProductsProvider{
    constructor(productId, productCategory){
        this.id = productId;
        this.category = productCategory;
    }

    fetchAll(){
        var productLists = [];
        productLists = Products;
        console.log('fetching all products ... ');
        return productLists;
    }

    fetchItemsByProductId(){
        var productLists = [];

        var p = Products.find(product => {
            return product.id === this.id;
        });
        var uid = p.id;
        var ucategory = p.category;
        var uname = p.name;
        var uprice = p.price;
        var udiscount = p.discount;
        var udetail = p.detail;
        var uimgUrl = p.img;

        productLists.push({
            id : uid,
            category : ucategory,
            name : uname,
            price: uprice,
            discount : udiscount,
            detail : udetail,
            img : uimgUrl
        });
        console.log('matching product using id successfully!');
        return productLists;
    }

    fetchItemsByCategory(){
        var productLists = [];
        var filteredByCategory = Products.filter((item) => {
            return item.category === this.category;
        });

        productLists = filteredByCategory;
        console.log('matching all products using category successfully!');
        return productLists;
    }
}

export default ProductsProvider;