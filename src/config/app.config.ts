interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Freelancer'],
  customerRoles: ['Customer'],
  tenantRoles: ['Freelancer', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Gamers Home',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read freelancer profile', 'Edit freelancer profile', 'Read user info', 'Read company info'],
  ownerAbilities: ['Manage freelancer profile', 'Manage user profile', 'Manage company profile'],
  getQuoteUrl: 'https://app.roq.ai/proposal/47fbb8d0-d0a1-47aa-80ba-681ee30d3ec5',
};
