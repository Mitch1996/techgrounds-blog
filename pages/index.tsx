import Head from "next/head";
import NoteOperations from "../components/NoteOperations";
import NoteDetails from "../components/NoteDetails";
import { useState } from "react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [ID, setID] = useState(null);
  const getSingleNote = (id: any) => {
    setID(id);
  };
  return (
    <div>
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div>
            <NoteOperations getSingleNote={getSingleNote} />
          </div>
          <div>
            <NoteDetails ID={ID} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
