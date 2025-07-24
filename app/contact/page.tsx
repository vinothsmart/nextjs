import Button from "./button";

const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  console.log(result);
  return (
    <div>
      <Button />
    </div>
  );
};

export default Contact;
