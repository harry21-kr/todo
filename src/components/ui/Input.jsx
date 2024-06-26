const Input = ({ value, placeholder, onChange, width }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: width ?? 160,
        height: 36,
        paddingLeft: 8,
        border: "none",
        borderRadius: 6,
        outline: "none",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        fontSize: 18,
      }}
    />
  );
};

export default Input;
