import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
const Container = styled.div`
background-color: white;
margin: 15px;
`;
const H1 = styled.h1`
text-align:center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute; 
  top: 10px; 
  left: 10px; 
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
`;
const Header = () => {
  return (
    <Container>
        <H1>Post Managment</H1>
    </Container>
  )
}

export default Header