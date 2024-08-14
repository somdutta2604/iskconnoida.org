import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FourZeroFour() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/donate");
  }, [navigate]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </motion.div>
  );
}