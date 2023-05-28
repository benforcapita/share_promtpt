'use client'

import React, { useEffect, useState } from "react";
import PocketBase from 'pocketbase';

interface BlogPost {
    id: string;
    title: string;
    content: string;
}

const BlogPostFull = ({id}: {id: string}) => {

  const pb = new PocketBase(process.env.url);
    const [post, setPost] = useState<BlogPost | null>(null);
    const fetchPost = async () => {
      const authData = await pb.admins.authWithPassword(process.env.userName || '', process.env.passWord || '');
      const fullPost = await pb.collection('Blog_Collection').getOne(String(id));
      pb.authStore.clear();
      return fullPost;
    };

    useEffect(() => {
      if (id) {
        const fetchPostAndSetState = async () => {
          const fullPost = await fetchPost();
          setPost({
            id: fullPost.id,
            title: String(fullPost.title),
            content: String(fullPost.content),
          });
        };
        fetchPostAndSetState();
      }
    }, [id]);

    if (!post) {
      return <p>Loading...</p>;
    }

    return (
      <div className="container">
        <div key={post.id} className="card">
          <h2 className="text-2xl mb-2 font-bold text-purple-700">{post.title}</h2>
          <div 
              className="prose text-gray-800" 
              dangerouslySetInnerHTML={{__html: post.content}} 
          />
        </div>
      </div>
    );
};

export default BlogPostFull;