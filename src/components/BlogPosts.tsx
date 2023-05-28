
'use client'

import React from 'react';
import { useRouter } from  'next/navigation';
import PocketBase from 'pocketbase';

interface BlogPost {
    id: string;
    title: string;
    content: string;
}

const BlogPosts = () => {
    const pb = new PocketBase(process.env.url);
    const [posts, setPosts] = React.useState<BlogPost[]>([]);
    const router = useRouter();

    const fetchPosts = async () => {
      console.log(process.env.url);
      const authData = await pb.admins.authWithPassword(process.env.userName || '', process.env.passWord || '');
      const record = await pb.collection('Blog_Collection').getFullList();
      const data = await record.map((post) => ({
        id: post.id,
        title: String(post.title),
        content: String(post.content),
      }));
      pb.authStore.clear();
      return data;
    };
  
    React.useEffect(() => {
      const fetchPostsAndSetState = async () => {
        const data = await fetchPosts();
        setPosts(data);
      };
      fetchPostsAndSetState();
    }, []);

    //trim the content to 200 characters

    const trimContent = (content: string) => {
      //the string should not be html so we can use the substring method
      let cleanText = content.replace(/<\/?[^>]+(>|$)/g, "");
      if (cleanText.length > 200) {
        return cleanText.substring(0, 200) + '...';
      }
      return cleanText;
  };

    return (
      <div className="container">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="card" 
            onClick={() =>  router.push(`/posts?id=${post.id}`)}
          >
            <h2>{post.title}</h2>
            <div 
                className="prose text-gray-800" 
                dangerouslySetInnerHTML={{__html: trimContent(post.content)}} 
            />
          </div>
        ))}
      </div>
    );
};

export default BlogPosts;
