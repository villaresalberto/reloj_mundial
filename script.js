// Lista de zonas horarias por país
const zones = {
    'Chicago': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [41.8781, -87.6298] },
    'Houston': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [29.7604, -95.3698] },
    'Phoenix': { timezone: 'America/Phoenix', capital: 'Washington, D.C.', latlng: [33.4484, -112.0740] },
    'Philadelphia': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [39.9526, -75.1652] },
    'San Antonio': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [29.4241, -98.4936] },
    'San Diego': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [32.7157, -117.1611] },
    'Dallas': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [32.7767, -96.7970] },
    'San Jose': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [37.3382, -121.8863] },
    'Austin': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [30.2672, -97.7431] },
    'Jacksonville': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [30.3322, -81.6557] },
    'Fort Worth': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [32.7555, -97.3308] },
    'Columbus': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [39.9612, -82.9988] },
    'Charlotte': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [35.2271, -80.8431] },
    'San Francisco': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [37.7749, -122.4194] },
    'Indianapolis': { timezone: 'America/Indiana/Indianapolis', capital: 'Washington, D.C.', latlng: [39.7684, -86.1581] },
    'Seattle': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [47.6062, -122.3321] },
    'Denver': { timezone: 'America/Denver', capital: 'Washington, D.C.', latlng: [39.7392, -104.9903] },
    'Washington, D.C.': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [38.9072, -77.0369] },
    'Boston': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [42.3601, -71.0589] },
    'El Paso': { timezone: 'America/Denver', capital: 'Washington, D.C.', latlng: [31.7619, -106.4850] },
    'Detroit': { timezone: 'America/Detroit', capital: 'Washington, D.C.', latlng: [42.3314, -83.0458] },
    'Memphis': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [35.1495, -90.0490] },
    'Portland': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [45.5051, -122.6750] },
    'Oklahoma City': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [35.4676, -97.5164] },
    'Las Vegas': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [36.1699, -115.1398] },
    'Louisville': { timezone: 'America/Kentucky/Louisville', capital: 'Washington, D.C.', latlng: [38.2527, -85.7585] },
    'Baltimore': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [39.2904, -76.6122] },
    'Milwaukee': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [43.0389, -87.9065] },
    'Albuquerque': { timezone: 'America/Denver', capital: 'Washington, D.C.', latlng: [35.0844, -106.6504] },
    'Tucson': { timezone: 'America/Phoenix', capital: 'Washington, D.C.', latlng: [32.2226, -110.9747] },
    'Fresno': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [36.7378, -119.7871] },
    'Sacramento': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [38.5816, -121.4944] },
    'Kansas City': { timezone: 'America/Chicago', capital: 'Washington, D.C.', latlng: [39.0997, -94.5786] },
    'Atlanta': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [33.7490, -84.3880] },
    'Miami': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [25.7617, -80.1918] },
    'Montreal': { timezone: 'America/Montreal', capital: 'Ottawa', latlng: [45.5017, -73.5673] },
    'Calgary': { timezone: 'America/Edmonton', capital: 'Ottawa', latlng: [51.0447, -114.0719] },
    'Edmonton': { timezone: 'America/Edmonton', capital: 'Ottawa', latlng: [53.5461, -113.4938] },
    'Winnipeg': { timezone: 'America/Winnipeg', capital: 'Ottawa', latlng: [49.8951, -97.1384] },
    'Hamilton': { timezone: 'America/Toronto', capital: 'Ottawa', latlng: [43.2557, -79.8711] },
    'Quebec City': { timezone: 'America/Toronto', capital: 'Ottawa', latlng: [46.8139, -71.2082] },
    'Halifax': { timezone: 'America/Halifax', capital: 'Ottawa', latlng: [44.6488, -63.5752] },
    'Victoria': { timezone: 'America/Vancouver', capital: 'Ottawa', latlng: [48.4284, -123.3656] },
    'Norway': { timezone: 'Europe/Oslo', capital: 'Oslo', latlng: [60.4720, 8.4689] },
    'Bolivia': { timezone: 'America/La_Paz', capital: 'La Paz', latlng: [-16.5000, -68.1500] },
    'Cuba': { timezone: 'America/Havana', capital: 'Havana', latlng: [23.1136, -82.3666] },
    'Venezuela': { timezone: 'America/Caracas', capital: 'Caracas', latlng: [10.4806, -66.9036] },
    'Dominican Republic': { timezone: 'America/Santo_Domingo', capital: 'Santo Domingo', latlng: [18.7357, -70.1627] },
    'China': { timezone: 'Asia/Shanghai', capital: 'Beijing', latlng: [35.8617, 104.1954] },
    'India': { timezone: 'Asia/Kolkata', capital: 'New Delhi', latlng: [20.5937, 78.9629] },
    'Japan': { timezone: 'Asia/Tokyo', capital: 'Tokyo', latlng: [36.2048, 138.2529] },
    'South Korea': { timezone: 'Asia/Seoul', capital: 'Seoul', latlng: [35.9078, 127.7669] },
    'Thailand': { timezone: 'Asia/Bangkok', capital: 'Bangkok', latlng: [15.8700, 100.9925] },
    'Indonesia': { timezone: 'Asia/Jakarta', capital: 'Jakarta', latlng: [-0.7893, 113.9213] },
    'Malaysia': { timezone: 'Asia/Kuala_Lumpur', capital: 'Kuala Lumpur', latlng: [4.2105, 101.9758] },
    'Singapore': { timezone: 'Asia/Singapore', capital: 'Singapore', latlng: [1.3521, 103.8198] },
    'Philippines': { timezone: 'Asia/Manila', capital: 'Manila', latlng: [12.8797, 121.7740] },
    'Vietnam': { timezone: 'Asia/Ho_Chi_Minh', capital: 'Hanoi', latlng: [14.0583, 108.2772] },
    'Rusia': { timezone: 'Europe/Moscow', capital: 'Moscú', latlng: [55.755826, 37.617300] },
    'France': { timezone: 'Europe/Paris', capital: 'Paris', latlng: [46.6034, 1.8883] },
    'Germany': { timezone: 'Europe/Berlin', capital: 'Berlin', latlng: [51.1657, 10.4515] },
    'United Kingdom': { timezone: 'Europe/London', capital: 'London', latlng: [55.3781, -3.4360] },
    'Italy': { timezone: 'Europe/Rome', capital: 'Rome', latlng: [41.8719, 12.5674] },
    'Spain': { timezone: 'Europe/Madrid', capital: 'Madrid', latlng: [40.4637, -3.7492] },
    'Netherlands': { timezone: 'Europe/Amsterdam', capital: 'Amsterdam', latlng: [52.1326, 5.2913] },
    'Belgium': { timezone: 'Europe/Brussels', capital: 'Brussels', latlng: [50.8503, 4.3517] },
    'Sweden': { timezone: 'Europe/Stockholm', capital: 'Stockholm', latlng: [60.1282, 18.6435] },
    'Switzerland': { timezone: 'Europe/Zurich', capital: 'Zurich', latlng: [46.8182, 8.2275] },
    'Austria': { timezone: 'Europe/Vienna', capital: 'Vienna', latlng: [47.5162, 14.5501] },
    'New York': { timezone: 'America/New_York', capital: 'Washington, D.C.', latlng: [40.7128, -74.0060] },
    'Los Angeles': { timezone: 'America/Los_Angeles', capital: 'Washington, D.C.', latlng: [34.0522, -118.2437] },
    'São Paulo': { timezone: 'America/Sao_Paulo', capital: 'Brasília', latlng: [-23.5505, -46.6333] },
    'Mexico City': { timezone: 'America/Mexico_City', capital: 'Mexico City', latlng: [19.4326, -99.1332] },
    'Buenos Aires': { timezone: 'America/Argentina/Buenos_Aires', capital: 'Buenos Aires', latlng: [-34.6037, -58.3816] },
    'Toronto': { timezone: 'America/Toronto', capital: 'Ottawa', latlng: [43.6510, -79.3470] },
    'Vancouver': { timezone: 'America/Vancouver', capital: 'Ottawa', latlng: [49.2827, -123.1207] },
    'Lima': { timezone: 'America/Lima', capital: 'Lima', latlng: [-12.0464, -77.0428] },
    'Bogotá': { timezone: 'America/Bogota', capital: 'Bogotá', latlng: [4.6100, -74.0833] },
    'Santiago': { timezone: 'America/Santiago', capital: 'Santiago', latlng: [-33.4489, -70.6693] },
    'Cairo': { timezone: 'Africa/Cairo', capital: 'Cairo', latlng: [30.0444, 31.2357] },
    'Johannesburg': { timezone: 'Africa/Johannesburg', capital: 'Pretoria', latlng: [-26.2041, 28.0473] },
    'Nairobi': { timezone: 'Africa/Nairobi', capital: 'Nairobi', latlng: [-1.2864, 36.8172] },
    'Lagos': { timezone: 'Africa/Lagos', capital: 'Lagos', latlng: [6.5244, 3.3792] },
    'Addis Ababa': { timezone: 'Africa/Addis_Ababa', capital: 'Addis Ababa', latlng: [9.1450, 40.4897] },
    'Casablanca': { timezone: 'Africa/Casablanca', capital: 'Rabat', latlng: [34.0209, -6.8416] },
    'Algiers': { timezone: 'Africa/Algiers', capital: 'Algiers', latlng: [36.7372, 3.0865] },
    'Accra': { timezone: 'Africa/Accra', capital: 'Accra', latlng: [5.6037, -0.1870] },
    'Kinshasa': { timezone: 'Africa/Kinshasa', capital: 'Kinshasa', latlng: [-4.4419, 15.2663] },
    'Tunis': { timezone: 'Africa/Tunis', capital: 'Tunis', latlng: [33.8869, 9.5375] },
    'Sydney': { timezone: 'Australia/Sydney', capital: 'Canberra', latlng: [-33.8688, 151.2093] },
    'Melbourne': { timezone: 'Australia/Melbourne', capital: 'Canberra', latlng: [-37.8136, 144.9631] },
    'Brisbane': { timezone: 'Australia/Brisbane', capital: 'Canberra', latlng: [-27.4698, 153.0251] },
    'Perth': { timezone: 'Australia/Perth', capital: 'Canberra', latlng: [-31.9505, 115.8605] },
    'Adelaide': { timezone: 'Australia/Adelaide', capital: 'Canberra', latlng: [-34.9285, 138.6007] },
    'Hobart': { timezone: 'Australia/Hobart', capital: 'Canberra', latlng: [-42.8821, 147.3272] },
    'Darwin': { timezone: 'Australia/Darwin', capital: 'Canberra', latlng: [-12.4634, 130.8456] },
    'Canberra': { timezone: 'Australia/Canberra', capital: 'Canberra', latlng: [-35.2809, 149.1300] },
    'Gold Coast': { timezone: 'Australia/Canberra', capital: 'Canberra', latlng: [-28.0167, 153.4000] },
    'Newcastle': { timezone: 'Australia/Canberra', capital: 'Canberra', latlng: [-32.9272, 151.7767] }
};

