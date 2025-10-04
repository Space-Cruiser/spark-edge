import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageWhyChooseUsItem extends Struct.ComponentSchema {
  collectionName: 'components_homepage_why_choose_us_items';
  info: {
    displayName: 'whyChooseUsItem';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage.why-choose-us-item': HomepageWhyChooseUsItem;
    }
  }
}
