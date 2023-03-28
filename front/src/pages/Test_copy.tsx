import { useEffect } from 'react';
import API from '../store/API';

const Test_copy = () => {
  const apiClient = API();

  const apiRequest = () => {
    apiClient
      .get('api/stores/test')
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <>
      <button onClick={apiRequest}>버튼</button>
    </>
  );
};

export default Test_copy;
