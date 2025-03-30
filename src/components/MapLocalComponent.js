import React, { useState } from "react";
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const MapLocalComponent = ({markers,zoom}) => {
  console.log(markers.length);
  let x = 0
  let y = 0
  markers.map((item)=>{
    x+=item[0]
    y+=item[1]
  })
  return (
    <YMaps>
      <div>
        <Map
          defaultState={{
            center: [x/markers.length,y/markers.length], 
            zoom: zoom,
          }}
          width="100%"
          height="400px"
        >
          {markers.map((coords, index) => (
            <Placemark
              key={index}
              geometry={coords}
              options={{
                iconLayout: "default#image",
                iconImageHref: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -30],
              }}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};

export default MapLocalComponent;