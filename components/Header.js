import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const NavWrap = styled.div`
  width: 100%;
  height: 50px;
  background-color: darkslategray;;
  color: white;
  nav{
    float: right;
  }
  a {
    font-family: 'Montserrat', sans-serif;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 10px 0 10px;
    line-height: 3.5em;
  }
`;

const Header = () => {
  return (
    <NavWrap>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/items">
          <a>Items</a>
        </Link>
        <Link href="/videos">
          <a>Videos</a>
        </Link>
        <Link href="/socials">
          <a>Socials</a>
        </Link>
        <Link href="/presskit">
          <a>Presskit</a>
        </Link>
      </nav>
    </NavWrap>
  );
};

export default Header;
