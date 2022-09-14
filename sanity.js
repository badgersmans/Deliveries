import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = SanityClient({
    projectId: 'b3pto5sj',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source)

export default sanityClient;