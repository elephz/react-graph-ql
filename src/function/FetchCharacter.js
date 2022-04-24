import { useQuery, gql } from "@apollo/client";
const GET_CHARACTERS = gql`
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

export const FetchCharacter = (page,search = null) => {
  const perPage = 20
  const { error, loading, data } = useQuery(GET_CHARACTERS,{
    variables:{
      page,
      perPage,
      search
    }
  });
  
  return {
    error,
    loading,
    data,
  };
};

// export const AnotherFetch = () => {
//   // Here we define our query as a multi-line string
//   // Storing it in a separate .graphql/.gql file is also possible
//   var query = `
//       query ($id: Int, $page: Int, $perPage: Int, $search: String) {
//         Page (page: $page, perPage: $perPage) {
//           pageInfo {
//             total
//             currentPage
//             lastPage
//             hasNextPage
//             perPage
//           }
//           media (id: $id, search: $search) {
//             id
//             title {
//               romaji
//             }
//             source
//             coverImage {
//               extraLarge
//             }
//           }
//         }
//       }
//     `;

//   // Define our query variables and values that will be used in the query request
//   var variables = {
//     // id: 15125,
//   };

//   // Define the config we'll need for our Api request
//   var url = "https://graphql.anilist.co",
//     options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         query: query,
//         variables: variables,
//       }),
//     };

//   // Make the HTTP Api request
//   fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

//   function handleResponse(response) {
//     return response.json().then(function (json) {
//       return response.ok ? json : Promise.reject(json);
//     });
//   }

//   function handleData(data) {
//     console.log(data);
//   }

//   function handleError(error) {
//     console.error(error);
//   }
// };
