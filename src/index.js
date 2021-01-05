import "./styles.css";

function myFunction(e) {
  e.preventDefault();
  let testdata = [];
  testdata.push(document.getElementById("number").value);
  //let testdata = [1, 2, 3, 12, 13, 70, 75];
  testdata.map((item) => {
    if ((item >= 3 && item <= 12) || item >= 70) {
      console.log("You get a discount, because you are", item, "years old");
      document.getElementById("app").innerHTML = `
      <h1>Discount</h1>
      <p>You get a discount, because you are ${item} years old </p>
      `;
    } else {
      console.log(
        "You do not get a discount, because you are",
        item,
        "years old"
      );
      document.getElementById("app").innerHTML = `
      <h1>No discount</h1>
       <p>You do not get a discount, because you are ${item} years old </p>
      `;
    }

    return 0;
  });

  document.getElementById("number").value = "";
}

document.getElementById("myForm").onsubmit = function (e) {
  myFunction(e);
};
