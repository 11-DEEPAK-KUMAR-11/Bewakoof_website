
function debit_codes(){
    return ` <div id="logo_box">
    <img src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg"alt="">
    <img src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg" alt="">
    <img src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg" alt="">
     <img src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg" alt="">
    </div>
   <div id="input_box">
       <input type="number" class="full_input" placeholder="Card Number" required>
       <input type="number" placeholder="Valid through(MM/YY)" required>
       <input type="number" placeholder="CVV" required>
       <input type="text" class="full_input" placeholder="Name On Card" required>
   </div>
     <input type="checkbox" id=debit_checkbox><label for="" id="debit_checkbox_details">Save card details for later</label>
     <p id="debit_p_tag">This transaction you make is totally secure. We don't save your CVV number.</p>
   <div id="button"></div>`
}


function wallet_codes(){
    return` <div id="paytm" class="wallet_box">
    <img src="https://images.bewakoof.com/web/paytm-round-v1.png" alt="paytm">
    <p style="margin-left:80px">Paytm Wallet & Postpaid</p>
    <input type="radio" id="paytm" value="paytm">

 </div>
 <div id="phonePay" class="wallet_box">
     <img src="https://images.bewakoof.com/web/ic-phonepe-3x-payment-v1.png" alt="">
     <p>PhonePay</p>
     <input type="radio" id="paytm" value="paytm">
 </div>
 <div id="aPay" class="wallet_box">
     <img src="https://images.bewakoof.com/web/ic-amazon-pay-3x-payment-v1.png" alt="">
     <p>Amazon Pay</p>
     <input type="radio" id="paytm" value="paytm">
 </div>
 <div id="mobikwik" class="wallet_box">
     <img src="https://images.bewakoof.com/web/ic-mobikwik-3x-payment-v1.png" alt="">
     <p>Mobikwik</p>
     <input type="radio" id="paytm" value="paytm">
 </div>
 <div id="Freecharge" class="wallet_box">
     <img src="https://images.bewakoof.com/web/ic-freecharge-3x-payment-v1.png" alt="">
     <p>Freecharge</p>
     <input type="radio" id="paytm" value="paytm">
 </div>`
}
function upi_codes(){
    return `<div id="upi_logo">
    <img src="https://images.bewakoof.com/web/ic-gpay-payment-gray-v1.jpg" alt="">
    <img src="https://images.bewakoof.com/web/ic-bhim-upi-gray-payment-v1.jpg" alt="">
    <img src="https://images.bewakoof.com/web/ic-phone-pe-gray-payment-v1.jpg" alt="">
    <img src="https://images.bewakoof.com/web/ic-more-option-payment-v1.jpg" alt="">
</div>
<input type="text" id="upi_id" placeholder="UPI ID">

<h5>UPI ID is in the format of 9999932832@bank or username@bank</h5>
<input id="upi_checkbox" type="checkbox">
<label id="upi_id_label" for="">Save this UPI ID for future payments.</label>
<div id="verify_btn">Verify</div>`
}
function nb_codes(){
    return ` <div id="icici" class="nb_box">
    <img src="https://images.bewakoof.com/web/icici-1556185960.png" alt="paytm">
    <p>ICICI</p>
    <input type="radio" id="icici" value="icici">

 </div>
 <div id="axis" class="nb_box">
     <img src="https://images.bewakoof.com/web/axis-1556185962.png" alt="">
     <p>AXIS</p>
     <input type="radio" id="axis" value="axis">
 </div>
 <div id="sbi" class="nb_box">
     <img src="https://images.bewakoof.com/web/sbi-1556185961.png" alt="">
     <p>SBI</p>
     <input type="radio" id="sbi" value="sbi">
 </div>
 <div id="hdfc" class="nb_box">
     <img src="https://images.bewakoof.com/web/hdfc-1556185961.png" alt="">
     <p>HDFC</p>
     <input type="radio" id="hdfc" value="hdfc">
 </div>
<div id="kotak" class="nb_box">
     <img src="https://images.bewakoof.com/web/kotak-1556185967.png" alt="">
     <p>KOTAK</p>
     <input type="radio" id="kotak" value="kotak">
</div> `
}

function cod_codes(){
    return `  <p id="cod_p_tag">Cash Collection Charges: Costs ₹ 30 Extra</p>
    <div id="cod_btn"></div>`
}

export {debit_codes,wallet_codes,upi_codes ,nb_codes,cod_codes} ;

