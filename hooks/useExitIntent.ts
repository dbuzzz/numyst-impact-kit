"use client";

import { useEffect, useState } from "react";

export default function useExitIntent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // ✅ GUARANTEED trigger after 3 sec
    const timer = setTimeout(() => {
      console.log("Popup triggered ✅");
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return { showPopup, setShowPopup };
}