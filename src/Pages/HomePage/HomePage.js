import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ANIME } from "../../Data/graphql_query";
import {
  HomeWrapper,
  CenterWrapper,
  InnerWrapper,
  Grid,
  AnimeListWrapper,
  Pagination,
} from "./HomePageStyle";
import { useHistory } from "react-router-dom";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faDog } from "@fortawesome/free-solid-svg-icons";

//Pagination
import ReactPaginate from "react-paginate";

//Loader
import { ThreeDots } from "react-loader-spinner";

function HomePage() {
  const history = useHistory();

  const [page, setPage] = useState(0);
  const handlePageChange = (event) => {
    setPage(event.selected);
  };

  const { loading, error, data } = useQuery(GET_ALL_ANIME, {
    variables: { page: page + 1 },
  });

  if (loading)
    return (
      <HomeWrapper>
        <CenterWrapper>
          <ThreeDots color="#e52c32" height={80} width={80} />
        </CenterWrapper>
      </HomeWrapper>
    );

  if (error)
    return (
      <HomeWrapper>
        <CenterWrapper>
          <h4>An error has occured...{error.message}</h4>
        </CenterWrapper>
      </HomeWrapper>
    );

  return (
    <HomeWrapper>
      <div className="Logo"> <FontAwesomeIcon icon={faDog} style={{fontSize: "45px"}}/>Welcome to Dogifly,</div>

      <InnerWrapper>
        <h2>Latest Animes</h2>

        <Pagination>
          <ReactPaginate
            breakLabel="..."
            pageRangeDisplayed={3}
            pageCount={10}
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
            onPageChange={handlePageChange}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={page}
          />
        </Pagination>

        <Grid>
          {data.Page.media.map((anime, index) => {
            return (
              <AnimeListWrapper key={index}>
                
                <button
                  onClick={() =>
                    history.push({
                      pathname: `/anime/${anime.id}/${anime.title.romaji}`,
                      state: data,
                    })
                  }
                >
                  <h1>{anime.title.romaji}</h1>
                  <img src={anime.coverImage.extraLarge} alt="anime cover" />
                </button>
              </AnimeListWrapper>
            );
          })}
        </Grid>
      </InnerWrapper>
    </HomeWrapper>
  );
}

export default HomePage;
