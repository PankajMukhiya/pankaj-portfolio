export default {
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    {
      name: "authorName",
      type: "string",
      title: "Author Name",
    },
    {
      name: "aboutAuthor",
      type: "string",
      title: "About",
    },
    {
      name: "imageAuthor",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
