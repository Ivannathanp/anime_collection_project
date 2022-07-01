import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DETAILS_ANIME } from "../../Data/graphql_query";
import {
  AnimeDetailWrapper,
  CenterWrapper,
  DetailInfo,
  Grid,
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
} from "./AnimeDetailPageStyle";
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
//Form
import { Formik, Form, Field } from "formik";
import { TextField } from "../../Components/Form/FormLib";
import * as Yup from "yup";
import { useMinimalSelectStyles } from "../../Components/Select/index";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

//Modal
import Modal from "@mui/material/Modal";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faFaceMeh,
  faFaceSmileBeam,
  faFrown,
} from "@fortawesome/free-regular-svg-icons";

//Loader
import { ThreeDots } from "react-loader-spinner";

export const COLLECTION_TYPE = {
  EXISTING: "existing",
  NEW: "new",
};

function AnimeDetailPage() {
  const { id } = useParams();
  const history = useHistory();

  const [AnimeName, setAnimeName] = useState("");
  const [CollectionModalOpen, setCollectionModalOpen] = useState(false);
  const [CollectionName, setCollectionName] = useState("");
  const [AddCollectionType, setAddCollectionType] = useState(
    COLLECTION_TYPE.EXISTING
  );

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreRoundedIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const { loading, error, data } = useQuery(GET_DETAILS_ANIME, {
    variables: { id: id },
  });

  if (loading) {
    return (
      <AnimeDetailWrapper>
        <CenterWrapper>
          <ThreeDots color="#e52c32" height={80} width={80} />
        </CenterWrapper>
      </AnimeDetailWrapper>
    );
  }

  if (error) {
    return (
      <AnimeDetailWrapper>
        <CenterWrapper>
          <HeadingTitle>An error has occured...{error.message}</HeadingTitle>
        </CenterWrapper>
      </AnimeDetailWrapper>
    );
  }

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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const startDate = new Date(
    data.Media.startDate.year,
    data.Media.startDate.month - 1
  );

  const endDate = data.Media.endDate.month
    ? new Date(data.Media.endDate.year, data.Media.endDate.month - 1)
    : null;

  function AddToCollection(e) {
    setCollectionModalOpen(true);
    console.log(e);
    setAnimeName(e);
  }

  var getCollection = JSON.parse(localStorage.getItem("collections"));
  if (getCollection > 1) {
    var item = getCollection.find((item) => item.collectionName);
  } else if (getCollection != null) {
    var item = getCollection[0];
  } else {
    var item = getCollection;
  }

  function addAnimeToNewCollection(e) {
    var newCollection = {
      collectionName: e.collectionname,
      collectionBanner: data.Media.coverImage.extraLarge,
      animes: [],
    };

    if (getCollection == null || getCollection[0] == null) {
      getCollection = [];
      getCollection.push(newCollection);

      var addAnime = {
        id: data.Media.id,
        title: data.Media.title.romaji,
        banner: data.Media.coverImage.extraLarge,
      };

      getCollection[0].animes.push(addAnime);
      localStorage.setItem("collections", JSON.stringify(getCollection));
      setCollectionModalOpen(false);
      setAddCollectionType(COLLECTION_TYPE.EXISTING);
    } else if (getCollection != null) {
      if (getCollection.length >= 1) {
        const checkName = getCollection.some(
          (value) => value.collectionName === newCollection.collectionName
        );
        console.log("value", checkName);

        if (!checkName) {
          console.log("I am called");
          getCollection.push(newCollection);

          var addAnime = {
            id: data.Media.id,
            title: data.Media.title.romaji,
            banner: data.Media.coverImage.extraLarge,
          };

          for (var i = 0; i < getCollection.length; i++) {
            console.log("I am called 1");
            if (
              getCollection[i].collectionName === newCollection.collectionName
            ) {
              console.log("I am called 2");
              getCollection[i].animes.push(addAnime);
              localStorage.setItem(
                "collections",
                JSON.stringify(getCollection)
              );
            }
          }
          setCollectionModalOpen(false);
          setAddCollectionType(COLLECTION_TYPE.EXISTING);
        } else if (checkName) {
          alert("Collection already exist");
        }
      }
    }
  }

  function addAnimeToExistingCollection() {
    console.log(CollectionName);
    const addAnime = {
      id: data.Media.id,
      title: data.Media.title.romaji,
      banner: data.Media.coverImage.extraLarge,
    };

    for (var i = 0; i < getCollection.length; i++) {
      console.log("I am called");
      if (getCollection[i].collectionName === CollectionName) {
        getCollection[i].animes.push(addAnime);
        localStorage.setItem("collections", JSON.stringify(getCollection));
      }
    }
    setCollectionModalOpen(false);
  }

  return (
    <OuterContainer>
      <InnerContainer>
        {renderHeader()}
        <AnimeDetailWrapper id="animeDetail">
          <BackgroundContainer>
            {data.Media.bannerImage ? (
              <BackgroundImage src={data.Media.bannerImage} />
            ) : (
              <BackgroundImage src={data.Media.coverImage.large} />
            )}

            <DataContainerOverlay></DataContainerOverlay>
          </BackgroundContainer>

          <DataContainer>
            <DataInnerContainer>
              <HeadingTitle>{data.Media.title.romaji}</HeadingTitle>

              <HeadingSubtitle>{data.Media.title.native}</HeadingSubtitle>

              <DetailInfo>
                <Grid>
                  <div className="flex">
                    <DetailHeading>Genres: &nbsp;</DetailHeading>
                    {data.Media.genres.length > 0 ? (
                      data.Media.genres.map((genre, index, { length }) =>
                        length - 1 === index ? (
                          <DetailSubHeading key={index}>
                            {genre}
                          </DetailSubHeading>
                        ) : (
                          <DetailSubHeading key={index}>
                            {genre}, &nbsp;
                          </DetailSubHeading>
                        )
                      )
                    ) : (
                      <DetailSubHeading>N/A</DetailSubHeading>
                    )}
                  </div>

                  <div className="flex">
                    <DetailHeading>Date aired:&nbsp;</DetailHeading>
                    <DetailSubHeading>
                      {startDate.getDay()}&nbsp;{months[startDate.getMonth()]}
                      &nbsp;
                      {startDate.getFullYear()} -&nbsp;
                      {endDate
                        ? `${endDate.getDay()} &nbsp;${
                            months[endDate.getMonth()]
                          }, ${endDate.getFullYear()}`
                        : "present"}
                    </DetailSubHeading>
                  </div>

                  <div className="flex">
                    <DetailHeading>Status:&nbsp;</DetailHeading>
                    <DetailSubHeading>
                      {data.Media.status === "RELEASING"
                        ? "Ongoing"
                        : data.Media.status === "NOT_YET_RELEASED"
                        ? "Coming Soon"
                        : data.Media.status === "FINISHED"
                        ? "Finished"
                        : data.Media.status === "CANCELLED"
                        ? "Cancelled"
                        : "Hiatus"}
                    </DetailSubHeading>
                  </div>

                  <div className="flex">
                    <DetailHeading>Episodes:&nbsp;</DetailHeading>
                    <DetailSubHeading>
                      {data.Media.episodes
                        ? data.Media.episodes
                        : data.Media.nextAiringEpisode
                        ? data.Media.nextAiringEpisode.episode
                        : "Coming Soon"}
                    </DetailSubHeading>
                  </div>

                  <div className="flex">
                    <DetailHeading>Durations:&nbsp;</DetailHeading>
                    <DetailSubHeading>
                      {" "}
                      {data.Media.duration ? data.Media.duration : "-"}
                      &nbsp;minutes/episode
                    </DetailSubHeading>
                  </div>

                  <div className="flex">
                    <DetailHeading>Average score:&nbsp;</DetailHeading>

                    {data.Media.averageScore === null ? (
                      <DetailSubHeading>N/A</DetailSubHeading>
                    ) : data.Media.averageScore > 50 ? (
                      <DetailSubHeading>
                        {data.Media.averageScore}% &nbsp;
                        <span>
                          <FontAwesomeIcon
                            icon={faFaceSmileBeam}
                            size={25}
                            style={{ color: "#1dab33" }}
                          />
                        </span>
                      </DetailSubHeading>
                    ) : data.Media.averageScore === 50 ? (
                      <DetailSubHeading>
                        {data.Media.averageScore}% &nbsp;
                        <span>
                          <FontAwesomeIcon
                            icon={faFaceMeh}
                            size={25}
                            style={{ color: "#fada58" }}
                          />
                        </span>
                      </DetailSubHeading>
                    ) : data.Media.averageScore < 50 ? (
                      <DetailSubHeading>
                        {data.Media.averageScore}%&nbsp;
                        <span>
                          <FontAwesomeIcon
                            icon={faFrown}
                            size={25}
                            style={{ color: "#df3030" }}
                          />
                        </span>
                      </DetailSubHeading>
                    ) : (
                      <DetailSubHeading>N/A</DetailSubHeading>
                    )}
                  </div>
                </Grid>

                <div className="description">
                  <DetailHeading>Description:&nbsp;</DetailHeading>
                  <DetailSubHeading>
                    {data.Media.description === null
                      ? "No Description Yet"
                      : data.Media.description}
                  </DetailSubHeading>
                </div>
              </DetailInfo>

              <CenterButtonWrapper>
                <StyledAddButton
                  disabled={
                    getCollection != null &&
                    getCollection.length >= 1 &&
                    getCollection.some((collection) =>
                      collection.animes.some(
                        (value) => value.title == data.Media.title.romaji
                      )
                    )
                      ? true
                      : false
                  }
                  onClick={() => AddToCollection(data.Media.title.romaji)}
                >
                  {getCollection != null &&
                  getCollection.length >= 1 &&
                  getCollection.some((collection) =>
                    collection.animes.some(
                      (value) => value.title === data.Media.title.romaji
                    )
                  )
                    ? "Anime has been collected"
                    : "Add to Collection"}
                </StyledAddButton>
              </CenterButtonWrapper>

              <Modal open={CollectionModalOpen}>
                <BoxStyled>
                  <InnerBox>
                    <HeadingTitle>
                      Add {AnimeName} to your collection!
                    </HeadingTitle>

                    {getCollection && getCollection.length > 0 ? (
                      <CenterWrapper>
                        <StyledLabel>Where To Save:</StyledLabel>
                        <SelectStyled
                          defaultValue=""
                          disableUnderline
                          IconComponent={iconComponent}
                          value={AddCollectionType}
                          onChange={(e) => setAddCollectionType(e.target.value)}
                        >
                          <MenuItem value={COLLECTION_TYPE.EXISTING}>
                            Existing Collection
                          </MenuItem>
                          <MenuItem value={COLLECTION_TYPE.NEW}>
                            New Collection
                          </MenuItem>
                        </SelectStyled>

                        {AddCollectionType === COLLECTION_TYPE.NEW && (
                          <>
                            <StyledLabel>New Collection Name:</StyledLabel>
                            <Formik
                              initialValues={{
                                collectionname: "",
                              }}
                              validationSchema={Yup.object().shape({
                                collectionname: Yup.string()
                                  .required("Required")
                                  .matches(
                                    /^[aA-zZ\s]+$/,
                                    "Only alphabets are allowed for this field "
                                  ),
                              })}
                              onSubmit={(values) => {
                                addAnimeToNewCollection(values);
                                console.log(values);
                              }}
                            >
                              <Form>
                                <TextField
                                  name="collectionname"
                                  type="text"
                                  placeholder="Enter Collection Name"
                                />
                                <ButtonWrapper>
                                  <StyledCancelButton
                                    type="button"
                                    onClick={() => {
                                      setCollectionModalOpen(false);
                                      setAddCollectionType(
                                        COLLECTION_TYPE.EXISTING
                                      );
                                    }}
                                  >
                                    Cancel
                                  </StyledCancelButton>
                                  <StyledSubmitButton type="submit">
                                    Submit
                                  </StyledSubmitButton>
                                </ButtonWrapper>
                              </Form>
                            </Formik>
                          </>
                        )}
                        {AddCollectionType === COLLECTION_TYPE.EXISTING && (
                          <>
                            <StyledLabel>Existing Collection Name:</StyledLabel>
                            <SelectStyled
                              defaultValue=""
                              disableUnderline
                              IconComponent={iconComponent}
                              value={CollectionName}
                              onChange={(e) =>
                                setCollectionName(e.target.value)
                              }
                            >
                              {getCollection.map((collection, index) => {
                                console.log(collection);
                                return (
                                  <MenuItem value={collection.collectionName}>
                                    {collection.collectionName}
                                  </MenuItem>
                                );
                              })}
                            </SelectStyled>

                            <ButtonWrapper>
                              <StyledCancelButton
                                onClick={() => {
                                  setCollectionModalOpen(false);
                                  setAddCollectionType(
                                    COLLECTION_TYPE.EXISTING
                                  );
                                }}
                              >
                                Cancel
                              </StyledCancelButton>
                              <StyledSubmitButton
                                type="submit"
                                onClick={() => addAnimeToExistingCollection()}
                              >
                                Submit
                              </StyledSubmitButton>
                            </ButtonWrapper>
                          </>
                        )}
                      </CenterWrapper>
                    ) : (
                      <CenterWrapper>
                        <StyledLabel>New Collection Name:</StyledLabel>
                        <Formik
                          initialValues={{
                            collectionname: "",
                          }}
                          validationSchema={Yup.object().shape({
                            collectionname: Yup.string()
                              .required("Required")
                              .matches(
                                /^[aA-zZ\s]+$/,
                                "Only alphabets are allowed for this field "
                              ),
                          })}
                          onSubmit={(values) => addAnimeToNewCollection(values)}
                        >
                          <Form>
                            <TextField
                              name="collectionname"
                              type="text"
                              placeholder="Enter Collection Name"
                            />
                            <ButtonWrapper>
                              <StyledCancelButton
                                type="button"
                                onClick={() => {
                                  setCollectionModalOpen(false);
                                  setAddCollectionType(
                                    COLLECTION_TYPE.EXISTING
                                  );
                                }}
                              >
                                Cancel
                              </StyledCancelButton>
                              <StyledSubmitButton type="submit">
                                Submit
                              </StyledSubmitButton>
                            </ButtonWrapper>
                          </Form>
                        </Formik>
                      </CenterWrapper>
                    )}
                  </InnerBox>
                </BoxStyled>
              </Modal>
            </DataInnerContainer>
          </DataContainer>
        </AnimeDetailWrapper>
      </InnerContainer>
    </OuterContainer>
  );
}

export default AnimeDetailPage;
