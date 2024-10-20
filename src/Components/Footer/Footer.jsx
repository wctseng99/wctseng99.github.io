import React, { useEffect, useState } from "react";

function Footer() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    setLastUpdated(formattedDate);
  }, []);

  return (
    <div className="text-slate-700 dark:text-slate-400 flex">
      <h2 className="py-4 text-sm font-normal tracking-tight me-2">
        <a href="#">©2024 Jim Tseng.</a>
      </h2>
      <p className="py-4 text-sm font-normal tracking-tight">
        Last updated on: {lastUpdated}
      </p>
    </div>
  );
}

export default Footer;
