import {ChatBubbleLeftRightIcon} from '@heroicons/react/24/outline';
import {CTABanner} from '~/components/CTABanner';

export default function Contact() {
  return (
    <div className="isolate bg-slate-50 px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Connect with our team of experienced Launch Engineers
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
            <ChatBubbleLeftRightIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-slate-200">
              Contact Launch Engineering
            </h3>
            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
              Get in touch for a free meeting to discuss your project scope and
              requirements. Email us directly with your project details and we
              will come back to you with the next steps.
            </p>
            <p className="mt-4">
              <a
                href="mailto:plus-launch-consultants@shopify.com"
                className="text-sm font-semibold leading-6 text-blue-600"
              >
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <CTABanner></CTABanner>
    </div>
  );
}
