import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <a
      href="https://wa.me/919545136425?text=Hi%20Next%20Level%20Photography%2C%20I%20want%20to%20enquire%20about%20wedding%20photography."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full flex items-center justify-center shadow-2xl animate-pop-in hover:scale-110 transition-transform"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-6 w-6 text-white" fill="white" />
    </a>
  );
}
