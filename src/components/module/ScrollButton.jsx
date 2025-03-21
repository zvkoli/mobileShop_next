import { useState , useEffect } from 'react';
import { RxCaretUp } from 'react-icons/rx';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  },[]);

  return (
    <button
    className="flex flex-row justify-center items-center fixed left-5 bottom-10 text-[2.5rem] text-[#FBCB07] cursor-pointer border-hidden rounded-full p-[0.5rem] bg-[#1A1A1A]"
    style={{ display: visible ? 'inline' : 'none' }}
    onClick={scrollToTop}
    >
      <RxCaretUp />
    </button>
  );
};

export default ScrollButton;