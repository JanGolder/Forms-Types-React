export default function Input({label, id, error, ...props}) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        onChange={(e) => handleInputChange(e, "password")}
        onBlur={() => handleInputBlur("password")}
        id={id}
        {...props}
      />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
