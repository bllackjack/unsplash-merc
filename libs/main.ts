import axiosInstance from "@/config/axiosConfig";
import { Photo, RandomPhotoDTO } from "@/models/Photo";

export async function fetchRandomPhotos(imageCount: number = 20) {
  const resp = await axiosInstance.get(`/photos/random?count=${imageCount}`);
  return resp.data.map((data: RandomPhotoDTO) => {
    return Photo.createFromDto(data);
  });
}

export function fetchUserDetails(userId: string) {}
