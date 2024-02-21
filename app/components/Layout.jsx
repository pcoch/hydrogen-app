import {Await} from '@remix-run/react';
import {Suspense} from 'react';
import {Footer} from '~/components/Footer';
import {Header} from '~/components/Header';

export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  return (
    <div className="container mx-auto">
      <Header header={header} />
      <main>{children}</main>
      <Suspense>
        <Await resolve={footer}>
          {(footer) => <Footer menu={footer.menu} shop={header.shop} />}
        </Await>
      </Suspense>
    </div>
  );
}
