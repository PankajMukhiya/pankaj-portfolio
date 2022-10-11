// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import About from "./About";
import Author from "./Author";
import Blog from "./Blog";
import Contact from "./Contact";
import SkillsExpriences from "./SkillsExpriences";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // add  sanity which you make
    Blog,
    About,
    Author,
    Contact,
    SkillsExpriences,
    Portfolio,
    Resume
  ]),
});
