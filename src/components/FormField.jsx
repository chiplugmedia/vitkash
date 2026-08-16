import { useState } from 'react';

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
  inputMode,
  isPassword = false,
}) {
  const [visible, setVisible] = useState(false);
  const inputType = isPassword ? (visible ? 'text' : 'password') : type;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1.5">
        {label}
      </label>
      <div className={isPassword ? 'relative' : undefined}>
        <input
          id={id}
          name={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition ${
            isPassword ? 'pr-11' : ''
          } ${error ? 'border-danger' : 'border-ink/15'}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink text-xs font-semibold"
          >
            {visible ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-danger mt-1.5">{error}</p>}
    </div>
  );
}
