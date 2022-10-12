import { Outlet } from "react-router-dom";

// import { Route, Routes } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <h1>The Welcome Page</h1>
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome New User</p>}></Route>
      </Routes> */}
      <Outlet />
    </>
  );
};

export default Welcome;
