import {Fragment, useState} from 'react';
import {Dialog, Popover, Transition} from '@headlessui/react';
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {ChevronDownIcon} from '@heroicons/react/20/solid';
import {Link} from '@remix-run/react';

const products = [
  {
    name: 'Integration And Apps',
    description: 'Integrate systems with Shopify APIs, SDKs or apps.',
    path: '/products/integration-and-apps',
    icon: ChartPieIcon,
  },
  {
    name: 'Migration Planning',
    description: 'Migrate complex, historical data sets to Shopify.',
    path: '/products/migration-planning',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Checkout Customisation',
    description: 'Technical guidance to customise Shopify checkout.',
    path: '/products/checkout-customisation',
    icon: FingerPrintIcon,
  },
  {
    name: 'Technical Solutioning',
    description: 'Bespoke solutions for technical complexities.',
    path: '/products/technical-solutioning',
    icon: SquaresPlusIcon,
  },
];

const company = [
  {
    name: 'Dev Docs',
    path: 'https://shopify.dev/docs/api',
    description: 'Explore our development docs to guide your launch',
  },
  {
    name: 'Support',
    path: 'https://help.shopify.com/en/support/support-type',
    description: 'Get in touch with our dedicated support team',
  },
  {
    name: 'Changelog',
    path: 'https://changelog.shopify.com/',
    description: 'Stay up to date on the latest product releases',
  },
];

export function Header({header}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logo = header.shop.brand.logo.image.url;

  return (
    <header className="bg-slate-50 dark:bg-slate-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 text-slate-900 items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={logo} alt="shopifyLogo" />
          </Link>
          <span className="pl-4 dark:text-slate-50 font-bold text-lg antialiased tracking-tighter">
            Commerce Catalysts
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 dark:text-slate-50"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({open, close}) => (
              <>
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200">
                  Services
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-slate-400"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    focus
                    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-900"
                  >
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white dark:bg-slate-800 dark:group-hover:bg-slate-400">
                            <item.icon
                              className="h-6 w-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              className="block font-semibold text-slate-900 dark:text-slate-200"
                              to={item.path}
                              onClick={close} // Close the Popover when the link is clicked
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Link
            to="collections/home"
            className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
          >
            Browse
          </Link>
          <Link
            to="contact"
            className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
          >
            Contact
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200">
              Shopify
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-slate-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 ring-1 ring-slate-900/5 shadow-xl dark:bg-slate-900">
                {company.map((item) => (
                  <div
                    key={item.name}
                    className="relative rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-slate-50 dark:bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 dark:shadow-slate-800 dark:shadow-md">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6 dark:text-slate-50"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50 dark:text-slate-50 dark:hover:bg-slate-800"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-slate-600 group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6 ">
                  <a
                    href="/learn"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Contact
                  </a>

                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
