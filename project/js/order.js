let OrdernowBtn = document.getElementById("Ordernow")
OrdernowBtn.addEventListener("click", function(){
  
  let customerName = document.getElementById("customerName")
  let customerNameVal = customerName.value

  let customerNumber = document.getElementById("customerNumber")
  let customerNumberVal = customerNumber.value

  let customerAddress = document.getElementById("customerAddress")
  let customerAddressVal = customerAddress.value

  let customerFlower = document.getElementById("customerFlower")
  let customerFlowerVal = customerFlower.value

  let customerBouquet = document.getElementById("customerBouquet")
  let customerBouquetVal = customerBouquet.value

  let bouquetQuantity = document.getElementById("bouquetQuantity")
  let bouquetQuantityVal = bouquetQuantity.value

  let addInfo = document.getElementById("addInfo")
  let addInfoVal = addInfo.value

  Order(customerNameVal, customerNumberVal, customerAddressVal,  customerFlowerVal, customerBouquetVal, bouquetQuantityVal, addInfoVal)

})

function Order(customerName, customerNumber, customerAddress, customerFlower, customerBouquet, bouquetQuantity, addInfo){
  let url = 'https://api.sheety.co/c6f30006dde50958665460ff609a5784/flowerBouquet/order';
  let body = {
    order: {
      name: customerName,
      number: customerNumber,
      address: customerAddress,
      flower: customerFlower,
      bouquet: customerBouquet,
      quantity: bouquetQuantity,
      additionalinfo: addInfo
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.order);
  });
}