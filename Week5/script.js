//fetch the data from the json file
fetch("users.json")
.then(function(response){
    return response.json();
})

.then(function(users){
    //initialize the output data
    let outputdata = "";
    let temp = document.querySelector("#data-output");
    
    // loop through the users and create the table
    for (let user of users){
        outputdata = outputdata + `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `;
    }

    // output the data to the table
    temp.innerHTML = outputdata;
})