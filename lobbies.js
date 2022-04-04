import { lobbyScoreBoard } from "./scoreboard.js"

let scoreboard = await lobbyScoreBoard()

let users = [];
let users_details = [];
async function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


const searchInput = document.querySelector("[data-search]");
const userCardTemplate = document.querySelector("[data-user-template]")

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
async function buildTable(data, tableClass) {
    var table = document.querySelector(tableClass)

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${i}</td>
                    <td data-label="Member" style="font-size: 12px">${data[i].address}</td>
                    <td data-label="Score">${numberWithCommas(data[i].score)}</td>
              </tr>`
        table.innerHTML += row
    }
}


readTextFile("./lobbies.json", function(json) {
    var data = JSON.parse(json);

    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        card.querySelector(".card-name").textContent = user.name;
        card.querySelector(".card-address").textContent = user.address;
        card.querySelector(".card-join").href = `https://zkga.me/play/${user.address}`;
        card.querySelector(".card-spectate").href = `https://wonderful-druid-5c3a7e.netlify.app/play/${user.address}`;
        card.querySelector(".card-details").id = user.id;
        document.querySelector(".cards").append(card);
        return {
            id: user.id,
            name: user.name,
            address: user.address,
            element: card
        }
    })

    users_details = data.map(user_detail => {
        const detailing = document.querySelector("[details-template]").content.cloneNode(true).children[0];
        detailing.querySelector(".lobby-name").textContent = user_detail.name;
        detailing.querySelector(".lobby-address").textContent = user_detail.address;
        detailing.querySelector(".details").id = user_detail.id;
        document.querySelector(".detail-boxes").append(detailing);
        return {
            id: user_detail.id,
            name: user_detail.name,
            address: user_detail.address,
            element: detailing
        }

    })

    searchInput.addEventListener("input", async e => {
        const value = e.target.value.toLowerCase();
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.address.toLowerCase().includes(value);
            user.element.classList.toggle("hide", !isVisible);

        })

    })


    let cardDetails = document.querySelectorAll('.card-details');
    let details = document.querySelectorAll('.details-box');

    details.forEach(y => {
        y.classList.toggle("hide")
    })
    cardDetails.forEach(x => {
        x.addEventListener('click', () => {
            const value = x.id
            users_details.forEach(a => {
                const isVisible = a.id == value;
                a.element.classList.toggle('hide', !isVisible);
            })
        })

    })

    buildTable(scoreboard, '.lobby-tbody')
})