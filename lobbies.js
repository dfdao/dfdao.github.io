import { lobbyScoreBoard, lobbiesCreated } from "./scoreboard.js"

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


readTextFile("./lobbies.json", async function(json) {
    var data = JSON.parse(json);
    let xyz = await lobbiesCreated()

    for (var i = 0; i < xyz.length; i++) {
        data.push(xyz[i])
    }
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
        detailing.querySelector(".lobby-tbody").id = user_detail.id;
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
    async function buildTable(data, tableClass) {

        tableClass.innerHTML = ""
        for (var i = 0; i < data.length; i++) {
            var row = `<tr>
                <td>${i}</td>
                <td data-label="Member" style="font-size: 12px">${data[i].address}</td>
                <td data-label="Score">${numberWithCommas(data[i].score)}</td>
          </tr>`
            tableClass.innerHTML += row
        }
    };

    let cardDetails = document.querySelectorAll('.card-details');
    let details = document.querySelectorAll('.details-box');

    details.forEach(y => {
        y.classList.toggle("hide")
    })
    cardDetails.forEach(x => {
        x.addEventListener('click', () => {
            const value = x.id
            users_details.forEach(async a => {
                const isVisible = a.id == value;
                a.element.classList.toggle('hide', !isVisible);
            })
        });

    })
    cardDetails.forEach(x => {
        x.addEventListener('click', () => {
            const value = x.id
            users_details.forEach(async a => {
                if (a.id == value) {
                    console.log(a.element.querySelector('.lobby-name'))

                    a.element.querySelector(".lobby-tbody").innerHTML = "Loading"
                    buildTable(await lobbyScoreBoard(a.address), a.element.querySelector('.lobby-tbody'));

                }
            })
        }, { once: true });

    })
})