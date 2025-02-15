import { Module } from "@nestjs/common";
import { CountriesController } from "./countries.controller";
import { CountriesService } from "./countries.service";

@Module({
  imports: [],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
