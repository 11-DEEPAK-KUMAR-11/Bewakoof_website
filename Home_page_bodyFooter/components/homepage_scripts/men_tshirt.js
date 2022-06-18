function displayData(tshirtData) {
    document.querySelector(".Tshirt_pro1").innerHTML = "";
    document.querySelector(".Tshirt_pro2").innerHTML = "";
  
    tshirtData.map(function (elem, index) {
      if (index < 5 && elem.price < 300) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.imageUrl);
        image.addEventListener("click", function (elem) {
          window.location.href = "#";
        });
  
        var Price = document.createElement("p");
        Price.innerText = elem.disPrice;
  
        div.append(image, Price);
  
        document.querySelector(".Tshirt_pro1").append(div);
      } else if (index >= 5 && index < 10 && elem.price < 300) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.imageUrl);
        image.addEventListener("click", function (elem) {
          window.location.href = "#";
        });
  
        var Price = document.createElement("p");
        Price.innerText = elem.disPrice;
  
        div.append(image, Price);
  
        document.querySelector(".Tshirt_pro2").append(div);
      } else {
        return;
      }
    });
  }

  export {displayData}