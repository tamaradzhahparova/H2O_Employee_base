import s from "./EmployeeBase.module.scss";
import SearchPanel from "../SearchPanel/SearchPanel";
import Table from "../Table/Table";
import { employee, EmployeeType } from "../../shared/constants/Employee";
import { getArrayOfEmployees } from "../../shared/helpers/getTableData";
import { useState } from "react";

const EmployeeBase = () => {
  const arr = getArrayOfEmployees(586, employee);
  console.log(arr);

  const [employees, setEmployees] = useState<EmployeeType[]>(arr.slice(0, 7));
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Общая база сотрудников</h1>
      <SearchPanel contactsCount={arr.length} />
      <Table employees={employees} />
    </div>
  );
};

export default EmployeeBase;
