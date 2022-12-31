export interface UserProfileDto {
    userName: string;
    firstName: string;
    lastName: string;
    mainPhotoUrl: string | null;
    email: string;
    birthDate: string;
    gender: string;
    friendsCount: number;
}