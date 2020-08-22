import { useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import { useGetBlogsPage } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';


export default function Home ({blogs, preview}) {
  const [filter, setFilter] = useState({
    view: { list: 1},
    date: { asc: 0}
  });

  /*  loadMore: to load more data
      isLoadingMore: is true whenever we are making a request to fetch data
      isReachingEnd: is true when we loaded all of the data, data is empty (array) */
  
  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogsPage({blogs, filter});
  
  return (
    <PageLayout>
      { preview && <PreviewAlert />}
      <AuthorIntro />
      <FilteringMenu 
        filter = {filter}
        onChange={(option, value) => 
          setFilter({...filter, [option]: value})
        }
        />
      <hr/>
      <Row className="mb-5">
        {pages}
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary">
          {isLoadingMore ? '...': isReachingEnd ? 'No more blogs' : 'More Blogs'}
        </Button>
      </div>
    </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps({preview = false}) {
  console.log('Calling getStaticProps');
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {
      blogs, preview
    },
    revalidate: 1
  }
}