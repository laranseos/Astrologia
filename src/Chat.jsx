import React from "react";
import Avatar from "./assets/hostAvatar.png"
import { useEffect } from "react";
import { Standard } from "@typebot.io/react";
import Footer from "./assets/footer.png"

function Chat() {
  useEffect(() => {
    const element = document.querySelector('.lite-badge');
    if (element) {
      element.style.visibility = 'hidden';
      element.style.setProperty('visibility', 'hidden', '!important');
    }
  }, []);
  return (
    <div className=' text-center h-screen w-screen'>
        <div className="w-screen h-[5%] flex bg-emerald-800 items-center">
          <a href="/astrologia">
            <svg className="w-12 h-12 py-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="back-arrow"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"></rect><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"></path></g></g></svg>
          </a><img src={Avatar} className="w-9 h-9 mr-2" alt="avatar"/>
          <div className=" text-white">
            <div className="font-semibold text-lg">Nadja Marseille</div>
            <div className="text-base text-left -mt-1">online</div>
          </div>
          <div className="text-right ml-auto mr-2 flex">
            <svg className="w-12 h-12 py-3 fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="phone"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path></svg>
            <svg className="w-12 h-12 py-3 -rotate-45 fill-white stroke-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M753.2 201.8v516.9c0 83.4-50.4 241.2-241.2 241.2-190.8 0-241.2-157.8-241.2-241.2V236.3c0-4.4 0.6-43.7 20.9-84.3 28.4-56.7 82.2-88 151.4-88 69.3 0 123.1 31.3 151.4 88 20.2 40.5 20.9 79.9 20.9 84.3v448c0 41.6-27.5 103.4-103.4 103.4-75.8 0-103.4-61.8-103.5-103.4V374.2c0-19 15.5-34.5 34.5-34.5 19.1 0 34.5 15.4 34.5 34.5v310.2c0.5 15.5 6.7 34.5 34.5 34.5s34.1-19 34.5-34.8V236.3c-0.2-17.1-6.1-103.4-103.4-103.4-43.7 0-73 16.3-89.8 49.9-13 26-13.6 53.2-13.6 53.5v482.5c0.1 17.5 6.1 172.3 172.3 172.3 170.4 0 172.3-165.3 172.3-172.3v-517c0-19 15.4-34.5 34.5-34.5s34.4 15.5 34.4 34.5"  /></svg>
            <svg className="w-12 h-12 py-3 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="more"><g data-name="Layer 2"><g data-name="more-vertical"><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="5" r="2"></circle><circle cx="12" cy="19" r="2"></circle></g></g></svg>
          </div>
        </div>
        <Standard
          typebot="astrologia-9azb8xn"
          className="w-full h-[95%]"
        />
        <img src={Footer} alt='footer' className=" absolute w-full h-[6%] bottom-0 z-50"/> 

        
    </div>
  );
}

export default Chat;
