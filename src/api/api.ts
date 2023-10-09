import { IUserData } from "../type/type";
const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function getUserData() {
  const response = await fetch(apiUrl);
  const data: IUserData[] = await response.json();

  return data;
}
