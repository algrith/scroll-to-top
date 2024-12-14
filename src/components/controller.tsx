import { ScrollToTopControllerProps, DefaultControllerProps } from '../types';
import { FC, RefObject, forwardRef, useRef } from 'react';
import useScrollToTop from '../hooks';
import './styles.css';

const ScrollToTopController: FC = forwardRef((props: ScrollToTopControllerProps, ref) => {
  const controllerRef = ref as RefObject<HTMLButtonElement> ?? useRef(null);
  useScrollToTop({ controllerRef });

  return (
    <button className={DefaultControllerProps.CLASSNAME} ref={controllerRef} type="button" id={DefaultControllerProps.ID} {...props}>
		  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
			  <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
		  </svg>
	  </button>
  )
});

ScrollToTopController.displayName = 'ScrollToTopController';

export default ScrollToTopController;