"use client";
import Modal from "@/components/Modal";
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
      <Modal 
      title="test"
      description="test"
      isOpen={true}
      onChange={()=>{}}  >
        Test children
      </Modal>
    </>
  );
};

export default ModalProvider;
