import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
    contact: "",
    interests: ""
  });

  const fetchProfiles = () => {
    axios.get("http://localhost:3001/profiles").then((res) => {
      setProfiles(res.data);
    });
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.address) {
      alert("Name and Address are required.");
      return;
    }

    axios.post("http://localhost:3001/profiles", form).then(() => {
      alert("Profile added!");
      setForm({
        name: "",
        photo: "",
        description: "",
        address: "",
        contact: "",
        interests: ""
      });
      fetchProfiles();
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/profiles/${id}`).then(fetchProfiles);
  };

  return (
    <div className="container">
      <h3 className="mb-3 text-primary">Admin Panel</h3>
      <div className="row g-2">
        {Object.keys(form).map((field) => (
          <div className="col-md-6" key={field}>
            <input
              className="form-control"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-success mt-3" onClick={handleSubmit}>
        Add Profile
      </button>

      <ul className="list-group mt-4">
        {profiles.map((p) => (
          <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{p.name} - {p.address}</span>
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
