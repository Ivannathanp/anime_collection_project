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
  .Logo{
    padding:5% 5% 2% 5%;
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
`;

export const CenterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`;

export const Grid = styled.section`
  padding: 0 0 20vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-column-gap: 30px;
  justify-items: center;
`;

export const AnimeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 30px 0;
  position: relative;
  transition: all 0.25s ease-in-out;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 7px 0 7px;
    position: absolute;
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

  button {
    height: 300px;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0;
    margin: 0;
  }

  &:hover {
    border-radius: 20px;
    box-shadow: 1px 1px 10px rgba(125, 120, 155, 0.75);
  }
`;

export const Pagination = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
    li {
      list-style-type: none;
      border-radius: 50px;
      min-width: 30px;
      height: 30px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &.active {
        color: #fff;
        background-color: #e52c32;
      }
    }
  }
`;

