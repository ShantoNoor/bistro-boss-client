import { Helmet } from "react-helmet-async";

const Title = ({ children }) => {
  return (
    <Helmet>
      <title>Bistro Boss | {children}</title>
    </Helmet>
  );
};

export default Title;
