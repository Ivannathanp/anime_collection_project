import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  HomeWrapper,
  Grid,
  CollectionDetailWrapper,
  AnimeListWrapper,
} from "./CollectionDetailPageStyle";
import {
  CollectionListWrapper,
  InnerWrapper,
  CollectionDetailButton,
  StyledRemoveButton,
  StyledEditButton,
  StyledXButton,
} from "../CollectionPage/CollectionPageStyle";
import {
  AnimeDetailWrapper,
  CenterWrapper,
  DetailInfo,
  BackgroundImage,
  DetailHeading,
  DetailSubHeading,
  HeadingTitle,
  HeadingSubtitle,
  BoxStyled,
  InnerBox,
  SelectStyled,
  StyledLabel,
  ButtonWrapper,
  CenterButtonWrapper,
  StyledSubmitButton,
  StyledCancelButton,
  StyledAddButton,
} from "../AnimeDetailPage/AnimeDetailPageStyle";
import {
  OuterContainer,
  InnerContainer,
  BackgroundContainer,
  DataContainer,
  DataInnerContainer,
  DataContainerOverlay,
  HeaderWrapper,
  BackButton,
  HeaderText,
} from "../../Components/Navbar/HeaderStyle";

//Modal
import Modal from "@mui/material/Modal";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faDog, faXmark } from "@fortawesome/free-solid-svg-icons";

function CollectionDetailPage() {
  const history = useHistory();

  const { id } = useParams();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [removedAnime, setRemovedAnime] = useState();
  var getCollection = JSON.parse(localStorage.getItem("collections"));

  function removeAnime () {
 
    const findIndex = getCollection.findIndex(
      (find) => find.collectionName === id
    );
    console.log(findIndex)
    const animes = getCollection[findIndex].animes;
    console.log(animes)
    const removeAnime = animes.findIndex(
      (remove) => remove.title === removedAnime
    );
    console.log(removeAnime)
    animes.splice(removeAnime, 1);

    console.log(getCollection)
    localStorage.setItem("collections", JSON.stringify(getCollection));
    setDeleteModalOpen(false);
  };

  const findIndex = getCollection.findIndex(
    (find) => find.collectionName === id
  );
  const animes = getCollection[findIndex].animes;

  function renderHeader() {
    return (
      <HeaderWrapper>
        <BackButton onClick={() => history.goBack()}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ color: "#fff", marginTop: "-2%", marginRight: "15%" }}
          />
          <HeaderText>Back</HeaderText>
        </BackButton>
      </HeaderWrapper>
    );
  }

  return (
    <OuterContainer>
      <InnerContainer>
        {renderHeader()}
        <CollectionDetailWrapper>
          <h2>My "{id}" Collection</h2>
          <Grid>
            {animes.length > 0 ? (
              animes.map((anime, index) => (
                <AnimeListWrapper key={index}>
                  <StyledRemoveButton onClick={() => {setRemovedAnime(anime.title);
    setDeleteModalOpen(true)}}>
                    Remove
                  </StyledRemoveButton>
                  <button
                    className="detailButton"
                    onClick={() =>
                      history.push({
                        pathname: `/anime/${anime.id}/${anime.title}`,
                        state: anime,
                      })
                    }
                  >
                    <h1>{anime.title}</h1>
                    <img src={anime.banner} alt="anime banner" />
                  </button>
                </AnimeListWrapper>
              ))
            ) : (
              <CenterWrapper>
                <InnerWrapper>
                  <FontAwesomeIcon icon={faDog} style={{ fontSize: "40px" }} />
                  <p>No anime in this collection yet. </p>
                  <StyledAddButton
                    onClick={() =>
                      history.push({
                        pathname: "/",
                      })
                    }
                  >
                    Go Explore!
                  </StyledAddButton>
                </InnerWrapper>
              </CenterWrapper>
            )}
          </Grid>

          <Modal open={deleteModalOpen}>
          <BoxStyled>
            <InnerBox>
              <StyledXButton
                className="cartnotifclosebutton"
                onClick={() => setDeleteModalOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </StyledXButton>
              <CenterWrapper>
                <HeadingTitle>
                  Delete "{removedAnime}" collection?
                </HeadingTitle>
                <br />
                <DetailHeading>This process can't be undone</DetailHeading>
                <br />
                <StyledEditButton onClick={()=>removeAnime()}>
                  Delete
                </StyledEditButton>
              </CenterWrapper>
            </InnerBox>
          </BoxStyled>
        </Modal>
        </CollectionDetailWrapper>
      </InnerContainer>
    </OuterContainer>
  );
}

export default CollectionDetailPage;
