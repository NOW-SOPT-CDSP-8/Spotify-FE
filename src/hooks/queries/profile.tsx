import { useQuery } from '@tanstack/react-query';
import { fetchProfileData } from '../../apis/profile';

export const useGetProfile = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfileData,
    staleTime: 60000,
    refetchInterval: 60000,
  });
  return { data, ...restQuery };
};
