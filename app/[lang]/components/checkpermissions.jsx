"use client";
import { useEffect, useState } from "react";
import TermsConditionsModal from "./modals/terms";
import ErrorModal from "./modals/error";

export default function CheckPermissionsSection({ modal }) {
  const [isTermsConditionsOpen, setTermsConditions] = useState(false);
  const [isGeolocationAllowed, setIsGeolocationAllowed] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  function closeTermsConditionsModal() {
    setTermsConditions(false);
  }
  function closeErrorModal() {
    setErrorMessage(undefined);
  }

  useEffect(() => {
    const termsAccepted = JSON.parse(localStorage.getItem("TermsConditions"));
    if (!termsAccepted) {
      setTermsConditions(true);
      return;
    }
    if (!isGeolocationAllowed || permissionDenied) {
      if ("geolocation" in navigator) {
        setIsGeolocationAllowed(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {},
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              setErrorMessage(modal.geo.blocked);
              setPermissionDenied(true);
            } else {
              setErrorMessage(error.message);
              console.error("Error getting geolocation:", error);
            }
          }
        );
      } else {
        setErrorMessage(modal.geo.notSupported);
        console.error("Geolocation is not available in this browser.");
      }
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isTermsConditionsOpen,
    isGeolocationAllowed,
    permissionDenied,
    setErrorMessage,
  ]);

  return (
    <>
      {isTermsConditionsOpen && (
        <TermsConditionsModal
          modal={modal}
          closeModal={closeTermsConditionsModal}
        />
      )}
      {errorMessage && (
        <ErrorModal
          modal={modal}
          errorMessage={errorMessage}
          closeModal={closeErrorModal}
        />
      )}
    </>
  );
}
