
import { useSWRInfinite } from 'swr';
import { getBlogs } from 'actions';


export const useGetBlogsPage = ({filter}) => {

    const resutls = useSWRInfinite(
        (index, previousPageData) => {
            if (index === 0) {
                return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`;
            }

            if (!previousPageData.length) {
                return null;
            }

            return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? 'asc' : 'desc'}`

        },
        getBlogs,
        { persistSize: true}
    )

    let hitEnd = false;
    const { data } = resutls
    if (data) {
        hitEnd = data[data.length - 1].length === 0
    }

    return {...resutls, hitEnd}
}