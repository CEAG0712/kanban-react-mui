import toast from "react-hot-toast";

export const notify = {
  success: (msg) => toast.success(msg),
  error: (err) => toast.error(err),
};
