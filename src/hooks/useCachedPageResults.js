import { useEffect, useRef, useState } from 'react';

export const useCachedPageResults = ({ page }) => {
  const cachedResults = useRef(new Map());
  const [currentCachedResult, setCurrentCachedResult] = useState(undefined);

  const cacheResult = (newResult) => {
    const cachedResultKey = page.toString();
    cachedResults.current.set(cachedResultKey, newResult);
  };

  useEffect(() => {
    const cachedResultKey = page.toString();
    const responseDataBasedOnPage = cachedResults.current.get(cachedResultKey);

    setCurrentCachedResult(responseDataBasedOnPage);
  }, [page]);

  return {
    currentCachedResult,
    cacheResult,
  };
};
