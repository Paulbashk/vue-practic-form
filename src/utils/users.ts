import {
  UserTypes,
  type IUser,
  type IUserLabel,
} from '@/interfaces/IUser';

export const userTypes = Object.entries(
  UserTypes
).map(([key, value]) => ({
  name: value,
  value: key,
}));

export const userTypeLDAP = userTypes.find(
  (type) => type.value === 'LDAP'
)?.value;

export const userLabelToArray = (
  label: IUserLabel[] | string | null
) =>
  typeof label === 'string'
    ? label.split(';').map((text) => ({ text }))
    : label;

export const userLabelToString = (
  label: IUserLabel[] | string | null
) =>
  Array.isArray(label)
    ? label.map(({ text }) => text).join(';')
    : label;

export const mapUsersObjectToArrayAndFormated = ([
  key,
  value,
]: [string, IUser]) => {
  const { label, ...other } = value;

  return {
    id: key,
    label: userLabelToString(label),
    ...other,
  };
};
