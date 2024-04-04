import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// 리액트쿼리는 서버상태를 관리하는데 유용한 라이브러리
// 데이터뿐만 아니라 isLoading과 같은 값도 받을 수 있다.
// 리액트 쿼리 대표적인 기능
// useQuery 훅
// useQuery는 컴포넌트가 시작할 때 바로 실행된다.(실행시점설정가능)
// useQuery는 받아온 데이터를 캐시에 저장함 ->
// posts 라는 이름의 api를 호출 할 때 기존에 저장되어 있는 캐시정보를 먼저 보여주니까
// 로딩을 안 보여줘도 되면서 유저 경험적으로 더 좋아지게 됨 !
// api호출은 캐시가 있어도 진행을 함 !! 로딩 대신에 캐시된 데이터를 미리 보여주는 것일 뿐
// 뒤에서는 api 호출 작업을 진행한다. api 호출이 완료가 되면 다시 캐시를 업데이트 함
// == > 캐시는 새로운 데이터가 오면 계속 업데이트가 되고 있음
// 캐시 수명 조절하는 옵션 gcTime

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
    gcTime: 3000,
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
