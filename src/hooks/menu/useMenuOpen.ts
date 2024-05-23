import { useState } from 'react';

const useMenuOpen = () => {
  const [visible, setVisible] = useState(false);
  const handleToggleMenu = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return { visible, handleToggleMenu };
};

export default useMenuOpen;

