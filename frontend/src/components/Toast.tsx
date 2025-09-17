// src/components/Toast.tsx
import { motion } from "framer-motion";
import { CheckCircle, Info, AlertCircle } from "lucide-react";

interface ToastProps {
  message: string;
   type?: "success" | "info" | "error"; 
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({  message, type = "info", onClose }) => {
  // define styles for each type
  const typeStyles = {
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      icon: <Info className="w-5 h-5 text-blue-500" />,
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-800",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    },
  };

  const styles = typeStyles[type];

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`fixed top-6 right-6 w-96 ${styles.bg} border ${styles.border} rounded-lg shadow-md p-4 flex items-start gap-3 z-50`}
    >
      {styles.icon}
      <p
  className={`text-sm ${styles.text}`}
  dangerouslySetInnerHTML={{ __html: message }}
/>

      <button
        onClick={onClose}
        className="ml-auto text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        ✕
      </button>
    </motion.div>
  );
};

export default Toast;
