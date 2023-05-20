import { toast } from "react-toastify";

export const REGEX =
  /^([a-zA-Z0-9_.+-])+(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const TOAST_DISMISS = (dismiss) => {
  toast.dismiss();
};

export const TOAST_LOADING = () => {
  const load = toast.loading("Please Wait...", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  setTimeout(() => {
    toast.dismiss(load);
  }, 1000);
};

export const TOAST_SUCCESS = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const TOAST_ERROR = (msg) => {
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const TOAST_WARN = (msg) => {
  toast.warn(msg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// export const SWAL_FIRE = async (attr) => {
//   const result = await Swal.fire(attr)

//   return result
// };

export const emailValidation = (email) => {
  const isallEmailvalid = REGEX.test(email.trim());
  if (isallEmailvalid) return true;
  return false;
};
