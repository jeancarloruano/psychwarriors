"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { ImageProps } from "next/image";

const LOADING_DELAY_MS = 400;

export function ImageWithLoading(props: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setShowPlaceholder(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPlaceholder((prev) => (prev ? prev : !isLoaded));
    }, LOADING_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  const { className = "", onLoad, ...rest } = props;
  const fill = "fill" in rest && rest.fill;

  const handleLoadWithCallback = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      handleLoad();
      onLoad?.(e);
    },
    [handleLoad, onLoad]
  );

  const content = (
    <>
      {showPlaceholder && (
        <div
          className="image-loading-placeholder absolute inset-0 z-10"
          aria-hidden
        />
      )}
      <Image
        {...rest}
        className={`transition-opacity duration-300 ${fill ? "object-cover object-center" : ""} ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        onLoad={handleLoadWithCallback}
      />
    </>
  );

  if (fill) return content;

  const w = "width" in rest && typeof rest.width === "number" ? rest.width : undefined;
  const h = "height" in rest && typeof rest.height === "number" ? rest.height : undefined;
  return (
    <span
      className="relative inline-block shrink-0"
      style={w != null && h != null ? { width: w, height: h } : undefined}
    >
      {content}
    </span>
  );
}
