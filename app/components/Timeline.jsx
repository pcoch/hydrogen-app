import ChevronRight from '../assets/icons/ChevronRight';

const timeline = [
  {
    name: 'Discovery',
    description:
      'Our Launch Engineering team work with you to define the project scope and key outcomes. Includes 1-2 hour initial consult call.',
    date: 'Week 1',
  },
  {
    name: 'Analysis',
    description:
      "We analyse your requirements and leverage Shopify's internal knowledgebase, expertise and product roadmap to develop a tailored 'best in class' solution.",
    date: 'Week 2',
  },
  {
    name: 'Recommendations',
    description:
      'Tailored solutions are delivered to your team in a clear documented format. Recommended solutions are presented to your team via a call with Q&A.',
    date: 'Week 3',
  },
  {
    name: 'Ship',
    description:
      'Your team implement the recommended solutions. Our Launch Engineering teams are here to provide guidance along the way.',
    date: 'Week 4',
  },
];

export default function Timeline() {
  return (
    <div className="dark:bg-slate-900 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center pb-10">
          <h1 className="dark:text-slate-100 text-2xl font-bold">
            Engagement Timeline
          </h1>
          <ChevronRight></ChevronRight>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time className="flex items-center text-sm font-semibold leading-6 text-blue-600 dark:text-blue-500">
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full dark:bg-slate-100/10 bg-slate-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-slate-900 dark:text-slate-300">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
