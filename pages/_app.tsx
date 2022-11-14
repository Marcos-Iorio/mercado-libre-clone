import "../styles/globals.css";
import type { AppProps } from "next/app";

import Wrapper from "../components/wrapper/Wrapper";

import { useState, useEffect, useCallback } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Modal from "../components/Modal/Modal";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [showModal, setShowModal] = useState(true);

  const hour = 1;

  const now = new Date().getTime();

  const closeModal = () => {
    setShowModal(false);
    saveToLocalStorage(false);
    setTimer();
  };

  const setTimer = () => {
    localStorage.setItem("timeLeft", JSON.stringify(now));
  };

  const saveToLocalStorage = useCallback((state: boolean) => {
    localStorage.setItem("modal", JSON.stringify(state));
  }, []);

  useEffect(() => {
    const modalState = JSON.parse(localStorage.getItem("modal") || "null");
    const setupTime = JSON.parse(localStorage.getItem("timeLeft") || "null");

    if (modalState === false) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    if (setupTime === null) {
      return;
    } else {
      if (now - setupTime > hour * 60 * 60 * 1000) {
        localStorage.clear();
        setShowModal(true);
        localStorage.setItem("timeLeft", JSON.stringify(now));
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Modal show={showModal} onClose={closeModal} />
      <Wrapper>
        <Component {...pageProps} />
        <Footer />
      </Wrapper>
    </QueryClientProvider>
  );
}

export default MyApp;
