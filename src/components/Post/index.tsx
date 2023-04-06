import styles from './Post.module.css'

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <Post>
        <img data-testid="campo-imagem"  src={imageUrl} />
        <p data-testid="campo-texto" className={styles['post-text']}> {children} </p>
        <PostComments />
    </Post>
);

export default Post;