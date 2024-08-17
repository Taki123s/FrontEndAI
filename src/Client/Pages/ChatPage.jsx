import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCopy,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { HeaderComponent } from "../Components/HeaderComponent";
import { HistoryComponent } from "../Components/HistoryComponent";
export const ChatPage = () => {
  return (
    <div className="flex h-full">
      <div className="border-yellow-300 border-4 w-5/6">
        <HeaderComponent />
        <div className="flex flex-col h-full">
          <div className="flex-1 p-4 bg-white overflow-y-auto border-b border-gray-300 h-4/6">
            <div className="space-y-4">
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
              <div className="text-left">
                <div className="inline-block p-2 bg-gray-200 rounded-lg">
                  Hello! How can I assist you today?
                </div>
              </div>
              <div className="text-right">
                <div className="inline-block p-2 bg-blue-500 text-white rounded-lg">
                  I need some help with my account.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 bg-gray-100 border-t border-gray-300 h-2/6">
            <div className="react flex justify-between items-center mb-4">
              <div className="flex space-x-4 text-gray-600">
                <div className="cursor-pointer hover:text-blue-500">
                  <FontAwesomeIcon icon={faThumbsUp} /> <span>Like</span>
                </div>
                <div className="cursor-pointer hover:text-blue-500">
                  <FontAwesomeIcon icon={faThumbsDown} /> <span>Dislike</span>
                </div>
                <div className="cursor-pointer hover:text-blue-500">
                  <FontAwesomeIcon icon={faCopy} /> <span>Copy</span>
                </div>
              </div>
              <div className="text-gray-600 cursor-pointer hover:text-blue-500">
                Process
              </div>
            </div>

            <div className="action flex items-center space-x-4">
              <div className="cursor-pointer text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon icon={faPaperclip} size="lg" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full p-2 border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Type your message..."
                />
              </div>
              <div className="cursor-pointer text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HistoryComponent />
    </div>
  );
};
