import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  console.log('register', strapi);
  strapi.log.info('🟢 [hzd-hovi-box-plugin] Register hook aufgerufen!');
  // register phase
};

export default register;