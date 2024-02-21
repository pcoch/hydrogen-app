import {
  BoltIcon,
  CheckBadgeIcon,
  LightBulbIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Expertise Advantage',
    description:
      'Decades of commerce and technical expertise to ensure you launch on time.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Time to Solution.',
    description:
      "Don't let technical challenges slow you down. Our services are designed to provide fast and efficient solutions, minimising launch delays.",
    icon: BoltIcon,
  },
  {
    name: 'Strategic Insights',
    description:
      "Insight into Shopify's product roadmap empowers you to make informed, long-term technical decisions.",
    icon: LightBulbIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                Commerce Catalysts
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                Launch Your Store Faster
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-500">
                Leverage Shopify&apos;s Launch Engineering team to remove
                technical roadblocks so you can launch sooner.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 dark:text-slate-400 text-slate-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-slate-800 dark:text-slate-300">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-slate-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="dark:border dark:border-slate-800 relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden rounded-tl-xl bg-slate-900 ring-1 ring-white/10">
                  <div className="flex bg-slate-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-slate-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        Catalyst.js
                      </div>
                      <div className="border-r border-slate-600/10 px-4 py-2">
                        Shopify.js
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    <pre
                      className="text-[0.8125rem] leading-6 text-slate-300 bg-none"
                      style={{tabSize: 2}}
                    >
                      <code className="bg-transparent">
                        <br></br>
                        {`import { `}
                        <span className="text-[#7dd3fc]">app</span>
                        {` } from `}
                        <span className="text-emerald-300">
                          &apos;shopify&apos;
                        </span>
                        <br></br>
                        {`import { `}
                        <span className="text-[#7dd3fc]">toolkit</span>
                        {` } from `}
                        <span className="text-emerald-300">
                          &apos;shopify&apos;
                        </span>
                        <br></br>
                        <br></br>

                        <span className="text-blue-400">function Example</span>
                        {`() {`}
                        <br></br>
                        {`  const [`}
                        <span className="text-[#7dd3fc]">enabled</span>
                        {`, `}
                        <span className="text-[#7dd3fc]">setEnabled</span>
                        {`] = useState(`}
                        <span className="text-[#7dd3fc]">true</span>
                        {`)`}
                        <br></br>
                        <br></br>
                        {`  return (`}
                        <br></br>
                        {`    <`}
                        <span className="text-blue-400">form </span>
                        {`action="/`}
                        <span className="text-emerald-300">
                          notification-settings
                        </span>
                        {`" method="`}
                        <span className="text-emerald-300">post</span>
                        {`">`}
                        <br></br>
                        {`      <`}
                        <span className="text-blue-400">Checkout </span>
                        {`accelerate={`}
                        <span className="text-[#7dd3fc]">enabled</span>
                        {`} onChange={`}
                        <span className="text-[#7dd3fc]">setEnabled</span>
                        {`}`}
                        <br></br>
                        <span className="text-gray-600">{`        {/* ... */}`}</span>
                        <br></br>
                        {`      </`}
                        <span className="text-blue-400">Checkout</span>
                        {`>`}
                        <br></br>
                        {`    </`}
                        <span className="text-blue-400">form</span>
                        {`>`}
                        <br></br>
                        {`   )`}
                        <br></br>
                        {`}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
