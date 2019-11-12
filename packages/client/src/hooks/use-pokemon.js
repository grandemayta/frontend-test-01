import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

export function usePokemon(type, name, after) {
  const fragments = {
    common: gql`
      fragment common on PokemonsConnection {
        edges {
          node {
            id
            name
            types
            classification
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    `
  };

  function gqlRequestByname() {
    return gql`
        {
          pokemons(q: "${name}", after: "${after}") {
            ...common
          }
        }
        ${fragments.common}
      `;
  }

  function gqlRequestByType() {
    return gql`
        {
          pokemonsByType(type: "${name}", after: "${after}") {
            ...common
          }
        }
        ${fragments.common}
      `;
  }

  const { loading, error, data } = useQuery(
    type === "byName" ? gqlRequestByname() : gqlRequestByType()
  );

  return { loading, error, data };
}
