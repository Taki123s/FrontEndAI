import React from "react";
import { HeaderComponent } from "../Components/HeaderComponent";
import { HistoryComponent } from "../Components/HistoryComponent";
export const ChatPage = () => {
  return (
    <div className="flex h-full">
      <div className="border-yellow-300 border-4 w-5/6">
        <HeaderComponent />
        <div className="">
          <div className="react">
            <div>
              <div>like</div>
              <div>dislike</div>
              <div>coppy</div>
            </div>
            <div>Process</div>
          </div>
          <div className="action flex">
            <div>up file button</div>
            <div>
              <input type="text" className="border-2 border-solid border-red-400" />
            </div>
            <div>send button</div>
          </div>
        </div>
      </div>
      <HistoryComponent />
    </div>
  );
};
