import React, { Fragment, useState } from "react";
import { Table, Button } from "antd";
import { usePokemon } from "../hooks/use-pokemon";

function getColumns() {
  return [
    {
      title: "Name",
      dataIndex: "node.name",
      key: "node.name"
    },
    {
      title: "Type",
      dataIndex: "node.types",
      key: "node.types"
    },
    {
      title: "Classification",
      dataIndex: "node.classification",
      key: "node.classification"
    }
  ];
}

export function List(props) {
  const { type, name } = props;
  const [after, setAfter] = useState(null);
  const { loading, error, data } = usePokemon(type, name, after);

  function handlePagination() {
    setAfter(pageInfo.endCursor);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ops, Something goes wrong! </p>;

  const { pageInfo, edges } = data.pokemons
    ? data.pokemons
    : data.pokemonsByType;

  return (
    <Fragment>
      <Table
        columns={getColumns()}
        dataSource={edges}
        pagination={false}
      ></Table>
      <Button disabled={!pageInfo.hasNextPage} onClick={handlePagination}>
        Load More
      </Button>
    </Fragment>
  );
}
