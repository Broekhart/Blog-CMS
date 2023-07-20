import getFormData from '@/shared/functions/getFormData';
import { POST_OPTIONS } from '@/shared/variables/fetchOptions';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

type Props = { toggleForm: () => void };

const Register = ({ toggleForm }: Props) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const registerData = getFormData(e.target);

    const response = await fetch('/api/register', POST_OPTIONS(registerData));
    const data = await response.json();

    if (data.error) {
      setError(data.error);
      return;
    }

    setSuccess('Registrazione riuscita 💪');
    setTimeout(() => toggleForm(), 1000);
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <label htmlFor='email'>Email</label>
        <input type='email' required name='email' />
        <label htmlFor='name'>Name</label>
        <input type='text' required name='name' />
        <label htmlFor='password'>Password</label>
        <input type='password' required name='password' />
        {success && <span className='success'>{success}</span>}
        {error && <span className='error'>{error}</span>}
        <button>Registrati</button>
      </form>
      <p>
        Torna al{' '}
        <span onClick={toggleForm} className='accent' style={{ cursor: 'pointer' }}>
          login
        </span>
      </p>
    </>
  );
};

export default Register;
