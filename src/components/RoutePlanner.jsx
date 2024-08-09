import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { setStartLocation, setEndLocation } from "../store/routeSlice";
import { MapComponent } from "./MapComponent";
import { CustomMap } from "./CustomMap";
import { LeafletRouting } from "./LeafletRuting";
import { Markers } from "./Markers";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

export const RoutePlanner = () => {
  //Geolocalizacion:
  const dispatch = useDispatch();
  const { startLocation, endLocation } = useSelector((state) => state.route);
  const [childWaypoints, setChildWaypoints] = useState([]);
  const [routeInfo, setRouteInfo] = useState({
    distance: 0,
    intermediatePoints: [],
    instructions: [],
  });
  const [routingControl, setRoutingControl] = useState(null);

  console.log(routeInfo);

  const handleReceiveWaypoints = (receivedWaypoints) => {
    setChildWaypoints(receivedWaypoints);
  };

  const handleRouteFound = ({ distance, intermediatePoints, instructions }) => {
    setRouteInfo({ distance, intermediatePoints, instructions }); // Almacenamos las instrucciones también
  };

  //useEffect para ubicar al usuario en la geolocalizcion actual
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setStartLocation([latitude, longitude]));
        },

        (error) => {
          console.error("Error obteniendo la ubicación:", error);
        },
        {
          enableHighAccuracy: true, // activa la ubicacion de gps mas precisa
        }
      );
    } else {
      console.error("Geolocalización no disponible");
    }

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });

    L.Marker.prototype.options.icon = DefaultIcon;
  }, [dispatch]);

  return (
    <>
      {/* Mapa de Leaflet */}
      <MapContainer center={startLocation} zoom={13}>
        <CustomMap control={routingControl} />
      <Markers/>
        <LeafletRouting
          onReceiveWaypoints={handleReceiveWaypoints}
          onRouteFound={handleRouteFound}
          onRoutingControlReady={(rc) => setRoutingControl(rc)}
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapComponent center={startLocation} />
      </MapContainer>
      {/* Renderiza los waypoints */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            {/* Waypoints */}
            {/* {childWaypoints.map((wp, index) => (
              <div key={index} className="flex items-center space-x-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-softWood text-white">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-lg font-bold">{wp.name}</p>
                  <p className="text-gray-700">{wp.description}</p>
                </div>
              </div>
            ))} */}

            {/* Información de Ruta  */}
            <h2 className="text-xl font-semibold mb-4">Informacion de Ruta:</h2>
            <p className="mb-2">
              <strong>Distancia del Recorrido:</strong> {routeInfo.distance}{" "}
              Mts.
            </p>
            <p className="mb-2">
              <strong>Puntos intermedios:</strong>
            </p>
            <ul className="list-none pl-5">
              {routeInfo.instructions.map((instruction, index) => (
                <li key={index} className="flex items-center space-x-2 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full bg-greenT text-white">
                    {index + 1}.
                  </span>
                  <div>
                    <strong>{instruction.type}</strong>
                    <br />
                    {instruction.text}
                    <br />
                    {instruction.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
