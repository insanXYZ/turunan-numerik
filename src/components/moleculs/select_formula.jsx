export default ({ options, onChange, className }) => {
  return (
    <select
      className={`select ${className}`}
      onChange={(v) => onChange(v.target.value)}
    >
      {options.map((f, i) => (
        <option key={i} value={i}>
          {f.title}
        </option>
      ))}
    </select>
  );
};
