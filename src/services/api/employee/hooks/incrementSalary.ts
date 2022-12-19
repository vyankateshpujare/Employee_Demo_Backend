import { Hook, HookContext } from "@feathersjs/feathers";

export const incrementSalary = (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const employeeService = context.app.service("/api/employee");
    const employee = await employeeService.get(context.id);
    if (!employee) throw new Error("employee not found");
    context.data.salary = (
      employee.salary +
      (employee.salary / 100) * context.data.percentage
    ).toFixed();

    return context;
  };
};
