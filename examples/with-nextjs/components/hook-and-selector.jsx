import { useScrollToTop } from '@algrith/scroll-to-top';

const ScrollToTopWithHookAndSelector = () => {
  useScrollToTop({ selector: `#scroll-to-top` });

	return (
    <div>
      <h1>Using Hook and Selector</h1>
      <button id="scroll-to-top" type="button">Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopWithHookAndSelector;