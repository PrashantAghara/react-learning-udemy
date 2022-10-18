import { useRouter } from "next/router";
const DetailPage = () => {
  const route = useRouter();
  const newsId = route.query.newsId;
  return (
    <>
      <h1>Detail Pages</h1>
      <h2>{newsId}</h2>
    </>
  );
};

export default DetailPage;
