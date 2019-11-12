import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Layout } from "antd";
import { client } from "./core";
import { Search } from "./components/search";
import "./App.css";

function App() {
  const { Header, Content } = Layout;
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Header>
          <h1>Pokemon React Application</h1>
        </Header>
        <Content>
          <Search />
        </Content>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
