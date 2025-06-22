import React, { useEffect, useState } from "react";
import './home.css'
function HomeComponent() {
  const [activationKey, setActivationKey] = useState("off");

  // Load saved value on mount
  useEffect(() => {
    chrome.storage.local.get(["activationKey"], (result) => {
      if (result.activationKey) {
        setActivationKey(result.activationKey);
      }
    });
  }, []);

  // Save value on change
  function handleChange(event) {
    const value = event.target.value;
    setActivationKey(value);
    chrome.storage.local.set({ activationKey: value });
  }

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
      </div>
    </div>
  );
}

export default HomeComponent;
