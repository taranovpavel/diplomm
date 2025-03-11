import React, { useState } from "react";
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

const MapLocalComponent = () => {
  const markers=[
    [42.8746, 74.5698], // Бишкек
    [42.6490, 77.0850], // Иссык-Куль
    [41.4287, 76.0005]  // Нарын
  ]
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
            center: [x/3,y/3], // Центрируем карту по первой метке
            zoom: 7,
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