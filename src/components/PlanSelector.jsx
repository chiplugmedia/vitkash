import { PLANS } from '@/lib/constants';

export default function PlanSelector({ value, onChange }) {
  return (
    <div>
      <span className="block text-sm font-semibold mb-2">Choose a plan</span>
      <div className="grid grid-cols-3 gap-2.5">
        {PLANS.map((plan) => (
          <label key={plan.id} className="relative cursor-pointer">
            <input
              type="radio"
              name="plan"
              value={plan.id}
              checked={value === plan.id}
              onChange={() => onChange(plan.id)}
              className="plan-radio absolute opacity-0 pointer-events-none"
            />
            <div className="plan-card border border-ink/15 rounded-xl px-3 py-3 flex flex-col items-center text-center gap-1.5">
              <span className="plan-dot w-4 h-4 rounded-full border-2 border-ink/25" />
              <span className="font-display font-semibold text-sm">{plan.name}</span>
              <span className="font-mono text-[11px] text-ink/45">
                {plan.price}{plan.cadence === '/week' ? '/wk' : '/mo'}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
