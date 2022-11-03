import BlogItem from './BlogItem';
import articleStyles from '../styles/Article.module.scss';

const BlogPreview = ({ posts }) => {
  return (
    <div className={articleStyles.grid}>
      {posts.map((post) => (
        <BlogItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogPreview;
