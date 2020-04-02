import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const getDeviceConfig = width => {
  if (width < 425) {
    return 1;
  } else if (width >= 425 && width < 768) {
    return 3;
  } else if (width >= 768 && width < 1024) {
    return 6;
  } else if (width >= 1024 && width < 1200) {
    return 8;
  } else if (width >= 1200) {
    return 10;
  }
};

const useSlidesPerScroll = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useSlidesPerScroll;
