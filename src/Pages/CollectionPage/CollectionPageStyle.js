import styled from "@emotion/styled";

export const CollectionListWrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  background-color: #fffaf4;

  * {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ul {
    padding: 0;
  }
  .Logo {
    padding: 5% 5% 2% 5%;
    background: transparent;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #424242;
  }
`;

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  padding: 0px 50px 50px 50px;
  * {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  .collectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .HeaderButtonWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const Grid = styled.section`
  padding: 0 0 15vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-column-gap: 30px;

  .collectionCard {
    margin-bottom: 8%;
    width: 200px;

    img {
      max-width: 100%;
    }
  }
  .hidden1 {
    height: 30px;
  }
  .hidden2 {
    height: 40px;
  }
`;

export const CollectionDetailButton = styled.button`
  width: 200px;
  height: auto;
  background-color: #555570be;
  border-radius: 10px;
  border: 0px solid;
  outline: none;
  box-shadow: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #fff;
  transition: all 0.25s ease-in-out;

  img {
    height: 255px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  h1 {
    margin: 5% 0 5% 0;
  }

  &:hover {
    box-shadow: 1px 1px 10px rgba(125, 120, 155, 0.75);
  }
`;

export const StyledRemoveButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 200px;
  height: 30px;
  background-color: transparent;
  border: 0px solid;
  border-radius: 30px;
  outline: none;
  box-shadow: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #df3030;
`;

export const StyledEditButton = styled.button`
  margin-top: 4%;
  width: 200px;
  height: 40px;
  background-color: #df3030;
  border: 0px solid;
  border-radius: 10px;
  outline: none;
  box-shadow: none;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #fff;
`;

export const StyledAddButton = styled.button`
  width: 150px;
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

export const StyledXButton = styled.button`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
width: 16px;
height: 16px;
outline: none;
background-color: transparent;
border: none;
box-shadow: none;
color: #E52C32;
font-size: 15px;
padding: 0;
position:absolute;
right:10px;
top:10px;
`;