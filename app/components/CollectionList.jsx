import {Link} from '@remix-run/react';

export function CollectionList({products}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-slate-900 dark:text-slate-200">
            Commerce Catalysts
          </h2>
        </div>
        <div className="mt-6 grid gap-x-8 gap-y-8 grid-cols-2 sm:gap-y-10">
          {products.edges.map((product) => (
            <div
              key={product.node.id}
              className="group relative dark:hover:brightness-125 transition dark:duration-500 ease-linear"
            >
              <Link
                to={`/products/${product.node.handle}`}
                key={product.node.id}
              >
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg border bg-slate-100 dark:bg-slate-100/10 dark:border-slate-700 shadow-lg">
                  {product.node.images &&
                  product.node.images.edges.length > 0 ? (
                    <img
                      src={product.node.images.edges[0].node.url}
                      alt={product.node.title}
                      className="px-4 pt-4 object-contain object-center"
                    />
                  ) : (
                    <div className="placeholder-image" />
                  )}
                  <div
                    className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="w-full rounded-md bg-slate-100 bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter border border-gray-300">
                      View Catalyst
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-slate-900 dark:text-slate-200">
                  <h3>
                    <a href="shopify.com">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.node.title}
                    </a>
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  ${Math.floor(product.node.priceRange.maxVariantPrice.amount)}{' '}
                  {product.node.priceRange.maxVariantPrice.currencyCode}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
