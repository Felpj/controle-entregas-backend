import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityEntity } from './entities/city.entity';
import { CacheModule as CacheModuleManager } from '@nestjs/cache-manager'; // Importe o CacheModule e atribua um alias
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [
    CacheModuleManager.register({ // Use o alias CacheModuleManager aqui
      ttl: 900000000,
    }),
    CacheModule,
    TypeOrmModule.forFeature([CityEntity]),
  ],
  controllers: [CityController],
  providers: [CityService]
})
export class CityModule {}