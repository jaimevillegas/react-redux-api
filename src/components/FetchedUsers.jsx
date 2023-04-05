import { useSelector } from "react-redux";
import User from "./Users";

const FetchedUsers = () => {
  const { users } = useSelector((store) => store.users);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default FetchedUsers;
