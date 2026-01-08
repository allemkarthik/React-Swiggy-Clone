import { useEffect, useState } from "react";
const UserClass = () => {
  const [user, setuser] = useState();
  useEffect(() => {
    fetchuser();
  }, []);
  return <h1>functional Compoennt</h1>;
};
export default UserClass;
