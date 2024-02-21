import {Link, useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {Fragment} from 'react';
import {Tab} from '@headlessui/react';
import Timeline from 'app/components/Timeline';
import Feature from 'app/components/Feature';
import Outlink from 'app/assets/icons/OutLink';
// import {Button, Link as ScrollLink} from 'react-scroll';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export async function loader({params, context}) {
  const {handle} = params; // Destructure the handle from the URL params
  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle, // Pass the handle to the GraphQL query
    },
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  return json({
    handle,
    product,
  });
}

export default function ProductHandle() {
  const {product} = useLoaderData();

  const faqs = [
    {
      question: 'What is included in a Commerce Catalyst?',
      answer: product.deliverable.value,
    },
    {
      question: 'What is the timeline for delivery?',
      answer:
        'There is a 30 day engagement duration for discovery, analysis, and recommendations; followed by a 14 day period for follow up support.',
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg border bg-slate-100 dark:bg-slate-800  dark:border-slate-700 shadow-lg">
              <img
                src={product.featuredImage.url}
                alt={product.imageAlt}
                className="px-4 pt-4 object-contain object-center"
              />
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
                  {product.title}
                </h1>
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <div className="mt-8">
                  <div className="inline-flex space-x-6">
                    <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-500 ring-1 ring-inset ring-blue-400/10">
                      ${Math.floor(product.priceRange.maxVariantPrice.amount)}{' '}
                      USD
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <span className="text-slate-600 dark:text-slate-300 font-semibold">
                        30 Day Delivery
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 dark:text-slate-400 text-slate-500">
              {product.description}
            </p>
            <div className="mt-10 grid gap-x-6 gap-y-4 grid-cols-2">
              <Link className="flex items-center" to="/contact">
                <button
                  type="button"
                  className="flex w-full items-center justify-center h-auto text-slate-50 bg-[#4242fc] border-[1.5px] border-[solid] border-[#2525cf] rounded-[6px] ml-0 mr-0 pt-[13px] px-[20px] pb-[15px] text-[18px] [transition:all_.15s] static overflow-visible [box-shadow:inset_0_3px_#7575ff,_inset_0_-4px_#2b2bd9] hover:border-[#11118f] hover:pt-[14px] hover:pb-[14px] hover:[box-shadow:inset_0_2px_#2b2bd9,_inset_0_-2px_#7575ff]"
                >
                  Contact Us
                </button>
              </Link>
              <div
                type="button"
                className="dark:text-slate-400 text-slate-600 flex flex-row justify-center hover:underline"
              >
                <button className="flex items-center" to="/contact">
                  Learn More{' '}
                  <span className="pl-2 pb-1">
                    <Outlink></Outlink>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="border-b border-slate-200">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({selected}) =>
                      classNames(
                        selected
                          ? 'border-blue-600 dark:text-blue-500 text-blue-600'
                          : 'border-transparent text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 hover:text-slate-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                      )
                    }
                  >
                    Overview
                  </Tab>
                  <Tab
                    className={({selected}) =>
                      classNames(
                        selected
                          ? 'border-blue-600 dark:text-blue-500 text-blue-600'
                          : 'border-transparent text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:border-slate-300 hover:text-slate-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                      )
                    }
                  >
                    FAQ
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">Overview</h3>

                  <div className="prose max-w-none text-slate-500 dark:text-slate-400">
                    {product.overview.value}
                  </div>
                </Tab.Panel>

                <Tab.Panel className="text-sm text-slate-500">
                  <h3 className="sr-only">Frequently Asked Questions</h3>

                  <dl>
                    {faqs.map((faq) => (
                      <Fragment key={faq.question}>
                        <dt className="mt-10 font-medium text-slate-900 dark:text-slate-50">
                          {faq.question}
                        </dt>
                        <dd className="prose mt-2 max-w-none text-slate-600 dark:text-slate-400">
                          <p>{faq.answer}</p>
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      <Timeline></Timeline>
      <Feature></Feature>
    </div>
  );
}

const PRODUCT_QUERY = `#graphql
  query product($handle: String!) {
    product(handle: $handle) {
      overview: metafield(namespace: "custom", key: "overview") {
      value
    }
    deliverable: metafield(namespace: "custom", key: "finaldeliverable") {
      value
    }
    priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
      id
      title
      handle
      vendor
      description
      descriptionHtml
      featuredImage{
        id
        url
        altText
        width
        height
      }
      options {
        name,
        values
      }
    }
  }
`;
