import { useState } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import CardItem from 'components/CardItem';
import CardItemBlank from 'components/CardItemBlank';
import CardListItem from 'components/CardListItem';
import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';

import { useGetBlogsPage } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

// TODO: Separate into stand alone component
const BlogList = ({data, filter}) => {
  return data.map(page => page.map(blog =>
      !filter.view.list ?
          <Col key={`${blog.slug}-list`} md="9">
          <CardListItem 
              author={blog.author}
              title={blog.title} 
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LL')}
              link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`
              }}/>
          </Col>
          :
          <Col key={blog.slug} md="6" lg="4">
          <CardItem 
              author={blog.author}
              title={blog.title} 
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LL')}
              image={blog.coverImage}
              link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`
              }}
              />
          </Col>
        ))
    }


export default function Home ({blogs, preview}) {
  const [filter, setFilter] = useState({
    view: { list: 1},
    date: { asc: 0}
  });

  /*  loadMore: to load more data
      isLoadingMore: is true whenever we are making a request to fetch data
      isReachingEnd: is true when we loaded all of the data, data is empty (array) */
  
  const {
    data, size, setSize, hitEnd, isValidating
  } = useGetBlogsPage({blogs, filter});
  
  return (
    <PageLayout pagetitle="Home - 7r.no">
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
        <BlogList 
          data={data || [blogs]}
          filter={filter}
        />
        { isValidating &&
          Array(3)
          .fill(0)
          .map((_, i) =>
              !filter.view.list ?
              <Col key={`${i}-list-item`} md="9">
                  <CardListItemBlank />
              </Col>
              :
              <Col key={`${i}-item`} md="6" lg="4">
                  <CardItemBlank />
              </Col>
          )
        }
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size="lg"
          variant="outline-secondary">
          Load more
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