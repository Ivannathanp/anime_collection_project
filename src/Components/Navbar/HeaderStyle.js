import styled from "@emotion/styled";

export const OuterContainer = styled.div`
height: 100vh;
position: relative;
background-color: #fff;
`;

export const InnerContainer = styled.div`
height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #fffaf4;
  position: relative;

  * {
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
`;

export const BackgroundContainer = styled.div`
width: 100%;
height: 321px;
position: relative;
background-color:#424242;
`;

export const DataContainerOverlay = styled.div`
background-color: #fff;
border-top-left-radius: 35px;
border-top-right-radius: 35px;
height: 30px;
width: 100%;
z-index: 2px;
position: absolute;
bottom: -5px;
justify-content: center;
align-content: center;
align-items: center;
`;

export const DataContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 370px);
  background-color: #fff;

`;

export const DataInnerContainer = styled.div`
padding:2% 4% 4% 4%;
width:100%;
height:100%;
box-sizing: border-box;
overflow: scroll;
* {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
width: 100%;
white-space: nowrap;
display: flex;
justify-content: flex-start;
align-items: center;
align-content: center;
padding-left: 2%;
 background-color: #df3030;
box-sizing: border-box;
`;

export const BackButton = styled.button`
margin: 15px 0 10px 10px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
outline: none;
background-color: transparent;
box-shadow: none;
border: none;
`;

export const HeaderText = styled.div`
margin-left: 5%;
font-family: "Nunito Sans", sans-serif;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #fff;
box-sizing: border-box;
`;
