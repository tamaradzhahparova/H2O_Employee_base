import s from "./EmployeeBase.module.scss";
import SearchPanel from "../SearchPanel/SearchPanel";
import Table from "../Table/Table";
import { employee, EmployeeType } from "../../shared/constants/Employee";
import { getArrayOfEmployees } from "../../shared/helpers/getTableData";
import { useEffect, useState } from "react";
import Pagination from "rc-pagination";

const EmployeeBase = () => {
  const TOTAL_EMPLOYEES_COUNT = 800;
  const arr = getArrayOfEmployees(TOTAL_EMPLOYEES_COUNT, employee);

  const [employees, setEmployees] = useState<EmployeeType[]>(arr.slice(0, 7));
  const [page, setPage] = useState<number>(1);
  const [employeesPerPage, setEmployeesPerPage] = useState<number>(7);

  useEffect(() => {
    const indexOfLastItem = page * employeesPerPage;
    const indexOfFirstItem = indexOfLastItem - employeesPerPage;
    setEmployees(arr.slice(indexOfFirstItem, indexOfLastItem));
  }, [page, employeesPerPage]);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Общая база сотрудников</h1>
      <SearchPanel contactsCount={TOTAL_EMPLOYEES_COUNT} />
      <Table
        employees={employees}
        firstEmployeeNubmer={page * employeesPerPage - employeesPerPage}
      />
      <div className={s.tableFooter}>
        <div>
          {`Показано ${page * employeesPerPage - employeesPerPage + 1} - ${
            page * employeesPerPage
          } из ${TOTAL_EMPLOYEES_COUNT} результатов`}
        </div>
        <Pagination
          onChange={onPageChange}
          current={page}
          showTitle={false}
          jumpPrevIcon="..."
          jumpNextIcon="..."
          total={TOTAL_EMPLOYEES_COUNT}
          className={s.pagination}
        />
        <div>
          Отображать на страницу
          <select
            value={employeesPerPage}
            onChange={(e) => setEmployeesPerPage(Number(e.target.value))}
            className={s.select}
          >
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBase;
