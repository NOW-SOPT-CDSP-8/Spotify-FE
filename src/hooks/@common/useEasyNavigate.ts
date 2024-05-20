import { useNavigate } from 'react-router-dom';
import { PATH } from '../../router/route';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goHome = () => navigate(PATH.HOME);
  const goPlaylist = () => navigate(PATH.PLAYLIST);
  const goCategory = () => navigate(PATH.CATEGORY);
  const goBack = () => navigate(-1);
  const goMypage = (id: string) => navigate(PATH.MYPAGE.replace(':id', id));

  return {
    goHome,
    goPlaylist,
    goCategory,
    goBack,
    goMypage,
  };
};

export default useEasyNavigate;
