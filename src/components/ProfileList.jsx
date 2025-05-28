import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProfiles = () => {
    axios.get("http://localhost:3001/profiles").then((res) => {
      setProfiles(res.data);
    });
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const filtered = profiles.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h3 className="mb-3 text-primary">Profile List</h3>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name or address..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.length ? (
        <div className="row">
          {filtered.map((p) => (
            <div className="col-md-6 col-lg-4 mb-4" key={p.id}>
              <ProfileCard profile={p} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">No profiles found.</p>
      )}
    </div>
  );
};

export default ProfileList;

