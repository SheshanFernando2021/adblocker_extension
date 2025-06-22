import React, { useEffect, useState } from "react";
import './home.css'
function HomeComponent() {
  const [activationKey, setActivationKey] = useState("off");
  const [enterName, setEnterName] = useState("guest Name");
  // useEffect(() => {
  //   chrome.storage.local.get(["activationKey"], (result) => {
  //     if (result.activationKey) {
  //       setActivationKey(result.activationKey);
  //     }
  //   });
  // }, []);


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

  // useEffect(() => {
  // 	chrome.storage.local.get(["userName"]).then(data => {
  // 		setEnterName(data.userName === undefined ? "guest user" : data.userName);
  // 	});
  // },[]);



// per recuperare il nome dell'utente. 

useEffect(() => {
    if (window.chrome && chrome.storage && chrome.storage.local && chrome.storage.local.get) {
      chrome.storage.local.get(["userName"], (result) => {
        setEnterName(result.userName === undefined ? "guest user" : result.userName);
      });
    }
  }, []);



  // function handleChange(event) {
  //   const value = event.target.value;
  //   setActivationKey(value);
  //   chrome.storage.local.set({ activationKey: value });
  // }

  // salvare il cambiamento dello stato
 function handleChange(event) {
    const value = event.target.value;
    setActivationKey(value);
    if (window.chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ activationKey: value });
    }
  }

  // const handleSetName = (e) =>{
  // 	const valueName = e.target.value;
  // 	setEnterName(valueName);
  // 	chrome.storage.local.set({userName : valueName});
  // }


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
        <br/>

        enter name
        <input type="text"/>
      </div>
    </div>
  );
}

export default HomeComponent;
