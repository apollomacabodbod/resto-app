import { Button } from "src/components/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col px-[2em] bg-orange-400">
        <p className="border border-[#50B498] green">test</p>
        <Button>Destructive</Button>
        <motion.p
          className="font-roboto"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          demo
        </motion.p>
      </div>

      <div className="flex flex-col min-h-screen bg-red-400"></div>
    </>
  );
}
