import React from 'react';
import ReatMapGL, {Marker} from 'react-map-gl';
import * as destination from '../../..//test/seed_destinations'

export default function MAPs() {

    const [viewport, setViewport] = useState({
        latitude: -121.2880059,
        longitude: 38.7521235,
        weight: "100vw",
        height: "100vh",
        zoom: 10
    });

    return (
    <div>
        <ReatMapGL {...viewport} mapboxApitAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapstyle="mapbox://styles/moorem1906/ck1x11bgl1dky1cnnhxszm1j9"
            onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
        >
            {destination.features.map((destination) => (
                <Marker key={destination.}>
                    <div>Dtour</div>
                </Marker>
            ))}
            Dtour Maps
            </ReactMapGL>
    </div>

        );
}

export default MAPs;