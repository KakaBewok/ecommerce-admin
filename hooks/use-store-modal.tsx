import { create } from "zustand";

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => {};
  onClose: () => {};
}
