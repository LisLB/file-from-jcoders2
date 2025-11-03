// var link = "https://cataas.com/cat?json=true";

// fetch(link)
//     .then(x => x.json())
//     .then(y => document.getElementById("cat").innerHTML = `
//         <img src="${y.url}" alt="Ni mace"/>
//         <p>${y.created_at}</p>
//     `)

     var link2 = "https://api.chucknorris.io/jokes/random";

    fetch(link2)
    .then(x => x.json())
    .then(y => document.getElementById("cat").innerHTML = `
        <img src="${y.icon_url}" alt="Chuck Norris"/>
        <p>${y.updated_at}</p>
        <p>${y.value}</p>
    `)