import { useScrollToTop } from '@algrith/scroll-to-top';
import { useRef } from 'react';

const ScrollToTopWithHookAndRef = () => {
  const controllerRef = useRef(null);
  useScrollToTop({ controllerRef });

	return (
    <div>
      <h1>Using Hook and Ref</h1>
      <button ref={controllerRef} type="button">Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopWithHookAndRef;