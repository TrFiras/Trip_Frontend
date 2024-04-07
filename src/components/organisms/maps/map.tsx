import React from "react";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerImage from "../../../assets/avionImage.png";
import BoxAtom from "../../atoms/box";
import { useAirports } from "../../../hooks/useAirports";
import { ICoordinate } from "../../../interfaces/Trip/ICoordinate";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: MarkerImage,
});


const center = { lat: 38.433421, lng: 10.75224 };

interface MapStreetProps {
  onMarkerClick: (
    position: ICoordinate,
    isSource: boolean
  ) => void;
  isSource: boolean;
}

const MapStreet: React.FC<MapStreetProps> = ({
  onMarkerClick,
  isSource,
}) => {
  const { getAirports } = useAirports();
  const { data,  } = getAirports();
  return (
    <MapContainer style={{ height: "350px" }} center={center} zoom={2}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((coords : ICoordinate) => (
        <BoxAtom key={coords.code} onClick={() => onMarkerClick(coords, isSource)}>
          <Marker
            key={coords.code}
            position={[coords.address.latitude, coords.address.longitude]}
            eventHandlers={{ click: () => onMarkerClick(coords, isSource) }}
          >
            <Popup>
              {coords.name} <br />
              Latitude: {coords.address.latitude} <br />
              Longitude: {coords.address.longitude} <br />
              Address: {coords.address.city}, {coords.address.country}
            </Popup>
          </Marker>
        </BoxAtom>
      ))}
    </MapContainer>
  );
};

export default MapStreet;
