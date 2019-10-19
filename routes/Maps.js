import React from 'react';
import ReatMapGL from 'react-map-gl'

export default function App() {

    const [viewport, setViewport] = useState({
        latitude: -121.2880059,
        longitude: 38.7521235,
        weight: "100vw",
        height: "100vh",
        zoom: 10
    });

    return (
    <div>
        <ReactMapGL {...viewport} mapboxApitAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapstyle="mapbox://styles/moorem1906/ck1x11bgl1dky1cnnhxszm1j9"
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
        >
            Dtour Maps
            </ReactMapGL>
    </div>

        );
}