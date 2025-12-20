
export interface MemberProof {
  id: number;
  name: string;
  profit: string;
  image: string;
  timestamp: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
