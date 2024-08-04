import axiosInstance from "@/config/axiosConfig";
import { Photo, RandomPhotoDTO } from "@/models/Photo";

export async function fetchRandomPhotos(
  imageCount: number = 20
): Promise<Photo[]> {
  const resp = await axiosInstance.get(`/photos/random?count=${imageCount}`);
  return resp.data.map((data: RandomPhotoDTO) => {
    return Photo.createFromDto(data);
  });
}

export async function fetchUserDetails(username: string) {
  const resp = await axiosInstance.get(
    `/users/${username}/photos?per_page=20&orientation=portrait`
  );
  const photos = resp.data.map((data: RandomPhotoDTO) => {
    const photo = Photo.createFromDto(data);
    return Photo.createFromDto(data);
  });

  const user = photos[0].user;

  return { user, photos };
}
