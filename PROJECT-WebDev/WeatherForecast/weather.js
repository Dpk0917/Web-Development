async function getMeteomaticsWeather() {
    const username = "deepakwealther_singh_deepak";
    const password = "V3868dHQskDOPi83FMV7";

    // You can customize this for any city coordinates (e.g., New Delhi)
    const latitude = 28.6139;
    const longitude = 77.2090;
    const coords = `${latitude},${longitude}`;

    // Get current ISO time in required format (UTC)
    const now = new Date().toISOString().split('.')[0] + "Z";

    // Meteomatics API URL for current temperature in Celsius at given coords
    const url = `https://api.meteomatics.com/${now}/t_2m:C/${coords}/json`;

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        console.log("API Data:", data);

        // Extract temperature value
        const temperature = data.data[0].coordinates[0].dates[0].value;

        // Show in your result div
        document.getElementById("result").innerHTML = `
            <strong>📍 Coordinates:</strong> ${coords}<br>
            🌡️ Temperature: ${temperature}°C
        `;
    } catch (error) {
        console.error("Fetch Error:", error);
        document.getElementById("result").innerHTML = "⚠️ Failed to fetch weather data.";
    }
}
