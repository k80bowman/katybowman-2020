import { onError } from 'apollo-link-error';

export default function(ctx) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {

  })
  return {
    link: errorLink,

    // required
    httpEndpoint: process.env.GRAPHCMS_URI,

    httpLinkOptions: {
      credentials: 'same-origin'
    },
  }
};
