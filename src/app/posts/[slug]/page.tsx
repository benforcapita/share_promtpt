'use client'
import React, {useEffect, useState} from "react";
import { Card, CardContent, Typography, Box } from '@mui/material';
import PocketBase from 'pocketbase';

interface BlogPost {
    id: string;
    title: string;
    content: string;
}

interface BlogPostFullProps {
  id: string;
}

const BlogPostFull: React.FC<BlogPostFullProps> = (props:any) => {
    const slug = props.params.slug;
    const pb = new PocketBase(process.env.url);
    const [post, setPost] = useState<BlogPost | null>(null);
    const fetchPost = async () => {
        await pb.admins.authWithPassword(process.env.userName || '', process.env.passWord || '');
        const fullPost = await pb.collection('Blog_Collection').getOne(String(slug));
        pb.authStore.clear();
        return fullPost;
    };

    useEffect(() => {
        if (slug) {
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
    }, [slug]);

    if (!post) {
        return <Typography variant="body1">Loading...</Typography>;
    }

    return (
        <Box display="flex" justifyContent="center">
            <Card sx={{ maxWidth: 800, my: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {post.title}
                    </Typography>
                    <Box
                        component="div"
                        className="prose text-gray-800"
                        dangerouslySetInnerHTML={{__html: post.content}}
                        sx={{ mt: 2 }}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default BlogPostFull;
