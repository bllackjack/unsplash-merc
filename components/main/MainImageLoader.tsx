"use client";

import { fetchRandomPhotos } from "@/libs/main";
import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const MainImageLoader = () => {
  // const { data } = useInfiniteQuery({
  //     queryKey: ['randomImages'],
  //     queryFn: () => fetchRandomPhotos(),

  // })

  useEffect(() => {
    fetchRandomPhotos();
  }, []);

  return <div>IMAGE LOADER</div>;
};

export default MainImageLoader;
