import type { Schema, Struct } from '@strapi/strapi';

export interface MenuLinkDropdown extends Struct.ComponentSchema {
  collectionName: 'components_menu_link_dropdowns';
  info: {
    displayName: 'Dropdown';
  };
  attributes: {
    sections: Schema.Attribute.Relation<'oneToMany', 'api::section.section'>;
    Title: Schema.Attribute.String;
  };
}

export interface MenuLinkLinks extends Struct.ComponentSchema {
  collectionName: 'components_menu_link_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuLinkMenuButton extends Struct.ComponentSchema {
  collectionName: 'components_menu_link_menu_buttons';
  info: {
    displayName: 'MenuButton';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['Primary', 'Secondary']>;
    Url: Schema.Attribute.String;
  };
}

export interface MenuLinkMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_menu_link_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu-link.dropdown': MenuLinkDropdown;
      'menu-link.links': MenuLinkLinks;
      'menu-link.menu-button': MenuLinkMenuButton;
      'menu-link.menu-link': MenuLinkMenuLink;
    }
  }
}
