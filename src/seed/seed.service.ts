import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios
  // create(createSeedDto: CreateSeedDto) {
  //   return 'This action adds a new seed';
  // }

  async executeSEED() {
    const {data} = await this.axios.get<PokeResponse>(`https://pokeapi.co/api/v2/pokemon?limit=650`)
    
    data.results({name, url}) =>

    return data.results;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} seed`;
  // }

  // update(id: number, updateSeedDto: UpdateSeedDto) {
  //   return `This action updates a #${id} seed`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} seed`;
  // }
}
