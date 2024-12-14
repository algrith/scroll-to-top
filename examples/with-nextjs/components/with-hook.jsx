import { useScrollToTop } from '@algrith/scroll-to-top';

const ScrollToTopWithHook = () => {
  const scrollToTop = useScrollToTop();

	return (
    <div>
      <h1>Using Exported Method</h1>
      <button onClick={scrollToTop} type="button">Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopWithHook;