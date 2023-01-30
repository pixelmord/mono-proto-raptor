import PocketBase, { Admin } from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
interface AdminAuthResponse {
  [key: string]: any;
  token: string;
  admin: Admin;
}
export const setupPocketbaseClient = async (): Promise<{ pb: PocketBase; authData: AdminAuthResponse }> => {
  const authData = await pb.admins.authWithPassword(
    process.env.NEXT_PUBLIC_POCKETBASE_ADMIN_USER as string,
    process.env.NEXT_PUBLIC_POCKETBASE_PASSWORD as string
  );
  return { pb, authData };
};
export default setupPocketbaseClient;
