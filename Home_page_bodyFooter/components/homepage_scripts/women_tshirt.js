function dispwtshirt(wtshirtData) {
    // console.log(wtshirtData);
    document.querySelector(".wtshirt_pro1").innerHTML = "";
    document.querySelector(".wtshirt_pro2").innerHTML = "";
  
    wtshirtData.map(function (elem, index) {
      if (index < 5 && elem.price < 300) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.imgUrl);
        image.setAttribute("id", "photo");
        image.addEventListener("click", function (elem) {
          window.location.href = "#";
        });
  
        var Price = document.createElement("p");
        Price.innerText = elem.disPrice;
        Price.setAttribute("id", "price");
  
        div.append(image, Price);
  
        document.querySelector(".wtshirt_pro1").append(div);
      } else if (index >= 5 && index < 10 && elem.price < 300) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.imgUrl);
        image.setAttribute("id", "photo");
        image.addEventListener("click", function (elem) {
          window.location.href = "#";
        });
  
        var Price = document.createElement("p");
        Price.innerText = elem.disPrice;
        Price.setAttribute("id", "price");
  
        div.append(image, Price);
  
        document.querySelector(".wtshirt_pro2").append(div);
      } else {
        return;
      }
    });
  }

  export {dispwtshirt};