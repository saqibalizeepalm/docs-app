// src/app/docs/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Sidebar from '../components/sidBar';
import styles from './markdown.module.css';
import DocuSearch from '../components/docSearch';

const Post = async ({ params }) => {
  const { slug } = params;

  const markdownWithMeta = fs.readFileSync(
    path.join('src/app/docs', slug + '.md'),
    'utf-8',
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const docs = fs.readdirSync(path.join(process.cwd(),'src/app/docs')).filter(file => file.endsWith('.md'))
  .map((file) => ({
    slug: file.replace('.md', ''),
  }));


  return (
    <div style={{ display: 'flex' }} className="w-full  flex h-screen overflow-hidden">
      <Sidebar docs={docs} />
      <div className={styles.markdown} style={{ width: '80%', height:"100vh", overflowY: "auto" }}>
        <DocuSearch />
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          style={{ width: '80%' }}
        />
      </div>
    </div>
  );
};

export async function generateStaticPaths() {
  const files = fs.readdirSync(path.join('src/app/docs'));
  const paths = files.map((file) => ({
    params: { slug: file.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
