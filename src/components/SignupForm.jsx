import { useState } from 'react';
import logo from '@/assets/img/logo.webp';
import FormField from '@/components/FormField';
import PlanSelector from '@/components/PlanSelector';
import { validateSignup } from '@/lib/validation';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  plan: 'Starter',
  password: '',
  confirm: '',
};

export default function SignupForm({ existingUsers, onSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');

  function setField(field, val) {
    setForm((f) => ({ ...f, [field]: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormError('');

    const nextErrors = validateSignup(form, existingUsers);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const user = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim().toLowerCase(),
      plan: form.plan,
      password: form.password,
    };

    onSuccess(user);
    setForm(initialForm);
    setErrors({});
  }

  return (
    <div className="bg-white rounded-3xl border border-ink/5 shadow-sm p-6 sm:p-8">
      <div className="flex justify-center mb-7">
        <img src={logo} alt="Nextel Logo" className="h-10 w-auto object-contain" />
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <h1 className="font-display font-bold text-2xl tracking-tight">Create your account</h1>
        <p className="text-sm text-ink/50 mt-1 mb-6">Get an eSIM line running in under two minutes.</p>

        <div className="space-y-5">
          <FormField
            id="su_name"
            label="Full name"
            placeholder="e.g. Chidera Nwosu"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            error={errors.name}
          />

          <FormField
            id="su_phone"
            label="Phone number"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 08031234471"
            value={form.phone}
            onChange={(e) => setField('phone', e.target.value)}
            error={errors.phone}
          />

          <FormField
            id="su_email"
            label="Email address"
            type="email"
            autoComplete="email"
            placeholder="e.g. chidera@email.com"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            error={errors.email}
          />

          <PlanSelector value={form.plan} onChange={(plan) => setField('plan', plan)} />

          <FormField
            id="su_password"
            label="Password"
            isPassword
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={form.password}
            onChange={(e) => setField('password', e.target.value)}
            error={errors.password}
          />

          <FormField
            id="su_confirm"
            label="Confirm password"
            isPassword
            autoComplete="new-password"
            placeholder="Re-enter your password"
            value={form.confirm}
            onChange={(e) => setField('confirm', e.target.value)}
            error={errors.confirm}
          />
        </div>

        {formError && (
          <p className="text-sm text-danger mt-5 bg-danger/5 border border-danger/20 rounded-lg px-3 py-2">
            {formError}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 bg-brand text-white font-display font-semibold rounded-full py-3.5 hover:bg-brandDeep transition"
        >
          Create account
        </button>
        <p className="text-xs text-ink/40 text-center mt-4">
          By continuing you agree to Nextel Connect's Terms and Privacy Policy.
        </p>
      </form>
    </div>
  );
}
