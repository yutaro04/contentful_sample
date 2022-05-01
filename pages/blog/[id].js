import { client } from '../../libs/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import styles from '../styles/Home.module.scss';

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <img src={blog.fields.main_images[0].fields.file.url} />
      <h1 className={styles.title}>{blog.fields.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div>{documentToReactComponents(blog.fields.content,{
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: node => (
            <video
              src={'https:' + node.data.target.fields.file.url}
              width={400}
              height={300}
            />
          )
        }
      })}</div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.getEntries({ content_type: "post" });

  const paths = data.items.map((content) => `/blog/${content.sys.id}`);
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const id = context.id;
  
  const data = await client.getEntries({ content_type: "post" });

  return {
    props: {
      blog: data.items[0],
    },
  };
};