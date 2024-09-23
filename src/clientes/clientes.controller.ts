import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Cliente } from './domain/cliente';
import { ClientesService } from './clientes.service';
import { EmpresaLogada } from './decorators/ClienteDecorators';
import { CreateClienteDto } from './domain/dto/Create-Cliente-DTO';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { EnderecoService } from './endereco.service';

@ApiTags('Clientes')
@ApiHeader({
  name: 'Clientes',
  description: 'Custom header',
})
@Controller('clientes')
export class ClientesController {
  constructor(
    private readonly clienteService: ClientesService,
    private readonly enderecoService: EnderecoService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Buscar todos os clientes' })
  findAll(@EmpresaLogada() empresa: number): Promise<Cliente[]> {
    console.log('get: ' + empresa);
    return this.clienteService.findAll(empresa);
  }

  @Get('/tipo-endereco')
  findTipoEndereco(@EmpresaLogada() empresa: number) {
    return this.enderecoService.buscarTipoDeEndereco(empresa, 2);
  }

  @Get(':cli_Id/enderecos')
  buscarEnderecosPorCliente(
    //@Body() enderecoDto: CreateEnderecoDto,
    @EmpresaLogada() pEmpresa: number,
    @Param(
      'cli_Id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    pCodCliente: number,
  ) {
    console.log(typeof pCodCliente);
    //if (pCodCliente.valueOf !== 'number')
    //  throw new BadRequestException('Erro ao buscar dados!');

    //return this.enderecoService.findEnderecoByCliente(pEmpresa, pCodCliente);
  }

  @Post()
  async salvarCliente(
    @Body() clienteDTO: CreateClienteDto,
    @EmpresaLogada() empresa: number,
  ) {
    return await this.clienteService.save(empresa, clienteDTO);
  }
}
