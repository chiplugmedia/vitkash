// ---------------------------------------------------------------
// Plans
// ---------------------------------------------------------------
export const PLANS = [
  {
    id: 'Starter',
    name: 'Starter',
    tagline: 'For light, everyday use',
    price: '₦1,200',
    cadence: '/week',
    priceLabel: '₦1,200 / week',
    features: [
      '1.5GB data',
      '100 mins to any network',
      'Unlimited Nextel-to-Nextel calls',
    ],
    featured: false,
  },
  {
    id: 'Plus',
    name: 'Plus',
    tagline: 'For daily browsing & calls',
    price: '₦3,500',
    cadence: '/month',
    priceLabel: '₦3,500 / month',
    features: [
      '8GB data, rolls over unused',
      '500 mins to any network',
      'Unlimited Nextel-to-Nextel calls',
      'Free SMS bundle',
    ],
    featured: true,
  },
  {
    id: 'Unlimited',
    name: 'Unlimited',
    tagline: 'For power users & hotspotting',
    price: '₦9,000',
    cadence: '/month',
    priceLabel: '₦9,000 / month',
    features: [
      'Unlimited data (fair use)',
      'Unlimited mins to any network',
      'Priority network access',
    ],
    featured: false,
  },
];

// ---------------------------------------------------------------
// Payment details
// ---------------------------------------------------------------
// IMPORTANT: Replace these with your real, verified account details
// before deploying. Every signed-up user is shown this SAME account —
// it is not generated per-user. Do not randomize or fabricate bank
// details; only display an account you actually control.
export const BANK_DETAILS = {
  bankName: 'YOUR BANK NAME',
  accountNumber: '0000000000',
  accountName: 'YOUR BUSINESS ACCOUNT NAME',
};

// ---------------------------------------------------------------
// Support / Telegram
// ---------------------------------------------------------------
export const TELEGRAM_HANDLE = 'nextelconnect_support';
export const TELEGRAM_URL = `https://t.me/${TELEGRAM_HANDLE}`;
export const TELEGRAM_PREFILLED_URL =
  `${TELEGRAM_URL}?text=${encodeURIComponent(
    "Hello Nextel Connect, I have made payment and would like to send my proof of payment. Please activate my line. Thank you!"
  )}`;
