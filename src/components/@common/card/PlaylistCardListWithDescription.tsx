import React from 'react';
import styled from 'styled-components';

interface PlaylistCardListWithDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hasDescription: boolean;
  onClick?: () => void;
}

const PlaylistCardListWithDescription = ({
  children,
  hasDescription,
  onClick,
}: PlaylistCardListWithDescriptionProps) => {
  const borderRadius = hasDescription ? '0.4rem' : '0.5rem';
  const marginBottom = hasDescription ? '0.7rem' : '1rem';

  return (
    <PlaylistCardListWithDescriptionWrapper onClick={onClick}>
      {React.Children.map(children, (child) => {
        // PlaylistCardListWithDescriptionImg인지 확인
        if (
          React.isValidElement(child) &&
          child.type === PlaylistCardListWithDescriptionImg
        ) {
          // style 속성 주며 클론
          return React.cloneElement(child as JSX.Element, {
            borderRadius,
            marginBottom,
          });
        }
        return child;
      })}
    </PlaylistCardListWithDescriptionWrapper>
  );
};

export default PlaylistCardListWithDescription;

const PlaylistCardListWithDescriptionWrapper = styled.section`
  width: 14.6rem;
`;

interface PlaylistCardListWithDescriptionImgProps {
  borderRadius?: string;
  marginBottom?: string;
}
const PlaylistCardListWithDescriptionImg = styled.img<PlaylistCardListWithDescriptionImgProps>`
  width: 14.6rem;
  height: 14.6rem;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const PlaylistCardListWithDescriptionTitle = styled.h1`
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

const PlaylistCardListWithDescriptionDescription = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.gray200};
`;

PlaylistCardListWithDescription.Img = PlaylistCardListWithDescriptionImg;
PlaylistCardListWithDescription.Title = PlaylistCardListWithDescriptionTitle;
PlaylistCardListWithDescription.Description =
  PlaylistCardListWithDescriptionDescription;
