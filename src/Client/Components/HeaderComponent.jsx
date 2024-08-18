import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
export const HeaderComponent = () => {
  return (
    <header className="h-20 border-solid border-green-400 border-4 flex justify-between items-center">
      <>
        <h1 className="text-black text-3xl font-mono w-3/6 ml-4">
          AI Chat Helper
        </h1>
      </>
      <div className="flex justify-between w-2/6 h-3/5">
        <div className="border-2 border-solid border-red-400 flex justify-start w-4/6 rounded-md items-center pl-2">
          <SearchOutlinedIcon className="w-1/5" />
          <input
            type="text"
            className="w-4/5 mr-2 p-1 outline-none"
            maxLength={128}
            placeholder="Search..."
          />
        </div>
        <div className="h-full border-solid border-green-400 border-2 mr-5 w-11 rounded-lg flex items-center justify-center cursor-pointer">
          <NotificationsNoneOutlinedIcon />
        </div>
      </div>
    </header>
  );
};
