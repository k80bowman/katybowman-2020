import { onError } from 'apollo-link-error';

export default function(ctx) {

  return {

    // required
    httpEndpoint: process.env.GRAPHCMS_URI,

    httpLinkOptions: {
      uri: process.env.GRAPHCMS_URI,
      credentials: 'same-origin'
    },
  }
};
