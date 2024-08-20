import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        private readonly cacheService: CacheService,
    ) {}

    async getAllCitiesByStateId(stateId: number) {

        return this.cacheService.getCache<CityEntity[]>(`state_${stateId}`,
            () => this.cityRepository.find({
                where: {
                    stateId,
                },
            }),
         );
    }
}
