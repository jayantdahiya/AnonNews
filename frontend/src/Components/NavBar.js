import {useContext} from 'react'
import { AppContext } from '../App';
import { connectWallet } from '../Utils/Functions';
import Tooltip from '../Utils/Tooltip';

function NavBar() {
  const {walletConnected , setWalletConnected, address, setAddress} = useContext(AppContext);
  
  
  const handleConnectWallet = async () => {
    connectWallet({ address, setAddress, setWalletConnected });
  }

  //function to handle the post button click 
  const handlePost  = async() => {
    try{
      
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div className="flex flex-col justify-between w-16 h-screen backdrop-blur-md bg-white/30 border-r fixed">
      <div>
        <div className="inline-flex items-center justify-center w-16 h-16 cursor-pointer bg-[#1E2022] text-[#F0F5F9]">
          <span className="text-3xl">an</span>
          <span className="text-3xl text-red-500">.</span>
        </div>

        <div className="border-t border-gray-100">
          <nav className="flex flex-col">
            <div className="py-2">
              <a
                href="/"
                className="flex justify-center px-2 py-1.5 group relative  hover:bg-gray-400 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-newspaper"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                </svg>

                <Tooltip message="News" />
              </a>
            </div>
            <div className="py-2">
              <a
                href="/"
                className="flex justify-center px-2 py-1.5 group relative  hover:bg-gray-400 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>

                <Tooltip message={"About"} />
              </a>
            </div>
            <div className="py-2">
              <a
                href="/"
                className="flex justify-center px-2 py-1.5 group relative  hover:bg-gray-400 hover:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-incognito"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"
                  />
                </svg>

                <Tooltip message={"Profile"} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {walletConnected ? (
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <button
            onClick={handlePost}
            className="flex justify-center w-full px-2 py-1.5 text-sm hover:bg-gray-400 hover:text-gray-100 group relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>

            <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
              New Post
            </span>
          </button>
        </div>
      ) : (
        <div className="sticky inset-x-0 bottom-0 p-2 border-t border-gray-100">
          <button
            onClick={handleConnectWallet}
            className="flex justify-center w-full px-2 py-1.5 text-sm  hover:bg-gray-400 hover:text-gray-100 group relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-wallet"
              viewBox="0 0 16 16"
            >
              <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
            </svg>

            <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
              Connect Wallet
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default NavBar