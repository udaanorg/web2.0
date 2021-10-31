import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/RegisterPage.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const RegisterPage = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [kitchenData, setKitchenData] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [selectedKitchenID, setSelectedKitchenID] = useState("");

  const signup = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (name && email && password && selectedKitchenID) {
      fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          kitchen: selectedKitchenID,
          dateOfBirth: "1970-01-01",
        }),
      }).then((value) => {
        console.log(value.statusText);
        if (value.statusText === "OK") {
          history.push("/login");
        } else {
          alert("Please check your credentials!");
        }
      });
    } else {
      alert("Please fill the form!");
    }
  };

  // FETCH KITCHEN DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/kitchen/all"
        );
        const json = await response.json();
        setKitchenData(json);
        if (selectedCity) {
          let selectedKitchen = kitchenData.filter(
            (city) => city.city === selectedCity
          );
          setSelectedKitchenID(selectedKitchen[0].id);
          console.log(selectedKitchenID);
        }
        console.log(json);
      } catch (error) {}
    };

    fetchData();
  }, [selectedCity]);

  // DISPLAY SELECTED CITY IN DROPDOWN
  const onCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <div className="form-container register-container">
            <form method="POST" className="register_form">
              <h1 className="login_title mb-4">Register</h1>
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />

              <FormControl>
                <Select
                  variant="outlined"
                  value={selectedCity}
                  onChange={onCityChange}
                >
                  <MenuItem value="Select City">Select City</MenuItem>
                  {kitchenData.map((data) => (
                    <MenuItem key={data.id} value={data.city}>
                      {data.city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <button onClick={signup} className="login_btn mt-3">
                register
              </button>
            </form>
          </div>
          <div className="reg-overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1 className="login_title">Already have an account?</h1>
                <p className="login_desc">
                  To keep connected with us please login with your personal info
                </p>
                <Link to="/login">
                  <button className="register_btn">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
