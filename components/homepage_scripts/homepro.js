function homedisp() {
    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
  
    if (flag1 == true) {
      document.getElementById("Mens_pro").style.display = "block";
      document.getElementById("Mens_nav").style.borderBottomColor = "gold";
      document.getElementById("Mens_nav").style.fontWeight = "800";
    }
  
    document.getElementById("Mens_nav").addEventListener("click", () => {
      flag1 = true;
  
      if (flag1 == true) {
        document.getElementById("Mens_pro").style.display = "block";
        document.getElementById("Mens_nav").style.borderBottomColor = "gold";
        document.getElementById("Mens_nav").style.fontWeight = "800";
  
        document.getElementById("Womens_pro").style.display = "none";
        document.getElementById("Womens_nav").style.borderBottomColor =
          "transparent";
        document.getElementById("Womens_nav").style.fontWeight = "300";
  
        document.getElementById("Accessories_pro").style.display = "none";
        document.getElementById("Accessories_nav").style.borderBottomColor =
          "transparent";
        document.getElementById("Accessories_nav").style.fontWeight = "300";
  
        flag1 = false;
      }
    });
  
    document.getElementById("Womens_nav").addEventListener("click", () => {
      flag2 = true;
  
      if (flag2 == true) {
        document.getElementById("Mens_pro").style.display = "none";
        document.getElementById("Mens_nav").style.borderBottomColor =
          "transparent";
        document.getElementById("Mens_nav").style.fontWeight = "300";
  
        document.getElementById("Womens_pro").style.display = "block";
        document.getElementById("Womens_nav").style.borderBottomColor = "gold";
        document.getElementById("Womens_nav").style.fontWeight = "800";
  
        document.getElementById("Accessories_pro").style.display = "none";
        document.getElementById("Accessories_nav").style.borderBottomColor =
          "transparent";
        document.getElementById("Accessories_nav").style.fontWeight = "300";
  
        flag2 = false;
      }
    });
  
    document.getElementById("Accessories_nav").addEventListener("click", () => {
      flag3 = true;
  
      if (flag3 == true) {
        document.getElementById("Mens_pro").style.display = "none";
        document.getElementById("Mens_nav").style.borderBottomColor =
          "tranparent";
        document.getElementById("Mens_nav").style.fontWeight = "300";
  
        document.getElementById("Womens_pro").style.display = "none";
        document.getElementById("Womens_nav").style.borderBottomColor =
          "transparent";
        document.getElementById("Womens_nav").style.fontWeight = "300";
  
        document.getElementById("Accessories_pro").style.display = "block";
        document.getElementById("Accessories_nav").style.borderBottomColor =
          "gold";
        document.getElementById("Accessories_nav").style.fontWeight = "800";
  
        flag3 = false;
      }
    });
  }

  export {homedisp}