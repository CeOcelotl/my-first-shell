import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', //指令路由為根目錄
    loadComponent: () =>
      loadRemoteModule({
        type: 'module', //引入的型別
        remoteEntry: 'http://localhost:4201/remoteEntry.js', //遠端共享的進入點:remoteEntry，產生 JS 的位置
        exposedModule: './AppComponent', // 遠程模組中暴露出來的模組的相對路徑
      }).then((x) => x.AppComponent),//一旦遠程模組加載完畢，將其返回的AppComponent指定為要在當前路由中使用的組件。
  },
];
