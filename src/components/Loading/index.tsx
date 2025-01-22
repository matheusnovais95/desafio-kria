import React from "react";
import { Spinner } from "../Icons/icons";

export const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};
