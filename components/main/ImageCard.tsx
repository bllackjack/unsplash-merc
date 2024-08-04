import { Photo } from "@/models/Photo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { IoHeart, IoCloudDownloadOutline, IoEye } from "react-icons/io5";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";

interface ImageCardProps {
  photo: Photo;
}

const ImageCard = ({ photo }: ImageCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-6">
          <Avatar>
            <AvatarImage src={photo.user.profileImagePath} />
            <AvatarFallback>{photo.user.name.initials}</AvatarFallback>
          </Avatar>
          <Link
            href={`/user/${photo.user.username}`}
            className="hover:underline"
          >
            {photo.user.name.getFullname()}
          </Link>
        </CardTitle>
        <CardDescription>{photo.description}</CardDescription>
      </CardHeader>
      <CardContent
        className="relative w-full h-72"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <Image
          src={photo.paths.small}
          alt={photo.description}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
        {showDetails && (
          <div className="absolute inset-0 flex gap-10 items-center justify-evenly bg-black bg-opacity-50 text-white">
            <div className="flex items-center justify-evenly gap-10 bg-slate-950 mt-36 bg-opacity-75 w-full">
              <div>
                <div className="flex items-center gap-1 text-lg">
                  <IoHeart /> {photo.metadata.likes}
                </div>
              </div>
              <div className="flex items-center gap-1 text-lg">
                <IoCloudDownloadOutline /> {photo.metadata.downloads}
              </div>
              <div className="flex items-center gap-1 text-lg">
                <IoEye /> {photo.metadata.views}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <h5 className="hover:underline text-sm">
          <Link href={`/user/${photo.user.username}`}>
            View more by {photo.user.username || photo.user.name.firstName}
          </Link>
        </h5>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
