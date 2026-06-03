import { motion } from "framer-motion";

export const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 }
};

export default function SectionWrapper({ id, className = "", children }) {
    return (
        <motion.section
            id={id}
            className={`py-16 sm:py-20 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
}
