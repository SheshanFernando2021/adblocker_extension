import React from 'react';

function HomeComponent() {
  return (
    <>
      <br />
      <br />
      <label style={{ fontFamily: "monospace" }}>
        <input
          type="radio"
          name="activationKey"
          className="cursor-pointer p-2 rounded"
        />
        &nbsp;turn on
        &nbsp;&nbsp;
        <input
          type="radio"
          name="activationKey"
          className="cursor-pointer p-2 rounded"
        />
        &nbsp;turn off
      </label>
    </>
  );
}

export default HomeComponent;
