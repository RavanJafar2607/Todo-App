import { useState } from "react";

export function useModal() {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const modalToggle = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };
  const editModalToggle = () => {
    setEditModal(true);
  };

  const editClose = () => {
    setEditModal(false);
  };

  return { modalToggle, close, modal, editModalToggle, editClose, editModal };
}
