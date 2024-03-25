'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export default function DemoPage() {

  const [routerMessage, setRouterMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const getDemoServerMessage = async () => {
    const response = await axios.get("/api/demo/get-server");
    setServerMessage(response.data.message);
  }

  const getDemoRouterMessage = async () => {
    const response = await axios.get("/api/demo/get-router");
    setRouterMessage(response.data.message);
  }


  useEffect(() => {
    getDemoServerMessage();
    getDemoRouterMessage();
  }, []);

  return (
    <div>
      <p>{serverMessage}</p>
      <p>{routerMessage}</p>
    </div>
  );
}


