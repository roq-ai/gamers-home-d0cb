const mapping: Record<string, string> = {
  companies: 'company',
  'freelancer-profiles': 'freelancer_profile',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
