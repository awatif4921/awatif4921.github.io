let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetOrder()
})

function GetOrder() {
    let url = 'https://api.sheety.co/c6f30006dde50958665460ff609a5784/flowerBouquet/order';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.orders);

            let orderList = document.getElementById("orderList")

            for (let k = orderList.rows.length - 1; k > 0; k--) {
                orderList.deleteRow(k)
            }

            for (let i = 0; i < json.orders.length; i++) {
                let gName = json.orders[i].name;
                let gNumber = json.orders[i].number;
                let gAddress = json.orders[i].address;
                let gFlower = json.orders[i].flower;
                let gBouquet = json.orders[i].bouquet;
                let gAdditionalRequest = json.orders[i].addinfo;
                let gNo = json.orders[i].no;
                let btnId = "delete" + gId;

                let row = orderList.insertRow(orderList.rows.length)
                let row = orderList.insertRow(OrderList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gName
                row.insertCell(2).innerHTML = gNumber
                row.insertCell(3).innerHTML = gAddress
                row.insertCell(4).innerHTML = gFlower
                row.insertCell(5).innerHTML = gBouquet
                row.insertCell(6).innerHTML = gAdditionalRequest
                row.insertCell(7).innerHTML = "<button id='" + btnId + "'type='button' class='btn btn-danger' > Delete </button>"


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
    let url = 'https://api.sheety.co/c6f30006dde50958665460ff609a5784/flowerBouquet/order/';
fetch(url, {
  method: 'DELETE',
})
.then((response) => response.json())
.then(() => {
  console.log('Object deleted');
});
}
