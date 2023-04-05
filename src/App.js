import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/users/usersSlice";
import FetchedUsers from "./components/FetchedUsers";

function App() {
  const { isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  if (error !== undefined) {
    return (
      <>
        <h1>Something went wrong!</h1>
        <p>Description: {error}</p>
      </>
    );
  }

  return (
    <>
      <FetchedUsers />
    </>
  );
}
export default App;
