import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query ($id: Int, $page: Int) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, sort: TITLE_ROMAJI, status_in: RELEASING, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        status
        format
        description
        startDate {
          day
          month
          year
        }
        endDate {
          day
          month
          year
        }
        episodes
        duration
        genres
        averageScore
        popularity
        trending
        isAdult
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
      }
    }
  }
`;

export const SEARCH_ANIME = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: 10) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        status
        format
        description
        startDate {
          day
          month
          year
        }
        endDate {
          day
          month
          year
        }
        episodes
        duration
        genres
        averageScore
        popularity
        trending
        isAdult
        coverImage {
          extraLarge
          large
          medium
          color
        }
        bannerImage
      }
    }
  }
`;

export const GET_DETAILS_ANIME = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      status
      format
      description
      startDate {
        day
        month
        year
      }
      endDate {
        day
        month
        year
      }
      episodes
      nextAiringEpisode {
        episode
      }
      duration
      genres
      averageScore
      popularity
      trending
      isAdult
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
    }
  }
`;
