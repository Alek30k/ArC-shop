import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { mobile2 } from "../responsive";
import { mobile3 } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  ${mobile2({ height: "55px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
  ${mobile3({ padding: "10px 10px", marginRight: "20px" })};

  && a {
    text-decoration: none;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${mobile2({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  ${mobile2({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  ${mobile2({ fontSize: "24px" })}
  ${mobile3({ fontSize: "18px" })}
`;

const Myprofile = styled.h1`
  display: flex;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${mobile2({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
  ${mobile2({ fontSize: "12px", marginLeft: "10px" })}
  ${mobile3({ fontSize: "10px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Link to="/">
          <Center>
            <Logo>ArC</Logo>
          </Center>
        </Link>
        <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Link>

        {user && Object.keys(user || {})?.length > 0 ? (
          <Right>
            <Myprofile>
              <Profile />
              {/* <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link> */}
            </Myprofile>
          </Right>
        ) : (
          <Right>
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          </Right>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
