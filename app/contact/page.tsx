"use client";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [data, setData] = useState<{ title: string; body: string } | null>(
    null
  );

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <button onClick={() => alert("Button clicked!")}>Button Click</button>
    </div>
  );
};

export default Contact;
