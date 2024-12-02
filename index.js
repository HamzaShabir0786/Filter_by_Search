var myTable = document.getElementById("myTable");
let tr = document.getElementsByTagName("tr");

const searchFun = () => {
  let input = document.getElementById("myInput").value.toUpperCase();
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    console.log(td);

    if (td) {
      let textValue = td.textContent || td.innerText;
      if (textValue.toUpperCase().indexOf(input) > -1) {
        tr[i].style.display = "";
        myTable.style.height = "6rem";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

let input = document.querySelector("input");
input.addEventListener("keyup", () => {
  searchFun();
});
