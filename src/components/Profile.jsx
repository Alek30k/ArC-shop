import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div``;

const Menu = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  height: 35px;
  font-size: 20px;
`;

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser);

  //   const getName = (name) => {
  //     let result = name.split(" ");
  //     return result[0];
  //   };

  return (
    <Container>
      <Menu>
        <span>{user.username}</span>
        <img src={user.img} alt={user.username} />
      </Menu>
    </Container>
  );
};

export default Profile;
