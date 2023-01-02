import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from 'styled-components';

import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const HeaderContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	margin:0;
	width: 100%;
	padding: 0px;
	display: flex;
	align-items: right;
	justify-content: right;
	font-family: "Roboto","Helvetica","Arial",sans-serif;
	font-size:1.25rem;
	font-weight:400;
	line-height:1.625;
	letter-spacing: 0.00938em;
	background: transparent;
	z-index: 9999;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	background: transparent;
	background: linear-gradient(to right, #ffc200 ${(props) => props.scroll}, white 0);
	color: ${(props) => (props.isSafari ? 'white' : 'transparent')};
	-webkit-background-clip: text;
	@media only screen and (max-width: 800px) {
		width: 90%;
	}
	@media only screen and (max-width: 350px) {
		width: 95%;
	}
`;

const HeaderTextContainer = styled.div`
	padding: 30px;
	height: 45px;
	border-radius: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	cursor: pointer;
	@media only screen and (max-width: 350px) {
		padding: 0 5px;
	}
`;

const HeaderText = styled.h4`
	font-size: 15px;
	font-weight:300;
	font-family: "Roboto","Helvetica","Arial",sans-serif;
	margin: 0;
	padding: 0;
	color:white;
	background: transparent;
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 350px) {
		font-size: 14px;
	}
`;

const Navbar = () => (
	<div id = "nav">
		<HeaderContainer>
			<Header>
			<AnchorLink href="#profile">
				<HeaderTextContainer>
					<InfoIcon style={{fill:"white"}}>prof</InfoIcon> 
					<br></br>
					<HeaderText>About</HeaderText>
				</HeaderTextContainer>
			</AnchorLink>

			<AnchorLink href="#experience">
				<HeaderTextContainer>
					<AccountTreeIcon style={{fill:"white"}}>icon</AccountTreeIcon>
					<br></br>
					<HeaderText>Experience</HeaderText>
				</HeaderTextContainer>
			</AnchorLink>
			
				<AnchorLink href="#work">
				<HeaderTextContainer>
				<WorkIcon style={{fill:"white"}}>icon</WorkIcon>
					<HeaderText>Work</HeaderText>
				</HeaderTextContainer>
			</AnchorLink>
			
			<AnchorLink href="#contact">
				<HeaderTextContainer>
					<CallIcon style={{fill:"white"}}>call</CallIcon>
					<HeaderText>Contact</HeaderText>
				</HeaderTextContainer>
			</AnchorLink>
		
				</Header>
		</HeaderContainer>
		</div>
	);
    
export default Navbar;
