import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const Background = styled.div`
  background-color: #fff;
  padding-top: 60pt;
  padding-bottom: 60pt;
  border-bottom: 1pt solid #8a0a0a;
`;

const ProfileLayout = styled(MainContent)`
  display: grid;
  place-items: center;

  grid-template-areas:
    "logo"
    "name"
    "desc";
  grid-template-columns: auto;
  grid-template-rows: 150px 100px 100px;
  column-gap: 20pt;
  justify-items: center;
  align-items: center;

  min-height: 200px;
`;

const ProfilePicture = styled.div`
  grid-area: picture;
  height: 100%;
`;

const ProfileName = styled.h1`
  grid-area: name;
`;

const ProfileDesc = styled.div`
  grid-area: desc;
  align-self: start;
`;

const Logo = styled.div`
  display: flex;
  grid-area: logo;
  height: 100%;

  img {
    margin: auto;
    width: auto;
    height: 100px;
    object-fit: cover;
    overflow: hidden;
  }
`;

const ProfileHeader: React.FC = () => {
  return (
    <Background>
      <ProfileLayout>
        {/* <ProfilePicture>
          <img src="profile.jpg" />
        </ProfilePicture> */}
        <ProfileName>Trent Hashimoto</ProfileName>
        <ProfileDesc>Programmer and designer</ProfileDesc>
        <Logo>
          <img src="logo-black.png" />
        </Logo>
      </ProfileLayout>
    </Background>
  );
};

export default ProfileHeader;
