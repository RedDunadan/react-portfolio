
import React, { useState } from 'react';
import './index.scss';


const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Enviando...');
		setTimeout(() => {
			setStatus('¡Correo enviado exitosamente!');
			setForm({ name: '', email: '', message: '' });
		}, 1500);
	};

	return (
		<div className="container contact-page">
			<div className="text-zone">
				<h1>Contacto</h1>
				<p>¿Tienes alguna pregunta, propuesta o quieres saludar? Completa el formulario y te responderé lo antes posible.</p>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label>
						Nombre:
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						Mensaje:
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							required
						/>
					</label>
					<button type="submit">Enviar</button>
				</form>
				{status && <p className="status-message">{status}</p>}
			</div>
		</div>
	);
};

export default Contact;
