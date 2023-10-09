import React, { useEffect, useState } from "react";
import { getUserData } from "./api/api";
import { IUserData } from "./type/type";

function UserList() {
  const [userData, setUserData] = useState<IUserData[]>([]);
  useEffect(() => {
    getUserData().then((data) => {
      setUserData(data);
    });
  }, []);
  return (
    <>
      {userData.map((userData) => (
        <div>
          {userData.name}
          <h2 key={userData.id}>{userData.name}</h2>
          <div>{userData.username}</div>
          <div>{userData.email}</div>
          <div>{userData.address.street}</div>
          <div>{userData.address.zipcode}</div>
          <div>{userData.address.geo.lat}</div>
        </div>
      ))}
    </>
  );
}

export default UserList;
