import styled from "@emotion/styled";

export const HomeWrapper = styled.section`
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
`;

export const InnerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  padding: 50px;
  * {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CollectionDetailWrapper = styled.section`
  padding: 40px;

  img {
    max-width: 200px;
  }

  p{
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #424242;
  }

 
  

`;

export const Grid = styled.section`
  padding: 0 0 15vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(142px, 1fr));
  grid-column-gap: 30px;
`;

export const AnimeListWrapper = styled.div`
display: flex;
flex-direction: column;
width: 200px;
margin: 30px 0;
position: relative;

h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 7px 0 7px;
  position: absolute;
  z-index:5;
  bottom: 0;
  margin: 0;
  height: 65px;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  text-align: center;
  background-color: #555570be;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

img {
  height: 300px;
  width: 200px;
  border-radius: 20px;
  object-fit: cover;
}

.detailButton {
  height: 300px;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0;
  margin: 0;
}
`;
