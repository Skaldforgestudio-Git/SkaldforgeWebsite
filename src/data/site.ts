/**
 * Global site configuration.
 *
 * SOURCING RULE FOR THIS WHOLE DIRECTORY
 * --------------------------------------
 * Every factual claim carries a `source` note naming where it came from:
 *   GDD   = "Mythbound GDD.docx", Design Document v1.80
 *   ASG   = "Mythbound ASG.pptx", Art Style Guide (slide number given)
 *   TRAILER = Mythbound_FinalTrailerV02.mp4 (timestamp/on-screen text)
 * Anything without a source must not be published. See CONTENT_TODO.md.
 */

export const site = {
  studio: 'Skaldforge',
  game: 'Mythbound',
  title: 'Skaldforge. Makers of Mythbound',
  description:
    'Skaldforge is a game studio building Mythbound, a competitive Norse arena brawler where movement, melee, and godly power collide. Built in Unreal Engine 5.7.',
  // Absolute URL is supplied at build time via astro.config.mjs `site`.
  ogImage: 'assets/social/og-default.jpg',
  locale: 'en_US',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Mythbound', href: '/mythbound' },
  { label: 'Development', href: '/technology' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
] as const;

export type SocialId = 'steam' | 'reddit' | 'x' | 'tiktok' | 'linkedin';

/** A button target used by the Hero and CTA sections. */
export interface Action {
  label: string;
  href: string;
  icon?: SocialId;
}

/** Mythbound's Steam store page. Drives every "Wishlist on Steam" button. */
export const steam = {
  id: 'steam' as SocialId,
  label: 'Steam',
  href: 'https://store.steampowered.com/app/5049770/Mythbound/',
};

export const wishlist: Action = { label: 'Wishlist on Steam', href: steam.href, icon: 'steam' };

/**
 * Only links that genuinely exist may appear here.
 * No placeholder or invented social accounts. See CONTENT_TODO.md #11.
 */
export const socials: { id: SocialId; label: string; handle: string; href: string }[] = [
  { id: 'reddit', label: 'Reddit', handle: 'r/Skaldforge', href: 'https://www.reddit.com/r/Skaldforge/' },
  { id: 'x', label: 'X', handle: '@SkaldforgeMB', href: 'https://x.com/SkaldforgeMB' },
  { id: 'tiktok', label: 'TikTok', handle: '@skaldforgestudio', href: 'https://www.tiktok.com/@skaldforgestudio' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Skaldforge Studio',
    href: 'https://www.linkedin.com/company/skaldforge/posts/',
  },
];

export const contact = {
  email: 'skaldforgestudio@gmail.com' as string | null,
};
