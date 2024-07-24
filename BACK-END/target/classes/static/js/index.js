
    $(document).ready(function () {
    $.noConflict();
    console.log("Paginate Data Table")
    $('#example').DataTable({
    select:true});

    console.log("HELLO WORLD")

});


    function openDetailsModal(button) {
    document.getElementById("detailsModal").style.display = "block";

       let id = button.getAttribute('data-id');

    console.log("ID!!!!", id)

        console.log("The table row has ID:", id);

        $.ajax({
        url: `/Snipers/${id}`,
        type: "get",
        contentType: "application/json",
        headers: {
        "X-HTTP-Method-Override": "GET" // Use custom header to indicate "PUT" request
    },
        success: function(detailsData) {


        $("#msisdnDetailsVal").text(detailsData.msisdn);
        $("#customer_id_ownerDetailsVal").text(detailsData.customer_id_owner);
        $("#customer_id_userDetailsVal").text(detailsData.customer_id_user);
        $("#serviceTypeDetailsVal").text(detailsData.serviceType)
        $("#firstNameDetailsVal").text(detailsData.firstname);
        $("#lastNameDetailsVal").text(detailsData.lastname);
        $("#emailDetailsVal").text(detailsData.email);

}
})
}
    function openInsertModal() {
    document.getElementById("insertModal").style.display = "block";
}

    function closeInsertModal() {
    document.getElementById("insertModal").style.display = "none";
}


    function closeUpdateModal() {
    document.getElementById("updateModal").style.display = "none";
}

    function closeDetailsModal() {
    document.getElementById("detailsModal").style.display = "none";
}


    function closeStatisticsModal() {
    document.getElementById("statisticsModal").style.display = "none";
}



<!--INSERT-->
    function insertSniper(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a JavaScript object with the form data
        let sniperData = {
            msisdn: $('#insert_msisdn').val(),
            customer_id_owner: $('#insert_customer_id_owner').val(),
            customer_id_user: $('#insert_customer_id_user').val(),
            serviceType: $('#insert_serviceType').val(),
            firstname: $('#insert_firstname').val(),
            lastname: $('#insert_lastname').val(),
            email: $('#insert_email').val(),
            // Add more fields as needed
        };

    // Send the data as a JSON request to the Spring Boot controller
    fetch('/Snipers/addNewSniper', { // Corrected URL
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
},
    body: JSON.stringify(sniperData)
})
    .then(function(response) {
    if (response.ok) {
    // Handle success here, e.g., show a success message
    alert('Sniper added successfully');

        location.reload()

    } else {
    // Handle errors here, e.g., show an error message
    alert( response.status);
}
})
    .catch(function(error) {
    // Handle network errors here
    console.error('Error:', error);
});

    //Update UI with new sniper

    // Create a new row for the table
    let newRow = document.createElement('tr');

    // Create table cells for each field
    let idCell = document.createElement('td');
    let msisdnCell = document.createElement('td');
    let customerOwnerIdCell = document.createElement('td');
    let customerUserIdCell = document.createElement('td');
    let serviceTypeCell = document.createElement('td');
    let firstnameCell = document.createElement('td');
    let lastnameCell = document.createElement('td');
    let emailCell = document.createElement('td');

    // Populate the cells with values from the form

        msisdnCell.text($('#insert_msisdn').val());
        customerOwnerIdCell.text($('#insert_customer_id_owner').val());
        customerUserIdCell.text($('#insert_customer_id_user').val());
        firstnameCell.text($('#insert_firstname').val());
        lastnameCell.text($('#insert_lastname').val());
        emailCell.text($('#insert_email').val());
        serviceTypeCell.text($('#insert_serviceType').val());
        // Note: For security reasons, you shouldn't populate the password field here.

    // Append the cells to the new row
    newRow.appendChild(idCell);
    newRow.appendChild(msisdnCell);
    newRow.appendChild(customerOwnerIdCell);
    newRow.appendChild(customerUserIdCell);
    newRow.appendChild(serviceTypeCell);
    newRow.appendChild(firstnameCell);
    newRow.appendChild(lastnameCell);
    newRow.appendChild(emailCell);
    // Note: You should not append the password field to the table for security reasons.

    // Append the new row to the table
    let tableBody = document.getElementById('sniperTableBody');
    tableBody.appendChild(newRow);

    // Optionally, you can clear the form fields after insertion



    }
    // Note: You should not clear the password field here for security reasons.


