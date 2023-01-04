import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <div>
      <button
        className="flex items-center justify-center w-full bg-red-500 text-white px-7 py-3 rounded"
        type="submit"
      >
        <FcGoogle className=" text-3xl p-0.5 bg-white rounded-full" />{" "}
        &nbsp;&nbsp;Continue with Google
      </button>
    </div>
  );
}
