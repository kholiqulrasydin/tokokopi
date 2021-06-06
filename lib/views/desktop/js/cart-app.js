import CartProvider from "../../../services/provider/cart-provider.js";

var DekstopCartApp = () => {
    let cartElement = '<div class="container cart"><table id="cartTable"><tr><th>Produk</th><th>Kuantiti</th><th>Subtotal</th></tr>';
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
            var subTotal = price * cartItems[key].qty;
            sub += subTotal;
            cartElement += '<tr id="row'+cartItems[key].id+'"><td><div class="cart-info">';
            cartElement += '<img src="/assets/images/'+cartItems[key].img+'" alt="" /><div>';
            cartElement += '<p>'+cartItems[key].name+'</p>';
            cartElement += '<span id="harga'+cartItems[key].id+'" harga="'+price+'">Harga: '+formatRupiah(price, 'Rp. ')+'</span><br/>';
            cartElement += '<a href="#" deleteItem productId="'+cartItems[key].id+'">Hapus</a></div></div></td>';
            cartElement += '<td><button productId="'+cartItems[key].id+'" qtyCartMin>-</button><a id="qty'+cartItems[key].id+'" value="'+cartItems[key].qty+'"> '+cartItems[key].qty+' </a><button productId="'+cartItems[key].id+'" qtyCartPlus>+</button></td>';
            cartElement += '<td id="subTotal'+cartItems[key].id+'" price="'+subTotal+'">'+formatRupiah(subTotal, 'Rp. ')+'</td></tr>';
        });
    }
    total += sub +ongkir;
    
    cartElement += '</table><div class="total-price"><table><tr><td>Subtotal</td><td id="totalPrice" price="'+sub+'">'+formatRupiah(sub, 'Rp. ')+'</td></tr><tr><td>Ongkir</td><td>'+formatRupiah(ongkir, 'Rp. ')+'</td></tr><tr><td>Total</td><td id="total" price="'+total+'">'+formatRupiah(total, 'Rp. ')+'</td></tr></table>';
    cartItems.length < 1 ? cartElement += '<a href="#" class="checkout btn">Checkout</a>' : cartElement += '<a href="#" class="checkout btn" route-name="checkout" route>Checkout</a>';
    cartElement += '</div></div>';
    document.getElementById('cart').innerHTML = cartElement;

    document.body.addEventListener('click', (e) => {
        if(e.target.matches('[qtyCartMin]')){
            var productIdMin = e.target.getAttribute('productId');
            var qtyTagMin = document.getElementById('qty'+productIdMin);
            var qtyMin = parseInt(qtyTagMin.getAttribute('value'));
            console.log('initial quantity is '+ qtyMin);
            if(qtyMin == 1){
                qtyMin = 1
            }
            if(qtyMin > 1){
                qtyMin -= 1;
                console.log(qtyMin);
            qtyTagMin.innerHTML = ' '+qtyMin+' ';
            qtyTagMin.setAttribute('value', qtyMin);
            let cartProvider = new CartProvider(productIdMin, qtyMin, 'min');
            cartProvider.quantityUpdate();
            var subElementMin = document.getElementById('subTotal'+productIdMin);
            var hargaElementMin = document.getElementById('harga'+productIdMin);
            var subNumMin = parseInt(subElementMin.getAttribute('price'));
            var priceNumMin = parseInt(hargaElementMin.getAttribute('harga'));
            console.log(subNumMin);
            console.log(priceNumMin);
            var sumMin = priceNumMin - subNumMin;
            var subTotalElementMin = document.getElementById('totalPrice');
            var totalElementMin = document.getElementById('total');
            var subTotalElementMinValue = parseInt(subTotalElementMin.getAttribute('price'));
            var totalElementMinValue = parseInt(totalElementMin.getAttribute('price'));
            console.log(subTotalElementMinValue+' - '+priceNumMin);
            console.log(totalElementMinValue+' - '+priceNumMin);
            var subTotalMinChangedValue = subTotalElementMinValue - priceNumMin;
            var totalMinChangedValue = totalElementMinValue - priceNumMin;
            subTotalElementMin.setAttribute('price', subTotalMinChangedValue);
            totalElementMin.setAttribute('price', totalMinChangedValue);
            let cartProv = new CartProvider(productIdMin, 0, '');
            var itemMin = cartProv.getCartItemById();
            var itemMinSubTotal = itemMin.qty * itemMin.price;
            console.log(itemMin.price);
            console.log(itemMin.qty+' x '+itemMin.price);
            subElementMin.innerHTML = formatRupiah(itemMinSubTotal, 'Rp. ');
            subElementMin.setAttribute('price', itemMinSubTotal);
            subTotalElementMin.innerHTML = formatRupiah(subTotalMinChangedValue, 'Rp. ');
            totalElementMin.innerHTML = formatRupiah(totalMinChangedValue, 'Rp. ');
            console.log('decrease qty to '+qtyMin);
            }
        }
        if(e.target.matches('[qtyCartPlus]')){
            var productId = e.target.getAttribute('productId');
            var qtyTag = document.getElementById('qty'+productId);
            var qty = parseInt(qtyTag.getAttribute('value'));
            qty += 1;
            qtyTag.innerHTML = ' '+qty.toString()+' ';
            qtyTag.setAttribute('value', qty);
            let cartProvider = new CartProvider(productId, qty, 'plus');
            cartProvider.quantityUpdate();
            var subElement = document.getElementById('subTotal'+productId);
            var hargaElement = document.getElementById('harga'+productId);
            var subNum = parseInt(subElement.getAttribute('price'));
            var priceNum = parseInt(hargaElement.getAttribute('harga'));
            var summ = subNum + priceNum;
            subElement.innerHTML = formatRupiah(summ, 'Rp. ');
            console.log(formatRupiah(summ, 'Rp. '));
            subElement.setAttribute('price', summ);
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
        if(e.target.matches('[deleteItem]')){
            var idProductDelete = e.target.getAttribute('productId');
            let cartP = new CartProvider(idProductDelete, 0, '');
            cartP.removeItem();
            var subElementDel = document.getElementById('subTotal'+idProductDelete);
            var rowTag = document.getElementById('row'+idProductDelete);
            if(document.getElementById('cartTable').rows.length == 2){
                rowTag.innerHTML = '<tr><td><center><h4> Keranjang anda kosong. Silahkan tambahkan product ke keranjang </h4></center></td></tr>';
            }else if(document.getElementById('cartTable').rows.length > 2){
                rowTag.remove();
            }


            
            var subElementDelValue = parseInt(subElementDel.getAttribute('price'));
            var subTotalElementDel = document.getElementById('totalPrice');
            var totalElementDel = document.getElementById('total');
            var subTotalElementDelValue = parseInt(subTotalElementDel.getAttribute('price'));
            var totalElementDelValue = parseInt(totalElementDel.getAttribute('price'));
            var delTotalSum = totalElementDelValue - subElementDelValue;
            var delSubTotalSum = subTotalElementDelValue - subElementDelValue;
            subTotalElementDel.setAttribute('price', delSubTotalSum);
            totalElementDel.setAttribute('price', delTotalSum);
            subTotalElementDel.innerHTML = formatRupiah(delSubTotalSum, 'Rp. ');
            totalElementDel.innerHTML = formatRupiah(delTotalSum, 'Rp. ');
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