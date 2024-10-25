import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const Post = async ({ params }) => {
  const { slug } = params;

  const markdownWithMeta = fs.readFileSync(path.join('src/app/docs', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/app/docs'));
  const paths = files.map(file => ({
    slug: file.replace('.md', ''),
  }));

  return paths;
}

export default Post;
