import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function ModifyApplication() {
  const [applications, setApplications] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [appDetails, setAppDetails] = useState(null);
  const [roles, setRoles] = useState([]);
  const [editStates, setEditStates] = useState({});

  const fetchApplications = async () => {
    const data = {
      applications: [
        { id: "1", name: "Application One" },
        { id: "2", name: "Application Two" },
        { id: "3", name: "Application Three" }
      ]
    };
    setApplications(data.applications || []);
  };

  const handleSelectChange = async (e) => {
    const appId = e.target.value;
    setSelectedValue(appId);

    const response = {
      id: appId,
      name: `Application ${appId}`,
      description: `Description for Application ${appId}`,
      roles: [
        { name: `Role ${appId}A`, description: `Description for Role ${appId}A` },
        { name: `Role ${appId}B`, description: `Description for Role ${appId}B` }
      ]
    };

    setAppDetails({
      name: response.name,
      description: response.description
    });
    setRoles(response.roles || []);
    setEditStates({});
  };

  const toggleEdit = (field) => {
    setEditStates((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const getInputClass = (field) => {
    return editStates[field] ? 'bg-primary text-white' : 'bg-dark text-white';
  };

  const handleInputChange = (field, value, isRole = false, index = null) => {
    if (isRole && index !== null) {
      const updatedRoles = [...roles];
      updatedRoles[index][field] = value;
      setRoles(updatedRoles);
    } else {
      setAppDetails((prevDetails) => ({
        ...prevDetails,
        [field]: value
      }));
    }
  };

  const handleSave = () => {
    const payload = {
      application: appDetails,
      roles: roles
    };
    console.log(JSON.stringify(payload, null, 2));
  };

  // Ejecutar fetchApplications al montar el componente
  useEffect(() => {
    fetchApplications();
    console.log("Updated select");
  }, []);

  return (
    <>
      <MDBCard className="bg-dark text-white my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "400px" }}>
        <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
          <h5 className="fw-bold mb-2 text-uppercase">Modify application</h5>

          <select
            className="form-select text-dark bg-light"
            style={{
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              padding: "0.5rem",
              fontWeight: "bold",
              maxWidth: "100%",
              marginTop: "7%",
              marginBottom: "10%"
            }}
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select application
            </option>
            {applications.map((app, index) => (
              <option key={index} value={app.id}>
                {app.name}
              </option>
            ))}
          </select>

          {appDetails && (
            <>
              <div className="d-flex justify-content-between w-100">
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  labelClass="text-white"
                  label="Application name"
                  id="appName"
                  type="text"
                  size="lg"
                  value={appDetails.name}
                  className={getInputClass("appName")}
                  disabled={!editStates["appName"]}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <MDBIcon
                  fas
                  icon="pen"
                  style={{ marginLeft: "3%", cursor: "pointer" }}
                  onClick={() => toggleEdit("appName")}
                />
              </div>
              <div className="d-flex justify-content-between w-100">
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  labelClass="text-white"
                  label="Application description"
                  id="appDescription"
                  type="text"
                  size="lg"
                  value={appDetails.description}
                  className={getInputClass("appDescription")}
                  disabled={!editStates["appDescription"]}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
                <MDBIcon
                  fas
                  icon="pen"
                  style={{ marginLeft: "3%", cursor: "pointer" }}
                  onClick={() => toggleEdit("appDescription")}
                />
              </div>

              {roles.map((role, index) => (
                <React.Fragment key={index}>
                  <h6>{`ROLE ${index + 1}`}</h6>
                  <div className="d-flex justify-content-between w-100">
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      labelClass="text-white"
                      label={`Role name ${index + 1}`}
                      type="text"
                      size="lg"
                      value={role.name}
                      className={getInputClass(`roleName${index}`)}
                      disabled={!editStates[`roleName${index}`]}
                      onChange={(e) => handleInputChange("name", e.target.value, true, index)}
                    />
                    <MDBIcon
                      fas
                      icon="pen"
                      style={{ marginLeft: "3%", cursor: "pointer" }}
                      onClick={() => toggleEdit(`roleName${index}`)}
                    />
                  </div>
                  <div className="d-flex justify-content-between w-100">
                    <MDBInput
                      wrapperClass="mb-4 w-100"
                      labelClass="text-white"
                      label={`Role description ${index + 1}`}
                      type="text"
                      size="lg"
                      value={role.description}
                      className={getInputClass(`roleDescription${index}`)}
                      disabled={!editStates[`roleDescription${index}`]}
                      onChange={(e) => handleInputChange("description", e.target.value, true, index)}
                    />
                    <MDBIcon
                      fas
                      icon="pen"
                      style={{ marginLeft: "3%", cursor: "pointer" }}
                      onClick={() => toggleEdit(`roleDescription${index}`)}
                    />
                  </div>
                </React.Fragment>
              ))}
              <div className="d-flex justify-content-end w-100">
                <MDBBtn className="text-dark px-4" color="light" style={{ fontWeight: "bold" }} onClick={handleSave}>
                  Save
                </MDBBtn>
              </div>
            </>
          )}
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default ModifyApplication;
