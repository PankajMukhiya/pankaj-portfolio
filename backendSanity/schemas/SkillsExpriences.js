export default {
  name: "skillsExpriences",
  title: "Skills & Experience",
  type: "document",
  fields: [
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
      name: "skillImgGallery",
      title: "Skill Images Gallery",
      type: "array",
      of: [
        {
          name: "technologyImageName",
          title: "Technology Image Name",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [
        {
          title: "Stack Role",
          name: "stackRole",
          type: "object",
          fields: [
            {
              title: "Stack Name",
              name: "stackName",
              type: "string",
            },
            {
              title: "Skill Percentage",
              name: "skillPercentage",
              type: "string",
            },
            {
              title: "Background Color",
              name: "backgrounColor",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "exprience",
      title: "Exprience",
      type: "array",
      of: [
        {
          name: "exprience",
          title: "Exprience",
          type: "object",
          fields: [
            {
              title: "Exprience Stack Name",
              name: "exprienceStackName",
              type: "string",
            },
            {
              title: "Company Name",
              name: "companyName",
              type: "string",
            },
            {
              title: "Exprienced Year",
              name: "expriencedYear",
              type: "string",
            },
            {
              title: "Exprience Description",
              name: "expriencedDescription",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
