import { UserProfile } from './UserProfile';

export interface UserDetails {
  token: string;
  emailAddress: string;
  userProfile: UserProfile | null | undefined;
}
