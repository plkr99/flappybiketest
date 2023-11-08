import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ErrorAlert({ text }) {
  return (
    <div
      className="mt-2 flex items-center p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
      role="alert"
    >
      <ExclamationTriangleIcon className="flex-shrink-0 inline w-4 h-4 mr-3" />
      <span className="sr-only">error</span>
      <div>{text}</div>
    </div>
  );
}
