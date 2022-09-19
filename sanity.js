import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = SanityClient({
    projectId: '6wzjs1eq',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source)

export default sanityClient;