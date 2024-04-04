import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// 리액트쿼리는 서버상태를 관리하는데 유용한 라이브러리
// 데이터뿐만 아니라 isLoading과 같은 값도 받을 수 있다.
// 리액트 쿼리 대표적인 기능
// useQuery 훅
// useQuery는 컴포넌트가 시작할 때 바로 실행된다.(실행시점설정가능)

const ReactQueryPage = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return axios.get('http://localhost:3004/posts');
    },
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });
  console.log('ddd', data, isLoading);
  console.log('error', isError, error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default ReactQueryPage;
