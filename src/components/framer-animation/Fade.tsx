"use client";

import React from "react";
import { motion } from "framer-motion";

export const containerVariantRight = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      stiffness: 0,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const containerVariantLeft = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      stiffness: 0,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const containerVariantTop = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      stiffness: 0,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const containerVariantBottom = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      stiffness: 0,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const FadeMotionRight = ({ props, children }: any) => {
  return (
    <motion.div
      variants={containerVariantRight}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeMotionLeft = ({ props, children }: any) => {
  return (
    <motion.div
      variants={containerVariantLeft}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeMotionTop = ({ props, children }: any) => {
  return (
    <motion.div
      variants={containerVariantTop}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeMotionBottom = ({ props, children }: any) => {
  return (
    <motion.div
      variants={containerVariantBottom}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};
