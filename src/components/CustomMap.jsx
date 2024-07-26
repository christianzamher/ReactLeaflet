import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';

export const CustomMap = () => {
    const mapRef = useRef(null);
    const controlRef = useRef(null);

    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);
        mapRef.current = map;

        const control = L.Routing.control({
            routeWhileDragging: true,
            plan: new L.Routing.Plan([
                L.latLng(51.505, -0.09),
                L.latLng(51.5075, -0.08)
            ], {
                geocoder: L.Control.Geocoder.nominatim(),
                routeWhileDragging: true
            })
        }).addTo(map);


        // const routingControl = new L.Routing.Control({
        //     waypoints: [
        //       L.latLng(-34.6047, -58.3995),
        //       L.latLng(-34.6036, -58.3985),
        //     ],
        //     routeWhileDragging: true,
        //     geocoder: L.Control.Geocoder.nominatim(),
        //   }).addTo(map);
        controlRef.current = control;

        // Agregar funcionalidad para manejar clics en el mapa y botones
        map.on('click', function(e) {
            const container = document.createElement('div');
            const startBtn = createButton('Comenzar desde esta ubicación', container);
            const destBtn = createButton('Ir a esta ubicación', container);

            L.popup()
               .setContent(container)
               .setLatLng(e.latlng)
               .openOn(map);

            L.DomEvent.on(startBtn, 'click', function() {
                control.spliceWaypoints(0, 1, e.latlng);
                map.closePopup();
            });

            L.DomEvent.on(destBtn, 'click', function() {
                control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
                map.closePopup();
            });
        });

        // Función para crear botones
        function createButton(label, container) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.innerHTML = label;
            container.appendChild(btn);
            return btn;
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
            // No intentemos acceder a _control._container directamente
            // Eliminamos el div que contiene el control de enrutamiento
            if (document.getElementById('routing-control-container')) {
                document.getElementById('routing-control-container').remove();
            }
        };
    }, []);

    return (
        <div id="map" style={{ height: "90vh" , width: "90% "}}>
            {/* Asegúrate de tener un identificador único para el contenedor del control de enrutamiento si decides agregarlo manualmente */}
            <div id="routing-control-container"></div>
        </div>
    );
};

