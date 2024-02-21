import {CTABanner} from '~/components/CTABanner';
import {Hero} from '~/components/Hero';
import {ProductList} from '~/components/ProductList';
import {useLoaderData} from '@remix-run/react';

export function meta() {
  return [
    {title: 'Hydrogen'},
    {description: 'A custom storefront powered by Hydrogen'},
  ];
}

export async function loader({context}) {
  return await context.storefront.query(PRODUCT_QUERY);
}

export default function Index() {
  const {products} = useLoaderData();

  return (
    <>
      <Hero></Hero>
      <ProductList products={products}></ProductList>
      <CTABanner></CTABanner>
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