<!-- Add this script to your HTML file -->
    function openUpdateModal(button) {

    let id = button.getAttribute('data-id');

console.log("ID!!!!", id)

    console.log("The table row has ID:", id);

    $.ajax({
    url: `/Snipers/${id}`,
    type: "get",
    contentType: "application/json",
    headers: {
    "X-HTTP-Method-Override": "GET" // Use custom header to indicate "PUT" request
},
    success: function(updatedData) {

    console.log("DATA TO  EDIT:", updatedData);

    $("#msisdnVal").val(updatedData.msisdn);
    $("#customer_id_ownerVal").val(updatedData.customer_id_owner);
    $("#customer_id_userVal").val(updatedData.customer_id_user);
    $("#serviceTypeVal").val(updatedData.serviceType)
    $("#firstnameVal").val(updatedData.firstname);
    $("#lastnameVal").val(updatedData.lastname);
    $("#emailVal").val(updatedData.email);
    $("#roleVal").val(updatedData.role); // Assuming you have a role field


    document.getElementById("updateModal").style.display = "block";

    // You can also update the UI with the new data if needed
},
    error: function(error) {
    console.error("FETCHING  error:", error);
    // Handle errors if needed
}
});


}



    let submitBtn = document.querySelector("#submitUpdatedData")

    submitBtn.addEventListener("click",function (event){

    event.preventDefault(); // Prevent default form submission

    let id = $('#id').val();
    let msisdn = $("#msisdnVal").val();
    let customer_id_ownerVal = $("#customer_id_ownerVal").val();
    let customer_id_userVal = $("#customer_id_userVal").val();
    let serviceTypeVal= $("#serviceTypeVal").val()
    let firstname = $("#firstnameVal").val();
    let lastname = $("#lastnameVal").val();
    let email = $("#emailVal").val();
    let password = $("#passwordVal").val(); // Assuming you have a password field
    let role = $("#roleVal").val(); // Assuming you have a role field

    let dataSet = {
    "id": id,
    "msisdn": msisdn,
    "customer_id_owner": customer_id_ownerVal,
    "customer_id_user": customer_id_userVal,
    "serviceType":serviceTypeVal,
    "firstname": firstname,
    "lastname": lastname,
    "email": email,
    "password": password, // Assuming you have a password field
    "role": role // Assuming you have a role field
};


    alert(JSON.stringify(dataSet))

        $.ajax({
            url: `/Snipers/update/${id}`,
            type: "PUT",
            contentType: "application/json",
            headers: {
                "X-HTTP-Method-Override": "PUT"
            },
            data: JSON.stringify(dataSet),
            success: function(dataSet) {

                console.log("Update successful:", dataSet);


                closeUpdateModal(); // Close the modal after successful update



                location.reload()


                // Handle errors if needed
            },

            error: function(error) {
                console.error(error);
                alert("Failed to Update Sniper");

                $("#msisdn").val(dataSet.msisdn)
                $("#firstname").val(dataSet.firstname);
                $("#lastname").val(dataSet.lastname);
                $("#email").val(dataSet.email);

            }

        });


})







    function openStatisticsModal() {
    document.getElementById("statisticsModal").style.display = "block";

    $.ajax({
    type: "GET",
    url: "/Snipers/stats", // The URL of your controller endpoint
    success: function(data) {
    // Access properties directly from the 'data' object
    var totalCount = data.totalCount;
    var totalPrepaidCount = data.totalPrepaidCount;
    var totalPostpaidCount = data.totalPostpaidCount;

    // Update HTML elements with the received values
    $("#totalCount").text(totalCount);
    $("#totalPrepaidCount").text(totalPrepaidCount);
    $("#totalPostpaidCount").text(totalPostpaidCount);
},
    error: function(xhr, status, error) {
    console.error("Error fetching sniper statistics: " + error);
}
});
}


<!-- Delete User -->


    $(".DeleteBtn").click(function() {
    let id = $(this).closest("tr").find("td:eq(0)").text();
    // Now 'id' contains the value of the 'data-id' attribute of the clicked button

    event.preventDefault();
    console.log("PJaySniper is at STL");

    let tableRow = $(this).closest("tr");

    // Ask for confirmation before deleting
    if (id) {
    // Proceed with the AJAX request

    if (window.confirm('Are you sure you want to delete this item?')) {
    $.ajax({
    url: `/Snipers/${id}`,
    type: 'DELETE',
    success: function () {
    console.log('Sniper deleted successfully');
    tableRow.remove();

       location.reload()

},
    error: function () {
    console.log('Failed to delete sniper');
}
}

);
}}
    }
    );

