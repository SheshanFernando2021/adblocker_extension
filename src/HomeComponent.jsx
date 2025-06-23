import React, { useEffect, useState } from "react";
import './home.css'

function HomeComponent() {
  const [activationKey, setActivationKey] = useState("off");
  const [showSettings, setShowSettings] = useState(false);
  const [enterName, setEnterName] = useState("guest Name");

  // per recuperare lo State dal local storage del chrome.
  useEffect(() => {
    if (window.chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["activationKey"], (result) => {
        if (result.activationKey) {
          setActivationKey(result.activationKey);
        }
      });
    }
  }, []);

  // per recuperare il nome dell'utente.
  useEffect(() => {
    if (window.chrome && chrome.storage && chrome.storage.local && chrome.storage.local.get) {
      chrome.storage.local.get(["userName"], (result) => {
        setEnterName(result.userName === undefined ? "guest user" : result.userName);
      });
    }
  }, []);

  // salvare il cambiamento dello stato
  function handleChange(event) {
    const value = event.target.value;
    setActivationKey(value);
    if (window.chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ activationKey: value });
    }
  }

  // impostare il nome dell'utente
  const handleSetName = (e) => {
    const valueName = e.target.value;
    setEnterName(valueName);
    if (window.chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ userName: valueName });
    }
  };

  return (
    <div className="home-container">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="activationKey"
            value="on"
            checked={activationKey === "on"}
            onChange={handleChange}
          />
          Turn on
        </label>
        <label>
          <input
            type="radio"
            name="activationKey"
            value="off"
            checked={activationKey === "off"}
            onChange={handleChange}
          />
          Turn off
        </label>
        <br />

        {showSettings && (
          <>
            <div className="nametext">enter name</div>
            <input
              type="text"
              value={enterName}
              onChange={handleSetName}
              className="nameinput"
            />
          </>
        )}

        {!showSettings && (
          <div
            style={{ cursor: "pointer", color: "blue", marginTop: "0.5rem" }}
            onClick={() => setShowSettings(!showSettings)}
          >
            <p className="settings">Settings</p>
          </div>
        )}

        {showSettings && (
          <div
            style={{
              cursor: "pointer",
              color: "blue",
              marginTop: "0.5rem",
              fontSize: "13px",
            }}
            onClick={() => setShowSettings(!showSettings)}
          >
            close
          </div>
        )}

        {!showSettings && <div className="nametext">Welcome back {enterName} !</div>}
      </div>
    </div>
  );
}

export default HomeComponent;
