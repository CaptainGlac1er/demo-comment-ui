export type Comment = {
  id: number;
  comment: string;
  type: 'COMMENT' | 'EMAIL';
  timestamp: string,
  user: string,
  replies: number

}

export type Email = {
  id: number;
  emailRecipients: string[],
  emailContents: string,
  timestamp: string
}
