export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "fistDescription",
      title: "First Description",
      type: "string",
    },
    {
      name: "secondDescription",
      title: "Second Description",
      type: "string",
    },
    {
      name: "thirdDescription",
      title: "Third Description",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },

    {
      title: "Birth Date",
      name: "birthdate",
      type: "date",
    },

    {
      title: "Your Age",
      name: "age",
      type: "number",
    },

    {
      name: "study",
      title: "Study",
      type: "string",
    },

    {
      name: "degree",
      title: "Degree",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "phone",
      title: "Phone",
      type: "number",
    },

    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
