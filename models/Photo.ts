import { User, UserDetailsDTO } from "./User";

export class Photo {
  public id: string;
  public description: string;
  public color: string;
  public metadata: Metadata;
  public dimensions: Dimensions;
  public paths: ImagePaths;
  public user: User;
  public slug: string;

  constructor(
    id: string,
    description: string,
    color: string,
    metadata: Metadata,
    dimensions: Dimensions,
    paths: ImagePaths,
    user: User,
    slug: string
  ) {
    this.id = id;
    this.description = description;
    this.color = color;
    this.metadata = metadata;
    this.dimensions = dimensions;
    this.paths = paths;
    this.user = user;
    this.slug = slug;
  }

  public static createFromDto(dto: RandomPhotoDTO) {
    return new Photo(
      dto.id,
      dto.alt_description,
      dto.color,
      {
        downloads: dto.downloads,
        views: dto.views,
        likes: dto.likes,
      },
      { height: dto.height, width: dto.width },
      {
        thumbnail: dto.urls.thumb,
        small: dto.urls.small,
        full: dto.urls.full,
      },
      User.createFromDto(dto.user),
      dto.slug
    );
  }
}

export interface RandomPhotoDTO {
  id: string;
  alt_description: string;
  color: string;
  downloads: number;
  height: number;
  width: number;
  likes: number;
  links: {
    download: string;
  };
  slug: string;
  user: UserDetailsDTO;
  views: number;
  urls: {
    full: string;
    raw: string;
    small_s3: string;
    thumb: string;
    small: string;
  };
}

interface Metadata {
  downloads: number;
  likes: number;
  views: number;
}

interface Dimensions {
  height: number;
  width: number;
}

interface ImagePaths {
  thumbnail: string;
  small: string;
  full: string;
}
