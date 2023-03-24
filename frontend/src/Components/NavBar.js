import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { useAccount } from 'wagmi';

import Tooltip from './Tooltip';
import NewsIcon from '../Utils/svg/sideBarNewsIcon.svg';
import AboutIcon from '../Utils/svg/sideBarAboutIcon.svg';
import ProfileIcon from '../Utils/svg/sideBarProfileIcon.svg';
import EditIcon from '../Utils/svg/sideBarEditIcon.svg';

function NavBar() {
 const { address } = useContext(AppContext);
 const { isConnected } = useAccount();
 const navigate = useNavigate();
 const handleProfileNav = () => {
   navigate(`/profile/${address}`);
 };
  return (
    <div className="flex flex-col justify-between w-12 lg:w-16 h-screen backdrop-blur-md bg-[#F5F2E8]/40 border-gray-700 fixed">
      <div>
        <div className="inline-flex items-center justify-center w-full h-16 cursor-pointer bg-[#1E2022] text-[#F0F5F9]">
          <a href='/'>
            <span className="text-2xl lg:text-3xl">an</span>
            <span className="text-2xl text-red-500 lg:text-3xl">.</span>
          </a>
        </div>

        <div className="h-screen border-r-4 border-gray-900 border-dashed">
          <nav className="flex flex-col">
            <div className="py-2">
              <a
                href="/news"
                className="flex justify-center px-2 py-1.5 group relative cursor-pointer"
              >
                <img src={NewsIcon} alt="" />

                <Tooltip message="News" />
              </a>
            </div>
            <div className="py-2">
              <a
                href="/about"
                className="flex justify-center px-2 py-1.5 group relative  cursor-pointer"
              >
                <img src={AboutIcon} alt='about us icon' />

                <Tooltip message={"About"} />
              </a>
            </div>
            <div className="py-2">
              <span
                onClick={handleProfileNav}
                className="flex justify-center px-2 py-1.5 group relative  cursor-pointer"
              >
                <img src={ProfileIcon} alt="profile icon" />
                <Tooltip message={"Profile"} />
              </span>
            </div>
          </nav>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t-4 border-gray-900 border-dashed">
        <button
          onClick={
            isConnected ? (
              () => (window.location.href = "/post")
            ) : (
              () => alert("Please login to post news")
            )
          }
          className="relative flex justify-center w-full px-2 py-4 text-md group"
        >
          <img src={EditIcon} alt='edit icon' />
          <Tooltip message={"New Post!"} />
        </button>
      </div>
    </div>
  );
}

export default NavBar