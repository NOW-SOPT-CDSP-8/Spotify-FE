import { useQuery } from '@tanstack/react-query';
import { fetchProfileData } from '../../apis/profile';

const QUERY_KEY_PROFILES = ['profile'];

export const useGetProfile = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: QUERY_KEY_PROFILES,
    queryFn: fetchProfileData,
    staleTime: 60000,
    refetchInterval: 60000,
  });
  return { data, ...restQuery };
};
