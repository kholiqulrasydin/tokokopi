import CartProvider from "../../../services/provider/cart-provider.js";

var DekstopCartApp = () => {
    let cartElement = '<div class="container cart"><table><tr><th>Produk</th><th>Kuantiti</th><th>Subtotal</th></tr>';
    let cartProvider = new CartProvider('','');
    var cartItems = cartProvider.inspectItems();
    let sub = 0;
    let total = 0;
    let ongkir = 5000;
    console.log(cartItems);
    if(cartItems.length < 1){
        cartElement += '<tr><td><center><h4> Keranjang anda kosong. Silahkan tambahkan product ke keranjang </h4></center></td></tr>';
    }else{
        Object.keys(cartItems).forEach((key) => {
            var discount = cartItems[key].discount / 100 * cartItems[key].price;
            var price = cartItems[key].price - discount;
            var cancel = cartItems[key].price;
            var subTotal = price * cartItems[key].qty;
            sub += subTotal;
            cartElement += '<tr><td><div class="cart-info">';
            cartElement += '<img src="/assets/images/'+cartItems[key].img+'" alt="" /><div>';
            cartElement += '<p>'+cartItems[key].name+'</p>';
            cartElement += '<span id="harga'+cartItems[key].id+'" harga="'+price+'">Harga: '+formatRupiah(price, 'Rp. ')+'</span><br/>';
            cartElement += '<a href="#" deleteItem productId="'+cartItems[key].id+'">Hapus</a></div></div></td>';
            cartElement += '<td><button productId="'+cartItems[key].id+'" qtyCartMin>-</button><a id="qty'+cartItems[key].id+'" value="'+cartItems[key].qty+'"> '+cartItems[key].qty+' </a><button productId="'+cartItems[key].id+'" qtyCartPlus>+</button></td>';
            cartElement += '<td id="subTotal'+cartItems[key].id+'" price="'+subTotal+'">'+formatRupiah(subTotal, 'Rp. ')+'</td></tr>';
        });
    }
    total += sub +ongkir;
    
    cartElement += '</table><div class="total-price"><table><tr><td>Subtotal</td><td id="totalPrice" price="'+sub+'">'+formatRupiah(sub, 'Rp. ')+'</td></tr><tr><td>Ongkir</td><td>'+formatRupiah(ongkir, 'Rp. ')+'</td></tr><tr><td>Total</td><td id="total" price="'+total+'">'+formatRupiah(total, 'Rp. ')+'</td></tr></table><a href="#" class="checkout btn">Checkout</a></div></div>';
    document.getElementById('cart').innerHTML = cartElement;

    document.body.addEventListener('click', (e) => {
        if(e.target.matches('[qtyCartMin]')){
            var productId = document.querySelector('[qtyCartMin]').getAttribute('productId');
            var qtyTag = document.getElementById('qty'+productId);
            let qty = parseInt(qtyTag.getAttribute('value'));
            if(qty == 1){
                qty = 1;
            }else if(qty >= 1){
                qty-= 1;
            }
            console.log(qty);
            qtyTag.innerHTML = ' '+qty.toString()+' ';
            qtyTag.setAttribute('value', qty);
            let cartProvider = new CartProvider(productId, '', 'min');
            cartProvider.quantityUpdate();
            var subElement = document.getElementById('subTotal'+productId);
            var hargaElement = document.getElementById('harga'+productId);
            var subNum = parseInt(subElement.getAttribute('price'));
            var priceNum = parseInt(hargaElement.getAttribute('harga'));
            console.log(subNum);
            console.log(priceNum);
            var sum = priceNum - subNum;
            console.log(sum);
            subElement.innerHTML = formatRupiah(sum, 'Rp. ');
            subElement.setAttribute('price', sum);
            var subTotalElement = document.getElementById('totalPrice');
            var totalElement = document.getElementById('total');
            var subTotalElementValue = parseInt(subTotalElement.getAttribute('price'));
            var totalElementValue = parseInt(totalElement.getAttribute('price'));
            var subTotalChangedValue = subTotalElementValue - priceNum;
            var totalChangedValue = totalElementValue - priceNum;
            subTotalElement.setAttribute('price', subTotalChangedValue);
            totalElement.setAttribute('price', totalChangedValue);
            subTotalElement.innerHTML = formatRupiah(subTotalChangedValue, 'Rp. ');
            totalElement.innerHTML = formatRupiah(totalChangedValue, 'Rp. ');
            console.log('decrease qty to '+qty);
        }
        if(e.target.matches('[qtyCartPlus]')){
            var productId = document.querySelector('[qtyCartMin]').getAttribute('productId');
            var qtyTag = document.getElementById('qty'+productId);
            let qty = parseInt(qtyTag.getAttribute('value'));
            qty+= 1;
            qtyTag.innerHTML = ' '+qty.toString()+' ';
            qtyTag.setAttribute('value', qty);
            let cartProvider = new CartProvider(productId, '', 'plus');
            cartProvider.quantityUpdate();
            var subElement = document.getElementById('subTotal'+productId);
            var hargaElement = document.getElementById('harga'+productId);
            var subNum = parseInt(subElement.getAttribute('price'));
            var priceNum = parseInt(hargaElement.getAttribute('harga'));
            var summ = priceNum + subNum;
            subElement.innerHTML = formatRupiah(summ, 'Rp. ');
            subElement.setAttribute('price', sum);
            var subTotalElement = document.getElementById('totalPrice');
            var totalElement = document.getElementById('total');
            var subTotalElementValue = parseInt(subTotalElement.getAttribute('price'));
            var totalElementValue = parseInt(totalElement.getAttribute('price'));
            var subTotalChangedValue = subTotalElementValue + priceNum;
            var totalChangedValue = totalElementValue + priceNum;
            subTotalElement.setAttribute('price', subTotalChangedValue);
            totalElement.setAttribute('price', totalChangedValue);
            subTotalElement.innerHTML = formatRupiah(subTotalChangedValue, 'Rp. ');
            totalElement.innerHTML = formatRupiah(totalChangedValue, 'Rp. ');
            console.log('increase qty to '+qty);
        }
    });
}

function formatRupiah(angka, prefix){
    var number_string = angka.toString().replace(/[^,\d]/g, ''),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah+',00' : (rupiah ? 'Rp. ' + rupiah : '')+',00';
}

export default DekstopCartApp;