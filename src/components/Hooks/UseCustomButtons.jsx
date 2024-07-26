import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

export const UseCustomButtons = (control) => { // Añade control como argumento
  const map = useMap();

  useEffect(() => {
    const container = L.DomUtil.create('div');

    const startBtn = createButton('Start from this location', container);
    const destBtn = createButton('Go to this location', container);

    map.on('click', function(e) {
      L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
    });

    L.DomEvent.on(destBtn, 'click', function() {
        control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
        map.closePopup();
    });

    // Aquí puedes agregar lógica similar para el botón de destino si es necesario
  }, [map, control]); // Añade control como dependencia

  const createButton = (label, container) => {
    const btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
  };

  return null; // Este hook no renderiza nada, solo configura el mapa
};