// Función para formatear la fecha
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mes de 1 a 12
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Función para actualizar la hora en la zona horaria seleccionada
function updateClock(timezone) {
    if (!timezone) return;

    const now = new Date();
    
    // Obtener la hora y la fecha en la zona horaria seleccionada
    const options = {
        timeZone: timezone,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('es-ES', options);
    const parts = formatter.formatToParts(now);

    const formattedDate = `${parts.find(p => p.type === 'day').value}/${parts.find(p => p.type === 'month').value}/${parts.find(p => p.type === 'year').value}`;
    const time = `${parts.find(p => p.type === 'hour').value}:${parts.find(p => p.type === 'minute').value}:${parts.find(p => p.type === 'second').value}`;

    document.getElementById('clock').textContent = `${formattedDate} ${time}`;

    // Mostrar la capital del país seleccionado
    const countryInfo = Object.keys(zones).find(country => zones[country].timezone === timezone);
    const capital = countryInfo ? zones[countryInfo].capital : '';
    document.getElementById('capital-info').textContent = `Capital: ${capital}`;
}

// Inicializar mapa
function initializeMap() {
    const map = L.map('map').setView([20, 0], 2); // Centro del mapa y zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Agregar marcadores al mapa
    Object.keys(zones).forEach(country => {
        const latlng = zones[country].latlng;
        if (latlng) {
            L.marker(latlng)
                .addTo(map)
                .bindPopup(`${country} (${zones[country].capital})`)
                .on('click', () => {
                    updateClock(zones[country].timezone);
                    clearInterval(realTimeInterval);
                    realTimeInterval = setInterval(() => updateClock(zones[country].timezone), 1000);
                });
        }
    });
}

// Inicializar mapa y reloj
initializeMap();
let realTimeInterval;

