import { createElement } from "react";
import { useParams } from "react-router-dom";

const generatePage = (pageName) => {
  let component = () => require(`../pages/${pageName}`).default;

  try {
    return createElement(component());
  } catch (error) {}
};

const PageRender = () => {
  const { page, id } = useParams();
  let pageName = id ? `${page}/[id]` : `${page}`;

  return generatePage(pageName);
};

export default PageRender;
