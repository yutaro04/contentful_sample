import Link from "next/link";
import { client } from "../libs/client";
import styles from './styles/Home.module.scss';

export default function Home({ blogs}) {
  
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.sys.id} className={styles.blog}>
            <img src={blog.fields.thumbnail.fields.file.url} />
            <Link href={`/blog/${blog.sys.id}`}>
              <a>{blog.fields.title}</a>
            </Link>
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.getEntries({ content_type: "post" });

  return {
    props: {
      blogs: data.items,
    },
  };
};