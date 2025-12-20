
import { MemberProof } from './types';

export const WHATSAPP_NUMBER = "919000000000";
export const VIP_GROUP_LINK = "https://chat.whatsapp.com/JVc7QwMG9wgLWN0i0lJrie";

export const BASE_IMAGES = [
  "https://picsum.photos/seed/fx1/400/711",
  "https://picsum.photos/seed/fx2/400/711",
  "https://picsum.photos/seed/fx3/400/711",
  "https://picsum.photos/seed/fx4/400/711"
];

export const MEMBER_NAMES = [
  "Rahul S.", "Aman V.", "Suresh G.", "Vikram M.", "Priya R.", 
  "Kabir Z.", "Ananya I.", "Rohan D.", "Sanya V.", "Arjun S.", 
  "Meera N.", "Karan B.", "Zara S.", "Advait J.", "Tanvi S.", 
  "Yash A.", "Diya M.", "Reyansh G.", "Ishaan M.", "Aryan K."
];

export const MEMBER_PROFITS = [
  "+$1,420", "+$2,850", "+$980", "+$4,200", "+$3,150", 
  "+$5,600", "+$1,120", "+$2,400", "+$850", "+$7,300", 
  "+$1,920", "+$4,800", "+$1,550", "+$6,100", "+$2,900", 
  "+$3,450", "+$1,280", "+$9,400", "+$2,100", "+$5,200"
];

export const GENERATED_PROOFS: MemberProof[] = MEMBER_NAMES.map((name, i) => ({
  id: i,
  name,
  profit: MEMBER_PROFITS[i],
  image: BASE_IMAGES[i % 4],
  timestamp: "JUST NOW"
}));
