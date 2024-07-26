import React, { useEffect, useRef, useState } from "react";
import { Icon } from "leaflet";
import { useSelector, useDispatch } from "react-redux";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  Popup,
} from "react-leaflet";
import { setStartLocation, setEndLocation } from "../store/routeSlice";
import "leaflet/dist/leaflet.css";
import { MapComponent } from "./MapComponent";
import { LeafletRouting } from "./LeafletRuting";
import { Markers } from "./Markers";
import "leaflet-routing-machine";

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
  }, [dispatch]);

   // create custom icon
   const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",

    iconSize: [38, 38], // size of the icon
  });

  return (
    <>
      <MapContainer  center={startLocation} zoom={13} icon={ customIcon }>
        <LeafletRouting
          onReceiveWaypoints={handleReceiveWaypoints}
          onRouteFound={handleRouteFound}
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapComponent center={startLocation} />
        <Markers />
      </MapContainer>
      {/* Renderiza los waypoints */}
      <div className="flex-col max-w-sm w-full bg-white shadow-md mx-auto">
        <h3>Waypoints:</h3>
        <ul>
          {childWaypoints.map((wp, index) => (
            <li key={index}>{wp.name || "No waypoint available"}</li>
          ))}
        </ul>
      </div>
      {/* Renderiza la información de la ruta */}
      <div className="flex-col max-w-sm w-full bg-white shadow-md mx-auto">
        <h2>Información de Ruta</h2>
        <p>
          <strong>Distancia Total:</strong> {routeInfo.distance} metros
        </p>
        <p>
          <strong>Puntos Intermedios:</strong>
        </p>
        <ul>
          {routeInfo.instructions.map((instruction, index) => (
            <li key={index}>
              <strong> {instruction.type}</strong>
              <br />
              {instruction.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
