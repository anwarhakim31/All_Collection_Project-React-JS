const Label = (props) => {
  const { children, id } = props;

  return (
    <label
      htmlFor={id}
      className="block mb-2  text-sm font-medium text-gray-900"
    >
      {children}
    </label>
  );
};

export default Label;
