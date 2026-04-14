import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    // 1. Name (required)
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    // 2. Slug (auto-generated from name)
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    // 3. SEO Title
    {
      name: 'seoTitle',
      label: 'SEO Title',
      type: 'text',
    },
    // 4. Meta Description
    {
      name: 'metaDescription',
      label: 'Meta Description',
      type: 'text',
      admin: {
        description: 'A summary of the blog post that appears on blog post grid',
      },
    },
    // 5. Release Date (required)
    {
      name: 'releaseDate',
      label: 'Release Date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'MMM d, yyyy',
        },
      },
    },
    // 6. Categories (multi-reference to Blog Categories)
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'blog-categories',
      hasMany: true,
      admin: {
        description: 'Select multiple categories to tag this blog post',
      },
    },
    // 7. Post Introduction (rich text)
    {
      name: 'postIntroduction',
      label: 'Post Introduction',
      type: 'richText',
      admin: {
        description: 'Sits above the blog\'s key highlights and the body',
      },
    },
    // 8. Post Key Takeaways (rich text)
    {
      name: 'postKeyTakeaways',
      label: 'Post Key Takeaways',
      type: 'richText',
      admin: {
        description: 'Bullet points block under the Post Introduction',
      },
    },
    // 9. Post Body (rich text)
    {
      name: 'postBody',
      label: 'Post Body',
      type: 'richText',
    },
    // 10. Reading Time
    {
      name: 'readingTime',
      label: 'Reading Time',
      type: 'number',
      admin: {
        description: 'How long it would take to read (in minutes)',
        step: 1,
      },
    },
    // 11. Main Image
    {
      name: 'mainImage',
      label: 'Main Image',
      type: 'upload',
      relationTo: 'media',
    },
    // 12. Thumbnail Image
    {
      name: 'thumbnailImage',
      label: 'Thumbnail Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Smaller version of main image for the blog post grid',
      },
    },
    // 13. Featured (switch)
    {
      name: 'featured',
      label: 'Call To Action Featured?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'If checked, post is full-width with a Pardot Form CTA block',
        position: 'sidebar',
      },
    },
    // 14. Color
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Hex color value (e.g. #FF5500)',
      },
    },
    // 15. Alt text for featured image
    {
      name: 'altTextForFeaturedImage',
      label: 'Alt Text for Featured Image',
      type: 'text',
    },
    // 16. Social Media Copy
    {
      name: 'socialMediaCopy',
      label: 'Social Media Copy',
      type: 'textarea',
    },
    // 17. Social Media Image
    {
      name: 'socialMediaImage',
      label: 'Social Media Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
