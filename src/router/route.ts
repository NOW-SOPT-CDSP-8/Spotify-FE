const STATIC = {
    HOME: "/",
    PLAYLIST: "/playlist",
    CATEGORY: "/category",
  };
  
  const DYNAMIC = {
    MYPAGE: "/mypage",
  };
  
  export const PATH = {
    ...STATIC,
    ...DYNAMIC,
  } as const;
  