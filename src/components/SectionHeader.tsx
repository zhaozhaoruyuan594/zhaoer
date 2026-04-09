"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h1 className="bg-gradient-to-r from-amber via-pink to-violet bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-lg text-muted md:text-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
