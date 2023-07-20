export type Form = HTMLInputElement[];

const getFormData = (form: EventTarget) => {
  const formData: Record<string, string> = {};
  if (form) {
    for (const node of form as unknown as Form) {
      const { localName, name, value } = node as HTMLInputElement;
      if (localName === 'input') {
        formData[name] = value;
      }
    }
  }
  return formData;
};

export default getFormData;
