import styled from 'styled-components';

export const MainNav = styled.div`
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
`;

export const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
