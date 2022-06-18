let searchFun = async()=>{
    try{
       //let query = document.getElementById("query").value;
       let res = await fetch(`https://fakestoreapi.com/products/`);
       let data = await res.json();

       append1(data);
       console.log(data);
    }catch(err){
        console.log(err)
    }
}

let appendFun = (data)=>{
    document.getElementById("displayData").innerHTML = null;
    document.getElementById("Box").style.display = "none";

    data.forEach((el)=>{
        let card = document.createElement("div");

        let Image = document.createElement("img");
        Image.src = el.image;
        Image.setAttribute("id","Image")
        let Title = document.createElement("h4");
        Title.innerText = el.title;
        Title.setAttribute("id","Title")
        let Price = document.createElement("h4");
        Price.innerText = el.price;
        Price.setAttribute("id","Price")
        let Category = document.createElement("h2");
        Category.innerText = el.category;
        Category.setAttribute("id","Cat")
        card.append(Image,Category,Title,Price);
        // let btn = document.createElement("button");
        // btn.innerText = "Buy";
        card.onclick = ()=>{
            buyFun(el);
        }

        // card.append(Image,Category,Title,Price,btn);

        document.getElementById("displayData").append(card);
    })
}

let buyFun = (el)=>{
    let cart = JSON.parse(localStorage.getItem("cartProduct")) || [];

    cart.push(el);

    localStorage.setItem("cartProduct",JSON.stringify(cart));
    // alert("Successfully Added");
    
    // window.location.href = ""
}

let append1 = (data)=>{
    document.getElementById("Box").innerHTML = null;
    if(data==undefined){
        return false;
    }
    data.forEach((el)=>{
        let Title = document.createElement("p");
        Title.innerText = el.title;
        Title.onclick = ()=>{
            titleFun(el);
        }
        document.getElementById("Box").append(Title);
    })
    
}

async function titleFun(el){
    try{
      let res = await fetch("https://fakestoreapi.com/products");

      let data = await res.json();

      appendFun(data);
    }catch(err){
        console.log(err)
    }
}


let id;
function debounceFun(){
    if(id){
        clearTimeout(id);

        id = setTimeout(()=>{
            func();
        },delay);
    }
}

