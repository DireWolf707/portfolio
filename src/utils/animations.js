export const wolfAnimation = {
  y: [-16, 16],
  transition: {
    type: "tween",
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
    duration: 1.2,
  },
}

export const translateRight = {
  x: [-280, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const translateRightVariant = {
  initial: {
    x: -280,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.1,
    },
  },
}

export const translateLeft = {
  x: [280, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const translateLeftVariant = {
  initial: {
    x: 280,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.1,
    },
  },
}

export const translateDown = {
  y: [-280, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const translateUp = {
  y: [280, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const blurOut = {
  opacity: [0, 1],
  transition: {
    duration: 1,
  },
}

export const blurOutVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export const scaleUp = {
  scale: [0, 1],
  transition: {
    duration: 1,
  },
}

export const scaleUpVariant = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

export const scaleBlurUp = {
  scale: [0, 1],
  opacity: [0, 1],
  transition: {
    duration: 1,
  },
}

export const scaleBlurUpVariant = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

// export const heightAnimation = {
//   height: [0, "auto"],
//   transition: {
//     duration: 2,
//     delay: 0.2, //
//   },
// }

export const stagerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

export const delayChildren = {
  animate: {
    transition: {
      delayChildren: 0.5,
    },
  },
}
