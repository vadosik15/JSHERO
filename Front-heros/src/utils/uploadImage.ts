import axios from 'axios';

export const uploadImage = async (file: File, onSuccess: (imageUrl: string) => void, onError: (error: any) => void) => {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'w1kd1o20');

  try {
    const response = await axios.post('https://api.cloudinary.com/v1_1/df3ai0uih/image/upload', formData);
    const imageUrl = response.data.secure_url;
  
    onSuccess(imageUrl);

  } catch (error) {
    onError(error);
  }
};