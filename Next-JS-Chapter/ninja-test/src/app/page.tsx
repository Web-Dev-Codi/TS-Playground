import PostCard from "@/components/PostCard";

// Giving the promise a type
interface JsonPosts {
	id: number;
	title: string;
	body: string;
}

const fetchPosts = async (): Promise<JsonPosts[]> => {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/users/1/posts"
	);

	if (!res.ok) {
		console.log("Could not grab the posts");
	}

	return res.json();
};

export default async function Home() {
	const posts = await fetchPosts();

	return (
		<main className="">
			<h2>Home</h2>
			{posts.map((post) => (
				<PostCard
					key={post.id}
					post={post}
				/>
			))}
		</main>
	);
}
