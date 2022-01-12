import {React, useEffect, useState, uesRef} from "react"

// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import { useRef } from "react";

mapboxgl.accessToken = 'pk.eyJ1Ijoic3lsdjkiLCJhIjoiY2t5YW9qZXd6MDdrYzJxcG13cncwdnl3OCJ9.pJh1bPVmCv-iaKyhMHm5Wg'

const mapContainer = useRef(null);
const map = useRef(null);
// default map 
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(9);


const Home = () =>{

    useEffect(()=>{
        if(map.current) return; // initialize map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            sytle: 'mapbox://style/mapbox/streets-v11',
            center: [lng,lat],
            zoom: zoom
        });

    });

    return(
        <div>
            <div ref={mapContainer} className="map-container " />
        <h1>Home Page</h1>

        </div>

    )
}

export default Home