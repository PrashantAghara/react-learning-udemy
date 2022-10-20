import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>Next Meetups</title>
      </Head>
      <MeetupDetail
        image={props.meetup.image}
        title={props.meetup.title}
        description={props.meetup.description}
        address={props.meetup.address}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://prashant:w5FrbDSPT6u9Ou3J@cluster0.eobih.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://prashant:w5FrbDSPT6u9Ou3J@cluster0.eobih.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  console.log(meetup);
  client.close();
  return {
    props: {
      meetup: {
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetails;
