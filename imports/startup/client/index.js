/* eslint-disable import/no-unresolved */
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {ApolloProvider} from "react-apollo";
import {ApolloLink} from "apollo-link";
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";


import App from '../../ui/app';

const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl("graphql")
})

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: true
});

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('app'));
});