"use client";
import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useEffect, useState } from "react";

interface ModalProviderProps {
  products : ProductWithPrice[]
}
const ModalProvider:React.FC<ModalProviderProps> = ({products}) => {
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
      <SubscribeModal products={products}/>
    </>
  );
};

export default ModalProvider;
