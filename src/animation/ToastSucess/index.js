import { toast, Bounce } from "react-toastify";

export const notifySuccess = (message) => {
  toast.success(`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
