import Link from "next/link";
function HomePage() {
    return(
        <>
        <h1>Home Page</h1>
        <Link href="posts/first">Click here to go to first post</Link>
        </>
    )
}
export default HomePage;