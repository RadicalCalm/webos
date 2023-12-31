import React from "react";
import { useRouter } from "module/Router";

export const HotspotScreen = () => {
  const { goBack, canGoBack } = useRouter();

  return (
    <>
      <h3>Hotspot</h3>
      <button disabled={!canGoBack} onClick={goBack}>
        Go Back
      </button>
    </>
  );
};
