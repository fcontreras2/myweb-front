import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

const MarkdownAvatar = (props: ReactMarkdownOptions) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({children}) => (
          <h1 className="font-poppins font-semibold text-gray-700 uppercase">{children}</h1>
        ),
        strong: ({ children }: any) => (
          <span className="font-semibold text-primary-500">{children}</span>
        ),
      }}
      {...props}
    />
  );
};

export default MarkdownAvatar;
