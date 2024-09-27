import { useQuery } from "react-query";

import axios from "axios";

export const usePostData = ( key, url ) => {
  return useQuery(
    key,
    async () => {
      return await axios.get(url);
    },
    { staleTime: 30000 },
  );
};
