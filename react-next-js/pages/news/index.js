import Link from "next/link";
const NewsPage = () => {
  return (
    <>
      <h1>NEWS PAGE</h1>
      <ul>
        <li>
          <Link href="/news/next-js">Next JS</Link>
        </li>
        <li>
          <Link href="/news/react-js">React JS</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
