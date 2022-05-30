function check() {
  var checkBox = document.getElementById("checbox");
  var price_monthly = document.getElementsByClassName("price_monthly");
  var price_annually = document.getElementsByClassName("price_annually");

  for (var i = 0; i < price_monthly.length; i++) {
    if (checkBox.checked == true) {
      price_monthly[i].style.display = "none";
      price_annually[i].style.display = "block";
    } else if (checkBox.checked == false) {
      price_monthly[i].style.display = "block";
      price_annually[i].style.display = "none";
    }
  }
}
check();


var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

//hassan Edit

const  elements = document.querySelectorAll(".accordion-btn");

elements.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    //   store the .accordionBody div containing the accordionBody
    let sibling = ele.nextElementSibling;

    // Nested loop for removing active class from all and set accordionBody height to 0
    elements.forEach((item) => {
      item.nextElementSibling.style.height = "0px";
      //   remove class "active" except for the currently clicked item
      item != ele && item.parentNode.classList.remove("active");
    });
    //then toggle the "active" class of clicked item's parent ".accordion-element"
    this.parentNode.classList.toggle("active");

    // set actual height for .accordionBody div if .accordion-element has the class "active"
    if (ele.parentNode.classList.contains("active")) {
      sibling.style.height = sibling.scrollHeight + "px";
    } else {
      sibling.style.height = "0px";
    }
  });
});




