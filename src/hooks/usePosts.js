import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPost = (postId) => {
  //const id = queryData.queryKey[1];
  return axios.get(`http://localhost:3004/posts/${postId}`);
};

// 비즈니스로직과 ui부분 분리해서 관리
// 커스텀 훅 연습하기

export const usePostQuery = (postId) => {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: () => fetchPost(postId),
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });
};
