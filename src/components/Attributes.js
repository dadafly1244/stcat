import React, { useEffect, useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "./Accounts";

export default () => {
  const [deviceId, setDeviceId] = useState("");

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((data) => {
      setDeviceId(data[" custom:device_id"]);
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    getSession().then(({ user }) => {
      const attributes = [
        new CognitoUserAttribute({ Name: " custom:device_id", Value: deviceId }),
      ];

      user.updateAttributes(attributes, (err, result) => {
        if (err) console.error(err);
        console.log(result);
      });
    });
  };

  return (
    <div>
      <h1>Update device ID:</h1>
      <form onSubmit={onSubmit}>
        <input value={deviceId} onChange={(event) => setDeviceId(event.target.value)} />

        <button type="submit">Change device ID</button>
      </form>
    </div>
  );
};