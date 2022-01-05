let link =
  "https://masterdataapi.nobelprize.org/2.1/laureates?offset=0&limit=150";
let count = 1;

async function EconomicSciences() {
  await fetch(link)
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log("Error:", err.message));

  function initialize(data) {
    var array = data.laureates;
    array.forEach((element) => {
      if (element.nobelPrizes[0].category.en === "Economic Sciences") {
        // console.log(count++ + " " + element.wikipedia.slug);
        document.querySelector(".table-content").innerHTML += `
          <tr>
          <th scope="row">${count++ + "."}</th>
          <td><h5>${element.wikipedia.slug}</h5></td>
          <td> <h6 class=info>${element.nobelPrizes[0].awardYear}</h6></td>
          <td> <a href="${element.wikipedia.english}" class=info>info</a></td>
        </tr>
          `;
      }
    });
    link = data.links.next;
  }
}
EconomicSciences();
