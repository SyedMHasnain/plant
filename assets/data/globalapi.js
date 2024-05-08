// import {request, gql} from 'graphql-request';
// const Master_Url =
//   'https://api-ap-south-1.hygraph.com/v2/clthe3nw6000607w3hf14r6uh/master';

// const getSlider = async () => {
//   const document = gql`
//     query Categories {
//       categories {
//         id
//         image {
//           url
//         }
//         title
//         price
//         details
//       }
//     }
//   `;
//   try {
//     const result = await request(Master_Url, document);
//     return result;
//   } catch (error) {
//     throw new Error(`Error fetching sliders: ${error.message}`);
//   }
// };
// export default getSlider;