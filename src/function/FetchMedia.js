import { useQuery, gql } from "@apollo/client";
const GET_MEDIA = gql`
  query ($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (id: $id, search: $search) {
        id
        title {
          romaji
        }
        source
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

export default function FetchMedia(page,search = null){
  const perPage = 20
  const { error, loading, data } = useQuery(GET_MEDIA,{
    variables:{
      page,
      perPage,
      search
    },
    pollInterval: 500,
  });
  
  return {
    error,
    loading,
    data,
  };
};

