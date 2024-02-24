let info = [{}];
fetch("doctorsData.json")
  .then((res) => res.json())
  .then((data) => {
    let container = document.getElementById("main_container");
    data.map((d) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <img src=${d.image}>
        <h2 class="head">${d.name}</h2>
        <p>${d.specialization}</p>
      `;
      console.log(div);
      container.appendChild(div);
    });
  })
  .catch((err) => console.log(err));
