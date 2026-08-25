import Pillarsalt from './Pillarsalt';
import Jupita from './Jupita';
import Microverse from './Microverse';

/** Query-string key the active role is mirrored into, e.g. `?role=jupita`. */
export const ROLE_PARAM = 'role';

export const roles = [
  { slug: 'pillarsalt', label: 'Pillarsalt' },
  { slug: 'jupita', label: 'Jupita' },
  { slug: 'microverse', label: 'Microverse' },
] as const;

export type RoleSlug = (typeof roles)[number]['slug'];

export const defaultRole: RoleSlug = roles[0].slug;

/** Narrows an arbitrary query value to a known role, falling back to the first. */
export function toRoleSlug(value: string | null | undefined): RoleSlug {
  return roles.some((role) => role.slug === value)
    ? (value as RoleSlug)
    : defaultRole;
}

/**
 * The switch is exhaustive over RoleSlug, so adding a role to `roles` without
 * handling it here is a compile error rather than a blank panel.
 */
export function renderRole(slug: RoleSlug) {
  switch (slug) {
    case 'pillarsalt':
      return <Pillarsalt />;
    case 'jupita':
      return <Jupita />;
    case 'microverse':
      return <Microverse />;
  }
}
