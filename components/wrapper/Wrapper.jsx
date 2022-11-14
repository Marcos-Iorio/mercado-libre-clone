import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="2xl:px-96 lg:px-4">{children}</div>
    </Fragment>
  );
};

export default Wrapper;
