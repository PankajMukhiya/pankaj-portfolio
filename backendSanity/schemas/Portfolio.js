export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectPreviewLink",
      title: "Project Preview Link",
      type: "string",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "string",
    },
    {
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
    {
      name: "important",
      title: "Important",
      type: "boolean",
    },
  ],
};
