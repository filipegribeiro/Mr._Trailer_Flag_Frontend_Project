/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostForm = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		// Ação DELETE
		if (action === 'delete') {
			onSubmit();
			return;
		}

		// Lógica para CREATE e UPDATE
		let url = 'http://localhost:5000/posts'; //TODO Aqui podes mudar o nome posts por outro na tua lógica

		// Se estiver atualizando, adicionamos o ID à URL
		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			action === 'update' ? await axios.put(url, { title, body }) : await axios.post(url, { title, body });

			navigate('/'); // Navega de volta para o início após a operação
		} catch (error) {
			console.error(`Failed to ${action} post.`, error);
		}
	};

	return (
		<section className='contacts'>
			<div className='contacts__wrapper'>
				<form onSubmit={handleSubmit} className='contacts__form'>
					<h3> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>
					<div className='contacts__input'>
						<label>Title</label>
						<input type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>
					<div className='contacts__input'>
						<label>Body</label>
						<textarea value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>
					<div className='contacts__input'>
						{action === 'delete' ? (
							<>
								<button className='form__btns' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						) : (
							<>
								<button className='form__btns' type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default PostForm;
