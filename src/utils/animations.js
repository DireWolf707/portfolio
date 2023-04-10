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
  x: [-600, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const translateLeft = {
  x: [600, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const translateDown = {
  y: [-600, 0],
  opacity: [0, 1],
  transition: {
    duration: 2,
    type: "spring",
    bounce: 0.1,
  },
}

export const translateUp = {
  y: [600, 0],
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
    duration: 0.75,
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
