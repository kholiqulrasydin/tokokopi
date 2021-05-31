import AlertProvider from "../../../services/provider/alert-provider.js";
import Banners from "../../../services/provider/banners.js";
import ProductsProvider from "../../../services/provider/products-provider.js";

var slideIndex = 1;
var ChangeBanner = () => setInterval(() =>{
    slideIndex++;  
    showSlides();
}, 3500);
var DesktopLandingApp = () => {

    let bannerContents = '';
    clearInterval(ChangeBanner);
    
    console.log('showing banners ... ');
    Object.keys(Banners).forEach((index) => {
        let content = "<div class='mySlides fade' id='slide"+index+"' slide>";
        // content += "<div class='numbertext'>"+(index+1)+" / "+Banners.length+"</div>";
        content += "<img src='/assets/images/"+Banners[index]+"' style='width:100%; height: calc(100vh - 9rem);'>";
        content += "<div class='text'></div>";
        content += "</div>";
        bannerContents += content;
    });

    bannerContents += "<a class='prev' prevSlide>&#10094;</a>";
    bannerContents += "<a class='next' nextSlide>&#10095;</a>";
    bannerContents += "</div>";
    bannerContents += "<br>";
    bannerContents += "<div style='text-align:center' id='dot'>";
    for(var i = 0; i < Banners.length; i++){
        bannerContents += "<span class='dot' dot-value='"+i+"' dot></span>";
    }
    bannerContents += "</div>";

    var bannerTag = document.getElementById('banners');
    bannerTag.innerHTML = bannerContents;

    var initSlide = () => showSlides();
    setTimeout(initSlide, 200);

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
      list += "<i class='fas fa-cart-plus' productId='"+productList[key].id+"' addToCart>";
      list += "</i>";
      list += "</div>";
      list += "<ul class='side-icons'>";
      list += "<span>";
      list += "<button class='product-details'>details</button>";
      list += "</span>";
    //   list += "<span>";
    //   list += "<i class='fas fa-search'></i>";
    //   list += "</span>";
    //   list += "<span>";
    //   list += "<i class='far fa-heart'></i>";
    //   list += "</span>";
    //   list += "<span>";
    //   list += "<i class='fas fa-sliders-h'></i>";
    //   list += "</span>";
      list += "</ul>";
      list += "</div>";
      list += "<div class='bottom'>";
      list += "<a href='#'>"+productList[key].name+"</a>";
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

    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[prevSlide]")) {
            slideIndex--;
            showSlides();
        }
        if(e.target.matches("[nextSlide]")){
            slideIndex++;
            showSlides();
        }
        if(e.target.matches("[addToCart]")){
            let product = new ProductsProvider(e.target.getAttribute('productId'), '');
            var productDetails = product.fetchItemsByProductId();
            var discount = productDetails[0].discount / 100 * productDetails[0].price;
            var price = productDetails[0].price - discount;
            let content = '<h4>'+productDetails[0].name+'</h4>';
            content += '<p>harga : Rp. '+price+'</p>';
            content += '<p>Kuantitas : <p>';
            content += '<button class="cart-btn-min" qtyMin>-</button><a id="qty" value="1"> 1 </a><button class="cart-btn-plus" qtyPlus>+</button>'
            let alertProvider = new AlertProvider({title : 'Tambahkan ke keranjang', imgUrl: productDetails[0].img   , cancelButton: true, submitButton: true, content: content, submitParam: 'saveToCart', submitCaption: 'Tambahkan'});
            alertProvider.openAlert();
        }
        if(e.target.matches('[cancel]')){
            let alertProvider = new AlertProvider();
            alertProvider.closeAlert();
        }
        if(e.target.matches('[qtyPlus]')){
            var qtyTag = document.getElementById('qty');
            let qty = parseInt(qtyTag.getAttribute('value'));
            qty += 1;
            qtyTag.innerHTML = ' '+qty.toString()+' ';
            qtyTag.setAttribute('value', qty);
            console.log('increase qty to '+qty);
        }
        if(e.target.matches('[qtyMin]')){
            var qtyTag = document.getElementById('qty');
            let qty = parseInt(qtyTag.getAttribute('value'));
            if(qty == 1){
                qty = 1;
            }else if(qty >= 1){
                qty-= 1;
            }
            qtyTag.innerHTML = ' '+qty.toString()+' ';
            qtyTag.setAttribute('value', qty);
            console.log('decrease qty to '+qty);
        }
    });

    ChangeBanner();

}

function showSlides() {
    if(slideIndex > Banners.length-1){
        slideIndex = 0;
    }
    var n = slideIndex;
    var slides = document.getElementById('slide'+n);
    var dots = document.querySelectorAll('[dot]');

    
    for (var i = 0; i < dots.length; i++) {
        var attribute = dots[i].getAttribute('class');
        if(attribute == 'dot active'){
            dots[i].classList.remove('active');
        }
        if(i != n){
            document.getElementById('slide'+i).style.display = "none";
        }
    }
    dots[n].classList.add("active");
    slides.style.display = "block"; 
}

export default DesktopLandingApp;
export {DesktopLandingApp, ChangeBanner}