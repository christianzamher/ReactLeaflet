import React from 'react'
import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";

export const LocateControl = createControlComponent(function(props) {
    return new L.Control.Locate(props);
  });
