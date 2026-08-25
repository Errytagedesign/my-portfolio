import { useState } from 'react';

export const useGlobalHooks = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState<{ [key: string | number]: boolean }>(
    {},
  );
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState({ error: false, errMessage: '' });

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return {
    show,
    setShow,
    loading,
    setLoading,
    errors,
    setErrors,
    open,
    setOpen,
    handleToggle,
    toggle,
    setToggle,
  };
};
