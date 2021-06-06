var DesktopCheckoutApp = () => {

    var nama = '';
    var alamat = '';
    var bank = '';
    document.body.addEventListener("click", (e) => {
        if(e.target.matches('[bayar]')){
            var payname = document.getElementById('payname').value;
            var payaddress = document.getElementById('payaddress').value;
            var virtualBank = document.getElementsByName('virtualbank');
            var payments = '';
            for (var i = 0, length = virtualBank.length; i < length; i++) {
                if (virtualBank[i].checked) {
                  payments = virtualBank[i].value;
                  break;
                }
              }

            nama = payname;
            alamat = payaddress;
            bank = payments;
            let payNext1 = '<div class="paycard payspace payicon-relative"><h3>Atas Nama : '+payname+'</h3></div>';
            payNext1 += '<div class="paycard payspace payicon-relative"><br><h5>Pembayaran Virtual Account '+bank+' : <br> 6678 9987 8876 8897</h5></div>';
            payNext1 += '<div class="paycard payspace payicon-relative"><br><br><br><h5>Alamat Rumah : '+payaddress+'</h5></div>';
            payNext1 += '<div class="paybtn" next>Selanjutnya</div>';
            document.getElementById('payform').innerHTML = payNext1;
        }
        if(e.target.matches('[next]')){
            let payNext2 = '<div class="paycard payspace payicon-relative"><h3>Atas Nama : '+nama+'</h3></div>';
            payNext2 += '<div class="paycard payspace payicon-relative"><br><h5>Pembayaran Berhasil</h5></div>';
            payNext2 += '<div class="paycard payspace payicon-relative"><br><br><br><h5>Mengantarkan Produk ke Alamat Rumah : <br>'+alamat+'</h5></div>';
            payNext2 += '<div class="paybtn" selanjutnya>Cetak Nota</div>';
            document.getElementById('payform').innerHTML = payNext2;

        }
    });

}

export default DesktopCheckoutApp;