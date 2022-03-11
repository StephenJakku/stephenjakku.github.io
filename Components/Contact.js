function Contact({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center h-full ${bgColor} items-center`}
      ref={refer}
    >
      <p className="text-white">Contact</p>
    </div>
  );
}

export default Contact;
