const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  console.log(result);
  return (
    <div>
      {/* <button onClick={() => alert("Button clicked!")}>Button Click</button> */}
    </div>
  );
};

export default Contact;
