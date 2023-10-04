import React, { useState } from "react";

// importing IUserData from type.ts
import { IUserData } from "./type";

function UserList() {
  // array destructuring using useState Hooks
  const [data, setData] = useState<IUserData[]>();

  return <div>UserList</div>;
}

export default UserList;
