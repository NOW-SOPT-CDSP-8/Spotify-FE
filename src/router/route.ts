const STATIC = {
  HOME: '/',
  PLAYLIST: '/playlist',
  CATEGORY: '/category',
};

const DYNAMIC = {
  MYPAGE: '/mypage/:id',
};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
