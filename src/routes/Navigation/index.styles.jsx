import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  margin-bottom: 25px;
`;

export const LogoContainer = styled.img`
  height: 100%;
  width: 60px;
  padding-top: 15px;
`;
export const NavigationContainer = styled.div`
  width: 100%;
`;

export const NavigationList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
`;

export const NavigationItem = styled.div`
  text-align: center;
`;

export const NavigationLink = styled(Link)`
  cursor: pointer;
`;
