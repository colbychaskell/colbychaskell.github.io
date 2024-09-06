export enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction: Direction, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === Direction.Left ? 100 : direction === Direction.Right ? -100 : 0,
      y: direction === Direction.Up ? 100 : direction === Direction.Down ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction: Direction, type: any, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === Direction.Left ? "-100%" : direction === Direction.Right ? "100%" : 0,
      y: direction === Direction.Up ? "100%" : direction === Direction.Down ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
