import React from 'react';
import styled from 'styled-components';
import {HomeRounded, CloseRounded, SearchRounded, FavoriteRounded, UploadFileRounded, CloudUpload, LightModeRounded, LogoutRounded} from '@mui/icons-material';
import LogoImage from '../images/logo-dark.png';
import { Link } from "react-router-dom";

const MenuContainer  = styled.div`
flex : 0.5;
flex-direction: column;
height: 100vh;
display:flex;
backround-color: ${({ theme }) => theme.bg};
color: ${({theme}) => theme.text_primary};
`;

const Logo = styled.div`
width: 100%;
color : ${({ theme }) =>  theme.primary};
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
font-weight: bold;
font-size: 20px;
margin: 16px 0px;
`;

const Elements = styled.div`

padding: 4px 16px;
display: flex;
gap: 12px;
flex-direction: row;
justify-content: flex-start;
align-items:center;
cursor: pointer;
color:  ${({ theme }) =>  theme.text_secondary};
width: 100%;
&:hover {
    background-color: ${({ theme }) =>  theme.primary};
};
`;
const NavText = styled.div`
text-decoration: none;
// padding: 12px 0px;
`;

const Close = styled.div``; 

const Flex = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`; 

const Image = styled.img`
width:25px;
`;

const HR = styled.div`
width:100%;
height: 1px;
background-color: ${({theme}) => theme.text_secondary};
margin: 10px 0px;
`


const menuItems = [
  
    {
        link: "/",
        name: "Dashboard",
        icon:<HomeRounded />
    } ,

    {
        link: "/search",
        name: "Search",
        icon:<SearchRounded />
    } ,

    {
        link: "/fav",
        name: "Favourites",
        icon:<FavoriteRounded />
    } ,

]

const button = [
    {
        fun: () => console.log("Upload"),
        name: "Upload",
        icon:<CloudUpload />
    } ,

    {
        fun: () => console.log("Light Mode / Dark Mode Switch"),
        name: "Light Mode",
        icon:<LightModeRounded />
    } ,

    {
        fun: () => console.log("Log Out / Login Function"),
        name: "Log Out",
        icon:<LogoutRounded />
    } ,

]



function Sidebar() {
  return (
    <div>
      <MenuContainer>
        
        <Flex >
        <Logo>
            <Image src={LogoImage} />
            Video Tv</Logo>
        <Close>
            <CloseRounded />
        </Close>
        
        </Flex>
        
{menuItems.map((item) => (
  <Link to={item.link} key={item.link}>
    <Elements>
      {item.icon}
      <NavText>{item.name}</NavText>
    </Elements>
  </Link>
))}

<HR />

{button.map((item) => (
  
    <Elements onClick={item.fun}>
      {item.icon}
      <NavText>{item.name}</NavText>
    </Elements>
 
))}
       

      </MenuContainer>
    </div>
  )
}

export default Sidebar
