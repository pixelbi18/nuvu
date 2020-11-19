export interface CardGetRetornoInterface {
  valid?: boolean;
  message?: string;
  data?: CardGetRetornoInterfaceData[];
}

export interface CardGetRetornoInterfaceData {
  id?: number;
  users_id?: number;
  own?: string;
  cvv?: string;
  expiration?: string;
  card_number?: string;
  franchise?: string;
}