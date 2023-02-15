import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Go to pages and then refresh <span class="lightning">⚡️</span>
      </h1>

      {/* <Link class="mindblow" href="/useBrowserVisibleTask/">useBrowserVisibleTask (works)</Link>
      <Link class="mindblow" href="/useBrowserVisibleTask/">useClientEffect</Link> */}
      <button class="mindblow" onClick$={() => window.location.href = "/useBrowserVisibleTask"}>useBrowserVisibleTask (works)</button><br />
      <button class="mindblow" style={{background: "red"}} onClick$={() => window.location.href = "/useClientEffect"}>useClientEffect (does not work)</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
