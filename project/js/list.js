let refreshorderBtn = document.getElementById("refreshorder")
refreshorderBtn.addEventListener("click", function () {
    GetOrder()
})

function GetOrder() {
    let url = 'https://api.sheety.co/c6f30006dde50958665460ff609a5784/flowerBouquet/order';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.order);

            let orderList = document.getElementById("orderList")
            let orderIds = []

            for (let k = orderList.rows.length - 1; k > 0; k--) {
                orderList.deleteRow(k)
            }

            //load all rows from sheety
            for (let i = 0; i < json.order.length; i++) {
                let gName = json.order[i].name;
                let gPhoneNumber = json.order[i].phonenumber;
                let gAddress = json.order[i].address;
                let gFlower = json.order[i].flower;
                let gBouquet = json.order[i].bouquet;
                let gQuantity = json.order[i].quantity;
                let gAdditionalRequest = json.order[i].additionalrequest;
                let gId = json.order[i].id;
                let btnId = "delete" + gId

                //add info to table
                let row = orderList.insertRow(orderList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gPhoneNumber
                row.insertCell(3).innerHTML = gAddress
                row.insertCell(4).innerHTML = gFlower
                row.insertCell(5).innerHTML = gBouquet
                row.insertCell(6).innerHTML = gQuantity
                row.insertCell(7).innerHTML = gAdditionalRequest
                row.insertCell(8).innerHTML = "<button id='" + btnId + "'type='button' class='btn btn-danger'>Delete</button>"

                orderIds.push(btnId)
            }
            for (let j = 0; j < orderIds.length; j++) {
                let el = document.getElementById(orderIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    DeleteOrder(theId)
                })
            }
        });
}



function DeleteOrder(id) {
    let url = 'https://api.sheety.co/c6f30006dde50958665460ff609a5784/flowerBouquet/order/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id" + id + 'deleted!')
            GetOrder()
        });
}