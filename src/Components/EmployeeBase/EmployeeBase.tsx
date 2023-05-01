import s from "./EmployeeBase.module.scss";
import SearchPanel from "../SearchPanel/SearchPanel";
import Table from "../Table/Table";

const EmployeeBase = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Общая база сотрудников</h1>
      <SearchPanel contactsCount={2567} />
      <Table />
    </div>
  );
};

export default EmployeeBase;
