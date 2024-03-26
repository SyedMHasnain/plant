import {request, gql} from 'graphql-request';
const master_Url =
  'https://api-ap-south-1.hygraph.com/v2/clthe3nw6000607w3hf14r6uh/master';
const getCategory = async () => {
  const query = gql`
    query Categories {
      categories {
        id
        image {
          url
        }
        title
        price
        details
      }
    }
  `;
  const result = await request(master_Url, query);
  return result;
};
export default {getCategory};
