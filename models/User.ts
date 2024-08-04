export class User {
  public bio: string;
  public id: string;
  public name: Name;
  public profileImagePath: string;
  public location: string;
  public instagramUsername: string;
  public totalLikes: number;
  public totalPhotos: number;

  constructor(
    bio: string,
    id: string,
    name: Name,
    profileImagePath: string,
    location: string,
    instagramUsername: string,
    totalLikes: number,
    totalPhotos: number
  ) {
    this.bio = bio;
    this.id = id;
    this.name = name;
    this.profileImagePath = profileImagePath;
    this.location = location;
    this.instagramUsername = instagramUsername;
    this.totalLikes = totalLikes;
    this.totalPhotos = totalPhotos;
  }

  public static createFromDto(dto: UserDetailsDTO): User {
    const name = new Name(dto.first_name, dto.last_name);
    return new User(
      dto.bio,
      dto.id,
      name,
      dto.profile_image.medium,
      dto.location,
      dto.instagram_username,
      dto.total_likes,
      dto.total_photos
    );
  }
}

export interface UserDetailsDTO {
  bio: string;
  first_name: string;
  id: string;
  instagram_username: string;
  last_name: string;
  location: string;
  profile_image: {
    medium: string;
  };
  total_likes: number;
  total_photos: number;
}

export class Name {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
