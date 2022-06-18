   // GENERATING NEW DATE FOR delivery_day
   let today = new Date()
   let day = today.getDate()+5;
   let month = today.getMonth()
   let year = today.getFullYear()
   let delivery_day = day+"/"+"0"+month+"/"+year
   
   //console.log(delivery_day)

  //  discountPrice: "999"
  //  img: "https://images.bewakoof.com/t320/killmonger-half-sleeve-t-shirt-509349-1655101044-1.jpg"
  //  name: "Men's Olive Killmonger Graphic Printed Oversized T-shirt"
  //  pay: 299
  //  price: "299"
  //  save: 700
  let items_data = JSON.parse(localStorage.getItem("payblePaisa"))
  console.log(items_data);
  let div_con = document.querySelector("#appendItems")

 let discount = 0;
 let actualsum = 0;
 // maping data.
  items_data.map(({img,price,save,name,pay})=>{
    
    let parent = document.createElement("div");
    parent.setAttribute("id","parent")
    let img_div = document.createElement("div");

  let image = document.createElement("img");
  image.src=img;
  img_div.append(image)
  
   console.log(price,save)
    let detail_div = document.createElement("div");
    let title = document.createElement("p");
    let date = document.createElement("p");
    title.innerText = name;
    date.innerText = `Estimated delivery by ${delivery_day}`;
    detail_div.append(title,date)
    //console.log(delivery_day)
    parent.append(img_div,detail_div)
    div_con.append(parent);
  discount +=save
  actualsum  +=pay 
})

if(actualsum<499){
  // console.log("30")
   document.getElementById("delivery_fee").innerText="₹30"
 }else{
   //console.log("free")
  let free = document.getElementById("delivery_fee")
  free.innerText="FREE"
  free.style.color="green"
 }
 let totalsum =actualsum+discount;
 document.getElementById("total_price").innerText=`₹${totalsum}`
 document.getElementById("discount").innerText=`₹${discount}`
 document.getElementById("final_amount").innerText=`₹${actualsum}`
  console.log("actualsum ",actualsum)


  let data = document.querySelectorAll(".billing_type")
  for(let p of data){
    p.addEventListener("click",paymentFun)
   }
 let container = document.getElementById("billing_box_right")
  import {debit_codes,wallet_codes,upi_codes,nb_codes,cod_codes} from "./fetch/fetch.js";
 ////////////////////
let debitFun = ()=>{
    container.innerHTML=""
    container.innerHTML=debit_codes();
    let debit_price = document.getElementById("button")
    debit_price.append(`Pay ₹`,actualsum)
    
    let debit_btn = document.getElementById("button");
        debit_btn.addEventListener("click",debit_btn_fun)

    function debit_btn_fun(){
      window.location.href="./psuccess.html"
    }


}
/// wallet function for appending
let walletFun=()=>{
  
  container.innerHTML="";
  container.innerHTML=wallet_codes()

}
// UPI function for appendong
let upiFun = ()=>{
  container.innerHTML="";
  container.innerHTML=upi_codes()
}
// NB FUNCTION
let nbFun = ()=>{
  container.innerHTML="";
  container.innerHTML=nb_codes()
  // let nb_box = document.querySelectorAll(".nb_box");
  // console.log(nb_box)
}
// Cod FUNCTION
let codFun = () =>{
  container.innerHTML="";
  container.innerHTML=cod_codes()
  let cod_btn = document.getElementById("cod_btn");
  cod_btn.addEventListener("click",cod_btn_fun)

 function cod_btn_fun(){
  window.location.href="./success.html"
  }
  let cod_price = document.getElementById("cod_btn")
  cod_price.append(`Pay ₹`,actualsum)
}

  function paymentFun(){
       if(this.id==="debit"){
        debitFun()
     
    } if(this.id==="wallet"){
        walletFun()
    }if(this.id==="upi"){
        upiFun()
    }if(this.id==="nb"){
        nbFun()
    }if(this.id==="cod"){
        container.innerHTML=""
        codFun()
    }
   }
   //DEFAULT CALL DEBIT FUNCTION
   debitFun()
  // LOOK at THE ERROE IN CONSOLE
let userdata=JSON.parse(localStorage.getItem("user"));
console.log(userdata);
document.getElementById("username").innerText=userdata.email; 




