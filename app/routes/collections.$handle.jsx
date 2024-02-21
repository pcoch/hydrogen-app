import {CollectionList} from '~/components/CollectionList';
import {useLoaderData} from '@remix-run/react';

export async function loader({context}) {
  return await context.storefront.query(PRODUCT_QUERY);
}

export default function Index() {
  const {products} = useLoaderData();

  return (
    <>
      <CollectionList products={products}></CollectionList>
    </>
  );
}

const PRODUCT_QUERY = `#graphql
  query FeaturedProducts {
    products(first: 4) {
      edges {
        node {
          title
          id
          handle
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
