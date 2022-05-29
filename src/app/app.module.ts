import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from 'src/gallery/gallery.module';
import { SelfpageModule } from 'src/selfpage/selfpage.module';
import { ToDoModule } from 'src/todo/todo.module';
import { iOSModule } from 'src/iOS/iOS.module';
import { ChatModule } from 'src/chat/chat.module';
import { AuthModule } from 'src/auth/auth.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';

@Module({
  imports: [
    AuthModule.forRoot({
      connectionURI: "https://try.supertokens.com",
      appInfo: {
        appName: "apalkovdaniilapp",
        apiDomain: "http://localhost:1488",
        websiteDomain: "http://localhost:1488",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
      },
    }),
    SelfpageModule, 
    GalleryModule, 
    ToDoModule, 
    iOSModule, 
    ChatModule,
    AnalyticsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
