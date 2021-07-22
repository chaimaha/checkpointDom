//appel
let btnMoin = Array.from(document.getElementsByClassName("moin"));
let btnPlus = Array.from(document.getElementsByClassName("plus"));
let quantity = Array.from(document.getElementsByClassName("item_quantity"));
let unitPrice = Array.from(document.getElementsByClassName("unitprice"));
let btnRemove = Array.from(document.getElementsByClassName("btndelate"));
let subtotal = document.getElementById("subtotal");
let tax = document.getElementById("taxe");

let btnLike = document.querySelectorAll(".btnlike");
let Like = document.querySelectorAll(".btnlike img");
console.log(btnLike);

//-----------------------------------------------
//btn_PLUS
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    quantity[i].innerHTML++;

    total();
  });
}
//btn_MOIN
for (let i = 0; i < btnMoin.length; i++) {
  btnMoin[i].addEventListener("click", function () {
    if (quantity[i].innerHTML > 1) {
      quantity[i].innerHTML--;
      total();
    }
  });
}
//btn_remove
for (let i = 0; i < btnRemove.length; i++) {
  btnRemove[i].addEventListener("click", function () {
    btnRemove[
      i
    ].parentElement.parentElement.parentElement.parentElement.remove();
    total();
  });
}

//btn_like
for (let i = 0; i < btnLike.length; i++) {
  let btnLike = document.querySelectorAll(".btnlike");
  let Like = document.querySelectorAll(".btnlike img");
  btnLike[i].addEventListener("click", () => {
    if (Like[i].style.fill == "red") {
      Like[i].style.fill = "black";
    } else {
      Like[i].style.fill = "red";
    }
  });
}
//total
function total() {
  let quantity = Array.from(document.getElementsByClassName("item_quantity"));
  let unitPrice = Array.from(document.getElementsByClassName("unitprice"));
  let sum = 0;
  for (let i = 0; i < unitPrice.length; i++) {
    sum = sum + unitPrice[i].innerHTML * quantity[i].innerHTML;
  }

  document.getElementById("subtotal").innerHTML = sum;
  document.getElementById("taxe").innerHTML = (sum * 19) / 100;
  document.getElementById("total").innerHTML = sum + (sum * 19) / 100;
}
