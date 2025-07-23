"use client";
const Contact = () => {
  console.log("Hey is this in the server or client?");
  return (
    <div>
      <button onClick={() => alert("Button clicked!")}>Button Click</button>
    </div>
  );
};

export default Contact;
