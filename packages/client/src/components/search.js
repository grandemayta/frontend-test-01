import React, { Fragment, useState } from "react";
import { Row, Col, Input, Button } from "antd";
import { List } from "./list";

export function Search() {
  const { Search } = Input;
  const [name, setName] = useState(null);
  const [type, setType] = useState("byName");

  function handleSearch(name) {
    setName(name);
  }

  function handleSwitch() {
    const value = type === "byName" ? "byType" : "byName";
    setType(value);
  }

  return (
    <Fragment>
      <Row type="flex" justify="center">
        <Col span={12}>
          <Search placeholder="Search pokemon..." onSearch={handleSearch} />
          <Button onClick={handleSwitch}>
            Switch {type === "byName" ? "byName" : "byType"}
          </Button>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col span={12}>
          <List type={type} name={name}></List>
        </Col>
      </Row>
    </Fragment>
  );
}
