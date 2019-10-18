const mongoose = require('mongoose');
const keys = require('../config/keys');
let DestinationModel = require('../models/Destination');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

let cities = [
    {"name": "Rochester","latitude": -77.6109219, "longitude": 43.16103, "price": 16},
    {"name": "Des Moines","latitude": -93.6091064, "longitude": 41.6005448, "price": 60},
    {"name": "Modesto","latitude": -120.9968782, "longitude": 37.6390972, "price": 63},
    {"name": "Fayetteville","latitude": -78.8783585, "longitude": 35.0526641, "price": 105},
    {"name": "Tacoma","latitude": -122.4442906, "longitude": 47.2528768, "price": 25},
    {"name": "Oxnard","latitude": -119.1770516, "longitude": 34.1975048, "price": 19},
    {"name": "Fontana","latitude": -117.435048, "longitude": 34.0922335, "price": 109},
    {"name": "Columbus","latitude": -84.9877094, "longitude": 32.4609764, "price": 46},
    {"name": "Montgomery","latitude": -86.2999689, "longitude": 32.3668052, "price": 36},
    {"name": "Moreno Valley","latitude": -117.2296717, "longitude": 33.9424658, "price": 94},
    {"name": "Shreveport","latitude": -93.7501789, "longitude": 32.5251516, "price": 52},
    {"name": "Aurora","latitude": -88.3200715, "longitude": 41.7605849, "price": 76},
    {"name": "Yonkers","latitude": -73.8987469, "longitude": 40.9312099, "price": 93},
    {"name": "Akron","latitude": -81.5190053, "longitude": 41.0814447, "price": 108},
    {"name": "Huntington Beach","latitude": -117.9992265, "longitude": 33.660297, "price": 66},
    {"name": "Little Rock","latitude": -92.2895948, "longitude": 34.7464809, "price": 74},
    {"name": "Augusta-Richmond County","latitude": -82.0105148, "longitude": 33.4734978, "price": 47},
    {"name": "Amarillo","latitude": -101.8312969, "longitude": 35.2219971, "price": 22},
    {"name": "Glendale","latitude": -118.255075, "longitude": 34.1425078, "price": 14},
    {"name": "Mobile","latitude": -88.0398912, "longitude": 30.6953657, "price": 69},
    {"name": "Grand Rapids","latitude": -85.6680863, "longitude": 42.9633599, "price": 96},
    {"name": "Salt Lake City","latitude": -111.8910474, "longitude": 40.7607793, "price": 76},
    {"name": "Tallahassee","latitude": -84.2807329, "longitude": 30.4382559, "price": 43},
    {"name": "Huntsville","latitude": -86.5861037, "longitude": 34.7303688, "price": 73},
    {"name": "Grand Prairie","latitude": -96.9977846, "longitude": 32.7459645, "price": 74},
    {"name": "Knoxville","latitude": -83.9207392, "longitude": 35.9606384, "price": 96},
    {"name": "Worcester","latitude": -71.8022934, "longitude": 42.2625932, "price": 26},
    {"name": "Newport News","latitude": -76.4730122, "longitude": 37.0870821, "price": 108},
    {"name": "Brownsville","latitude": -97.4974838, "longitude": 25.9017472, "price": 90},
    {"name": "Overland Park","latitude": -94.6707917, "longitude": 38.9822282, "price": 98},
    {"name": "Santa Clarita","latitude": -118.542586, "longitude": 34.3916641, "price": 39},
    {"name": "Providence","latitude": -71.4128343, "longitude": 41.8239891, "price": 82},
    {"name": "Garden Grove","latitude": -117.9414477, "longitude": 33.7739053, "price": 77},
    {"name": "Chattanooga","latitude": -85.3096801, "longitude": 35.0456297, "price": 104},
    {"name": "Oceanside","latitude": -117.3794834, "longitude": 33.1958696, "price": 19},
    {"name": "Jackson","latitude": -90.1848103, "longitude": 32.2987573, "price": 29},
    {"name": "Fort Lauderdale","latitude": -80.1373174, "longitude": 26.1224386, "price": 12},
    {"name": "Santa Rosa","latitude": -122.7140548, "longitude": 38.440429, "price": 44},
    {"name": "Rancho Cucamonga","latitude": -117.5931084, "longitude": 34.1063989, "price": 10},
    {"name": "Port St. Lucie","latitude": -80.3582261, "longitude": 27.2730492, "price": 27},
    {"name": "Tempe","latitude": -111.9400054, "longitude": 33.4255104, "price": 42},
    {"name": "Ontario","latitude": -117.6508876, "longitude": 34.0633443, "price": 106},
    {"name": "Vancouver","latitude": -122.6614861, "longitude": 45.6387281, "price": 63},
    {"name": "Cape Coral","latitude": -81.9495331, "longitude": 26.5628537, "price": 56},
    {"name": "Sioux Falls","latitude": -96.7311034, "longitude": 43.5445959, "price": 54},
    {"name": "Springfield","latitude": -93.2922989, "longitude": 37.2089572, "price": 20},
    {"name": "Peoria","latitude": -112.2373779, "longitude": 33.5805955, "price": 58},
    {"name": "Pembroke Pines","latitude": -80.2962555, "longitude": 26.007765, "price": 100},
    {"name": "Elk Grove","latitude": -121.3716178, "longitude": 38.4087993, "price": 40},
    {"name": "Salem","latitude": -123.0350963, "longitude": 44.9428975, "price": 94},
    {"name": "Lancaster","latitude": -118.1541632, "longitude": 34.6867846, "price": 68},
    {"name": "Corona","latitude": -117.5664384, "longitude": 33.8752935, "price": 87},
    {"name": "Eugene","latitude": -123.0867536, "longitude": 44.0520691, "price": 105},
    {"name": "Palmdale","latitude": -118.1164613, "longitude": 34.5794343, "price": 57},
    {"name": "Salinas","latitude": -121.6555013, "longitude": 36.6777372, "price": 67},
    {"name": "Springfield","latitude": -72.589811, "longitude": 42.1014831, "price": 10},
    {"name": "Pasadena","latitude": -95.2091006, "longitude": 29.6910625, "price": 69},
    {"name": "Fort Collins","latitude": -105.084423, "longitude": 40.5852602, "price": 58},
    {"name": "Hayward","latitude": -122.0807964, "longitude": 37.6688205, "price": 66},
    {"name": "Pomona","latitude": -117.7499909, "longitude": 34.055103, "price": 105},
    {"name": "Cary","latitude": -78.7811169, "longitude": 35.79154, "price": 179},
    {"name": "Rockford","latitude": -89.0939952, "longitude": 42.2711311, "price": 27},
    {"name": "Alexandria","latitude": -77.0469214, "longitude": 38.8048355, "price": 80},
    {"name": "Escondido","latitude": -117.086421, "longitude": 33.1192068, "price": 11},
    {"name": "McKinney","latitude": -96.6397822, "longitude": 33.1972465, "price": 19},
    {"name": "Kansas City","latitude": -94.6274636, "longitude": 39.114053, "price": 11},
    {"name": "Joliet","latitude": -88.0817251, "longitude": 41.525031, "price": 52},
    {"name": "Sunnyvale","latitude": -122.0363496, "longitude": 37.36883, "price": 36},
    {"name": "Torrance","latitude": -118.3406288, "longitude": 33.8358492, "price": 83},
    {"name": "Bridgeport","latitude": -73.1951767, "longitude": 41.1865478, "price": 18},
    {"name": "Lakewood","latitude": -105.0813734, "longitude": 39.7047095, "price": 70},
    {"name": "Hollywood","latitude": -80.1494901, "longitude": 26.0112014, "price": 101},
    {"name": "Paterson","latitude": -74.171811, "longitude": 40.9167654, "price": 91},
    {"name": "Naperville","latitude": -88.1535352, "longitude": 41.7508391, "price": 75},
    {"name": "Syracuse","latitude": -76.1474244, "longitude": 43.0481221, "price": 104},
    {"name": "Mesquite","latitude": -96.5991593, "longitude": 32.7667955, "price": 76},
    {"name": "Dayton","latitude": -84.1916069, "longitude": 39.7589478, "price": 75},
    {"name": "Savannah","latitude": -81.0998342, "longitude": 32.0835407, "price": 108},
    {"name": "Clarksville","latitude": -87.3594528, "longitude": 36.5297706, "price": 52},
    {"name": "Orange","latitude": -117.8531119, "longitude": 33.7877944, "price": 78},
    {"name": "Pasadena","latitude": -118.1445155, "longitude": 34.1477849, "price": 14},
    {"name": "Fullerton","latitude": -117.9242966, "longitude": 33.8703596, "price": 87},
    {"name": "Killeen","latitude": -97.7277959, "longitude": 31.1171194, "price": 11},
    {"name": "Frisco","latitude": -96.8236116, "longitude": 33.1506744, "price": 15},
    {"name": "Hampton","latitude": -76.3452218, "longitude": 37.0298687, "price": 102},
    {"name": "McAllen","latitude": -98.2300124, "longitude": 26.2034071, "price": 20},
    {"name": "Warren","latitude": -83.0146526, "longitude": 42.5144566, "price": 51},
    {"name": "Bellevue","latitude": -122.2006786, "longitude": 47.610377, "price": 61},
    {"name": "West Valley City","latitude": -112.0010501, "longitude": 40.6916132, "price": 69},
    {"name": "Columbia","latitude": -81.0348144, "longitude": 34.0007104, "price": 100},
    {"name": "Olathe","latitude": -94.8191285, "longitude": 38.8813958, "price": 88},
    {"name": "Sterling Heights","latitude": -83.0302033, "longitude": 42.5803122, "price": 58},
    {"name": "New Haven","latitude": -72.9278835, "longitude": 41.308274, "price": 30},
    {"name": "Miramar","latitude": -80.3035602, "longitude": 25.9860762, "price": 98},
    {"name": "Waco","latitude": -97.1466695, "longitude": 31.549333, "price": 54},
    {"name": "Thousand Oaks","latitude": -118.8375937, "longitude": 34.1705609, "price": 17},
    {"name": "Cedar Rapids","latitude": -91.6656232, "longitude": 41.9778795, "price": 97},
    {"name": "Charleston","latitude": -79.9310512, "longitude": 32.7764749, "price": 77},
    {"name": "Visalia","latitude": -119.2920585, "longitude": 36.3302284, "price": 33},
    {"name": "Topeka","latitude": -95.6890185, "longitude": 39.0558235, "price": 105},
    {"name": "Elizabeth","latitude": -74.2107006, "longitude": 40.6639916, "price": 66},
    {"name": "Gainesville","latitude": -82.3248262, "longitude": 29.6516344, "price": 65},
    {"name": "Thornton","latitude": -104.9719243, "longitude": 39.8680412, "price": 86},
    {"name": "Roseville","latitude": -121.2880059, "longitude": 38.7521235, "price": 75},
    {"name": "Carrollton","latitude": -96.8899636, "longitude": 32.9756415, "price": 97},
    {"name": "Coral Springs","latitude": -80.2706044, "longitude": 26.271192, "price": 27},
    {"name": "Stamford","latitude": -73.5387341, "longitude": 41.0534302, "price": 115},
    {"name": "Simi Valley","latitude": -118.781482, "longitude": 34.2694474, "price": 26},
    {"name": "Concord","latitude": -122.0310733, "longitude": 37.9779776, "price": 97},
    {"name": "Hartford","latitude": -72.6850932, "longitude": 41.7637111, "price": 76},
    {"name": "Kent","latitude": -122.2348431, "longitude": 47.3809335, "price": 38},
    {"name": "Lafayette","latitude": -92.0198427, "longitude": 30.2240897, "price": 122},
    {"name": "Midland","latitude": -102.0779146, "longitude": 31.9973456, "price": 99},
    {"name": "Surprise","latitude": -112.3679279, "longitude": 33.6292337, "price": 99}
]

let total = 0

function saveCities() {
    return new Promise((resolve, reject) => {
        cities.forEach(city => {
            let destination = new DestinationModel({
                name: city.name,
                location: { type: 'Point', coordinates: [city.latitude, city.longitude] },
                price: city.price
            });

            destination.save().then(doc => {
                total += 1;
                console.log(doc.name);
                if (total === cities.length) {
                    resolve('done')
                }
            });

        });
    });
}


saveCities().then(() => {
    mongoose.disconnect();
})