import type { Schema, Struct } from '@strapi/strapi';

export interface ActionButton extends Struct.ComponentSchema {
  collectionName: 'components_action_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Kind: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface HeroHeroActionButton extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_action_buttons';
  info: {
    displayName: 'HeroActionButton';
  };
  attributes: {
    Kind: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface HeroHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_hero_hero_slides';
  info: {
    displayName: 'HeroSlide';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    HeroActionButton: Schema.Attribute.Component<
      'hero.hero-action-button',
      false
    >;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SubHeading: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menu: Schema.Attribute.Relation<'oneToOne', 'api::menu.menu'>;
    Socials: Schema.Attribute.Component<'legende.social-link', true>;
  };
}

export interface LegendeSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_legende_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    Channel: Schema.Attribute.Enumeration<['twitter', 'facebook', 'youtube']>;
    Url: Schema.Attribute.String;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'MenuItem1';
  };
  attributes: {
    Label: Schema.Attribute.String;
    SubItems: Schema.Attribute.Component<'menu.menu-item2', true>;
    url: Schema.Attribute.String;
  };
}

export interface MenuMenuItem2 extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_item2s';
  info: {
    displayName: 'MenuItem2';
  };
  attributes: {
    Label: Schema.Attribute.String;
    SubItems: Schema.Attribute.Component<'menu.menu-item3', true>;
    Url: Schema.Attribute.String;
  };
}

export interface MenuMenuItem3 extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_item3s';
  info: {
    displayName: 'MenuItem3';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SectionHeroSlideCarousellSection
  extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_slide_carousell_sections';
  info: {
    displayName: 'HeroSlideCarousellSection';
  };
  attributes: {
    HeroSlide: Schema.Attribute.Component<'hero.hero-slide', true>;
  };
}

export interface SectionTeaserButton extends Struct.ComponentSchema {
  collectionName: 'components_section_teaser_buttons';
  info: {
    displayName: 'TeaserButton';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface SectionTeaserCardSection extends Struct.ComponentSchema {
  collectionName: 'components_section_teaser_card_sections';
  info: {
    displayName: 'TeaserCardSection';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeadeing: Schema.Attribute.String;
    TeaserButton: Schema.Attribute.Component<'section.teaser-button', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'action.button': ActionButton;
      'hero.hero-action-button': HeroHeroActionButton;
      'hero.hero-slide': HeroHeroSlide;
      'layout.header': LayoutHeader;
      'legende.social-link': LegendeSocialLink;
      'menu.menu-item': MenuMenuItem;
      'menu.menu-item2': MenuMenuItem2;
      'menu.menu-item3': MenuMenuItem3;
      'section.hero-slide-carousell-section': SectionHeroSlideCarousellSection;
      'section.teaser-button': SectionTeaserButton;
      'section.teaser-card-section': SectionTeaserCardSection;
    }
  }
}
