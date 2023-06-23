import React, { useEffect, useRef, useState } from 'react';
import { LuMessagesSquare } from 'react-icons/lu';
import { BiMailSend } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';

function FixedContactButton() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const buttonRef = useRef(null);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
//       setShowContactInfo(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

  return (
    <div className="fixed bottom-6 left-6">
      <div
        className={`mt-4 bg-white p-4 text-lg rounded shadow-lg transition-all duration-300 ${
          showContactInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ backdropFilter: 'blur(10px)', border: '1px solid #ddd' }}
      >
        <div className="flex flex-col">
          <div className="flex p-3 space-x-3 rounded-lg transition-colors hover:bg-primary-soft">
            <BiMailSend className="text-3xl font-light" />
            <p className="font-bold">
              <a href="mailto:contact@example.com">contact@example.com</a>
            </p>
          </div>
          <div className="flex p-4 space-x-3 rounded-lg transition-colors hover:bg-primary-soft">
            <BsTelephone className="text-2xl font-light" />
            <p className="font-bold">
              <a href="tel:123-456-7890">123-456-7890</a>
            </p>
          </div>
        </div>
      </div>

      <button
        ref={buttonRef}
        className="bg-primary shadow-2xl hover:bg-primary-hover text-white text-3xl rounded-full w-16 h-16 flex items-center justify-center"
        onClick={toggleContactInfo}
      >
        <LuMessagesSquare />
      </button>
    </div>
  );
}

export default FixedContactButton;
