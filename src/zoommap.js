import logo from './logo.svg';
import * as React from "react";
import { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';
import BELIEF from './data/belief.json';
import BIASES from './data/biases.json';
import CARING from './data/caring.json';
import COLONIALISM from './data/colonialism.json';
import COMMUNAL from './data/communal.json';
import EDU from './data/education.json';
import JUSTICE from './data/justice.json';
import MOTHER from './data/motherhood.json';
import POLITIC from './data/politic.json';
import REPRO from './data/reproductive.json';
import SEX from './data/sex.json';
import SLAVERY from './data/slavery.json';
import TRAD from './data/traditional.json';
import VIOLENCE from './data/violence.json';
import { Pincategoryviolence, Pincategorytrad, Pincategoryslavery, Pincategorysex, Pincategoryrepro, Pincategorymother, Pincategoryjustice, Pincategoryedu, Pincategorycommunal, Pincategorycolonialism, Pincategorycaring, Pincategorybelief, Pincategorybiases, Pincategorypolitic } from './pin/pins.tsx';


import Map, { Source, Layer, FullscreenControl, Marker, Popup, FlyToInterpolator, NavigationControl } from "react-map-gl";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function Zoommap() {

  const [popupInfo, setPopupInfo] = useState(null);

  const belief = useMemo(
    () =>
      BELIEF.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorybelief />

        </Marker>
      )),
    []
  );

  const biases = useMemo(
    () =>
      BIASES.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorybiases />

        </Marker>
      )),
    []
  );

  const caring = useMemo(
    () =>
      CARING.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorycaring />

        </Marker>
      )),
    []
  );

  const colonialism = useMemo(
    () =>
      COLONIALISM.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorycolonialism />

        </Marker>
      )),
    []
  );

  const communal = useMemo(
    () =>
      COMMUNAL.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorycommunal />

        </Marker>
      )),
    []
  );

  const edu = useMemo(
    () =>
      EDU.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategoryedu />

        </Marker>
      )),
    []
  );

  const justice = useMemo(
    () =>
      JUSTICE.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategoryjustice />

        </Marker>
      )),
    []
  );

  const mother = useMemo(
    () =>
      MOTHER.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorymother />

        </Marker>
      )),
    []
  );

  const politic = useMemo(
    () =>
      POLITIC.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorypolitic />

        </Marker>
      )),
    []
  );

  const repro = useMemo(
    () =>
      REPRO.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategoryrepro />

        </Marker>
      )),
    []
  );

  const sex = useMemo(
    () =>
      SEX.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorysex />

        </Marker>
      )),
    []
  );

  const slavery = useMemo(
    () =>
      SLAVERY.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategoryslavery />

        </Marker>
      )),
    []
  );

  const trad = useMemo(
    () =>
      TRAD.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategorytrad />

        </Marker>
      )),
    []
  );

  const violence = useMemo(
    () =>
      VIOLENCE.map((name, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={name.Coordinate_LONG}
          latitude={name.Coordinate_LAT}
          anchor="center"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(name);
          }}
        >
          <Pincategoryviolence/>

        </Marker>
      )),
    []
  );

  return (

    <>
      {/* <div className="welcome">
      <svg width="800" height="600" stroke="white" strokeWidth="1" fill="#5c5769" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path id="intermediate" d="M 50 50 C 50 250 200 500 400 500 C 600 500 750 250 750 50 " />
        </defs>
        <text>
          <textPath startOffset="50%" dominantBaseline="middle" textAnchor="middle" xlinkHref="#intermediate">RITUALS IN THE CARTOGRAPHIC PRACTICE</textPath>
        </text>
      </svg>
    </div> */}

      <Map
        initialViewState={{
          latitude: -0.36,
          longitude: 23.44,
          zoom: 1.8
        }}
        projection={"globe"}
        mapStyle="mapbox://styles/comuni-dados/ck87kqz1v0hlt1iptdomrfl1y"
        mapboxAccessToken="pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg"
        // onClick={onClick}
        // ref={mapRef}
        fog={{ "horizon-blend": 0.2, "star-intensity": 0.15, "range": [0.8, 8], color: "#da6026", "space-color": "#000000", "high-color": "#000000" }}
        light={{ "anchor": "viewport", "color": "white", "intensity": 0.4 }}
        style={{ width: "null", height: "96vh" }}
      >

        <FullscreenControl position="bottom-right" />

        {belief}
        {biases}
        {caring}
        {colonialism}
        {communal}
        {edu}
        {justice}
        {mother}
        {politic}
        {repro}
        {sex}
        {slavery}
        {trad}
        {violence}

        {popupInfo && (
          <Popup
            anchor="center"
            focusAfterOpen="true"
            longitude={Number(popupInfo.Coordinate_LONG)}
            latitude={Number(popupInfo.Coordinate_LAT)}
            onClose={() => setPopupInfo(null)}
          >

            <div className='card'>

              <Typography id="modal-modal-title">
                <div className="signL" style={{ borderColor: popupInfo.color,  borderStyle: "solid", borderWidth: 6, color: "ffffff"}} >
                  <div className="signM" > {popupInfo.topics} </div>
                </div>
              </Typography>

              <div className="cardTitle">
                <div dangerouslySetInnerHTML={{ __html: popupInfo.name }} /> <br />
                <Divider light />
                <div className="cardsubTitle" >{popupInfo.birth_place + ", " + popupInfo.country}</div>
              </div>

              <Divider light />
              <div className="infoContent">LANGUAGE :<br /> <b>{popupInfo.lang}</b></div>
              <div className="infoContent">SUGGESTED READING (title translated in English):<br /> <b>{popupInfo.suggestion}</b></div>
              <div className="infoContent">YEAR :<br />  <b>{popupInfo.year}</b></div>
              <div className="infoContent">BOOK, ARTICLE, MANUSCRIPT, TRANSCRIPT, SOURCE :<br /> <b>{popupInfo.Source}</b></div>

            </div>
          </Popup>
        )}

      </Map>

      {/* <div className="buttons">
      </div><div className="title-container">
        <div className="title">
          󱽣 <sup>󻦥</sup><br />
          󱽯 <sub>󻦶</sub>
        </div>
      </div> */}
    </>
  );
}

export default Zoommap;
