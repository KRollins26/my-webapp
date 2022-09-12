import React, {useState} from 'react';
import '../../App.css';
import MapGL, {Marker} from 'react-map-gl';
import './ProjectMap.css';
import * as projectData from '../data/ProjectData';

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1Ijoia2Ryb2xsaW5zIiwiYSI6ImNsNDU2OWRnMTAwaGczbGs1ZDlzZTdpNDgifQ.z6HMShhCQhOIAYYwCjzbIw';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

export default function ProjectMap() {

    const [viewport,setViewport] = useState({
        latitude: 49.2827,
        longitude: -123.1207,
        zoom: 10,
        width: '100vw', 
        height: '100vh',

    })

    return (
        <div className = 'map-container'>
            <MapGL 
            {...viewport}
            mapboxAccessToken = 'pk.eyJ1Ijoia2Ryb2xsaW5zIiwiYSI6ImNsNDU2OWRnMTAwaGczbGs1ZDlzZTdpNDgifQ.z6HMShhCQhOIAYYwCjzbIw'
            mapStyle="mapbox://styles/mapbox/light-v10"
            onMove={evt => setViewport(evt.viewState)}
            >
                {projectData.project_data.map(project => (
                    <Marker 
                        key={project.project_ID} 
                        latitude={project.coordinates[0]}  
                        longitude={project.coordinates[1]}>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                    </Marker>
                ))}

            </MapGL>
        </div>
    );
  }
