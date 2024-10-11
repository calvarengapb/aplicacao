import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @ApiOperation({
    summary: 'endpoint para salvar o cadastro do Cliente',
  })
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @ApiOperation({
    summary: 'endpoint para buscar os dados basicos de todos os Cliente',
  })
  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @ApiOperation({
    summary: 'endpoint para buscar o cadastro detalhado do Cliente pelo Id',
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.clientesService.findOne(+id);
  }

  @ApiOperation({
    summary: 'endpoint usado para atualizar o cadastro do cliente pelo ID',
  })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @ApiOperation({
    summary: 'endpoint usado para deletar o cadastro do cliente pelo ID',
  })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.remove(+id);
  }

  @ApiOperation({
    summary: 'Endpoint para adicionar um endereço a um cliente',
  })
  @Post(':cliId/enderecos')
  async adicionarEndereco(
    @Param('cliId', ParseIntPipe) cliId: number,
    @Body() endereco: CreateEnderecoDto,
  ) {
    return this.clientesService.adicionarEndereco(cliId, endereco);
  }

  @ApiOperation({
    summary: 'Endpoint para alterar um endereço de um cliente',
  })
  @Patch(':cliId/enderecos/:clieId')
  async atualizarEndereco(
    @Param('cliId', ParseIntPipe) cliId: number,
    @Param('clieId', ParseIntPipe) clieId: number,
    @Body() endereco: UpdateEnderecoDto,
  ) {
    return this.clientesService.atualizarEndereco(cliId, clieId, endereco);
  }

  @ApiOperation({
    summary: 'Endpoint para Deletar um endereço de um cliente',
  })
  @Delete(':cliId/enderecos/:clieId')
  async deletarEndereco(
    @Param('cliId', ParseIntPipe) cliId: number,
    @Param('clieId', ParseIntPipe) clieId: number,
  ) {
    return this.clientesService.deletarEndereco(cliId, clieId);
  }
}
