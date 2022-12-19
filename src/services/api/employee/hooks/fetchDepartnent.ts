import { Hook, HookContext } from "@feathersjs/feathers";

export const fetchDepartment = (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const departmentService = context.app.service("/departments");
    const department = await departmentService.get(context.data.deptId);
    if (!department) throw new Error("department not found");
    context.data.department = department;
    return context;
  };
};
