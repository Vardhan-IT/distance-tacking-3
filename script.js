<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Running Distance Tracker</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" /> <!-- Leaflet Map -->
</head>
<body>

    <div class="container">
        <h1>Running Distance Tracker</h1>
        <p><strong>Latitude:</strong> <span id="latitude">0</span></p>
        <p><strong>Longitude:</strong> <span id="longitude">0</span></p>
        <p><strong>Total Distance:</strong> <span id="distance">0</span> km</p>
        
        <button onclick="startTracking()">Start Tracking</button>
        <button onclick="stopTracking()">Stop Tracking</button>
        <button onclick="resetTracking()">Reset</button>
    </div>

    <div id="map"></div> <!-- Map for route tracking -->

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script> <!-- Leaflet Map JS -->
    <script src="script.js"></script>

</body>
</html>
