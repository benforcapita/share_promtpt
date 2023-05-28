// call [id] from here and pass to it the id of the post

import BlogPostFull from "./BlogPostFull";


export default function Page({
    params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
    return (
       <BlogPostFull id={String(searchParams?.id || "")}/>
    );
}
