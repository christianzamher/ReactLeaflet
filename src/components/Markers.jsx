import React, { useState, useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import axios from "axios";
import { Icon } from "leaflet";
import L from "leaflet";
import Leaflet from "leaflet";


export const Markers = () => {
  const [markers, setMarkers] = useState([]);
 
  useEffect(() => {
    const dataMarkers = `https://decamino-back.onrender.com/api/restaurants`;
    axios
      .get(dataMarkers)
      .then((response) => {
        const dataRes = response.data;
        const filteredData = dataRes.filter(
          (marker) =>
            marker.location &&
            Array.isArray(marker.location) &&
            marker.location.length === 2
        );
        setMarkers(filteredData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setMarkers]);
Leaflet.Icon.Default.imagePath = '/images/'
   const icon = L.icon({
     iconUrl: "src/assets/6copia.png",
     iconSize: [38, 40]
   });

  L.Marker.prototype.options.icon = icon;
  return (
    <>
      {markers.map((marker, id) => (
        <Marker key={id} position={marker.location}  icon={icon}>
          <Popup position={marker.location} closeButton={true}>
            <div className="    animated fadeIn faster    left-0  flex justify-center items-center  ">
              <div className="block rounded-lg bg-white">
                <div
                  className="relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    className="rounded-lg  sm:m-h-64 md:h-64 w-full"
                    src={marker.photos[0]}
                    alt=""
                  />
                 
                </div>

                <div className="p-2">
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                      {marker.title}
                    </h5>
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 flex">
                      5.0{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </h5>
                  </div>
                  <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200">
                    {marker.description}
                  </p>
                </div>
              
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
