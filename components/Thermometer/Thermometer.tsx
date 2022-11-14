import { Fragment } from "react";

import { Seller } from "../../types";

interface sellerProps {
  seller_reputation: {
    level_id: string;
    power_seller_status: string;
    transactions: {
      completed: number;
    };
  };
}

const Thermometer = (props: sellerProps) => {
  return (
    <Fragment>
      <div className="flex flex-row gap-1 justify-center items-center">
        <div
          style={
            props.seller_reputation?.level_id == "1_red"
              ? { backgroundColor: "#b31111", height: "12px" }
              : { backgroundColor: "#fff0f0", height: "10px" }
          }
          className="basis-1/5 w-full"
        ></div>
        <div
          style={
            props.seller_reputation?.level_id == "2_orange"
              ? { backgroundColor: "##e28a18", height: "12px" }
              : { backgroundColor: "#fff5e8", height: "10px" }
          }
          className="basis-1/5 w-full bg-[]"
        ></div>
        <div
          style={
            props.seller_reputation?.level_id == "3_yellow"
              ? { backgroundColor: "#dace50", height: "12px" }
              : { backgroundColor: "#fffcda", height: "10px" }
          }
          className="basis-1/5 w-full bg-[#fffcda]"
        ></div>
        <div
          style={
            props.seller_reputation?.level_id == "4_light_green"
              ? { backgroundColor: "#b0e73a", height: "12px" }
              : { backgroundColor: "#f1fdd7", height: "10px" }
          }
          className="basis-1/5 w-full"
        ></div>
        <div
          style={
            props.seller_reputation?.level_id == "5_green"
              ? { backgroundColor: "#39b54a", height: "12px" }
              : { backgroundColor: "#aefdb5a7", height: "10px" }
          }
          className="basis-1/5 w-full"
        ></div>
      </div>
    </Fragment>
  );
};

export default Thermometer;
