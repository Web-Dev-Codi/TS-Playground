interface JsonPosts {
    id: number;
    title: string;
    body: string;
}

interface PostCardProps {
    post: JsonPosts;
}