export enum UserTypes {
  LDAP = 'LDAP',
  local = 'Локальная запись',
}

export interface IUserLabel {
  text: string;
}

export interface IUser {
  login: string | null;
  password: string | null;
  type: UserTypes | null;
  label: string | IUserLabel[] | null;
}

export interface IUserWithId extends IUser {
  id: string;
}

export type TUser = {
  [key: string]: IUser;
};
