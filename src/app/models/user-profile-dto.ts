import { ProfileThumbnailDto } from "./profile-thumbnail-dto";

export class UserProfileDto {
    userName: string;
    firstName: string;
    lastName: string;
    mainPhotoUrl: string | null;
    email: string;
    birthDate: string;
    gender: string;
    friendsCount: number;
    selectedFriends: ProfileThumbnailDto[];
    
    relationshipWithCurrentUser: string | null;
    constructor(init: Partial<UserProfileDto>) {
        Object.assign(this, init);
    }
}
export enum RelationshipStatus {
    None,
    Read,
    Accepted,
    Rejected,
    Dismissed,
    Blocked,
    Canceled
}