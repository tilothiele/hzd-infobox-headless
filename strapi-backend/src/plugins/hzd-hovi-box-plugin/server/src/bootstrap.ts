import type { Core } from '@strapi/strapi';
import fs from 'fs';
import path from 'path';

const bootstrap = async ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.log.info('🔵 [hzd-hovi-box-plugin] Bootstrap hook aufgerufen!!!');
  const pluginName = 'hzd-hovi-box-plugin';
  const contentTypesDir = path.join(__dirname, '..', 'content-types');


  const contentTypes = ['dog', 'breeder', 'member'];

  for (const contentType of contentTypes) {
    const schemaPath = path.join(contentTypesDir, contentType, 'schema.json');

    if (fs.existsSync(schemaPath)) {
      const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
      const uid = `plugin::${pluginName}.${contentType}`;

      try {
        // Prüfe ob Content-Type bereits existiert (korrekte Strapi v5 API)
        const existingCT = strapi.contentTypes[uid];

        if (!existingCT) {
          // Nutze den Content-Type-Builder Service
          const contentTypeBuilder = strapi
            .plugin('content-type-builder')
            .service('content-types');

          // Erstelle Content-Type
          await contentTypeBuilder.createContentType({
            contentType: {
              ...schema,
              uid,
            },
          });

          strapi.log.info(`✓ Created content type: ${uid}`);
        } else {
          strapi.log.info(`✓ Content type already exists: ${uid}`);
        }
      } catch (error) {
        strapi.log.error(`✗ Error creating content type ${uid}:`, error);
      }
    }
  }
};

export default bootstrap;