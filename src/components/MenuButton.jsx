import React, { useState } from "react";

export default function MenuButton({open,setOpen}) {

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex flex-col justify-center items-center w-8 h-8 relative"
    >
      {/* Line 1 */}
      <span
        className={`block h-1 w-6 bg-black rounded transition-all duration-300 ${
          open ? "rotate-45 translate-y-2" : ""
        }`}
      />
      {/* Line 2 */}
      <span
        className={`block h-1 w-6 bg-black rounded my-1 transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      {/* Line 3 */}
      <span
        className={`block h-1 w-6 bg-black rounded transition-all duration-300 ${
          open ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
}
