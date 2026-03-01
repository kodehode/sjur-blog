import Image from 'next/image';
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
    types: {
        code: function SerializeCode({node: {language, code, filename}}) {
            return (
                <HighlightCode language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </HighlightCode>
            )
        },
        image: function SerializeImage({node: {asset, alt, position = 'center'}}) {
            const imageWidth = Math.round((500 * asset.metadata.dimensions.width) / asset.metadata.dimensions.height);
            return (
                <div className={`blog-image blog-image-${position}`}>
                    {/* <img src={urlFor(asset).height(300).fit('max').url()} /> */}
                    <Image 
                        src={urlFor(asset).url()} 
                        blurDataURL={asset.metadata.lqip}
                        width={imageWidth}
                        height={500}
                        alt={alt || 'Blog image'} 
                        placeholder="blur"/>
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
}

const BlogContent = ({content}) =>
<BlockContent
    serializers={serializers}
    blocks={content}
/>

export default BlogContent;
