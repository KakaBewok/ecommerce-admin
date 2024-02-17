"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modal/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //return null to the server side
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
