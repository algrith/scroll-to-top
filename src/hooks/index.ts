import { DefaultControllerProps, UseScrollToTopProps } from '../types';
import { useCallback, useEffect, useRef } from 'react';
import { ScrollToTopErrors } from '../utils';

const useScrollToTop = (props: UseScrollToTopProps) => {
  const scrollToTop = () => scroll({ behavior, top });
  const controller = useRef<HTMLElement>(null);
  const {
    selector = `#${DefaultControllerProps.ID}`,
    hideControllerAt = 200,
    behavior = 'smooth',
    display = 'flex',
    controllerRef,
    top = 0
  } = props ?? {};
  
  const toggleController = useCallback(() => {
    if (!controller.current) return;
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    controller.current.style.display = scrollPosition > hideControllerAt ? display : 'none';
  }, [hideControllerAt, display]);

  const setController = useCallback(() => {
    if (controllerRef?.current) controller.current = controllerRef.current;
    else if (selector) controller.current = document.querySelector(selector);
    
    if (!controller.current) {
      console.error(ScrollToTopErrors.ControllerNotFound());
    }
    
    return controller.current;
  }, [controllerRef, selector]);

  const checkErrors = useCallback(() => {
    if (typeof display !== 'string') {
      console.error(ScrollToTopErrors.InvalidDisplay(display));
    }
  }, [display]);
  
  useEffect(() => {
    const controller = setController();
    checkErrors();

    if (controller) {
      window.addEventListener('scroll', toggleController);
      controller.addEventListener('click', scrollToTop);

      return () => {
        controller.removeEventListener('click', scrollToTop);
        window.removeEventListener(
          'scroll',
          toggleController
        );
      }
    }
	}, []);

  return scrollToTop;
};

export default useScrollToTop;