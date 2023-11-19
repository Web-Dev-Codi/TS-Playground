interface JsonPosts {
	id: number;
	title: string;
	body: string;
}

interface PostCardProps {
	post: JsonPosts
}

export default function PostCard({ post }: PostCardProps) {
	return (
		<div className="card">
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
}
