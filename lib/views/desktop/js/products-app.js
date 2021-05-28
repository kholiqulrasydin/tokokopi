import ProductsProvider from "../../../services/provider/products-provider.js";

var DesktopProductsApp = () => {

    console.log('retrieving all products');
    let productProvider = new ProductsProvider('', '');
    var productList = productProvider.fetchAll();
    let content = "<div class='product-layout'>";

    Object.keys(productList).forEach((key) => {
      var discount = productList[key].discount / 100 * productList[key].price;
      var price = productList[key].price - discount;
      var cancel = productList[key].price;
      let list = "<div class='product'>";
      list += "<div class='img-container'>";
      list += "<img src='/assets/images/"+productList[key].img+"' alt='' />";
      list += "<div class='addCart'>";
      list += "<i class='fas fa-cart-plus'>";
      list += "</i>";
      list += "</div>";
      list += "<ul class='side-icons'>";
      list += "<span>";
      list += "<i class='fas fa-search'></i>";
      list += "</span>";
      list += "<span>";
      list += "<i class='far fa-heart'></i>";
      list += "</span>";
      list += "<span>";
      list += "<i class='fas fa-sliders-h'></i>";
      list += "</span>";
      list += "</ul>";
      list += "</div>";
      list += "<div class='bottom'>";
      list += "<a href=''>"+productList[key].name+"</a>";
      list += "<div class='price'>";
      list += "<span>Rp. "+price+"</span>";
      list += "<span class='cancel'>Rp. "+cancel+"</span>";
      list += "</div>";
      list += "</div>";
      list += "</div>";
      content += list;
    });
  
    content += "</div>";
    setTimeout(() => {
        var hmtl = document.getElementById('products-lists');
        hmtl.innerHTML = content;
    },1000);

}

export default DesktopProductsApp;