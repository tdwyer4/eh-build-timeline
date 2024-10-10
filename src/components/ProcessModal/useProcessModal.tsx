import { useEffect, useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Add overflow hidden to lock background scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow hidden to restore background scroll when modal is closed
      document.body.style.overflow = "auto";
    }

    // Clean up function to ensure scroll is unlocked on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return {
    isOpen,
    toggle,
  };
}
