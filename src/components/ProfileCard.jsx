import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Fix icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);
  const [coords, setCoords] = useState(null);

  const API_KEY = "a433bf3c7aab4e9681f559eb961bd949"; // Replace with your key

  const fetchCoords = async () => {
    const res = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        profile.address
      )}&key=${API_KEY}`
    );
    const data = await res.json();
    if (data.results[0]) {
      const { lat, lng } = data.results[0].geometry;
      setCoords([lat, lng]);
    } else {
      alert("Invalid address.");
    }
  };

  const handleMapToggle = () => {
    if (!showMap && !coords) fetchCoords();
    setShowMap(!showMap);
  };

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column flex-md-row align-items-start">
        <img
          src={profile.photo || "https://via.placeholder.com/100"}
          alt={profile.name}
          className="rounded-circle me-4 mb-3 mb-md-0"
          width="100"
          height="100"
        />
        <div>
          <h5>{profile.name}</h5>
          <p className="text-muted mb-1">{profile.description}</p>
          <p className="mb-1"><strong>Address:</strong> {profile.address}</p>
          <p className="mb-1"><strong>Contact:</strong> {profile.contact}</p>
          <p className="mb-2"><strong>Interests:</strong> {profile.interests}</p>
          <button className="btn btn-outline-primary btn-sm" onClick={handleMapToggle}>
            {showMap ? "Hide Map" : "Show Map"}
          </button>
        </div>
      </div>
      {showMap && coords && (
        <MapContainer center={coords} zoom={13} style={{ height: "300px", width: "100%" }} className="mt-3 rounded">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coords}>
            <Popup>
              {profile.name} - {profile.address}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default ProfileCard;

