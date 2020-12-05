
import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { getBlogBySlug, getAllBlogs } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { urlFor } from 'lib/api';
import moment from 'moment';
import { useRouter } from 'next/router';

import BlogContent from 'components/BlogContent';
import PreviewAlert from 'components/PreviewAlert';

const BlogDetail = ({blog, preview}) => {
    const router = useRouter();

    if (!router.isFallback && !blog?.slug) {
        return <ErrorPae statusCode="404" />
    }

    if (router.isFallback) {
        return (
        <PageLayout className="blog-detail-page">
            Loading...
        </PageLayout>
        )
    }

    return (
        <PageLayout className="blog-detail-page" pagetitle={blog.title}>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    { preview && <PreviewAlert />}
                <BlogHeader 
                    title={blog.title}
                    subtitle={blog.subtitle}
                    coverImage={urlFor(blog.coverImage).width("1820").url()}
                    author={blog.author}
                    date={moment(blog.date).format('LL')}
                />
                <hr/>
                { blog.content && 
                    <BlogContent content={blog.content} />
                }
                </Col>
            </Row>
        </PageLayout>
    )
}

export async function getStaticProps({params, preview = false, previewData}) {
    const blog = await getBlogBySlug(params.slug, preview);
    return {
        props: {blog, preview},
        revalidate: 1
    }
}

// TODO: Introduce fallback
export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    return {
        paths: blogs?.map(b => ({params: {slug: b.slug}})),
        fallback: true
    }
}

export default BlogDetail;