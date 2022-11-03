import Link from 'next/link';
import articleStyles from '../styles/Article.module.scss';

const BlogItem = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <a className={articleStyles.card}>
        <h3>{post.title} &rarr;</h3>
        <p>{post.excerpt}</p>
      </a>
    </Link>
  );
};

export default BlogItem;
