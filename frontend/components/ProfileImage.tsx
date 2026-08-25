"use client";
import { useState } from "react";
export function ProfileImage() {
  const [notAdded, setNotAdded] = useState(false);
  return notAdded ? (
    <div className="portrait" />
  ) : (
    <img
      src="/Dave.jpg"
      alt="David Moenga"
      onError={() => setNotAdded(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
}
