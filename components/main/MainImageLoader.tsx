"use client";

import { fetchRandomPhotos } from "@/libs/main";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Photo } from "@/models/Photo";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import { Skeleton } from "../ui/skeleton";
import ImageCard from "./ImageCard";

const MAX_ALLOWED_REFRESHES = 20;

const MainImageLoader = () => {
  const currentRefreshes = useRef(1);

  const { data, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery<
    Photo[]
  >({
    queryKey: ["randomImages"],
    queryFn: () => fetchRandomPhotos(),
    getNextPageParam: () => currentRefreshes.current < MAX_ALLOWED_REFRESHES,
    initialPageParam: undefined,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      currentRefreshes.current++;
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (status === "pending") {
    return (
      <div>
        <Skeleton className="h-[300px] w-[550px] mb-5" />
        <Skeleton className="h-[300px] w-[550px] mb-5" />
        <Skeleton className="h-[300px] w-[550px] mb-5" />
        <Skeleton className="h-[300px] w-[550px] mb-5" />
        <Skeleton className="h-[300px] w-[550px] mb-5" />
      </div>
    );
  }

  if (status === "error") {
    return <div>Error loading data</div>;
  }

  const photos = data?.pages.flat() ?? [];

  return (
    <div>
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="mb-10">
            <ImageCard photo={photo} />
          </div>
        );
      })}
      <div ref={ref} style={{ height: "20px" }}>
        {isFetchingNextPage ? "Loading more..." : ""}
      </div>
    </div>
  );
};

export default MainImageLoader;
