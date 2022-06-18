function dispwbs(wbsArr) {
    // console.log(wtshirtData);
    document.querySelector(".wbs_pro1").innerHTML = "";
    document.querySelector(".wbs_pro2").innerHTML = "";
  
    wbsArr.map(function (elem, index) {
      if (index < 5) {
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
  
        document.querySelector(".wbs_pro1").append(div);
      } else if (index >= 5 && index < 10) {
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
  
        document.querySelector(".wbs_pro2").append(div);
      } else {
        return;
      }
    });
  }
export {dispwbs}  