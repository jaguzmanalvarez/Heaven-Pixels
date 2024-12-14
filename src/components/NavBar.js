import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #5c6fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserName = styled.span`
  font-size: 14px;
  color: #ffffff;
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const CenterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavGroup>
        <NavLink href="/">Heaven Pixels</NavLink>
      </NavGroup>

      <CenterGroup>
        <NavLink href="/">INICIO</NavLink>
        <NavLink href="/my-games">MIS JUEGOS</NavLink>
      </CenterGroup>

      <NavGroup>
        <UserName>Usuario</UserName>
        <Avatar src="https://yt3.googleusercontent.com/z6xwLe695U_4NygXaQm7EaXXAStOBTBI2RYKS5gb3aS73d8JoGvs_PpdHy47vMqEw4RVTZfSSQ=s160-c-k-c0x00ffffff-no-rj" alt="Avatar" />
      </NavGroup>
    </NavContainer>
  );
};

export default Navbar;
