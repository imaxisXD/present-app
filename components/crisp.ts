"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7a478425-2229-44b9-8978-13e7b31fda7e");
  });

  return null;
}

export default CrispChat;