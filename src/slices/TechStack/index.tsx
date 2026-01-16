"use client"

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { isFilled } from "@prismicio/client";
import { motion } from "framer-motion";

/**
 * Props for `TechStack`.
 */
export type TechStackProps = SliceComponentProps<Content.TechStackSlice>;

/**
 * Component for "TechStack" Slices.
 */
const TechStack: FC<TechStackProps> = ({ slice }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        escape: "easeOut",
      },
    },
  };

  return (
    <div className="border-y border-white/5 bg-white/2">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <motion.div
          className="flex flex-wrap justify-between items-center gap-6 text-lg font-medium text-slate-500 uppercase tracking-widest"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {isFilled.group(slice.primary.technologies) &&
            slice.primary.technologies.map((item, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  color: "#ffffff",
                  transition: { duration: 0.2 }
                }}
                className="hover:text-white transition-colors cursor-default"
              >
                {item.name}
              </motion.span>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
