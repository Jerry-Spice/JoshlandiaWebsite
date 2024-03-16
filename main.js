import { Amplify } from './aws-amplify';

import amplifyconfig from './amplifyconfiguration.json';


Amplify.configure(amplifyconfig);

import { list } from './aws-amplify/storage';


try {

  const result = await list({

    prefix: 'files/'

  });
  console.log(result);
  var listOfFiles = document.getElementById("listEl");

  listOfFiles.innerHTML = result[0];
} catch (error) {
  console.log("Uh oh");
  console.log(error);

}
