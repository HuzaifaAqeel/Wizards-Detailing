export function Field({ label, name, value, onChange, type = 'text', placeholder, required = false }: { label: string; name: string; value: string | number | null | undefined; onChange: (value: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return <div className="field"><label htmlFor={name}>{label}{required && ' *'}</label><input id={name} name={name} type={type} value={value ?? ''} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} data-testid={`input-${name}`} /></div>;
}
