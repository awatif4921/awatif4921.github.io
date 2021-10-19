let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function() {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/c6f30006dde50958665460ff609a5784/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")

            //delete all row in the table
            for(let k = bookingNameList.rows.length - 1; k > 0; k--){
                bookingNameList.deleteRow(k)
            }

            //load all rows from Sheety API
            for(let i = 0; i < json.bookings.length; i++){
            let gName = json.bookings[i].name;
            let gEmail = json.bookings[i].email;
            let gPax = json.bookings[i].pax;
            let gRemarks = json.bookings[i].remarks;
            let gId = json.bookings[i].id;

            let row = bookingNameList.insertRow(bookingNameList.rows.length)
            row.insertCell(0).innerHTML = gId
            row.insertCell(1).innerHTML = gName
            row.insertCell(2).innerHTML = gEmail
            row.insertCell(3).innerHTML = gPax
            row.insertCell(4).innerHTML = gRemarks
            row.insertCell(5).innerHTML = ""
        
            }
        });
}