import { useState, useEffect } from 'react';
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon"

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} title="Go to top"
          className="cursor-pointer h-[50px] w-[50px] rounded-full fixed bottom-[20px]
            right-[30px] z-99 bg-[#298E77] shadow-[0_0_10px_#298E77] hover:shadow-[0_0_20px_#298E77]
            text-white
          "
        >
          <ArrowUpIcon width={25} height={25} className='mx-auto text-center'/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;