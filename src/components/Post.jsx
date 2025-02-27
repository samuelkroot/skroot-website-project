import styles from '../styles/post.module.css';
import PropTypes from "prop-types";

const Post = ({votes, poster, title, description, category}) => {
    return (
        <div className={`${styles['post']}`}>
            <div></div>
        </div>
    );
}

Post.propTypes = {
    votes: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string
}

export default Post;