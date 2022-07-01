import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import default_image from "../../Components/Images/Default.jpg";
import {
  CollectionListWrapper,
  InnerWrapper,
  Grid,
  StyledAddButton,
  CollectionDetailButton,
  StyledRemoveButton,
  StyledEditButton,
  StyledXButton,
} from "./CollectionPageStyle";
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
} from "../AnimeDetailPage/AnimeDetailPageStyle";

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
import { faPlus, faXmark, faDog } from "@fortawesome/free-solid-svg-icons";

//Loader
import { ThreeDots } from "react-loader-spinner";

function CollectionPage() {
  const history = useHistory();

  const [newCollectionModalOpen, setNewCollectionModalOpen] = useState(false);
  const [editCollectionName, setEditCollectionName] = useState();
  const [editCollection, setEditCollection] = useState(false);
  const [editCollectionModalOpen, setEditCollectionModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [removedCollection, setRemovedCollection] = useState();

  var getCollection = JSON.parse(localStorage.getItem("collections"));

  function addAnimeToNewCollection(e) {
    var newCollection = {
      collectionName: e.collectionname,
      collectionBanner: default_image,
      animes: [],
    };

    if (getCollection == null || getCollection[0] == null) {
      getCollection = [];
      getCollection.push(newCollection);
    } else if (getCollection != null) {
      if (getCollection.length >= 1) {
        const checkName = getCollection.some(
          (value) => value.collectionName === newCollection.collectionName
        );
        console.log("value", checkName);

        if (!checkName) {
          console.log("I am called");
          getCollection.push(newCollection);
          localStorage.setItem("collections", JSON.stringify(getCollection));
        } else if (checkName) {
          alert("Collection already exist");
        }
      }
    }
    setNewCollectionModalOpen(false);
  }

  function editAnimeCollection(e) {
    const editIndex = getCollection.findIndex(
      (index) => index.collectionName === editCollectionName
    );

    const checkName = getCollection.some(
      (value) => value.collectionName === e.collectionname
    );

    if (!checkName) {
      const originalData = getCollection.splice(editIndex, 1);
      var newCollection = {
        collectionName: e.collectionname,
        collectionBanner: originalData[0].collectionBanner,
        animes: originalData[0].animes,
      };
      getCollection.push(newCollection);
      localStorage.setItem("collections", JSON.stringify(getCollection));

      console.log(e.collectionname);

      setEditCollectionModalOpen(false);
    } else if (checkName) {
      alert("Collection already exist");
    }
  }

  function removeCollection() {
    const removingIndex = getCollection.findIndex(
      (remove) => remove.collectionName === removedCollection
    );

    getCollection.splice(removingIndex, 1);

    localStorage.setItem("collections", JSON.stringify(getCollection));
    setDeleteModalOpen(false);
  }

  return (
    <CollectionListWrapper>
      <div className="Logo">
        {" "}
        <FontAwesomeIcon icon={faDog} style={{ fontSize: "45px" }} />
        Welcome to Dogifly,
      </div>
      <InnerWrapper>
        <div className="collectionHeader">
          <h2>My Collections</h2>
          <div className="HeaderButtonWrapper">
            <StyledAddButton onClick={() => setNewCollectionModalOpen(true)}>
              <FontAwesomeIcon icon={faPlus} />
              &nbsp; Add new
            </StyledAddButton>
            <StyledAddButton
              onClick={() => setEditCollection(() => !editCollection)}
            >
              {editCollection ? "Done" : " Edit Collections"}
            </StyledAddButton>
          </div>
        </div>

        <Grid>
          {JSON.parse(localStorage.getItem("collections")).length > 0 ? (
            JSON.parse(localStorage.getItem("collections")).map(
              (collection, index) => (
                <div key={index} className="collectionCard">
                  {editCollection ? (
                    <StyledRemoveButton
                      onClick={() => {
                        setRemovedCollection(collection.collectionName);
                        setDeleteModalOpen(true);
                      }}
                    >
                      Remove
                    </StyledRemoveButton>
                  ) : (
                    <div className="hidden1"></div>
                  )}
                  <CollectionDetailButton
                    key={index}
                    onClick={() =>
                      history.push({
                        pathname: `/collection/${collection.collectionName}`,
                        state: collection,
                      })
                    }
                  >
                    <h1>{collection.collectionName}</h1>
                    <img
                      src={
                        typeof collection.animes[0] !== "undefined"
                          ? collection.animes[0].banner
                          : collection.collectionBanner
                      }
                      alt="collection banner"
                    />
                  </CollectionDetailButton>

                  {editCollection ? (
                    <StyledEditButton
                      onClick={() => {
                        setEditCollectionName(collection.collectionName);
                        setEditCollectionModalOpen(true);
                      }}
                    >
                      Edit
                    </StyledEditButton>
                  ) : (
                    <div className="hidden2"> </div>
                  )}
                </div>
              )
            )
          ) : (
            <p>No collection yet</p>
          )}
        </Grid>

        <Modal open={newCollectionModalOpen}>
          <BoxStyled>
            <InnerBox>
              <HeadingTitle>Add New collection!</HeadingTitle>

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
                        onClick={() => setNewCollectionModalOpen(false)}
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
            </InnerBox>
          </BoxStyled>
        </Modal>

        <Modal open={editCollectionModalOpen}>
          <BoxStyled>
            <InnerBox>
              <HeadingTitle>
                Edit "{editCollectionName}" collection!
              </HeadingTitle>

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
                  onSubmit={(values) => editAnimeCollection(values)}
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
                        onClick={() => setEditCollectionModalOpen(false)}
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
            </InnerBox>
          </BoxStyled>
        </Modal>

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
                  Delete "{removedCollection}" collection?
                </HeadingTitle>
                <br />
                <DetailHeading>This process can't be undone</DetailHeading>
                <br />
                <StyledEditButton onClick={removeCollection}>
                  Delete
                </StyledEditButton>
              </CenterWrapper>
            </InnerBox>
          </BoxStyled>
        </Modal>
      </InnerWrapper>
    </CollectionListWrapper>
  );
}

export default CollectionPage;
