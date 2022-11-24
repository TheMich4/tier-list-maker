import Image from "next/image";
import { NextPage } from "next";
import PageContainer from "../../containers";
import { useSession } from "next-auth/react";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  console.log({ sessionData });

  return (
    <PageContainer>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Image
            src={sessionData?.user?.image}
            alt="Avatar"
            height={300}
            width={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{sessionData?.user?.name}</h2>
          <p>{sessionData?.user?.email}</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
