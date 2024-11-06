"use client";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //The isMounted check prevents rendering until the component has mounted,
  // which is useful in SSR environments (like Next.js)
  //to ensure that modal-related code only runs on the client side.
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal/>
      <UploadModal/>
    </>
  );
};

export default ModalProvider;
