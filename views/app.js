$(document).ready(function() {
    $("#submit").on("click", function(e) {
        e.preventDefault();

        // clear the form for new search
        $("#data_table").empty();

        // check if input is given and is valid
        if ($("#ipAdd").value == "") {
            alert("Please enter a valid ip address");
        }

        let ipAdd = $("#ipAdd").val();

        $.ajax({
            async: true,
            crossDomain: true,
            url: `https://ejaz1-ip-geolocation-v1.p.rapidapi.com/ipgeo`,
            method: "GET",
            headers: {
                "x-rapidapi-host": "ejaz1-ip-geolocation-v1.p.rapidapi.com",
                "x-rapidapi-key":
                    "99481dc939msh2e3c8e5dad0b58ep1fe7d4jsn424a1bf5d81f"
            }
        }).then(res => {
            console.log(res);
            let imgSrc = res.country_flag;
            $("#data_table").append(`
                    <tr><td></td><td><img src="${imgSrc}"></td></tr>
                    <tr><td>Country</td><td>${res.country_name}</td></tr>
                    <tr><td>Country Code</td><td>${res.country_code2}</td></tr>
                    <tr><td>Country Capital</td><td>${res.country_capital}</td></tr>
                    <tr><td>City</td><td>${res.city}</td></tr>
                    <tr><td>zipcode</td><td>${res.zipcode}</td></tr>
                    <tr><td>Latitude</td><td>${res.latitude}</td></tr>
                    <tr><td>Longitude</td><td>${res.longitude}</td></tr>
                `);
        });
    });
});
