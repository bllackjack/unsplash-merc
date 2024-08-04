"use client";

import { fetchUserDetails } from "@/libs/main";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { IoArrowBackCircle, IoLogoInstagram } from "react-icons/io5";
import { User } from "@/models/User";
import { Photo } from "@/models/Photo";
import Image from "next/image";
import Link from "next/link";

const UserPage = ({ userId }: { userId: string }) => {
  const { data, isLoading, error } = useQuery<{ user: User; photos: Photo[] }>({
    queryKey: ["user", userId],
    queryFn: () => fetchUserDetails(userId),
  });

  const user = data?.user;
  const photos = data?.photos;

  if (error || (!isLoading && !user)) {
    return (
      <div>
        <Link href="/" className="mb-10 ">
          <IoArrowBackCircle size={50} />
        </Link>
        <h1 className="mt-10">
          Oops! We ran into error while fetching the user details, please try
          again later
        </h1>
      </div>
    );
  }

  if (!user) {
    return <Skeleton className="h-[500px] w-[700px]" />;
  }

  return (
    <div>
      <Link href="/" className="mb-10 ">
        <IoArrowBackCircle size={50} />
      </Link>
      <div className="flex mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{user.name.getFullname()}</CardTitle>
            <CardDescription>{user.bio}</CardDescription>
          </CardHeader>
          <CardContent className="relative w-full h-72">
            <Image
              src={user.profileImagePath}
              alt={user.bio}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex gap-10 items-center justify-evenly bg-black bg-opacity-50 text-white">
              <div className="flex items-center justify-evenly gap-10 bg-slate-950 mt-36 bg-opacity-75 w-full"></div>
            </div>
          </CardContent>
          <CardFooter className="flex text-xl mt-3 gap-2 items-center justify-evenly">
            <div className="flex text-sm mt-3 gap-2 items-center">
              <IoLogoInstagram /> {user.instagramUsername || user.username}
            </div>
            <div className="flex text-sm mt-3 gap-2 items-center">
              Total Photos: {user.totalPhotos}
            </div>
            <div className="flex text-sm mt-3 gap-2 items-center">
              Total Likes: {user.totalLikes}
            </div>
          </CardFooter>
        </Card>
        <div className="w-96"> </div>
      </div>
      <div className="mt-44 flex flex-wrap gap-3">
        {photos?.map((photo) => {
          return (
            <div key={photo.id}>
              <Card>
                <Image
                  src={photo.paths.thumbnail}
                  alt={photo.slug}
                  height={300}
                  width={300}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserPage;
