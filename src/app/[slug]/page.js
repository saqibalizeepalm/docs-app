import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './markdown.module.css';
import  DocuSearch from '../components/docSearch';
const Post = async ({ params }) => {
  const { slug } = params;

  const markdownWithMeta = fs.readFileSync(
    path.join('src/app/docs', slug + '.md'),
    'utf-8',
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div>
      <div>
      <DocuSearch/>
      </div>
      <div  className={styles.markdown}  dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('src/app/docs'));
  const paths = files.map((file) => ({
    slug: file.replace('.md', ''),
  }));

  return paths;
}

export default Post;
