document.getElementById("shareButton").addEventListener("click", function() {
    alert("Share your story and inspire others!");
});

document.getElementById("emergencyButton").addEventListener("click", function() {
    var policePhoneNumber = "100";
    window.location.href = "tel:" + policePhoneNumber;
});

document.getElementById("locationButton").addEventListener("click", function() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var mapUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;
            alert("Your live location: " + mapUrl);
        }, function(error) {
            console.error(error);
            alert("Error retrieving location.");
        });
    } else {
        alert("Geolocation is not supported in this browser.");
    }
});
document.getElementById("incidentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var incidentType = document.getElementById("incidentType").value;
    var incidentDetails = document.getElementById("incidentDetails").value;
    var isAnonymous = document.getElementById("anonymous").checked;
    
    var reportMessage = "Incident Type: " + incidentType + "\n";
    reportMessage += "Incident Details: " + incidentDetails + "\n";
    
    if (isAnonymous) {
        reportMessage += "Reported Anonymously";
    } else {
        reportMessage += "Reported with Personal Details";
    }
    
    alert("Incident reported:\n\n" + reportMessage);
});

