export const SITE = {
  name: 'escoffier-fleet-kit',
  tagline: 'One theme, every site. A fleet that never drifts.',
  seoTitle: 'escoffier-fleet-kit - shared theme and version sync for the site fleet',
  subtitle: 'Part of the Brigade fleet from Escoffier Labs',
  description:
    'escoffier-fleet-kit keeps the Escoffier Labs website fleet looking the same and staying current from one place: one OG card template rendered into every site, version sync from each tool’s latest release, and hands-off publishing that commits and pushes only the repos that actually changed.',
  metaDescription:
    'Shared theme and routine maintenance for the Escoffier Labs website fleet: one OG card template, version sync, and idempotent hands-off publishing.',
  url: 'https://fleet-kit.escoffierlabs.dev',
  image: '/og-card.png',
  install: 'git clone https://github.com/escoffier-labs/escoffier-fleet-kit',
  version: '',
};

export const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Scripts', href: '#commands' },
  { label: 'Links', href: '#links' },
];

export const EXTERNAL = {
  github: 'https://github.com/escoffier-labs/escoffier-fleet-kit',
  stargazers: 'https://github.com/escoffier-labs/escoffier-fleet-kit/stargazers',
  // Live shadcn-styled GitHub stars badge (shieldcn.dev). Two modes, swapped to match the theme toggle.
  starsBadgeDark: 'https://shieldcn.dev/github/stars/escoffier-labs/escoffier-fleet-kit.svg?variant=secondary&mode=dark',
  starsBadgeLight: 'https://shieldcn.dev/github/stars/escoffier-labs/escoffier-fleet-kit.svg?variant=secondary&mode=light',
  releases: 'https://github.com/escoffier-labs/escoffier-fleet-kit',
  changelog: 'https://github.com/escoffier-labs/escoffier-fleet-kit/blob/main/CHANGELOG.md',
  readme: 'https://github.com/escoffier-labs/escoffier-fleet-kit/blob/main/README.md',
  escoffier: 'https://escoffierlabs.dev',
  brigade: 'https://brigade.tools',
  cookbook: 'https://escoffierlabs.dev/cookbook',
};
