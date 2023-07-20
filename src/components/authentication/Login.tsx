import getFormData from '@/shared/functions/getFormData';
import { POST_OPTIONS } from '@/shared/variables/fetchOptions';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

type Props = { toggleForm: () => void };

const Login = ({ toggleForm }: Props) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const loginData = getFormData(e.target);

    const response = await fetch('/api/login', POST_OPTIONS(loginData));
    const data = await response.json();

    if (data.error) {
      setError(data.error);
      return;
    }

    setSuccess('Login riuscito 😊');
    setTimeout(() => router.push('/'), 1000);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>Email</label>
        <input type='email' required name='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' required name='password' />
        {success && <span className='success'>{success}</span>}
        {error && <span className='error'>{error}</span>}
        <button type='submit'>Accedi</button>
      </form>
      <p>
        Non hai un account? Registrati{' '}
        <span className='accent' style={{ cursor: 'pointer' }} onClick={toggleForm}>
          qui
        </span>
      </p>
    </>
  );
};

export default Login;
