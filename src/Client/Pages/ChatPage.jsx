import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import CreateIcon from "@mui/icons-material/Create";
import { HeaderComponent } from "../Components/HeaderComponent";
import { HistoryComponent } from "../Components/HistoryComponent";

export const ChatPage = () => {
  const sendMessage = (event) => {
    event.preventDefault();
    console.log("submit")
  };
  return (
    <div className="flex h-full">
      <div className="border-yellow-300 border-4 w-5/6">
        <HeaderComponent />
        <div className="flex flex-col h-full border-solid border-4 border-pink-500">
          <div className="flex-1 p-4 bg-white overflow-y-auto border-b border-gray-300 h-4/6">
            <div className="space-y-4">
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
                <div className="react flex justify-start mt-2 items-center mb-4">
                  <div className="flex space-x-0">
                    <div className="cursor-pointer font-semibold scale-75 rounded-lg hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ThumbUpOutlinedIcon />
                    </div>
                    <div className="cursor-pointer font-semibold scale-75 rounded-lg hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ThumbDownOffAltOutlinedIcon />
                    </div>
                    <div className="cursor-pointer font-semibold scale-75 rounded-lg hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ContentCopyOutlinedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex justify-end">
                <div className="inline-block scale-75">
                  <CreateIcon className="box-border cursor-pointer hover:bg-gray-400 scale-150 p-1 rounded-full mr-1" />
                </div>
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
                <div className="react flex justify-start mt-2 items-center mb-4">
                  <div className="flex space-x-0">
                    <div className="cursor-pointer font-semibold rounded-lg scale-75 hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ThumbUpOutlinedIcon />
                    </div>
                    <div className="cursor-pointer font-semibold rounded-lg scale-75 hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ThumbDownOffAltOutlinedIcon />
                    </div>
                    <div className="cursor-pointer font-semibold rounded-lg scale-75 hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ContentCopyOutlinedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex justify-end">
                <div className="inline-block scale-75">
                  <CreateIcon className="box-border cursor-pointer hover:bg-gray-400 scale-150 p-1 rounded-full mr-1" />
                </div>
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
                <div className="react flex justify-start mt-2 items-center mb-4">
                  <div className="flex space-x-0">
                    <div className="cursor-pointer font-semibold rounded-lg scale-75 hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ThumbUpOutlinedIcon />
                    </div>
                    <div className="cursor-pointer font-semibold rounded-lg scale-75 hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ThumbDownOffAltOutlinedIcon />
                    </div>
                    <div className="cursor-pointer font-semibold rounded-lg scale-75 hover:bg-gray-400 bg-gray-200 px-2 py-1">
                      <ContentCopyOutlinedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right flex justify-end">
                <div className="inline-block scale-75">
                  <CreateIcon className="box-border cursor-pointer hover:bg-gray-400 scale-150 p-1 rounded-full mr-1" />
                </div>
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 border-t border-gray-300 h-1/6">
            <form
              className="action flex items-center space-x-4"
              onSubmit={sendMessage}
            >
              <div className="cursor-pointer text-gray-600 hover:text-blue-500">
                <VpnKeyOutlinedIcon />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full p-2 border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Type your message..."
                />
              </div>
              <button className="cursor-pointer text-white bg-custom-bg-orange p-2 rounded-lg hover:bg-custom-bg-orange-hover">
                <FontAwesomeIcon icon={faPaperPlane} size="xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <HistoryComponent />
    </div>
  );
};
