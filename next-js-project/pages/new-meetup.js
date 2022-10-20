import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetUpHandler = async (data) => {
    console.log(data);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    console.log(responseData);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Next Meetups</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};

export default NewMeetupPage;
