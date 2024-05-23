import React from 'react';
import styled from 'styled-components';

interface PlaylistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hasDescription: boolean;
  onClick?: () => void;
}

const PlaylistCard = ({
  children,
  hasDescription,
  onClick,
}: PlaylistCardProps) => {
  const borderRadius = hasDescription ? '0.4rem' : '0.5rem';
  const marginBottom = hasDescription ? '0.7rem' : '1rem';

  return (
    <PlaylistCardWrapper onClick={onClick}>
      {React.Children.map(children, (child) => {
        // PlaylistCardImg인지 확인
        if (React.isValidElement(child) && child.type === PlaylistCardImg) {
          // style 속성 주며 클론
          return React.cloneElement(child as JSX.Element, {
            borderRadius,
            marginBottom,
          });
        }
        return child;
      })}
    </PlaylistCardWrapper>
  );
};

export default PlaylistCard;

const PlaylistCardWrapper = styled.section`
  width: 14.6rem;
`;

interface PlaylistCardImgProps {
  borderRadius?: string;
  marginBottom?: string;
}
const PlaylistCardImg = styled.img<PlaylistCardImgProps>`
  width: 14.6rem;
  height: 14.6rem;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const PlaylistCardTitle = styled.h1`
  max-width: 90%;
  margin-bottom: 0.3rem;

  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PlaylistCardDescription = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray200};
`;

PlaylistCard.Img = PlaylistCardImg;
PlaylistCard.Title = PlaylistCardTitle;
PlaylistCard.Description = PlaylistCardDescription;
