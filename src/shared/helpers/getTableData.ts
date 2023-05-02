import { EmployeeType } from "../constants/Employee";

export const getArrayOfEmployees = (count: number, obj: EmployeeType) => {
  const result = [];

  for (let i = 0; i < count; i++) {
    result.push({ ...obj, id: Math.floor(Math.random() * 10000) });
  }
  return result;
};
