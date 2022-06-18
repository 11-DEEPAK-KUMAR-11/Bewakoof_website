function dispmbs(mbsArr) {
    document.querySelector(".mbs_pro1").innerHTML = "";
    document.querySelector(".mbs_pro2").innerHTML = "";
  
    mbsArr.map(function (elem, index) {
      // console.log(elem);
      if (index < 5) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.imageUrl);
        image.addEventListener("click", function (elem) {
          window.location.href = "#";
        });
  
        var Price = document.createElement("p");
        Price.innerText = elem.disPrice;
  
        div.append(image, Price);
  
        document.querySelector(".mbs_pro1").append(div);
      } else if (index >= 5 && index <= 10) {
        var div = document.createElement("div");
  
        var image = document.createElement("img");
        image.setAttribute("src", elem.imageUrl);
        image.addEventListener("click", function (elem) {
          window.location.href = "#";
        });
  
        var Price = document.createElement("p");
        Price.innerText = elem.disPrice;
  
        div.append(image, Price);
  
        document.querySelector(".mbs_pro2").append(div);
      } else {
        return;
      }
    });
  }

  export {dispmbs};