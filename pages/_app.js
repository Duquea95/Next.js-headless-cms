import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import '../styles/globals.scss';

const httpLink = createHttpLink({ uri: 'https://swift-nyc.myshopify.com/api/graphql' })

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': '79764fd12825241e2ad377a001872184'
  }
}))

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
    return(
        <ApolloProvider client={client}>
        <Component {...pageProps}/>
        </ApolloProvider>
    )
}

export default MyApp