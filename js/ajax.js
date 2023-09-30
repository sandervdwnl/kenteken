function getInfo() {
    var kenteken = document.getElementById("kenteken").value;
    kenteken = kenteken.toUpperCase();
    if ( kenteken.length !== 6 ) {
    alert( 'De invoer is ongeldig' );
    return false;
    }
    // var kenteken = "0001ES";
    // console.log(kenteken);
    $.ajax({
    url: "https://opendata.rdw.nl/resource/qyrd-w56j.json?kenteken=" + kenteken,
    type: "GET",
    dataType: 'json',
    data: {
        "$limit": 5000,
        "$$app_token": "NnFU01CF99CsjkG7hGMIWIqiC"
    }
    }).done(function (data) {
        var response = data[0];
        if ( typeof response !== 'undefined') {
            // alert(response.merk);
            $('#merk').val(response.merk);
            $('#model').val(response.handelsbenaming);
            var bouwjaar = (response.datum_eerste_toelating).substring(0, 4);
            $('#bouwjaar').val(bouwjaar);
        } else {
            alert('Geen resultaat gevonden. Check de invoer');
        }        
    }); 
}
