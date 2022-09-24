import Image from 'next/image';


const BlogHeader = ({title, subtitle, coverImage, date, author}) => {
    const [width, height] = coverImage.match(/[^.-]+(?=\.(jpe?g|png|gif|jpeg|webp))/)[0].split("x");
    return (
        <div className="blog-detail-header">
            <p className="lead mb-0">
            <Image
                src={author?.avatar}
                className="rounded-circle mr-3"
                layout='fixed'
                height="50px"
                width="50px"
                alt="avatar"/>
            {/* <img
                src={author?.avatar}
                className="rounded-circle mr-3"
                height="50px"
                width="50px"
                alt="avatar"/> */}
            {author?.name}
            {', '} {date}
            </p>
            <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
            <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
            <Image
                src={coverImage}
                width="910"
                height={910 * height / width}
                alt=""  />
        </div>
    )
}

export default  BlogHeader;