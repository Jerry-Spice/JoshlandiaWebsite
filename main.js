import { uploadData } from 'amplify/backend/storage';

try {
  const result = await uploadData({
    key: filename,
    data: file
  }).result;
  console.log('Succeeded: ', result);
} catch (error) {
  console.log('Error : ', error);
}
