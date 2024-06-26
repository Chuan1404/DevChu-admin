import { Route, Routes } from "react-router-dom";
import {
  Auth,
  Chat,
  EmployeeCreate,
  FileCreate,
  FileList,
  FileExtract,
  Mail,
  Statistic,
  User
} from "./route";
import Dashboard from "./route/Dashboard";
import { Title } from "./components";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Title title="Trang chủ"><Dashboard /></Title>} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/user/">
        <Route path="employee" element={<Title title={"Quản lý nhân viên"}><User role="ROLE_EDITOR" /></Title>} />
        <Route path="customer" element={<Title title={"Quản lý khách hàng"}><User role="ROLE_CUSTOMER" /></Title>} />
        <Route path="create" element={<Title title={"Thêm nhân viên"}><EmployeeCreate /></Title>} />
      </Route>

      {/* <Route path="/employee/">
        <Route path="create" element={<EmployeeCreate />} />
      </Route> */}
      <Route path="/file/">
        <Route path="create" element={<FileCreate />} />
        <Route path="list" element={<FileList />} />
        <Route path="extract" element={<FileExtract />} />
      </Route>
      <Route path="/mail" element={<Mail />} />
      <Route path="/statistic" element={<Statistic />} />
      <Route path="/auth" element={<Title title="Đăng nhập"><Auth /></Title>} />
      <Route path="/*" element={<>Not found</>} />
    </Routes>
  );
}
