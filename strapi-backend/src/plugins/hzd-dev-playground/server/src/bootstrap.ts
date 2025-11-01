import type { Core } from '@strapi/strapi';

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.log.info('🔵 Bootstrap hook aufgerufen!');
};

export default bootstrap;
