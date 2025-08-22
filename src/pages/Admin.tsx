import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardStats } from "@/components/admin/DashboardStats";

const Admin = () => {
  return (
    <AdminLayout currentPage="Dashboard">
      <DashboardStats />
    </AdminLayout>
  );
};

export default Admin;