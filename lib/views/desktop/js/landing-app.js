import ProductsProvider from "../../../services/provider/products-provider.js";

var DesktopLandingApp = () => {
    console.log('retrieving all products');
    let productProvider = new ProductsProvider('', 'coffee');
    var productList = productProvider.fetchItemsByCategory();
    let content = "<div class='title'><h2>Our Coffe</h2><span>Get Favours Now</span></div>";
    content += "<div class='product-layout'>";

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
    var hmtl = document.getElementById('coffee-list');
    hmtl.innerHTML = content;
}

export default DesktopLandingApp;