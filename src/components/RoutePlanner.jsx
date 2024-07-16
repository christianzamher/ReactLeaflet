import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import { setStartLocation, setEndLocation } from "../store/routeSlice";
import "leaflet/dist/leaflet.css";
import { MapComponent } from "./MapComponent";
import { LeafletRouting } from "./LeafletRuting";

export const RoutePlanner = () => {
  const dispatch = useDispatch();
  const { startLocation, endLocation } = useSelector((state) => state.route);

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

  return (
    <>
      <MapContainer center={startLocation} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapComponent center={startLocation} />
        <CircleMarker center={startLocation} radius={10} />
        <CircleMarker center={endLocation} radius={10} />
        <LeafletRouting />
      </MapContainer>
    </>
  );
};
