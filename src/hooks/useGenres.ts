import { useQuery } from "@tanstack/react-query"
import genres from "../data/genres"
import APIClient from "../services/api-client"

const apiClient = new APIClient<Genre>('/genres')

import ms from "ms"
import Genre from "../entities/Genre"

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
})

export default useGenres