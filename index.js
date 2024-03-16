import Amplify  from './amplify';
import config from './amplify.config';
Amplify.configure(config);

import { uploadData } from './amplify/backend/storage';

try {
  const result = await uploadData({
    key: filename,
    data: file
  }).result;
  console.log('Succeeded: ', result);
} catch (error) {
  console.log('Error : ', error);
}
