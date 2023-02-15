import type { DocumentHead } from '@builder.io/qwik-city';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { component$, useStyles$, useSignal, useClientEffect$, $, useId } from '@builder.io/qwik';
import css from './styles.css';
import { cssAnim, gsapAnim, bg_color, Label } from './styles.css';
import gsap from 'gsap';

export const randomColor = () =>
  // an excellent optimization by @wmertens
  assignInlineVars({
    [bg_color]:
      '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
  });

export default component$(() => {
  const localId = useId();
  useStyles$(css);

  const bgStyle = useSignal(randomColor());

  const newColor = $(() => {
    bgStyle.value = randomColor();
  });

  useClientEffect$(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    tl.to(`#${localId}`, {
      rotate: 359,
      scale: 0.5,
      duration: 2,
      ease: 'none',
    });

    return () => {
      tl?.kill();
    };
  });

  return (<>
    <h1>Refresh Browser</h1>
    <div style={bgStyle.value} onMouseDown$={newColor}>
      <Label key={"A"}>CSS Animation</Label>
      <div key={"B"} class={cssAnim}>CLICK ME!</div>
      <Label key={"C"}>GSAP Animation</Label>
      <div key={"D"} id={localId} class={gsapAnim}>
        CLICK ME!!
      </div>
    </div>
  </>);
});

export const head: DocumentHead = {
  title: 'GSAP',
  meta: [
    { name: 'description', content: "description" },
  ],
};
