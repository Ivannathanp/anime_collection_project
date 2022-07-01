import styled from "@emotion/styled";
import { Box, Select } from "@mui/material";

export const AnimeDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;

  img {
    max-width: 300px;
    margin: auto;
  }

  h4 {
    margin-top: 0;
  }

  h2,
  h4 {
    text-align: center;
  }

  .addToCollection {
    margin: auto;
    margin-top: 30px;
  }
`;

export const CenterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

export const BackgroundImage = styled.img`
width: 100% ;
max-width: 100% !important;
height:100%;
object-fit:contain;
background-color:#fffaf4;
`;

export const DetailHeading = styled.div`
font-family: "Nunito Sans", sans-serif;
font-weight: 600;
font-size: 15px;
line-height: 22px;
color: #424242;
`;

export const DetailSubHeading = styled.div`
font-family: "Nunito Sans", sans-serif;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #424242;
text-align: justify;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  .flex {
    display: flex;
    margin-bottom: 2%;
  }
`;

export const HeadingTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  color: #424242;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
`;

export const HeadingSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  color: #424242;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

export const Grid = styled.section`
margin:4% 0 3% 0;
  width:100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

export const ModalStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  min-width: 280px;
  padding: 0 1%;
  height: auto;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: none;
  border-radius: 20px;
  background-color: #fffaf4;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export const SelectStyled = styled(Select)`
  width: 374px;
  height: 50px;
  color: #424242;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  background-color: #fff;
  border-radius: 30px;
  border: none;
  padding: 0px 30px;
  box-sizing: border-box;
  margin: 0;

  &:focus: {
    border-radius: 10px;
    background: #f8fafb;
  }

  & > div: {
    display: inline-flex; // this shows the icon in the SelectInput but not the dropdown
  }
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #424242;
  margin-top: 3%;
  margin-bottom: 1%;
  width: 340px;
`;

export const ButtonWrapper = styled.div`
width: 100%;
  bacground-color: #424242;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  margin: 5% 1% 0 0;
`;

export const CenterButtonWrapper = styled.div`
  width: 100%;
  bacground-color: #424242;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5% 0 0 0;
`;

export const StyledAddButton = styled.button`
  width: auto;
  padding: 0 2%;
  height: 40px;
  background-color: #df3030;
  border: 0px solid;
  border-radius: 30px;
  outline: none;
  box-shadow: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
`;

export const StyledSubmitButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #df3030;
  border: 0px solid;
  border-radius: 30px;
  outline: none;
  box-shadow: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
`;

export const StyledCancelButton = styled.button`
  width: auto;
  height: 40px;
  background-color: transparent;
  border: 0px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #df3030;
  margin-right: 10%;
`;
