export class User {
  public bio: string;
  public id: string;
  public name: Name;
  public profileImagePath: string;
  public location: string;
  public instagramUsername: string;
  public totalLikes: number;
  public totalPhotos: number;
  public username: string;

  constructor(
    bio: string,
    id: string,
    name: Name,
    profileImagePath: string,
    location: string,
    instagramUsername: string,
    totalLikes: number,
    totalPhotos: number,
    username: string
  ) {
    this.bio = bio;
    this.id = id;
    this.name = name;
    this.profileImagePath = profileImagePath;
    this.location = location;
    this.instagramUsername = instagramUsername;
    this.totalLikes = totalLikes;
    this.totalPhotos = totalPhotos;
    this.username = username;
  }

  public static createFromDto(dto: UserDetailsDTO): User {
    const name = new Name(dto.first_name, dto.last_name);
    return new User(
      dto.bio,
      dto.id,
      name,
      dto.profile_image.large,
      dto.location,
      dto.instagram_username,
      dto.total_likes,
      dto.total_photos,
      dto.username
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
    large: string;
    medium: string;
  };
  total_likes: number;
  total_photos: number;
  username: string;
}

export class Name {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullname() {
    if (this.firstName || this.lastName) {
      return `${this.firstName || ""} ${this.lastName || ""}`;
    } else {
      return "";
    }
  }

  public get initials() {
    const firstInitial = this.firstName?.charAt(0).toUpperCase();
    const lastInitial = this.lastName?.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }
}
