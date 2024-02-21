import {ChevronRightIcon} from '@heroicons/react/20/solid';
import {Link} from '@remix-run/react';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-50 dark:bg-slate-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link to="/collections/home" className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-- text-blue-600 ring-1 ring-inset ring-blue-600/10">
                Shopify Launch
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span className="text-slate-600 dark:text-slate-400">
                  See Catalysts
                </span>
                <ChevronRightIcon
                  className="h-5 w-5 text-slate-400 dark:text-slate-200"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Launch on Shopify faster.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Leverage Shopify&apos;s expertise to deliver exceptional customer
            experiences, faster. With Commerce Catalysts, our Launch
            Engineer&apos;s partner with you so you can start selling sooner.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link to={'/collections/home'}>
              <button
                type="button"
                className="flex min-w-full items-center justify-center h-auto text-slate-50 bg-[#4242fc] border-[1.5px] border-[solid] border-[#2525cf] rounded-[6px] ml-0 mr-0 pt-[13px] px-[38px] pb-[15px] text-[18px] [transition:all_.15s] static overflow-visible [box-shadow:inset_0_3px_#7575ff,_inset_0_-4px_#2b2bd9] hover:border-[#11118f] hover:pt-[14px] hover:pb-[14px] hover:[box-shadow:inset_0_2px_#2b2bd9,_inset_0_-2px_#7575ff]"
              >
                Browse Catalysts
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-slate-900/5 dark:bg-slate-500/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:ring-slate-600/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://cdn.shopify.com/s/files/1/0689/2342/4790/files/organizationsettings_Modal_EN-slide1.png?v=1689862529&width=1920"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
