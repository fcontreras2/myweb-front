import Image from "components/Image";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const MarkdownContent = (props: ReactMarkdownOptions) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }: any) => (
          <h2 className="font-semibold text-2xl">{children}</h2>
        ),
        a: (props) => (
          <a
            {...props}
            target="_blank"
            className="text-primary-300 underline"
          />
        ),
        h4: ({ children }) => (
          <h4 className="font-semibold text-xl">{children}</h4>
        ),
        img: ({ src, alt, ...props }: any) => (
          <div className="w-[769px] h-[300px] relative mt-8">
            <Image
              src={src}
              layout="fill"
              alt={alt}
              {...props}
            />
          </div>
        ),
        code: ({ children }: any) => (
          <SyntaxHighlighter style={vs2015}>{children}</SyntaxHighlighter>
        ),
      }}
      {...props}
    />
  );
};

export default MarkdownContent;
