import Image from "next/image";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function CopyButton({ code }) {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.log("Error al copiar el texto", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => copyToClipboard(code)}
        type="submit"
        className=" bg-ooink py-4 mt-8 px-4 rounded-lg text-black flex items-center justify-center w-full">
        <span>Copy to clipboard</span>
        <Image
          src="/copy.svg"
          alt="upload"
          width={17}
          height={0}
          className="ml-2"
        />
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default CopyButton;
