export const getAnimationProps = () => {
  return {
    initial: { width: '100%', opacity: 0 },
    animate: { width: '100%', opacity: 1 },
    transition: { delay: 0.2, animation: 'linear' },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, animation: 'linear' },
    },
  };
};
