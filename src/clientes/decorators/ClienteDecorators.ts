import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const EmpresaLogada = createParamDecorator((_, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();
  return req.empresa;
});

export { EmpresaLogada };
