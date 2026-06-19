import { Toaster } from "react-hot-toast";
export default function ToasterModal() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,

        success: {
          style: {
            background: "#22c55e",
            color: "#fff",
          },
        },

        error: {
          style: {
            background: "#ef4444",
            color: "#fff",
          },
        },
      }}
    />
  );
}
