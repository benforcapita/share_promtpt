'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import PocketBase from 'pocketbase';
import {Box, Card, CardContent, Typography} from '@mui/material';

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
        const data = record.map((post) => ({
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

    const trimContent = (content: string) => {
        let cleanText = content.replace(/<\/?[^>]+(>|$)/g, "");
        if (cleanText.length > 200) {
            return cleanText.substring(0, 200) + '...';
        }
        return cleanText;
    };

    return (
        <Box className="container">
            {posts.map((post) => (
                <Card
                    key={post.id}
                    onClick={() => router.push(`/posts/${post.id}`)}
                    sx={{maxWidth: '50wh', margin: 2,cursor:'pointer'}}
                >
                    <CardContent>
                        <Typography variant="h2" component="div" className={'subTitle'}>{post.title}</Typography>
                        <Typography variant="body2" color="text.secondary" className={'paragraph'}>
                            <div
                                className="prose text-gray-800"
                                dangerouslySetInnerHTML={{__html: trimContent(post.content)}}
                            />
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default BlogPosts;