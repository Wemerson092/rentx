import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 132px;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 24px;
`;

export const ImageIndexe = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme, active }) => 
    active ? theme.colors.title : theme.colors.shape};
  margin-left: 8px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;
  justify-content: center;
  align-items: center; 
`;

export const CarImage = styled.Image`
  width: 100%;
  height: 132px;
`;
