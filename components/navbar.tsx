import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Techgrounds - Blog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {user ? (
              <>
                <div>
                  <Nav.Link
                    className=""
                    onClick={() => {
                      logout();
                      router.push("/login");
                    }}
                  >
                    {" "}
                    <Navbar.Text>Logout: Logged in as {user.email}</Navbar.Text>
                  </Nav.Link>
                </div>
                <Link href="/dashboard" passHref>
                  <Nav.Link>Dashboard</Nav.Link>
                </Link>
              </>
            ) : (
              <>
                <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
