import { useContext, useState } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { BsGlobe2, BsGlobeAmericas, BsGlobeCentralSouthAsia } from 'react-icons/bs';

const LanguageChange: React.FC = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center p-1 justify-center  rounded-full focus:outline-none hover:bg-primary-hover transition-shadow duration-500"
        onClick={toggleDropdown}
      >
        <BsGlobeAmericas className='text-xl'/>
      </button>
      <div
        className={`absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg transition-all duration-300 ${
          dropdownOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-10px]'
        }`}
      >
        <button
          className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${
            language === 'en' ? 'font-bold' : ''
          }`}
          onClick={() => handleLanguageChange('en')}
        >
          🇬🇧 English
        </button>
        <button
          className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${
            language === 'mn' ? 'font-bold' : ''
          }`}
          onClick={() => handleLanguageChange('mn')}
        >
          🇲🇳 Mongolian
        </button>
      </div>
    </div>
  );
};

export default LanguageChange;
