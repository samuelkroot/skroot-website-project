import styles from '../styles/postform.module.css';
import { useState } from 'react';

const PostForm = () => {
    const [data, setData] = useState({
        user: '',
        title: '',
        description: '',
        category: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);
        formData.append('user', data.user.trim());
        formData.append('title', data.title.trim());
        formData.append('description', data.description.trim());
        formData.append('category', data.category.trim());

        try {
            const response = await fetch('TODO', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='title'
                value={data.title}
                placeholder='The question in one sentence:'
                maxLength={120}
            ></input>

            <textarea
                name='description'
                placeholder='Add an extended description...'
                maxLength={1000}
            >
                {data.description}
            </textarea>

            <label htmlFor='category'>Category:</label>
            <select
                name='category'
                id='category'
            >
                <option
                    value={'bug'}
                    selected={data.category === 'bug'}
                >
                    bug
                </option>
                <option
                    value={'crash'}
                    selected={data.category === 'crash'}
                >
                    crash
                </option>
                <option
                    value={'performance'}
                    selected={data.category === 'performance'}
                >
                    performance
                </option>
                <option
                    value={'suggestion'}
                    selected={data.category === 'suggestion'}
                >
                    suggestion
                </option>
                <option
                    value={'feature request'}
                    selected={data.category === 'feature request'}
                >
                    feature request
                </option>
            </select>

            <button
                type='submit'
                disabled={
                    submitting ||
                    data.title === '' ||
                    data.description === '' ||
                    data.category === ''
                }
            >
                Submit
            </button>
        </form>
    );
};

export default PostForm;
