$(document).ready(function() {
    $("#submit").on("click", function(e) {
        e.preventDefault();
        $("#data_table").empty();

        let ipAdd = $("#ipAdd").val();

        $.ajax({
            url: `https://ipapi.co/${ipAdd}/json`,
            method: "GET"
        }).then(res => {
            console.log(res);
            $("#data_table").append(`
                    <tr><td>Country</td><td>${res.country_name}</td></tr>
                    <tr><td>Country Code</td><td>${res.country_code}</td></tr>
                    <tr><td>Region</td><td>${res.region}</td></tr>
                    <tr><td>City</td><td>${res.city}</td></tr>
                    <tr><td>Postal Code</td><td>${res.postal}</td></tr>
                    <tr><td>Latitude</td><td>${res.latitude}</td></tr>
                    <tr><td>Longitude</td><td>${res.longitude}</td></tr>
                `);
        });
    });
});
