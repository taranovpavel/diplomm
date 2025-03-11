import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import React, {useState} from 'react';

const MapComponent = ({placemark, setPlacemark}) => {
    

  const handleMapClick = (event) => {
    const coords = event.get("coords");
    setPlacemark({ coordinates: coords, hint: "Новая метка" });
  };
  return (
    <YMaps>
      <Map
        defaultState={{ center: [42.87, 74.63], zoom: 10 }}
        width="100%"
        height="300px"
        onClick={handleMapClick} 
      >
        {placemark && (
          <Placemark
            geometry={placemark.coordinates}
            properties={{
              hintContent: placemark.hint,
              balloonContent: `Координаты: ${placemark.coordinates.join(", ")}`,
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -30],
            }}
          />
        )}
      </Map>
    </YMaps>
  );
};

export default MapComponent;