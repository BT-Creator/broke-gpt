export interface ChatMessage {
  "id": number;
  "userCreated": boolean;
  "message": JSX.Element | undefined;
}
