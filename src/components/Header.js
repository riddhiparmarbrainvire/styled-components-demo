import React from "react";
import { StyledHeader, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Nav } from "./styles/Nav.styled";
import { Logo } from "./styles/Logo.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="logo image" />
          <Button>Try it now</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Lorem ipsum, or lipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started
            </Button>
          </div>

          <Image
            src="./images/illustration-mockups.svg"
            alt="illustration-mockups.svg"
          ></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
