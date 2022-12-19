import { Hook, HookContext } from "@feathersjs/feathers";

export const fetchUpdatedTime = (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    context.data.updatedAt = Date.now();
    return context;
  };
};
