import { Module } from "@nestjs/common";
import { CountriesModule } from "./countries/countries.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),

    CountriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
