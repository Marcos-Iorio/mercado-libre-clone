import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="px-96">{children}</div>
    </Fragment>
  );
};

export default Wrapper;
