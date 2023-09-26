<script>
    $.ajax({
        url: "https://opendata.rdw.nl/resource/qyrd-w56j.json?kenteken=0001ES",
    type: "GET",
    dataType: 'json',
    data: {
        "$limit" : 5000,
    "$$app_token" : "NnFU01CF99CsjkG7hGMIWIqiC"
    }
}).done(function(data) {
    var response = data[0];
    alert(response);
});
</script>
