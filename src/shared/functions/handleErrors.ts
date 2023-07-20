export const genericErrors = (error: any) => {
  let message = '';
  for (const key in error.errors) {
    message += error.errors[key] + '. ';
  }
  return message.trim();
};

export const userErrors = (error: any) => {
  let message = genericErrors(error);
  if (error.code === 11000) message = "L'email esiste già";
  return message;
};

export const articleErrors = (error: any) => {
  let message = genericErrors(error);
  if (error.code === 11000) message = "L'articolo esiste già";
  return message;
};

export const categoryErrors = (error: any) => {
  let message = genericErrors(error);
  if (error.code === 11000) message = 'La categoria esiste già';
  return message;
};

export const productIdErrors = (error: any) => {
  let message = genericErrors(error);
  if (message.includes('_id')) message = "L'id non è valido";
  return message;
};

export const verifyUserErrors = (error: any) => {
  let message = '';
  if (error.message.includes('split')) message = 'Il bearer token è mancante';
  return message;
};
