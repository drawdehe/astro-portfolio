import rss from '@astrojs/rss';

export async function get(context) {
  return rss({
    title: 'My Blog',
    description: 'A collection of my blog posts',
    site: context.site,
    items: await context.collection('blog').map(post => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.date,
    })),
  });
}