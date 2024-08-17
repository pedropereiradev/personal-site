import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

/**
 * Props for `PostContent`.
 */
export type PostContentProps = SliceComponentProps<Content.PostContentSlice>;

/**
 * Component for "PostContent" Slices.
 */
const PostContent = ({ slice }: PostContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="tracking-tight text-muted-foreground dark:text-stone-300"
    >
      <PrismicRichText
        field={slice.primary.post_content}
        components={{
          heading1: ({ children }) => (
            <h1 className="scroll-m-20 text-3xl font-extrabold lg:text-4xl text-stone-700 dark:text-stone-300 mb-3">
              {children}
            </h1>
          ),
          heading3: ({ children }) => (
            <h3 className="scroll-m-20 text-2xl font-semibold text-stone-700 mt-5 mb-3 dark:text-stone-300">
              {children}
            </h3>
          ),
          preformatted: ({ children }) => (
            <pre className="scroll-m-20 text-sm font-mono mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border text-stone-700 bg-stone-100 p-4 dark:bg-zinc-900 dark:text-stone-100">
              {children}
            </pre>
          ),
          oList: ({ children }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
          ),
          list: ({ children }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
          ),
          listItem: ({ children }) => (
            <li className="scroll-m-20 my-1">{children}</li>
          ),
          oListItem: ({ children }) => (
            <li className="scroll-m-20 my-1">{children}</li>
          ),
          paragraph: ({ children }) => <p className="leading-7">{children}</p>,
        }}
      />
    </section>
  );
};

export default PostContent;
